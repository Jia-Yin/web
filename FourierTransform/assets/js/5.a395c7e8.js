(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11,12],{318:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},319:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},320:function(t,n,e){var r=e(331)("wks"),i=e(330),o=e(318).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},321:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},322:function(t,n,e){var r=e(333),i=e(337);t.exports=e(323)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},323:function(t,n,e){t.exports=!e(319)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},324:function(t,n,e){var r=e(321);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},325:function(t,n,e){var r=e(318),i=e(326),o=e(322),s=e(329),u=e(338),c=function(t,n,e){var a,l,f,p,h=t&c.F,v=t&c.G,d=t&c.S,g=t&c.P,x=t&c.B,_=v?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,b=v?i:i[n]||(i[n]={}),y=b.prototype||(b.prototype={});for(a in v&&(e=n),e)f=((l=!h&&_&&void 0!==_[a])?_:e)[a],p=x&&l?u(f,r):g&&"function"==typeof f?u(Function.call,f):f,_&&s(_,a,f,t&c.U),b[a]!=f&&o(b,a,p),g&&y[a]!=f&&(y[a]=f)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},326:function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},327:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},328:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},329:function(t,n,e){var r=e(318),i=e(322),o=e(334),s=e(330)("src"),u=e(343),c=(""+u).split("toString");e(326).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var a="function"==typeof e;a&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(a&&(o(e,s)||i(e,s,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},330:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},331:function(t,n,e){var r=e(326),i=e(318),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(342)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},332:function(t,n,e){var r=e(328),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},333:function(t,n,e){var r=e(324),i=e(339),o=e(341),s=Object.defineProperty;n.f=e(323)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},334:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},335:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},336:function(t,n,e){var r=e(327);t.exports=function(t){return Object(r(t))}},337:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},338:function(t,n,e){var r=e(335);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},339:function(t,n,e){t.exports=!e(323)&&!e(319)(function(){return 7!=Object.defineProperty(e(340)("div"),"a",{get:function(){return 7}}).a})},340:function(t,n,e){var r=e(321),i=e(318).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},341:function(t,n,e){var r=e(321);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},342:function(t,n){t.exports=!1},343:function(t,n,e){t.exports=e(331)("native-function-to-string",Function.toString)},344:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},345:function(t,n,e){"use strict";var r=e(319);t.exports=function(t,n){return!!t&&r(function(){n?t.call(null,function(){},1):t.call(null)})}},347:function(t,n,e){"use strict";var r,i,o=e(361),s=RegExp.prototype.exec,u=String.prototype.replace,c=s,a=(r=/a/,i=/b*/g,s.call(r,"a"),s.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(a||l)&&(c=function(t){var n,e,r,i,c=this;return l&&(e=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),a&&(n=c.lastIndex),r=s.call(c,t),a&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),l&&r&&r.length>1&&u.call(r[0],e,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=c},348:function(t,n,e){},349:function(t,n,e){},352:function(t,n,e){"use strict";var r=e(360)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},353:function(t,n,e){"use strict";var r=e(371),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},354:function(t,n,e){"use strict";e(372);var r=e(329),i=e(322),o=e(319),s=e(327),u=e(320),c=e(347),a=u("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=u(t),h=!o(function(){var n={};return n[p]=function(){return 7},7!=""[t](n)}),v=h?!o(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[a]=function(){return e}),e[p](""),!n}):void 0;if(!h||!v||"replace"===t&&!l||"split"===t&&!f){var d=/./[p],g=e(s,p,""[t],function(t,n,e,r,i){return n.exec===c?h&&!i?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),x=g[0],_=g[1];r(String.prototype,t,x),i(RegExp.prototype,p,2==n?function(t,n){return _.call(t,this,n)}:function(t){return _.call(t,this)})}}},360:function(t,n,e){var r=e(328),i=e(327);t.exports=function(t){return function(n,e){var o,s,u=String(i(n)),c=r(e),a=u.length;return c<0||c>=a?t?"":void 0:(o=u.charCodeAt(c))<55296||o>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):o:t?u.slice(c,c+2):s-56320+(o-55296<<10)+65536}}},361:function(t,n,e){"use strict";var r=e(324);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},362:function(t,n,e){var r=e(321),i=e(344),o=e(320)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},371:function(t,n,e){var r=e(344),i=e(320)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},372:function(t,n,e){"use strict";var r=e(347);e(325)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},388:function(t,n,e){"use strict";var r=e(362),i=e(324),o=e(389),s=e(352),u=e(332),c=e(353),a=e(347),l=e(319),f=Math.min,p=[].push,h=!l(function(){RegExp(4294967295,"y")});e(354)("split",2,function(t,n,e,l){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,s,u,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===n?4294967295:n>>>0,v=new RegExp(t.source,l+"g");(o=a.call(v,i))&&!((s=v.lastIndex)>f&&(c.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&p.apply(c,o.slice(1)),u=o[0].length,f=s,c.length>=h));)v.lastIndex===o.index&&v.lastIndex++;return f===i.length?!u&&v.test("")||c.push(""):c.push(i.slice(f)),c.length>h?c.slice(0,h):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):v.call(String(i),e,r)},function(t,n){var r=l(v,t,this,n,v!==e);if(r.done)return r.value;var a=i(t),p=String(this),d=o(a,RegExp),g=a.unicode,x=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(h?"y":"g"),_=new d(h?a:"^(?:"+a.source+")",x),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===p.length)return null===c(_,p)?[p]:[];for(var y=0,m=0,w=[];m<p.length;){_.lastIndex=h?m:0;var E,S=c(_,h?p:p.slice(m));if(null===S||(E=f(u(_.lastIndex+(h?0:m)),p.length))===y)m=s(p,m,g);else{if(w.push(p.slice(y,m)),w.length===b)return w;for(var j=1;j<=S.length-1;j++)if(w.push(S[j]),w.length===b)return w;m=y=E}}return w.push(p.slice(y)),w}]})},389:function(t,n,e){var r=e(324),i=e(335),o=e(320)("species");t.exports=function(t,n){var e,s=r(t).constructor;return void 0===s||null==(e=r(s)[o])?n:i(e)}},390:function(t,n,e){"use strict";var r=e(348);e.n(r).a},391:function(t,n,e){"use strict";var r=e(349);e.n(r).a},392:function(t,n,e){},412:function(t,n,e){"use strict";e.r(n);var r={props:["step"]},i=(e(391),e(15)),o=Object(i.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"question"},[n("span",{staticClass:"qhead"},[this._v("Q"+this._s(this.step))]),this._v(" "),this._t("default")],2)},[],!1,null,"119463f8",null);n.default=o.exports},413:function(t,n,e){"use strict";e.r(n);var r={},i=(e(390),e(15)),o=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"question"},[this._t("default")],2)},[],!1,null,"39bb40e4",null);n.default=o.exports},477:function(t,n,e){"use strict";var r=e(325),i=e(335),o=e(336),s=e(319),u=[].sort,c=[1,2,3];r(r.P+r.F*(s(function(){c.sort(void 0)})||!s(function(){c.sort(null)})||!e(345)(u)),"Array",{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),i(t))}})},478:function(t,n,e){"use strict";var r=e(392);e.n(r).a},499:function(t,n,e){"use strict";e.r(n);e(477),e(388);var r=e(413),i=e(412),o={components:{QuestionIntro:r.default,QuestionMessage:i.default},data:function(){return{qarr:["2,4,6,8,10,12,14,16","3,4,7,8,11,12,15,16","5,6,7,8,13,14,15,16","9,10,11,12,13,14,15,16","2,3,5,8,10,11,13,16","2,3,6,7,9,12,13,16","2,4,5,7,9,11,14,16"],sfl:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],ans:[],step:0,gstate:"open",records:[],tarr:[],ansnum:-1,cheat:-1}},methods:{gstart:function(){this.step=1,this.ans=[],this.records=[],this.tarr=[],this.ansnum=-1,this.cheat=-1;for(var t=15;t>0;t--){var n=Math.floor(Math.random()*(t+1)),e=this.sfl[t];this.sfl[t]=this.sfl[n],this.sfl[n]=e}this.gstate="game"},byes:function(){this.records.push({id:this.step,num:this.tarr,ans:"Y"}),this.ans.push(1),this.step<7?this.step++:this.ncheck()},bno:function(){this.records.push({id:this.step,num:this.tarr,ans:"N"}),this.ans.push(0),this.step<7?this.step++:this.ncheck()},ncheck:function(){var t=1,n=-1,e="";(this.ans[0]+this.ans[1]+this.ans[2]+this.ans[4])%2==0?e+="0":(e+="1",n=4),(this.ans[0]+this.ans[1]+this.ans[3]+this.ans[5])%2==0?e+="0":(e+="1",n=5),(this.ans[0]+this.ans[2]+this.ans[3]+this.ans[6])%2==0?e+="0":(e+="1",n=6),"111"==e&&(n=0),"110"==e&&(n=1),"101"==e&&(n=2),"011"==e&&(n=3);for(var r=0;r<4;r++)t+=r==n?(1-this.ans[r])*(1<<r):this.ans[r]*(1<<r);this.ansnum=this.sfl[t-1],n>=0&&(this.cheat=n+1),this.gstate="end"}},computed:{numberList:function(){for(var t=this.qarr[this.step-1].split(","),n=[],e=0;e<8;e++)n[e]=this.sfl[t[e]-1];return n.sort(function(t,n){return t-n}),this.tarr=n,n}}},s=(e(478),e(15)),u=Object(s.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hcontent"},["open"==t.gstate?e("div",[e("question-intro",{staticClass:"question"},[e("p",[t._v("請從1～16中想一個數字，回答以下問題，最多說謊一次。")]),t._v(" "),e("p",[t._v("準備好了嗎？")])]),t._v(" "),e("br"),t._v(" "),e("b-button",{attrs:{id:"gstart",variant:"success"},on:{click:t.gstart}},[t._v("好")])],1):"game"==t.gstate?e("div",[e("question-message",{attrs:{step:t.step}},[t._v("\n      請問是下面其中的一個數嗎？\n    ")]),t._v(" "),t._l(t.numberList,function(n){return e("span",[t._v(t._s(n)+" ")])}),t._v(" "),e("br"),e("br"),t._v(" "),e("b-button",{attrs:{id:"bguess",variant:"success"},on:{click:t.byes}},[t._v("是")]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"60px"}}),t._v(" "),e("b-button",{attrs:{id:"bok",variant:"warning"},on:{click:t.bno}},[t._v("否")])],2):e("div",[e("question-intro",{staticClass:"question"},[t.cheat>0?e("p",[t._v("\n        你想的數是"),e("span",{staticClass:"answer"},[t._v(t._s(t.ansnum))]),t._v("，\n        你第"),e("span",{staticClass:"answer"},[t._v(t._s(t.cheat))]),t._v("次騙我！\n      ")]):e("p",[t._v("\n        你想的數是"),e("span",{staticClass:"answer"},[t._v(t._s(t.ansnum))]),t._v("，\n        你都沒有騙我！ \n      ")]),t._v(" "),e("p",[t._v("是否重來一次？")])]),e("br"),t._v(" "),t.gstate?e("b-button",{attrs:{id:"byes",variant:"success"},on:{click:function(n){t.gstate="open"}}},[t._v("好")]):t._e()],1),t._v(" "),e("br"),t._v(" "),"open"!=t.gstate?e("div",{staticClass:"records"},t._l(t.records,function(n){return e("div",[e("p",[t._v(t._s(n.id)+".  "+t._s(n.num)+"  ==> "+t._s(n.ans))])])}),0):t._e(),e("br")])},[],!1,null,"281a3368",null);n.default=u.exports}}]);