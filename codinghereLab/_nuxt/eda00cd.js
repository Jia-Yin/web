(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1222:function(e,t,n){"use strict";n(928)},1223:function(e,t,n){(t=n(60)(!1)).push([e.i,'section[data-v-5f74ee05]{padding:8px 0;color:red;margin:18px 0 6px;font-size:150%}[data-v-5f74ee05] h1{color:#00f;font-family:"Arial";font-size:120%;margin:24px 0;padding-bottom:3px;border-bottom:1px solid #000}[data-v-5f74ee05] h2{color:#ff4500;font-size:110%;margin:16px 0 8px}',""]),e.exports=t},1318:function(e,t,n){"use strict";n.r(t);n(49);var o=n(7),r=n(0),c={props:{course:Object},data:function(){var e;return e={cnLang:"en",courseNews:null,queueNumber:3},Object(r.a)(e,"courseNews",null),Object(r.a)(e,"infoAlert",!1),Object(r.a)(e,"info",{title:"",message:""}),e},computed:{cid:function(){return this.$route.params.course}},created:function(){this.courseSetting(this.course)},methods:{courseSetting:function(e){this.courseNews=Object.assign({},this.course.news)},updateCourseSetting:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$copyObject(e.courseNews),(o={news:n}).queueNumber=e.queueNumber,e.course.queueNumber&&e.course.queueNumber==e.queueNumber){t.next=16;break}i=0;case 5:if(!(i<e.queueNumber)){t.next=16;break}return r="queue"+(i+1),t.next=9,fireDb.collection("courses").doc(e.cid).collection("tasks").doc(r).get();case 9:if(t.sent.exists){t.next=13;break}return t.next=13,fireDb.collection("courses").doc(e.cid).collection("tasks").doc(r).set({updated:utils.getNow()});case 13:i++,t.next=5;break;case 16:return t.next=18,e.$store.dispatch("updateCourse",{id:e.cid,value:o});case 18:e.infoAlert=!0,e.info={title:"Setting",message:"OK"};case 20:case"end":return t.stop()}}),t)})))()}},watch:{course:function(e){this.courseSetting(e)}}},l=(n(1222),n(55)),component=Object(l.a)(c,(function(){var e=this,t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),o("section",[t._v("Task Queue")]),t._v("\n    Queue Number: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.queueNumber,expression:"queueNumber"}],attrs:{size:"sm"},domProps:{value:t.queueNumber},on:{input:function(e){e.target.composing||(t.queueNumber=e.target.value)}}}),t._v(" "),o("section",[t._v("News")]),t._v(" "),o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("locale-input",{attrs:{rows:12},on:{curLang:function(t){e.cnLang=t}},model:{value:t.courseNews,callback:function(e){t.courseNews=e},expression:"courseNews"}})],1),t._v(" "),o("b-col",{attrs:{cols:"6"}},[o("div",{domProps:{innerHTML:t._s(t.$md.render(t.$selectLocaleText(t.courseNews,t.cnLang)))}})])],1),t._v(" "),o("div",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[o("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"primary"},on:{click:t.updateCourseSetting}},[t._v("\n            Update\n        ")])],1)],1)}),[],!1,null,"5f74ee05",null);t.default=component.exports;installComponents(component,{LocaleInput:n(862).default})},860:function(e,t,n){var content=n(869);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("7bc25547",content,!0,{sourceMap:!1})},862:function(e,t,n){"use strict";n.r(t);n(365);var o={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:{zh:"中文",en:"English"},content:{zh:"中文",en:"English"}}},created:function(){this.locales=this.$copyObject(this.$system("locales").support),this.value&&(this.content=this.value)},methods:{setLang:function(e){this.$emit("curLang",e)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(e){this.content=e}}},r=(n(868),n(55)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-tabs",e._l(e.locales,(function(t,o,r){return n("b-tab",{key:"locale"+r,attrs:{title:t},on:{click:function(t){return e.setLang(o)}}},[n("b-textarea",{attrs:{rows:e.rows},on:{input:e.cinput},model:{value:e.content[o],callback:function(t){e.$set(e.content,o,t)},expression:"content[key]"}})],1)})),1)],1)}),[],!1,null,"06f58b61",null);t.default=component.exports},868:function(e,t,n){"use strict";n(860)},869:function(e,t,n){(t=n(60)(!1)).push([e.i,"textarea[data-v-06f58b61]{width:100%}",""]),e.exports=t},928:function(e,t,n){var content=n(1223);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("72370569",content,!0,{sourceMap:!1})}}]);