(window.webpackJsonp=window.webpackJsonp||[]).push([[65,3],{1062:function(t,e,n){"use strict";n(907)},1063:function(t,e,n){(e=n(56)(!1)).push([t.i,".tcenter[data-v-44e1bc99]{text-align:center}.type[data-v-44e1bc99]{color:#ff0}.qpanel[data-v-44e1bc99]{background:#eee;padding:24px}.timestatus[data-v-44e1bc99]{background:#00f;color:#fff;text-align:center}.result[data-v-44e1bc99]{position:fixed;left:25%;top:25%;width:50%;height:50%;background:#ddd;z-index:100;padding:24px;border:2px solid green;overflow-y:scroll}",""]),t.exports=e},1453:function(t,e,n){"use strict";n.r(e);n(14),n(18),n(30),n(15),n(49);var r=n(7),o=(n(1113),n(912)),c=n(26),l=n(855),d={components:{ProgTest:o.default},data:function(){return{reExam:!1,time:10,index:0,totalScore:0,skip:!1,finished:!1,problems:[],exam:null,langs:"c, cpp, py",record:{userid:null,examid:null,courseid:null,date:null,submits:{},score:0},recordId:null,localeText:{ExamMan_Title:"名稱",ExamMan_EditExam:"編輯考試",ExamMan_TLMin:"限時 (分)",ExamMan_TLSec:"限時 (秒)",ExamMan_TotalScore:"總分",ExamMan_ProbTotalTime:"問題時長",ExamMan_TotalTime:"考試時長",ExamMan_Score:"分數",ExamMan_QuizOrder:"順序",ExamMan_SetParam:"設定問題參數",ExamMan_SetDefaultOrder:"設定預設順序",ExamMan_SelectProbs:"選擇題目",ExamMan_Compilers:"語言",ExamMan_Type:"類型",ExamMan_SkipProblem:"跳過本題",ExamMan_LeaveExam:"離開考場",Exam_Choice:"選擇",Exam_Fillin:"填充",Exam_Function:"函式",Exam_Program:"程式",SYS_OK:"確定",SYS_Cancel:"取消",SYS_Success:"成功",SYS_Actions:"操作"}}},computed:{ready:function(){return this.problems&&this.problems.length>0},tick:function(){return this.$store.state.params.tick},eid:function(){return this.$route.query.eid},cid:function(){return this.$route.query.cid}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.localeText=t.$updateLocaleText(t.localeText),e.next=3,c.d.collection("exams").doc(t.eid).get();case 3:n=e.sent,r=n.data(),t.exam=r,r.compilers&&(t.langs=r.compilers.join(", ")),t.setExam(),console.log("EXAM",t.exam);case 9:case"end":return e.stop()}}),e)})))()},methods:{examinfo:function(){if(!this.exam||!this.exam.probs)return"";var t=0,e=0;this.exam.probs.forEach((function(n){t+=n.score,e+=n.tlimit}));var n=this.localeText.ExamMan_TotalScore;return n+=" = ".concat(t,", "),n+=this.localeText.ExamMan_ProbTotalTime,n+=" = ".concat(l.a.mmss(e),", "),n+=this.localeText.ExamMan_TotalTime,n+=" = ".concat(this.exam.tlimit,":00")},skipproblem:function(){this.skip=!0},submit:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.correct&&(e.totalScore+=e.problems[e.index].score),e.record.submits[e.problems[e.index].id]=t,e.record.score=e.totalScore,console.log("Record",e.record),e.skip=!1,!e.finished&&e.index<e.problems.length-1?e.index++:e.leave();case 6:case"end":return n.stop()}}),n)})))()},setExam:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.$copyObject(t.exam.probs)).sort((function(t,e){return t.order-e.order!=0?t.order-e.order:Math.random()-.5})),t.time=60*t.exam.tlimit,t.problems=n,t.record.userid=t.$user("id"),t.record.examid=t.eid,t.record.examname=t.exam.name,t.record.courseid=t.cid,t.record.date=l.a.getToday(),t.record.finish=!1;case 10:case"end":return e.stop()}}),e)})))()},leave:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.record.spentTime=60*t.exam.tlimit-t.time,console.log("Final Record",t.record),t.$router.push("/teacher/exams?cid=".concat(t.cid));case 3:case"end":return e.stop()}}),e)})))()},mmss:function(t){return l.a.mmss(t)},hhmmss:function(t){return l.a.hhmmss(t)}},watch:{tick:function(t){this.time--,0===this.time&&this.leave()}}},m=n(55),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-navbar",{attrs:{variant:"light"}},[n("b-navbar-nav",{staticClass:"mr-auto"},[n("b-nav-text",{staticClass:"text-dark"},[t._v(t._s(t.$user("name")))])],1),t._v(" "),n("b-navbar-nav",{staticClass:"mr-auto"},[n("b-nav-text",{staticClass:"text-primary"},[t._v("\n                "+t._s(t.examinfo())+"\n            ")])],1),t._v(" "),n("b-navbar-nav",{staticClass:"mr-auto"},[t.skip?t._e():n("b-button",{staticClass:"ml-3 btn-sm btn-outline-success",attrs:{variant:"outline-success"},on:{click:function(e){return t.skipproblem()}}},[t._v(t._s(t.localeText.ExamMan_SkipProblem))]),t._v(" "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-leave",modifiers:{"modal-leave":!0}}],staticClass:"ml-3 btn btn-sm btn-outline-danger",attrs:{variant:"outline-danger"}},[t._v(t._s(t.localeText.ExamMan_LeaveExam))]),t._v(" "),n("b-modal",{attrs:{id:"modal-leave",title:"溫馨提醒","ok-title":"確定","cancel-title":"取消","no-close-on-esc":!0,"no-close-on-backdrop":!0},on:{ok:function(e){return t.leave()}}},[n("p",{staticClass:"mt-4 text-danger"},[t._v("此視窗顯示時，計時不會暫停。")]),t._v(" "),n("p",{staticClass:"my-4 text-danger"},[t._v("\n                    離開考場等於交卷，不得再次進入！\n                    "),n("br"),t._v("確定要離開嗎？\n                ")])])],1),t._v(" "),n("b-navbar-nav",[n("b-nav-text",{staticClass:"text-dark"},[t._v(t._s(t.index+1)+" /\n                "+t._s(t.problems&&t.problems.length))])],1)],1),t._v(" "),t.ready&&"progtest"==t.problems[t.index].type?n("ProgTest",{key:t.index,attrs:{times:t.problems[t.index].tlimit,quiz:t.problems[t.index],submit:t.submit,skip:t.skip,langs:t.langs}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProgTest:n(912).default})},855:function(t,e,n){"use strict";n(10),n(14),n(86),n(9),n(856),n(29),n(15);var r=n(228),o=n.n(r),c={pad:function(t){return t<10?"0"+t:t},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},862:function(t,e,n){"use strict";n.r(e);n(128),n(367),n(27),n(9),n(158),n(20),n(29),n(46),n(49);var r=n(7),o=n(0),c=n(883),l=n(884),d=n(885),m=n(886),f=n(887),h=n(888),v=(n(876),n(3)),_=n(890),x=n.n(_);v.default.use(x.a);var S={props:{problem:Object,showRef:{type:Boolean,default:!0},stylePoints:{type:Number,default:0},lang:{type:String,default:""},langs:{type:String,default:"c,cpp,py"},initCode:{type:String,default:""},isExam:{type:Boolean,default:!1},dummy:{type:Number,default:0}},data:function(){var t;return t={defaultCode:{c:'#include <stdio.h>\n\nint main()\n{\n\t// printf("Hello, world!");\n\treturn 0;\n}\n',cpp:'#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n\t// cout << "Hello, world!";\n\treturn 0;\n}\n',java:'public class Main {\n\tpublic static void main(String[] args) {\n\t\t// System.out.println("Hello, world!");\n\t}\n}\n',py:"# print('Hello, world!')\n"},hand:{w:330,h:60,x:0,y:0,expand:!1},infoAlert:!1,info:{title:"",message:""},noJudger:!1,tabIndex:0,mycode:"",chnlabel:"X",srclang:"c",judging:!1,channel:null},Object(o.a)(t,"chnlabel",null),Object(o.a)(t,"result",null),Object(o.a)(t,"testServers",{}),Object(o.a)(t,"localeText",{Coding_Problem:"問題",Coding_Code:"程式",Coding_Result:"結果",Coding_Reference:"參考",Coding_CodeTooShort:"程式碼太短",Coding_Assistant:"小幫手",Coding_Judger:"評判器",Coding_Relink:"重新連結",Coding_NoJudgerLink:"無法連結評判器",Coding_NoJudgerText:"如果仍無法開啟，請選擇以下評判器並接受其憑證，然後再嘗試重新連結！如果仍然無法解決，請回報給管理者，謝謝！"}),t},components:{CodePanel:c.default,SubmitResult:m.default,Question:l.default,CCheetSheet:d.default,Assist:f.default,vdr:function(){return n.e(8).then(n.t.bind(null,1395,7))}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.localeText=t.$updateLocaleText(t.localeText),t.initCode&&(t.mycode=t.initCode),t.langs?(n=t.langs.replace(/\s/g,"").split(","),""!==t.lang&&n.includes(t.lang)?t.srclang=t.lang:t.srclang=n[0]):""!==t.lang&&(t.srclang=t.lang),e.next=5,t.check_server();case 5:case"end":return e.stop()}}),e)})))()},methods:{langsHas:function(t){for(var e=this.langs.split(","),i=0;i<e.length;i++)if(e[i].trim()==t)return!0;return!1},check_server:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.$system("setting"))&&n.judgers&&(t.testServers=n.judgers.https,h.a.checkServer(n.judgers).then((function(e){if(t.channel=e.best.channel,""!==t.channel){var n=t.channel.toUpperCase();"WSS"===n.substr(0,3)?t.chnlabel=n.substr(6,1):t.chnlabel=n.substr(5,1),t.noJudger=!1}else t.noJudger=!0})).catch((function(e){t.noJudger=!0})));case 2:case"end":return e.stop()}}),e)})))()},setInit:function(t){this.mycode=this.defaultCode[t],this.srclang=t},onResize:function(t,e,n,r){this.x=t,this.y=e,this.width=n,this.hheight=r},onDrag:function(t,e){this.x=t,this.y=e},refresh:function(){var t=this,e=this.mycode;this.mycode+=" ",this.$nextTick((function(){t.mycode=e}))},langChanged:function(t){this.srclang=t},submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.judging&&t.channel){e.next=2;break}return e.abrupt("return");case 2:if(!(t.mycode.length<5)){e.next=6;break}return t.info={title:t.localeText.Coding_Code,message:t.localeText.Coding_CodeTooShort},t.infoAlert=!0,e.abrupt("return");case 6:return t.judging=!0,t.problem.timeLimit&&(""===t.problem.timeLimit?t.problem.timeLimit=1:t.problem.timeLimit=parseInt(t.problem.timeLimit,10)),t.problem.memoryLimit&&(""===t.problem.memoryLimit?t.problem.memoryLimit=1:t.problem.memoryLimit=parseInt(t.problem.memoryLimit,10)),t.problem.outputLimit&&(""===t.problem.outputLimit?t.problem.outputLimit=1e3:t.problem.outputLimit=parseInt(t.problem.outputLimit,10)),n={answerCode:t.problem.answerCode,answerLang:t.problem.answerLang,dataCode:t.problem.dataCode,dataLang:t.problem.dataLang,sourceCode:t.mycode,sourceLang:t.srclang,testMode:t.problem.testMode,cmpMode:t.problem.cmpMode,timeLimit:parseInt(t.problem.timeLimit,10),memoryLimit:parseInt(t.problem.memoryLimit,10),outputLimit:parseInt(t.problem.outputLimit,10)},e.prev=11,e.next=14,h.a.judgeProgtest(t.channel,n);case 14:t.result=e.sent,""!==t.result.StyleCheck&&(r=t.result.StyleCheck.split("\n").length-1,t.result.Score-=r*t.stylePoints),t.tabIndex=1,t.judging=!1,o={cdata:n,result:t.result},t.$emit("submit",o),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(11),t.judging=!1,console.log("Judge Error:",e.t0);case 26:case"end":return e.stop()}}),e,null,[[11,22]])})))()}},watch:{problem:function(t){this.result=null},initCode:function(t){this.mycode=t},lang:function(t){this.srclang=t},dummy:function(t){this.$emit("getCode",{code:this.mycode,lang:this.srclang})}}},C=(n(905),n(55)),component=Object(C.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),n("b-modal",{attrs:{size:"lg",title:t.localeText.Coding_NoJudgerLink,"hide-footer":"","no-close-on-esc":"","no-close-on-backdrop":"","hide-header-close":""},model:{value:t.noJudger,callback:function(e){t.noJudger=e},expression:"noJudger"}},[n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.check_server}},[t._v(t._s(t.localeText.Coding_Relink))]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v(t._s(t.localeText.Coding_NoJudgerText))]),t._v(" "),t._l(t.testServers,(function(e,r){return n("span",{key:"s"+r,staticClass:"mr-5"},[n("a",{attrs:{href:"https://"+e,target:"_blank"}},[t._v(t._s(t.localeText.Coding_Judger)+" "+t._s(e[0].toUpperCase()))])])}))],2),t._v(" "),n("Split",{staticStyle:{height:"805px"},attrs:{gutterSize:5}},[n("SplitArea",{attrs:{size:25,minSize:500}},[n("b-tabs",{attrs:{card:""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("b-tab",{attrs:{title:t.localeText.Coding_Problem}},[n("Question",{attrs:{problem:t.problem}})],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Coding_Result}},[n("SubmitResult",{attrs:{result:t.result}})],1),t._v(" "),t.showRef?n("b-tab",{attrs:{title:t.localeText.Coding_Reference}},[n("CCheetSheet")],1):t._e()],1)],1),t._v(" "),n("SplitArea",{attrs:{size:75,minSize:700}},[n("CodePanel",{attrs:{height:700,submit:t.submit,judging:t.judging,lang:t.srclang,langs:t.langs,channel:t.chnlabel},on:{langChanged:t.langChanged},model:{value:t.mycode,callback:function(e){t.mycode=e},expression:"mycode"}}),t._v(" "),n("vdr",{staticClass:"assist",attrs:{w:t.hand.w,h:t.hand.h,z:999,parent:!1},on:{dragging:t.onDrag,resizing:t.onResize}},[n("p",{staticClass:"handTitle",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.localeText.Coding_Assistant)+"\n                    "),t.hand.expand?n("b-link",{on:{click:function(e){t.hand.expand=!1,t.hand.h=60}}},[n("b-icon",{attrs:{icon:"arrow-up"}})],1):n("b-link",{staticClass:"ml-4",on:{click:function(e){t.hand.expand=!0,t.hand.h=400}}},[n("b-icon",{attrs:{icon:"arrow-down"}})],1)],1),t._v(" "),t.hand.expand?n("div",[t.mycode.length<10?n("div",[n("span",[t._v("Init: ")]),t._v(" "),t.langsHas("c")?n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(e){return t.setInit("c")}}},[t._v("C")]):t._e(),t._v(" "),t.langsHas("cpp")?n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(e){return t.setInit("cpp")}}},[t._v("C++")]):t._e(),t._v(" "),t.langsHas("py")?n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(e){return t.setInit("py")}}},[t._v("PY")]):t._e(),t._v(" "),t.langsHas("java")?n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(e){return t.setInit("java")}}},[t._v("Java")]):t._e(),t._v(" "),n("hr")],1):t._e(),t._v(" "),n("assist",{attrs:{problem:t.problem,result:t.result,isExam:t.isExam,code:t.mycode,lang:t.srclang}})],1):t._e()])],1)],1)],1)}),[],!1,null,"052b2d3d",null);e.default=component.exports;installComponents(component,{Question:n(884).default,SubmitResult:n(886).default,CCheetSheet:n(885).default,CodePanel:n(883).default,Assist:n(887).default})},877:function(t,e,n){var content=n(896);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("92797cd8",content,!0,{sourceMap:!1})},878:function(t,e,n){var content=n(898);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("1b244e00",content,!0,{sourceMap:!1})},879:function(t,e,n){var content=n(900);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("0092e82f",content,!0,{sourceMap:!1})},880:function(t,e,n){var content=n(902);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("99d6a4f4",content,!0,{sourceMap:!1})},881:function(t,e,n){var content=n(904);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("e0e51502",content,!0,{sourceMap:!1})},882:function(t,e,n){var content=n(906);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("58c272cd",content,!0,{sourceMap:!1})},883:function(t,e,n){"use strict";n.r(e);n(12),n(367),n(27),n(9),n(29),n(46),n(49);var r=n(7),o=n(0),c=(n(915),{props:{value:String,height:{type:Number,default:500},submit:{type:Function,default:null},judging:{type:Boolean,default:!1},lang:{type:String,default:"c"},langs:{type:String,default:"c, cpp, py"},lineNumbers:{type:Boolean,default:!0},channel:{type:String,default:"None"}},components:{vdr:function(){return n.e(8).then(n.t.bind(null,1395,7))}},data:function(){var t;return t={hand:{w:330,h:60,x:0,y:0,expand:!1},cm:null,judgable:!1,cmlang:"c",cmlangs:["c","cpp","py"],cmstyle:{"font-size":"100%"},cmfontsize:100},Object(o.a)(t,"cm",null),Object(o.a)(t,"cmcode",null),Object(o.a)(t,"cmOption",{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!1,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}),t},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.cmcode=t.value,t.cmlang=t.lang,t.cmOption.lineNumbers=t.lineNumbers,""==t.langs?t.cmlangs=[t.lang]:t.cmlangs=t.langs.split(",").map((function(t){return t.trim()})),t.cm.focus();case 5:case"end":return e.stop()}}),e)})))()},methods:{langLabel:function(t){return"c"==t||"C"==t?"C":"c++"==t||"C++"==t||"cpp"==t||"CPP"==t||"cc"==t?"C++":"py"==t||"PY"==t?"PY":"java"==t?"Java":void 0},setLang:function(t){"c"!==t&&"cpp"!==t&&"py"!==t&&"java"!==t||(this.cmlang=t,"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),"java"==t&&(this.cmOption.mode="text/x-java"),this.$refs.coder.codemirror.focus(),this.$emit("langChanged",t))},cinput:function(t){this.$emit("input",t)},incfont:function(){this.cmfontsize+=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},decfont:function(){this.cmfontsize-=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},resetfont:function(){this.cmfontsize=100,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},onCmReady:function(t){this.cm=t,t.setSize(null,this.height)}},watch:{lang:function(t){this.setLang(t)},value:function(t){this.cmcode=t,this.cm.focus()},height:function(t){this.cm.setSize(null,t)}}}),l=(n(895),n(55)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row-container"},[n("div",{staticClass:"toolbar"},[t._l(t.cmlangs,(function(e,r){return n("b-button",{key:r,attrs:{size:"sm",variant:e==t.cmlang?"success":"outline-success"},on:{click:function(n){return t.setLang(e)}}},[t._v(t._s(t.langLabel(e)))])})),t._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success"},on:{click:t.incfont}},[t._v("＋")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:t.resetfont}},[t._v("◯")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:t.decfont}},[t._v("－")]),t._v(" "),t.submit?n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success",disabled:t.judging||"None"==t.channel},on:{click:t.submit}},[n("b-icon",{attrs:{icon:"check2"}})],1):t._e(),t._v(" "),"None"!=t.channel?n("b-button",{staticClass:"ml-4",attrs:{variant:"primary",size:"sm",disabled:""}},[t._v(t._s(t.channel))]):n("span",[n("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)],2),t._v(" "),n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)])}),[],!1,null,"5fab9c76",null);e.default=component.exports},884:function(t,e,n){"use strict";n.r(e);n(230),n(369),n(9),n(20),n(870);var r={props:{problem:Object},computed:{desc:function(){return this.$selectUserLocaleText(this.problem.description).replace(/\\n/g,"⏎")}}},o=(n(897),n(55)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"probPanel"},[n("p",{staticClass:"ptitle"},[t._v(t._s(t.$selectUserLocaleText(t.problem.title)))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$md.render(t.desc))}})])}),[],!1,null,"6f868a80",null);e.default=component.exports},885:function(t,e,n){"use strict";n.r(e);n(49);var r=n(7),o={data:function(){return{refcontents:"You should not see this",localeText:{CCheet_Title:"目前尚未有評判結果"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("en"!==t.$user("locale")){e.next=6;break}return e.next=3,t.$content("en/ccheetsheet").fetch();case 3:t.refcontents=e.sent,e.next=9;break;case 6:return e.next=8,t.$content("zh/ccheetsheet").fetch();case 8:t.refcontents=e.sent;case 9:case"end":return e.stop()}}),e)})))()}},c=(n(899),n(55)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-content",{attrs:{document:this.refcontents}})],1)}),[],!1,null,"6707e4cd",null);e.default=component.exports},886:function(t,e,n){"use strict";n.r(e);n(14),n(18),n(9),n(157),n(20),n(29),n(15);var r={props:{result:Object,showTime:{type:Boolean,default:!1},showMemory:{type:Boolean,default:!1}},data:function(){return{localeText:{SR_NoResult:"目前尚未有評判結果",SR_Results:"執行結果",SR_Score:"程式得分",SR_UseTime:"使用時間",SR_UseMemory:"使用記憶體",SR_Bytes:"位元組",SR_SampleInput:"輸入範例",SR_CorrectOutput:"正確輸出",SR_ProgramOutput:"程式輸出",SR_StyleCheck:"風格檢查",SR_StyleCheckOK:"格式良好",SR_Format:"格式",SR_Response:"錯誤訊息",SR_RunStatus_CE:"編譯錯誤",SR_RunStatus_AC:"正確",SR_RunStatus_PC:"部份正確",SR_RunStatus_PE:"排版錯誤",SR_RunStatus_WA:"錯誤",SR_RunStatus_TLE:"超過時間限制",SR_RunStatus_OLE:"超過輸出限制",SR_RunStatus_MLE:"超過記憶體限制",SR_RunStatus_RE:"執行時期錯誤"}}},computed:{showWrongCase:function(){return"WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus},showStyleCheck:function(){return"NA"!=this.result.StyleCheck&&"N/A"!=this.result.StyleCheck},styleResult:function(){return""==this.result.StyleCheck?this.localeText.SR_StyleCheckOK:this.result.StyleCheck}},created:function(){this.localeText=this.$updateLocaleText(this.localeText)},methods:{inputStr:function(t){return t.replace(/^\s*\n/gm,"")},outputStr:function(t){var e=/^(\s+)(.*)$/,n=/^(.*)(\s+)$/,r=t.split("\n"),o=[];return r.forEach((function(line){var t=line,r=t.match(e);r&&(t="<mark>"+r[1]+"</mark>"+r[2]),(r=t.match(n))&&(t=r[1]+"<mark>"+r[2]+"</mark>"),o.push(t)})),o.join("<mark>⏎</mark>\n")},statusResult:function(t){var e="("+t.RunStatus+") ";return"AC"==t.RunStatus?e+this.localeText.SR_RunStatus_AC:"CE"===t.RunStatus?e+this.localeText.SR_RunStatus_CE:"NA"===t.RunStatus?e+this.localeText.SR_RunStatus_PC:"PE"===t.RunStatus?e+this.localeText.SR_RunStatus_PE:"WA"===t.RunStatus?e+this.localeText.SR_RunStatus_WA:"TLE"===t.RunStatus?e+this.localeText.SR_RunStatus_TLE:"OLE"===t.RunStatus?e+this.localeText.SR_RunStatus_OLE:"MLE"===t.RunStatus?e+this.localeText.SR_RunStatus_MLE:"RE"===t.RunStatus?e+this.localeText.SR_RunStatus_RE:e}}},o=(n(901),n(55)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.result?n("div",{staticClass:"probPanel"},[n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Results))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.statusResult(t.result)))])]),t._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Score))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Score)+"\n                "),t.result.Score>0&&t.result.Score<100?n("span",[t._v("\n                     ("+t._s(t.localeText.SR_Format)+" "+t._s(t.result.Score-100)+")\n                ")]):t._e()])]),t._v(" "),t.showTime?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseTime))]),t._v(" "),n("span",{staticClass:"status"},[t._v("\n                CPU: "+t._s(t.result.CPUTime)+"ms / Real: "+t._s(t.result.RealTime)+"ms\n            ")])]):t._e(),t._v(" "),t.showMemory?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseMemory))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Memory)+" "+t._s(t.localeText.SR_Bytes))])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.showWrongCase?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_SampleInput))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.inputStr(t.result.WrongCase.input)))]),t._v(" "),n("div",{staticClass:"pseg"},[t._v("\n                "+t._s(t.localeText.SR_CorrectOutput)+" ("+t._s(t.result.WrongCase.answer.length)+"\n                "+t._s(t.localeText.SR_Bytes)+")\n            ")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.answer))}}),t._v(" "),n("div",{staticClass:"pseg"},[t._v("\n                "+t._s(t.localeText.SR_ProgramOutput)+" ("+t._s(t.result.WrongCase.source.length)+"\n                "+t._s(t.localeText.SR_Bytes)+")\n            ")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.source))}})]):t._e(),t._v(" "),t.result.Response&&""!=t.result.Response?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_Response))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.result.Response))])]):t._e(),t._v(" "),t.showStyleCheck?n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v(t._s(t.localeText.SR_StyleCheck))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.styleResult))])]):t._e()]):n("div",{staticClass:"ptitle"},[t._v("\n        "+t._s(t.localeText.SR_NoResult)+"\n    ")])])}),[],!1,null,"34cbfb81",null);e.default=component.exports},887:function(t,e,n){"use strict";n.r(e);n(230),n(369),n(128),n(88),n(9),n(42),n(157),n(20),n(29),n(49);var r=n(7),o={props:{problem:Object,result:Object,isExam:Boolean,code:String,lang:String},data:function(){return{description:"",messages:[],showMessage:!1,myclass:["myclass"],dataset:null,testFix:!1,msglist:[],rules:{},stsmsgs:{},title:"",localeText:{Assist_Whatis:"什麼是"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),(n=t.$system("setting"))&&n.synRules&&(t.rules=n.synRules),n&&n.statusMsg&&(t.stsmsgs=n.statusMsg),t.parseMessages();case 5:case"end":return e.stop()}}),e)})))()},methods:{statusMessage:function(t){for(var e in this.stsmsgs){var n=this.stsmsgs[e];if(n.status===t)return[{title:this.localeText.Assist_Whatis+" "+t,desc:this.$selectUserLocaleText(n.msg)}]}return[]},parseMessages:function(){var t=this.result&&this.result.RunStatus,e=this.statusMessage(t);if(this.msglist=e,!this.isExam&&"CE"===t){for(var n={},r=this.result.Response.split("\n"),o=0;o<r.length;o++){var c=r[o],l=null,d=null,m=c.match(/(\d+):(\d+):(.*)error/);for(var f in m&&(l=m[1],d=m[2]),this.rules){var h=this.rules[f];if(!n[f]&&(!h.inerror||m)){var v=c.match(h.pattern);if(v){n[f]=!0;var title=h.title,desc=this.$selectUserLocaleText(h.msg).replace(/LINE/g,l);desc=desc.replace(/POS/g,d);for(var _=1;_<=h.argc;_++){var x=new RegExp("@@"+_,"g");desc=desc.replace(x,v[_]),title=title.replace(x,v[_])}e.push({title:l?"L"+l+": "+title:title,desc:desc})}}}this.msglist=e}this.result&&"CE"===this.result.RunStatus&&["c","cpp"].includes(this.lang)&&this.msglist.length<4&&(this.testFix=!0)}},tryFix:function(){var data={probid:this.problem.id,info:"INFO",subid:"Subid",code:this.code},t=JSON.stringify(data);t=window.btoa(t);var e="http://140.135.13.120:3000/test3388/pred3388?q="+window.encodeURIComponent(t);window.open(e,"_blank")},show:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.title=t.title,e.description=t.desc,e.showMessage=!0;case 3:case"end":return n.stop()}}),n)})))()}},watch:{problem:function(t){this.parseMessages()},result:function(t){this.parseMessages()},code:function(t){this.testFix=!1,this.messages=[]}}},c=(n(903),n(55)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{size:"xl",title:t.title,"modal-class":t.myclass},model:{value:t.showMessage,callback:function(e){t.showMessage=e},expression:"showMessage"}},[n("div",{domProps:{innerHTML:t._s(t.$md.render(t.description))}})]),t._v(" "),t.msglist.length>0?n("div",t._l(t.msglist,(function(e,r){return n("div",{key:r},[n("b-icon",{attrs:{icon:"bell-fill",variant:"warning"}}),t._v("  \n            "),n("b-link",{attrs:{size:"sm",variant:"success"},on:{click:function(n){return t.show(e)}}},[t._v(t._s(e.title))])],1)})),0):t._e(),t._v(" "),t.testFix?n("div",{staticClass:"mt-3"},[n("p",[t._v("目前有一個實驗用的 Dr.Repair 小博士，可以試著修正錯誤，要試看看嗎？")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.tryFix}},[t._v("試看看")])],1):t._e()],1)}),[],!1,null,"7ed24c58",null);e.default=component.exports},888:function(t,e,n){"use strict";n(36),n(27),n(9),n(20),n(29),n(47);var r=n(916),o=n.n(r),c={checkServer:function(t){return new Promise((function(e,n){var r="ws://",c=t.http;"https:"==document.location.protocol&&(c=t.https,r="wss://");var l=c.length,d=100,m=null,f=0,h=!1;window.setTimeout((function(){return h=!0,d<100&&m?void e({best:{channel:m+"/submit",busy:d},available:v}):void n("Judger not available!")}),5e3);for(var v=[],_=function(i){var t=r+c[i],_=t+"/submit",x=Math.random(),S=new o.a(_,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return x}});S.open().then((function(){return S.sendRequest({content:"HELLO:"+c[i]},{requestId:x})})).then((function(r){var o=r.split("#"),h=parseInt(o[1],10);if(v.push({server:c[i],busy:h}),h<d)d=h,m=t;else if(h===d){Math.random()<.4&&(m=t)}if(++f===l||3===f)return d<100?void e({best:{channel:m+"/submit",busy:d},available:v}):void n("Judger not available!")})).catch((function(t){if(console.log("Error",t),f++,h||f===l||3===f)return d<100?void e({best:{channel:m+"/submit",busy:d},available:v}):void n("Judger not available!")}))},i=0;i<l;i++)_(i)}))},judgeFunctest:function(t,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(e,n){if(t){var r=Math.random(),c=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return r}});c.open().then((function(){return c.sendRequest({content:content},{requestId:r})})).then((function(t){try{var r=JSON.parse(t).RunStatus;if(r.indexOf('["AC"]')>=0)return void e("AC");if(r.indexOf("Wrong")>=0){var o=r.replace(/\\n/g,"\n");return o=(o=o.replace('["',"")).replace('"]',""),void e(o)}return void e(r)}catch(t){return console.log("Error:",t),void n(t)}})).catch((function(t){console.log("Error:",t),n(t)}))}else n("Null judger.")}))},judgeProgtest:function(t,e){var n=Math.random();return new Promise((function(r,c){if(t){var l=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return n}});l.open().then((function(){return l.sendRequest({content:e},{requestId:n})})).then((function(t){try{return void r(JSON.parse(t))}catch(t){return console.log("Error:",t),void c(t)}})).catch((function(t){console.log("Error:",t),c(t)}))}else c("Null judger.")}))}};e.a=c},895:function(t,e,n){"use strict";n(877)},896:function(t,e,n){(e=n(56)(!1)).push([t.i,".conn[data-v-5fab9c76]{background:green;color:#fff;text-align:center}.row-container[data-v-5fab9c76]{width:100%}.toolbar[data-v-5fab9c76]{display:flex;flex-direction:row;justify-content:space-start;background:rgba(0,0,0,.03);padding:10px 12px 0 32px;border-bottom:1px solid #d7d7d7}.coder[data-v-5fab9c76]{flex:1 1 0;padding-top:12px}[data-v-5fab9c76] .CodeMirror-gutters{border-left:0}.btn[data-v-5fab9c76],[data-v-5fab9c76] .CodeMirror-linenumber{text-align:center}.btn[data-v-5fab9c76]{font-size:80%;width:50px;margin:2px 8px 12px 0;padding-left:0;padding-right:0;border-radius:8px}",""]),t.exports=e},897:function(t,e,n){"use strict";n(878)},898:function(t,e,n){(e=n(56)(!1)).push([t.i,'[data-v-6f868a80] .katex{font-size:1.18em}.probPanel[data-v-6f868a80]{max-width:800px;text-align:justify}.ptitle[data-v-6f868a80]{color:#00f;font-family:"Arial"}.ptitle[data-v-6f868a80],[data-v-6f868a80] h1{font-size:100%}[data-v-6f868a80] h1{color:#ff4500;margin:14px 0 6px}[data-v-6f868a80] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e},899:function(t,e,n){"use strict";n(879)},900:function(t,e,n){(e=n(56)(!1)).push([t.i,'[data-v-6707e4cd] h1{color:#00f;font-family:"Arial";font-size:120%}[data-v-6707e4cd] h2{color:#ff4500;font-size:80%;margin:12px 0;text-decoration:underline}[data-v-6707e4cd] code{color:#222;font-family:"monospace",Courier;font-size:75%}',""]),t.exports=e},901:function(t,e,n){"use strict";n(880)},902:function(t,e,n){(e=n(56)(!1)).push([t.i,'.ptitle[data-v-34cbfb81]{color:#00f;font-size:100%;font-family:"Arial"}[data-v-34cbfb81] mark{background:#ff0;padding:0}.probPanel[data-v-34cbfb81]{padding:0 10px}.item[data-v-34cbfb81]{margin-bottom:20px}.label[data-v-34cbfb81]{width:120px;color:#00f}.label[data-v-34cbfb81],.pseg[data-v-34cbfb81]{display:inline-block}.pseg[data-v-34cbfb81]{color:red}.sample[data-v-34cbfb81],.status[data-v-34cbfb81]{color:#000}.sample[data-v-34cbfb81]{background:#eee;padding:6px 6px 6px 12px;font-family:"Courier New",Courier,monospace}',""]),t.exports=e},903:function(t,e,n){"use strict";n(881)},904:function(t,e,n){(e=n(56)(!1)).push([t.i,"[data-v-7ed24c58] h1{font-size:110%;color:red;margin-bottom:24px}[data-v-7ed24c58] .myclass>div{position:absolute!important;width:700px;top:180px!important;right:64px!important;background-color:#ff0!important}[data-v-7ed24c58] .myclass>div.modal-dialog>.modal-content{background-color:#f8ecec!important}",""]),t.exports=e},905:function(t,e,n){"use strict";n(882)},906:function(t,e,n){(e=n(56)(!1)).push([t.i,".assist[data-v-052b2d3d]{background:#dff5f5;border:1px solid #eeaf3b;padding:12px;right:100px;top:150px;line-height:150%}.handTitle[data-v-052b2d3d]{background:#e0e0f7;color:#2c2fe9}",""]),t.exports=e},907:function(t,e,n){var content=n(1063);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("bd29fd04",content,!0,{sourceMap:!1})},912:function(t,e,n){"use strict";n.r(e);n(128),n(367),n(9),n(158),n(20),n(29),n(49);var r=n(7),o=n(855),c=n(862),l=n(26),d={components:{ProblemSolver:c.default},props:{quiz:Object,submit:Function,times:{type:Number,default:300},skip:{type:Boolean,default:!1},lang:{type:String,default:""},langs:{type:String,default:"c, cpp, py"},initcode:{type:String,default:""},correctHint:{type:String,default:"正確，提交並進下一題"}},data:function(){return{lastcode:{sourceLang:"c",sourceCode:""},showPass:!1,mycode:"",channel:null,chnlabel:"None",time:0,timer:null,timing:!0,spendTime:0,result:null,judging:!1,submitResult:null,pass:!1,done:!1,srclang:"c",localeText:{ProgTest_Type:"《程式題》",SYS_CountDown:"倒數計時"}}},computed:{tick:function(){return this.$store.state.params.tick}},created:function(){if(this.mycode=this.initcode,this.langs){var t=this.langs.replace(/\s/g,"").split(",");""!==this.lang&&t.includes(this.lang)?this.srclang=this.lang:this.srclang=t[0]}else""!==this.lang&&(this.srclang=this.lang)},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==t.times?t.timing=!1:t.time=t.times;case 1:case"end":return e.stop()}}),e)})))()},methods:{isubmit:function(data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=data.cdata,r=data.result,n.sourceLang==t.lastcode.sourceLang&&n.sourceCode==t.lastcode.sourceCode){e.next=9;break}return t.lastcode={sourceLang:n.sourceLang,sourceCode:n.sourceCode},c={uid:t.$user("id"),pid:t.quiz.id,created:o.a.getNow(),lang:n.sourceLang,code:n.sourceCode,status:r.RunStatus,score:r.Score},e.next=7,l.d.collection("submits").add(c);case 7:d=e.sent,c.id=d.id;case 9:"AC"===r.RunStatus&&(t.spendTime=t.timing?t.times-t.time:0,t.showPass=!0);case 10:case"end":return e.stop()}}),e)})))()},mmss:function(t){return o.a.mmss(t)},send:function(t){this.done||(this.done=!0,this.showPass||(this.spendTime=this.timing?this.times-this.time:0),this.showPass=!1,this.judging=!1,this.submit({correct:t,uans:this.lastcode.sourceCode,usetime:this.spendTime,lang:this.lastcode.sourceLang}))}},watch:{tick:function(t){this.time>0&&this.time--,0===this.time&&this.send(!1)},skip:function(t){!t||this.done||this.showPass||this.send(!1)}}},m=(n(1062),n(55)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qpanel"},[n("b-modal",{attrs:{centered:"",title:"通過測試","hide-footer":"","no-close-on-esc":"","no-close-on-backdrop":"","hide-header-close":""},model:{value:t.showPass,callback:function(e){t.showPass=e},expression:"showPass"}},[n("p",{attrs:{align:"center"}},[n("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.send(!0)}}},[t._v("下一題")])],1)]),t._v(" "),n("p",{staticClass:"timestatus"},[n("span",{staticClass:"type"},[t._v(t._s(t.localeText.ProgTest_Type))]),t._v(" "),t.timing?n("span",[t._v(t._s(t.localeText.SYS_CountDown)+" "+t._s(t.mmss(t.time)))]):n("span",[t._v("靜態測試")])]),t._v(" "),n("problem-solver",{attrs:{problem:t.quiz,lang:t.srclang,langs:t.langs,isExam:!0},on:{submit:t.isubmit}})],1)}),[],!1,null,"44e1bc99",null);e.default=component.exports;installComponents(component,{ProblemSolver:n(862).default})}}]);