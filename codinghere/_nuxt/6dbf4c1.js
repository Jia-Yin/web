(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{840:function(t,e,n){"use strict";n(9),n(12),n(22),n(87),n(842),n(15);var r={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e}};e.a=r},848:function(t,e,n){"use strict";n(38),n(28),n(7),n(20),n(26),n(49);var r=n(865),o=n.n(r),c={checkServer:function(t){return console.log("Servers to Check:",t),new Promise((function(e,n){var r="ws://",c=t.http;"https:"==document.location.protocol&&(c=t.https,r="wss://");var l=c.length,m=100,d=null,f=0,h=!1;window.setTimeout((function(){return h=!0}),2e3);for(var v=[],P=function(i){var t=r+c[i],P=t+"/submit",y=Math.random();console.log("Check:",P);var M=new o.a(P,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return y}});M.open().then((function(){return M.sendRequest({content:"HELLO:"+c[i]},{requestId:y})})).then((function(r){console.log("My Response from:",r);var o=r.split("#"),P=parseInt(o[1],10);if(v.push({server:c[i],busy:P}),P<m)m=P,d=t;else if(P===m){Math.random()<.4&&(d=t)}if(f++,h||f===l||3===f)return m<99?void e({best:{channel:d+"/submit",busy:m},available:v}):void n("Judger not available!")})).catch((function(t){if(f++,h||f===l||3===f)return m<99?void e({best:{channel:d+"/submit",busy:m},available:v}):void n("Judger not available!")}))},i=0;i<l;i++)P(i)}))},judgeFunctest:function(t,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(e,n){if(t){var r=Math.random(),c=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return r}});c.open().then((function(){return c.sendRequest({content:content},{requestId:r})})).then((function(t){try{var r=JSON.parse(t).RunStatus;if(r.indexOf('["AC"]')>=0)return void e("AC");if(r.indexOf("Wrong")>=0){var o=r.replace(/\\n/g,"\n");return o=(o=o.replace('["',"")).replace('"]',""),void e(o)}return void e(r)}catch(t){return console.log("Error:",t),void n(t)}})).catch((function(t){console.log("Error:",t),n(t)}))}else n("Null judger.")}))},judgeProgtest:function(t,e){var n=Math.random();return new Promise((function(r,c){if(t){var l=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return n}});l.open().then((function(){return l.sendRequest({content:e},{requestId:n})})).then((function(t){try{return void r(JSON.parse(t))}catch(t){return console.log("Error:",t),void c(t)}})).catch((function(t){console.log("Error:",t),c(t)}))}else c("Null judger.")}))}};e.a=c},858:function(t,e,n){"use strict";n.r(e);n(228),n(363),n(54);var r=n(14),o=n(0),c=n(79),l=n(226),m=n(859),d=n(895),f=n(848);n(850);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={props:{problem:Object,problemSet:String,okText:{type:String,default:"OK"}},components:{LocaleInput:m.default,CodeEditor:d.default},data:function(){return{curLang:null,dummyInt:0,showTest:!1,testDataStr:"",channel:null,cmpoptions:[{text:"Strict",value:"strict"},{text:"Space Ignored",value:"space"},{text:"Order Ignored",value:"order"}],locales:[{zh:"中文"}],PMProblem:{title:null,description:null,answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",cmpMode:"strict",timeLimit:1,memoryLimit:128,outputLimit:1e4,tags:""},localeText:{PM_Basic:"基本",PM_Question:"問題",PM_TestData:"測資",PM_Answer:"解答",PM_Title:"標題",PM_Tag:"標籤",PM_Compare:"比對",PM_TimeLimit:"限時",PM_MemoryLimit:"限制記憶體",PM_OutputLimit:"限制輸出",PM_Test:"測試",PM_Reset:"清除"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({user:function(t){return t.user},locale:function(t){return t.user.locale},system:function(t){return t.system}})),created:function(){if(this.problem&&(this.PMProblem=JSON.parse(JSON.stringify(this.problem))),this.system.locales&&this.locale in this.system.locales.support){this.localeText=l.a.updateParams(this.system.locales[this.locale],this.localeText),this.locales=[];var t=!1;for(var e in this.PMProblem.title||(this.PMProblem.title={},t=!0),this.system.locales.support)this.locales.push({key:e,label:this.system.locales.support[e]}),t&&(this.PMProblem.title[e]=null)}},methods:{curTitle:function(){return this.PMProblem&&this.PMProblem.title&&this.curLang?this.PMProblem.title[this.curLang]:""},curDesc:function(){return this.PMProblem&&this.PMProblem.description&&this.curLang?this.PMProblem.description[this.curLang]:""},ok:function(){this.$emit("OK",this.PMProblem)},getJudger:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$store.state.system||!t.$store.state.system.judgers){e.next=5;break}return e.next=3,f.a.checkServer(t.$store.state.system.judgers);case 3:n=e.sent,t.channel=n.best.channel;case 5:case"end":return e.stop()}}),e)})))()},testAnswer:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.channel){e.next=3;break}return e.next=3,t.getJudger();case 3:return n={execMode:"RUN",dataCode:t.PMProblem.dataCode,dataLang:t.PMProblem.dataLang,sourceCode:t.PMProblem.answerCode,sourceLang:t.PMProblem.answerLang},e.next=6,f.a.judgeProgtest(t.channel,n);case 6:r=e.sent,console.log("RESULT",r),t.testDataStr="Input:\n"+r.WrongCase.input+"\nOutput:\n"+r.Response,t.showTest=!0;case 10:case"end":return e.stop()}}),e)})))()},testDataFunc:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.channel){e.next=3;break}return e.next=3,t.getJudger();case 3:return n={execMode:"TESTDATA",dataCode:t.PMProblem.dataCode,dataLang:t.PMProblem.dataLang},console.log("Cdata",n),e.next=7,f.a.judgeProgtest(t.channel,n);case 7:r=e.sent,t.testDataStr=r.Response,t.showTest=!0;case 10:case"end":return e.stop()}}),e)})))()},resetProblem:function(){this.PMProblem={title:{en:"",zh:" "},description:{en:"",zh:""},answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",tags:"",timeLimit:null,memoryLimit:null,outputLimit:null},this.$emit("Reset")}},watch:{problem:function(p){p&&(this.PMProblem=JSON.parse(JSON.stringify(p)))}}},P=(n(996),n(70)),component=Object(P.a)(v,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"pmpanel"},[r("div",{staticClass:"buttons"},[r("span",{staticClass:"mr-2"},[e._v(e._s(e.problemSet))]),e._v(" "),r("b-button",{staticClass:"mr-2",attrs:{variant:"primary",size:"sm"},on:{click:e.resetProblem}},[e._v("\n            "+e._s(e.localeText.PM_Reset)+"\n        ")]),e._v(" "),r("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:e.ok}},[e._v("\n            "+e._s(e.okText)+"\n        ")])],1),e._v(" "),r("b-tabs",[r("b-tab",{attrs:{title:e.localeText.PM_Basic}},[r("div",{staticClass:"d-flex justify-content-start mt-3"},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Title))]),e._v(" "),r("div",{staticClass:"flex-grow-1"},e._l(e.locales,(function(t,n){return r("div",{key:"title"+n,staticClass:"d-flex justify-content-start mb-3"},[r("span",{staticClass:"mr-3",staticStyle:{"text-align":"right",width:"100px"}},[e._v(e._s(t.label))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.title[t.key],expression:"PMProblem.title[lang.key]"}],staticClass:"flex-grow-1",domProps:{value:e.PMProblem.title[t.key]},on:{input:function(n){n.target.composing||e.$set(e.PMProblem.title,t.key,n.target.value)}}})])})),0)]),e._v(" "),r("div",{staticClass:"d-flex justify-content-start"},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Tag))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.tags,expression:"PMProblem.tags"}],staticClass:"flex-grow-1",domProps:{value:e.PMProblem.tags},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"tags",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"d-flex justify-content-start mt-3"},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Compare))]),e._v(" "),r("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:e.cmpoptions},model:{value:e.PMProblem.cmpMode,callback:function(t){e.$set(e.PMProblem,"cmpMode",t)},expression:"PMProblem.cmpMode"}})],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-start mt-3"},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_TimeLimit))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.timeLimit,expression:"PMProblem.timeLimit"}],staticClass:"mr-5",attrs:{size:"2"},domProps:{value:e.PMProblem.timeLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"timeLimit",t.target.value)}}}),e._v(" "),r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_MemoryLimit))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.memoryLimit,expression:"PMProblem.memoryLimit"}],staticClass:"mr-5",attrs:{size:"2"},domProps:{value:e.PMProblem.memoryLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"memoryLimit",t.target.value)}}}),e._v(" "),r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_OutputLimit))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.outputLimit,expression:"PMProblem.outputLimit"}],attrs:{size:"2"},domProps:{value:e.PMProblem.outputLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"outputLimit",t.target.value)}}})])]),e._v(" "),r("b-tab",{attrs:{title:e.localeText.PM_Question}},[r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("locale-input",{staticClass:"mt-3",attrs:{rows:16},on:{curLang:function(e){t.curLang=e}},model:{value:e.PMProblem.description,callback:function(t){e.$set(e.PMProblem,"description",t)},expression:"PMProblem.description"}})],1),e._v(" "),r("b-col",{staticClass:"pl-4 mt-4",attrs:{cols:"6"}},[r("div",[r("p",{staticClass:"ptitle"},[e._v(e._s(e.curTitle()))]),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.$md.render(e.curDesc()))}})])])],1)],1),e._v(" "),r("b-tab",{attrs:{title:e.localeText.PM_TestData},on:{click:function(t){e.dummyInt+=1}}},[r("div",{staticClass:"d-flex justify-content-start mt-3"},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_DataLang))]),e._v(" "),r("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:["py","cpp"]},model:{value:e.PMProblem.dataLang,callback:function(t){e.$set(e.PMProblem,"dataLang",t)},expression:"PMProblem.dataLang"}}),e._v(" "),r("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-success"},on:{click:e.testDataFunc}},[e._v(e._s(e.localeText.PM_Test))])],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-start mt-3"},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_DataCode))]),e._v(" "),r("CodeEditor",{staticClass:"flex-grow-1",attrs:{lang:e.PMProblem.dataLang,dummy:e.dummyInt,rows:"10"},model:{value:e.PMProblem.dataCode,callback:function(t){e.$set(e.PMProblem,"dataCode",t)},expression:"PMProblem.dataCode"}})],1),e._v(" "),r("b-modal",{attrs:{size:"lg",title:"Test Data"},model:{value:e.showTest,callback:function(t){e.showTest=t},expression:"showTest"}},[r("pre",[e._v(e._s(e.testDataStr))])])],1),e._v(" "),r("b-tab",{attrs:{title:e.localeText.PM_Answer},on:{click:function(t){e.dummyInt+=1}}},[r("div",{staticClass:"d-flex justify-content-start mt-3"},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_AnswerLang))]),e._v(" "),r("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:["c","cpp","py"]},model:{value:e.PMProblem.answerLang,callback:function(t){e.$set(e.PMProblem,"answerLang",t)},expression:"PMProblem.answerLang"}}),e._v(" "),r("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-success"},on:{click:e.testAnswer}},[e._v(e._s(e.localeText.PM_Test))])],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-start mt-3"},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_AnswerCode))]),e._v(" "),r("CodeEditor",{staticClass:"flex-grow-1",attrs:{lang:e.PMProblem.answerLang,dummy:e.dummyInt,rows:"10"},model:{value:e.PMProblem.answerCode,callback:function(t){e.$set(e.PMProblem,"answerCode",t)},expression:"PMProblem.answerCode"}})],1)])],1)],1)}),[],!1,null,"352372f9",null);e.default=component.exports;installComponents(component,{LocaleInput:n(859).default,CodeEditor:n(895).default})},859:function(t,e,n){"use strict";n.r(e);n(362);var r=n(0),o=(n(226),n(79));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:[{name:"zh",value:"中文"},{name:"en",value:"English"}],content:{zh:null,en:null}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({user:function(t){return t.user},locale:function(t){return t.user.locale},system:function(t){return t.system}})),created:function(){if(this.system.locales&&this.system.locales.support)for(var t in this.locales=[],this.system.locales.support)this.locales.push({key:t,label:this.system.locales.support[t]});this.value&&(this.content=this.value)},mounted:function(){this.setLang(this.locales[0].key)},methods:{setLang:function(t){console.log("Key",t),this.$emit("curLang",t)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(t){this.content=t}}},m=(n(900),n(70)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-tabs",t._l(t.locales,(function(e,r){return n("b-tab",{key:"locale"+r,attrs:{title:e.label},on:{click:function(n){return t.setLang(e.key)}}},[n("b-textarea",{attrs:{rows:t.rows},on:{input:t.cinput},model:{value:t.content[e.key],callback:function(n){t.$set(t.content,e.key,n)},expression:"content[lang.key]"}})],1)})),1)],1)}),[],!1,null,"73ef1650",null);e.default=component.exports},862:function(t,e,n){var content=n(901);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("0095fb38",content,!0,{sourceMap:!1})},864:function(t,e,n){var content=n(903);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("791639b2",content,!0,{sourceMap:!1})},872:function(t,e,n){var content=n(997);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("77453c88",content,!0,{sourceMap:!1})},895:function(t,e,n){"use strict";n.r(e);n(362),n(49),n(863);var r={props:{value:String,height:{type:Number,default:500},lang:{type:String,default:"c"},fontSize:{type:Number,default:100},lineNumbers:{type:Boolean,default:!0},tabSize:{type:Number,default:4},readOnly:{type:Boolean,default:!1},dummy:{type:Number,default:0}},data:function(){return{cm:null,cmstyle:{"font-size":"100%"},cmfontsize:100,cmcode:null,cmOption:{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!0,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}}},mounted:function(){this.cmcode=this.value,this.cmOption.lineNumbers=this.lineNumbers,this.cmOption.tabSize=this.tabSize,this.cmOption.indentUnit=this.tabSize,this.cm.focus()},methods:{refresh:function(){if(this.$refs.coder){var t=this;setTimeout((function(){t.$refs.coder.codemirror.refresh()}),1)}},setLang:function(t){"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),this.cm.focus()},cinput:function(t){this.$emit("input",t)},setFontSize:function(t){this.cmstyle={"font-size":"".concat(t,"%")}},onCmReady:function(t){t.setSize(null,this.height),this.cm=t,this.setLang(this.lang),this.setFontSize(this.fontSize)}},watch:{dummy:function(t){this.refresh()},value:function(t){this.cmcode=t,this.refresh()},height:function(t){this.cm.setSize(null,t)},fontSize:function(t){this.setFontSize(t)},lang:function(t){this.setLang(t)},lineNumbers:function(t){this.cmOption.lineNumbers=t},tabSize:function(t){this.cmOption.tabSize=t,this.cmOption.indentUnit=t},readOnly:function(t){this.cmOption.readOnly=t}}},o=(n(902),n(70)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-editor"},[n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)}),[],!1,null,"1f11e5d5",null);e.default=component.exports},900:function(t,e,n){"use strict";n(862)},901:function(t,e,n){(e=n(59)(!1)).push([t.i,"textarea[data-v-73ef1650]{width:100%}",""]),t.exports=e},902:function(t,e,n){"use strict";n(864)},903:function(t,e,n){(e=n(59)(!1)).push([t.i,".code-editor[data-v-1f11e5d5]{width:100%}[data-v-1f11e5d5] .CodeMirror-gutters{border-left:0}[data-v-1f11e5d5] .CodeMirror-linenumber{text-align:center}.coder[data-v-1f11e5d5]{padding:0;border:1px solid #00f}",""]),t.exports=e},996:function(t,e,n){"use strict";n(872)},997:function(t,e,n){(e=n(59)(!1)).push([t.i,'.buttons[data-v-352372f9]{position:absolute;right:0;top:10px}.pmpanel[data-v-352372f9]{position:relative}.pdescription[data-v-352372f9]{width:100%;height:300px}.titleLabel[data-v-352372f9]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-352372f9] .katex{font-size:1.18em}.ptitle[data-v-352372f9]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-352372f9] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}[data-v-352372f9] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e}}]);