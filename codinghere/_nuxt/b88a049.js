(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1050:function(e,t,n){var content=n(1236);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("677dff7f",content,!0,{sourceMap:!1})},1235:function(e,t,n){"use strict";n(1050)},1236:function(e,t,n){(t=n(60)(!1)).push([e.i,".qlabel[data-v-ed03f21a]{color:#00f}.qright[data-v-ed03f21a]{color:green}.qwrong[data-v-ed03f21a]{color:red}.person[data-v-ed03f21a]{color:#fff;background:#4d4dec;font-size:120%;padding:6px;text-align:center;margin-bottom:16px}.item[data-v-ed03f21a]{margin-top:12px}",""]),e.exports=t},1310:function(e,t,n){"use strict";n.r(t);n(10),n(14),n(29),n(103),n(15),n(49);var r=n(8),o=n(32),c={data:function(){return{contestName:"c2021",records:{},username:"",showCode:!1,pgKey:"Coding",exam:null,problems:{},problem:null,initCode:"",lang:"",usubmits:{},answers:null}},computed:{uid:function(){return this.$route.params.user}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.collection("contests").doc(e.contestName).get();case 2:if(n=t.sent,r=n.data(),e.username=r.players[e.uid].name,e.exam=r.exam,0!==Object.keys(e.problems).length){t.next=11;break}return t.next=9,o.d.collection("problems").doc("BASE").get();case 9:c=t.sent,e.problems=c.data();case 11:if(e.answers){t.next=16;break}return t.next=14,o.d.collection("contests").doc(e.contestName).collection("answers").where("userid","==",e.uid).get();case 14:(l=t.sent).empty||l.docs.forEach((function(t){e.answers=t.data(),e.usubmits=e.answers.submits}));case 16:case"end":return t.stop()}}),t)})))()},methods:{submit:function(e){console.log("K",e)},record:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,c,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.collection("contests").doc(n.contestName).collection("submits").where("uid","==",n.$route.params.user).where("pid","==",e.id).where("created",">",n.answers.date).get();case 2:if(!(r=t.sent).empty){for(c={},i=0;i<r.docs.length;i++)c[r.docs[i].id]=r.docs[i].data();n.records=c}case 4:case"end":return t.stop()}}),t)})))()},codetest:function(e,t){this.problem=e,this.initCode=t.uans,this.lang=t.lang,this.showCode=!0},quizhead:function(e,t){var n=t.correct?"O":"X";return"(".concat(n,") ").concat(this.$selectUserLocaleText(e.title)," (T=").concat(t.usetime,")")},showAnswer:function(e){var t=this.problems[e.qid];if(t){var n=e.correct?"O":"X";if("singlechoice"==t.type)return"("+n+") "+t.title+" "+t.question+" "+JSON.stringify(t.options,null,2)+" Ans:"+(e.answer+1)+" User:"+(e.user+1);if("fillin"==t.type)return"("+n+") "+t.title+" "+t.question+" Ans:"+(e.answer+1)+" User:"+(e.user+1);if("progtest"==t.type)return"<b-button>TEST</b-button>("+n+") "+t.title+" "+e.uans;if("functest"==t.type)return"("+n+") "+t.title+" "+e.uans}}}},l=(n(1235),n(55)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-modal",{attrs:{size:"xl",title:"Code Checking"},model:{value:e.showCode,callback:function(t){e.showCode=t},expression:"showCode"}},[n("problem-solver",{attrs:{problem:e.problem,initCode:e.initCode,lang:e.lang},on:{submit:e.submit}})],1),e._v(" "),e.answers&&e.exam?n("div",[e._v("\n        "+e._s(e.answers.examname)+" -- "+e._s(e.answers.date)+" -- "+e._s(e.username)+"\n\n        "),n("span",{staticClass:"ml-3"},[e._v("Score = "+e._s(e.answers.score))]),e._v(" "),n("span",{staticClass:"ml-3"},[e._v("UseTime = "+e._s(e.answers.totaltime))]),e._v(" "),e._l(e.exam.probs,(function(t,r){return n("div",{key:t.id},[e.usubmits[t.id]&&t?n("div",{staticClass:"item"},[e._v("\n                "+e._s(r+1)+". "),n("span",{staticClass:"qlabel"},[e._v(e._s(e.quizhead(t,e.usubmits[t.id])))]),e._v(" "),n("b-button",{attrs:{size:"sm",variant:e.usubmits[t.id].correct?"outline-success":"outline-danger"},on:{click:function(n){return e.codetest(t,e.usubmits[t.id])}}},[e._v("程式碼")]),e._v(" "),n("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(n){return e.record(t,e.usubmits[t.id])}}},[e._v("提交記錄")])],1):e._e()])}))],2):e._e(),e._v(" "),e._l(e.records,(function(t,r,o){return n("p",{key:r},[e._v("\n        "+e._s(o+1)+". "+e._s(r)+" ==> "+e._s(t)+"\n    ")])}))],2)}),[],!1,null,"ed03f21a",null);t.default=component.exports;installComponents(component,{ProblemSolver:n(852).default})}}]);