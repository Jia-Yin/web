(window.webpackJsonp=window.webpackJsonp||[]).push([[49,3],{1384:function(e,t,n){"use strict";n.r(t);n(30),n(49);var r=n(7),o=(n(938),n(908)),c=n(26),l=n(855),d={components:{ProgTest:o.default},data:function(){return{reExam:!1,time:10,index:0,totalScore:0,skip:!1,finished:!1,problems:[],exam:null,record:{userid:null,examid:null,courseid:null,date:null,submits:{},score:0},recordId:null}},computed:{ready:function(){return this.problems&&this.problems.length>0},tick:function(){return this.$store.state.params.tick},eid:function(){return this.$store.state.vparams.exam.examid},cid:function(){return this.$store.state.vparams.exam.courseid}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.state.vparams.exam){t.next=3;break}return e.$router.push("/user"),t.abrupt("return");case 3:return t.next=5,c.d.collection("exams").doc(e.eid).get();case 5:n=t.sent,r=n.data(),e.exam=r,e.setExam();case 9:case"end":return t.stop()}}),t)})))()},methods:{skipproblem:function(){this.skip=!0},submit:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,d,m,f,h,v,x,_,C;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.correct&&(t.totalScore+=t.problems[t.index].score),t.record.submits[t.problems[t.index].id]=e,t.record.score=t.totalScore,t.record.totaltime=60*t.exam.tlimit-t.time,0!=t.index||t.reExam){n.next=18;break}return r=c.d.batch(),o=c.d.collection("answers").doc(),d=c.d.collection("users").doc(t.$user("id")),r.set(o,t.record),t.recordId=o.id,m={answerid:t.recordId,name:t.record.examname,date:l.a.getToday(),score:t.totalScore,finish:!1},(f={})[t.eid]=m,r.set(d,{exams:f},{merge:!0}),n.next=16,r.commit();case 16:n.next=37;break;case 18:if(!e.correct){n.next=35;break}return n.next=21,t.getUserExamData();case 21:return n.sent[t.eid].reExam&&!t.reExam&&t.$router.push("/afterexam?taken=1"),h=c.d.batch(),v=c.d.collection("answers").doc(t.recordId),x=c.d.collection("users").doc(t.$user("id")),h.set(v,t.record),_={},C={score:t.totalScore},_[t.eid]=C,h.set(x,{exams:_},{merge:!0}),n.next=33,h.commit();case 33:n.next=37;break;case 35:return n.next=37,c.d.collection("answers").doc(t.recordId).set(t.record);case 37:t.skip=!1,!t.finished&&t.index<t.problems.length-1?t.index++:t.leave();case 39:case"end":return n.stop()}}),n)})))()},setExamContinue:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l,i,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.reExam=!0,t.recordId=e,n.next=4,c.d.collection("answers").doc(e).get();case 4:for(r=n.sent,t.record=r.data(),console.log("Record",t.record),o=[],l=0,i=0;i<t.exam.probs.length;i++)d=t.exam.probs[i],t.record.submits[d.id]?l+=t.record.submits[d.id].usetime:o.push(t.$copyObject(d));t.record.totaltime&&t.record.totaltime>l&&(l=t.record.totaltime),console.log("QUIZS",o),o.sort((function(e,t){return e.order-t.order!=0?e.order-t.order:Math.random()-.5})),t.time=60*t.exam.tlimit-l,t.problems=o,t.totalScore=t.record.score;case 16:case"end":return n.stop()}}),n)})))()},getUserExamData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$user("id"),t.next=3,c.d.collection("users").doc(n).get();case 3:return r=t.sent,t.abrupt("return",r.data().exams);case 5:case"end":return t.stop()}}),t)})))()},setExam:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUserExamData();case 2:if(!(n=t.sent)||!n[e.eid]){t.next=7;break}return n[e.eid].reExam=!0,c.d.collection("users").doc(e.$user("id")).update({exams:n}),t.abrupt("return",e.setExamContinue(n[e.eid].answerid));case 7:(r=e.$copyObject(e.exam.probs)).sort((function(e,t){return e.order-t.order!=0?e.order-t.order:Math.random()-.5})),e.time=60*e.exam.tlimit,e.problems=r,e.record.userid=e.$user("id"),e.record.examid=e.eid,e.record.examname=e.exam.name,e.record.courseid=e.cid,e.record.date=l.a.getToday(),e.record.finish=!1;case 17:case"end":return t.stop()}}),t)})))()},leave:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,d,m,f,h,v,x,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=60*e.exam.tlimit-e.time,e.recordId){t.next=19;break}return e.record.submits={},e.record.score=0,e.record.finish=!0,e.record.totaltime=n,r=c.d.collection("answers").doc(),o=c.d.collection("users").doc(e.$user("id")),(d=c.d.batch()).set(r,e.record),e.recordId=r.id,m={answerid:e.recordId,name:e.record.examname,date:l.a.getToday(),score:0,finish:!0},(f={})[e.eid]=m,d.set(o,{exams:f},{merge:!0}),t.next=17,d.commit();case 17:t.next=28;break;case 19:return h=c.d.batch(),v=c.d.collection("answers").doc(e.recordId),x=c.d.collection("users").doc(e.$user("id")),h.set(v,{totaltime:n,finish:!0},{merge:!0}),(_={})[e.eid]={finish:!0},h.set(x,{exams:_},{merge:!0}),t.next=28,h.commit();case 28:e.finished=!0,e.$router.push("/afterexam");case 30:case"end":return t.stop()}}),t)})))()},mmss:function(e){return l.a.mmss(e)},hhmmss:function(e){return l.a.hhmmss(e)}},watch:{tick:function(e){this.time--,0===this.time&&this.leave()}}},m=n(55),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-navbar",{attrs:{variant:"light"}},[n("b-navbar-nav",{staticClass:"mr-auto"},[n("b-nav-text",{staticClass:"text-dark"},[e._v(e._s(e.$user("name")))])],1),e._v(" "),n("b-navbar-nav",{staticClass:"mr-auto"},[n("b-nav-text",{staticClass:"text-primary"},[e._v("\n                總分 "+e._s(e.exam&&e.exam.tscore)+"，限時\n                "+e._s(e.exam&&e.exam.tlimit)+" 分鐘；   本題佔分\n                "+e._s(e.problems[e.index]&&e.problems[e.index].score)+"， 限時\n                "+e._s(e.problems[e.index]&&e.mmss(e.problems[e.index].tlimit))+"\n                   剩餘考試時間 "+e._s(e.hhmmss(e.time))+"\n            ")])],1),e._v(" "),n("b-navbar-nav",{staticClass:"mr-auto"},[e.skip?e._e():n("b-button",{staticClass:"ml-3 btn-sm btn-outline-success",attrs:{variant:"outline-success"},on:{click:function(t){return e.skipproblem()}}},[e._v("跳過本題")]),e._v(" "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-leave",modifiers:{"modal-leave":!0}}],staticClass:"ml-3 btn btn-sm btn-outline-danger",attrs:{variant:"outline-danger"}},[e._v("離開考場")]),e._v(" "),n("b-modal",{attrs:{id:"modal-leave",title:"溫馨提醒","ok-title":"確定","cancel-title":"取消","no-close-on-esc":!0,"no-close-on-backdrop":!0},on:{ok:function(t){return e.leave()}}},[n("p",{staticClass:"mt-4 text-danger"},[e._v("此視窗顯示時，計時不會暫停。")]),e._v(" "),n("p",{staticClass:"my-4 text-danger"},[e._v("\n                    離開考場等於交卷，不得再次進入！\n                    "),n("br"),e._v("確定要離開嗎？\n                ")])])],1),e._v(" "),n("b-navbar-nav",[n("b-nav-text",{staticClass:"text-dark"},[e._v(e._s(e.index+1)+" /\n                "+e._s(e.problems&&e.problems.length))])],1)],1),e._v(" "),e.ready&&"progtest"==e.problems[e.index].type?n("ProgTest",{key:e.index,attrs:{times:e.problems[e.index].tlimit,quiz:e.problems[e.index],submit:e.submit,skip:e.skip}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ProgTest:n(908).default})},855:function(e,t,n){"use strict";n(10),n(14),n(22),n(86),n(9),n(856),n(29),n(15);var r=n(228),o=n.n(r),c={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var n=Math.floor(t/60);return t%=60,"".concat(this.pad(n),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],n=Object.keys(e);return n.sort(),n.forEach((function(n){t.push(Object.assign({id:n},e[n]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var n=JSON.parse(JSON.stringify(e)),r=e.id;delete n.id,t[r]=n})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var n=0;n<e.length;n++)if(t==e[n].id)return n;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},865:function(e,t,n){"use strict";n.r(t);n(367),n(27),n(49);var r=n(7),o=n(0),c=n(882),l=n(883),d=n(884),m=n(885),f=n(886),h=n(888),v=(n(875),n(3)),x=n(901),_=n.n(x);v.default.use(_.a);var C={props:{problem:Object,showRef:{type:Boolean,default:!0},stylePoints:{type:Number,default:0},lang:{type:String,default:"c"},langs:{type:String,default:"c,cpp,py"},initCode:{type:String,default:""},dummy:{type:Number,default:0}},data:function(){var e;return e={defaultCode:{c:"#include <stdio.h>\n\nint main()\n{\n\treturn 0;\n}\n",cpp:"#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n\treturn 0;\n}\n"},hand:{w:330,h:60,x:0,y:0,expand:!1},infoAlert:!1,info:{title:"",message:""},tabIndex:0,mycode:"",chnlabel:"X",srclang:"c",judging:!1,channel:null},Object(o.a)(e,"chnlabel",null),Object(o.a)(e,"result",null),Object(o.a)(e,"localeText",{Coding_Problem:"問題",Coding_Code:"程式",Coding_Result:"結果",Coding_Reference:"參考",Coding_CodeTooShort:"程式碼太短"}),e},components:{CodePanel:c.default,SubmitResult:m.default,Question:l.default,CCheetSheet:d.default,Assist:f.default,vdr:function(){return n.e(7).then(n.t.bind(null,1345,7))}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.localeText=e.$updateLocaleText(e.localeText),e.initCode&&(e.mycode=e.initCode),e.srclang=e.lang,n=e.$system("setting"),console.log("SS",n),n&&n.judgers&&h.a.checkServer(n.judgers).then((function(t){e.channel=t.best.channel;var n=e.channel.toUpperCase();"WSS"===n.substr(0,3)?e.chnlabel=n.substr(6,1):e.chnlabel=n.substr(5,1)}));case 6:case"end":return t.stop()}}),t)})))()},methods:{setInitC:function(){this.mycode=this.defaultCode.c,this.srclang="c"},setInitCpp:function(){this.mycode=this.defaultCode.cpp,this.srclang="cpp"},onResize:function(e,t,n,r){this.x=e,this.y=t,this.width=n,this.hheight=r},onDrag:function(e,t){this.x=e,this.y=t},refresh:function(){var e=this,t=this.mycode;this.mycode+=" ",this.$nextTick((function(){e.mycode=t}))},langChanged:function(e){this.srclang=e},submit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.judging&&e.channel){t.next=2;break}return t.abrupt("return");case 2:if(!(e.mycode.length<5)){t.next=6;break}return e.info={title:e.localeText.Coding_Code,message:e.localeText.Coding_CodeTooShort},e.infoAlert=!0,t.abrupt("return");case 6:return e.judging=!0,n={answerCode:e.problem.answerCode,answerLang:e.problem.answerLang,dataCode:e.problem.dataCode,dataLang:e.problem.dataLang,sourceCode:e.mycode,sourceLang:e.srclang,testMode:e.problem.testMode,cmpMode:e.problem.cmpMode,timeLimit:e.problem.timeLimit,memoryLimit:e.problem.memoryLimit,outputLimit:e.problem.outputLimit},t.prev=8,t.next=11,h.a.judgeProgtest(e.channel,n);case 11:e.result=t.sent,e.tabIndex=1,e.judging=!1,r={cdata:n,result:e.result},e.$emit("submit",r),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(8),e.judging=!1,console.log("Judge Error:",t.t0);case 22:case"end":return t.stop()}}),t,null,[[8,18]])})))()}},watch:{problem:function(e){this.result=null},initCode:function(e){this.mycode=e},lang:function(e){this.srclang=e},dummy:function(e){this.$emit("getCode",{code:this.mycode,lang:this.srclang})}}},S=(n(902),n(55)),component=Object(S.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message))]),e._v(" "),n("Split",{staticStyle:{height:"805px"},attrs:{gutterSize:5}},[n("SplitArea",{attrs:{size:25,minSize:500}},[n("b-tabs",{attrs:{card:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[n("b-tab",{attrs:{title:e.localeText.Coding_Problem}},[n("Question",{attrs:{problem:e.problem}})],1),e._v(" "),n("b-tab",{attrs:{title:e.localeText.Coding_Result}},[n("SubmitResult",{attrs:{result:e.result}})],1),e._v(" "),e.showRef?n("b-tab",{attrs:{title:e.localeText.Coding_Reference}},[n("CCheetSheet")],1):e._e()],1)],1),e._v(" "),n("SplitArea",{attrs:{size:75,minSize:700}},[n("CodePanel",{attrs:{height:700,submit:e.submit,judging:e.judging,lang:e.srclang,langs:e.langs,channel:e.chnlabel},on:{langChanged:e.langChanged},model:{value:e.mycode,callback:function(t){e.mycode=t},expression:"mycode"}}),e._v(" "),n("vdr",{staticClass:"assist",attrs:{w:e.hand.w,h:e.hand.h,z:999,parent:!1},on:{dragging:e.onDrag,resizing:e.onResize}},[n("p",{staticClass:"handTitle",attrs:{align:"center"}},[e._v("小幫手\n                "),e.hand.expand?n("b-link",{on:{click:function(t){e.hand.expand=!1,e.hand.h=60}}},[n("b-icon",{attrs:{icon:"arrow-up"}})],1):n("b-link",{staticClass:"ml-4",on:{click:function(t){e.hand.expand=!0,e.hand.h=300}}},[n("b-icon",{attrs:{icon:"arrow-down"}})],1)],1),e._v(" "),e.hand.expand?n("div",[e.mycode.length<10||e.mycode==e.defaultCode.c||e.mycode==e.defaultCode.cpp?n("div",[n("b-link",{attrs:{size:"small",variant:"success"},on:{click:e.setInitC}},[e._v("Init-C")]),e._v(" "),n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:e.setInitCpp}},[e._v("Init-C++")]),e._v(" "),n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(t){e.tabIndex=2}}},[e._v("C-Ref")]),e._v(" "),n("hr")],1):e._e(),e._v(" "),n("assist",{attrs:{problem:e.problem,result:e.result}})],1):e._e()])],1)],1)],1)}),[],!1,null,"2f7ee49d",null);t.default=component.exports;installComponents(component,{Question:n(883).default,SubmitResult:n(885).default,CCheetSheet:n(884).default,CodePanel:n(882).default,Assist:n(886).default})},876:function(e,t,n){var content=n(891);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("2454f30a",content,!0,{sourceMap:!1})},877:function(e,t,n){var content=n(893);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("1b244e00",content,!0,{sourceMap:!1})},878:function(e,t,n){var content=n(895);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("0092e82f",content,!0,{sourceMap:!1})},879:function(e,t,n){var content=n(897);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("0ee4a340",content,!0,{sourceMap:!1})},880:function(e,t,n){var content=n(899);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("4a97244d",content,!0,{sourceMap:!1})},881:function(e,t,n){var content=n(903);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("0c57a909",content,!0,{sourceMap:!1})},882:function(e,t,n){"use strict";n.r(t);n(12),n(367),n(27),n(9),n(29),n(46),n(49);var r=n(7),o=n(0),c=(n(909),{props:{value:String,height:{type:Number,default:500},submit:{type:Function,default:null},judging:{type:Boolean,default:!1},lang:{type:String,default:"c"},langs:{type:String,default:"c, cpp, py"},lineNumbers:{type:Boolean,default:!0},channel:{type:String,default:"None"}},components:{vdr:function(){return n.e(7).then(n.t.bind(null,1345,7))}},data:function(){var e;return e={hand:{w:330,h:60,x:0,y:0,expand:!1},cm:null,judgable:!1,cmlang:"c",cmlangs:["c","cpp","py"],cmstyle:{"font-size":"100%"},cmfontsize:100},Object(o.a)(e,"cm",null),Object(o.a)(e,"cmcode",null),Object(o.a)(e,"cmOption",{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!1,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}),e},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.cmcode=e.value,e.cmlang=e.lang,e.cmOption.lineNumbers=e.lineNumbers,""==e.langs?e.cmlangs=[e.lang]:e.cmlangs=e.langs.split(",").map((function(e){return e.trim()})),e.cm.focus();case 5:case"end":return t.stop()}}),t)})))()},methods:{langLabel:function(e){return"c"==e||"C"==e?"C":"c++"==e||"C++"==e||"cpp"==e||"CPP"==e||"cc"==e?"C++":"py"==e||"PY"==e?"PY":void 0},setLang:function(e){"c"!==e&&"cpp"!==e&&"py"!==e||(this.cmlang=e,"c"!=e&&"cpp"!=e||(this.cmOption.mode="text/x-c++src"),"py"==e&&(this.cmOption.mode="text/x-python"),this.$refs.coder.codemirror.focus(),this.$emit("langChanged",e))},cinput:function(e){this.$emit("input",e)},incfont:function(){this.cmfontsize+=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},decfont:function(){this.cmfontsize-=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},resetfont:function(){this.cmfontsize=100,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},onCmReady:function(e){this.cm=e,e.setSize(null,this.height)}},watch:{lang:function(e){this.setLang(e)},value:function(e){this.cmcode=e,this.cm.focus()},height:function(e){this.cm.setSize(null,e)}}}),l=(n(890),n(55)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row-container"},[n("div",{staticClass:"toolbar"},[e._l(e.cmlangs,(function(t,r){return n("b-button",{key:r,attrs:{size:"sm",variant:t==e.cmlang?"success":"outline-success"},on:{click:function(n){return e.setLang(t)}}},[e._v(e._s(e.langLabel(t)))])})),e._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success"},on:{click:e.incfont}},[e._v("＋")]),e._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:e.resetfont}},[e._v("◯")]),e._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:e.decfont}},[e._v("－")]),e._v(" "),e.submit?n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success",disabled:e.judging||"None"==e.channel},on:{click:e.submit}},[n("b-icon",{attrs:{icon:"check2"}})],1):e._e(),e._v(" "),"None"!=e.channel?n("b-button",{staticClass:"ml-4",attrs:{variant:"primary",size:"sm",disabled:""}},[e._v(e._s(e.channel))]):n("span",[n("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)],2),e._v(" "),n("codemirror",{ref:"coder",staticClass:"coder",style:e.cmstyle,attrs:{options:e.cmOption},on:{ready:e.onCmReady,input:e.cinput},model:{value:e.cmcode,callback:function(t){e.cmcode=t},expression:"cmcode"}})],1)])}),[],!1,null,"d6aee4e4",null);t.default=component.exports},883:function(e,t,n){"use strict";n.r(t);n(230),n(368),n(9),n(20),n(867);var r={props:{problem:Object},computed:{desc:function(){return this.$selectUserLocaleText(this.problem.description).replace(/\\n/g,"⏎")}}},o=(n(892),n(55)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"probPanel"},[n("p",{staticClass:"ptitle"},[e._v(e._s(e.$selectUserLocaleText(e.problem.title)))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.$md.render(e.desc))}})])}),[],!1,null,"6f868a80",null);t.default=component.exports},884:function(e,t,n){"use strict";n.r(t);n(49);var r=n(7),o={data:function(){return{refcontents:"You should not see this",localeText:{CCheet_Title:"目前尚未有評判結果"}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("en"!==e.$user("locale")){t.next=6;break}return t.next=3,e.$content("en/ccheetsheet").fetch();case 3:e.refcontents=t.sent,t.next=9;break;case 6:return t.next=8,e.$content("zh/ccheetsheet").fetch();case 8:e.refcontents=t.sent;case 9:case"end":return t.stop()}}),t)})))()}},c=(n(894),n(55)),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nuxt-content",{attrs:{document:this.refcontents}})],1)}),[],!1,null,"6707e4cd",null);t.default=component.exports},885:function(e,t,n){"use strict";n.r(t);n(14),n(18),n(9),n(157),n(20),n(29),n(15);var r={props:{result:Object,showTime:{type:Boolean,default:!1},showMemory:{type:Boolean,default:!1}},data:function(){return{localeText:{SR_NoResult:"目前尚未有評判結果",SR_Results:"執行結果",SR_Score:"程式得分",SR_UseTime:"使用時間",SR_UseMemory:"使用記憶體",SR_Bytes:"位元組",SR_SampleInput:"輸入範例",SR_CorrectOutput:"正確輸出",SR_ProgramCoutput:"程式輸出",SR_StyleCheck:"風格檢查",SR_StyleCheckOK:"格式良好",SR_Response:"錯誤訊息",SR_RunStatus_CE:"編譯錯誤",SR_RunStatus_AC:"正確",SR_RunStatus_PC:"部份正確",SR_RunStatus_PE:"排版錯誤",SR_RunStatus_WA:"錯誤",SR_RunStatus_TLE:"超過時間限制",SR_RunStatus_OLE:"超過輸出限制",SR_RunStatus_MLE:"超過記憶體限制",SR_RunStatus_RE:"執行時期錯誤"}}},computed:{showWrongCase:function(){return"WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus},showStyleCheck:function(){return"NA"!=this.result.StyleCheck&&"N/A"!=this.result.StyleCheck&&("WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus)},styleResult:function(){return""==this.result.StyleCheck?this.localeText.SR_StyleCheckOK:this.result.StyleCheck}},created:function(){this.localeText=this.$updateLocaleText(this.localeText)},methods:{inputStr:function(e){return e.replace(/^\s*\n/gm,"")},outputStr:function(e){var t=/^(\s+)(.*)$/,n=/^(.*)(\s+)$/,r=e.split("\n"),o=[];return r.forEach((function(line){var e=line,r=e.match(t);r&&(e="<mark>"+r[1]+"</mark>"+r[2]),(r=e.match(n))&&(e=r[1]+"<mark>"+r[2]+"</mark>"),o.push(e)})),o.join("<mark>⏎</mark>\n")},statusResult:function(e){var t="("+e.RunStatus+") ";return"AC"==e.RunStatus?t+this.localeText.SR_RunStatus_AC:"CE"===e.RunStatus?t+this.localeText.SR_RunStatus_CE:"NA"===e.RunStatus?t+this.localeText.SR_RunStatus_PC:"PE"===e.RunStatus?t+this.localeText.SR_RunStatus_PE:"WA"===e.RunStatus?t+this.localeText.SR_RunStatus_WA:"TLE"===e.RunStatus?t+this.localeText.SR_RunStatus_TLE:"OLE"===e.RunStatus?t+this.localeText.SR_RunStatus_OLE:"MLE"===e.RunStatus?t+this.localeText.SR_RunStatus_MLE:"RE"===e.RunStatus?t+this.localeText.SR_RunStatus_RE:t}}},o=(n(896),n(55)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.result?n("div",{staticClass:"probPanel"},[n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v(e._s(e.localeText.SR_Results))]),e._v(" "),n("span",{staticClass:"status"},[e._v(e._s(e.statusResult(e.result)))])]),e._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v(e._s(e.localeText.SR_Score))]),e._v(" "),n("span",{staticClass:"status"},[e._v(e._s(e.result.Score))])]),e._v(" "),e.showTime?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v(e._s(e.localeText.SR_UseTime))]),e._v(" "),n("span",{staticClass:"status"},[e._v("\n                CPU: "+e._s(e.result.CPUTime)+"ms / Real:\n                "+e._s(e.result.RealTime)+"ms\n            ")])]):e._e(),e._v(" "),e.showMemory?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v(e._s(e.localeText.SR_UseMemory))]),e._v(" "),n("span",{staticClass:"status"},[e._v(e._s(e.result.Memory)+" "+e._s(e.localeText.SR_Bytes))])]):e._e(),e._v(" "),n("hr"),e._v(" "),e.showWrongCase?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[e._v(e._s(e.localeText.SR_SampleInput))]),e._v(" "),n("pre",{staticClass:"sample"},[e._v(e._s(e.inputStr(e.result.WrongCase.input)))]),e._v(" "),n("div",{staticClass:"pseg"},[e._v(e._s(e.localeText.SR_CorrectOutput)+" \n                ("+e._s(e.result.WrongCase.answer.length)+" "+e._s(e.localeText.SR_Bytes)+")")]),e._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:e._s(e.outputStr(e.result.WrongCase.answer))}}),e._v(" "),n("div",{staticClass:"pseg"},[e._v(e._s(e.localeText.SR_ProgramCoutput)+"\n                ("+e._s(e.result.WrongCase.source.length)+" "+e._s(e.localeText.SR_Bytes)+")")]),e._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:e._s(e.outputStr(e.result.WrongCase.source))}})]):e._e(),e._v(" "),e.result.Response&&""!=e.result.Response?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[e._v(e._s(e.localeText.SR_Response))]),e._v(" "),n("pre",{staticClass:"sample"},[e._v(e._s(e.result.Response))])]):e._e(),e._v(" "),e.showStyleCheck?n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[e._v(e._s(e.localeText.SR_StyleCheck))]),e._v(" "),n("pre",{staticClass:"sample"},[e._v(e._s(e.styleResult))])]):e._e()]):n("div",{staticClass:"ptitle"},[e._v("\n        "+e._s(e.localeText.SR_NoResult)+"\n    ")])])}),[],!1,null,"9d7d6e9a",null);t.default=component.exports},886:function(e,t,n){"use strict";n.r(t);n(230),n(368),n(9),n(20),n(29),n(231),n(49);var r=n(7),o=n(887),c=n(26),l={props:{problem:Object,result:Object},data:function(){return{description:"",messages:[],showMessage:!1,myclass:["myclass"],dataset:null}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dataset){t.next=5;break}return t.next=3,c.d.collection("assists").doc("hints").get();case 3:n=t.sent,e.dataset=n.data();case 5:e.parseMessages();case 6:case"end":return t.stop()}}),t)})))()},methods:{parseMessages:function(){var desc=null,e=o.a.getAssist(this.problem,this.result);if(e&&e.link&&(desc=this.dataset[e.link]),e&&e.argn&&(1===e.argn&&(desc=desc.replace(/xxx/g,e.para)),2===e.argn&&(desc=(desc=desc.replace(/xxx1/g,e.para[0])).replace(/xxx2/g,e.para[1]))),e&&e.line&&(desc=(desc=desc.replace(/LINE/g,e.line)).replace(/POS/g,e.pos)),desc){var title=desc.split("\n")[0];this.messages=[{text:title,desc:desc}],console.log("M",this.messages)}},show:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.description=e.desc,t.showMessage=!0;case 2:case"end":return n.stop()}}),n)})))()}},watch:{problem:function(e){console.log("P changed",e),this.parseMessages()},result:function(e){console.log("R changed",e),this.parseMessages()}}},d=(n(898),n(55)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{attrs:{size:"xl",title:"小幫手","modal-class":e.myclass},model:{value:e.showMessage,callback:function(t){e.showMessage=t},expression:"showMessage"}},[n("div",{domProps:{innerHTML:e._s(e.$md.render(e.description))}})]),e._v(" "),e.messages.length>0?n("div",e._l(e.messages,(function(t,r){return n("p",{key:r},[n("b-link",{attrs:{size:"sm",variant:"success"},on:{click:function(n){return e.show(t)}}},[e._v(e._s(t.text))])],1)})),0):n("div",[n("p",[e._v("目前沒有特別要提醒的喔！")])])],1)}),[],!1,null,"5e050d0c",null);t.default=component.exports},887:function(e,t,n){"use strict";n(9),n(157);t.a={_CE_Assist:function(e,t){var line=null,n=null,r=/(\d+):(\d+): error/,o=e.match(r);return o&&(line=o[1],n=o[2]),r=/undefined reference to `(\w+)'/,(o=e.match(r))?"main"===o[1]?{link:"h0002"}:{link:"h0003",para:o[1],argn:1}:(r=/'(.+)' undeclared/,(o=e.match(r))?{link:"h0001",para:o[1],argn:1,line:line,pos:n}:(r=/expected '(.+)' before '(.+)'/,(o=e.match(r))?{link:"h0004",para:[o[1],o[2]],argn:2,line:line,pos:n}:void 0))},CE_Assist:function(e,t){var n=t.Response;return this._CE_Assist(n,t)},getAssist:function(e,t){return t?"CE"===t.RunStatus?this.CE_Assist(e,t):void 0:null}}},888:function(e,t,n){"use strict";n(39),n(27),n(9),n(20),n(29),n(47);var r=n(910),o=n.n(r),c={checkServer:function(e){return new Promise((function(t,n){var r="ws://",c=e.http;"https:"==document.location.protocol&&(c=e.https,r="wss://");var l=c.length,d=100,m=null,f=0,h=!1;window.setTimeout((function(){return h=!0}),2e3);for(var v=[],x=function(i){var e=r+c[i],x=e+"/submit",_=Math.random(),C=new o.a(x,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,e){return Object.assign({id:e},data)},extractRequestId:function(data){return _}});C.open().then((function(){return C.sendRequest({content:"HELLO:"+c[i]},{requestId:_})})).then((function(r){var o=r.split("#"),x=parseInt(o[1],10);if(v.push({server:c[i],busy:x}),x<d)d=x,m=e;else if(x===d){Math.random()<.4&&(m=e)}if(f++,h||f===l||3===f)return d<99?void t({best:{channel:m+"/submit",busy:d},available:v}):void n("Judger not available!")})).catch((function(e){if(console.log("Error",e),f++,h||f===l||3===f)return d<99?void t({best:{channel:m+"/submit",busy:d},available:v}):void n("Judger not available!")}))},i=0;i<l;i++)x(i)}))},judgeFunctest:function(e,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(t,n){if(e){var r=Math.random(),c=new o.a(e,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,e){return Object.assign({id:e},data)},extractRequestId:function(data){return r}});c.open().then((function(){return c.sendRequest({content:content},{requestId:r})})).then((function(e){try{var r=JSON.parse(e).RunStatus;if(r.indexOf('["AC"]')>=0)return void t("AC");if(r.indexOf("Wrong")>=0){var o=r.replace(/\\n/g,"\n");return o=(o=o.replace('["',"")).replace('"]',""),void t(o)}return void t(r)}catch(e){return console.log("Error:",e),void n(e)}})).catch((function(e){console.log("Error:",e),n(e)}))}else n("Null judger.")}))},judgeProgtest:function(e,t){var n=Math.random();return new Promise((function(r,c){if(e){var l=new o.a(e,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,e){return Object.assign({id:e},data)},extractRequestId:function(data){return n}});l.open().then((function(){return l.sendRequest({content:t},{requestId:n})})).then((function(e){try{return void r(JSON.parse(e))}catch(e){return console.log("Error:",e),void c(e)}})).catch((function(e){console.log("Error:",e),c(e)}))}else c("Null judger.")}))}};t.a=c},890:function(e,t,n){"use strict";n(876)},891:function(e,t,n){(t=n(56)(!1)).push([e.i,".conn[data-v-d6aee4e4]{background:green;color:#fff;text-align:center}.row-container[data-v-d6aee4e4]{width:100%}.toolbar[data-v-d6aee4e4]{display:flex;flex-direction:row;justify-content:space-start;background:rgba(0,0,0,.03);padding:10px 12px 0 32px;border-bottom:1px solid #d7d7d7}.coder[data-v-d6aee4e4]{flex:1 1 0;padding-top:12px}[data-v-d6aee4e4] .CodeMirror-gutters{border-left:0}.btn[data-v-d6aee4e4],[data-v-d6aee4e4] .CodeMirror-linenumber{text-align:center}.btn[data-v-d6aee4e4]{font-size:80%;width:50px;margin:2px 8px 12px 0;border-radius:8px}",""]),e.exports=t},892:function(e,t,n){"use strict";n(877)},893:function(e,t,n){(t=n(56)(!1)).push([e.i,'[data-v-6f868a80] .katex{font-size:1.18em}.probPanel[data-v-6f868a80]{max-width:800px;text-align:justify}.ptitle[data-v-6f868a80]{color:#00f;font-family:"Arial"}.ptitle[data-v-6f868a80],[data-v-6f868a80] h1{font-size:100%}[data-v-6f868a80] h1{color:#ff4500;margin:14px 0 6px}[data-v-6f868a80] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),e.exports=t},894:function(e,t,n){"use strict";n(878)},895:function(e,t,n){(t=n(56)(!1)).push([e.i,'[data-v-6707e4cd] h1{color:#00f;font-family:"Arial";font-size:120%}[data-v-6707e4cd] h2{color:#ff4500;font-size:80%;margin:12px 0;text-decoration:underline}[data-v-6707e4cd] code{color:#222;font-family:"monospace",Courier;font-size:75%}',""]),e.exports=t},896:function(e,t,n){"use strict";n(879)},897:function(e,t,n){(t=n(56)(!1)).push([e.i,'.ptitle[data-v-9d7d6e9a]{color:#00f;font-size:100%;font-family:"Arial"}[data-v-9d7d6e9a] mark{background:#ff0;padding:0}.probPanel[data-v-9d7d6e9a]{padding:0 10px}.item[data-v-9d7d6e9a]{margin-bottom:20px}.label[data-v-9d7d6e9a]{width:120px;color:#00f}.label[data-v-9d7d6e9a],.pseg[data-v-9d7d6e9a]{display:inline-block}.pseg[data-v-9d7d6e9a]{color:red}.sample[data-v-9d7d6e9a],.status[data-v-9d7d6e9a]{color:#000}.sample[data-v-9d7d6e9a]{background:#eee;padding:6px 6px 6px 12px;font-family:"Courier New",Courier,monospace}',""]),e.exports=t},898:function(e,t,n){"use strict";n(880)},899:function(e,t,n){(t=n(56)(!1)).push([e.i,"[data-v-5e050d0c] h1{font-size:110%;color:red;margin-bottom:24px}[data-v-5e050d0c] .myclass>div{position:absolute!important;width:700px;top:180px!important;right:64px!important;background-color:#ff0!important}[data-v-5e050d0c] .myclass>div.modal-dialog>.modal-content{background-color:#f8ecec!important}",""]),e.exports=t},902:function(e,t,n){"use strict";n(881)},903:function(e,t,n){(t=n(56)(!1)).push([e.i,".assist[data-v-2f7ee49d]{background:#dff5f5;border:1px solid #eeaf3b;padding:12px;right:100px;top:150px;line-height:150%}.handTitle[data-v-2f7ee49d]{background:#e0e0f7;color:#2c2fe9}",""]),e.exports=t},904:function(e,t,n){var content=n(917);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("2e95a49a",content,!0,{sourceMap:!1})},908:function(e,t,n){"use strict";n.r(t);n(367),n(49);var r=n(7),o=n(855),c=n(865),l=n(26),d={components:{ProblemSolver:c.default},props:{quiz:Object,submit:Function,times:{type:Number,default:300},skip:{type:Boolean,default:!1},lang:{type:String,default:"c"},langs:{type:String,default:"c, cpp, py"},initcode:{type:String,default:""},correctHint:{type:String,default:"正確，提交並進下一題"}},data:function(){return{lastcode:{sourceLang:"c",sourceCode:""},showPass:!1,mycode:"",codelang:"c",channel:null,chnlabel:"None",time:0,timer:null,timing:!0,spendTime:0,result:null,judging:!1,submitResult:null,pass:!1,done:!1}},computed:{tick:function(){return this.$store.state.params.tick}},created:function(){this.mycode=this.initcode,this.codelang=this.lang},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0==e.times?e.timing=!1:e.time=e.times;case 1:case"end":return t.stop()}}),t)})))()},methods:{isubmit:function(data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=data.cdata,r=data.result,n.sourceLang==e.lastcode.sourceLang&&n.sourceCode==e.lastcode.sourceCode){t.next=9;break}return e.lastcode={sourceLang:n.sourceLang,sourceCode:n.sourceCode},c={uid:e.$user("id"),pid:e.quiz.id,created:o.a.getNow(),lang:n.sourceLang,code:n.sourceCode,status:r.RunStatus,score:r.Score},t.next=7,l.d.collection("submits").add(c);case 7:d=t.sent,c.id=d.id;case 9:"AC"===r.RunStatus&&(e.spendTime=e.timing?e.times-e.time:0,e.showPass=!0);case 10:case"end":return t.stop()}}),t)})))()},setLang:function(e){this.codelang=e},mmss:function(e){return o.a.mmss(e)},send:function(e){this.showPass||(this.spendTime=this.timing?this.times-this.time:0),this.showPass=!1,this.done=!0,this.judging=!1,this.submit({correct:e,uans:this.lastcode.sourceCode,usetime:this.spendTime,lang:this.lastcode.sourceLang})}},watch:{tick:function(e){this.time>0&&this.time--,0===this.time&&this.send(!1)},skip:function(e){console.log("V",e),e&&!this.done&&this.send(!1)}}},m=(n(916),n(55)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"qpanel"},[n("b-modal",{attrs:{centered:"",title:"通過測試","hide-footer":""},model:{value:e.showPass,callback:function(t){e.showPass=t},expression:"showPass"}},[n("p",{attrs:{align:"center"}},[n("b-button",{attrs:{variant:"success"},on:{click:function(t){return e.send(!0)}}},[e._v("下一題")])],1)]),e._v(" "),n("p",{staticClass:"timestatus"},[n("span",{staticClass:"type"},[e._v("《程式題》")]),e._v(" "),e.timing?n("span",[e._v("倒數計時 "+e._s(e.mmss(e.time)))]):n("span",[e._v("靜態測試")])]),e._v(" "),n("problem-solver",{attrs:{problem:e.quiz,lang:e.lang,langs:e.langs},on:{submit:e.isubmit}})],1)}),[],!1,null,"16ce9334",null);t.default=component.exports;installComponents(component,{ProblemSolver:n(865).default})},916:function(e,t,n){"use strict";n(904)},917:function(e,t,n){(t=n(56)(!1)).push([e.i,".tcenter[data-v-16ce9334]{text-align:center}.type[data-v-16ce9334]{color:#ff0}.qpanel[data-v-16ce9334]{background:#eee;padding:24px}.timestatus[data-v-16ce9334]{background:#00f;color:#fff;text-align:center}.result[data-v-16ce9334]{position:fixed;left:25%;top:25%;width:50%;height:50%;background:#ddd;z-index:100;padding:24px;border:2px solid green;overflow-y:scroll}",""]),e.exports=t}}]);