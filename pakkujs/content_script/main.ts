import {url_finder} from "../protocol/urls";
import {handle_proto_view, handle_task, scheduler} from "../core/scheduler";
import {get_config} from "../background/config";
import {get_state, remove_state} from "../background/state";
import {AjaxResponse, BlacklistItem, int, LocalizedConfig} from "../core/types";
import {process_local, userscript_sandbox} from "./sandboxed";
import {ProtobufIngressSeg, ProtobufView} from "../protocol/interface_protobuf";

function get_player_blacklist(): BlacklistItem[] {
    type BpxProfileType = {
        blockList: {
            type: 0 | 1 | 2; // 0 text (case insensitive), 1 regexp (case sensitive), 2 user
            filter: string;
            opened: boolean;
            id: int;
        }[];
        dmSetting: {
            status: boolean;
        };
    };
    try {
        let j = JSON.parse(window.localStorage.getItem('bpx_player_profile')!) as BpxProfileType;
        if(!j) // possibly in another domain
            return [];
        if(!j.dmSetting.status) // blacklist disabled
            return [];

        let ret = (
            j.blockList
                .filter(item=>item.opened && [0, 1].includes(item.type))
                .map(item=>[item.type===1, item.filter] as BlacklistItem)
                .filter(item=>{
                    if(item[0]) {
                        try {
                            new RegExp(item[1]);
                        } catch(e) {
                            return false;
                        }
                    }
                    return true;
                })
        );
        console.log('pakku injected: got player blacklist', ret);
        return ret;
    } catch(e) {
        console.error('pakku injected: cannot get player blacklist', e);
        return [];
    }
}

let tabid: null | int = null;
let unreg_userscript = true;

function get_tabid() {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage({type: 'get_tabid'}, resolve);
    });
}

async function get_local_config(is_pure_env: boolean = false): Promise<LocalizedConfig> {
    if(!tabid) {
        tabid = await get_tabid() as int;

        // storage cleanup
        window.onunload = function() {
            if(unreg_userscript)
                void remove_state([`STATS_${tabid}`, `USERSCRIPT_${tabid}`]);
            else
                void remove_state([`STATS_${tabid}`]);

            // in case of page refresh: clear the badge
            try {
                chrome.runtime.sendMessage({type: 'update_badge', tabid: tabid, text: null})
                    .catch(()=>{});
            } catch(e) {}
        };
    }

    let config = await get_config();
    let state = await get_state();

    let userscript = config.USERSCRIPT;

    if(state[`USERSCRIPT_${tabid}`])
        userscript = (userscript || '') + '\n\n' + state[`USERSCRIPT_${tabid}`];

    return {
        ...config,
        BLACKLIST: (config.READ_PLAYER_BLACKLIST && !is_pure_env) ? get_player_blacklist() : [],
        GLOBAL_SWITCH: state.GLOBAL_SWITCH,
        USERSCRIPT: userscript,
        SKIP_INJECT: is_pure_env,
    };
}

let local_config: null | LocalizedConfig = null;
get_local_config().then((c)=>{
    local_config = c;
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if(msg.type==='ping') {
        sendResponse({error: null});
    }
    else if(msg.type==='refresh') {
        unreg_userscript = false;
        window.location.reload();
    }
    else if(msg.type==='dump_result') {
        let s = scheduler;
        if(!s) {
            sendResponse({
                error: '当前标签没有弹幕处理结果',
            });
        } else {
            s.config = {
                ...s.config,
                GLOBAL_SWITCH: msg.switch,
            };

            s.add_egress(msg.egress, (resp)=>{
                if(!resp)
                    sendResponse({
                        error: `处理结果为 ${resp}`,
                    });
                else if(typeof resp.data === 'string')
                    try {
                        sendResponse({
                            error: null,
                            text: resp.data,
                            ingress: s!.ingress,
                        });
                    } catch(e) {
                        alert(`无法传输弹幕处理结果：\n${(e as Error).message}`);
                    }
                else
                    sendResponse({
                        error: `处理结果为 ${resp.data.constructor.name}`,
                    });
            });
        }
    }
    else if(msg.type==='reload_danmu') {
        local_config = null;
        if(window.reload_danmu_magic)
            window.reload_danmu_magic(msg.key);
    }
    else {
        console.log('pakku injected: unknown chrome message', msg.type);
    }
});

function is_bilibili(origin: string): boolean {
    return origin.endsWith('.bilibili.com') || origin.endsWith('//bilibili.com');
}

let ext_domain = chrome.runtime.getURL('');
if(ext_domain.endsWith('/'))
    ext_domain = ext_domain.slice(0, -1);

function is_proto_view(x: any): x is [ProtobufIngressSeg, ProtobufView] {
    // ts is too weak to inference this, let's add a type guard to teach it
    return x[1].type==='proto_view';
}

window.addEventListener('message', async function(event) {
    if(is_bilibili(event.origin) && event.data.type=='pakku_ping') {
        event.source!.postMessage({
            type: 'pakku_pong',
        }, event.origin as any);
    }
    else if(is_bilibili(event.origin) && event.data.type=='pakku_ajax_request') {
        console.log('pakku injected: got ajax request', event.data.url);
        let sendResponse = (resp: AjaxResponse) => {
            event.source!.postMessage({
                type: 'pakku_ajax_response',
                url: event.data.url,
                resp: resp,
            }, event.origin as any);
        };

        url_finder.protoapi_img_url = window.localStorage.getItem('wbi_img_url');
        url_finder.protoapi_sub_url = window.localStorage.getItem('wbi_sub_url');

        let url = url_finder.find(event.data.url);
        if(!url) {
            console.log('pakku injected: url not matched:', event.data.url);
            sendResponse(null);
            return;
        }

        if(!local_config)
            local_config = await get_local_config();

        if(
            !local_config.GLOBAL_SWITCH &&
            !(url[0].type==='proto_seg' && url[0].is_magicreload) // still process magic reload requests to avoid HTTP 400
        ) {
            console.log('pakku injected: SKIPPED because global switch off');
            sendResponse(null);
            return;
        }

        if(is_proto_view(url)) {
            handle_proto_view(url[0], event.data.url, local_config, tabid as int)
                .then((ab)=>{
                    sendResponse({
                        data: new Uint8Array(ab),
                    });
                });
            return;
        }

        handle_task(url[0], url[1], sendResponse, local_config, tabid as int);
    }
    else if(event.origin===ext_domain && event.data.type==='pakku_userscript_sandbox_request') {
        let res = await userscript_sandbox(event.data.script);
        event.source!.postMessage({
            type: 'pakku_userscript_sandbox_result',
            result: res,
        }, event.origin as any);
    }
    else if(event.origin===ext_domain && event.data.type==='pakku_process_local_request') {
        let config = await get_local_config(true);
        config.GLOBAL_SWITCH = true;

        let res = await process_local(event.data.ingress, event.data.egress, config, tabid as int);
        event.source!.postMessage({
            type: 'pakku_process_local_result',
            result: res,
        }, event.origin as any);
    }
},false);