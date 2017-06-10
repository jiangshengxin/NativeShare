!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["nativeShare.js"]=t():e["nativeShare.js"]=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";function i(){}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n=document.getElementsByTagName("script")[0],r=document.createElement("script");r.src=e,r.async=!0,n.parentNode.insertBefore(r,n),r.onload=t}function o(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n}n.d(t,"a",function(){return d}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return h}),n.d(t,"f",function(){return v}),n.d(t,"h",function(){return r}),n.d(t,"g",function(){return o});var a=window.navigator.userAgent,u=/(iPad).*OS\s([\d_]+)/.test(a),c=/(iPod)(.*OS\s([\d_]+))?/.test(a),s=!u&&/(iPhone\sOS)\s([\d_]+)/.test(a),l=u||c||s,f=/(Android);?[\s\/]+([\d.]+)?/.test(a),d=/micromessenger/i.test(a),g=/MQQBrowser/i.test(a)&&!d,h=/UCBrowser/i.test(a),v=/mobile.*baidubrowser/i.test(a)},function(e,t,n){"use strict";var i=document.querySelector("meta[name=description]"),r=document.querySelector("link[rel*=icon]"),o="from https://github.com/fa-ge/NativeShare",a="";i&&(o=i.getAttribute("content")),r&&(a=r.getAttribute("href")),t.a={link:location.href,title:document.title,desc:o,icon:a,from:""}},function(e,t,n){"use strict";function i(){return n.i(u.g)({},s)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.i(u.g)(s,e)}function o(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];r(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),window._flyflowNative.exec("bd_utils","shareWebPage",JSON.stringify({title:s.title,content:s.desc,landurl:s.link,imageurl:s.icon,shareSource:s.from}),"")}function a(){}var u=n(0),c=n(1),s=n.i(u.g)({},c.a);t.a={setShareData:r,getShareData:i,callShare:o,init:a}},function(e,t,n){"use strict";function i(){return n.i(u.g)({},s)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.i(u.g)(s,e)}function o(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];throw r(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),new Error("the browser do not support share!")}function a(){}var u=n(0),c=n(1),s=n.i(u.g)({},c.a);t.a={setShareData:r,getShareData:i,callShare:o,init:a}},function(e,t,n){"use strict";function i(){return n.i(u.g)({},s)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.i(u.g)(s,e)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";r(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});var t=l[e];window.browser.app.share({title:s.title,description:s.desc,url:s.link,img_url:s.icon,from:s.from,to_app:t})}function a(){n.i(u.h)("https://jsapi.qq.com/get?api=app.share")}var u=n(0),c=n(1),s=n.i(u.g)({},c.a),l={timeline:8,appMessage:1,qq:4,weiBo:11,qZone:3,copyUrl:10,more:5,generateQRCode:7,defualt:void 0};t.a={setShareData:r,getShareData:i,callShare:o,init:a}},function(e,t,n){"use strict";function i(){return n.i(u.g)({},s)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.i(u.g)(s,e)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";r(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});var t=l[e];window.ucweb.startRequest("shell.page_share",[s.desc,s.title,s.link,t,"",s.from,""])}function a(){}var u=n(0),c=n(1),s=n.i(u.g)({},c.a),l={timeline:"WechatTimeline",appMessage:"WechatFriends",qq:"QQ",weiBo:"SinaWeibo",default:void 0};t.a={setShareData:r,getShareData:i,callShare:o,init:a}},function(e,t,n){"use strict";function i(){return n.i(u.g)({},s)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.i(u.g)(s,e)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";r(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});var t=l[e];ucbrowser.web_shareEX?ucbrowser.web_shareEX(JSON.stringify({title:s.title,content:s.desc,sourceUrl:s.link,imageUrl:s.icon,source:s.from,target:t})):ucbrowser.web_share(title,desc,link,t,"",from,"")}function a(){}var u=n(0),c=n(1),s=n.i(u.g)({},c.a),l={timeline:"kWeixinFriend",appMessage:"kWeixin",qq:"kQQ",weiBo:"kSinaWeibo",qZone:"kQZone",default:void 0};t.a={setShareData:r,getShareData:i,callShare:o,init:a}},function(e,t,n){"use strict";function i(){return n.i(u.g)({},s)}function r(){o(void 0,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function o(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1]}function a(){}var u=n(0),c=n(1),s=n.i(u.g)({},c.a);t.a={setShareData:r,getShareData:i,callShare:o,init:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(4),o=n(5),a=n(6),u=n(2),c=n(7),s=n(3),l={};l=i.a?c.a:i.b?r.a:i.c&&i.d?o.a:i.c&&i.e?a.a:i.f&&i.d?u.a:s.a,l.init(),window.nativeShare=l,t.default=l}])});