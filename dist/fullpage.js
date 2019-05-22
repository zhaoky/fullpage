/*! @fe_korey/fullpage v1.0.0 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.fullpage=n():t.fullpage=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=30)}([function(t,n,e){var r=e(23)("wks"),o=e(24),i=e(1).Symbol,s="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.8"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(6),o=e(36),i=e(37),s=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(3),o=e(13);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){t.exports=e(31)},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(1),o=e(2),i=e(17),s=e(5),u=e(7),c=function(t,n,e){var a,f,d,l=t&c.F,h=t&c.G,p=t&c.S,v=t&c.P,y=t&c.B,x=t&c.W,m=h?o:o[n]||(o[n]={}),g=m.prototype,b=h?r:p?r[n]:(r[n]||{}).prototype;for(a in h&&(e=n),e)(f=!l&&b&&void 0!==b[a])&&u(m,a)||(d=f?b[a]:e[a],m[a]=h&&"function"!=typeof b[a]?e[a]:y&&f?i(d,r):x&&b[a]==d?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(d):v&&"function"==typeof d?i(Function.call,d):d,v&&((m.virtual||(m.virtual={}))[a]=d,t&c.R&&g&&!g[a]&&s(g,a,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n,e){var r=e(23)("keys"),o=e(24);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports=!0},function(t,n,e){var r=e(35);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(12),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(44),o=e(10);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(9),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(2),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(16)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(3).f,o=e(7),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(10);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var r=e(56);function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},function(t,n,e){"use strict";e.r(n),e.d(n,"Fullpage",function(){return l});var r=e(8),o=e.n(r),i=e(28),s=e.n(i),u=e(29),c=e.n(u);function a(){var t="ontouchend"in window.document;return{start:t?"touchstart":"mousedown",move:t?"touchmove":"mousemove",end:t?"touchend":"mouseup",wheel:"mousewheel"}}function f(t){return"[object String]"===Object.prototype.toString.call(t)}function d(){var t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"].every(function(t){return navigator.userAgent.indexOf(t)<0}),n=a();document.querySelector("body").addEventListener(n.start,function(n){t||!t&&"A"==n.target.nodeName||n.preventDefault()},{passive:!1})}var l=function(){function t(n){if(s()(this,t),!isObject(n))throw Error("Options must be object.");var e=n.root;if(!f(e)||f(e)&&"#"!==e.charAt(0))throw Error("Options.root must be Id (eg: #fullpage)");if(this.mainDom=document.getElementById(e.substr(1)),this.nodeList=this.mainDom.children,this.nodeListLen=this.nodeList.length,!this.nodeListLen)throw Error("No list elements were found under root");this.actionEvent=a(),this.init()}return c()(t,[{key:"init",value:function(){var t,n,e,r=/Mac\ OS\ X/.test(navigator.userAgent);this.curIndex=0,d(),this.createArrowDom(),this.resetAttr(),this.mainDom.addEventListener("mousewheel",(t=this.startWheelHandler,n=r?1200:100,e=new Date,function(){var r=new Date;console.log(r-e>n),r-e>n&&(t.apply(void 0,arguments),e=r)})),this.mainDom.addEventListener(this.actionEvent.start,this.touchStartHandler)}},{key:"createArrowDom",value:function(){var t=document.createElement("div");t.id="fullpage-arrow",t.style.cssText='\n    position: absolute;\n    bottom: 20px;\n    width: 20px;\n    height: 35px;\n    left: 50%;\n    z-index: 100;\n    background: url("../img/arrow.svg") no-repeat bottom center;\n    background-size: contain;\n    pointer-events: none;\n    transform: translateX(-50%);\n    animation: arrowAnimate 1.5s ease-in-out infinite;\n    ',this.mainDom.appendChild(t)}},{key:"startWheelHandler",value:function(t){this.moving||t.wheelDelta<0&&this.curIndex===this.nodeListLen-1||t.wheelDelta>0&&0===this.curIndex||(this.oldPageIndex=this.curIndex,t.wheelDelta<0?this.curIndex++:this.curIndex--,this.applyPageIndex())}},{key:"touchStartHandler",value:function(t){this.moving||(this.startTouchY=o()(t.changedTouches)[0].pageY,this.oldPageIndex=this.curIndex,this.mainDom.addEventListener(actionEvent.move,this.touchMoveHandler),this.mainDom.addEventListener(actionEvent.end,this.touchEndHandler))}},{key:"touchMoveHandler",value:function(t){this.moving||(this.disY=o()(t.changedTouches)[0].pageY-this.startTouchY,this.disY<0&&this.oldPageIndex===this.nodeListLen-1||this.disY>0&&0===this.oldPageIndex||(this.curIndex=this.disY<0?this.oldPageIndex+1:this.oldPageIndex-1,this.nodeList[this.curIndex].classList.add("touch-page"),this.nodeList[this.curIndex].style.transform="translateY(".concat((this.disY<0?this.mainDom.offsetHeight:-this.mainDom.offsetHeight)+this.disY,"px)"),this.nodeList[this.disY<0?this.curIndex-1:this.curIndex+1].style.transform="translateY(".concat(this.disY,"px)")))}},{key:"touchEndHandler",value:function(){this.moving||(Math.abs(this.disY)<100?this.littleBounce():this.applyPageIndex())}},{key:"littleBounce",value:function(){this.nodeList[this.curIndex].style.transform="",this.nodeList[this.curIndex].style.transition="transform 0.5s",this.nodeList[this.disY<0?this.curIndex-1:this.curIndex+1].style.transform="",this.nodeList[this.disY<0?this.curIndex-1:this.curIndex+1].style.transition="transform 0.5s",this.curIndex=this.disY>0?this.curIndex+1:this.curIndex-1,this.nodeList[this.curIndex].addEventListener("webkitTransitionEnd",this.resetAttr)}},{key:"applyPageIndex",value:function(){this.moving||(this.moving=!0,Math.abs(this.curIndex-this.oldPageIndex)>1&&(this.nodeList[this.curIndex].style.display="block",this.nodeList[this.curIndex].style.transform="translateY(".concat(this.curIndex<this.oldPageIndex&&"-","100%)")),this.nodeList[this.oldPageIndex].style.transform="translateY(".concat(this.curIndex>this.oldPageIndex&&"-","100%)"),this.nodeList[this.oldPageIndex].style.transition="transform 0.5s",this.nodeList[this.curIndex].classList.add("active"),this.nodeList[this.curIndex].addEventListener("webkitTransitionEnd",this.resetAttr))}},{key:"directToPage",value:function(t){this.oldPageIndex=this.curIndex,this.curIndex=t,applyPageIndex()}},{key:"resetAttr",value:function(){var t=this;o()(this.nodeList).map(function(n){n.classList.remove("prev-page","active","next-page","cur-page","touch-page"),n.style.transform="",n.style.transition="",n.removeEventListener("webkitTransitionEnd",t.resetAttr)}),this.nodeList[this.curIndex].classList.add("cur-page"),0!==this.curIndex&&this.nodeList[this.curIndex-1].classList.add("prev-page"),this.curIndex!==this.nodeListLen-1&&this.nodeList[this.curIndex+1].classList.add("next-page"),this.moving=!1,this.mainDom.removeEventListener(this.actionEvent.move,this.touchMoveHandler),this.mainDom.removeEventListener(this.actionEvent.end,this.touchEndHandler),this.mainDom.getElementById("fullpage-arrow").style.display=this.curIndex===this.nodeListLen-1?"none":"block"}}]),t}()},function(t,n,e){e(32),e(49),t.exports=e(2).Array.from},function(t,n,e){"use strict";var r=e(33)(!0);e(34)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(9),o=e(10);t.exports=function(t){return function(n,e){var i,s,u=String(o(n)),c=r(e),a=u.length;return c<0||c>=a?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):i:t?u.slice(c,c+2):s-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(16),o=e(11),i=e(38),s=e(5),u=e(14),c=e(39),a=e(26),f=e(48),d=e(0)("iterator"),l=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,p,v,y,x){c(e,n,p);var m,g,b,w=function(t){if(!l&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},I=n+" Iterator",L="values"==v,O=!1,P=t.prototype,E=P[d]||P["@@iterator"]||v&&P[v],j=E||w(v),S=v?L?w("entries"):j:void 0,_="Array"==n&&P.entries||E;if(_&&(b=f(_.call(new t)))!==Object.prototype&&b.next&&(a(b,I,!0),r||"function"==typeof b[d]||s(b,d,h)),L&&E&&"values"!==E.name&&(O=!0,j=function(){return E.call(this)}),r&&!x||!l&&!O&&P[d]||s(P,d,j),u[n]=j,u[I]=h,v)if(m={values:L?j:w("values"),keys:y?j:w("keys"),entries:S},x)for(g in m)g in P||i(P,g,m[g]);else o(o.P+o.F*(l||O),n,m);return m}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){t.exports=!e(4)&&!e(18)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(12);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=e(5)},function(t,n,e){"use strict";var r=e(40),o=e(13),i=e(26),s={};e(5)(s,e(0)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(s,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(6),o=e(41),i=e(25),s=e(15)("IE_PROTO"),u=function(){},c=function(){var t,n=e(19)("iframe"),r=i.length;for(n.style.display="none",e(47).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[s]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(3),o=e(6),i=e(42);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,s=i(n),u=s.length,c=0;u>c;)r.f(t,e=s[c++],n[e]);return t}},function(t,n,e){var r=e(43),o=e(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(7),o=e(20),i=e(45)(!1),s=e(15)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),c=0,a=[];for(e in u)e!=s&&r(u,e)&&a.push(e);for(;n.length>c;)r(u,e=n[c++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(20),o=e(22),i=e(46);t.exports=function(t){return function(n,e,s){var u,c=r(n),a=o(c.length),f=i(s,a);if(t&&e!=e){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(9),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(7),o=e(27),i=e(15)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,n,e){"use strict";var r=e(17),o=e(11),i=e(27),s=e(50),u=e(51),c=e(22),a=e(52),f=e(53);o(o.S+o.F*!e(55)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,d,l=i(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,y=void 0!==v,x=0,m=f(l);if(y&&(v=r(v,p>2?arguments[2]:void 0,2)),null==m||h==Array&&u(m))for(e=new h(n=c(l.length));n>x;x++)a(e,x,y?v(l[x],x):l[x]);else for(d=m.call(l),e=new h;!(o=d.next()).done;x++)a(e,x,y?s(d,v,[o.value,x],!0):o.value);return e.length=x,e}})},function(t,n,e){var r=e(6);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(14),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){"use strict";var r=e(3),o=e(13);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){var r=e(54),o=e(0)("iterator"),i=e(14);t.exports=e(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(21),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],s=i[r]();s.next=function(){return{done:e=!0}},i[r]=function(){return s},t(i)}catch(t){}return e}},function(t,n,e){t.exports=e(57)},function(t,n,e){e(58);var r=e(2).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(11);r(r.S+r.F*!e(4),"Object",{defineProperty:e(3).f})}])});
