(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{118:function(t,n,r){},17:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},18:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},19:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},20:function(t,n,r){var e=r(18),i=r(26),o=r(24),s=r(29),u=r(39),c=function(t,n,r){var a,l,f,p,h=t&c.F,v=t&c.G,g=t&c.S,d=t&c.P,b=t&c.B,x=v?e:g?e[n]||(e[n]={}):(e[n]||{}).prototype,y=v?i:i[n]||(i[n]={}),m=y.prototype||(y.prototype={});for(a in v&&(r=n),r)f=((l=!h&&x&&void 0!==x[a])?x:r)[a],p=b&&l?u(f,e):d&&"function"==typeof f?u(Function.call,f):f,x&&s(x,a,f,t&c.U),y[a]!=f&&o(y,a,p),d&&m[a]!=f&&(m[a]=f)};e.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},21:function(t,n,r){var e=r(32)("wks"),i=r(33),o=r(18).Symbol,s="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=e},22:function(t,n,r){var e=r(19);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},23:function(t,n,r){t.exports=!r(17)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},236:function(t,n,r){"use strict";var e=r(118);r.n(e).a},24:function(t,n,r){var e=r(34),i=r(38);t.exports=r(23)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},246:function(t,n,r){"use strict";r.r(n);r(54),r(62);var e={data:function(){return{qarr:["2,4,6,8,10,12,14,16","3,4,7,8,11,12,15,16","5,6,7,8,13,14,15,16","9,10,11,12,13,14,15,16","2,3,5,8,10,11,13,16","2,3,6,7,9,12,13,16","2,4,5,7,9,11,14,16"],sfl:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],ans:[],step:0,gstate:"open",records:[],tarr:[],message:""}},methods:{gstart:function(){this.step=1,this.ans=[],this.records=[],this.tarr=[],this.message="";for(var t=15;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=this.sfl[t];this.sfl[t]=this.sfl[n],this.sfl[n]=r}this.gstate="game"},byes:function(){this.records.push({id:this.step,num:this.tarr,ans:"Y"}),this.ans.push(1),this.step<7?this.step++:this.ncheck()},bno:function(){this.records.push({id:this.step,num:this.tarr,ans:"N"}),this.ans.push(0),this.step<7?this.step++:this.ncheck()},ncheck:function(){var t=1,n=-1,r="";(this.ans[0]+this.ans[1]+this.ans[2]+this.ans[4])%2==0?r+="0":(r+="1",n=4),(this.ans[0]+this.ans[1]+this.ans[3]+this.ans[5])%2==0?r+="0":(r+="1",n=5),(this.ans[0]+this.ans[2]+this.ans[3]+this.ans[6])%2==0?r+="0":(r+="1",n=6),"111"==r&&(n=0),"110"==r&&(n=1),"101"==r&&(n=2),"011"==r&&(n=3);for(var e=0;e<4;e++)t+=e==n?(1-this.ans[e])*(1<<e):this.ans[e]*(1<<e);this.message=n>=0?'Your number is <span class="answer">'+this.sfl[t-1]+'</span>. You lied for Q<span class="answer">'+(n+1)+"</span>!":'Your number is <span class="answer">'+this.sfl[t-1]+"</span>. You didn't lie, that's great!",this.gstate="end"}},computed:{numberList:function(){for(var t=this.qarr[this.step-1].split(","),n=[],r=0;r<8;r++)n[r]=this.sfl[t[r]-1];n.sort((function(t,n){return t-n})),this.tarr=n;var e="";for(r=0;r<8;r++)e+='<span class="digit">'+n[r]+"</span> ";return e}}},i=(r(236),r(2)),o=Object(i.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-container",["open"==t.gstate?r("div",[r("b-row",{staticClass:"question"},[t._v("\n      Think a number between 1~16.\n      "),r("br"),t._v("Answer the following questions and lie at most once.\n      "),r("br"),t._v(" "),r("br")]),t._v(" "),r("p",{attrs:{align:"center"}},[r("b-button",{attrs:{id:"gstart",size:"lg",variant:"outline-success"},on:{click:t.gstart}},[t._v("GO")])],1)],1):"game"==t.gstate?r("div",[r("div",{staticClass:"question"},[t._v("\n      Q"+t._s(t.step)+": Number in the following list?\n      "),r("br"),t._v(" "),r("p",{staticClass:"numbers",domProps:{innerHTML:t._s(t.numberList)}}),t._v(" "),r("br"),t._v(" "),r("p",{attrs:{align:"center"}},[r("b-button",{staticClass:"btn btn-lg long",attrs:{id:"byes",variant:"success"},on:{click:t.byes}},[t._v("Y")]),t._v(" "),r("span",{staticStyle:{display:"inline-block",width:"60px"}}),t._v(" "),r("b-button",{staticClass:"btn btn-lg long",attrs:{id:"bno",variant:"warning"},on:{click:t.bno}},[t._v("N")])],1)])]):r("div",[r("b-row",{staticClass:"question"},[r("p",{domProps:{innerHTML:t._s(t.message)}}),t._v("Again?"),r("br"),r("br"),t._v(" "),t.gstate?r("b-button",{staticClass:"btn btn-lg center-block",attrs:{id:"byes",variant:"info"},on:{click:function(n){t.gstate="open"}}},[t._v("OK")]):t._e()],1)],1),t._v(" "),r("hr"),t._v(" "),"open"!=t.gstate?r("div",{staticClass:"records"},t._l(t.records,(function(n,e){return r("div",[t._v("\n      Q"+t._s(n.id)+".  "+t._s(n.num)+" ==> "+t._s(n.ans)+"\n      "),r("br")])})),0):t._e()])}),[],!1,null,"05f1fa88",null);n.default=o.exports},25:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},26:function(t,n){var r=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)},27:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},28:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},29:function(t,n,r){var e=r(18),i=r(24),o=r(35),s=r(33)("src"),u=r(45),c=(""+u).split("toString");r(26).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,r,u){var a="function"==typeof r;a&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(a&&(o(r,s)||i(r,s,t[n]?""+t[n]:c.join(String(n)))),t===e?t[n]=r:u?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[s]||u.call(this)}))},30:function(t,n,r){"use strict";var e=r(17);t.exports=function(t,n){return!!t&&e((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},31:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},32:function(t,n,r){var e=r(26),i=r(18),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(41)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},33:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},34:function(t,n,r){var e=r(22),i=r(42),o=r(44),s=Object.defineProperty;n.f=r(23)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return s(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},35:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},36:function(t,n,r){var e=r(28),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},37:function(t,n,r){var e=r(25);t.exports=function(t){return Object(e(t))}},38:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},39:function(t,n,r){var e=r(27);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},40:function(t,n,r){"use strict";var e,i,o=r(57),s=RegExp.prototype.exec,u=String.prototype.replace,c=s,a=(e=/a/,i=/b*/g,s.call(e,"a"),s.call(i,"a"),0!==e.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(a||l)&&(c=function(t){var n,r,e,i,c=this;return l&&(r=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),a&&(n=c.lastIndex),e=s.call(c,t),a&&e&&(c.lastIndex=c.global?e.index+e[0].length:n),l&&e&&e.length>1&&u.call(e[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(e[i]=void 0)})),e}),t.exports=c},41:function(t,n){t.exports=!1},42:function(t,n,r){t.exports=!r(23)&&!r(17)((function(){return 7!=Object.defineProperty(r(43)("div"),"a",{get:function(){return 7}}).a}))},43:function(t,n,r){var e=r(19),i=r(18).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},44:function(t,n,r){var e=r(19);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},45:function(t,n,r){t.exports=r(32)("native-function-to-string",Function.toString)},50:function(t,n,r){var e=r(19),i=r(31),o=r(21)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},51:function(t,n,r){"use strict";var e=r(64)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},52:function(t,n,r){"use strict";var e=r(65),i=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var o=r.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==e(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},53:function(t,n,r){"use strict";r(66);var e=r(29),i=r(24),o=r(17),s=r(25),u=r(21),c=r(40),a=u("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,n,r){var p=u(t),h=!o((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),v=h?!o((function(){var n=!1,r=/a/;return r.exec=function(){return n=!0,null},"split"===t&&(r.constructor={},r.constructor[a]=function(){return r}),r[p](""),!n})):void 0;if(!h||!v||"replace"===t&&!l||"split"===t&&!f){var g=/./[p],d=r(s,p,""[t],(function(t,n,r,e,i){return n.exec===c?h&&!i?{done:!0,value:g.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),b=d[0],x=d[1];e(String.prototype,t,b),i(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},54:function(t,n,r){"use strict";var e=r(20),i=r(27),o=r(37),s=r(17),u=[].sort,c=[1,2,3];e(e.P+e.F*(s((function(){c.sort(void 0)}))||!s((function(){c.sort(null)}))||!r(30)(u)),"Array",{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),i(t))}})},57:function(t,n,r){"use strict";var e=r(22);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},62:function(t,n,r){"use strict";var e=r(50),i=r(22),o=r(63),s=r(51),u=r(36),c=r(52),a=r(40),l=r(17),f=Math.min,p=[].push,h=!l((function(){RegExp(4294967295,"y")}));r(53)("split",2,(function(t,n,r,l){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!e(t))return r.call(i,t,n);for(var o,s,u,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===n?4294967295:n>>>0,v=new RegExp(t.source,l+"g");(o=a.call(v,i))&&!((s=v.lastIndex)>f&&(c.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&p.apply(c,o.slice(1)),u=o[0].length,f=s,c.length>=h));)v.lastIndex===o.index&&v.lastIndex++;return f===i.length?!u&&v.test("")||c.push(""):c.push(i.slice(f)),c.length>h?c.slice(0,h):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r.call(this,t,n)}:r,[function(r,e){var i=t(this),o=null==r?void 0:r[n];return void 0!==o?o.call(r,i,e):v.call(String(i),r,e)},function(t,n){var e=l(v,t,this,n,v!==r);if(e.done)return e.value;var a=i(t),p=String(this),g=o(a,RegExp),d=a.unicode,b=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(h?"y":"g"),x=new g(h?a:"^(?:"+a.source+")",b),y=void 0===n?4294967295:n>>>0;if(0===y)return[];if(0===p.length)return null===c(x,p)?[p]:[];for(var m=0,_=0,w=[];_<p.length;){x.lastIndex=h?_:0;var E,S=c(x,h?p:p.slice(_));if(null===S||(E=f(u(x.lastIndex+(h?0:_)),p.length))===m)_=s(p,_,d);else{if(w.push(p.slice(m,_)),w.length===y)return w;for(var k=1;k<=S.length-1;k++)if(w.push(S[k]),w.length===y)return w;_=m=E}}return w.push(p.slice(m)),w}]}))},63:function(t,n,r){var e=r(22),i=r(27),o=r(21)("species");t.exports=function(t,n){var r,s=e(t).constructor;return void 0===s||null==(r=e(s)[o])?n:i(r)}},64:function(t,n,r){var e=r(28),i=r(25);t.exports=function(t){return function(n,r){var o,s,u=String(i(n)),c=e(r),a=u.length;return c<0||c>=a?t?"":void 0:(o=u.charCodeAt(c))<55296||o>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):o:t?u.slice(c,c+2):s-56320+(o-55296<<10)+65536}}},65:function(t,n,r){var e=r(31),i=r(21)("toStringTag"),o="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:o?e(n):"Object"==(s=e(n))&&"function"==typeof n.callee?"Arguments":s}},66:function(t,n,r){"use strict";var e=r(40);r(20)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})}}]);