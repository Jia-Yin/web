(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1230:function(e,t,n){"use strict";n(933)},1231:function(e,t,n){(t=n(60)(!1)).push([e.i,".qlabel[data-v-2c269f1d]{color:#00f}.qright[data-v-2c269f1d]{color:green}.qwrong[data-v-2c269f1d]{color:red}.person[data-v-2c269f1d]{color:#fff;background:#4d4dec;font-size:120%;padding:6px;text-align:center;margin-bottom:16px}.item[data-v-2c269f1d]{margin-top:12px}",""]),e.exports=t},1325:function(e,t,n){"use strict";n.r(t);n(10),n(14),n(86),n(15),n(49);var r=n(7),o=(n(851),n(32)),c={data:function(){return{records:{},username:"",showCode:!1,pgKey:"Coding",exam:null,problems:{},problem:null,initCode:"",lang:"",usubmits:{},answers:null}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.username=decodeURIComponent(e.$route.hash.substring(2)),e.exam){t.next=6;break}return t.next=4,o.d.collection("exams").doc(e.$route.params.eid).get();case 4:n=t.sent,e.exam=n.data();case 6:if(0!==Object.keys(e.problems).length){t.next=11;break}return t.next=9,o.d.collection("problems").doc("BASE").get();case 9:r=t.sent,e.problems=r.data();case 11:if(e.answers){t.next=16;break}return t.next=14,o.d.collection("answers").where("examid","==",e.$route.params.eid).where("userid","==",e.$route.params.user).get();case 14:(c=t.sent).empty||c.docs.forEach((function(t){console.log("Answers",t.data()),e.answers=t.data(),e.usubmits=e.answers.submits}));case 16:case"end":return t.stop()}}),t)})))()},methods:{submit:function(e){console.log("K",e)},record:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,c,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("DATE",n.answers.date),t.next=3,o.d.collection("submits").where("uid","==",n.$route.params.user).where("pid","==",e.id).where("created",">",n.answers.date).get();case 3:if(r=t.sent,console.log("RCS",r),!r.empty){for(c={},i=0;i<r.docs.length;i++)c[r.docs[i].id]=r.docs[i].data();n.records=c,console.log("RECORDS",c)}case 6:case"end":return t.stop()}}),t)})))()},codetest:function(e,t){this.problem=e,this.initCode=t.uans,this.lang=t.lang,this.showCode=!0},quizhead:function(e,t){var n=t.correct?"O":"X";return"(".concat(n,") [").concat({singlechoice:"選擇",fillin:"填充",functest:"函式",progtest:"程式"}[e.type],"] ").concat(this.$selectUserLocaleText(e.title)," (T=").concat(t.usetime,")")},showAnswer:function(e){var t=this.problems[e.qid];if(t){var n=e.correct?"O":"X";if("singlechoice"==t.type)return"("+n+") "+t.title+" "+t.question+" "+JSON.stringify(t.options,null,2)+" Ans:"+(e.answer+1)+" User:"+(e.user+1);if("fillin"==t.type)return"("+n+") "+t.title+" "+t.question+" Ans:"+(e.answer+1)+" User:"+(e.user+1);if("progtest"==t.type)return"<b-button>TEST</b-button>("+n+") "+t.title+" "+e.uans;if("functest"==t.type)return"("+n+") "+t.title+" "+e.uans}}}},l=(n(1230),n(55)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-modal",{attrs:{size:"xl",title:"Code Checking"},model:{value:e.showCode,callback:function(t){e.showCode=t},expression:"showCode"}},[n("problem-solver",{attrs:{problem:e.problem,initCode:e.initCode,lang:e.lang},on:{submit:e.submit}})],1),e._v(" "),e.answers&&e.exam?n("div",[e._v("\n        "+e._s(e.answers.examname)+" -- "+e._s(e.answers.date)+" -- "+e._s(e.username)+"\n\n        "),n("span",{staticClass:"ml-3"},[e._v("Score = "+e._s(e.answers.score))]),e._v(" "),n("span",{staticClass:"ml-3"},[e._v("UseTime = "+e._s(e.answers.totaltime))]),e._v(" "),e._l(e.exam.probs,(function(t,r){return n("div",{key:t.id},[e.usubmits[t.id]&&t&&"progtest"==t.type?n("div",{staticClass:"item"},[e._v("\n                "+e._s(r+1)+". "),n("span",{staticClass:"qlabel"},[e._v(e._s(e.quizhead(t,e.usubmits[t.id])))]),e._v(" "),n("b-button",{attrs:{size:"sm",variant:e.usubmits[t.id].correct?"outline-success":"outline-danger"},on:{click:function(n){return e.codetest(t,e.usubmits[t.id])}}},[e._v("程式碼")]),e._v(" "),n("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(n){return e.record(t,e.usubmits[t.id])}}},[e._v("提交記錄")])],1):e._e()])}))],2):e._e(),e._v(" "),e._l(e.records,(function(t,r,o){return n("p",{key:r},[e._v("\n        "+e._s(o+1)+". "+e._s(r)+" ==> "+e._s(t)+"\n    ")])}))],2)}),[],!1,null,"2c269f1d",null);t.default=component.exports;installComponents(component,{ProblemSolver:n(859).default})},851:function(e,t,n){"use strict";n(10),n(14),n(22),n(86),n(9),n(852),n(27),n(15);var r=n(227),o=n.n(r),c={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var n=Math.floor(t/60);return t%=60,"".concat(this.pad(n),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],n=Object.keys(e);return n.sort(),n.forEach((function(n){t.push(Object.assign({id:n},e[n]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var n=JSON.parse(JSON.stringify(e)),r=e.id;delete n.id,t[r]=n})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var n=0;n<e.length;n++)if(t==e[n].id)return n;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},852:function(e,t,n){"use strict";var r=n(8),o=n(853).start;r({target:"String",proto:!0,forced:n(854)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},853:function(e,t,n){var r=n(50),o=n(228),c=n(52),l=Math.ceil,d=function(e){return function(t,n,d){var f,h,m=String(c(t)),v=m.length,x=void 0===d?" ":String(d),w=r(n);return w<=v||""==x?m:(f=w-v,(h=o.call(x,l(f/x.length))).length>f&&(h=h.slice(0,f)),e?m+h:h+m)}};e.exports={start:d(!1),end:d(!0)}},854:function(e,t,n){var r=n(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},861:function(e,t,n){(t=n(60)(!1)).push([e.i,'.vdr{touch-action:none;border:1px dashed #000}.handle,.vdr{position:absolute;box-sizing:border-box}.handle{width:10px;height:10px;background:#eee;border:1px solid #333}.handle-tl{top:-10px;left:-10px;cursor:nw-resize}.handle-tm{top:-10px;left:50%;margin-left:-5px;cursor:n-resize}.handle-tr{top:-10px;right:-10px;cursor:ne-resize}.handle-ml{left:-10px;cursor:w-resize}.handle-ml,.handle-mr{top:50%;margin-top:-5px}.handle-mr{right:-10px;cursor:e-resize}.handle-bl{bottom:-10px;left:-10px;cursor:sw-resize}.handle-bm{bottom:-10px;left:50%;margin-left:-5px;cursor:s-resize}.handle-br{bottom:-10px;right:-10px;cursor:se-resize}@media only screen and (max-width:768px){[class*=handle-]:before{content:"";left:-10px;right:-10px;bottom:-10px;top:-10px;position:absolute}}',""]),e.exports=t},871:function(e,t,n){var content=n(861);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("649448c2",content,!0,{sourceMap:!1})},933:function(e,t,n){var content=n(1231);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("3c83b2f4",content,!0,{sourceMap:!1})}}]);