(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1090:function(t,e,n){"use strict";n.r(e);n(229),n(366),n(49);var o=n(7),r=n(854),l=n(1093),c=n(874),m=(n(855),{props:{problem:Object,problemSet:String,okText:{type:String,default:"OK"}},components:{LocaleInput:r.default,CodeEditor:l.default},data:function(){return{curLang:null,dummyInt:0,showTest:!1,testDataStr:"",channel:null,cmpoptions:[{text:"Strict",value:"strict"},{text:"Space Ignored",value:"space"},{text:"Order Ignored",value:"order"}],nullLocales:{},locales:[{zh:"中文"}],PMProblem:{title:null,description:null,answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",cmpMode:"strict",timeLimit:1,memoryLimit:128,outputLimit:1e4,tags:""},localeText:{PM_Basic:"基本",PM_Question:"問題",PM_TestData:"測資",PM_Answer:"解答",PM_Title:"標題",PM_Tag:"標籤",PM_Compare:"比對",PM_TimeLimit:"限時",PM_MemoryLimit:"限制記憶體",PM_OutputLimit:"限制輸出",PM_Test:"測試",PM_Reset:"取消"}}},created:function(){if(this.problem&&(this.PMProblem=this.$copyObject(this.problem)),this.localeText=this.$updateLocaleText(this.localeText),this.$systemHasUserLocale()&&(this.locales=this.$copyObject(this.$system("locales").support),!this.PMProblem.title))for(var t in this.PMProblem.title={},this.$system("locales").support)this.PMProblem.title[t]=null},methods:{curTitle:function(){return this.PMProblem&&this.PMProblem.title?this.$selectLocaleText(this.PMProblem.title,this.curLang):""},curDesc:function(){return this.PMProblem&&this.PMProblem.description?this.$selectLocaleText(this.PMProblem.description,this.curLang):""},ok:function(){this.$emit("OK",this.PMProblem)},getJudger:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.$system("setting"))||!n.judgers){e.next=6;break}return e.next=4,c.a.checkServer(n.judgers);case 4:o=e.sent,t.channel=o.best.channel;case 6:case"end":return e.stop()}}),e)})))()},testAnswer:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.channel){e.next=3;break}return e.next=3,t.getJudger();case 3:return n={execMode:"RUN",dataCode:t.PMProblem.dataCode,dataLang:t.PMProblem.dataLang,sourceCode:t.PMProblem.answerCode,sourceLang:t.PMProblem.answerLang},e.next=6,c.a.judgeProgtest(t.channel,n);case 6:o=e.sent,t.testDataStr="Input:\n"+o.WrongCase.input+"\nOutput:\n"+o.Response,t.showTest=!0;case 9:case"end":return e.stop()}}),e)})))()},testDataFunc:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.channel){e.next=3;break}return e.next=3,t.getJudger();case 3:return n={execMode:"TESTDATA",dataCode:t.PMProblem.dataCode,dataLang:t.PMProblem.dataLang},e.next=6,c.a.judgeProgtest(t.channel,n);case 6:o=e.sent,t.testDataStr=o.Response,t.showTest=!0;case 9:case"end":return e.stop()}}),e)})))()},resetProblem:function(){this.PMProblem={title:{},description:{},answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",tags:"",timeLimit:null,memoryLimit:null,outputLimit:null},this.$emit("Reset")}},watch:{problem:function(p){p&&(this.PMProblem=this.$copyObject(p))}}}),d=(n(1195),n(55)),component=Object(d.a)(m,(function(){var t=this,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"pmpanel"},[o("div",{staticClass:"buttons"},[o("span",{staticClass:"mr-2"},[e._v(e._s(e.problemSet))]),e._v(" "),o("b-button",{staticClass:"mr-2",attrs:{variant:"primary",size:"sm"},on:{click:e.resetProblem}},[e._v("\n            "+e._s(e.localeText.PM_Reset)+"\n        ")]),e._v(" "),o("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:e.ok}},[e._v("\n            "+e._s(e.okText)+"\n        ")])],1),e._v(" "),o("b-tabs",[o("b-tab",{attrs:{title:e.localeText.PM_Basic}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Title))]),e._v(" "),o("div",{staticClass:"flex-grow-1"},e._l(e.locales,(function(label,t,n){return o("div",{key:"title"+n,staticClass:"d-flex justify-content-start mb-3"},[o("span",{staticClass:"mr-3",staticStyle:{"text-align":"right",width:"100px"}},[e._v(e._s(label))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.title[t],expression:"PMProblem.title[key]"}],staticClass:"flex-grow-1",domProps:{value:e.PMProblem.title[t]},on:{input:function(n){n.target.composing||e.$set(e.PMProblem.title,t,n.target.value)}}})])})),0)]),e._v(" "),o("div",{staticClass:"d-flex justify-content-start"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Tag))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.tags,expression:"PMProblem.tags"}],staticClass:"flex-grow-1",domProps:{value:e.PMProblem.tags},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"tags",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Compare))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:e.cmpoptions},model:{value:e.PMProblem.cmpMode,callback:function(t){e.$set(e.PMProblem,"cmpMode",t)},expression:"PMProblem.cmpMode"}})],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_TimeLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.timeLimit,expression:"PMProblem.timeLimit"}],staticClass:"mr-5",attrs:{size:"2"},domProps:{value:e.PMProblem.timeLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"timeLimit",t.target.value)}}}),e._v(" "),o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_MemoryLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.memoryLimit,expression:"PMProblem.memoryLimit"}],staticClass:"mr-5",attrs:{size:"2"},domProps:{value:e.PMProblem.memoryLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"memoryLimit",t.target.value)}}}),e._v(" "),o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_OutputLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.outputLimit,expression:"PMProblem.outputLimit"}],attrs:{size:"2"},domProps:{value:e.PMProblem.outputLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"outputLimit",t.target.value)}}})])]),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_Question}},[o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("locale-input",{staticClass:"mt-3",attrs:{rows:16},on:{curLang:function(e){t.curLang=e}},model:{value:e.PMProblem.description,callback:function(t){e.$set(e.PMProblem,"description",t)},expression:"PMProblem.description"}})],1),e._v(" "),o("b-col",{staticClass:"pl-4 mt-4",attrs:{cols:"6"}},[o("div",[o("p",{staticClass:"ptitle"},[e._v(e._s(e.curTitle()))]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.$md.render(e.curDesc()))}})])])],1)],1),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_TestData},on:{click:function(t){e.dummyInt+=1}}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_DataLang))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:["py","cpp"]},model:{value:e.PMProblem.dataLang,callback:function(t){e.$set(e.PMProblem,"dataLang",t)},expression:"PMProblem.dataLang"}}),e._v(" "),o("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-success"},on:{click:e.testDataFunc}},[e._v(e._s(e.localeText.PM_Test))])],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_DataCode))]),e._v(" "),o("CodeEditor",{staticClass:"flex-grow-1",attrs:{lang:e.PMProblem.dataLang,dummy:e.dummyInt,rows:"10"},model:{value:e.PMProblem.dataCode,callback:function(t){e.$set(e.PMProblem,"dataCode",t)},expression:"PMProblem.dataCode"}})],1),e._v(" "),o("b-modal",{attrs:{size:"lg",title:"Test Data"},model:{value:e.showTest,callback:function(t){e.showTest=t},expression:"showTest"}},[o("pre",[e._v(e._s(e.testDataStr))])])],1),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_Answer},on:{click:function(t){e.dummyInt+=1}}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_AnswerLang))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:["c","cpp","py"]},model:{value:e.PMProblem.answerLang,callback:function(t){e.$set(e.PMProblem,"answerLang",t)},expression:"PMProblem.answerLang"}}),e._v(" "),o("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-success"},on:{click:e.testAnswer}},[e._v(e._s(e.localeText.PM_Test))])],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_AnswerCode))]),e._v(" "),o("CodeEditor",{staticClass:"flex-grow-1",attrs:{lang:e.PMProblem.answerLang,dummy:e.dummyInt,rows:"10"},model:{value:e.PMProblem.answerCode,callback:function(t){e.$set(e.PMProblem,"answerCode",t)},expression:"PMProblem.answerCode"}})],1)])],1)],1)}),[],!1,null,"3f05fc76",null);e.default=component.exports;installComponents(component,{LocaleInput:n(854).default,CodeEditor:n(1093).default})},1093:function(t,e,n){"use strict";n.r(e);n(365),n(46),n(892);var o={props:{value:String,height:{type:Number,default:500},lang:{type:String,default:"c"},fontSize:{type:Number,default:100},lineNumbers:{type:Boolean,default:!0},tabSize:{type:Number,default:4},readOnly:{type:Boolean,default:!1},dummy:{type:Number,default:0}},data:function(){return{cm:null,cmstyle:{"font-size":"100%"},cmfontsize:100,cmcode:null,cmOption:{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!0,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}}},mounted:function(){this.cmcode=this.value,this.cmOption.lineNumbers=this.lineNumbers,this.cmOption.tabSize=this.tabSize,this.cmOption.indentUnit=this.tabSize,this.cm.focus()},methods:{refresh:function(){if(this.$refs.coder){var t=this;setTimeout((function(){t.$refs.coder.codemirror.refresh()}),1)}},setLang:function(t){"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),this.cm.focus()},cinput:function(t){this.$emit("input",t)},setFontSize:function(t){this.cmstyle={"font-size":"".concat(t,"%")}},onCmReady:function(t){t.setSize(null,this.height),this.cm=t,this.setLang(this.lang),this.setFontSize(this.fontSize)}},watch:{dummy:function(t){this.refresh()},value:function(t){this.cmcode=t,this.refresh()},height:function(t){this.cm.setSize(null,t)},fontSize:function(t){this.setFontSize(t)},lang:function(t){this.setLang(t)},lineNumbers:function(t){this.cmOption.lineNumbers=t},tabSize:function(t){this.cmOption.tabSize=t,this.cmOption.indentUnit=t},readOnly:function(t){this.cmOption.readOnly=t}}},r=(n(1163),n(55)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-editor"},[n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)}),[],!1,null,"1f11e5d5",null);e.default=component.exports},1163:function(t,e,n){"use strict";n(905)},1164:function(t,e,n){(e=n(60)(!1)).push([t.i,".code-editor[data-v-1f11e5d5]{width:100%}[data-v-1f11e5d5] .CodeMirror-gutters{border-left:0}[data-v-1f11e5d5] .CodeMirror-linenumber{text-align:center}.coder[data-v-1f11e5d5]{padding:0;border:1px solid #00f}",""]),t.exports=e},1195:function(t,e,n){"use strict";n(912)},1196:function(t,e,n){(e=n(60)(!1)).push([t.i,'.buttons[data-v-3f05fc76]{position:absolute;right:0;top:10px}.pmpanel[data-v-3f05fc76]{position:relative}.pdescription[data-v-3f05fc76]{width:100%;height:300px}.titleLabel[data-v-3f05fc76]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-3f05fc76] .katex{font-size:1.18em}.ptitle[data-v-3f05fc76]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-3f05fc76] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}[data-v-3f05fc76] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e},1197:function(t,e,n){"use strict";n(913)},1198:function(t,e,n){(e=n(60)(!1)).push([t.i,"[data-v-d0e64b70] table td{padding:6px}.container-fluid[data-v-d0e64b70]{margin-top:30px}.pdescription[data-v-d0e64b70]{width:100%;height:300px}.titleLabel[data-v-d0e64b70]{width:100px;margin:0 16px 24px 0;text-align:right}.titleLabel[data-v-d0e64b70],[data-v-d0e64b70] h1{display:inline-block}[data-v-d0e64b70] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},1299:function(t,e,n){"use strict";n.r(e);n(156),n(28),n(9),n(42),n(79),n(845),n(20),n(27),n(47),n(104),n(367),n(49);var o=n(7),r=n(32),l=n(1090),c=n(844),m=(n(855),n(848)),d=n(851),f={components:{ProblemEditor:l.default,ProblemTable:m.default,ProblemSelector:d.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("playground").fetch();case 3:return o=e.sent,e.abrupt("return",{playground:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{editMode:!1,problemTab:0,pgKey:"CHProblem",lastPID:0,problems:[],pgproblems:[],pgselected:null,psselected:null,pmText:"新增",infoAlert:!1,info:{title:"",message:""},problem:{title:null,description:null,answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",cmpMode:null,timeLimit:null,memoryLimit:null,outputLimit:null,tags:""},localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題庫管理",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,m,i,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.localeText=t.$updateLocaleText(t.localeText),e.next=3,r.d.collection("problems").doc("BASE").get();case 3:if((n=e.sent).exists&&(o=n.data(),t.problems=c.a.obj2arr(o),t.lastPID=t.problems.length),t.playground)for(l=t.playground.DATA,m=c.a.decode(t.pgKey,l),i=0;i<m.length;i++)(d=c.a.findIdPos(t.problems,m[i].id))>=0&&t.pgproblems.push(t.problems[d]);case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{selectDone:function(t){this.unitForm.probs=t,this.selUnitProb=!1},openDataFunc:function(){var t=this.$router.resolve({path:"/admin/datafunc"});window.open(t.href,"_blank")},pmReset:function(){this.editMode=!1,this.pmText="新增"},updateProblem:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,l,m,d,f,h,v,P;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.d.collection("problems").doc("BASE").get();case 2:if(o=n.sent,l=o.data(),o.exists?(e.problems=c.a.obj2arr(l),e.lastPID=e.problems.length):(e.problems=[],e.lastPID=0),!e.editMode){n.next=17;break}return m=e.$copyObject(t),m=e.copyAndTags2Arr(m),(d=c.a.findIdPos(e.problems,m.id))>=0&&e.problems.splice(d,1,m),f=c.a.arr2obj(e.problems),n.next=13,r.d.collection("problems").doc("BASE").set(f);case 13:e.infoAlert=!0,e.info={title:"Update",message:"OK"},n.next=28;break;case 17:return e.lastPID+=1,h="BASE"+e.lastPID.toString().padStart(3,"0"),(v=e.$copyObject(t)).id=h,v=e.copyAndTags2Arr(v),e.problems.push(v),P=c.a.arr2obj(e.problems),n.next=26,r.d.collection("problems").doc("BASE").set(P);case 26:e.infoAlert=!0,e.info={title:"Create",message:"OK"};case 28:case"end":return n.stop()}}),n)})))()},copyProblem:function(t){this.problem=t,this.editMode=!1,this.pmText="新增",this.problemTab=2},editProblem:function(t){this.problem=t,this.editMode=!0,this.pmText="更新",this.problemTab=2},copyAndTags2Arr:function(t){var e=this.$copyObject(t);if(e.tags&&!(e.tags instanceof Array)){var n=e.tags.trim();n.length>0?(n=n.replace(","," "),e.tags=n.split(/\s+/)):delete e.tags}return e},PGProblemGenerate:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var i,o,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(i=0;i<t.length;i++)delete e.problems[i]._showDetails,delete e.problems[i].tags;o='{\n    "KEY": "'+e.pgKey+'",\n    "DATA": "'+c.a.encode(e.pgKey,JSON.stringify(e.pgproblems))+'"\n}',"playground.json",r=new Blob([o],{type:"text/plain;charset=utf-8"}),window.navigator.msSaveOrOpenBlob?window.navigator.msSaveBlob(r,"playground.json"):((l=window.document.createElement("a")).href=window.URL.createObjectURL(r),l.download="playground.json",document.body.appendChild(l),l.click(),document.body.removeChild(l));case 5:case"end":return n.stop()}}),n)})))()}}},h=(n(1197),n(55)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),n("b-tabs",{attrs:{"content-class":"mt-3"},model:{value:t.problemTab,callback:function(e){t.problemTab=e},expression:"problemTab"}},["admin"==t.$user("role")?n("b-tab",{attrs:{title:t.localeText.AdminProblem_Playground}},[n("problem-selector",{attrs:{oriProblems:t.problems,selProblems:t.pgproblems,selText:"Playground",OKText:"Generate"},on:{OK:t.PGProblemGenerate}}),t._v(" "),n("hr")],1):t._e(),t._v(" "),n("b-tab",{attrs:{title:t.localeText.AdminProblem_ProbList}},[n("h1",{staticClass:"mb-3"},[t._v("Set = BASE")]),t._v(" "),t.problems.length>0?n("problem-table",{attrs:{problems:t.problems,showID:"",showFilter:"",showDetail:"",editProblem:t.editProblem,copyProblem:t.copyProblem}}):n("div",[n("p",[t._v("Currently there is no problems.")])])],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.AdminProblem_ProbEdit}},[n("div",{staticClass:"mb-3 d-flex justify-content-between"},[n("h1",[t._v("Set = BASE")]),t._v(" "),n("b-button",{attrs:{flex:"",size:"sm",variant:"success"},on:{click:t.openDataFunc}},[t._v("DOC")])],1),t._v(" "),n("problem-editor",{attrs:{problem:t.problem,okText:t.pmText},on:{OK:t.updateProblem,Reset:t.pmReset}})],1)],1)],1)}),[],!1,null,"d0e64b70",null);e.default=component.exports;installComponents(component,{ProblemSelector:n(851).default,ProblemTable:n(848).default,ProblemEditor:n(1090).default})},844:function(t,e,n){"use strict";n(10),n(14),n(22),n(86),n(9),n(845),n(27),n(15);var o=n(227),r=n.n(o),l={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),o=t.id;delete n.id,e[o]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new r.a(t).encrypt(e)},decode:function(t,e){return new r.a(t).decrypt(e)}};e.a=l},845:function(t,e,n){"use strict";var o=n(8),r=n(846).start;o({target:"String",proto:!0,forced:n(847)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},846:function(t,e,n){var o=n(50),r=n(228),l=n(52),c=Math.ceil,m=function(t){return function(e,n,m){var d,f,h=String(l(e)),v=h.length,P=void 0===m?" ":String(m),x=o(n);return x<=v||""==P?h:(d=x-v,(f=r.call(P,c(d/P.length))).length>d&&(f=f.slice(0,d)),t?h+f:f+h)}};t.exports={start:m(!1),end:m(!0)}},847:function(t,e,n){var o=n(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)},848:function(t,e,n){"use strict";n.r(e);n(156),n(49);var o=n(7),r=(n(855),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),t.showID&&t.pfields.push({key:"id",sortable:!0}),t.pfields.push({key:"title",sortable:!0,formatter:t.$selectUserLocaleText}),t.showTag&&t.pfields.push({key:"tags",sortable:!0}),(t.showArrow||t.showDetail||t.editProblem||t.copyProblem)&&t.pfields.push({key:"actions",label:"Actions"});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{moveUp:function(t){if(t>0){var e=this.$copyObject(this.problems[t]);this.problems.splice(t,1),this.problems.splice(t-1,0,e)}},moveDown:function(t){if(t<this.problems.length-1){var e=this.$copyObject(this.problems[t+1]);this.problems.splice(t+1,1),this.problems.splice(t,0,e)}},onRowSelected:function(t){this.$emit("rowSelected",t)},showProblem:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.toggleDetails();case 1:case"end":return e.stop()}}),e)})))()}}}),l=(n(856),n(55)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showFilter?n("p",{staticClass:"p-0 mb-2"},[n("span",[t._v("Filter: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pfilter,expression:"pfilter"}],domProps:{value:t.pfilter},on:{input:function(e){e.target.composing||(t.pfilter=e.target.value)}}})])]):t._e(),t._v(" "),n("b-table",{attrs:{bordered:"",items:t.problems,selectable:"","select-mode":"multi",fields:t.pfields,filter:t.pfilter},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([t.showDetail||t.editProblem||t.copyProblem||t.showArrow?{key:"cell(actions)",fn:function(e){return[t.showDetail?n("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(n){return t.showProblem(e)}}},[e.detailsShowing?n("b-icon",{attrs:{icon:"eye-slash"}}):n("b-icon",{attrs:{icon:"eye"}})],1):t._e(),t._v(" "),t.editProblem?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.editProblem(e.item)}}},[n("b-icon",{attrs:{icon:"pen"}})],1):t._e(),t._v(" "),t.copyProblem?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.copyProblem(e.item)}}},[n("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.showArrow?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.moveUp(e.index)}}},[n("b-icon",{attrs:{icon:"arrow-up"}})],1):t._e(),t._v(" "),t.showArrow?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.moveDown(e.index)}}},[n("b-icon",{attrs:{icon:"arrow-down"}})],1):t._e()]}}:null,t.showDetail?{key:"row-details",fn:function(e){return[n("b-card",[n("p",[t._v(t._s(e.item.id)+": "+t._s(t.$selectUserLocaleText(e.item.title)))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$md.render(t.$selectUserLocaleText(e.item.description)))}}),t._v(" "),n("p",[t._v("TAGS: "+t._s(e.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"2398be4f",null);e.default=component.exports},849:function(t,e,n){var content=n(857);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("0d16a966",content,!0,{sourceMap:!1})},850:function(t,e,n){var content=n(859);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("56c34f47",content,!0,{sourceMap:!1})},851:function(t,e,n){"use strict";n.r(e);n(156);var o=n(848),r=n(844),l={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:o.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var t=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)t.push(this.selProblems[i]);for(var e=[],n=0;n<this.oriProblems.length;n++){var o=this.oriProblems[n];r.a.findIdPos(t,o.id)<0&&e.push(o)}this.leftProblems=e,this.rightProblems=t},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var t=this.leftSelected[i];this.rightProblems.push(t);var e=r.a.findIdPos(this.leftProblems,t.id);e>=0&&this.leftProblems.splice(e,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var t=this.rightSelected[i];this.leftProblems.push(t);var e=r.a.findIdPos(this.selProblems,t.id);e>=0&&this.rightProblems.splice(e,1)}}},watch:{oriProblems:function(t){this.initSelection()},selProblems:function(t){this.initSelection()}}},c=(n(858),n(55)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-start align-items-top"},[n("problem-table",{attrs:{problems:t.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(e){return t.leftSelected=e}}}),t._v(" "),n("div",{staticClass:"mx-5"},[n("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.selectItems}},[n("b-icon",{attrs:{icon:"arrow-right"}})],1),t._v(" "),n("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.deSelectItems}},[n("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),t._v(" "),n("div",[n("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[n("span",{staticClass:"mr-3"},[t._v(t._s(t.selText))]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.done}},[t._v(t._s(t.OKText))])],1),t._v(" "),n("problem-table",{attrs:{problems:t.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(e){return t.rightSelected=e}}})],1)],1)])}),[],!1,null,"c90387ec",null);e.default=component.exports;installComponents(component,{ProblemTable:n(848).default})},853:function(t,e,n){var content=n(861);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("7bc25547",content,!0,{sourceMap:!1})},854:function(t,e,n){"use strict";n.r(e);n(365);var o={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:{zh:"中文",en:"English"},content:{zh:"中文",en:"English"}}},created:function(){this.locales=this.$copyObject(this.$system("locales").support),this.value&&(this.content=this.value)},methods:{setLang:function(t){this.$emit("curLang",t)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(t){this.content=t}}},r=(n(860),n(55)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-tabs",t._l(t.locales,(function(e,o,r){return n("b-tab",{key:"locale"+r,attrs:{title:e},on:{click:function(e){return t.setLang(o)}}},[n("b-textarea",{attrs:{rows:t.rows},on:{input:t.cinput},model:{value:t.content[o],callback:function(e){t.$set(t.content,o,e)},expression:"content[key]"}})],1)})),1)],1)}),[],!1,null,"06f58b61",null);e.default=component.exports},856:function(t,e,n){"use strict";n(849)},857:function(t,e,n){(e=n(60)(!1)).push([t.i,"[data-v-2398be4f] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},858:function(t,e,n){"use strict";n(850)},859:function(t,e,n){(e=n(60)(!1)).push([t.i,"[data-v-c90387ec] .itemList{margin:12px 0}.container-fluid[data-v-c90387ec]{margin-top:30px}.pdescription[data-v-c90387ec]{width:100%;height:300px}.titleLabel[data-v-c90387ec]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-c90387ec] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},860:function(t,e,n){"use strict";n(853)},861:function(t,e,n){(e=n(60)(!1)).push([t.i,"textarea[data-v-06f58b61]{width:100%}",""]),t.exports=e},874:function(t,e,n){"use strict";n(39),n(28),n(9),n(20),n(27),n(46);var o=n(893),r=n.n(o),l={checkServer:function(t){return new Promise((function(e,n){var o="ws://",l=t.http;"https:"==document.location.protocol&&(l=t.https,o="wss://");var c=l.length,m=100,d=null,f=0,h=!1;window.setTimeout((function(){return h=!0}),2e3);for(var v=[],P=function(i){var t=o+l[i],P=t+"/submit",x=Math.random(),_=new r.a(P,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return x}});_.open().then((function(){return _.sendRequest({content:"HELLO:"+l[i]},{requestId:x})})).then((function(o){var r=o.split("#"),P=parseInt(r[1],10);if(v.push({server:l[i],busy:P}),P<m)m=P,d=t;else if(P===m){Math.random()<.4&&(d=t)}if(f++,h||f===c||3===f)return m<99?void e({best:{channel:d+"/submit",busy:m},available:v}):void n("Judger not available!")})).catch((function(t){if(console.log("Error",t),f++,h||f===c||3===f)return m<99?void e({best:{channel:d+"/submit",busy:m},available:v}):void n("Judger not available!")}))},i=0;i<c;i++)P(i)}))},judgeFunctest:function(t,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(e,n){if(t){var o=Math.random(),l=new r.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return o}});l.open().then((function(){return l.sendRequest({content:content},{requestId:o})})).then((function(t){try{var o=JSON.parse(t).RunStatus;if(o.indexOf('["AC"]')>=0)return void e("AC");if(o.indexOf("Wrong")>=0){var r=o.replace(/\\n/g,"\n");return r=(r=r.replace('["',"")).replace('"]',""),void e(r)}return void e(o)}catch(t){return console.log("Error:",t),void n(t)}})).catch((function(t){console.log("Error:",t),n(t)}))}else n("Null judger.")}))},judgeProgtest:function(t,e){var n=Math.random();return new Promise((function(o,l){if(t){var c=new r.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return n}});c.open().then((function(){return c.sendRequest({content:e},{requestId:n})})).then((function(t){try{return void o(JSON.parse(t))}catch(t){return console.log("Error:",t),void l(t)}})).catch((function(t){console.log("Error:",t),l(t)}))}else l("Null judger.")}))}};e.a=l},905:function(t,e,n){var content=n(1164);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("791639b2",content,!0,{sourceMap:!1})},912:function(t,e,n){var content=n(1196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("d9414df6",content,!0,{sourceMap:!1})},913:function(t,e,n){var content=n(1198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("46a1c7c6",content,!0,{sourceMap:!1})}}]);