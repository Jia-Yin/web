(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1061:function(t,e,n){var content=n(1258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("568a590d",content,!0,{sourceMap:!1})},1257:function(t,e,n){"use strict";n(1061)},1258:function(t,e,n){(e=n(60)(!1)).push([t.i,"h1[data-v-35e6b40f]{font-size:120%;color:#00f;margin:24px 60px 24px 0;border-bottom:1px solid #00f}.container-fluid[data-v-35e6b40f]{margin:30px}[data-v-35e6b40f] .itemList{margin:12px 0}",""]),t.exports=e},1326:function(t,e,n){"use strict";n.r(e);n(49);var r=n(8),o=n(858),c=n(844),l={components:{ItemList:o.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("playground").fetch();case 3:return r=e.sent,e.abrupt("return",{playground:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{pgKey:"Coding",problems:[],infoAlert:!1,info:{title:"",message:""},locales:{zh:"中文"},localeText:{Playground_Title:"練習廣場"}}},created:function(){if(this.localeText=this.$updateLocaleText(this.localeText),this.playground){var t=this.playground.KEY,e=this.playground.DATA;this.problems=c.a.decode(t,e)}var n=this.$user("courses");if(n&&n.playground){var r=n.playground.units.base.probs;for(var o in r){var l="danger";r[o].score>=60&&(l="success");var d=c.a.findIdPos(this.problems,o);d>=0&&(this.problems[d].variant=l)}}},mounted:function(){},methods:{doProblem:function(p){var t=c.a.encode(this.pgKey,JSON.stringify(p)),e=p.queueNumber||3;this.$store.commit("setParam",{name:"probSet",value:{courseID:"playground",courseName:"playground",courseUnit:"base",problem:t,courseQN:e}}),this.$router.push("/user/coding")}}},d=(n(1257),n(55)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),n("h1",[t._v(t._s(t.localeText.Playground_Title))]),t._v(" "),n("item-list",{staticClass:"ml-3",attrs:{items:t.problems,name:"title",click:t.doProblem}})],1)}),[],!1,null,"35e6b40f",null);e.default=component.exports;installComponents(component,{ItemList:n(858).default})},844:function(t,e,n){"use strict";n(10),n(14),n(22),n(103),n(9),n(845),n(27),n(15);var r=n(227),o=n.n(r),c={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},845:function(t,e,n){"use strict";var r=n(7),o=n(846).start;r({target:"String",proto:!0,forced:n(847)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},846:function(t,e,n){var r=n(50),o=n(228),c=n(52),l=Math.ceil,d=function(t){return function(e,n,d){var f,m,h=String(c(e)),v=h.length,y=void 0===d?" ":String(d),_=r(n);return _<=v||""==y?h:(f=_-v,(m=o.call(y,l(f/y.length))).length>f&&(m=m.slice(0,f)),t?h+m:m+h)}};t.exports={start:d(!1),end:d(!0)}},847:function(t,e,n){var r=n(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},858:function(t,e,n){"use strict";n.r(e);var r=n(844),o={props:{items:Array,itemObj:Object,name:{type:String,default:"name"},keyPrefix:{type:String,default:"item"},show:{type:Function,default:null},headVariant:{type:String,default:"dark"},textVariant:{type:String,default:"primary"},editVariant:{type:String,default:"primary"},copyVariant:{type:String,default:"primary"},removeVariant:{type:String,default:"primary"},addVariant:{type:String,default:"primary"},order:{type:Boolean,default:!0},click:{type:Function,default:null},remove:{type:Function,default:null},edit:{type:Function,default:null},copy:{type:Function,default:null},add:{type:Function,default:null},addLabel:{type:String,default:"New"},noEntryLabel:{type:String,default:"No items."}},data:function(){return{titems:[]}},created:function(){this.updateItems(this.items)},methods:{updateItems:function(t){this.titems=t||r.a.obj2arr(this.itemObj)},itemName:function(t,e){return this.show?this.show(t):t[e]?this.$selectUserLocaleText(t[e]):"Unknown"},itemClass:function(t){return t.variant?"text-"+t.variant:this.textVariant?"text-"+this.textVariant:null}},watch:{items:function(t){this.updateItems(t)}}},c=n(55),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.add?n("p",{attrs:{align:"right"}},[t.add?n("b-button",{attrs:{size:"sm",variant:t.addVariant},on:{click:function(e){return t.add()}}},[t._v("\n            "+t._s(t.addLabel)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.titems&&t.titems.length>0?n("div",t._l(t.titems,(function(e,r){return n("div",{key:t.keyPrefix+r,staticClass:"itemList d-flex justify-content-between"},[n("span",[t.order?n("span",{staticClass:"mr-2",class:"text-"+t.headVariant},[t._v(t._s(r+1)+".")]):n("span",{staticClass:"mr-2",class:"text-"+t.headVariant},[t._v("•")]),t._v(" "),n("b-link",{staticClass:"itemBody",class:t.itemClass(e),on:{click:function(n){t.click&&t.click(e)}}},[t._v("\n                    "+t._s(t.itemName(e,t.name))+"\n                ")])],1),t._v(" "),t.remove||t.edit||t.copy?n("span",[t.edit?n("b-link",{class:"text-"+t.editVariant,on:{click:function(n){return t.edit(e)}}},[n("b-icon",{attrs:{icon:"pencil"}})],1):t._e(),t._v(" "),t.copy&&t.edit?n("span",{staticClass:"mr-2"}):t._e(),t._v(" "),t.copy?n("b-link",{class:"text-"+t.editVariant,on:{click:function(n){return t.copy(e)}}},[n("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.remove&&t.copy?n("span",{staticClass:"mr-2"}):t._e(),t._v(" "),t.remove?n("b-link",{class:"text-"+t.removeVariant,on:{click:function(n){return t.remove(e)}}},[n("b-icon",{attrs:{icon:"trash-fill"}})],1):t._e()],1):t._e()])})),0):n("div",[t._v("\n        "+t._s(t.noEntryLabel)+"\n    ")])])}),[],!1,null,"562311c8",null);e.default=component.exports}}]);