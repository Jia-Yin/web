(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(318).concat([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(332)("wks"),i=n(331),o=n(318).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(321);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(335),i=n(340);t.exports=n(324)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(320)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(318),i=n(327),o=n(323),a=n(330),s=n(337),u=function(t,e,n){var c,l,f,p,h=t&u.F,d=t&u.G,v=t&u.S,g=t&u.P,m=t&u.B,b=d?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,x=d?i:i[e]||(i[e]={}),_=x.prototype||(x.prototype={});for(c in d&&(n=e),n)f=((l=!h&&b&&void 0!==b[c])?b:n)[c],p=m&&l?s(f,r):g&&"function"==typeof f?s(Function.call,f):f,b&&a(b,c,f,t&u.U),x[c]!=f&&o(x,c,p),g&&_[c]!=f&&(_[c]=f)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(328),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(318),i=n(323),o=n(333),a=n(331)("src"),s=n(346),u=(""+s).split("toString");n(327).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,a)||i(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||s.call(this)})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(327),i=n(318),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(345)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(322),i=n(342),o=n(344),a=Object.defineProperty;e.f=n(324)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(326);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(338);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r,i,o=n(355),a=RegExp.prototype.exec,s=String.prototype.replace,u=a,c=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(c||l)&&(u=function(t){var e,n,r,i,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",o.call(u))),c&&(e=u.lastIndex),r=a.call(u,t),c&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),l&&r&&r.length>1&&s.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=u},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(320);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){t.exports=!n(324)&&!n(320)(function(){return 7!=Object.defineProperty(n(343)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(321),i=n(318).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(321);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=!1},function(t,e,n){t.exports=n(332)("native-function-to-string",Function.toString)},function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"i",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return f}),n.d(e,"e",function(){return p}),n.d(e,"k",function(){return h}),n.d(e,"l",function(){return d}),n.d(e,"c",function(){return v}),n.d(e,"j",function(){return g});const r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,a=/^(https?:|mailto:|tel:)/;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=s(t);return o.test(i)?t:i+".html"+n}function p(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&s(t.path)===s(e)}function h(t,e,n){n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=s(e);for(let e=0;e<t.length;e++)if(s(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:o}=n,a=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||a.sidebar||o.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const s=a.sidebar||o.sidebar;if(s){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,s);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const o=e.children||[];return 0===o.length&&e.path?Object.assign(h(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},function(t,e,n){"use strict";var r=n(359)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){"use strict";var r=n(360),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n(361);var r=n(330),i=n(323),o=n(320),a=n(326),s=n(319),u=n(339),c=s("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=s(t),h=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=h?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[p](""),!e}):void 0;if(!h||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[p],g=n(a,p,""[t],function(t,e,n,r,i){return e.exec===u?h&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),m=g[0],b=g[1];r(String.prototype,t,m),i(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){var r=n(357),i=n(326);t.exports=function(t){return r(i(t))}},,,function(t,e,n){var r=n(337),i=n(357),o=n(336),a=n(329),s=n(370);t.exports=function(t,e){var n=1==t,u=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f,h=e||s;return function(e,s,d){for(var v,g,m=o(e),b=i(m),x=r(s,d,3),_=a(b.length),y=0,k=n?h(e,_):u?h(e,0):void 0;_>y;y++)if((p||y in b)&&(g=x(v=b[y],y,m),t))if(n)k[y]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return y;case 2:k.push(v)}else if(l)return!1;return f?-1:c||l?l:k}}},function(t,e,n){"use strict";var r=n(322);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(328),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(334);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var r=n(328),i=n(326);t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(o=s.charCodeAt(u))<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):o:t?s.slice(u,u+2):a-56320+(o-55296<<10)+65536}}},function(t,e,n){var r=n(334),i=n(319)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";var r=n(339);n(325)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){var r=n(332)("keys"),i=n(331);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(321),i=n(334),o=n(319)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){"use strict";var r=n(325),i=n(354)(3);r(r.P+r.F*!n(341)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){var r=n(351),i=n(329),o=n(356);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=i(u.length),l=o(a,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){"use strict";var r=n(322),i=n(336),o=n(329),a=n(328),s=n(348),u=n(349),c=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(350)("replace",2,function(t,e,n,d){return[function(r,i){var o=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var f=r(t),p=String(this),h="function"==typeof e;h||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var x=u(f,p);if(null===x)break;if(b.push(x),!g)break;""===String(x[0])&&(f.lastIndex=s(p,o(f.lastIndex),m))}for(var _,y="",k=0,$=0;$<b.length;$++){x=b[$];for(var C=String(x[0]),w=c(l(a(x.index),p.length),0),S=[],O=1;O<x.length;O++)S.push(void 0===(_=x[O])?_:String(_));var L=x.groups;if(h){var j=[C].concat(S,w,p);void 0!==L&&j.push(L);var E=String(e.apply(void 0,j))}else E=v(C,p,w,S,L,e);w>=k&&(y+=p.slice(k,w)+E,k=w+C.length)}return y+p.slice(k)}];function v(t,e,r,o,a,s){var u=r+t.length,c=o.length,l=h;return void 0!==a&&(a=i(a),l=p),n.call(s,l,function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":s=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>c){var p=f(l/10);return 0===p?n:p<=c?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):n}s=o[l-1]}return void 0===s?"":s})}})},function(t,e,n){"use strict";var r=n(325),i=n(354)(1);r(r.P+r.F*!n(341)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},,function(t,e,n){var r=n(371);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(321),i=n(372),o=n(319)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(334);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){},function(t,e,n){var r=n(26),i=n(46),o=n(29),a=n(358),s="["+a+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=o(function(){return!!a[t]()||"​"!="​"[t]()}),u=i[t]=s?e(f):a[t];n&&(i[n]=u),r(r.P+r.F*s,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e,n){},function(t,e,n){},function(t,e,n){var r=n(333),i=n(351),o=n(365)(!1),a=n(362)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(322),i=n(329),o=n(348),a=n(349);n(350)("match",1,function(t,e,n,s){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var u=r(t),c=String(this);if(!u.global)return a(u,c);var l=u.unicode;u.lastIndex=0;for(var f,p=[],h=0;null!==(f=a(u,c));){var d=String(f[0]);p[h]=d,""===d&&(u.lastIndex=o(c,i(u.lastIndex),l)),h++}return 0===h?null:p}]})},function(t,e,n){t.exports=n(415)},,,function(t,e,n){"use strict";n.r(e);n(364);var r=n(347),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(406).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(403).default},methods:{isActive:r.e}},o=(n(436),n(15)),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(368);function s(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function u(t,e,n,i,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[s(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,i,o,a+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,o=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,p=l.sidebarDepth,h=Object(r.e)(o,f.path),d="auto"===f.type?h||f.children.some(function(t){return Object(r.e)(o,f.basePath+"#"+t.slug)}):h,v=s(t,f.path,f.title||f.path,d),g=i.frontmatter.sidebarDepth||p||c.sidebarDepth||a.sidebarDepth,m=null==g?1:g,b=c.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[v,u(t,f.children,f.basePath,o,m)]:(d||b)&&f.headers&&!r.d.test(f.path)?[v,u(t,Object(r.c)(f.headers),f.path,o,m)]:v}};n(437);var l={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(o.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return"page"===e.type&&Object(r.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},f=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=f.exports},,,function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(431),n(15)),o=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";n(408)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){var r=n(325),i=n(320),o=n(326),a=/"/g,s=function(t,e,n,r){var i=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";var r=n(373);n.n(r).a},function(t,e,n){t.exports=n(411)},function(t,e,n){n(412),t.exports=n(11).parseInt},function(t,e,n){var r=n(26),i=n(413);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,e,n){var r=n(16).parseInt,i=n(374).trim,o=n(358),a=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},function(t,e,n){"use strict";var r=n(325),i=n(354)(2);r(r.P+r.F*!n(341)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,n){n(416),t.exports=n(11).Object.assign},function(t,e,n){var r=n(26);r(r.S+r.F,"Object",{assign:n(417)})},function(t,e,n){"use strict";var r=n(36),i=n(72),o=n(47),a=n(48),s=n(143),u=Object.assign;t.exports=!u||n(29)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,c=1,l=i.f,f=o.f;u>c;)for(var p,h=s(arguments[c++]),d=l?r(h).concat(l(h)):r(h),v=d.length,g=0;v>g;)f.call(h,p=d[g++])&&(n[p]=h[p]);return n}:u},function(t,e,n){"use strict";var r=n(325),i=n(365)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!n(341)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){"use strict";n(420)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){var r=n(325),i=n(326),o=n(320),a=n(421),s="["+a+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=o(function(){return!!a[t]()||"​"!="​"[t]()}),u=i[t]=s?e(f):a[t];n&&(i[n]=u),r(r.P+r.F*s,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(375);n.n(r).a},function(t,e,n){"use strict";var r=n(376);n.n(r).a},function(t,e,n){var r=n(318),i=n(425),o=n(335).f,a=n(429).f,s=n(363),u=n(355),c=r.RegExp,l=c,f=c.prototype,p=/a/g,h=/a/g,d=new c(p)!==p;if(n(324)&&(!d||n(320)(function(){return h[n(319)("match")]=!1,c(p)!=p||c(h)==h||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,r=s(t),o=void 0===e;return!n&&r&&t.constructor===c&&o?t:i(d?new l(r&&!o?t.source:t,e):l((r=t instanceof c)?t.source:t,r&&o?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||o(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=a(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(330)(r,"RegExp",c)}n(430)("RegExp")},function(t,e,n){var r=n(321),i=n(426).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){var r=n(321),i=n(322),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(337)(Function.call,n(427).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){var r=n(428),i=n(340),o=n(351),a=n(344),s=n(333),u=n(342),c=Object.getOwnPropertyDescriptor;e.f=n(324)?c:function(t,e){if(t=o(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(377),i=n(366).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){"use strict";var r=n(318),i=n(335),o=n(324),a=n(319)("species");t.exports=function(t){var e=r[t];o&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(378);n.n(r).a},function(t,e,n){"use strict";var r=n(379);n.n(r).a},function(t,e,n){"use strict";var r=n(380);n.n(r).a},function(t,e,n){"use strict";var r=n(381);n.n(r).a},function(t,e,n){"use strict";var r=n(382);n.n(r).a},function(t,e,n){"use strict";var r=n(383);n.n(r).a},function(t,e,n){"use strict";var r=n(384);n.n(r).a},function(t,e,n){"use strict";var r=n(385);n.n(r).a},function(t,e,n){"use strict";var r=n(386);n.n(r).a},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(73),i=n.n(r),o=(n(364),n(407),n(347)),a={props:{item:{required:!0}},computed:{link:function(){return Object(o.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?i()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:o.f,isMailto:o.g,isTel:o.h}},s=n(15),u=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,c={components:{NavLink:u},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(409),Object(s.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),f=n(410),p=n.n(f),h=(n(399),n(414),n(132)),d=n.n(h),v=n(400),g=n.n(v),m=(n(418),n(419),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},i=[],o=0;o<e.length&&!(i.length>=5);o++){var a=e[o];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(r(a))i.push(a);else if(a.headers)for(var s=0;s<a.headers.length&&!(i.length>=5);s++){var u=a.headers[s];r(u)&&i.push(g()({},a,{path:a.path+"#"+u.slug,header:u}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=d()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),b=(n(422),Object(s.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),x=(n(423),Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),_=(n(424),n(136)),y=(n(367),n(368),{components:{NavLink:u,DropdownTransition:n(406).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),k=(n(432),{components:{NavLink:u,DropdownLink:Object(s.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&i()(e).length>1){var n=this.$page.path,r=this.$router.options.routes,o=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:i()(e).map(function(i){var a,s=e[i],u=o[i]&&o[i].label||s.lang;return s.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,i),r.some(function(t){return t.path===a})||(a=i)),{text:u,link:a}})};return[].concat(Object(_.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return g()(Object(o.j)(t),{items:(t.items||[]).map(o.j)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}}),$=(n(433),Object(s.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function C(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var w={components:{SidebarButton:x,NavLinks:$,SearchBox:b,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=p()(C(this.$el,"paddingLeft"))+p()(C(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(n(434),Object(s.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function O(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var o=r[i];if("page"===o.type&&o.path===decodeURIComponent(t.path))return r[i+n]}}var L={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(o.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,O(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(o.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,O(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,r=t.docsDir,i=void 0===r?"":r,o=t.docsBranch,a=void 0===o?"master":o,s=t.docsRepo,u=void 0===s?e:s;return u&&n&&this.$page.relativePath?this.createEditLink(e,u,i,a,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,i){return/bitbucket.org/.test(t)?(o.i.test(e)?e:t).replace(o.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(o.a,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(o.i.test(e)?e:"https://github.com/".concat(e)).replace(o.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(o.a,"")+"/":"")+i}}},j=(n(435),Object(s.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),E={name:"Sidebar",components:{SidebarLinks:n(403).default,NavLinks:$},props:["items"]},I=(n(438),{components:{Home:l,Page:j,Sidebar:Object(s.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),P=(n(439),Object(s.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=P.exports}])]);