(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1205:function(t,e,n){var content=n(1521);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("677dff7f",content,!0,{sourceMap:!1})},1520:function(t,e,n){"use strict";n(1205)},1521:function(t,e,n){(e=n(57)(!1)).push([t.i,".qlabel[data-v-ed03f21a]{color:#00f}.qright[data-v-ed03f21a]{color:green}.qwrong[data-v-ed03f21a]{color:red}.person[data-v-ed03f21a]{color:#fff;background:#4d4dec;font-size:120%;padding:6px;text-align:center;margin-bottom:16px}.item[data-v-ed03f21a]{margin-top:12px}",""]),t.exports=e},1621:function(t,e,n){"use strict";n.r(e);n(10),n(14),n(30),n(87),n(15),n(49);var r=n(7),o=n(27),c={data:function(){return{contestName:"c2021",records:{},username:"",showCode:!1,pgKey:"Coding",exam:null,problems:{},problem:null,initCode:"",lang:"",usubmits:{},answers:null}},computed:{uid:function(){return this.$route.params.user}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.collection("contests").doc(t.contestName).get();case 2:if(n=e.sent,r=n.data(),t.username=r.players[t.uid].name,t.exam=r.exam,0!==Object.keys(t.problems).length){e.next=11;break}return e.next=9,o.d.collection("problems").doc("BASE").get();case 9:c=e.sent,t.problems=c.data();case 11:if(t.answers){e.next=16;break}return e.next=14,o.d.collection("contests").doc(t.contestName).collection("answers").where("userid","==",t.uid).get();case 14:(l=e.sent).empty||l.docs.forEach((function(e){t.answers=e.data(),t.usubmits=t.answers.submits}));case 16:case"end":return e.stop()}}),e)})))()},methods:{submit:function(t){console.log("K",t)},record:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.collection("contests").doc(n.contestName).collection("submits").where("uid","==",n.$route.params.user).where("pid","==",t.id).where("created",">",n.answers.date).get();case 2:if(!(r=e.sent).empty){for(c={},i=0;i<r.docs.length;i++)c[r.docs[i].id]=r.docs[i].data();n.records=c}case 4:case"end":return e.stop()}}),e)})))()},codetest:function(t,e){this.problem=t,this.initCode=e.uans,this.lang=e.lang,this.showCode=!0},quizhead:function(t,e){var n=e.correct?"O":"X";return"(".concat(n,") ").concat(this.$selectUserLocaleText(t.title)," (T=").concat(e.usetime,")")},showAnswer:function(t){var e=this.problems[t.qid];if(e){var n=t.correct?"O":"X";if("singlechoice"==e.type)return"("+n+") "+e.title+" "+e.question+" "+JSON.stringify(e.options,null,2)+" Ans:"+(t.answer+1)+" User:"+(t.user+1);if("fillin"==e.type)return"("+n+") "+e.title+" "+e.question+" Ans:"+(t.answer+1)+" User:"+(t.user+1);if("progtest"==e.type)return"<b-button>TEST</b-button>("+n+") "+e.title+" "+t.uans;if("functest"==e.type)return"("+n+") "+e.title+" "+t.uans}}}},l=(n(1520),n(56)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-modal",{attrs:{size:"xl",title:"Code Checking"},model:{value:t.showCode,callback:function(e){t.showCode=e},expression:"showCode"}},[n("problem-solver",{attrs:{problem:t.problem,initCode:t.initCode,lang:t.lang},on:{submit:t.submit}})],1),t._v(" "),t.answers&&t.exam?n("div",[t._v("\n        "+t._s(t.answers.examname)+" -- "+t._s(t.answers.date)+" -- "+t._s(t.username)+"\n\n        "),n("span",{staticClass:"ml-3"},[t._v("Score = "+t._s(t.answers.score))]),t._v(" "),n("span",{staticClass:"ml-3"},[t._v("UseTime = "+t._s(t.answers.totaltime))]),t._v(" "),t._l(t.exam.probs,(function(e,r){return n("div",{key:e.id},[t.usubmits[e.id]&&e?n("div",{staticClass:"item"},[t._v("\n                "+t._s(r+1)+". "),n("span",{staticClass:"qlabel"},[t._v(t._s(t.quizhead(e,t.usubmits[e.id])))]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:t.usubmits[e.id].correct?"outline-success":"outline-danger"},on:{click:function(n){return t.codetest(e,t.usubmits[e.id])}}},[t._v("程式碼")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(n){return t.record(e,t.usubmits[e.id])}}},[t._v("提交記錄")])],1):t._e()])}))],2):t._e(),t._v(" "),t._l(t.records,(function(e,r,o){return n("p",{key:r},[t._v("\n        "+t._s(o+1)+". "+t._s(r)+" ==> "+t._s(e)+"\n    ")])}))],2)}),[],!1,null,"ed03f21a",null);e.default=component.exports;installComponents(component,{ProblemSolver:n(900).default})},889:function(t,e,n){var content=n(909);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("92797cd8",content,!0,{sourceMap:!1})},890:function(t,e,n){var content=n(911);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("1b244e00",content,!0,{sourceMap:!1})},891:function(t,e,n){var content=n(913);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("0092e82f",content,!0,{sourceMap:!1})},892:function(t,e,n){var content=n(915);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("99d6a4f4",content,!0,{sourceMap:!1})},893:function(t,e,n){var content=n(917);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("458bbede",content,!0,{sourceMap:!1})},894:function(t,e,n){var content=n(919);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("0d2cf35f",content,!0,{sourceMap:!1})},895:function(t,e,n){"use strict";n.r(e);n(12),n(379),n(26),n(9),n(29),n(46),n(49);var r=n(7),o=n(0),c=(n(927),{props:{value:String,height:{type:Number,default:500},submit:{type:Function,default:null},judging:{type:Boolean,default:!1},lang:{type:String,default:"c"},langs:{type:String,default:"c, cpp, py"},lineNumbers:{type:Boolean,default:!0},channel:{type:String,default:"None"}},components:{vdr:function(){return n.e(7).then(n.t.bind(null,1590,7))}},data:function(){var t;return t={hand:{w:330,h:60,x:0,y:0,expand:!1},cm:null,judgable:!1,cmlang:"c",cmlangs:["c","cpp","py"],cmstyle:{"font-size":"100%"},cmfontsize:100},Object(o.a)(t,"cm",null),Object(o.a)(t,"cmcode",null),Object(o.a)(t,"cmOption",{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!1,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}),t},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.cmcode=t.value,t.cmlang=t.lang,t.cmOption.lineNumbers=t.lineNumbers,""==t.langs?t.cmlangs=[t.lang]:t.cmlangs=t.langs.split(",").map((function(t){return t.trim()})),t.cm.focus();case 5:case"end":return e.stop()}}),e)})))()},methods:{langLabel:function(t){return"c"==t||"C"==t?"C":"c++"==t||"C++"==t||"cpp"==t||"CPP"==t||"cc"==t?"C++":"py"==t||"PY"==t?"PY":"java"==t?"Java":void 0},setLang:function(t){"c"!==t&&"cpp"!==t&&"py"!==t&&"java"!==t||(this.cmlang=t,"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),"java"==t&&(this.cmOption.mode="text/x-java"),this.$refs.coder.codemirror.focus(),this.$emit("langChanged",t))},cinput:function(t){this.$emit("input",t)},incfont:function(){this.cmfontsize+=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},decfont:function(){this.cmfontsize-=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},resetfont:function(){this.cmfontsize=100,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},onCmReady:function(t){this.cm=t,t.setSize(null,this.height)}},watch:{lang:function(t){this.setLang(t)},value:function(t){this.cmcode=t,this.cm.focus()},height:function(t){this.cm.setSize(null,t)}}}),l=(n(908),n(56)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row-container"},[n("div",{staticClass:"toolbar"},[t._l(t.cmlangs,(function(e,r){return n("b-button",{key:r,attrs:{size:"sm",variant:e==t.cmlang?"success":"outline-success"},on:{click:function(n){return t.setLang(e)}}},[t._v(t._s(t.langLabel(e)))])})),t._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success"},on:{click:t.incfont}},[t._v("＋")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:t.resetfont}},[t._v("◯")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:t.decfont}},[t._v("－")]),t._v(" "),t.submit?n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success",disabled:t.judging||"None"==t.channel},on:{click:t.submit}},[n("b-icon",{attrs:{icon:"check2"}})],1):t._e(),t._v(" "),"None"!=t.channel?n("b-button",{staticClass:"ml-4",attrs:{variant:"primary",size:"sm",disabled:""}},[t._v(t._s(t.channel))]):n("span",[n("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)],2),t._v(" "),n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)])}),[],!1,null,"5fab9c76",null);e.default=component.exports},896:function(t,e,n){"use strict";n.r(e);n(233),n(380),n(9),n(20),n(905);var r={props:{problem:Object},computed:{desc:function(){return this.$selectUserLocaleText(this.problem.description).replace(/\\n/g,"⏎")}}},o=(n(910),n(56)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"probPanel"},[n("p",{staticClass:"ptitle"},[t._v(t._s(t.$selectUserLocaleText(t.problem.title)))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$md.render(t.desc))}})])}),[],!1,null,"6f868a80",null);e.default=component.exports},897:function(t,e,n){"use strict";n.r(e);n(49);var r=n(7),o={data:function(){return{refcontents:"You should not see this",localeText:{CCheet_Title:"目前尚未有評判結果"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("en"!==t.$user("locale")){e.next=6;break}return e.next=3,t.$content("en/ccheetsheet").fetch();case 3:t.refcontents=e.sent,e.next=9;break;case 6:return e.next=8,t.$content("zh/ccheetsheet").fetch();case 8:t.refcontents=e.sent;case 9:case"end":return e.stop()}}),e)})))()}},c=(n(912),n(56)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-content",{attrs:{document:this.refcontents}})],1)}),[],!1,null,"6707e4cd",null);e.default=component.exports},898:function(t,e,n){"use strict";n.r(e);n(14),n(18),n(9),n(161),n(20),n(29),n(15);var r={props:{result:Object,showTime:{type:Boolean,default:!1},showMemory:{type:Boolean,default:!1}},data:function(){return{localeText:{SR_NoResult:"目前尚未有評判結果",SR_Results:"執行結果",SR_Score:"程式得分",SR_UseTime:"使用時間",SR_UseMemory:"使用記憶體",SR_Bytes:"位元組",SR_SampleInput:"輸入範例",SR_CorrectOutput:"正確輸出",SR_ProgramOutput:"程式輸出",SR_StyleCheck:"風格檢查",SR_StyleCheckOK:"格式良好",SR_Format:"格式",SR_Response:"錯誤訊息",SR_RunStatus_CE:"編譯錯誤",SR_RunStatus_AC:"正確",SR_RunStatus_PC:"部份正確",SR_RunStatus_PE:"排版錯誤",SR_RunStatus_WA:"錯誤",SR_RunStatus_TLE:"超過時間限制",SR_RunStatus_OLE:"超過輸出限制",SR_RunStatus_MLE:"超過記憶體限制",SR_RunStatus_RE:"執行時期錯誤"}}},computed:{showWrongCase:function(){return"WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus},showStyleCheck:function(){return"NA"!=this.result.StyleCheck&&"N/A"!=this.result.StyleCheck},styleResult:function(){return""==this.result.StyleCheck?this.localeText.SR_StyleCheckOK:this.result.StyleCheck}},created:function(){this.localeText=this.$updateLocaleText(this.localeText)},methods:{inputStr:function(t){return t.replace(/^\s*\n/gm,"")},outputStr:function(t){var e=/^(\s+)(.*)$/,n=/^(.*)(\s+)$/,r=t.split("\n"),o=[];return r.forEach((function(line){var t=line,r=t.match(e);r&&(t="<mark>"+r[1]+"</mark>"+r[2]),(r=t.match(n))&&(t=r[1]+"<mark>"+r[2]+"</mark>"),o.push(t)})),o.join("<mark>⏎</mark>\n")},statusResult:function(t){var e="("+t.RunStatus+") ";return"AC"==t.RunStatus?e+this.localeText.SR_RunStatus_AC:"CE"===t.RunStatus?e+this.localeText.SR_RunStatus_CE:"NA"===t.RunStatus?e+this.localeText.SR_RunStatus_PC:"PE"===t.RunStatus?e+this.localeText.SR_RunStatus_PE:"WA"===t.RunStatus?e+this.localeText.SR_RunStatus_WA:"TLE"===t.RunStatus?e+this.localeText.SR_RunStatus_TLE:"OLE"===t.RunStatus?e+this.localeText.SR_RunStatus_OLE:"MLE"===t.RunStatus?e+this.localeText.SR_RunStatus_MLE:"RE"===t.RunStatus?e+this.localeText.SR_RunStatus_RE:e}}},o=(n(914),n(56)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.result?n("div",{staticClass:"probPanel"},[n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Results))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.statusResult(t.result)))])]),t._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Score))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Score)+"\n                "),t.result.Score>0&&t.result.Score<100?n("span",[t._v("\n                     ("+t._s(t.localeText.SR_Format)+" "+t._s(t.result.Score-100)+")\n                ")]):t._e()])]),t._v(" "),t.showTime?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseTime))]),t._v(" "),n("span",{staticClass:"status"},[t._v("\n                CPU: "+t._s(t.result.CPUTime)+"ms / Real: "+t._s(t.result.RealTime)+"ms\n            ")])]):t._e(),t._v(" "),t.showMemory?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseMemory))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Memory)+" "+t._s(t.localeText.SR_Bytes))])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.showWrongCase?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_SampleInput))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.inputStr(t.result.WrongCase.input)))]),t._v(" "),n("div",{staticClass:"pseg"},[t._v("\n                "+t._s(t.localeText.SR_CorrectOutput)+" ("+t._s(t.result.WrongCase.answer.length)+"\n                "+t._s(t.localeText.SR_Bytes)+")\n            ")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.answer))}}),t._v(" "),n("div",{staticClass:"pseg"},[t._v("\n                "+t._s(t.localeText.SR_ProgramOutput)+" ("+t._s(t.result.WrongCase.source.length)+"\n                "+t._s(t.localeText.SR_Bytes)+")\n            ")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.source))}})]):t._e(),t._v(" "),t.result.Response&&""!=t.result.Response?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_Response))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.result.Response))])]):t._e(),t._v(" "),t.showStyleCheck?n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v(t._s(t.localeText.SR_StyleCheck))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.styleResult))])]):t._e()]):n("div",{staticClass:"ptitle"},[t._v("\n        "+t._s(t.localeText.SR_NoResult)+"\n    ")])])}),[],!1,null,"34cbfb81",null);e.default=component.exports},899:function(t,e,n){"use strict";n.r(e);n(233),n(380),n(89),n(9),n(42),n(161),n(20),n(29),n(49);var r=n(7),o=(n(934),{props:{problem:Object,result:Object,isExam:Boolean,code:String,lang:String},data:function(){return{description:"",messages:[],showMessage:!1,myclass:["myclass"],dataset:null,testFix:!1,testResult:"",msglist:[],rules:{},stsmsgs:{},title:"",localeText:{Assist_Whatis:"什麼是"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),(n=t.$system("setting"))&&n.synRules&&(t.rules=n.synRules),n&&n.statusMsg&&(t.stsmsgs=n.statusMsg),t.parseMessages();case 5:case"end":return e.stop()}}),e)})))()},methods:{statusMessage:function(t){for(var e in this.stsmsgs){var n=this.stsmsgs[e];if(n.status===t)return[{title:this.localeText.Assist_Whatis+" "+t,desc:this.$selectUserLocaleText(n.msg)}]}return[]},parseMessages:function(){var t=this.result&&this.result.RunStatus,e=this.statusMessage(t);if(this.msglist=e,!this.isExam){if("CE"===t)for(var n={},r=this.result.Response.split("\n"),o=0;o<r.length;o++){var c=r[o],l=null,d=null,m=c.match(/(\d+):(\d+):(.*)error/);for(var f in m&&(l=m[1],d=m[2]),this.rules){var h=this.rules[f];if(!n[f]&&(!h.inerror||m)){var v=c.match(h.pattern);if(v){n[f]=!0;var title=h.title,desc=this.$selectUserLocaleText(h.msg).replace(/LINE/g,l);desc=desc.replace(/POS/g,d);for(var _=1;_<=h.argc;_++){var x=new RegExp("@@"+_,"g");desc=desc.replace(x,v[_]),title=title.replace(x,v[_])}e.push({title:l?"L"+l+": "+title:title,desc:desc})}}}this.msglist=e}this.result&&"AC"!==this.result.RunStatus&&(this.testFix=!0,this.testResult="")}},tryFix:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.testResult="正在處理中...",n="As a programming instructor, for the given (problem) and (submitted code), provide steps to solve the problem and suggestions for correcting the (submitted code). Remember: your coaching style is primarily about giving guidance rather than answers, so never give detailed code. The output text part should use locale zh-TW (繁體中文) and conform to the following template:\n\n",n+="**解題步驟**\n",n+="1. (The 1st step to solve the given problem)\n",n+="2. (The 2nd step to solve the given problem)\n",n+="3. ...\n\n",n+="**修正建議**\n",n+="1. (The 1st suggestion for correction)\n",n+="2. (The 2nd suggestion for correction)\n",n+="3. ...\n\n",n+="**以上僅供參考**",r="(Problem)\n",""!==t.problem.description.en?r+=t.problem.description.en+"\n":r+=t.problem.description.zh+"\n",r+="---\n(Submitted code)\n```"+t.lang+"\n",r+=t.code+"\n```\n",console.log("sysprompt",n),console.log("usrprompt",r),e.next=19,t.$store.dispatch("callGPT",{model:"gpt-3.5-turbo",messages:[{role:"system",content:n},{role:"user",content:r}],temperature:1,max_tokens:1e3,top_p:1,frequency_penalty:0,presence_penalty:0,stop:["以上僅供參考","修正後的程式碼","修改後的程式碼"]});case 19:(o=e.sent)&&o.length>0&&(t.testResult=o);case 21:case"end":return e.stop()}}),e)})))()},show:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.title=t.title,e.description=t.desc,e.showMessage=!0;case 3:case"end":return n.stop()}}),n)})))()}},watch:{problem:function(t){this.parseMessages()},result:function(t){this.parseMessages()},code:function(t){this.testFix=!1,this.messages=[]}}}),c=(n(916),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{size:"xl",title:t.title,scrollable:"","modal-class":t.myclass},model:{value:t.showMessage,callback:function(e){t.showMessage=e},expression:"showMessage"}},[n("div",{domProps:{innerHTML:t._s(t.$md.render(t.description))}})]),t._v(" "),t.msglist.length>0?n("div",t._l(t.msglist,(function(e,r){return n("div",{key:r},[n("b-icon",{attrs:{icon:"bell-fill",variant:"warning"}}),t._v("  \n            "),n("b-link",{attrs:{size:"sm",variant:"success"},on:{click:function(n){return t.show(e)}}},[t._v(t._s(e.title))])],1)})),0):t._e(),t._v(" "),t.testFix?n("div",{staticClass:"mt-3"},[n("p",[t._v("\n            目前有一個實驗的 AI\n            小博士，可以試著提供錯誤修正建議，要試看看嗎？\n        ")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.tryFix}},[t._v("試看看")])],1):t._e(),t._v(" "),""!==t.testResult?n("div",{staticClass:"mt-3"},[n("p",{domProps:{innerHTML:t._s(t.$md.render(t.testResult))}})]):t._e()],1)}),[],!1,null,"0733e9a3",null);e.default=component.exports},900:function(t,e,n){"use strict";n.r(e);n(130),n(379),n(26),n(9),n(162),n(20),n(29),n(46),n(49);var r=n(7),o=n(0),c=n(895),l=n(896),d=n(897),m=n(898),f=n(899),h=n(904),v=(n(936),n(3)),_=n(925),x=n.n(_);v.default.use(x.a);var C={props:{problem:Object,showRef:{type:Boolean,default:!0},stylePoints:{type:Number,default:0},lang:{type:String,default:""},langs:{type:String,default:"c,cpp,py"},initCode:{type:String,default:""},isExam:{type:Boolean,default:!1},dummy:{type:Number,default:0}},data:function(){var t;return t={defaultCode:{c:'#include <stdio.h>\n\nint main()\n{\n\t// printf("Hello, world!");\n\treturn 0;\n}\n',cpp:'#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n\t// cout << "Hello, world!";\n\treturn 0;\n}\n',java:'public class Main {\n\tpublic static void main(String[] args) {\n\t\t// System.out.println("Hello, world!");\n\t}\n}\n',py:"# print('Hello, world!')\n"},hand:{w:330,h:60,x:0,y:0,expand:!1},infoAlert:!1,info:{title:"",message:""},noJudger:!1,tabIndex:0,mycode:"",chnlabel:"X",srclang:"c",judging:!1,channel:null},Object(o.a)(t,"chnlabel",null),Object(o.a)(t,"result",null),Object(o.a)(t,"testServers",{}),Object(o.a)(t,"localeText",{Coding_Problem:"問題",Coding_Code:"程式",Coding_Result:"結果",Coding_Reference:"參考",Coding_CodeTooShort:"程式碼太短",Coding_Assistant:"小幫手",Coding_Judger:"評判器",Coding_Relink:"重新連結",Coding_NoJudgerLink:"無法連結評判器",Coding_NoJudgerText:"如果仍無法開啟，請選擇以下評判器並接受其憑證，然後再嘗試重新連結！如果仍然無法解決，請回報給管理者，謝謝！"}),t},components:{CodePanel:c.default,SubmitResult:m.default,Question:l.default,CCheetSheet:d.default,Assist:f.default,vdr:function(){return n.e(7).then(n.t.bind(null,1590,7))}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.localeText=t.$updateLocaleText(t.localeText),t.initCode&&(t.mycode=t.initCode),t.langs?(n=t.langs.replace(/\s/g,"").split(","),""!==t.lang&&n.includes(t.lang)?t.srclang=t.lang:t.srclang=n[0]):""!==t.lang&&(t.srclang=t.lang),e.next=5,t.check_server();case 5:case"end":return e.stop()}}),e)})))()},methods:{langsHas:function(t){for(var e=this.langs.split(","),i=0;i<e.length;i++)if(e[i].trim()==t)return!0;return!1},check_server:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.$system("setting"))&&n.judgers&&(t.testServers=n.judgers.https,h.a.checkServer(n.judgers).then((function(e){if(t.channel=e.best.channel,""!==t.channel){var n=t.channel.toUpperCase();"WSS"===n.substr(0,3)?t.chnlabel=n.substr(6,1):t.chnlabel=n.substr(5,1),t.noJudger=!1}else t.noJudger=!0})).catch((function(e){t.noJudger=!0})));case 2:case"end":return e.stop()}}),e)})))()},setInit:function(t){this.mycode=this.defaultCode[t],this.srclang=t},onResize:function(t,e,n,r){this.x=t,this.y=e,this.width=n,this.hheight=r},onDrag:function(t,e){this.x=t,this.y=e},refresh:function(){var t=this,e=this.mycode;this.mycode+=" ",this.$nextTick((function(){t.mycode=e}))},langChanged:function(t){this.srclang=t},submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.judging&&t.channel){e.next=2;break}return e.abrupt("return");case 2:if(!(t.mycode.length<5)){e.next=6;break}return t.info={title:t.localeText.Coding_Code,message:t.localeText.Coding_CodeTooShort},t.infoAlert=!0,e.abrupt("return");case 6:return t.judging=!0,t.problem.timeLimit&&(""===t.problem.timeLimit?t.problem.timeLimit=1:t.problem.timeLimit=parseInt(t.problem.timeLimit,10)),t.problem.memoryLimit&&(""===t.problem.memoryLimit?t.problem.memoryLimit=1:t.problem.memoryLimit=parseInt(t.problem.memoryLimit,10)),t.problem.outputLimit&&(""===t.problem.outputLimit?t.problem.outputLimit=1e3:t.problem.outputLimit=parseInt(t.problem.outputLimit,10)),n={answerCode:t.problem.answerCode,answerLang:t.problem.answerLang,dataCode:t.problem.dataCode,dataLang:t.problem.dataLang,sourceCode:t.mycode,sourceLang:t.srclang,testMode:t.problem.testMode,cmpMode:t.problem.cmpMode,timeLimit:parseInt(t.problem.timeLimit,10),memoryLimit:parseInt(t.problem.memoryLimit,10),outputLimit:parseInt(t.problem.outputLimit,10)},e.prev=11,e.next=14,h.a.judgeProgtest(t.channel,n);case 14:t.result=e.sent,""!==t.result.StyleCheck&&(r=t.result.StyleCheck.split("\n").length-1,t.result.Score-=r*t.stylePoints),t.tabIndex=1,t.judging=!1,o={cdata:n,result:t.result},t.$emit("submit",o),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(11),t.judging=!1,console.log("Judge Error:",e.t0);case 26:case"end":return e.stop()}}),e,null,[[11,22]])})))()}},watch:{problem:function(t){this.result=null},initCode:function(t){this.mycode=t},lang:function(t){this.srclang=t},dummy:function(t){this.$emit("getCode",{code:this.mycode,lang:this.srclang})}}},R=(n(918),n(56)),component=Object(R.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),n("b-modal",{attrs:{size:"lg",title:t.localeText.Coding_NoJudgerLink,"hide-footer":"","no-close-on-esc":"","no-close-on-backdrop":"","hide-header-close":""},model:{value:t.noJudger,callback:function(e){t.noJudger=e},expression:"noJudger"}},[n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.check_server}},[t._v(t._s(t.localeText.Coding_Relink))]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v(t._s(t.localeText.Coding_NoJudgerText))]),t._v(" "),t._l(t.testServers,(function(e,r){return n("span",{key:"s"+r,staticClass:"mr-5"},[n("a",{attrs:{href:"https://"+e,target:"_blank"}},[t._v(t._s(t.localeText.Coding_Judger)+" "+t._s(e[0].toUpperCase()))])])}))],2),t._v(" "),n("Split",{staticStyle:{height:"805px"},attrs:{gutterSize:5}},[n("SplitArea",{attrs:{size:25,minSize:500}},[n("b-tabs",{attrs:{card:""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("b-tab",{attrs:{title:t.localeText.Coding_Problem}},[n("Question",{attrs:{problem:t.problem}})],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Coding_Result}},[n("SubmitResult",{attrs:{result:t.result}}),t._v(" "),t.result&&"AC"!==t.result.RunStatus?n("div",[n("span",{staticClass:"ml-3 mr-1"},[t._v("==>")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){t.tabIndex=3}}},[t._v(t._s(t.localeText.Coding_Assistant))])],1):t._e()],1),t._v(" "),t.showRef?n("b-tab",{attrs:{title:t.localeText.Coding_Reference}},[n("CCheetSheet")],1):t._e(),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Coding_Assistant}},[t.mycode.length<10?n("div",[n("span",[t._v("Initial Code: ")]),t._v(" "),t.langsHas("c")?n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(e){return t.setInit("c")}}},[t._v("C")]):t._e(),t._v(" "),t.langsHas("cpp")?n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(e){return t.setInit("cpp")}}},[t._v("C++")]):t._e(),t._v(" "),t.langsHas("py")?n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(e){return t.setInit("py")}}},[t._v("PY")]):t._e(),t._v(" "),t.langsHas("java")?n("b-link",{staticClass:"ml-3",attrs:{size:"small",variant:"success"},on:{click:function(e){return t.setInit("java")}}},[t._v("Java")]):t._e(),t._v(" "),n("hr")],1):n("div",[n("p",[t._v("當沒有程式碼時，小幫手可以幫忙產生基本的程式碼框架。當程式碼有錯誤時，小幫手可以提供一些幫助訊息。")])]),t._v(" "),n("assist",{attrs:{problem:t.problem,result:t.result,isExam:t.isExam,code:t.mycode,lang:t.srclang}})],1)],1)],1),t._v(" "),n("SplitArea",{attrs:{size:75,minSize:700}},[n("CodePanel",{attrs:{height:700,submit:t.submit,judging:t.judging,lang:t.srclang,langs:t.langs,channel:t.chnlabel},on:{langChanged:t.langChanged},model:{value:t.mycode,callback:function(e){t.mycode=e},expression:"mycode"}})],1)],1)],1)}),[],!1,null,"bc494312",null);e.default=component.exports;installComponents(component,{Question:n(896).default,SubmitResult:n(898).default,CCheetSheet:n(897).default,Assist:n(899).default,CodePanel:n(895).default})},904:function(t,e,n){"use strict";n(36),n(26),n(9),n(20),n(29),n(47);var r=n(928),o=n.n(r),c={checkServer:function(t){return new Promise((function(e,n){var r="ws://",c=t.http;"https:"==document.location.protocol&&(c=t.https,r="wss://");var l=c.length,d=100,m=null,f=0,h=!1;window.setTimeout((function(){return h=!0,d<100&&m?void e({best:{channel:m+"/submit",busy:d},available:v}):void n("Judger not available!")}),5e3);for(var v=[],_=function(i){var t=r+c[i],_=t+"/submit",x=Math.random(),C=new o.a(_,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return x}});C.open().then((function(){return C.sendRequest({content:"HELLO:"+c[i]},{requestId:x})})).then((function(r){var o=r.split("#"),h=parseInt(o[1],10);if(v.push({server:c[i],busy:h}),h<d)d=h,m=t;else if(h===d){Math.random()<.4&&(m=t)}if(++f===l||3===f)return d<100?void e({best:{channel:m+"/submit",busy:d},available:v}):void n("Judger not available!")})).catch((function(t){if(console.log("Error",t),f++,h||f===l||3===f)return d<100?void e({best:{channel:m+"/submit",busy:d},available:v}):void n("Judger not available!")}))},i=0;i<l;i++)_(i)}))},judgeFunctest:function(t,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(e,n){if(t){var r=Math.random(),c=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return r}});c.open().then((function(){return c.sendRequest({content:content},{requestId:r})})).then((function(t){try{var r=JSON.parse(t).RunStatus;if(r.indexOf('["AC"]')>=0)return void e("AC");if(r.indexOf("Wrong")>=0){var o=r.replace(/\\n/g,"\n");return o=(o=o.replace('["',"")).replace('"]',""),void e(o)}return void e(r)}catch(t){return console.log("Error:",t),void n(t)}})).catch((function(t){console.log("Error:",t),n(t)}))}else n("Null judger.")}))},judgeProgtest:function(t,e){var n=Math.random();return new Promise((function(r,c){if(t){var l=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return n}});l.open().then((function(){return l.sendRequest({content:e},{requestId:n})})).then((function(t){try{return void r(JSON.parse(t))}catch(t){return console.log("Error:",t),void c(t)}})).catch((function(t){console.log("Error:",t),c(t)}))}else c("Null judger.")}))}};e.a=c},908:function(t,e,n){"use strict";n(889)},909:function(t,e,n){(e=n(57)(!1)).push([t.i,".conn[data-v-5fab9c76]{background:green;color:#fff;text-align:center}.row-container[data-v-5fab9c76]{width:100%}.toolbar[data-v-5fab9c76]{display:flex;flex-direction:row;justify-content:space-start;background:rgba(0,0,0,.03);padding:10px 12px 0 32px;border-bottom:1px solid #d7d7d7}.coder[data-v-5fab9c76]{flex:1 1 0;padding-top:12px}[data-v-5fab9c76] .CodeMirror-gutters{border-left:0}.btn[data-v-5fab9c76],[data-v-5fab9c76] .CodeMirror-linenumber{text-align:center}.btn[data-v-5fab9c76]{font-size:80%;width:50px;margin:2px 8px 12px 0;padding-left:0;padding-right:0;border-radius:8px}",""]),t.exports=e},910:function(t,e,n){"use strict";n(890)},911:function(t,e,n){(e=n(57)(!1)).push([t.i,'[data-v-6f868a80] .katex{font-size:1.18em}.probPanel[data-v-6f868a80]{max-width:800px;text-align:justify}.ptitle[data-v-6f868a80]{color:#00f;font-family:"Arial"}.ptitle[data-v-6f868a80],[data-v-6f868a80] h1{font-size:100%}[data-v-6f868a80] h1{color:#ff4500;margin:14px 0 6px}[data-v-6f868a80] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e},912:function(t,e,n){"use strict";n(891)},913:function(t,e,n){(e=n(57)(!1)).push([t.i,'[data-v-6707e4cd] h1{color:#00f;font-family:"Arial";font-size:120%}[data-v-6707e4cd] h2{color:#ff4500;font-size:80%;margin:12px 0;text-decoration:underline}[data-v-6707e4cd] code{color:#222;font-family:"monospace",Courier;font-size:75%}',""]),t.exports=e},914:function(t,e,n){"use strict";n(892)},915:function(t,e,n){(e=n(57)(!1)).push([t.i,'.ptitle[data-v-34cbfb81]{color:#00f;font-size:100%;font-family:"Arial"}[data-v-34cbfb81] mark{background:#ff0;padding:0}.probPanel[data-v-34cbfb81]{padding:0 10px}.item[data-v-34cbfb81]{margin-bottom:20px}.label[data-v-34cbfb81]{width:120px;color:#00f}.label[data-v-34cbfb81],.pseg[data-v-34cbfb81]{display:inline-block}.pseg[data-v-34cbfb81]{color:red}.sample[data-v-34cbfb81],.status[data-v-34cbfb81]{color:#000}.sample[data-v-34cbfb81]{background:#eee;padding:6px 6px 6px 12px;font-family:"Courier New",Courier,monospace}',""]),t.exports=e},916:function(t,e,n){"use strict";n(893)},917:function(t,e,n){(e=n(57)(!1)).push([t.i,"[data-v-0733e9a3] h1{font-size:110%;color:red;margin-bottom:24px}[data-v-0733e9a3] .myclass>div{position:absolute!important;width:700px;top:180px!important;right:64px!important;background-color:#ff0!important}[data-v-0733e9a3] .myclass>div.modal-dialog>.modal-content{background-color:#f8ecec!important}",""]),t.exports=e},918:function(t,e,n){"use strict";n(894)},919:function(t,e,n){(e=n(57)(!1)).push([t.i,".assist[data-v-bc494312]{background:#dff5f5;border:1px solid #eeaf3b;padding:12px;right:100px;top:150px;line-height:150%;overflow-y:auto}.handTitle[data-v-bc494312]{background:#e0e0f7;color:#2c2fe9}",""]),t.exports=e}}]);