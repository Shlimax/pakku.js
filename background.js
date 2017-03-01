var TAOLUS={
    '233...': /^23{2,}$/,
    '666...': /^6{3,}$/,
    'FFF...': /^[fF]+$/,
    'hhh...': /^[hH]+$/,
};
var THRESHOLD=15;
var REMOVE_SEEK=true;
var FLASH_NOTIF=true;
var GLOBAL_SWITCH=true;

chrome.notifications.onButtonClicked.addListener(function(notifid,btnindex) {
    if(btnindex==0) // goto settings
        chrome.tabs.create({url: 'http://www.bilibili.com/html/help.html#p'});
    else if(btnindex==1) // ignore
        ;
    else
        throw 'bad index';
    chrome.notifications.clear(notifid);
});

chrome.runtime.onInstalled.addListener(function(details) {
    if(details.reason=='install')
        chrome.notifications.create('//init', {
            type: 'basic',
            iconUrl: chrome.runtime.getURL('assets/logo.png'),
            title: '切换到哔哩哔哩 HTML5 播放器',
            message: '由于技术限制，pakku 不支持过滤 Flash 播放器中的弹幕。如果您仍在使用 Flash 播放器，请切换到 HTML5 版本。',
            contextMessage: 'http://www.bilibili.com/html/help.html#p',
            isClickable: false,
            buttons: [
                {title: '→ 前去设置'},
                {title: '我已经在用 HTML5 播放器了'}
            ]
        });
});

function parse(dom,tabid) {
    function detaolu(text) {
        for(var name in TAOLUS)
            if(TAOLUS[name].test(text))
                return name;
        return text;
    }
    
    function parse_single_danmu(elem) {
        var attr=elem.attributes['p'].value.split(',');
        var txt=elem.childNodes[0].data;
        if(REMOVE_SEEK && attr[1]=='8' && txt.indexOf('Player.seek')!=-1)
            elem.childNodes[0].data='/* player.seek filtered by pakku */';
        return {
            text: detaolu(txt),
            elem: elem,
            time: parseFloat(attr[0])
        }
    }
    
    var danmus=[].slice
        .call(dom.getElementsByTagName('d'))
        .filter(function(elem) {return elem.childNodes.length;})
        .map(parse_single_danmu)
        .sort(function(a,b) {return a.time-b.time;});

    var self,counter=0,hist={}; // text : time, count, danmu
    function iterate(elem) {
        if(hist[elem.text] && elem.time-hist[elem.text].time>THRESHOLD) // outdated
            delete hist[elem.text];
            
        if((self=hist[elem.text])) {
            self.count++;
            self.danmu.elem.childNodes[0].data=self.danmu.text+' [x'+self.count+']';
            return true;
        } else {
            hist[elem.text]={
                count: 1,
                time: elem.time,
                danmu: elem
            };
            return false;
        }
    }
        
    danmus.forEach(function(danmu) {
        if(iterate(danmu)) { // delete same danmu
            danmu.elem.parentNode.removeChild(danmu.elem);
            counter++;
        }
    });
    
    chrome.browserAction.setBadgeText({
        text: ''+counter,
        tabId: tabid
    });
    var serializer=new XMLSerializer();
    return serializer.serializeToString(dom);
}

function load_danmaku(id,tabid) {
    function base64(str) { // from https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    }
    
    chrome.browserAction.setBadgeText({
        text: '...',
        tabId: tabid
    });
    
    var xhr=new XMLHttpRequest();
    xhr.open('get','http://comment.bilibili.com/'+id+'.xml',false);
    xhr.send();
    if(xhr.status===200 && xhr.responseXML) {
        return 'data:text/xml;charset=utf-8;base64,'+base64(parse(xhr.responseXML,tabid));
    } else {
        return null;
    }
}

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    if(!GLOBAL_SWITCH)
        return {cancel: false};
    
    var ret=/:\/\/comment\.bilibili\.com\/(\d+)\.xml$/.exec(details.url);
    if(ret) {
        if(details.type==='xmlhttprequest')
            return {redirectUrl: load_danmaku(ret[1],details.tabId)||details.url};
        else {
            console.log(details);
            if(FLASH_NOTIF)
                chrome.notifications.create(details.url, {
                    type: 'basic',
                    iconUrl: chrome.runtime.getURL('assets/logo.png'),
                    title: '暂不支持 Flash 播放器',
                    message: '请切换到 HTML5 播放器来让 pakku 过滤 AV'+ret[1]+' 中的弹幕。',
                    contextMessage: '（在 pakku 的设置中可以关闭此提醒）',
                    isClickable: false,
                    buttons: [
                        {title: '→ 切换到 HTML5 播放器'},
                        {title: '忽略'}
                    ]
                });
            return {cancel: false};
        }
    }
    else
        return {cancel: false};
}, {urls: ["*://comment.bilibili.com/*.xml"]}, ["blocking"]);