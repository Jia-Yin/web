(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1126:function(t,e,n){"use strict";n.r(e);n(367),n(47),n(909);var o={props:{value:String,height:{type:Number,default:500},lang:{type:String,default:"c"},fontSize:{type:Number,default:100},lineNumbers:{type:Boolean,default:!0},tabSize:{type:Number,default:4},readOnly:{type:Boolean,default:!1},dummy:{type:Number,default:0}},data:function(){return{cm:null,cmstyle:{"font-size":"100%"},cmfontsize:100,cmcode:null,cmOption:{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!0,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}}},mounted:function(){this.cmcode=this.value,this.cmOption.lineNumbers=this.lineNumbers,this.cmOption.tabSize=this.tabSize,this.cmOption.indentUnit=this.tabSize,this.cm.focus()},methods:{refresh:function(){if(this.$refs.coder){var t=this;setTimeout((function(){t.$refs.coder.codemirror.refresh()}),1)}},setLang:function(t){"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),this.cm.focus()},cinput:function(t){this.$emit("input",t)},setFontSize:function(t){this.cmstyle={"font-size":"".concat(t,"%")}},onCmReady:function(t){t.setSize(null,this.height),this.cm=t,this.setLang(this.lang),this.setFontSize(this.fontSize)}},watch:{dummy:function(t){this.refresh()},value:function(t){this.cmcode=t,this.refresh()},height:function(t){this.cm.setSize(null,t)},fontSize:function(t){this.setFontSize(t)},lang:function(t){this.setLang(t)},lineNumbers:function(t){this.cmOption.lineNumbers=t},tabSize:function(t){this.cmOption.tabSize=t,this.cmOption.indentUnit=t},readOnly:function(t){this.cmOption.readOnly=t}}},r=(n(1250),n(55)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-editor"},[n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)}),[],!1,null,"1f11e5d5",null);e.default=component.exports},1250:function(t,e,n){"use strict";n(947)},1251:function(t,e,n){(e=n(56)(!1)).push([t.i,".code-editor[data-v-1f11e5d5]{width:100%}[data-v-1f11e5d5] .CodeMirror-gutters{border-left:0}[data-v-1f11e5d5] .CodeMirror-linenumber{text-align:center}.coder[data-v-1f11e5d5]{padding:0;border:1px solid #00f}",""]),t.exports=e},1252:function(t,e,n){"use strict";n(948)},1253:function(t,e,n){(e=n(56)(!1)).push([t.i,'.buttons[data-v-4b84e2db]{position:absolute;right:0;top:10px}.pmpanel[data-v-4b84e2db]{position:relative}.pdescription[data-v-4b84e2db]{width:100%;height:300px}.titleLabel[data-v-4b84e2db]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-4b84e2db] .katex{font-size:1.18em}.ptitle[data-v-4b84e2db]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-4b84e2db] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}[data-v-4b84e2db] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e},855:function(t,e,n){"use strict";n(10),n(14),n(22),n(86),n(9),n(856),n(29),n(15);var o=n(228),r=n.n(o),l={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),o=t.id;delete n.id,e[o]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new r.a(t).encrypt(e)},decode:function(t,e){return new r.a(t).decrypt(e)}};e.a=l},856:function(t,e,n){"use strict";var o=n(8),r=n(857).start;o({target:"String",proto:!0,forced:n(858)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},857:function(t,e,n){var o=n(50),r=n(229),l=n(52),c=Math.ceil,m=function(t){return function(e,n,m){var d,f,h=String(l(e)),v=h.length,P=void 0===m?" ":String(m),x=o(n);return x<=v||""==P?h:(d=x-v,(f=r.call(P,c(d/P.length))).length>d&&(f=f.slice(0,d)),t?h+f:f+h)}};t.exports={start:m(!1),end:m(!0)}},858:function(t,e,n){var o=n(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)},859:function(t,e,n){"use strict";n.r(e);n(156),n(49);var o=n(7),r=(n(867),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),t.showID&&t.pfields.push({key:"id",sortable:!0}),t.pfields.push({key:"title",sortable:!0,formatter:t.$selectUserLocaleText}),t.showTag&&t.pfields.push({key:"tags",sortable:!0}),(t.showArrow||t.showDetail||t.editProblem||t.copyProblem)&&t.pfields.push({key:"actions",label:"Actions"});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{moveUp:function(t){if(t>0){var e=this.$copyObject(this.problems[t]);this.problems.splice(t,1),this.problems.splice(t-1,0,e)}},moveDown:function(t){if(t<this.problems.length-1){var e=this.$copyObject(this.problems[t+1]);this.problems.splice(t+1,1),this.problems.splice(t,0,e)}},onRowSelected:function(t){this.$emit("rowSelected",t)},showProblem:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.toggleDetails();case 1:case"end":return e.stop()}}),e)})))()}}}),l=(n(870),n(55)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showFilter?n("p",{staticClass:"p-0 mb-2"},[n("span",[t._v("Filter: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pfilter,expression:"pfilter"}],domProps:{value:t.pfilter},on:{input:function(e){e.target.composing||(t.pfilter=e.target.value)}}})])]):t._e(),t._v(" "),n("b-table",{attrs:{bordered:"",items:t.problems,selectable:"","select-mode":"multi",fields:t.pfields,filter:t.pfilter},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([t.showDetail||t.editProblem||t.copyProblem||t.showArrow?{key:"cell(actions)",fn:function(e){return[t.showDetail?n("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(n){return t.showProblem(e)}}},[e.detailsShowing?n("b-icon",{attrs:{icon:"eye-slash"}}):n("b-icon",{attrs:{icon:"eye"}})],1):t._e(),t._v(" "),t.editProblem?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.editProblem(e.item)}}},[n("b-icon",{attrs:{icon:"pen"}})],1):t._e(),t._v(" "),t.copyProblem?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.copyProblem(e.item)}}},[n("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.showArrow?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.moveUp(e.index)}}},[n("b-icon",{attrs:{icon:"arrow-up"}})],1):t._e(),t._v(" "),t.showArrow?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.moveDown(e.index)}}},[n("b-icon",{attrs:{icon:"arrow-down"}})],1):t._e()]}}:null,t.showDetail?{key:"row-details",fn:function(e){return[n("b-card",[n("p",[t._v(t._s(e.item.id)+": "+t._s(t.$selectUserLocaleText(e.item.title)))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$md.render(t.$selectUserLocaleText(e.item.description)))}}),t._v(" "),n("p",[t._v("TAGS: "+t._s(e.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"2398be4f",null);e.default=component.exports},860:function(t,e,n){"use strict";n.r(e);n(156);var o=n(859),r=n(855),l={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:o.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var t=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)t.push(this.selProblems[i]);for(var e=[],n=0;n<this.oriProblems.length;n++){var o=this.oriProblems[n];r.a.findIdPos(t,o.id)<0&&e.push(o)}this.leftProblems=e,this.rightProblems=t},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var t=this.leftSelected[i];this.rightProblems.push(t);var e=r.a.findIdPos(this.leftProblems,t.id);e>=0&&this.leftProblems.splice(e,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var t=this.rightSelected[i];this.leftProblems.push(t);var e=r.a.findIdPos(this.selProblems,t.id);e>=0&&this.rightProblems.splice(e,1)}}},watch:{oriProblems:function(t){this.initSelection()},selProblems:function(t){this.initSelection()}}},c=(n(872),n(55)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-start align-items-top"},[n("problem-table",{attrs:{problems:t.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(e){return t.leftSelected=e}}}),t._v(" "),n("div",{staticClass:"mx-5"},[n("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.selectItems}},[n("b-icon",{attrs:{icon:"arrow-right"}})],1),t._v(" "),n("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.deSelectItems}},[n("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),t._v(" "),n("div",[n("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[n("span",{staticClass:"mr-3"},[t._v(t._s(t.selText))]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.done}},[t._v(t._s(t.OKText))])],1),t._v(" "),n("problem-table",{attrs:{problems:t.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(e){return t.rightSelected=e}}})],1)],1)])}),[],!1,null,"c90387ec",null);e.default=component.exports;installComponents(component,{ProblemTable:n(859).default})},861:function(t,e,n){var content=n(869);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("75a234fb",content,!0,{sourceMap:!1})},862:function(t,e,n){var content=n(871);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("0d16a966",content,!0,{sourceMap:!1})},863:function(t,e,n){var content=n(873);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("56c34f47",content,!0,{sourceMap:!1})},864:function(t,e,n){"use strict";n.r(e);n(367);var o={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:{zh:"中文",en:"English"},content:{zh:"中文",en:"English"}}},created:function(){this.$system("locales")&&(this.locales=this.$copyObject(this.$system("locales").support)),this.value&&(this.content=this.value)},methods:{setLang:function(t){this.$emit("curLang",t)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(t){this.content=t}}},r=(n(868),n(55)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-tabs",t._l(t.locales,(function(e,o,r){return n("b-tab",{key:"locale"+r,attrs:{title:e},on:{click:function(e){return t.setLang(o)}}},[n("b-textarea",{attrs:{rows:t.rows},on:{input:t.cinput},model:{value:t.content[o],callback:function(e){t.$set(t.content,o,e)},expression:"content[key]"}})],1)})),1)],1)}),[],!1,null,"05c43ddc",null);e.default=component.exports},868:function(t,e,n){"use strict";n(861)},869:function(t,e,n){(e=n(56)(!1)).push([t.i,"textarea[data-v-05c43ddc]{width:100%}",""]),t.exports=e},870:function(t,e,n){"use strict";n(862)},871:function(t,e,n){(e=n(56)(!1)).push([t.i,"[data-v-2398be4f] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},872:function(t,e,n){"use strict";n(863)},873:function(t,e,n){(e=n(56)(!1)).push([t.i,"[data-v-c90387ec] .itemList{margin:12px 0}.container-fluid[data-v-c90387ec]{margin-top:30px}.pdescription[data-v-c90387ec]{width:100%;height:300px}.titleLabel[data-v-c90387ec]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-c90387ec] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},888:function(t,e,n){"use strict";n(39),n(27),n(9),n(20),n(29),n(47);var o=n(910),r=n.n(o),l={checkServer:function(t){return new Promise((function(e,n){var o="ws://",l=t.http;"https:"==document.location.protocol&&(l=t.https,o="wss://");var c=l.length,m=100,d=null,f=0,h=!1;window.setTimeout((function(){return h=!0}),2e3);for(var v=[],P=function(i){var t=o+l[i],P=t+"/submit",x=Math.random(),_=new r.a(P,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return x}});_.open().then((function(){return _.sendRequest({content:"HELLO:"+l[i]},{requestId:x})})).then((function(o){var r=o.split("#"),P=parseInt(r[1],10);if(v.push({server:l[i],busy:P}),P<m)m=P,d=t;else if(P===m){Math.random()<.4&&(d=t)}if(f++,h||f===c||3===f)return m<99?void e({best:{channel:d+"/submit",busy:m},available:v}):void n("Judger not available!")})).catch((function(t){if(console.log("Error",t),f++,h||f===c||3===f)return m<99?void e({best:{channel:d+"/submit",busy:m},available:v}):void n("Judger not available!")}))},i=0;i<c;i++)P(i)}))},judgeFunctest:function(t,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(e,n){if(t){var o=Math.random(),l=new r.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return o}});l.open().then((function(){return l.sendRequest({content:content},{requestId:o})})).then((function(t){try{var o=JSON.parse(t).RunStatus;if(o.indexOf('["AC"]')>=0)return void e("AC");if(o.indexOf("Wrong")>=0){var r=o.replace(/\\n/g,"\n");return r=(r=r.replace('["',"")).replace('"]',""),void e(r)}return void e(o)}catch(t){return console.log("Error:",t),void n(t)}})).catch((function(t){console.log("Error:",t),n(t)}))}else n("Null judger.")}))},judgeProgtest:function(t,e){var n=Math.random();return new Promise((function(o,l){if(t){var c=new r.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return n}});c.open().then((function(){return c.sendRequest({content:e},{requestId:n})})).then((function(t){try{return void o(JSON.parse(t))}catch(t){return console.log("Error:",t),void l(t)}})).catch((function(t){console.log("Error:",t),l(t)}))}else l("Null judger.")}))}};e.a=l},913:function(t,e,n){"use strict";n.r(e);n(230),n(368),n(49);var o=n(7),r=n(864),l=n(1126),c=n(888),m=(n(867),{props:{problem:Object,problemSet:String,okText:{type:String,default:"OK"}},components:{LocaleInput:r.default,CodeEditor:l.default},data:function(){return{curLang:null,dummyInt:0,showTest:!1,testDataStr:"",channel:null,cmpoptions:[{text:"Strict",value:"strict"},{text:"Space Ignored",value:"space"},{text:"Order Ignored",value:"order"}],nullLocales:{},locales:{zh:"中文",en:"English"},PMProblem:{title:{},description:null,answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",cmpMode:"strict",timeLimit:1,memoryLimit:128,outputLimit:1e4,tags:""},localeText:{PM_Basic:"基本",PM_Question:"問題",PM_TestData:"測資",PM_Answer:"解答",PM_Title:"標題",PM_Tag:"標籤",PM_Compare:"比對",PM_TimeLimit:"限時",PM_MemoryLimit:"限制記憶體",PM_OutputLimit:"限制輸出",PM_Test:"測試",PM_Reset:"取消"}}},created:function(){if(this.problem&&(this.PMProblem=this.$copyObject(this.problem)),this.localeText=this.$updateLocaleText(this.localeText),this.$systemHasUserLocale()&&(this.locales=this.$copyObject(this.$system("locales").support),!this.PMProblem.title))for(var t in this.PMProblem.title={},this.$system("locales").support)this.PMProblem.title[t]=null;this.PMProblem.title||(this.PMProblem.title={zh:"中文",en:"English"})},methods:{curTitle:function(){return this.PMProblem&&this.PMProblem.title?this.$selectLocaleText(this.PMProblem.title,this.curLang):""},curDesc:function(){return this.PMProblem&&this.PMProblem.description?this.$selectLocaleText(this.PMProblem.description,this.curLang):""},ok:function(){this.$emit("OK",this.PMProblem)},getJudger:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.$system("setting"))||!n.judgers){e.next=6;break}return e.next=4,c.a.checkServer(n.judgers);case 4:o=e.sent,t.channel=o.best.channel;case 6:case"end":return e.stop()}}),e)})))()},testAnswer:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.channel){e.next=3;break}return e.next=3,t.getJudger();case 3:return n={execMode:"RUN",dataCode:t.PMProblem.dataCode,dataLang:t.PMProblem.dataLang,sourceCode:t.PMProblem.answerCode,sourceLang:t.PMProblem.answerLang},e.next=6,c.a.judgeProgtest(t.channel,n);case 6:o=e.sent,t.testDataStr="Input:\n"+o.WrongCase.input+"\nOutput:\n"+o.Response,t.showTest=!0;case 9:case"end":return e.stop()}}),e)})))()},testDataFunc:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.channel){e.next=3;break}return e.next=3,t.getJudger();case 3:return n={execMode:"TESTDATA",dataCode:t.PMProblem.dataCode,dataLang:t.PMProblem.dataLang},e.next=6,c.a.judgeProgtest(t.channel,n);case 6:o=e.sent,t.testDataStr=o.Response,t.showTest=!0;case 9:case"end":return e.stop()}}),e)})))()},resetProblem:function(){this.PMProblem={title:{},description:{},answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",tags:"",timeLimit:null,memoryLimit:null,outputLimit:null},this.$emit("Reset")}},watch:{problem:function(p){p&&(this.PMProblem=this.$copyObject(p))}}}),d=(n(1252),n(55)),component=Object(d.a)(m,(function(){var t=this,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"pmpanel"},[o("div",{staticClass:"buttons"},[o("span",{staticClass:"mr-2"},[e._v(e._s(e.problemSet))]),e._v(" "),o("b-button",{staticClass:"mr-2",attrs:{variant:"primary",size:"sm"},on:{click:e.resetProblem}},[e._v("\n            "+e._s(e.localeText.PM_Reset)+"\n        ")]),e._v(" "),o("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:e.ok}},[e._v("\n            "+e._s(e.okText)+"\n        ")])],1),e._v(" "),o("b-tabs",[o("b-tab",{attrs:{title:e.localeText.PM_Basic}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Title))]),e._v(" "),o("div",{staticClass:"flex-grow-1"},e._l(e.locales,(function(label,t,n){return o("div",{key:"title"+n,staticClass:"d-flex justify-content-start mb-3"},[o("span",{staticClass:"mr-3",staticStyle:{"text-align":"right",width:"100px"}},[e._v(e._s(label))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.title[t],expression:"PMProblem.title[key]"}],staticClass:"flex-grow-1",domProps:{value:e.PMProblem.title[t]},on:{input:function(n){n.target.composing||e.$set(e.PMProblem.title,t,n.target.value)}}})])})),0)]),e._v(" "),o("div",{staticClass:"d-flex justify-content-start"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Tag))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.tags,expression:"PMProblem.tags"}],staticClass:"flex-grow-1",domProps:{value:e.PMProblem.tags},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"tags",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Compare))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:e.cmpoptions},model:{value:e.PMProblem.cmpMode,callback:function(t){e.$set(e.PMProblem,"cmpMode",t)},expression:"PMProblem.cmpMode"}})],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_TimeLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.timeLimit,expression:"PMProblem.timeLimit"}],staticClass:"mr-5",attrs:{size:"2"},domProps:{value:e.PMProblem.timeLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"timeLimit",t.target.value)}}}),e._v(" "),o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_MemoryLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.memoryLimit,expression:"PMProblem.memoryLimit"}],staticClass:"mr-5",attrs:{size:"2"},domProps:{value:e.PMProblem.memoryLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"memoryLimit",t.target.value)}}}),e._v(" "),o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_OutputLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.outputLimit,expression:"PMProblem.outputLimit"}],attrs:{size:"2"},domProps:{value:e.PMProblem.outputLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"outputLimit",t.target.value)}}})])]),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_Question}},[o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("locale-input",{staticClass:"mt-3",attrs:{rows:16},on:{curLang:function(e){t.curLang=e}},model:{value:e.PMProblem.description,callback:function(t){e.$set(e.PMProblem,"description",t)},expression:"PMProblem.description"}})],1),e._v(" "),o("b-col",{staticClass:"pl-4 mt-4",attrs:{cols:"6"}},[o("div",[o("p",{staticClass:"ptitle"},[e._v(e._s(e.curTitle()))]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.$md.render(e.curDesc()))}})])])],1)],1),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_TestData},on:{click:function(t){e.dummyInt+=1}}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_DataLang))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:["py","cpp"]},model:{value:e.PMProblem.dataLang,callback:function(t){e.$set(e.PMProblem,"dataLang",t)},expression:"PMProblem.dataLang"}}),e._v(" "),o("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-success"},on:{click:e.testDataFunc}},[e._v(e._s(e.localeText.PM_Test))])],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_DataCode))]),e._v(" "),o("CodeEditor",{staticClass:"flex-grow-1",attrs:{lang:e.PMProblem.dataLang,dummy:e.dummyInt,rows:"10"},model:{value:e.PMProblem.dataCode,callback:function(t){e.$set(e.PMProblem,"dataCode",t)},expression:"PMProblem.dataCode"}})],1),e._v(" "),o("b-modal",{attrs:{size:"lg",title:"Test Data"},model:{value:e.showTest,callback:function(t){e.showTest=t},expression:"showTest"}},[o("pre",[e._v(e._s(e.testDataStr))])])],1),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_Answer},on:{click:function(t){e.dummyInt+=1}}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_AnswerLang))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:["c","cpp","py"]},model:{value:e.PMProblem.answerLang,callback:function(t){e.$set(e.PMProblem,"answerLang",t)},expression:"PMProblem.answerLang"}}),e._v(" "),o("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-success"},on:{click:e.testAnswer}},[e._v(e._s(e.localeText.PM_Test))])],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_AnswerCode))]),e._v(" "),o("CodeEditor",{staticClass:"flex-grow-1",attrs:{lang:e.PMProblem.answerLang,dummy:e.dummyInt,rows:"10"},model:{value:e.PMProblem.answerCode,callback:function(t){e.$set(e.PMProblem,"answerCode",t)},expression:"PMProblem.answerCode"}})],1)])],1)],1)}),[],!1,null,"4b84e2db",null);e.default=component.exports;installComponents(component,{LocaleInput:n(864).default,CodeEditor:n(1126).default})},947:function(t,e,n){var content=n(1251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("791639b2",content,!0,{sourceMap:!1})},948:function(t,e,n){var content=n(1253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("375ddd84",content,!0,{sourceMap:!1})}}]);