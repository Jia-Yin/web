(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{201:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return m}));const i=/#.*$/u,s=/\.(md|html)$/u,r=/\/$/u,a=/^[a-z]+:/iu,o=t=>decodeURI(t).replace(i,"").replace(s,""),c=t=>a.test(t),u=t=>t.startsWith("mailto:"),l=t=>t.startsWith("tel:"),h=t=>{if(c(t))return t;const e=i.exec(t),n=e?e[0]:"",s=o(t);return s.endsWith("/")?t:`${s}.html${n}`},f=t=>/(\.html|\/)$/u.test(t)?t:t+"/",d=(t,e)=>{const n=decodeURIComponent(t.hash),s=(t=>{const e=i.exec(t);return e?e[0]:""})(e);if(s&&n!==s)return!1;return o(t.path)===o(e)},m=(t,e,n)=>{if(c(t))return t;const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return`${e}${t}`;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//u,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}return""!==s[0]&&s.unshift(""),s.join("/")}},220:function(t,e,n){},221:function(t,e,n){"use strict";var i=n(0),s=n(201),r=i.default.extend({name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link(){return Object(s.c)(this.item.link)},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"},active(){return this.$site.locales&&Object.keys(this.$site.locales).some(t=>t===this.link)||"/"===this.link?this.$route.path===this.link:this.$route.path.startsWith(this.link)},isNonHttpURI(){return Object(s.g)(this.link)||Object(s.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}}),a=(n(255),n(1)),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",class:{active:t.active},attrs:{to:t.link},on:{focusout:t.focusoutAction}},[t.item.icon?n("i",{class:"iconfont "+t.iconPrefix+t.item.icon}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?n("i",{class:"iconfont "+t.iconPrefix+t.item.icon}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},255:function(t,e,n){"use strict";n(220)},366:function(t,e,n){},608:function(t,e,n){"use strict";n(366)},645:function(t,e,n){"use strict";n.r(e);var i={components:{NavLink:n(221).a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(n(608),n(1)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description",attrs:{align:"center"}},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,"8b29369a",null);e.default=r.exports}}]);