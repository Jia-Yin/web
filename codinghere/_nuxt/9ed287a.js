(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1030:function(t,e,n){"use strict";n(889)},1031:function(t,e,n){(e=n(59)(!1)).push([t.i,".container-fluid[data-v-2cf2a9fb]{margin:30px}[data-v-2cf2a9fb] .itemList{margin:12px 0}",""]),t.exports=e},1063:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(54),n(14)),c=n(79),l=n(226),d=(n(46),n(229)),f=n.n(d);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={components:{ItemList:n(843).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("playground").fetch();case 3:return r=e.sent,e.abrupt("return",{playground:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{pgKey:"CHProblem",problems:[],infoAlert:!1,info:{title:"",message:""},locales:{zh:"中文"},localeText:{AdminProblem_Playground:"練習廣場"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({user:function(t){return t.user},locale:function(t){return t.user.locale},system:function(t){return t.system}})),created:function(){if(this.system.locales&&this.locale in this.system.locales.support&&(this.localeText=l.a.updateParams(this.system.locales[this.locale],this.localeText)),this.playground){var t=this.playground.KEY,e=this.playground.DATA;this.problems=this.decode(t,e)}},mounted:function(){},methods:{pgTitle:function(){return"zh"==this.locale||""==this.locale?"title.zh":"title.en"},doProblem:function(p){console.log("P",p),this.$store.commit("setParam",{name:"problem",value:p}),this.$router.push("/user/coding")},encode:function(t,e){return new f.a(t).encrypt(e)},decode:function(t,e){return new f.a(t).decrypt(e)}}},h=(n(1030),n(70)),component=Object(h.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),n("item-list",{attrs:{items:t.problems,name:"title",click:t.doProblem}})],1)}),[],!1,null,"2cf2a9fb",null);e.default=component.exports;installComponents(component,{ItemList:n(843).default})},843:function(t,e,n){"use strict";n.r(e);var r={props:{items:Array,name:{type:String,default:"name"},keyPrefix:{type:String,default:"item"},show:{type:Function,default:null},headVariant:{type:String,default:"dark"},textVariant:{type:String,default:"primary"},editVariant:{type:String,default:"primary"},copyVariant:{type:String,default:"primary"},removeVariant:{type:String,default:"primary"},addVariant:{type:String,default:"primary"},order:{type:Boolean,default:!0},click:{type:Function,default:null},remove:{type:Function,default:null},edit:{type:Function,default:null},copy:{type:Function,default:null},add:{type:Function,default:null},addLabel:{type:String,default:"New"},noEntryLabel:{type:String,default:"No items."}},methods:{itemName:function(t,e){if(this.show)return this.show(t);var n=this.$store.state.user.locale;return n&&t[e]&&t[e][n]?t[e][n]:t[e]}}},o=n(70),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.add?n("p",{attrs:{align:"right"}},[t.add?n("b-button",{attrs:{size:"sm",variant:t.addVariant},on:{click:function(e){return t.add()}}},[t._v("\n            "+t._s(t.addLabel)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.items&&t.items.length>0?n("div",t._l(t.items,(function(e,r){return n("div",{key:t.keyPrefix+r,staticClass:"itemList d-flex justify-content-between"},[n("span",[t.order?n("span",{staticClass:"mr-2",class:"text-"+t.headVariant},[t._v(t._s(r+1)+".")]):n("span",{staticClass:"mr-2",class:"text-"+t.headVariant},[t._v("•")]),t._v(" "),n("b-link",{staticClass:"itemBody",class:"text-"+t.textVariant,on:{click:function(n){t.click&&t.click(e)}}},[t._v("\n                    "+t._s(t.itemName(e,t.name))+"\n                ")])],1),t._v(" "),t.remove||t.edit||t.copy?n("span",[t.edit?n("b-link",{class:"text-"+t.editVariant,on:{click:function(n){return t.edit(e)}}},[n("b-icon",{attrs:{icon:"pencil"}})],1):t._e(),t._v(" "),t.copy&&t.edit?n("span",{staticClass:"mr-2"}):t._e(),t._v(" "),t.copy?n("b-link",{class:"text-"+t.editVariant,on:{click:function(n){return t.copy(e)}}},[n("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.remove&&t.copy?n("span",{staticClass:"mr-2"}):t._e(),t._v(" "),t.remove?n("b-link",{class:"text-"+t.removeVariant,on:{click:function(n){return t.remove(e)}}},[n("b-icon",{attrs:{icon:"trash-fill"}})],1):t._e()],1):t._e()])})),0):n("div",[t._v("\n        "+t._s(t.noEntryLabel)+"\n    ")])])}),[],!1,null,"bace92b4",null);e.default=component.exports},889:function(t,e,n){var content=n(1031);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("5c92d63a",content,!0,{sourceMap:!1})}}]);