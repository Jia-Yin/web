(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1038:function(t,e,r){"use strict";r(891)},1039:function(t,e,r){(e=r(59)(!1)).push([t.i,'.container-fluid[data-v-8b468624]{margin:30px}[data-v-8b468624] h1{color:#00f;font-family:"Arial";font-size:120%}[data-v-8b468624] h2{color:#ff4500;font-size:80%;margin:12px 0;text-decoration:underline}',""]),t.exports=e},1070:function(t,e,r){"use strict";r.r(e);r(29),r(87);var n=r(0),o=(r(54),r(14)),c=r(79),l=r(226),d=r(840),f=r(844),m=r(46);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y={components:{ItemList:f.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("playground").fetch();case 3:return n=e.sent,e.abrupt("return",{playground:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{pgKey:"Coding",mycourses:[],pgbase:{},pgproblems:[],units:{},localeText:{UserRecords_NoRecords:"尚未有任何學習記錄",AdminProblem_Playground:"練習廣場"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({user:function(t){return t.user},locale:function(t){return t.user.locale},system:function(t){return t.system},courses:function(t){return t.user.courses}})),created:function(){if(this.system.locales&&this.locale in this.system.locales.support&&(this.localeText=l.a.updateParams(this.system.locales[this.locale],this.localeText)),this.playground){var t=this.playground.KEY,e=this.playground.DATA;this.pgproblems=d.a.decode(t,e)}if(this.courses){this.mycourses=d.a.obj2arr(this.courses);for(var i=0;i<this.mycourses.length;i++){var r=this.mycourses[i];if("playground"==r.id){var base=JSON.parse(JSON.stringify(r.units.base));base.probs=d.a.obj2arr(base.probs);for(var n=0;n<base.probs.length;n++)base.probs[n].score>60?base.probs[n].variant="success":base.probs[n].variant="danger";this.pgbase=base}else{var o=r.units,c=Object.keys(o);c.sort();for(var f=[],m=0;m<c.length;m++){var h=c[m],y=o[h];f.push({name:h,score:y.score,TS:y.TS,TP:y.TP})}this.units[r.id]=f}}}},methods:{pgLabel:function(t){var e=d.a.selectLocaleText(t.title,this.locale);return e+=" (".concat(t.score,")")},doPGProblem:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,i,o,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=!1,i=0;case 2:if(!(i<e.pgproblems.length)){r.next=16;break}if(e.pgproblems[i].id!=t.id){r.next=13;break}return o=d.a.encode(e.pgKey,JSON.stringify(e.pgproblems[i])),r.next=7,m.d.collection("submits").doc(t.last5[0]).get();case 7:return c=r.sent,l=c.data(),f={lang:l.lang,code:l.code},e.$store.commit("setParam",{name:"probSet",value:{courseID:"playground",courseName:"playground",courseUnit:"base",problem:o,initCode:f}}),n=!0,r.abrupt("break",16);case 13:i++,r.next=2;break;case 16:n&&e.$router.push("/user/coding");case 17:case"end":return r.stop()}}),r)})))()},unitLabel:function(t){return t.name+t.score+t.TS+t.TP},coursename:function(t){return"playground"==t.name?this.localeText.AdminProblem_Playground:t.name}}},v=(r(1038),r(70)),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[t.mycourses&&t.mycourses.length>0?r("div",t._l(t.mycourses,(function(e,n){return r("div",{key:e+n},[r("h1",[t._v(t._s(t.coursename(e)))]),t._v(" "),"playground"==e.id?r("div",{staticClass:"mt-3"},[r("p",[t._v("TOTAL SCORE = "+t._s(t.pgbase.score))]),t._v(" "),r("item-list",{attrs:{items:t.pgbase.probs,show:t.pgLabel,click:t.doPGProblem}})],1):r("div",{staticClass:"mt-3"},[r("item-list",{attrs:{items:t.units[e.id],show:t.unitLabel,click:t.doProblem}})],1)])})),0):r("div",[t._v("\n        "+t._s(t.localeText.UserRecords_NoRecords)+"\n    ")])])}),[],!1,null,"8b468624",null);e.default=component.exports;installComponents(component,{ItemList:r(844).default})},840:function(t,e,r){"use strict";r(9),r(12),r(22),r(87),r(841),r(15);var n=r(227),o=r.n(n),c={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var r=Math.floor(e/60);return e%=60,"".concat(this.pad(r),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],r=Object.keys(t);return r.sort(),r.forEach((function(r){e.push(Object.assign({id:r},t[r]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var r=JSON.parse(JSON.stringify(t)),n=t.id;delete r.id,e[n]=r})),e},selectLocaleText:function(t,e){return t?e&&t[e]&&t[e].length>0?t[e]:t.zh&&t.zh.length>0?t.zh:t.en&&t.en.length>0?t.en:"Unknown":""},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},841:function(t,e,r){"use strict";var n=r(7),o=r(842).start;n({target:"String",proto:!0,forced:r(843)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},842:function(t,e,r){var n=r(48),o=r(228),c=r(51),l=Math.ceil,d=function(t){return function(e,r,d){var f,m,h=String(c(e)),y=h.length,v=void 0===d?" ":String(d),_=n(r);return _<=y||""==v?h:(f=_-y,(m=o.call(v,l(f/v.length))).length>f&&(m=m.slice(0,f)),t?h+m:m+h)}};t.exports={start:d(!1),end:d(!0)}},843:function(t,e,r){var n=r(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},844:function(t,e,r){"use strict";r.r(e);var n=r(840),o={props:{items:Array,name:{type:String,default:"name"},keyPrefix:{type:String,default:"item"},show:{type:Function,default:null},headVariant:{type:String,default:"dark"},textVariant:{type:String,default:"primary"},editVariant:{type:String,default:"primary"},copyVariant:{type:String,default:"primary"},removeVariant:{type:String,default:"primary"},addVariant:{type:String,default:"primary"},order:{type:Boolean,default:!0},click:{type:Function,default:null},remove:{type:Function,default:null},edit:{type:Function,default:null},copy:{type:Function,default:null},add:{type:Function,default:null},addLabel:{type:String,default:"New"},noEntryLabel:{type:String,default:"No items."}},methods:{itemName:function(t,e){if(this.show)return this.show(t);var r=this.$store.state.user.locale;return r&&t[e]?n.a.selectLocaleText(t[e],r):"Unknown"},itemClass:function(t){return t.variant?"text-"+t.variant:this.textVariant?"text-"+this.textVariant:null}}},c=r(70),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.add?r("p",{attrs:{align:"right"}},[t.add?r("b-button",{attrs:{size:"sm",variant:t.addVariant},on:{click:function(e){return t.add()}}},[t._v("\n            "+t._s(t.addLabel)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.items&&t.items.length>0?r("div",t._l(t.items,(function(e,n){return r("div",{key:t.keyPrefix+n,staticClass:"itemList d-flex justify-content-between"},[r("span",[t.order?r("span",{staticClass:"mr-2",class:"text-"+t.headVariant},[t._v(t._s(n+1)+".")]):r("span",{staticClass:"mr-2",class:"text-"+t.headVariant},[t._v("•")]),t._v(" "),r("b-link",{staticClass:"itemBody",class:t.itemClass(e),on:{click:function(r){t.click&&t.click(e)}}},[t._v("\n                    "+t._s(t.itemName(e,t.name))+"\n                ")])],1),t._v(" "),t.remove||t.edit||t.copy?r("span",[t.edit?r("b-link",{class:"text-"+t.editVariant,on:{click:function(r){return t.edit(e)}}},[r("b-icon",{attrs:{icon:"pencil"}})],1):t._e(),t._v(" "),t.copy&&t.edit?r("span",{staticClass:"mr-2"}):t._e(),t._v(" "),t.copy?r("b-link",{class:"text-"+t.editVariant,on:{click:function(r){return t.copy(e)}}},[r("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.remove&&t.copy?r("span",{staticClass:"mr-2"}):t._e(),t._v(" "),t.remove?r("b-link",{class:"text-"+t.removeVariant,on:{click:function(r){return t.remove(e)}}},[r("b-icon",{attrs:{icon:"trash-fill"}})],1):t._e()],1):t._e()])})),0):r("div",[t._v("\n        "+t._s(t.noEntryLabel)+"\n    ")])])}),[],!1,null,"3248a90e",null);e.default=component.exports},891:function(t,e,r){var content=r(1039);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("432064cc",content,!0,{sourceMap:!1})}}]);