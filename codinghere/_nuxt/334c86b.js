(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1018:function(t,e,n){"use strict";n(881)},1019:function(t,e,n){(e=n(59)(!1)).push([t.i,".conn[data-v-48481dd8]{display:block;background:green;color:#fff;text-align:center;line-height:50px;height:50px;border-radius:25px}.col-container[data-v-48481dd8]{display:flex;width:100%}.toolbar[data-v-48481dd8]{display:flex;flex-direction:column;justify-content:space-between;background:#fafad2;padding:12px;border:1px solid #00f;border-right:none;width:74px}.coder[data-v-48481dd8]{flex:1 1 0;padding-top:12px;border:1px solid #00f}[data-v-48481dd8] .CodeMirror-gutters{border-left:0}.btn[data-v-48481dd8],[data-v-48481dd8] .CodeMirror-linenumber{text-align:center}.btn[data-v-48481dd8]{display:block;width:50px;margin-bottom:12px}",""]),t.exports=e},1020:function(t,e,n){"use strict";n(882)},1021:function(t,e,n){(e=n(59)(!1)).push([t.i,'[data-v-0831ca60] .katex{font-size:1.18em}.probPanel[data-v-0831ca60]{max-width:800px;text-align:justify}.ptitle[data-v-0831ca60]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-0831ca60] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}[data-v-0831ca60] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e},1022:function(t,e,n){"use strict";n(883)},1023:function(t,e,n){(e=n(59)(!1)).push([t.i,'[data-v-7fd6f8f3] h1{color:#00f;font-family:"Arial";font-size:120%}[data-v-7fd6f8f3] h2{color:#ff4500;font-size:80%;margin:12px 0;text-decoration:underline}[data-v-7fd6f8f3] code{color:#222;font-family:"monospace",Courier;font-size:75%}',""]),t.exports=e},1024:function(t,e,n){"use strict";n(884)},1025:function(t,e,n){(e=n(59)(!1)).push([t.i,'.ptitle[data-v-698dfdfc]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-698dfdfc] mark{background:#ff0;padding:0}.probPanel[data-v-698dfdfc]{padding:0 10px}.item[data-v-698dfdfc]{margin-bottom:20px}.label[data-v-698dfdfc]{width:120px;color:#00f}.label[data-v-698dfdfc],.pseg[data-v-698dfdfc]{display:inline-block}.pseg[data-v-698dfdfc]{color:red}.sample[data-v-698dfdfc],.status[data-v-698dfdfc]{color:#000}.sample[data-v-698dfdfc]{background:#eee;padding:6px 6px 6px 12px;font-family:"Courier New",Courier,monospace}',""]),t.exports=e},840:function(t,e,n){"use strict";n(9),n(12),n(22),n(87),n(841),n(15);var r=n(227),o=n.n(r),c={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},selectLocaleText:function(t,e){return t?e&&t[e]&&t[e].length>0?t[e]:t.zh&&t.zh.length>0?t.zh:t.en&&t.en.length>0?t.en:"Unknown":""},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},855:function(t,e,n){"use strict";n(38),n(28),n(8),n(20),n(26),n(49);var r=n(865),o=n.n(r),c={checkServer:function(t){return new Promise((function(e,n){var r="ws://",c=t.http;"https:"==document.location.protocol&&(c=t.https,r="wss://");var l=c.length,d=100,f=null,m=0,h=!1;window.setTimeout((function(){return h=!0}),2e3);for(var v=[],_=function(i){var t=r+c[i],_=t+"/submit",S=Math.random(),y=new o.a(_,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return S}});y.open().then((function(){return y.sendRequest({content:"HELLO:"+c[i]},{requestId:S})})).then((function(r){var o=r.split("#"),_=parseInt(o[1],10);if(v.push({server:c[i],busy:_}),_<d)d=_,f=t;else if(_===d){Math.random()<.4&&(f=t)}if(m++,h||m===l||3===m)return d<99?void e({best:{channel:f+"/submit",busy:d},available:v}):void n("Judger not available!")})).catch((function(t){if(console.log("Error",t),m++,h||m===l||3===m)return d<99?void e({best:{channel:f+"/submit",busy:d},available:v}):void n("Judger not available!")}))},i=0;i<l;i++)_(i)}))},judgeFunctest:function(t,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(e,n){if(t){var r=Math.random(),c=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return r}});c.open().then((function(){return c.sendRequest({content:content},{requestId:r})})).then((function(t){try{var r=JSON.parse(t).RunStatus;if(r.indexOf('["AC"]')>=0)return void e("AC");if(r.indexOf("Wrong")>=0){var o=r.replace(/\\n/g,"\n");return o=(o=o.replace('["',"")).replace('"]',""),void e(o)}return void e(r)}catch(t){return console.log("Error:",t),void n(t)}})).catch((function(t){console.log("Error:",t),n(t)}))}else n("Null judger.")}))},judgeProgtest:function(t,e){var n=Math.random();return new Promise((function(r,c){if(t){var l=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return n}});l.open().then((function(){return l.sendRequest({content:e},{requestId:n})})).then((function(t){try{return void r(JSON.parse(t))}catch(t){return console.log("Error:",t),void c(t)}})).catch((function(t){console.log("Error:",t),c(t)}))}else c("Null judger.")}))}};e.a=c},859:function(t,e,n){"use strict";n.r(e);n(362),n(54);var r=n(14),o=n(0),c=n(226),l=n(79),d=n(896),f=n(897),m=n(898),h=n(899),v=n(855);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var S={props:{problem:Object,showRef:{type:Boolean,default:!0},stylePoints:{type:Number,default:0},lang:{type:String,default:"c"},langs:{type:String,default:"c,cpp,py"},initCode:{type:String,default:""}},data:function(){var t;return t={infoAlert:!1,info:{title:"",message:""},tabIndex:0,mycode:"",chnlabel:"X",srclang:"c",judging:!1,channel:null},Object(o.a)(t,"chnlabel",null),Object(o.a)(t,"result",null),Object(o.a)(t,"localeText",{Coding_Problem:"問題",Coding_Code:"程式",Coding_Result:"結果",Coding_Reference:"參考",Coding_CodeTooShort:"程式碼太短"}),t},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({user:function(t){return t.user},locale:function(t){return t.user.locale},system:function(t){return t.system}})),components:{CodePanel:d.default,SubmitResult:h.default,Question:f.default,CCheetSheet:m.default},created:function(){this.system.locales&&this.locale in this.system.locales.support&&(this.localeText=c.a.updateParams(this.system.locales[this.locale],this.localeText)),this.initCode&&(this.mycode=this.initCode),this.srclang=this.lang},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.state.system&&t.$store.state.system.judgers&&v.a.checkServer(t.$store.state.system.judgers).then((function(e){t.channel=e.best.channel;var n=t.channel.toUpperCase();"WSS"===n.substr(0,3)?t.chnlabel=n.substr(6,1):t.chnlabel=n.substr(5,1)}));case 1:case"end":return e.stop()}}),e)})))()},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.judging&&t.channel){e.next=2;break}return e.abrupt("return");case 2:if(!(t.mycode.length<5)){e.next=6;break}return t.info={title:t.localeText.Coding_Code,message:t.localeText.Coding_CodeTooShort},t.infoAlert=!0,e.abrupt("return");case 6:return t.judging=!0,n={answerCode:t.problem.answerCode,answerLang:t.problem.answerLang,dataCode:t.problem.dataCode,dataLang:t.problem.dataLang,sourceCode:t.mycode,sourceLang:t.srclang,testMode:t.problem.testMode,cmpMode:t.problem.cmpMode,timeLimit:t.problem.timeLimit,memoryLimit:t.problem.memoryLimit,outputLimit:t.problem.outputLimit},e.prev=8,e.next=11,v.a.judgeProgtest(t.channel,n);case 11:t.result=e.sent,t.tabIndex=2,t.judging=!1,r={cdata:n,result:t.result},t.$emit("submit",r),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(8),t.judging=!1,console.log("Judge Error:",e.t0);case 22:case"end":return e.stop()}}),e,null,[[8,18]])})))()}}},y=n(70),component=Object(y.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message)+"\n    ")]),t._v(" "),n("b-tabs",{attrs:{card:""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("b-tab",{attrs:{title:t.localeText.Coding_Problem}},[n("Question",{attrs:{problem:t.problem}})],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Coding_Code}},[n("CodePanel",{attrs:{height:600,submit:t.submit,judging:t.judging,lang:t.lang,langs:t.langs,channel:t.chnlabel},on:{langChanged:function(e){t.srclang=e}},model:{value:t.mycode,callback:function(e){t.mycode=e},expression:"mycode"}})],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Coding_Result}},[n("SubmitResult",{attrs:{result:t.result}})],1),t._v(" "),t.showRef?n("b-tab",{attrs:{title:t.localeText.Coding_Reference}},[n("CCheetSheet")],1):t._e()],1)],1)}),[],!1,null,"7a155b60",null);e.default=component.exports;installComponents(component,{Question:n(897).default,CodePanel:n(896).default,SubmitResult:n(899).default,CCheetSheet:n(898).default})},881:function(t,e,n){var content=n(1019);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("25645180",content,!0,{sourceMap:!1})},882:function(t,e,n){var content=n(1021);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("79c60caf",content,!0,{sourceMap:!1})},883:function(t,e,n){var content=n(1023);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("7f3a2107",content,!0,{sourceMap:!1})},884:function(t,e,n){var content=n(1025);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("496352fb",content,!0,{sourceMap:!1})},896:function(t,e,n){"use strict";n.r(e);n(11),n(362),n(8),n(26),n(45),n(54);var r=n(14),o=n(0),c=(n(863),{props:{value:String,height:{type:Number,default:500},submit:{type:Function,default:null},judging:{type:Boolean,default:!1},lang:{type:String,default:"c"},langs:{type:String,default:"c, cpp, py"},lineNumbers:{type:Boolean,default:!0},channel:{type:String,default:"None"}},data:function(){var t;return t={cm:null,judgable:!1,cmlang:"c",cmlangs:["c","cpp","py"],cmstyle:{"font-size":"100%"},cmfontsize:100},Object(o.a)(t,"cm",null),Object(o.a)(t,"cmcode",null),Object(o.a)(t,"cmOption",{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!1,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}),t},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.cmcode=t.value,t.cmlang=t.lang,t.cmOption.lineNumbers=t.lineNumbers,""==t.langs?t.cmlangs=[t.lang]:t.cmlangs=t.langs.split(",").map((function(t){return t.trim()})),t.cm.focus();case 5:case"end":return e.stop()}}),e)})))()},methods:{langLabel:function(t){return"c"==t||"C"==t?"C":"c++"==t||"C++"==t||"cpp"==t||"CPP"==t||"cc"==t?"C++":"py"==t||"PY"==t?"PY":void 0},setLang:function(t){this.cmlang=t,"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),this.$refs.coder.codemirror.focus(),this.$emit("langChanged",t)},cinput:function(t){this.$emit("input",t)},incfont:function(){this.cmfontsize+=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},decfont:function(){this.cmfontsize-=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},resetfont:function(){this.cmfontsize=100,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},onCmReady:function(t){this.cm=t,t.setSize(null,this.height)}},watch:{value:function(t){this.cmcode=t,this.cm.focus()},height:function(t){this.cm.setSize(null,t)}}}),l=(n(1018),n(70)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"col-container"},[n("div",{staticClass:"toolbar"},[n("div",[t.submit?n("b-button",{attrs:{size:"sm",variant:"outline-primary",disabled:t.judging||"None"==t.channel},on:{click:t.submit}},[n("b-icon",{attrs:{icon:"check2"}})],1):t._e(),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.incfont}},[t._v("＋")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.resetfont}},[t._v("◯")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.decfont}},[t._v("－")])],1),t._v(" "),n("div",t._l(t.cmlangs,(function(e,r){return n("b-button",{key:r,attrs:{size:"sm",variant:e==t.cmlang?"primary":"outline-primary"},on:{click:function(n){return t.setLang(e)}}},[t._v(t._s(t.langLabel(e)))])})),1),t._v(" "),t.submit?n("div",["None"!=t.channel?n("span",{staticClass:"conn"},[t._v(t._s(t.channel))]):n("span",[n("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)]):t._e()]),t._v(" "),n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)])}),[],!1,null,"48481dd8",null);e.default=component.exports},897:function(t,e,n){"use strict";n.r(e);n(229),n(364),n(851);var r=n(840),o={props:{problem:Object},data:function(){return{title:"Error",description:"If you see this message, then the problem format is invalid."}},computed:{locale:function(){return this.$store.state.user.locale}},created:function(){this.title=r.a.selectLocaleText(this.problem.title,this.locale),this.description=r.a.selectLocaleText(this.problem.description,this.locale)},methods:{}},c=(n(1020),n(70)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"probPanel"},[e("p",{staticClass:"ptitle"},[this._v(this._s(this.title))]),this._v(" "),e("p",{domProps:{innerHTML:this._s(this.$md.render(this.description))}})])}),[],!1,null,"0831ca60",null);e.default=component.exports},898:function(t,e,n){"use strict";n.r(e);n(54);var r=n(14),o={data:function(){return{refcontents:"You should not see this",localeText:{CCheet_Title:"目前尚未有評判結果"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"en"!=(n=t.$store.state.user.locale)&&(n="zh"),e.next=4,t.$content(n+"/ccheetsheet").fetch();case 4:t.refcontents=e.sent;case 5:case"end":return e.stop()}}),e)})))()}},c=(n(1022),n(70)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-content",{attrs:{document:this.refcontents}})],1)}),[],!1,null,"7fd6f8f3",null);e.default=component.exports},899:function(t,e,n){"use strict";n.r(e);n(12),n(18),n(8),n(157),n(20),n(26),n(15);var r=n(0),o=n(226),c=n(79);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{result:Object,showTime:{type:Boolean,default:!1},showMemory:{type:Boolean,default:!1}},data:function(){return{localeText:{SR_NoResult:"目前尚未有評判結果",SR_Results:"執行結果",SR_Score:"程式得分",SR_UseTime:"使用時間",SR_UseMemory:"使用記憶體",SR_Bytes:"位元組",SR_SampleInput:"輸入範例",SR_CorrectOutput:"正確輸出",SR_ProgramCoutput:"程式輸出",SR_StyleCheck:"風格檢查",SR_StyleCheckOK:"格式良好",SR_Response:"錯誤訊息",SR_RunStatus_CE:"編譯錯誤",SR_RunStatus_AC:"正確",SR_RunStatus_PC:"部份正確",SR_RunStatus_PE:"排版錯誤",SR_RunStatus_WA:"錯誤",SR_RunStatus_TLE:"超過時間限制",SR_RunStatus_OLE:"超過輸出限制",SR_RunStatus_MLE:"超過記憶體限制",SR_RunStatus_RE:"執行時期錯誤"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({showWrongCase:function(){return"WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus},showStyleCheck:function(){return"NA"!=this.result.StyleCheck&&"N/A"!=this.result.StyleCheck&&("WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus)},styleResult:function(){return""==this.result.StyleCheck?this.localeText.SR_StyleCheckOK:this.result.StyleCheck}},Object(c.b)({user:function(t){return t.user},locale:function(t){return t.user.locale},system:function(t){return t.system}})),created:function(){this.system.locales&&this.locale in this.system.locales.support&&(this.localeText=o.a.updateParams(this.system.locales[this.locale],this.localeText))},methods:{inputStr:function(t){return t.replace(/^\s*\n/gm,"")},outputStr:function(t){var e=/^(\s+)(.*)$/,n=/^(.*)(\s+)$/,r=t.split("\n"),o=[];return r.forEach((function(line){var t=line,r=t.match(e);r&&(t="<mark>"+r[1]+"</mark>"+r[2]),(r=t.match(n))&&(t=r[1]+"<mark>"+r[2]+"</mark>"),o.push(t)})),o.join("<mark>⏎</mark>\n")},statusResult:function(t){var e="("+t.RunStatus+") ";return"AC"==t.RunStatus?e+this.localeText.SR_RunStatus_AC:"CE"===t.RunStatus?e+this.localeText.SR_RunStatus_CE:"NA"===t.RunStatus?e+this.localeText.SR_RunStatus_PC:"PE"===t.RunStatus?e+this.localeText.SR_RunStatus_PE:"WA"===t.RunStatus?e+this.localeText.SR_RunStatus_WA:"TLE"===t.RunStatus?e+this.localeText.SR_RunStatus_TLE:"OLE"===t.RunStatus?e+this.localeText.SR_RunStatus_OLE:"MLE"===t.RunStatus?e+this.localeText.SR_RunStatus_MLE:"RE"===t.RunStatus?e+this.localeText.SR_RunStatus_RE:e}}},f=(n(1024),n(70)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.result?n("div",{staticClass:"probPanel"},[n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Results))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.statusResult(t.result)))])]),t._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Score))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Score))])]),t._v(" "),t.showTime?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseTime))]),t._v(" "),n("span",{staticClass:"status"},[t._v("\n                CPU: "+t._s(t.result.CPUTime)+"ms / Real:\n                "+t._s(t.result.RealTime)+"ms\n            ")])]):t._e(),t._v(" "),t.showMemory?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseMemory))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Memory)+" "+t._s(t.localeText.SR_Bytes))])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.showWrongCase?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_SampleInput))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.inputStr(t.result.WrongCase.input)))]),t._v(" "),n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_CorrectOutput)+" \n                ("+t._s(t.result.WrongCase.answer.length)+" "+t._s(t.localeText.SR_Bytes)+")")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.answer))}}),t._v(" "),n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_ProgramCoutput)+"\n                ("+t._s(t.result.WrongCase.source.length)+" "+t._s(t.localeText.SR_Bytes)+")")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.source))}})]):t._e(),t._v(" "),t.result.Response&&""!=t.result.Response?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_Response))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.result.Response))])]):t._e(),t._v(" "),t.showStyleCheck?n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v(t._s(t.localeText.SR_StyleCheck))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.styleResult))])]):t._e()]):n("div",{staticClass:"ptitle"},[t._v("\n        "+t._s(t.localeText.SR_NoResult)+"\n    ")])])}),[],!1,null,"698dfdfc",null);e.default=component.exports}}]);