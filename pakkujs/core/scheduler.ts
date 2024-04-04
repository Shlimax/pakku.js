import {WorkerPool} from "./worker_pool";

import {Egress, Ingress, perform_egress, perform_ingress} from "../protocol/interface";
import {DanmuChunk, DanmuClusterOutput, int, LocalizedConfig, MessageStats, MissingData, Stats} from "./types";
import {post_combine} from "./post_combine";

const WORKER_POOL_SIZE = 3;
const MAX_SCHEDULERS_PER_PAGE = 4;

const BADGE_DOWNLOADING = '↓';
const BADGE_PROCESSING = '...';
const BADGE_ERR_NET = 'NET!';
const BADGE_ERR_JS = 'JS!';

function _filter_aslongas<T>(x: Array<T>, fn: (x: T)=>boolean): Array<T> {
    let i = 0;
    while(i<x.length && fn(x[i]))
        i++;
    return x.slice(0, i);
}

class Scheduler {
    ingress: Ingress;
    egresses: Array<[Egress, (resp: any)=>void]>;
    config: LocalizedConfig;

    stats: Stats | MessageStats;
    ongoing_stats: Stats;
    tabid: int;
    start_ts: number;

    chunks_in: Map<int, DanmuChunk>;
    clusters: Map<int, DanmuClusterOutput>;
    chunks_out: Map<int, DanmuChunk>;

    num_chunks: int;
    combine_started: Set<int>;
    finished: boolean;
    pool: WorkerPool;

    constructor(ingress: Ingress, config: LocalizedConfig, tabid: int) {
        this.ingress = ingress;
        this.egresses = [];
        this.config = config;
        this.stats = new MessageStats('message', BADGE_DOWNLOADING, '正在下载弹幕文件').notify(tabid);
        this.ongoing_stats = new Stats();
        this.tabid = tabid;
        this.start_ts = 0;
        this.chunks_in = new Map();
        this.clusters = new Map();
        this.chunks_out = new Map();
        this.num_chunks = 0;
        this.combine_started = new Set();
        this.finished = false;
        this.pool = new WorkerPool(WORKER_POOL_SIZE);
    }

    write_failing_stats(e: Error, badge: string) {
        let msg = `弹幕加载失败 ${e.message}\n\nStacktrace:\n${e.stack}\n\nIngress:\n${this.ingress}`;
        this.stats = new MessageStats('error', badge, msg).notify(this.tabid);

        console.error('pakku scheduler: GOT EXCEPTION', e);
    }

    add_egress(egress: Egress, callback: (resp: any)=>void) {
        console.log('pakku scheduler: route ingress =', this.ingress, 'egress =', egress);
        this.egresses.push([egress, callback]);
        this.try_serve_egress();
    }

    async try_start_combine(segidx: int) {
        if(this.combine_started.has(segidx))
            return; // working or finished

        let chunk = this.chunks_in.get(segidx);
        let next_chunk = this.chunks_in.get(segidx+1);
        if(!chunk || !next_chunk)
            return; // not ready

        this.combine_started.add(segidx);

        let max_next_time = chunk.objs.length ? chunk.objs[chunk.objs.length-1].time_ms + 1000 * this.config.THRESHOLD : 0;
        let next_chunk_filtered = {
            objs: _filter_aslongas(next_chunk.objs, obj => obj.time_ms < max_next_time),
            extra: next_chunk.extra,
        };

        let res: DanmuClusterOutput;
        try {
            res = await this.pool.exec([chunk as DanmuChunk, next_chunk_filtered as DanmuChunk]);
        } catch(e) {
            this.write_failing_stats(e as Error, BADGE_ERR_JS);
            return;
        }

        console.log('pakku scheduler: got combine result', segidx, res.clusters.length);
        this.clusters.set(segidx, res);
        this.ongoing_stats.update_from(res.stats);

        this.try_start_postproc(segidx);
        this.try_start_postproc(segidx+1);
    }

    try_start_postproc(segidx: int) {
        if(this.chunks_out.has(segidx))
            return; // finished

        let clusters = this.clusters.get(segidx);
        let prev_clusters = this.clusters.get(segidx-1);
        if(!clusters || !prev_clusters)
            return; // not ready

        let res;
        try {
            res = post_combine(clusters, prev_clusters, this.ongoing_stats);
        } catch(e) {
            this.write_failing_stats(e as Error, BADGE_ERR_JS);
            return;
        }
        console.log('pakku scheduler: got chunks out', segidx, res.objs.length);
        this.chunks_out.set(segidx, res);

        this.try_serve_egress();
    }

    try_serve_egress() {
        this.egresses = this.egresses.filter(([egress, callback]) => {
            let res = perform_egress(egress, this.num_chunks, this.config.GLOBAL_SWITCH ? this.chunks_out : this.chunks_in);

            if(res===MissingData)
                return true; // keep in queue
            else {
                console.log('pakku scheduler: served egress', egress);
                callback({data: res});
                return false; // remove from queue
            }
        });

        if(this.num_chunks && this.num_chunks===this.chunks_out.size)
            this.cleanup();
    }

    cleanup() {
        if(this.stats.type!=='error') {
            this.ongoing_stats.parse_time_ms = +new Date() - this.start_ts - this.ongoing_stats.download_time_ms;
            this.ongoing_stats.notify(this.tabid, this.config);
            this.stats = this.ongoing_stats;
        }
        this.pool.terminate();
        this.clusters.clear(); // to free some RAM
    }

    async start() {
        this.start_ts = +new Date();
        try {
            await perform_ingress(this.ingress, (idx, chunk) => {
                console.log('pakku scheduler: got ingress chunk', idx, chunk.objs.length);
                chunk.objs.sort((a, b) => a.time_ms - b.time_ms);

                this.chunks_in.set(idx, chunk);
                this.ongoing_stats.num_total_danmu += chunk.objs.length;

                this.try_start_combine(idx);
                this.try_start_combine(idx-1);
            });
        } catch(e) {
            this.write_failing_stats(e as Error, BADGE_ERR_NET);
            return;
        }

        this.num_chunks = this.chunks_in.size;

        this.ongoing_stats.download_time_ms = +new Date() - this.start_ts;
        console.log('pakku scheduler: download finished, total chunks =', this.num_chunks);
        this.stats = new MessageStats('message', BADGE_PROCESSING, '正在处理弹幕').notify(this.tabid);

        this.chunks_in.set(this.num_chunks+1, {objs: [], extra: {}}); // pad a pseudo chunk after the last one for the `next_chunk` arg
        void this.try_start_combine(this.num_chunks);

        this.clusters.set(0, {clusters: [], stats: new Stats()}); // pad a pseudo cluster before the first one for the `prev_clusters` arg
        this.try_start_postproc(1);
    }
}
let schedulers: Array<Scheduler> = [];

function ingress_equals(a: Ingress, b: Ingress): boolean {
    // @ts-ignore
    return Object.keys(a).every(k => a[k] === b[k]);
}

export function handle_task(ingress: Ingress, egress: Egress, callback: (resp: any)=>void, config: LocalizedConfig, tabid: int) {
    for(let scheduler of schedulers)
        if(ingress_equals(scheduler.ingress, ingress)) {
            scheduler.add_egress(egress, callback);
            scheduler.config = config;
            return;
        }

    let scheduler = new Scheduler(ingress, config, tabid);
    scheduler.add_egress(egress, callback);
    void scheduler.start();

    schedulers.push(scheduler);
    if(schedulers.length>MAX_SCHEDULERS_PER_PAGE)
        schedulers.shift();
}