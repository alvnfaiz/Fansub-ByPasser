// ==UserScript==
// @name           Samehada Anti-Safelink
// @namespace      Samehada Anti-Safelink
// @description    Download di Samehada tanpa melewati Iklan || By HideriNime
// @copyright      2017+, HideriNime
// @version        1.0.0
// @homepageURL    https://nyaadevs.tech/
// @icon           https://i.imgur.com/msM09on.png
// @grant          GM_deleteValue
// @grant          GM_getValue
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM.deleteValue
// @grant          GM.getValue
// @grant          GM.openInTab
// @grant          GM.setValue
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// @run-at         document-idle
// @include        http://*samehadaku.net/*
// @include        https://*samehadaku.net/*
// @connect        *
// ==/UserScript==
var _0x39cb=['_utf8_encode','length','charCodeAt','_keyStr','charAt','replace','indexOf','fromCharCode','_utf8_decode','getElementById','encode','output','input','hostname','match','getElementsByTagName','href','http://nyaadevs.tech/samebypass?li=','rel',':::','anonyminized','found_links','innerHTML','split','samehadaku.net','log','ByPassed\x20by\x20:\x20HideriNime'];var _0xb39c=function(a,c){a=a-0x0;var b=_0x39cb[a];return b;};var Base64={'_keyStr':'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=','encode':function(a){var c='';var h,e,f,i,j,g,d;var b=0x0;a=Base64[_0xb39c('0x0')](a);while(b<a[_0xb39c('0x1')]){h=a[_0xb39c('0x2')](b++);e=a[_0xb39c('0x2')](b++);f=a['charCodeAt'](b++);i=h>>0x2;j=(h&0x3)<<0x4|e>>0x4;g=(e&0xf)<<0x2|f>>0x6;d=f&0x3f;if(isNaN(e)){g=d=0x40;}else if(isNaN(f)){d=0x40;}c=c+this[_0xb39c('0x3')][_0xb39c('0x4')](i)+this[_0xb39c('0x3')][_0xb39c('0x4')](j)+this['_keyStr'][_0xb39c('0x4')](g)+this['_keyStr'][_0xb39c('0x4')](d);}return c;},'decode':function(b){var a='';var h,i,j;var g,e,d,f;var c=0x0;b=b[_0xb39c('0x5')](/[^A-Za-z0-9\+\/\=]/g,'');while(c<b['length']){g=this[_0xb39c('0x3')][_0xb39c('0x6')](b[_0xb39c('0x4')](c++));e=this[_0xb39c('0x3')][_0xb39c('0x6')](b[_0xb39c('0x4')](c++));d=this[_0xb39c('0x3')]['indexOf'](b[_0xb39c('0x4')](c++));f=this[_0xb39c('0x3')][_0xb39c('0x6')](b[_0xb39c('0x4')](c++));h=g<<0x2|e>>0x4;i=(e&0xf)<<0x4|d>>0x2;j=(d&0x3)<<0x6|f;a=a+String[_0xb39c('0x7')](h);if(d!=0x40){a=a+String[_0xb39c('0x7')](i);}if(f!=0x40){a=a+String[_0xb39c('0x7')](j);}}a=Base64[_0xb39c('0x8')](a);return a;},'_utf8_encode':function(c){c=c[_0xb39c('0x5')](/\r\n/g,'\x0a');var b='';for(var d=0x0;d<c[_0xb39c('0x1')];d++){var a=c[_0xb39c('0x2')](d);if(a<0x80){b+=String['fromCharCode'](a);}else if(a>0x7f&&a<0x800){b+=String[_0xb39c('0x7')](a>>0x6|0xc0);b+=String[_0xb39c('0x7')](a&0x3f|0x80);}else{b+=String['fromCharCode'](a>>0xc|0xe0);b+=String[_0xb39c('0x7')](a>>0x6&0x3f|0x80);b+=String[_0xb39c('0x7')](a&0x3f|0x80);}}return b;},'_utf8_decode':function(c){var d='';var a=0x0;var b=c1=c2=0x0;while(a<c[_0xb39c('0x1')]){b=c[_0xb39c('0x2')](a);if(b<0x80){d+=String['fromCharCode'](b);a++;}else if(b>0xbf&&b<0xe0){c2=c[_0xb39c('0x2')](a+0x1);d+=String[_0xb39c('0x7')]((b&0x1f)<<0x6|c2&0x3f);a+=0x2;}else{c2=c[_0xb39c('0x2')](a+0x1);c3=c[_0xb39c('0x2')](a+0x2);d+=String[_0xb39c('0x7')]((b&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f);a+=0x3;}}return d;}};var encode=document[_0xb39c('0x9')](_0xb39c('0xa')),decode=document[_0xb39c('0x9')]('decode'),output=document[_0xb39c('0x9')](_0xb39c('0xb')),input=document[_0xb39c('0x9')](_0xb39c('0xc'));var User_ID='';var protected_links='';var a_to_va=0x0;var a_to_vb=0x0;var a_to_vc='';function auto_safelink(){auto_safeconvert();}function auto_safeconvert(){var g=window['location'][_0xb39c('0xd')];if(protected_links!=''&&!protected_links[_0xb39c('0xe')](g)){protected_links+=',\x20'+g;}else if(protected_links==''){protected_links=g;}var b='';var f=new Array();var i=0x0;b=document[_0xb39c('0xf')]('a');a_to_va=b['length'];f=a_to_fa();i=f[_0xb39c('0x1')];var e=![];var d=0x0;var c='';for(var a=0x0;a<a_to_va;a++){e=![];d=0x0;while(e==![]&&d<i){c=b[a][_0xb39c('0x10')];if(c['match'](f[d])||!c||!c[_0xb39c('0xe')]('http')){e=!![];}d++;}if(e==![]){var k=Base64[_0xb39c('0xa')](c);b[a][_0xb39c('0x10')]=_0xb39c('0x11')+k;b[a][_0xb39c('0x12')]='nofollow';a_to_vb++;a_to_vc+=a+_0xb39c('0x13')+b[a]['href']+'\x0a';}}var j=document[_0xb39c('0x9')](_0xb39c('0x14'));var h=document[_0xb39c('0x9')](_0xb39c('0x15'));if(j){j['innerHTML']+=a_to_vb;}if(h){h[_0xb39c('0x16')]+=a_to_va;}}function a_to_fa(){var a=new Array();protected_links=protected_links[_0xb39c('0x5')]('\x20','');a=protected_links[_0xb39c('0x17')](',');return a;}protected_links=_0xb39c('0x18');auto_safelink();console[_0xb39c('0x19')](_0xb39c('0x1a'));
