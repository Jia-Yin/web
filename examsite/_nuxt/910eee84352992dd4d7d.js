(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{746:function(t,e,r){var content=r(777);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("2af17d4a",content,!0,{sourceMap:!1})},776:function(t,e,r){"use strict";var n=r(746);r.n(n).a},777:function(t,e,r){(e=r(39)(!1)).push([t.i,".card[data-v-612e4c5b]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-612e4c5b]{margin-bottom:24px}.btn[data-v-612e4c5b]{min-width:10%;margin:12px auto 24px}",""]),t.exports=e},846:function(t,e,r){"use strict";r.r(e);r(5),r(2),r(3),r(1),r(4),r(58);var n=r(14),o=r(0),c=r(100);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={data:function(){return{title:null,timelimit:3600,problems:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({user:function(t){return t.user},quizzes:function(t){return t.quizzes}})),created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.quizzes||0!==t.quizzes.length){e.next=3;break}return e.next=3,t.$store.dispatch("getCollection","quizzes").then((function(){}));case 3:t.problems=JSON.parse(JSON.stringify(t.quizzes)),t.problems.sort((function(a,b){return a.type<b.type?-1:a.type>b.type?1:0}));case 5:case"end":return e.stop()}}),e)})))()},methods:{findprob:function(t){for(var i=0;i<this.problems.length;i++)if(this.problems[i].id===t)return this.problems[i];return null},add:function(){for(var t=this,data=this.problems.filter((function(t){return t.timelimit>0})),content={title:this.title,timelimit:this.timelimit,totalscore:0,probs:[]},i=0;i<data.length;i++){var e=data[i];content.totalscore+=parseInt(e.score,10),content.probs.push({id:e.id,timelimit:parseInt(e.timelimit,10),score:parseInt(e.score,10)})}this.$store.dispatch("addCollectionItem",{collection:"exams",item:content}).then((function(){t.$router.push("/admin/examlist")})).catch((function(t){}))}}},f=(r(776),r(33)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-card",{staticClass:"my-card",attrs:{title:"新增考試"}},[r("b-form-input",{staticClass:"my-3",attrs:{placeholder:"Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),r("b-form-input",{staticClass:"my-3",attrs:{placeholder:"Time Limit"},model:{value:t.timelimit,callback:function(e){t.timelimit=e},expression:"timelimit"}}),t._v(" "),t._l(t.problems,(function(e,n){return r("b-row",{key:n,staticClass:"my-3"},[r("b-col",{attrs:{md:"2"}},[r("b-form-input",{attrs:{placeholder:"0"},model:{value:e.timelimit,callback:function(r){t.$set(e,"timelimit",r)},expression:"prob.timelimit"}})],1),t._v(" "),r("b-col",{attrs:{md:"1"}},[r("b-form-input",{attrs:{placeholder:"%"},model:{value:e.score,callback:function(r){t.$set(e,"score",r)},expression:"prob.score"}})],1),t._v(" "),r("b-col",{attrs:{md:"2"}},[t._v(t._s(e.type))]),t._v(" "),r("b-col",{attrs:{md:"7"}},[t._v("\n        "+t._s(e.title)+" --\n        "+t._s(e.question)+"\n      ")])],1)})),t._v(" "),r("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.add()}}},[t._v("新增")]),t._v(" "),r("b-button",{attrs:{variant:"outline-success",to:"/admin/examlist"}},[t._v("返回")])],2)],1)}),[],!1,null,"612e4c5b",null);e.default=component.exports}}]);