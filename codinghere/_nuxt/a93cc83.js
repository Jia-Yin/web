(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1014:function(t,e,n){"use strict";n(881)},1015:function(t,e,n){(e=n(59)(!1)).push([t.i,".conn[data-v-49b03d10]{display:block;background:green;color:#fff;text-align:center;line-height:50px;height:50px;border-radius:25px}.col-container[data-v-49b03d10]{display:flex;width:100%}.toolbar[data-v-49b03d10]{display:flex;flex-direction:column;justify-content:space-between;background:#fafad2;padding:12px;border:1px solid #00f;border-right:none;width:74px}.coder[data-v-49b03d10]{flex:1 1 0;padding-top:12px;border:1px solid #00f}[data-v-49b03d10] .CodeMirror-gutters{border-left:0}.btn[data-v-49b03d10],[data-v-49b03d10] .CodeMirror-linenumber{text-align:center}.btn[data-v-49b03d10]{display:block;width:50px;margin-bottom:12px}",""]),t.exports=e},1016:function(t,e,n){"use strict";n(882)},1017:function(t,e,n){(e=n(59)(!1)).push([t.i,'[data-v-5e3e19f5] .katex{font-size:1.18em}.probPanel[data-v-5e3e19f5]{max-width:800px;text-align:justify}.ptitle[data-v-5e3e19f5]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-5e3e19f5] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}[data-v-5e3e19f5] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e},1018:function(t,e,n){"use strict";n(883)},1019:function(t,e,n){(e=n(59)(!1)).push([t.i,'[data-v-7fd6f8f3] h1{color:#00f;font-family:"Arial";font-size:120%}[data-v-7fd6f8f3] h2{color:#ff4500;font-size:80%;margin:12px 0;text-decoration:underline}[data-v-7fd6f8f3] code{color:#222;font-family:"monospace",Courier;font-size:75%}',""]),t.exports=e},1020:function(t,e,n){"use strict";n(884)},1021:function(t,e,n){(e=n(59)(!1)).push([t.i,'.ptitle[data-v-24fbed74]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-24fbed74] mark{background:#ff0;padding:0}.probPanel[data-v-24fbed74]{padding:0 10px}.item[data-v-24fbed74]{margin-bottom:20px}.label[data-v-24fbed74]{width:120px;color:#00f}.label[data-v-24fbed74],.pseg[data-v-24fbed74]{display:inline-block}.pseg[data-v-24fbed74]{color:red}.sample[data-v-24fbed74],.status[data-v-24fbed74]{color:#000}.sample[data-v-24fbed74]{background:#eee;padding:6px 6px 6px 12px;font-family:"Courier New",Courier,monospace}',""]),t.exports=e},852:function(t,e,n){"use strict";n.r(e);n(11),n(362),n(7),n(26),n(45),n(54);var o=n(14),r=n(0),l=(n(863),{props:{value:String,height:{type:Number,default:500},submit:{type:Function,default:null},judging:{type:Boolean,default:!1},lang:{type:String,default:"c"},langs:{type:String,default:"c, cpp, py"},lineNumbers:{type:Boolean,default:!0},channel:{type:String,default:"None"}},data:function(){var t;return t={cm:null,judgable:!1,cmlang:"c",cmlangs:["c","cpp","py"],cmstyle:{"font-size":"100%"},cmfontsize:100},Object(r.a)(t,"cm",null),Object(r.a)(t,"cmcode",null),Object(r.a)(t,"cmOption",{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!1,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}),t},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.cmcode=t.value,t.cmlang=t.lang,t.cmOption.lineNumbers=t.lineNumbers,""==t.langs?t.cmlangs=[t.lang]:(console.log("LANGS",t.langs),t.cmlangs=t.langs.split(",").map((function(t){return t.trim()}))),t.cm.focus();case 5:case"end":return e.stop()}}),e)})))()},methods:{langLabel:function(t){return"c"==t||"C"==t?"C":"c++"==t||"C++"==t||"cpp"==t||"CPP"==t||"cc"==t?"C++":"py"==t||"PY"==t?"PY":void 0},setLang:function(t){this.cmlang=t,"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),this.$refs.coder.codemirror.focus(),this.$emit("langChanged",t)},cinput:function(t){this.$emit("input",t)},incfont:function(){this.cmfontsize+=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},decfont:function(){this.cmfontsize-=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},resetfont:function(){this.cmfontsize=100,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},onCmReady:function(t){this.cm=t,t.setSize(null,this.height)}},watch:{value:function(t){this.cmcode=t,this.cm.focus()},height:function(t){this.cm.setSize(null,t)}}}),c=(n(1014),n(70)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"col-container"},[n("div",{staticClass:"toolbar"},[n("div",[t.submit?n("b-button",{attrs:{size:"sm",variant:"outline-primary",disabled:t.judging||"None"==t.channel},on:{click:t.submit}},[n("b-icon",{attrs:{icon:"check2"}})],1):t._e(),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.incfont}},[t._v("＋")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.resetfont}},[t._v("◯")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.decfont}},[t._v("－")])],1),t._v(" "),n("div",t._l(t.cmlangs,(function(e,o){return n("b-button",{key:o,attrs:{size:"sm",variant:e==t.cmlang?"primary":"outline-primary"},on:{click:function(n){return t.setLang(e)}}},[t._v(t._s(t.langLabel(e)))])})),1),t._v(" "),t.submit?n("div",["None"!=t.channel?n("span",{staticClass:"conn"},[t._v(t._s(t.channel))]):n("span",[n("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)]):t._e()]),t._v(" "),n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)])}),[],!1,null,"49b03d10",null);e.default=component.exports},853:function(t,e,n){"use strict";n.r(e);n(228),n(363),n(850);var o={props:{problem:Object},data:function(){return{title:"Error",description:"If you see this message, then the problem format is invalid."}},created:function(){var t=this.$store.state.user.locale;t&&this.problem.title&&this.problem.title[t]?this.title=this.problem.title[t]:this.problem.title&&this.problem.title.zh?this.title=this.problem.title.zh:this.problem.title&&this.problem.title.en?this.title=this.problem.title.en:this.problem.title&&(this.title=this.problem.title),t&&this.problem.description&&this.problem.description[t]?this.description=this.problem.description[t]:this.problem.description&&this.problem.description.zh?this.description=this.problem.description.zh:this.problem.description&&this.problem.description.en?this.description=this.problem.description.en:this.problem.description&&(this.description=this.problem.description)}},r=(n(1016),n(70)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"probPanel"},[e("p",{staticClass:"ptitle"},[this._v(this._s(this.title))]),this._v(" "),e("p",{domProps:{innerHTML:this._s(this.$md.render(this.description))}})])}),[],!1,null,"5e3e19f5",null);e.default=component.exports},854:function(t,e,n){"use strict";n.r(e);n(54);var o=n(14),r={data:function(){return{refcontents:"You should not see this",localeText:{CCheet_Title:"目前尚未有評判結果"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"en"!=(n=t.$store.state.user.locale)&&(n="zh"),e.next=4,t.$content(n+"/ccheetsheet").fetch();case 4:t.refcontents=e.sent;case 5:case"end":return e.stop()}}),e)})))()}},l=(n(1018),n(70)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-content",{attrs:{document:this.refcontents}})],1)}),[],!1,null,"7fd6f8f3",null);e.default=component.exports},855:function(t,e,n){"use strict";n.r(e);n(12),n(18),n(7),n(157),n(20),n(26),n(15);var o=n(0),r=n(226),l=n(79);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{result:Object,showTime:{type:Boolean,default:!1},showMemory:{type:Boolean,default:!1}},data:function(){return{localeText:{SR_NoResult:"目前尚未有評判結果",SR_Results:"執行結果",SR_Score:"程式得分",SR_UseTime:"使用時間",SR_UseMemory:"使用記憶體",SR_Bytes:"位元組",SR_SampleInput:"輸入範例",SR_CorrectOutput:"正確輸出",SR_ProgramCoutput:"程式輸出",SR_StyleCheck:"風格檢查",SR_StyleCheckOK:"格式良好",SR_Response:"編譯訊息",SR_RunStatus_CE:"編譯錯誤",SR_RunStatus_AC:"正確",SR_RunStatus_PC:"部份正確",SR_RunStatus_PE:"排版錯誤",SR_RunStatus_WA:"錯誤",SR_RunStatus_TLE:"超過時間限制",SR_RunStatus_OLE:"超過輸出限制",SR_RunStatus_MLE:"超過記憶體限制",SR_RunStatus_RE:"執行時期錯誤"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({showWrongCase:function(){return"WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus},showStyleCheck:function(){return"NA"!=this.result.StyleCheck&&"N/A"!=this.result.StyleCheck&&("WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus)},styleResult:function(){return""==this.result.StyleCheck?this.localeText.SR_StyleCheckOK:this.result.StyleCheck}},Object(l.b)({user:function(t){return t.user},locale:function(t){return t.user.locale},system:function(t){return t.system}})),created:function(){this.system.locales&&this.locale in this.system.locales.support&&(this.localeText=r.a.updateParams(this.system.locales[this.locale],this.localeText))},methods:{inputStr:function(t){return t.replace(/^\s*\n/gm,"")},outputStr:function(t){var e=/^(\s+)(.*)$/,n=/^(.*)(\s+)$/,o=t.split("\n"),r=[];return o.forEach((function(line){var t=line,o=t.match(e);o&&(t="<mark>"+o[1]+"</mark>"+o[2]),(o=t.match(n))&&(t=o[1]+"<mark>"+o[2]+"</mark>"),r.push(t)})),r.join("<mark>⏎</mark>\n")},statusResult:function(t){var e="("+t.RunStatus+") ";return"AC"==t.RunStatus?e+this.localeText.SR_RunStatus_AC:"CE"===t.RunStatus?e+this.localeText.SR_RunStatus_CE:"NA"===t.RunStatus?e+this.localeText.SR_RunStatus_PC:"PE"===t.RunStatus?e+this.localeText.SR_RunStatus_PE:"WA"===t.RunStatus?e+this.localeText.SR_RunStatus_WA:"TLE"===t.RunStatus?e+this.localeText.SR_RunStatus_TLE:"OLE"===t.RunStatus?e+this.localeText.SR_RunStatus_OLE:"MLE"===t.RunStatus?e+this.localeText.SR_RunStatus_MLE:"RE"===t.RunStatus?e+this.localeText.SR_RunStatus_RE:e}}},f=(n(1020),n(70)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.result?n("div",{staticClass:"probPanel"},[n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Results))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.statusResult(t.result)))])]),t._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Score))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Score))])]),t._v(" "),t.showTime?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseTime))]),t._v(" "),n("span",{staticClass:"status"},[t._v("\n                CPU: "+t._s(t.result.CPUTime)+"ms / Real:\n                "+t._s(t.result.RealTime)+"ms\n            ")])]):t._e(),t._v(" "),t.showMemory?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseMemory))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Memory)+" "+t._s(t.localeText.SR_Bytes))])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.showWrongCase?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_SampleInput))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.inputStr(t.result.WrongCase.input)))]),t._v(" "),n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_CorrectOutput)+" \n                ("+t._s(t.result.WrongCase.answer.length)+" "+t._s(t.localeText.SR_Bytes)+")")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.answer))}}),t._v(" "),n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_ProgramCoutput)+"\n                ("+t._s(t.result.WrongCase.source.length)+" "+t._s(t.localeText.SR_Bytes)+")")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.source))}})]):t._e(),t._v(" "),"CE"==t.result.RunStatus?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_Response))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.result.Response))])]):t._e(),t._v(" "),t.showStyleCheck?n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v(t._s(t.localeText.SR_StyleCheck))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.styleResult))])]):t._e()]):n("div",{staticClass:"ptitle"},[t._v("\n        "+t._s(t.localeText.SR_NoResult)+"\n    ")])])}),[],!1,null,"24fbed74",null);e.default=component.exports},881:function(t,e,n){var content=n(1015);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("03294fac",content,!0,{sourceMap:!1})},882:function(t,e,n){var content=n(1017);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1f638b4a",content,!0,{sourceMap:!1})},883:function(t,e,n){var content=n(1019);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("7f3a2107",content,!0,{sourceMap:!1})},884:function(t,e,n){var content=n(1021);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1eb46aea",content,!0,{sourceMap:!1})}}]);