/*==========================Algolia Start===============================*/
/*! algoliasearch 3.14.1 | © 2014, 2015 Algolia SAS | github.com/algolia/algoliasearch-client-js */
!function(e){var t;"undefined"!=typeof window?t=window:"undefined"!=typeof self&&(t=self),t.ALGOLIA_MIGRATION_LAYER=e()}(function(){return function e(t,r,o){function n(s,a){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return n(r?r:e)},l,l.exports,e,t,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){function o(e,t){for(var r in t)e.setAttribute(r,t[r])}function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function i(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}t.exports=function(e,t,r){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async="async"in t?!!t.async:!0,a.src=e,t.attrs&&o(a,t.attrs),t.text&&(a.text=""+t.text);var c="onload"in a?n:i;c(a,r),a.onload||n(a,r),s.appendChild(a)}},{}],2:[function(e,t,r){"use strict";function o(e){for(var t=new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/"+e.replace(".","\\.")+"(?:\\.min)?\\.js$"),r=document.getElementsByTagName("script"),o=!1,n=0,i=r.length;i>n;n++)if(r[n].src&&t.test(r[n].src)){o=!0;break}return o}t.exports=o},{}],3:[function(e,t,r){"use strict";function o(t){var r=e(1),o="//cdn.jsdelivr.net/algoliasearch/2/"+t+".min.js",i="-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --";window.console&&(window.console.warn?window.console.warn(i):window.console.log&&window.console.log(i));try{document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true</script>"),window.ALGOLIA_SUPPORTS_DOCWRITE===!0?(document.write('<script src="'+o+'"></script>'),n("document.write")()):r(o,n("DOMElement"))}catch(s){r(o,n("DOMElement"))}}function n(e){return function(){var t="AlgoliaSearch: loaded V2 script using "+e;window.console&&window.console.log&&window.console.log(t)}}t.exports=o},{1:1}],4:[function(e,t,r){"use strict";function o(){var e="-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --";window.AlgoliaSearch=function(){throw new Error(e)},window.AlgoliaSearchHelper=function(){throw new Error(e)},window.AlgoliaExplainResults=function(){throw new Error(e)}}t.exports=o},{}],5:[function(e,t,r){"use strict";function o(t){var r=e(2),o=e(3),n=e(4);r(t)?o(t):n()}o("algoliasearch")},{2:2,3:3,4:4}]},{},[5])(5)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.algoliasearch=e()}}(function(){var e;return function t(e,r,o){function n(s,a){if(!r[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return n(r?r:t)},l,l.exports,t,e,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){function o(){l=!1,a.length?u=a.concat(u):p=-1,u.length&&n()}function n(){if(!l){var e=setTimeout(o);l=!0;for(var t=u.length;t;){for(a=u,u=[];++p<t;)a&&a[p].run();p=-1,t=u.length}a=null,l=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function s(){}var a,c=t.exports={},u=[],l=!1,p=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new i(e,t)),1!==u.length||l||setTimeout(n,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},{}],2:[function(e,t,r){function o(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function n(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+r.humanize(this.diff),!t)return e;var o="color: "+this.color;e=[e[0],o,"color: inherit"].concat(Array.prototype.slice.call(e,1));var n=0,i=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(n++,"%c"===e&&(i=n))}),e.splice(i,0,o),e}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?r.storage.removeItem("debug"):r.storage.debug=e}catch(t){}}function a(){var e;try{e=r.storage.debug}catch(t){}return e}function c(){try{return window.localStorage}catch(e){}}r=t.exports=e(3),r.log=i,r.formatArgs=n,r.save=s,r.load=a,r.useColors=o,r.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){return JSON.stringify(e)},r.enable(a())},{3:3}],3:[function(e,t,r){function o(){return r.colors[l++%r.colors.length]}function n(e){function t(){}function n(){var e=n,t=+new Date,i=t-(u||t);e.diff=i,e.prev=u,e.curr=t,u=t,null==e.useColors&&(e.useColors=r.useColors()),null==e.color&&e.useColors&&(e.color=o());var s=Array.prototype.slice.call(arguments);s[0]=r.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var a=0;s[0]=s[0].replace(/%([a-z%])/g,function(t,o){if("%%"===t)return t;a++;var n=r.formatters[o];if("function"==typeof n){var i=s[a];t=n.call(e,i),s.splice(a,1),a--}return t}),"function"==typeof r.formatArgs&&(s=r.formatArgs.apply(e,s));var c=n.log||r.log||console.log.bind(console);c.apply(e,s)}t.enabled=!1,n.enabled=!0;var i=r.enabled(e)?n:t;return i.namespace=e,i}function i(e){r.save(e);for(var t=(e||"").split(/[\s,]+/),o=t.length,n=0;o>n;n++)t[n]&&(e=t[n].replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))}function s(){r.enable("")}function a(e){var t,o;for(t=0,o=r.skips.length;o>t;t++)if(r.skips[t].test(e))return!1;for(t=0,o=r.names.length;o>t;t++)if(r.names[t].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}r=t.exports=n,r.coerce=c,r.disable=s,r.enable=i,r.enabled=a,r.humanize=e(4),r.names=[],r.skips=[],r.formatters={};var u,l=0},{4:4}],4:[function(e,t,r){function o(e){if(e=""+e,!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]),o=(t[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return r*p;case"days":case"day":case"d":return r*l;case"hours":case"hour":case"hrs":case"hr":case"h":return r*u;case"minutes":case"minute":case"mins":case"min":case"m":return r*c;case"seconds":case"second":case"secs":case"sec":case"s":return r*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function n(e){return e>=l?Math.round(e/l)+"d":e>=u?Math.round(e/u)+"h":e>=c?Math.round(e/c)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function i(e){return s(e,l,"day")||s(e,u,"hour")||s(e,c,"minute")||s(e,a,"second")||e+" ms"}function s(e,t,r){return t>e?void 0:1.5*t>e?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}var a=1e3,c=60*a,u=60*c,l=24*u,p=365.25*l;t.exports=function(e,t){return t=t||{},"string"==typeof e?o(e):t["long"]?i(e):n(e)}},{}],5:[function(t,r,o){(function(o,n){(function(){"use strict";function i(e){return"function"==typeof e||"object"==typeof e&&null!==e}function s(e){return"function"==typeof e}function a(e){G=e}function c(e){$=e}function u(){return function(){o.nextTick(f)}}function l(){return function(){F(f)}}function p(){var e=0,t=new Z(f),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function h(){var e=new MessageChannel;return e.port1.onmessage=f,function(){e.port2.postMessage(0)}}function d(){return function(){setTimeout(f,1)}}function f(){for(var e=0;W>e;e+=2){var t=re[e],r=re[e+1];t(r),re[e]=void 0,re[e+1]=void 0}W=0}function y(){try{var e=t,r=e("vertx");return F=r.runOnLoop||r.runOnContext,l()}catch(o){return d()}}function m(e,t){var r=this,o=r._state;if(o===se&&!e||o===ae&&!t)return this;var n=new this.constructor(g),i=r._result;if(o){var s=arguments[o-1];$(function(){U(o,n,s,i)})}else q(r,n,e,t);return n}function v(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var r=new t(g);return S(r,e),r}function g(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function w(){return new TypeError("A promises callback cannot return that same promise.")}function _(e){try{return e.then}catch(t){return ce.error=t,ce}}function x(e,t,r,o){try{e.call(t,r,o)}catch(n){return n}}function T(e,t,r){$(function(e){var o=!1,n=x(r,t,function(r){o||(o=!0,t!==r?S(e,r):R(e,r))},function(t){o||(o=!0,P(e,t))},"Settle: "+(e._label||" unknown promise"));!o&&n&&(o=!0,P(e,n))},e)}function j(e,t){t._state===se?R(e,t._result):t._state===ae?P(e,t._result):q(t,void 0,function(t){S(e,t)},function(t){P(e,t)})}function k(e,t,r){t.constructor===e.constructor&&r===oe&&constructor.resolve===ne?j(e,t):r===ce?P(e,ce.error):void 0===r?R(e,t):s(r)?T(e,t,r):R(e,t)}function S(e,t){e===t?P(e,b()):i(t)?k(e,t,_(t)):R(e,t)}function O(e){e._onerror&&e._onerror(e._result),A(e)}function R(e,t){e._state===ie&&(e._result=t,e._state=se,0!==e._subscribers.length&&$(A,e))}function P(e,t){e._state===ie&&(e._state=ae,e._result=t,$(O,e))}function q(e,t,r,o){var n=e._subscribers,i=n.length;e._onerror=null,n[i]=t,n[i+se]=r,n[i+ae]=o,0===i&&e._state&&$(A,e)}function A(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var o,n,i=e._result,s=0;s<t.length;s+=3)o=t[s],n=t[s+r],o?U(r,o,n,i):n(i);e._subscribers.length=0}}function E(){this.error=null}function I(e,t){try{return e(t)}catch(r){return ue.error=r,ue}}function U(e,t,r,o){var n,i,a,c,u=s(r);if(u){if(n=I(r,o),n===ue?(c=!0,i=n.error,n=null):a=!0,t===n)return void P(t,w())}else n=o,a=!0;t._state!==ie||(u&&a?S(t,n):c?P(t,i):e===se?R(t,n):e===ae&&P(t,n))}function C(e,t){try{t(function(t){S(e,t)},function(t){P(e,t)})}catch(r){P(e,r)}}function N(e){return new ye(this,e).promise}function L(e){function t(e){S(n,e)}function r(e){P(n,e)}var o=this,n=new o(g);if(!X(e))return P(n,new TypeError("You must pass an array to race.")),n;for(var i=e.length,s=0;n._state===ie&&i>s;s++)q(o.resolve(e[s]),void 0,t,r);return n}function D(e){var t=this,r=new t(g);return P(r,e),r}function H(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function M(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function J(e){this._id=de++,this._state=void 0,this._result=void 0,this._subscribers=[],g!==e&&("function"!=typeof e&&H(),this instanceof J?C(this,e):M())}function K(e,t){this._instanceConstructor=e,this.promise=new e(g),Array.isArray(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?R(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&R(this.promise,this._result))):P(this.promise,this._validationError())}function Q(){var e;if("undefined"!=typeof n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=e.Promise;r&&"[object Promise]"===Object.prototype.toString.call(r.resolve())&&!r.cast||(e.Promise=fe)}var B;B=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var F,G,V,X=B,W=0,$=function(e,t){re[W]=e,re[W+1]=t,W+=2,2===W&&(G?G(f):V())},Y="undefined"!=typeof window?window:void 0,z=Y||{},Z=z.MutationObserver||z.WebKitMutationObserver,ee="undefined"!=typeof o&&"[object process]"==={}.toString.call(o),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,re=new Array(1e3);V=ee?u():Z?p():te?h():void 0===Y&&"function"==typeof t?y():d();var oe=m,ne=v,ie=void 0,se=1,ae=2,ce=new E,ue=new E,le=N,pe=L,he=D,de=0,fe=J;J.all=le,J.race=pe,J.resolve=ne,J.reject=he,J._setScheduler=a,J._setAsap=c,J._asap=$,J.prototype={constructor:J,then:oe,"catch":function(e){return this.then(null,e)}};var ye=K;K.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},K.prototype._enumerate=function(){for(var e=this.length,t=this._input,r=0;this._state===ie&&e>r;r++)this._eachEntry(t[r],r)},K.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,o=r.resolve;if(o===ne){var n=_(e);if(n===oe&&e._state!==ie)this._settledAt(e._state,t,e._result);else if("function"!=typeof n)this._remaining--,this._result[t]=e;else if(r===fe){var i=new r(g);k(i,e,n),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){t(e)}),t)}else this._willSettleAt(o(e),t)},K.prototype._settledAt=function(e,t,r){var o=this.promise;o._state===ie&&(this._remaining--,e===ae?P(o,r):this._result[t]=r),0===this._remaining&&R(o,this._result)},K.prototype._willSettleAt=function(e,t){var r=this;q(e,void 0,function(e){r._settledAt(se,t,e)},function(e){r._settledAt(ae,t,e)})};var me=Q,ve={Promise:fe,polyfill:me};"function"==typeof e&&e.amd?e(function(){return ve}):"undefined"!=typeof r&&r.exports?r.exports=ve:"undefined"!=typeof this&&(this.ES6Promise=ve),me()}).call(this)}).call(this,t(1),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],6:[function(e,t,r){function o(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._maxListeners=void 0,o.defaultMaxListeners=10,o.prototype.setMaxListeners=function(e){if(!i(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},o.prototype.emit=function(e){var t,r,o,i,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[e],a(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),r.apply(this,i)}else if(s(r))for(i=Array.prototype.slice.call(arguments,1),u=r.slice(),o=u.length,c=0;o>c;c++)u[c].apply(this,i);return!0},o.prototype.addListener=function(e,t){var r;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?o.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},o.prototype.on=o.prototype.addListener,o.prototype.once=function(e,t){function r(){this.removeListener(e,r),o||(o=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var o=!1;return r.listener=t,this.on(e,r),this},o.prototype.removeListener=function(e,t){var r,o,i,a;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],i=r.length,o=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(r)){for(a=i;a-- >0;)if(r[a]===t||r[a].listener&&r[a].listener===t){o=a;break}if(0>o)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},o.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},o.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},o.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},o.listenerCount=function(e,t){return e.listenerCount(t)}},{}],7:[function(e,t,r){var o=Object.prototype.hasOwnProperty,n=Object.prototype.toString;t.exports=function(e,t,r){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var s=0;i>s;s++)t.call(r,e[s],s,e);else for(var a in e)o.call(e,a)&&t.call(r,e[a],a,e)}},{}],8:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],9:[function(e,t,r){var o={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==o.call(e)}},{}],10:[function(e,t,r){"use strict";function o(e,t){if(e.map)return e.map(t);for(var r=[],o=0;o<e.length;o++)r.push(t(e[o],o));return r}var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?o(s(e),function(s){var a=encodeURIComponent(n(s))+r;return i(e[s])?o(e[s],function(e){return a+encodeURIComponent(n(e))}).join(t):a+encodeURIComponent(n(e[s]))}).join(t):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},{}],11:[function(e,t,r){function o(){c.apply(this,arguments)}function n(){var e="Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com";throw new l.AlgoliaSearchError(e)}t.exports=o;var i=e(13),s=e(23),a=e(24),c=e(12),u=e(8),l=e(25);u(o,c),o.prototype.deleteIndex=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(e),hostType:"write",callback:t})},o.prototype.moveIndex=function(e,t,r){var o={operation:"move",destination:t};return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:o,hostType:"write",callback:r})},o.prototype.copyIndex=function(e,t,r){var o={operation:"copy",destination:t};return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:o,hostType:"write",callback:r})},o.prototype.getLogs=function(e,t,r){return 0===arguments.length||"function"==typeof e?(r=e,e=0,t=10):1!==arguments.length&&"function"!=typeof t||(r=t,t=10),this._jsonRequest({method:"GET",url:"/1/logs?offset="+e+"&length="+t,hostType:"read",callback:r})},o.prototype.listIndexes=function(e,t){var r="";return void 0===e||"function"==typeof e?t=e:r="?page="+e,this._jsonRequest({method:"GET",url:"/1/indexes"+r,hostType:"read",callback:t})},o.prototype.initIndex=function(e){return new i(this,e)},o.prototype.listUserKeys=function(e){return this._jsonRequest({method:"GET",url:"/1/keys",hostType:"read",callback:e})},o.prototype.getUserKeyACL=function(e,t){return this._jsonRequest({method:"GET",url:"/1/keys/"+e,hostType:"read",callback:t})},o.prototype.deleteUserKey=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/keys/"+e,hostType:"write",callback:t})},o.prototype.addUserKey=function(t,r,o){var n=e(9),i="Usage: client.addUserKey(arrayOfAcls[, params, callback])";if(!n(t))throw new Error(i);1!==arguments.length&&"function"!=typeof r||(o=r,r=null);var s={acl:t};return r&&(s.validity=r.validity,s.maxQueriesPerIPPerHour=r.maxQueriesPerIPPerHour,s.maxHitsPerQuery=r.maxHitsPerQuery,s.indexes=r.indexes,s.description=r.description,r.queryParameters&&(s.queryParameters=this._getSearchParams(r.queryParameters,"")),s.referers=r.referers),this._jsonRequest({method:"POST",url:"/1/keys",body:s,hostType:"write",callback:o})},o.prototype.addUserKeyWithValidity=s(function(e,t,r){return this.addUserKey(e,t,r)},a("client.addUserKeyWithValidity()","client.addUserKey()")),o.prototype.updateUserKey=function(t,r,o,n){var i=e(9),s="Usage: client.updateUserKey(key, arrayOfAcls[, params, callback])";if(!i(r))throw new Error(s);2!==arguments.length&&"function"!=typeof o||(n=o,o=null);var a={acl:r};return o&&(a.validity=o.validity,a.maxQueriesPerIPPerHour=o.maxQueriesPerIPPerHour,a.maxHitsPerQuery=o.maxHitsPerQuery,a.indexes=o.indexes,a.description=o.description,o.queryParameters&&(a.queryParameters=this._getSearchParams(o.queryParameters,"")),a.referers=o.referers),this._jsonRequest({method:"PUT",url:"/1/keys/"+t,body:a,hostType:"write",callback:n})},o.prototype.startQueriesBatch=s(function(){this._batch=[]},a("client.startQueriesBatch()","client.search()")),o.prototype.addQueryInBatch=s(function(e,t,r){this._batch.push({indexName:e,query:t,params:r})},a("client.addQueryInBatch()","client.search()")),o.prototype.sendQueriesBatch=s(function(e){return this.search(this._batch,e)},a("client.sendQueriesBatch()","client.search()")),o.prototype.batch=function(t,r){var o=e(9),n="Usage: client.batch(operations[, callback])";if(!o(t))throw new Error(n);return this._jsonRequest({method:"POST",url:"/1/indexes/*/batch",body:{requests:t},hostType:"write",callback:r})},o.prototype.destroy=n,o.prototype.enableRateLimitForward=n,o.prototype.disableRateLimitForward=n,o.prototype.useSecuredAPIKey=n,o.prototype.disableSecuredAPIKey=n,o.prototype.generateSecuredApiKey=n},{12:12,13:13,23:23,24:24,25:25,8:8,9:9}],12:[function(e,t,r){function o(t,r,o){var i=e(2)("algoliasearch"),a=e(22),u=e(9),l=e(27),p="Usage: algoliasearch(applicationID, apiKey, opts)";if(!t)throw new c.AlgoliaSearchError("Please provide an application ID. "+p);if(!r)throw new c.AlgoliaSearchError("Please provide an API key. "+p);this.applicationID=t,this.apiKey=r;var h=s([this.applicationID+"-1.algolianet.com",this.applicationID+"-2.algolianet.com",this.applicationID+"-3.algolianet.com"]);this.hosts={read:[],write:[]},this.hostIndex={read:0,write:0},o=o||{};var d=o.protocol||"https:",f=void 0===o.timeout?2e3:o.timeout;if(/:$/.test(d)||(d+=":"),"http:"!==o.protocol&&"https:"!==o.protocol)throw new c.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+o.protocol+"`)");o.hosts?u(o.hosts)?(this.hosts.read=a(o.hosts),this.hosts.write=a(o.hosts)):(this.hosts.read=a(o.hosts.read),this.hosts.write=a(o.hosts.write)):(this.hosts.read=[this.applicationID+"-dsn.algolia.net"].concat(h),this.hosts.write=[this.applicationID+".algolia.net"].concat(h)),this.hosts.read=l(this.hosts.read,n(d)),this.hosts.write=l(this.hosts.write,n(d)),this.requestTimeout=f,this.extraHeaders=[],this.cache=o._cache||{},this._ua=o._ua,this._useCache=void 0===o._useCache||o._cache?!0:o._useCache,this._useFallback=void 0===o.useFallback?!0:o.useFallback,this._setTimeout=o._setTimeout,i("init done, %j",this)}function n(e){return function(t){return e+"//"+t.toLowerCase()}}function i(e){if(void 0===Array.prototype.toJSON)return JSON.stringify(e);var t=Array.prototype.toJSON;delete Array.prototype.toJSON;var r=JSON.stringify(e);return Array.prototype.toJSON=t,r}function s(e){for(var t,r,o=e.length;0!==o;)r=Math.floor(Math.random()*o),o-=1,t=e[o],e[o]=e[r],e[r]=t;return e}function a(e){var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o;o="x-algolia-api-key"===r||"x-algolia-application-id"===r?"**hidden for security purposes**":e[r],t[r]=o}return t}t.exports=o;var c=e(25),u=e(26),l=e(15),p=500;o.prototype.initIndex=function(e){return new l(this,e)},o.prototype.setExtraHeader=function(e,t){this.extraHeaders.push({name:e.toLowerCase(),value:t})},o.prototype.addAlgoliaAgent=function(e){this._ua+=";"+e},o.prototype._jsonRequest=function(t){function r(e,u){function p(e){var t=e&&e.body&&e.body.message&&e.body.status||e.statusCode||e&&e.body&&200;s("received response: statusCode: %s, computed statusCode: %d, headers: %j",e.statusCode,t,e.headers);var r=200===t||201===t,i=!r&&4!==Math.floor(t/100)&&1!==Math.floor(t/100);if(h._useCache&&r&&l&&(l[b]=e.responseText),r)return e.body;var p=new Date;if(m.push({currentHost:_,headers:a(n),content:o||null,contentLength:void 0!==o?o.length:null,method:u.method,timeout:u.timeout,url:u.url,startTime:w,endTime:p,duration:p-w}),i)return d+=1,g();var f=new c.AlgoliaSearchError(e.body&&e.body.message,{debugData:m});return h._promise.reject(f)}function v(i){s("error: %s, stack: %s",i.message,i.stack);var l=new Date;return m.push({currentHost:_,headers:a(n),content:o||null,contentLength:void 0!==o?o.length:null,method:u.method,timeout:u.timeout,url:u.url,startTime:w,endTime:l,duration:l-w}),i instanceof c.AlgoliaSearchError||(i=new c.Unknown(i&&i.message,i)),d+=1,i instanceof c.Unknown||i instanceof c.UnparsableJSON||d>=h.hosts[t.hostType].length&&(f||!y)?(i.debugData=m,h._promise.reject(i)):i instanceof c.RequestTimeout?g():(f||(h.hostIndex[t.hostType]=++h.hostIndex[t.hostType]%h.hosts[t.hostType].length,d=1/0),r(e,u))}function g(){return h.hostIndex[t.hostType]=++h.hostIndex[t.hostType]%h.hosts[t.hostType].length,u.timeout=h.requestTimeout*(d+1),r(e,u)}var b,w=new Date;if(h._useCache&&(b=t.url),h._useCache&&o&&(b+="_body_"+u.body),h._useCache&&l&&void 0!==l[b])return s("serving response from cache"),h._promise.resolve(JSON.parse(l[b]));if(d>=h.hosts[t.hostType].length)return!y||f?(s("could not get any response"),h._promise.reject(new c.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: "+h.applicationID,{debugData:m}))):(s("switching to fallback"),d=0,u.method=t.fallback.method,u.url=t.fallback.url,u.jsonBody=t.fallback.body,u.jsonBody&&(u.body=i(u.jsonBody)),n=h._computeRequestHeaders(),u.timeout=h.requestTimeout*(d+1),h.hostIndex[t.hostType]=0,f=!0,r(h._request.fallback,u));var _=h.hosts[t.hostType][h.hostIndex[t.hostType]],x=_+u.url,T={body:u.body,jsonBody:u.jsonBody,method:u.method,headers:n,timeout:u.timeout,debug:s};return s("method: %s, url: %s, headers: %j, timeout: %d",T.method,x,T.headers,T.timeout),e===h._request.fallback&&s("using fallback"),e.call(h,x,T).then(p,v)}var o,n,s=e(2)("algoliasearch:"+t.url),l=t.cache,h=this,d=0,f=!1,y=h._useFallback&&h._request.fallback&&t.fallback;this.apiKey.length>p&&void 0!==t.body&&void 0!==t.body.params?(t.body.apiKey=this.apiKey,n=this._computeRequestHeaders(!1)):n=this._computeRequestHeaders(),void 0!==t.body&&(o=i(t.body)),s("request start");var m=[],v=r(h._request,{url:t.url,method:t.method,body:o,jsonBody:t.body,timeout:h.requestTimeout*(d+1)});return t.callback?void v.then(function(e){u(function(){t.callback(null,e)},h._setTimeout||setTimeout)},function(e){u(function(){t.callback(e)},h._setTimeout||setTimeout)}):v},o.prototype._getSearchParams=function(e,t){if(void 0===e||null===e)return t;for(var r in e)null!==r&&void 0!==e[r]&&e.hasOwnProperty(r)&&(t+=""===t?"":"&",t+=r+"="+encodeURIComponent("[object Array]"===Object.prototype.toString.call(e[r])?i(e[r]):e[r]));return t},o.prototype._computeRequestHeaders=function(t){var r=e(7),o={"x-algolia-agent":this._ua,"x-algolia-application-id":this.applicationID};return t!==!1&&(o["x-algolia-api-key"]=this.apiKey),this.userToken&&(o["x-algolia-usertoken"]=this.userToken),this.securityTags&&(o["x-algolia-tagfilters"]=this.securityTags),this.extraHeaders&&r(this.extraHeaders,function(e){o[e.name]=e.value}),o},o.prototype.search=function(t,r,o){var n=e(9),i=e(27),s="Usage: client.search(arrayOfQueries[, callback])";if(!n(t))throw new Error(s);"function"==typeof r?(o=r,r={}):void 0===r&&(r={});var a=this,c={requests:i(t,function(e){var t="";return void 0!==e.query&&(t+="query="+encodeURIComponent(e.query)),{indexName:e.indexName,params:a._getSearchParams(e.params,t)}})},u=i(c.requests,function(e,t){return t+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(e.indexName)+"?"+e.params)}).join("&"),l="/1/indexes/*/queries";return void 0!==r.strategy&&(l+="?strategy="+r.strategy),this._jsonRequest({cache:this.cache,method:"POST",url:l,body:c,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:u}},callback:o})},o.prototype.setSecurityTags=function(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var t=[],r=0;r<e.length;++r)if("[object Array]"===Object.prototype.toString.call(e[r])){for(var o=[],n=0;n<e[r].length;++n)o.push(e[r][n]);t.push("("+o.join(",")+")")}else t.push(e[r]);e=t.join(",")}this.securityTags=e},o.prototype.setUserToken=function(e){this.userToken=e},o.prototype.clearCache=function(){this.cache={}},o.prototype.setRequestTimeout=function(e){e&&(this.requestTimeout=parseInt(e,10))}},{15:15,2:2,22:22,25:25,26:26,27:27,7:7,9:9}],13:[function(e,t,r){function o(){i.apply(this,arguments)}var n=e(8),i=e(15),s=e(23),a=e(24),c=e(26),u=e(25);t.exports=o,n(o,i),o.prototype.addObject=function(e,t,r){var o=this;return 1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0),this.as._jsonRequest({method:void 0!==t?"PUT":"POST",url:"/1/indexes/"+encodeURIComponent(o.indexName)+(void 0!==t?"/"+encodeURIComponent(t):""),body:e,hostType:"write",callback:r})},o.prototype.addObjects=function(t,r){var o=e(9),n="Usage: index.addObjects(arrayOfObjects[, callback])";if(!o(t))throw new Error(n);for(var i=this,s={requests:[]},a=0;a<t.length;++a){var c={action:"addObject",body:t[a]};s.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:s,hostType:"write",
    callback:r})},o.prototype.getObject=function(e,t,r){var o=this;1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0);var n="";if(void 0!==t){n="?attributes=";for(var i=0;i<t.length;++i)0!==i&&(n+=","),n+=t[i]}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/"+encodeURIComponent(e)+n,hostType:"read",callback:r})},o.prototype.getObjects=function(t,r,o){var n=e(9),i=e(27),s="Usage: index.getObjects(arrayOfObjectIDs[, callback])";if(!n(t))throw new Error(s);var a=this;1!==arguments.length&&"function"!=typeof r||(o=r,r=void 0);var c={requests:i(t,function(e){var t={indexName:a.indexName,objectID:e};return r&&(t.attributesToRetrieve=r.join(",")),t})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:c,callback:o})},o.prototype.partialUpdateObject=function(e,t,r){1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0);var o=this,n="/1/indexes/"+encodeURIComponent(o.indexName)+"/"+encodeURIComponent(e.objectID)+"/partial";return t===!1&&(n+="?createIfNotExists=false"),this.as._jsonRequest({method:"POST",url:n,body:e,hostType:"write",callback:r})},o.prototype.partialUpdateObjects=function(t,r){var o=e(9),n="Usage: index.partialUpdateObjects(arrayOfObjects[, callback])";if(!o(t))throw new Error(n);for(var i=this,s={requests:[]},a=0;a<t.length;++a){var c={action:"partialUpdateObject",objectID:t[a].objectID,body:t[a]};s.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:s,hostType:"write",callback:r})},o.prototype.saveObject=function(e,t){var r=this;return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/"+encodeURIComponent(e.objectID),body:e,hostType:"write",callback:t})},o.prototype.saveObjects=function(t,r){var o=e(9),n="Usage: index.saveObjects(arrayOfObjects[, callback])";if(!o(t))throw new Error(n);for(var i=this,s={requests:[]},a=0;a<t.length;++a){var c={action:"updateObject",objectID:t[a].objectID,body:t[a]};s.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:s,hostType:"write",callback:r})},o.prototype.deleteObject=function(e,t){if("function"==typeof e||"string"!=typeof e&&"number"!=typeof e){var r=new u.AlgoliaSearchError("Cannot delete an object without an objectID");return t=e,"function"==typeof t?t(r):this.as._promise.reject(r)}var o=this;return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/"+encodeURIComponent(e),hostType:"write",callback:t})},o.prototype.deleteObjects=function(t,r){var o=e(9),n=e(27),i="Usage: index.deleteObjects(arrayOfObjectIDs[, callback])";if(!o(t))throw new Error(i);var s=this,a={requests:n(t,function(e){return{action:"deleteObject",objectID:e,body:{objectID:e}}})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:a,hostType:"write",callback:r})},o.prototype.deleteByQuery=function(t,r,o){function n(e){if(0===e.nbHits)return e;var t=p(e.hits,function(e){return e.objectID});return h.deleteObjects(t).then(i).then(s)}function i(e){return h.waitTask(e.taskID)}function s(){return h.deleteByQuery(t,r)}function a(){c(function(){o(null)},d._setTimeout||setTimeout)}function u(e){c(function(){o(e)},d._setTimeout||setTimeout)}var l=e(22),p=e(27),h=this,d=h.as;1===arguments.length||"function"==typeof r?(o=r,r={}):r=l(r),r.attributesToRetrieve="objectID",r.hitsPerPage=1e3,r.distinct=!1,this.clearCache();var f=this.search(t,r).then(n);return o?void f.then(a,u):f},o.prototype.browse=function(t,r,o){var n,i,s=e(28),a=this;0===arguments.length||1===arguments.length&&"function"==typeof arguments[0]?(n=0,o=arguments[0],t=void 0):"number"==typeof arguments[0]?(n=arguments[0],"number"==typeof arguments[1]?i=arguments[1]:"function"==typeof arguments[1]&&(o=arguments[1],i=void 0),t=void 0,r=void 0):"object"==typeof arguments[0]?("function"==typeof arguments[1]&&(o=arguments[1]),r=arguments[0],t=void 0):"string"==typeof arguments[0]&&"function"==typeof arguments[1]&&(o=arguments[1],r=void 0),r=s({},r||{},{page:n,hitsPerPage:i,query:t});var c=this.as._getSearchParams(r,"");return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(a.indexName)+"/browse?"+c,hostType:"read",callback:o})},o.prototype.browseFrom=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse?cursor="+encodeURIComponent(e),hostType:"read",callback:t})},o.prototype.browseAll=function(t,r){function o(e){if(!a._stopped){var t;t=void 0!==e?"cursor="+encodeURIComponent(e):l,c._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(u.indexName)+"/browse?"+t,hostType:"read",callback:n})}}function n(e,t){return a._stopped?void 0:e?void a._error(e):(a._result(t),void 0===t.cursor?void a._end():void o(t.cursor))}"object"==typeof t&&(r=t,t=void 0);var i=e(28),s=e(14),a=new s,c=this.as,u=this,l=c._getSearchParams(i({},r||{},{query:t}),"");return o(),a},o.prototype.ttAdapter=function(e){var t=this;return function(r,o,n){var i;i="function"==typeof n?n:o,t.search(r,e,function(e,t){return e?void i(e):void i(t.hits)})}},o.prototype.waitTask=function(e,t){function r(){return l._jsonRequest({method:"GET",hostType:"read",url:"/1/indexes/"+encodeURIComponent(u.indexName)+"/task/"+e}).then(function(e){a++;var t=i*a*a;return t>s&&(t=s),"published"!==e.status?l._promise.delay(t).then(r):e})}function o(e){c(function(){t(null,e)},l._setTimeout||setTimeout)}function n(e){c(function(){t(e)},l._setTimeout||setTimeout)}var i=100,s=5e3,a=0,u=this,l=u.as,p=r();return t?void p.then(o,n):p},o.prototype.clearIndex=function(e){var t=this;return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/clear",hostType:"write",callback:e})},o.prototype.getSettings=function(e){var t=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/settings",hostType:"read",callback:e})},o.prototype.setSettings=function(e,t){var r=this;return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/settings",hostType:"write",body:e,callback:t})},o.prototype.listUserKeys=function(e){var t=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/keys",hostType:"read",callback:e})},o.prototype.getUserKeyACL=function(e,t){var r=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/keys/"+e,hostType:"read",callback:t})},o.prototype.deleteUserKey=function(e,t){var r=this;return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/keys/"+e,hostType:"write",callback:t})},o.prototype.addUserKey=function(t,r,o){var n=e(9),i="Usage: index.addUserKey(arrayOfAcls[, params, callback])";if(!n(t))throw new Error(i);1!==arguments.length&&"function"!=typeof r||(o=r,r=null);var s={acl:t};return r&&(s.validity=r.validity,s.maxQueriesPerIPPerHour=r.maxQueriesPerIPPerHour,s.maxHitsPerQuery=r.maxHitsPerQuery,s.description=r.description,r.queryParameters&&(s.queryParameters=this.as._getSearchParams(r.queryParameters,"")),s.referers=r.referers),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys",body:s,hostType:"write",callback:o})},o.prototype.addUserKeyWithValidity=s(function(e,t,r){return this.addUserKey(e,t,r)},a("index.addUserKeyWithValidity()","index.addUserKey()")),o.prototype.updateUserKey=function(t,r,o,n){var i=e(9),s="Usage: index.updateUserKey(key, arrayOfAcls[, params, callback])";if(!i(r))throw new Error(s);2!==arguments.length&&"function"!=typeof o||(n=o,o=null);var a={acl:r};return o&&(a.validity=o.validity,a.maxQueriesPerIPPerHour=o.maxQueriesPerIPPerHour,a.maxHitsPerQuery=o.maxHitsPerQuery,a.description=o.description,o.queryParameters&&(a.queryParameters=this.as._getSearchParams(o.queryParameters,"")),a.referers=o.referers),this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys/"+t,body:a,hostType:"write",callback:n})}},{14:14,15:15,22:22,23:23,24:24,25:25,26:26,27:27,28:28,8:8,9:9}],14:[function(e,t,r){"use strict";function o(){}t.exports=o;var n=e(8),i=e(6).EventEmitter;n(o,i),o.prototype.stop=function(){this._stopped=!0,this._clean()},o.prototype._end=function(){this.emit("end"),this._clean()},o.prototype._error=function(e){this.emit("error",e),this._clean()},o.prototype._result=function(e){this.emit("result",e)},o.prototype._clean=function(){this.removeAllListeners("stop"),this.removeAllListeners("end"),this.removeAllListeners("error"),this.removeAllListeners("result")}},{6:6,8:8}],15:[function(e,t,r){function o(e,t){this.indexName=t,this.as=e,this.typeAheadArgs=null,this.typeAheadValueOption=null,this.cache={}}var n=e(21);t.exports=o,o.prototype.clearCache=function(){this.cache={}},o.prototype.search=n("query"),o.prototype.similarSearch=n("similarQuery"),o.prototype._search=function(e,t,r){return this.as._jsonRequest({cache:this.cache,method:"POST",url:t||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:e},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:e}},callback:r})},o.prototype.as=null,o.prototype.indexName=null,o.prototype.typeAheadArgs=null,o.prototype.typeAheadValueOption=null},{21:21}],16:[function(e,t,r){"use strict";var o=e(11),n=e(17);t.exports=n(o)},{11:11,17:17}],17:[function(e,t,r){"use strict";var o=window.Promise||e(5).Promise;t.exports=function(t,r){function n(t,r,o){var s=e(22),a=e(18);return o=s(o||{}),void 0===o.protocol&&(o.protocol=a()),o._ua=o._ua||n.ua,new i(t,r,o)}function i(){t.apply(this,arguments)}var s=e(8),a=e(25),c=e(19),u=e(20),l=e(29);r=r||"",n.version=e(30),n.ua="Algolia for vanilla JavaScript "+r+n.version,n.initPlaces=l(n),window.__algolia={debug:e(2),algoliasearch:n};var p={hasXMLHttpRequest:"XMLHttpRequest"in window,hasXDomainRequest:"XDomainRequest"in window,cors:"withCredentials"in new XMLHttpRequest,timeout:"timeout"in new XMLHttpRequest};return s(i,t),i.prototype._request=function(e,t){return new o(function(r,o){function n(){if(!l){p.timeout||clearTimeout(u);var e;try{e={body:JSON.parse(d.responseText),responseText:d.responseText,statusCode:d.status,headers:d.getAllResponseHeaders&&d.getAllResponseHeaders()||{}}}catch(t){e=new a.UnparsableJSON({more:d.responseText})}e instanceof a.UnparsableJSON?o(e):r(e)}}function i(e){l||(p.timeout||clearTimeout(u),o(new a.Network({more:e})))}function s(){p.timeout||(l=!0,d.abort()),o(new a.RequestTimeout)}if(!p.cors&&!p.hasXDomainRequest)return void o(new a.Network("CORS not supported"));e=c(e,t.headers);var u,l,h=t.body,d=p.cors?new XMLHttpRequest:new XDomainRequest;d instanceof XMLHttpRequest?d.open(t.method,e,!0):d.open(t.method,e),p.cors&&(h&&("POST"===t.method?d.setRequestHeader("content-type","application/x-www-form-urlencoded"):d.setRequestHeader("content-type","application/json")),d.setRequestHeader("accept","application/json")),d.onprogress=function(){},d.onload=n,d.onerror=i,p.timeout?(d.timeout=t.timeout,d.ontimeout=s):u=setTimeout(s,t.timeout),d.send(h)})},i.prototype._request.fallback=function(e,t){return e=c(e,t.headers),new o(function(r,o){u(e,t,function(e,t){return e?void o(e):void r(t)})})},i.prototype._promise={reject:function(e){return o.reject(e)},resolve:function(e){return o.resolve(e)},delay:function(e){return new o(function(t){setTimeout(t,e)})}},n}},{18:18,19:19,2:2,20:20,22:22,25:25,29:29,30:30,5:5,8:8}],18:[function(e,t,r){"use strict";function o(){var e=window.document.location.protocol;return"http:"!==e&&"https:"!==e&&(e="http:"),e}t.exports=o},{}],19:[function(e,t,r){"use strict";function o(e,t){return e+=/\?/.test(e)?"&":"?",e+n(t)}t.exports=o;var n=e(10)},{10:10}],20:[function(e,t,r){"use strict";function o(e,t,r){function o(){t.debug("JSONP: success"),y||p||(y=!0,l||(t.debug("JSONP: Fail. Script loaded but did not call the callback"),a(),r(new n.JSONPScriptFail)))}function s(){"loaded"!==this.readyState&&"complete"!==this.readyState||o()}function a(){clearTimeout(m),d.onload=null,d.onreadystatechange=null,d.onerror=null,h.removeChild(d);try{delete window[f],delete window[f+"_loaded"]}catch(e){window[f]=null,window[f+"_loaded"]=null}}function c(){t.debug("JSONP: Script timeout"),p=!0,a(),r(new n.RequestTimeout)}function u(){t.debug("JSONP: Script error"),y||p||(a(),r(new n.JSONPScriptError))}if("GET"!==t.method)return void r(new Error("Method "+t.method+" "+e+" is not supported by JSONP."));t.debug("JSONP: start");var l=!1,p=!1;i+=1;var h=document.getElementsByTagName("head")[0],d=document.createElement("script"),f="algoliaJSONP_"+i,y=!1;window[f]=function(e){try{delete window[f]}catch(t){window[f]=void 0}p||(l=!0,a(),r(null,{body:e}))},e+="&callback="+f,t.jsonBody&&t.jsonBody.params&&(e+="&"+t.jsonBody.params);var m=setTimeout(c,t.timeout);d.onreadystatechange=s,d.onload=o,d.onerror=u,d.async=!0,d.defer=!0,d.src=e,h.appendChild(d)}t.exports=o;var n=e(25),i=0},{25:25}],21:[function(e,t,r){function o(e,t){return function(r,o,i){if("function"==typeof r&&"object"==typeof o||"object"==typeof i)throw new n.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");0===arguments.length||"function"==typeof r?(i=r,r=""):1!==arguments.length&&"function"!=typeof o||(i=o,o=void 0),"object"==typeof r&&null!==r?(o=r,r=void 0):void 0!==r&&null!==r||(r="");var s="";return void 0!==r&&(s+=e+"="+encodeURIComponent(r)),void 0!==o&&(s=this.as._getSearchParams(o,s)),this._search(s,t,i)}}t.exports=o;var n=e(25)},{25:25}],22:[function(e,t,r){t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],23:[function(e,t,r){t.exports=function(e,t){function r(){return o||(console.log(t),o=!0),e.apply(this,arguments)}var o=!1;return r}},{}],24:[function(e,t,r){t.exports=function(e,t){var r=e.toLowerCase().replace(".","").replace("()","");return"algoliasearch: `"+e+"` was replaced by `"+t+"`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#"+r}},{}],25:[function(e,t,r){"use strict";function o(t,r){var o=e(7),n=this;"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):n.stack=(new Error).stack||"Cannot get a stacktrace, browser is too old",this.name="AlgoliaSearchError",this.message=t||"Unknown error",r&&o(r,function(e,t){n[t]=e})}function n(e,t){function r(){var r=Array.prototype.slice.call(arguments,0);"string"!=typeof r[0]&&r.unshift(t),o.apply(this,r),this.name="AlgoliaSearch"+e+"Error"}return i(r,o),r}var i=e(8);i(o,Error),t.exports={AlgoliaSearchError:o,UnparsableJSON:n("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:n("RequestTimeout","Request timedout before getting a response"),Network:n("Network","Network issue, see err.more for details"),JSONPScriptFail:n("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:n("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:n("Unknown","Unknown error occured")}},{7:7,8:8}],26:[function(e,t,r){t.exports=function(e,t){t(e,0)}},{}],27:[function(e,t,r){var o=e(7);t.exports=function(e,t){var r=[];return o(e,function(o,n){r.push(t(o,n,e))}),r}},{7:7}],28:[function(e,t,r){var o=e(7);t.exports=function n(e){var t=Array.prototype.slice.call(arguments);return o(t,function(t){for(var r in t)t.hasOwnProperty(r)&&("object"==typeof e[r]&&"object"==typeof t[r]?e[r]=n({},e[r],t[r]):void 0!==t[r]&&(e[r]=t[r]))}),e}},{7:7}],29:[function(e,t,r){function o(t){return function(r,o,i){var s=e(22);i=i&&s(i)||{},i.hosts=i.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"];var a=t(r,o,i),c=a.initIndex("places");return c.search=n("query","/1/places/query"),c}}t.exports=o;var n=e(21)},{21:21,22:22}],30:[function(e,t,r){"use strict";t.exports="3.14.1"},{}]},{},[16])(16)});
/*==========================Hover Intent Start===============================*/
(function(e) {
    e.fn.hoverIntent = function(t, n, r) {
        var i = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        if (typeof t === "object") {
            i = e.extend(i, t)
        } else if (e.isFunction(n)) {
            i = e.extend(i, {
                over: t,
                out: n,
                selector: r
            })
        } else {
            i = e.extend(i, {
                over: t,
                out: t,
                selector: n
            })
        }
        var s, o, u, a;
        var f = function(e) {
            s = e.pageX;
            o = e.pageY
        };
        var l = function(t, n) {
            n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
            if (Math.abs(u - s) + Math.abs(a - o) < i.sensitivity) {
                e(n).off("mousemove.hoverIntent", f);
                n.hoverIntent_s = 1;
                return i.over.apply(n, [t])
            } else {
                u = s;
                a = o;
                n.hoverIntent_t = setTimeout(function() {
                    l(t, n)
                }, i.interval)
            }
        };
        var c = function(e, t) {
            t.hoverIntent_t = clearTimeout(t.hoverIntent_t);
            t.hoverIntent_s = 0;
            return i.out.apply(t, [e])
        };
        var h = function(t) {
            var n = jQuery.extend({}, t);
            var r = this;
            if (r.hoverIntent_t) {
                r.hoverIntent_t = clearTimeout(r.hoverIntent_t)
            }
            if (t.type == "mouseenter") {
                u = n.pageX;
                a = n.pageY;
                e(r).on("mousemove.hoverIntent", f);
                if (r.hoverIntent_s != 1) {
                    r.hoverIntent_t = setTimeout(function() {
                        l(n, r)
                    }, i.interval)
                }
            } else {
                e(r).off("mousemove.hoverIntent", f);
                if (r.hoverIntent_s == 1) {
                    r.hoverIntent_t = setTimeout(function() {
                        c(n, r)
                    }, i.timeout)
                }
            }
        };
        return this.on({
            "mouseenter.hoverIntent": h,
            "mouseleave.hoverIntent": h
        }, i.selector)
    }
})(jQuery)
/*==========================Hover Intent Ends===============================*/

/*==========================Custom Scripts for site start===============================*/
jQuery(document).ready(function($){
    $('#awok_instant_search').focus();
	
	/*
	 * SCROLL TO TOP
	 */
	$('.scroll_top').click(function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});	
	
	/*
	 * SHOW SCROLLTOP
	 */
	function handleScrollIcon(){
		var footheight		= $('.prefooter_wrapper').outerHeight() + $('.footer_wrapper').outerHeight() - $('.scroll_top a').height();
			docheight		= $(window).height() - footheight;
			
		if( ( $(window).scrollTop() + document.body.clientHeight ) >= docheight ){
			$('.scroll_top').addClass('st-attached');
		}
		else{
			$('.scroll_top').removeClass('st-attached');
		}	
	}

    /*
     EVENT
     */
    $('.ev_overlay_close a').click(function(e){
        e.preventDefault();
        $('.ev_overlay').hide();
        $('body, html').css('overflow','auto');
    });

    if( $('.ev_overlay').data('overflow') == 'Y' ){
        $('body, html').css('overflow','hidden');
    }

	/*
	 * STICKY FOOTER
	 */
	function handleFooter(){
		if( !$('.prefooter_wrapper').length )
			return false;

		if( !$('.footer_push').length )
			$('.prefooter_wrapper').before( '<div class="footer_push"></div>' );

		$('.footer_push').css('height','0px');
		var footer	= $(".prefooter_wrapper").outerHeight() + $(".footer_wrapper").outerHeight() + $(".footer_push").outerHeight();
			pos 	= $(".prefooter_wrapper").position();
			height	= $(window).height();
			height 	= height - pos.top;
			height 	= height - footer;
			if( height > 0 ){
				$('.footer_push').css('height', height+'px');
			}
	}
		
	/*
	 * SHOW SCROLL TOP BUTTON
	 */
	$(window).bind('load scroll resize',function(e){
		var header		= $('.header_wrapper');
		var headheight	= header.height() * 4;
		var scroller	= $(this).scrollTop();
		
		if( scroller > headheight )
				$('.scroll_top').slideDown();
		else
			$('.scroll_top').slideUp();
		
		handleScrollIcon();
		handleFooter();
	});


	/*
	 * STICKY FOOTER
	 */
	function handleFooter(){

		if( ! $('.prefooter_wrapper').length )
			return false;

		if( !$('.footer_push').length )
			$('.prefooter_wrapper').before( '<div class="footer_push"></div>' );

		$('.footer_push').css('height','0px');
		var footer	= $(".prefooter_wrapper").outerHeight() + $(".footer_wrapper").outerHeight() + $(".footer_push").outerHeight();
		pos 	= $(".prefooter_wrapper").position();
		height	= $(window).height();
		height 	= height - pos.top;
		height 	= height - footer;
		height = height + 50;
		if( height > 0 ){
			$('.footer_push').css('height', height+'px');
		}
	}
});


/*=================================== new header/footer and menu scripts start ================================*/
jQuery(document).ready(function($) {

    $("a.login").on('click',function(event){
        event.preventDefault();
    });
    $("a.register").on('click',function(event){
        event.preventDefault();
    });
              
    //hide search suggestions if focus shift
    $(document).on('click',function(e){
        if($(e.target).parents('.site_search').length == 0)
            $('#_instant_search_results').hide();
    });

    // Menu active and overlay toggle
    $(".menu_content .content_inner > .has_child").mouseenter(function(){
        if ( $( this ).find('.sub_menu_list .has_child').hasClass( "active" ) )return;
        var sub_class = $( this ).find( "li:nth-child(1)" );
        sub_class.addClass('active');
    });

    //display grey background on mouse hover
    $(".menu_content").mouseenter(function(){
        if ( ! $( ".grey_bg" ).is(":visible") ){
            $( ".grey_bg" ).show();
            $('#_instant_search_results').hide();
            $('.user_options').removeClass('active');
        }
        $('#awok_instant_search').blur();
    });

    //hide grey background on mouse leaves
    $(".menu_content").mouseleave(function(){
        if ( $( ".grey_bg" ).is(":visible") )
            $( ".grey_bg" ).hide();
    });

    //hide grey background on click(iPad fix)
    $(".grey_bg").on('click',function(){
        $(this).hide();
    });
    
    $(".child .sub_menu .sub_menu_list > li").mouseenter(function(){
        var sibling = $( this ).siblings();
        if ( sibling.hasClass( "active" ) )
            sibling.removeClass( "active" );
    });

    $(".child .sub_menu .sub_menu_list > li").mouseleave(function(){
        $( this ).addClass('active');
    });
   
    $('.user_options').hoverIntent(function(){
        if ( $( this ).hasClass( "user_option_disable" ) )
        $( this ).removeClass( "user_option_disable" );
        $(this).addClass('active').attr( 'data-state', '1' );
    });     

    $(document).on('click',function(e){
        if( $(e.target).parents('.user_options').length == 0 )
            $('.user_options').removeClass('active user_option_disable').attr( 'data-state', '0' );
    });

    $('.user_options_link').on('click',function(e){
    	if ( $('.user_options').attr('data-state') == '1'  ){
            $('.user_options').removeClass('active').addClass('user_option_disable').attr( 'data-state', '0' );
        }
        else{
            $('.user_options').addClass('active').removeClass('user_option_disable').attr( 'data-state', '1' );
        }
    });  
    
    $(".site_main_menu").hoverIntent(onEnter,onLeave);
 
    function onEnter(){
        $(this).addClass('active');
    }
    
    function onLeave(){
        $(this).removeClass('active');
    }
    
    // Fix for bxpanel for flip html
    // Fallback for flip html by Anand SA
    $('#bx-panel-expander').on('click',function(e){
        if( $('.header').is(':visible') && !$('body.page-home').is(':visible') && !$('body.merchants').is(':visible')  ){
            if( typeof is_rtl != 'undefined' ){
                $('.header').attr('style', 'margin-top: 147px !important');
                $('.main:first').attr('style', 'margin-top: 138px !important');
            }
            else{
                $('.header').attr('style', 'margin-top: 146px !important');
                $('.main:first').attr('style', 'margin-top: 148px !important');
            }              
                           
        }
    });
    $('#bx-panel-hider').on('click',function(e){
        if( $('.header').is(':visible') && !$('body.page-home').is(':visible')  && !$('body.merchants').is(':visible') ){
            if( typeof is_rtl != 'undefined' ){
                $('.main:first').attr('style', 'margin-top: 29px !important');
            }
            else{
                $('.main:first').attr('style', 'margin-top: 39px !important');
            } 
            $('.header').attr('style', 'margin-top: 38px !important');                     
        }
    });

    if( $('#bx-panel').is(':visible') && !$('#bx-panel').hasClass('bx-panel-folded') && !$('body.page-home').is(':visible') && !$('body.merchants').is(':visible') ){
        if( typeof is_rtl != 'undefined' ){
            $('.header').attr('style', 'margin-top: 147px !important');
            $('.main:first').attr('style', 'margin-top: 138px !important');
        }
        else{
            $('.header').attr('style', 'margin-top: 146px !important');
            $('.main:first').attr('style', 'margin-top: 148px !important');
        }       
    }
    else if( $('#bx-panel').is(':visible') && !$('body.page-home').is(':visible')  && !$('body.merchants').is(':visible') ){   	
       if( typeof is_rtl != 'undefined' ){
            $('.main:first').attr('style', 'margin-top: 29px !important');
        }
        else{
            $('.main:first').attr('style', 'margin-top: 39px !important');
        } 
        $('.header').attr('style', 'margin-top: 38px !important');
    }

    //popup track order
    $('.track_order').click(function(){
        $('.track_order_popup').show();
    })

    //popup track order
    /*$('.track_order_header_uo').click(function(){        
        $('.track_order_popup').show();
        setTimeout(function(){ $('.inner_track_ord').click(); }, 100);
    })*/

    $(document).on('click',function(e){
        if( $(e.target).parents(".track_order, .track_order_popup, .track_order_header_uo").length == 0   ) {
            $('.track_order_popup').hide();
            $(".track_order_popup input[type='text']").val('');
        }
    });
    String.prototype.toArabicDigits= function(){
        var id= ['٠','۱','۲','٣','٤','٥','٦','۷','۸','۹'];
            return this.replace(/[0-9]/g, function(w){
            return id[+w]
        });
    }
	/*
    var pgURL 			= window.location.href.split('?')[0]; 
	var pathArray 		= pgURL .split( '/' );
	var elementPageURI 	= pathArray[5];

	// TO CLEAR FB OG CACHE BEFORE SET
	function clearFbOgCache( pgURL ){
		$.post(
		    'https://graph.facebook.com',
		    {
		        id: pgURL,
		        scrape: true
		    },
		    function(response){
		        // console.log(response);
		    }
		);
	}

	if( typeof elementPageURI != 'undefined' && elementPageURI != '' )
		clearFbOgCache( pgURL );	
	*/
});
/*=================================== new header/footer and menu scripts end ================================*/


/*!
 * forkit.js 0.2
 * http://lab.hakim.se/forkit-js
 * MIT licensed
 *
 * Created by Hakim El Hattab, http://hakim.se
 */

$(function(){(function(){

	var STATE_CLOSED = 0,
		STATE_DETACHED = 1,
		STATE_OPENED = 2,

		TAG_HEIGHT = 30,
		TAG_WIDTH = 200,
		MAX_STRAIN = 40,

		// Factor of page height that needs to be dragged for the
		// curtain to fall
		DRAG_THRESHOLD = 0.36;

		VENDORS = [ 'Webkit', 'Moz', 'O', 'ms' ];

	var dom = {
			ribbon: null,
			ribbonString: null,
			ribbonTag: null,
			curtain: null,
			closeButton: null
		},

		// The current state of the ribbon
		state = STATE_CLOSED,

		// Ribbon text, correlates to states
		closedText = '',
		detachedText = '',

		friction = 1.04;
		gravity = 1.5,

		// Resting position of the ribbon when curtain is closed
		closedX = TAG_WIDTH * 0.4,
		closedY = -TAG_HEIGHT * 0.5,

		// Resting position of the ribbon when curtain is opened
		openedX = TAG_WIDTH * 0.4,
		openedY = TAG_HEIGHT,

		velocity = 0,
		rotation = 45,

		curtainTargetY = 0,
		curtainCurrentY = 0,

		dragging = false,
		dragTime = 0,
		dragY = 0,

		anchorA = new Point( closedX, closedY ),
		anchorB = new Point( closedX, closedY ),

		mouse = new Point();

	function initialize() {

		dom.ribbon = document.querySelector( '.forkit' );
		dom.curtain = document.querySelector( '.forkit-curtain' );
		dom.closeButton = document.querySelector( '.forkit-curtain .close-button' );

		if( dom.ribbon ) {

			// Fetch label texts from DOM
			closedText = dom.ribbon.getAttribute( 'data-text' ) || '';
			detachedText = dom.ribbon.getAttribute( 'data-text-detached' ) || closedText;

			// Construct the sub-elements required to represent the
			// tag and string that it hangs from
			dom.ribbon.innerHTML = '<span class="string"></span><span class="tag">' + closedText + '</span>';
			dom.ribbonString = dom.ribbon.querySelector( '.string' );
			dom.ribbonTag = dom.ribbon.querySelector( '.tag' );

			// Bind events
			dom.ribbon.addEventListener( 'click', onRibbonClick, false );
			document.addEventListener( 'mousemove', onMouseMove, false );
			document.addEventListener( 'mousedown', onMouseDown, false );
			document.addEventListener( 'mouseup', onMouseUp, false );
			document.addEventListener( 'touchstart', onTouchStart, false);
			document.addEventListener( 'touchmove', onTouchMove, false);
			document.addEventListener( 'touchend', onTouchEnd, false);
			window.addEventListener( 'resize', layout, false );

			if( dom.closeButton ) {
				dom.closeButton.addEventListener( 'click', onCloseClick, false );
			}

			// Start the animation loop
			animate();

		}

	}

	function onMouseDown( event ) {
		if( dom.curtain && state === STATE_DETACHED ) {
			event.preventDefault();
			dragY = event.clientY;
			dragTime = Date.now();
			dragging = true;

		}
	}

	function onMouseMove( event ) {
		mouse.x = event.clientX;
		mouse.y = event.clientY;
	}

	function onMouseUp( event ) {
		if( state !== STATE_OPENED ) {
			state = STATE_CLOSED;
			dragging = false;
		}
	}

	function onTouchStart( event ) {
		if( dom.curtain && state === STATE_DETACHED ) {
			event.preventDefault();
			var touch = event.touches[0];
			dragY = touch.clientY;
			dragTime = Date.now();
			dragging = true;
		}
	}

	function onTouchMove( event ) {
		var touch = event.touches[0];
		mouse.x = touch.pageX;
		mouse.y = touch.pageY;
	}

	function onTouchEnd( event ) {
		if( state !== STATE_OPENED ) {
			state = STATE_CLOSED;
			dragging = false;
		}
	}

	function onRibbonClick( event ) {
		if( dom.curtain ) {
			event.preventDefault();

			if( state === STATE_OPENED ) {
				close();
			}
			else if( Date.now() - dragTime < 300 ) {
				open();
			}
		}
	}

	function onCloseClick( event ) {
		event.preventDefault();
		close();
	}

	function layout() {
		if( state === STATE_OPENED ) {
			curtainTargetY = window.innerHeight;
			curtainCurrentY = curtainTargetY;
		}
	}

	function open() {
		dragging = false;
		state = STATE_OPENED;
		dispatchEvent( 'forkit-open' );
	}

	function close() {
		dragging = false;
		state = STATE_CLOSED;
		dom.ribbonTag.innerHTML = closedText;
		dispatchEvent( 'forkit-close' );
	}

	function detach() {
		state = STATE_DETACHED;
		dom.ribbonTag.innerHTML = detachedText;
	}

	function animate() {
		update();
		render();

		requestAnimFrame( animate );
	}

	function update() {
		// Distance between mouse and top right corner
		var distance = distanceBetween( mouse.x, mouse.y, window.innerWidth, 0 );

		// If we're OPENED the curtainTargetY should ease towards page bottom
		if( state === STATE_OPENED ) {
			curtainTargetY = Math.min( curtainTargetY + ( window.innerHeight - curtainTargetY ) * 0.2, window.innerHeight );
		}
		else {

			// Detach the tag when hovering close enough
			if( distance < TAG_WIDTH * 1.5 ) {
				detach();
			}
			// Re-attach the tag if the user moved away
			else if( !dragging && state === STATE_DETACHED && distance > TAG_WIDTH * 2 ) {
				close();
			}

			if( dragging ) {
				// Updat the curtain position while dragging
				curtainTargetY = Math.max( mouse.y - dragY, 0 );

				// If the threshold is crossed, open the curtain
				if( curtainTargetY > window.innerHeight * DRAG_THRESHOLD ) {
					open();
				}
			}
			else {
				curtainTargetY *= 0.8;
			}

		}

		// Ease towards the target position of the curtain
		curtainCurrentY += ( curtainTargetY - curtainCurrentY ) * 0.3;

		// If we're dragging or detached we need to simulate
		// the physical behavior of the ribbon
		if( dragging || state === STATE_DETACHED ) {

			// Apply forces
			velocity /= friction;
			velocity += gravity;

			var containerOffsetX = dom.ribbon.offsetLeft;

			var offsetX = Math.max( ( ( mouse.x - containerOffsetX ) - closedX ) * 0.2, -MAX_STRAIN );

			anchorB.x += ( ( closedX + offsetX ) - anchorB.x ) * 0.1;
			anchorB.y += velocity;

			var strain = distanceBetween( anchorA.x, anchorA.y, anchorB.x, anchorB.y );

			if( strain > MAX_STRAIN ) {
				velocity -= Math.abs( strain ) / ( MAX_STRAIN * 1.25 );
			}

			var dy = Math.max( mouse.y - anchorB.y, 0 ),
				dx = mouse.x - ( containerOffsetX + anchorB.x );

			// Angle the ribbon towards the mouse but limit it avoid extremes
			var angle = Math.min( 130, Math.max( 50, Math.atan2( dy, dx ) * 180 / Math.PI ) );

			rotation += ( angle - rotation ) * 0.1;
		}
		// Ease ribbon towards the OPENED state
		else if( state === STATE_OPENED ) {
			anchorB.x += ( openedX - anchorB.x ) * 0.2;
			anchorB.y += ( openedY - anchorB.y ) * 0.2;

			rotation += ( 90 - rotation ) * 0.02;
		}
		// Ease ribbon towards the CLOSED state
		else {
			anchorB.x += ( anchorA.x - anchorB.x ) * 0.2;
			anchorB.y += ( anchorA.y - anchorB.y ) * 0.2;

			rotation += ( 45 - rotation ) * 0.2;
		}
	}

	function render() {

		if( dom.curtain ) {
			dom.curtain.style.top = - 100 + Math.min( ( curtainCurrentY / window.innerHeight ) * 100, 100 ) + '%';
		}

		dom.ribbon.style[ prefix( 'transform' ) ] = transform( 0, curtainCurrentY, 0 );
		dom.ribbonTag.style[ prefix( 'transform' ) ] = transform( anchorB.x, anchorB.y, rotation );

		var dy = anchorB.y - anchorA.y,
			dx = anchorB.x - anchorA.x;

		var angle = Math.atan2( dy, dx ) * 180 / Math.PI;

		dom.ribbonString.style.width = anchorB.y + 'px';
		dom.ribbonString.style[ prefix( 'transform' ) ] = transform( anchorA.x, 0, angle );

	}

	function prefix( property, el ) {
		var propertyUC = property.slice( 0, 1 ).toUpperCase() + property.slice( 1 );

		for( var i = 0, len = VENDORS.length; i < len; i++ ) {
			var vendor = VENDORS[i];

			if( typeof ( el || document.body ).style[ vendor + propertyUC ] !== 'undefined' ) {
				return vendor + propertyUC;
			}
		}

		return property;
	}

	function transform( x, y, r ) {
		return 'translate('+x+'px,'+y+'px) rotate('+r+'deg)';
	}

	function distanceBetween( x1, y1, x2, y2 ) {
		var dx = x1-x2;
		var dy = y1-y2;
		return Math.sqrt(dx*dx + dy*dy);
	}

	function dispatchEvent( type ) {
		var event = document.createEvent( 'HTMLEvents', 1, 2 );
		event.initEvent( type, true, true );
		dom.ribbon.dispatchEvent( event );
	}

	/**
	 * Defines a 2D position.
	 */
	function Point( x, y ) {
		this.x = x || 0;
		this.y = y || 0;
	}

	Point.prototype.distanceTo = function( x, y ) {
		var dx = x-this.x;
		var dy = y-this.y;
		return Math.sqrt(dx*dx + dy*dy);
	};

	Point.prototype.clone = function() {
		return new Point( this.x, this.y );
	};

	Point.prototype.interpolate = function( x, y, amp ) {
		this.x += ( x - this.x ) * amp;
		this.y += ( y - this.y ) * amp;
	};

	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame 		||
				window.webkitRequestAnimationFrame	||
				window.mozRequestAnimationFrame		||
				window.oRequestAnimationFrame		||
				window.msRequestAnimationFrame		||
				function( callback ){
					window.setTimeout(callback, 1000 / 60);
				};
	})();

	initialize();

})()})


/*==========================Custom Scripts for site end===============================*/