(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{755:function(t,e,n){var content=n(795);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("b491cfe6",content,!0,{sourceMap:!1})},794:function(t,e,n){"use strict";var r=n(755);n.n(r).a},795:function(t,e,n){(e=n(39)(!1)).push([t.i,".jumbotron{padding:2rem}",""]),t.exports=e},856:function(t,e,n){"use strict";n.r(e);n(5),n(2),n(3),n(1),n(4);var r=n(0),o=n(100);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{key:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({quizcontent:function(){return JSON.stringify(this.quiz,null,2)}},Object(o.b)({quiz:function(t){return t.params.quiz}})),created:function(){console.log("Quiz = ",this.quiz)},methods:{editquiz:function(t){console.log("QUIZ=",t),"singlechoice"===t.type?this.$router.push("/admin/scedit"):"functest"===t.type?this.$router.push("/admin/ftedit"):"progtest"===t.type?this.$router.push("/admin/pgedit"):"fillin"===t.type&&this.$router.push("/admin/fiedit")}}},f=(n(794),n(33)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[t._v("\n    Edit Quiz\n    "),n("b-link",{attrs:{to:"/admin/quizlist"}},[t._v("(Quiz List)")]),t._v(" "),n("div",[t._v("\n      "+t._s(t.quiz&&t.quiz.title)+"\n      "),n("br"),t._v(" "),n("pre",[t._v(t._s(t.quizcontent))]),t._v(" "),n("hr",{staticClass:"my-4"}),t._v(" "),n("b-button",{attrs:{variant:"primary",to:"/admin/quizlist"}},[t._v("Cancel")]),t._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.editquiz(t.quiz)}}},[t._v("Edit")]),t._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.deletequiz(t.quiz)}}},[t._v("Delete")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);