(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1032:function(t,e,n){"use strict";n(892)},1033:function(t,e,n){(e=n(59)(!1)).push([t.i,".conn[data-v-48481dd8]{display:block;background:green;color:#fff;text-align:center;line-height:50px;height:50px;border-radius:25px}.col-container[data-v-48481dd8]{display:flex;width:100%}.toolbar[data-v-48481dd8]{display:flex;flex-direction:column;justify-content:space-between;background:#fafad2;padding:12px;border:1px solid #00f;border-right:none;width:74px}.coder[data-v-48481dd8]{flex:1 1 0;padding-top:12px;border:1px solid #00f}[data-v-48481dd8] .CodeMirror-gutters{border-left:0}.btn[data-v-48481dd8],[data-v-48481dd8] .CodeMirror-linenumber{text-align:center}.btn[data-v-48481dd8]{display:block;width:50px;margin-bottom:12px}",""]),t.exports=e},1034:function(t,e,n){"use strict";n(893)},1035:function(t,e,n){(e=n(59)(!1)).push([t.i,'[data-v-16092181] .katex{font-size:1.18em}.probPanel[data-v-16092181]{max-width:800px;text-align:justify}.ptitle[data-v-16092181]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-16092181] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}[data-v-16092181] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e},1036:function(t,e,n){"use strict";n(894)},1037:function(t,e,n){(e=n(59)(!1)).push([t.i,'[data-v-20a05654] h1{color:#00f;font-family:"Arial";font-size:120%}[data-v-20a05654] h2{color:#ff4500;font-size:80%;margin:12px 0;text-decoration:underline}[data-v-20a05654] code{color:#222;font-family:"monospace",Courier;font-size:75%}',""]),t.exports=e},1038:function(t,e,n){"use strict";n(895)},1039:function(t,e,n){(e=n(59)(!1)).push([t.i,'.ptitle[data-v-448f3e35]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-448f3e35] mark{background:#ff0;padding:0}.probPanel[data-v-448f3e35]{padding:0 10px}.item[data-v-448f3e35]{margin-bottom:20px}.label[data-v-448f3e35]{width:120px;color:#00f}.label[data-v-448f3e35],.pseg[data-v-448f3e35]{display:inline-block}.pseg[data-v-448f3e35]{color:red}.sample[data-v-448f3e35],.status[data-v-448f3e35]{color:#000}.sample[data-v-448f3e35]{background:#eee;padding:6px 6px 6px 12px;font-family:"Courier New",Courier,monospace}',""]),t.exports=e},1040:function(t,e,n){"use strict";n(896)},1041:function(t,e,n){(e=n(59)(!1)).push([t.i,".rightBox[data-v-281f9fcb]{position:absolute;right:24px;top:20px;color:red}.tabs[data-v-281f9fcb]{margin-right:60px}.container-fluid[data-v-281f9fcb]{margin:16px;position:relative}",""]),t.exports=e},1079:function(t,e,n){"use strict";n.r(e);n(22),n(156),n(30),n(54);var r=n(10),o=n(840),c=n(906),l=n(34),d={components:{ProblemSolver:c.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=n.state.params.probSet,e.abrupt("return",{probSet:r});case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{submitid:"",submitList:null,problem:null,baseProblems:null,demo:!1,pgKey:"Coding",lang:"c",langs:"c,cpp,py",initCode:"",lastcode:{},localeText:{Coding_Problem:"問題",Coding_Code:"程式",Coding_Result:"結果",Coding_Reference:"參考"}}},computed:{teaching:function(){var t=this.$user("role");return console.log("role",t),"teacher"==t||"assistant"==t}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.problem=o.a.decode(this.pgKey,this.probSet.problem),this.probSet.initCode&&(this.initCode=this.probSet.initCode.code,this.lang=this.probSet.initCode.lang,this.lastcode={sourceLang:this.lang,sourceCode:this.initCode})},methods:{getBaseProblems:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.baseProblems){e.next=5;break}return e.next=3,l.d.collection("problems").doc("BASE").get();case 3:n=e.sent,t.baseProblems=n.data();case 5:case"end":return e.stop()}}),e)})))()},doSubmit:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("S",t),e.problem=t.problem,e.lang=t.lang,e.initCode="",e.$nextTick((function(){e.initCode=t.code})),e.demo=!0;case 6:case"end":return n.stop()}}),n)})))()},searchSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,d,f,m,i,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.submitid.length)<4)){e.next=4;break}return alert("Code should have 4 chars!"),e.abrupt("return");case 4:return r=t.submitid.charCodeAt(n-1),o=t.submitid.substr(0,n-1)+String.fromCharCode(r+1),e.next=8,l.d.collection("submits").where(l.b.firestore.FieldPath.documentId(),">",t.submitid).where(l.b.firestore.FieldPath.documentId(),"<",o).get();case 8:if(!(c=e.sent).empty){e.next=12;break}return alert("No Match Results!"),e.abrupt("return");case 12:return d=c.docs,e.next=15,t.getBaseProblems();case 15:if(1!=d.length){e.next=20;break}return(f=d[0].data()).problem=t.baseProblems[f.pid],t.doSubmit(f),e.abrupt("return");case 20:m=[],i=0;case 22:if(!(i<d.length)){e.next=33;break}return(h=d[i].data()).problem=t.baseProblems[h.pid],e.next=27,l.d.collection("users").doc(h.uid).get();case 27:v=e.sent,h.user=v.data(),m.push(h);case 30:i++,e.next=22;break;case 33:t.submitList=m;case 34:case"end":return e.stop()}}),e)})))()},submit:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,d,f,m,h,v,_,S,x,C,R,y,k,i,T,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.cdata,c=t.result,r.sourceLang==e.lastcode.sourceLang&&r.sourceCode==e.lastcode.sourceCode){n.next=46;break}if(e.lastcode={sourceLang:r.sourceLang,sourceCode:r.sourceCode},d={uid:e.$user("id"),pid:e.problem.id,created:o.a.getNow(),lang:r.sourceLang,code:r.sourceCode,status:c.RunStatus,score:c.Score},!e.demo){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,l.d.collection("submits").add(d);case 8:return f=n.sent,d.id=f.id,m=e.$user("id"),n.next=13,l.d.collection("users").doc(m).get();case 13:return h=n.sent,(v=h.data()).id=m,e.$store.commit("setData",{name:"user",value:v}),(_=e.$user("courses")?e.$copyObject(e.$user("courses")):{})[e.probSet.courseID]&&_[e.probSet.courseID].units||(_[e.probSet.courseID]={name:e.probSet.courseName,units:{}}),_[e.probSet.courseID].units[e.probSet.courseUnit]||(_[e.probSet.courseID].units[e.probSet.courseUnit]={score:0,TS:0,TP:0,probs:{}}),S=_[e.probSet.courseID].units[e.probSet.courseUnit],(x=S.probs[d.pid])?C=e.$copyObject(x):(C={title:e.problem.title,TS:0,TP:0,score:0,last5:[]},S.probs[d.pid]=C),S.TS+=1,C.TS+=1,"AC"==d.status&&(S.TP+=1,C.TP+=1),!e.probSet.practice&&d.score>C.score&&(S.score+=d.score-C.score,C.score=d.score),C.last5.splice(0,0,d.id),C.last5.length>5&&(C.last5=C.last5.slice(0,5)),S.probs[d.pid]=C,n.next=32,l.d.collection("users").doc(e.$user("id")).update({courses:_,updated:o.a.getNow()});case 32:if(e.$store.commit("setObjItem",{obj:"user",name:"courses",value:_}),!e.probSet.practice){n.next=35;break}return n.abrupt("return");case 35:for(R=e.probSet.courseQN||3,y="queue"+(1+Math.floor(Math.random()*R)),k="P_"+o.a.getNow(),i=0;i<3;i++)k+=Math.floor(10*Math.random());return k+="_"+e.problem.id,(T={})[k]="AC"==d.status?1:0,w=e.$user(),T["S_"+w.id]={name:w.name,stdID:w.stdID,score:!0},n.next=46,l.d.collection("courses").doc(e.probSet.courseID).collection("tasks").doc(y).update(T);case 46:case"end":return n.stop()}}),n)})))()}}},f=(n(1040),n(70)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[t.teaching?n("p",{staticClass:"rightBox"},[n("span",{staticClass:"mr-2"},[t._v("Search:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.submitid,expression:"submitid"}],attrs:{size:"sm"},domProps:{value:t.submitid},on:{input:function(e){e.target.composing||(t.submitid=e.target.value)}}}),t._v(" "),n("button",{attrs:{size:"sm"},on:{click:t.searchSubmit}},[t._v("Search")])]):t._e(),t._v(" "),n("b-modal",{model:{value:t.submitList,callback:function(e){t.submitList=e},expression:"submitList"}},[n("p",{staticClass:"my-3"},[t._v("Which one?")]),t._v(" "),t._l(t.submitList,(function(e,r){return n("p",{key:e.id},[t._v("\n            "+t._s(r+1)+". "+t._s(e.user.name)+" - "+t._s(t.$selectUserLocaleText(e.problem.title))+"\n        ")])}))],2),t._v(" "),n("problem-solver",{attrs:{problem:t.problem,initCode:t.initCode,lang:t.lang,langs:t.langs},on:{submit:t.submit}})],1)}),[],!1,null,"281f9fcb",null);e.default=component.exports;installComponents(component,{ProblemSolver:n(906).default})},840:function(t,e,n){"use strict";n(9),n(14),n(22),n(103),n(8),n(841),n(27),n(15);var r=n(227),o=n.n(r),c={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},864:function(t,e,n){"use strict";n(39),n(28),n(8),n(20),n(27),n(49);var r=n(875),o=n.n(r),c={checkServer:function(t){return new Promise((function(e,n){var r="ws://",c=t.http;"https:"==document.location.protocol&&(c=t.https,r="wss://");var l=c.length,d=100,f=null,m=0,h=!1;window.setTimeout((function(){return h=!0}),2e3);for(var v=[],_=function(i){var t=r+c[i],_=t+"/submit",S=Math.random(),x=new o.a(_,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return S}});x.open().then((function(){return x.sendRequest({content:"HELLO:"+c[i]},{requestId:S})})).then((function(r){var o=r.split("#"),_=parseInt(o[1],10);if(v.push({server:c[i],busy:_}),_<d)d=_,f=t;else if(_===d){Math.random()<.4&&(f=t)}if(m++,h||m===l||3===m)return d<99?void e({best:{channel:f+"/submit",busy:d},available:v}):void n("Judger not available!")})).catch((function(t){if(console.log("Error",t),m++,h||m===l||3===m)return d<99?void e({best:{channel:f+"/submit",busy:d},available:v}):void n("Judger not available!")}))},i=0;i<l;i++)_(i)}))},judgeFunctest:function(t,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(e,n){if(t){var r=Math.random(),c=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return r}});c.open().then((function(){return c.sendRequest({content:content},{requestId:r})})).then((function(t){try{var r=JSON.parse(t).RunStatus;if(r.indexOf('["AC"]')>=0)return void e("AC");if(r.indexOf("Wrong")>=0){var o=r.replace(/\\n/g,"\n");return o=(o=o.replace('["',"")).replace('"]',""),void e(o)}return void e(r)}catch(t){return console.log("Error:",t),void n(t)}})).catch((function(t){console.log("Error:",t),n(t)}))}else n("Null judger.")}))},judgeProgtest:function(t,e){var n=Math.random();return new Promise((function(r,c){if(t){var l=new o.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return n}});l.open().then((function(){return l.sendRequest({content:e},{requestId:n})})).then((function(t){try{return void r(JSON.parse(t))}catch(t){return console.log("Error:",t),void c(t)}})).catch((function(t){console.log("Error:",t),c(t)}))}else c("Null judger.")}))}};e.a=c},892:function(t,e,n){var content=n(1033);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("25645180",content,!0,{sourceMap:!1})},893:function(t,e,n){var content=n(1035);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("ab19d1d2",content,!0,{sourceMap:!1})},894:function(t,e,n){var content=n(1037);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("aff8d60c",content,!0,{sourceMap:!1})},895:function(t,e,n){var content=n(1039);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("09de0673",content,!0,{sourceMap:!1})},896:function(t,e,n){var content=n(1041);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("db74da4e",content,!0,{sourceMap:!1})},906:function(t,e,n){"use strict";n.r(e);n(362),n(54);var r=n(10),o=n(0),c=n(908),l=n(909),d=n(910),f=n(911),m=n(864),h={props:{problem:Object,showRef:{type:Boolean,default:!0},stylePoints:{type:Number,default:0},lang:{type:String,default:"c"},langs:{type:String,default:"c,cpp,py"},initCode:{type:String,default:""}},data:function(){var t;return t={infoAlert:!1,info:{title:"",message:""},tabIndex:0,mycode:"",chnlabel:"X",srclang:"c",judging:!1,channel:null},Object(o.a)(t,"chnlabel",null),Object(o.a)(t,"result",null),Object(o.a)(t,"localeText",{Coding_Problem:"問題",Coding_Code:"程式",Coding_Result:"結果",Coding_Reference:"參考",Coding_CodeTooShort:"程式碼太短"}),t},components:{CodePanel:c.default,SubmitResult:f.default,Question:l.default,CCheetSheet:d.default},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initCode&&(this.mycode=this.initCode),this.srclang=this.lang},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.$system("setting"))&&n.judgers&&m.a.checkServer(n.judgers).then((function(e){t.channel=e.best.channel;var n=t.channel.toUpperCase();"WSS"===n.substr(0,3)?t.chnlabel=n.substr(6,1):t.chnlabel=n.substr(5,1)}));case 2:case"end":return e.stop()}}),e)})))()},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.judging&&t.channel){e.next=2;break}return e.abrupt("return");case 2:if(!(t.mycode.length<5)){e.next=6;break}return t.info={title:t.localeText.Coding_Code,message:t.localeText.Coding_CodeTooShort},t.infoAlert=!0,e.abrupt("return");case 6:return t.judging=!0,n={answerCode:t.problem.answerCode,answerLang:t.problem.answerLang,dataCode:t.problem.dataCode,dataLang:t.problem.dataLang,sourceCode:t.mycode,sourceLang:t.srclang,testMode:t.problem.testMode,cmpMode:t.problem.cmpMode,timeLimit:t.problem.timeLimit,memoryLimit:t.problem.memoryLimit,outputLimit:t.problem.outputLimit},e.prev=8,e.next=11,m.a.judgeProgtest(t.channel,n);case 11:t.result=e.sent,t.tabIndex=2,t.judging=!1,r={cdata:n,result:t.result},t.$emit("submit",r),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(8),t.judging=!1,console.log("Judge Error:",e.t0);case 22:case"end":return e.stop()}}),e,null,[[8,18]])})))()}},watch:{initCode:function(t){this.mycode=t},lang:function(t){this.srclang=t}}},v=n(70),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message)+"\n    ")]),t._v(" "),n("b-tabs",{attrs:{card:""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("b-tab",{attrs:{title:t.localeText.Coding_Problem}},[n("Question",{attrs:{problem:t.problem}})],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Coding_Code}},[n("CodePanel",{attrs:{height:600,submit:t.submit,judging:t.judging,lang:t.lang,langs:t.langs,channel:t.chnlabel},on:{langChanged:function(e){t.srclang=e}},model:{value:t.mycode,callback:function(e){t.mycode=e},expression:"mycode"}})],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Coding_Result}},[n("SubmitResult",{attrs:{result:t.result}})],1),t._v(" "),t.showRef?n("b-tab",{attrs:{title:t.localeText.Coding_Reference}},[n("CCheetSheet")],1):t._e()],1)],1)}),[],!1,null,"cb7b0f20",null);e.default=component.exports;installComponents(component,{Question:n(909).default,CodePanel:n(908).default,SubmitResult:n(911).default,CCheetSheet:n(910).default})},908:function(t,e,n){"use strict";n.r(e);n(12),n(362),n(8),n(27),n(46),n(54);var r=n(10),o=n(0),c=(n(873),{props:{value:String,height:{type:Number,default:500},submit:{type:Function,default:null},judging:{type:Boolean,default:!1},lang:{type:String,default:"c"},langs:{type:String,default:"c, cpp, py"},lineNumbers:{type:Boolean,default:!0},channel:{type:String,default:"None"}},data:function(){var t;return t={cm:null,judgable:!1,cmlang:"c",cmlangs:["c","cpp","py"],cmstyle:{"font-size":"100%"},cmfontsize:100},Object(o.a)(t,"cm",null),Object(o.a)(t,"cmcode",null),Object(o.a)(t,"cmOption",{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!1,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}),t},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.cmcode=t.value,t.cmlang=t.lang,t.cmOption.lineNumbers=t.lineNumbers,""==t.langs?t.cmlangs=[t.lang]:t.cmlangs=t.langs.split(",").map((function(t){return t.trim()})),t.cm.focus();case 5:case"end":return e.stop()}}),e)})))()},methods:{langLabel:function(t){return"c"==t||"C"==t?"C":"c++"==t||"C++"==t||"cpp"==t||"CPP"==t||"cc"==t?"C++":"py"==t||"PY"==t?"PY":void 0},setLang:function(t){this.cmlang=t,"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),this.$refs.coder.codemirror.focus(),this.$emit("langChanged",t)},cinput:function(t){this.$emit("input",t)},incfont:function(){this.cmfontsize+=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},decfont:function(){this.cmfontsize-=10,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},resetfont:function(){this.cmfontsize=100,this.cmstyle={"font-size":"".concat(this.cmfontsize,"%")}},onCmReady:function(t){this.cm=t,t.setSize(null,this.height)}},watch:{value:function(t){this.cmcode=t,this.cm.focus()},height:function(t){this.cm.setSize(null,t)}}}),l=(n(1032),n(70)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"col-container"},[n("div",{staticClass:"toolbar"},[n("div",[t.submit?n("b-button",{attrs:{size:"sm",variant:"outline-primary",disabled:t.judging||"None"==t.channel},on:{click:t.submit}},[n("b-icon",{attrs:{icon:"check2"}})],1):t._e(),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.incfont}},[t._v("＋")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.resetfont}},[t._v("◯")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.decfont}},[t._v("－")])],1),t._v(" "),n("div",t._l(t.cmlangs,(function(e,r){return n("b-button",{key:r,attrs:{size:"sm",variant:e==t.cmlang?"primary":"outline-primary"},on:{click:function(n){return t.setLang(e)}}},[t._v(t._s(t.langLabel(e)))])})),1),t._v(" "),t.submit?n("div",["None"!=t.channel?n("span",{staticClass:"conn"},[t._v(t._s(t.channel))]):n("span",[n("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)]):t._e()]),t._v(" "),n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)])}),[],!1,null,"48481dd8",null);e.default=component.exports},909:function(t,e,n){"use strict";n.r(e);n(229),n(364),n(8),n(20),n(850);var r={props:{problem:Object},computed:{desc:function(){return this.$selectUserLocaleText(this.problem.description).replace(/\\n/g,"⏎")}}},o=(n(1034),n(70)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"probPanel"},[n("p",{staticClass:"ptitle"},[t._v(t._s(t.$selectUserLocaleText(t.problem.title)))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$md.render(t.desc))}})])}),[],!1,null,"16092181",null);e.default=component.exports},910:function(t,e,n){"use strict";n.r(e);n(54);var r=n(10),o={data:function(){return{refcontents:"You should not see this",localeText:{CCheet_Title:"目前尚未有評判結果"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("en"!=t.$locale){e.next=6;break}return e.next=3,t.$content("en/ccheetsheet").fetch();case 3:t.refcontents=e.sent,e.next=9;break;case 6:return e.next=8,t.$content("zh/ccheetsheet").fetch();case 8:t.refcontents=e.sent;case 9:case"end":return e.stop()}}),e)})))()}},c=(n(1036),n(70)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-content",{attrs:{document:this.refcontents}})],1)}),[],!1,null,"20a05654",null);e.default=component.exports},911:function(t,e,n){"use strict";n.r(e);n(14),n(18),n(8),n(157),n(20),n(27),n(15);var r={props:{result:Object,showTime:{type:Boolean,default:!1},showMemory:{type:Boolean,default:!1}},data:function(){return{localeText:{SR_NoResult:"目前尚未有評判結果",SR_Results:"執行結果",SR_Score:"程式得分",SR_UseTime:"使用時間",SR_UseMemory:"使用記憶體",SR_Bytes:"位元組",SR_SampleInput:"輸入範例",SR_CorrectOutput:"正確輸出",SR_ProgramCoutput:"程式輸出",SR_StyleCheck:"風格檢查",SR_StyleCheckOK:"格式良好",SR_Response:"錯誤訊息",SR_RunStatus_CE:"編譯錯誤",SR_RunStatus_AC:"正確",SR_RunStatus_PC:"部份正確",SR_RunStatus_PE:"排版錯誤",SR_RunStatus_WA:"錯誤",SR_RunStatus_TLE:"超過時間限制",SR_RunStatus_OLE:"超過輸出限制",SR_RunStatus_MLE:"超過記憶體限制",SR_RunStatus_RE:"執行時期錯誤"}}},computed:{showWrongCase:function(){return"WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus},showStyleCheck:function(){return"NA"!=this.result.StyleCheck&&"N/A"!=this.result.StyleCheck&&("WA"==this.result.RunStatus||"NA"==this.result.RunStatus||"PE"==this.result.RunStatus)},styleResult:function(){return""==this.result.StyleCheck?this.localeText.SR_StyleCheckOK:this.result.StyleCheck}},created:function(){this.localeText=this.$updateLocaleText(this.localeText)},methods:{inputStr:function(t){return t.replace(/^\s*\n/gm,"")},outputStr:function(t){var e=/^(\s+)(.*)$/,n=/^(.*)(\s+)$/,r=t.split("\n"),o=[];return r.forEach((function(line){var t=line,r=t.match(e);r&&(t="<mark>"+r[1]+"</mark>"+r[2]),(r=t.match(n))&&(t=r[1]+"<mark>"+r[2]+"</mark>"),o.push(t)})),o.join("<mark>⏎</mark>\n")},statusResult:function(t){var e="("+t.RunStatus+") ";return"AC"==t.RunStatus?e+this.localeText.SR_RunStatus_AC:"CE"===t.RunStatus?e+this.localeText.SR_RunStatus_CE:"NA"===t.RunStatus?e+this.localeText.SR_RunStatus_PC:"PE"===t.RunStatus?e+this.localeText.SR_RunStatus_PE:"WA"===t.RunStatus?e+this.localeText.SR_RunStatus_WA:"TLE"===t.RunStatus?e+this.localeText.SR_RunStatus_TLE:"OLE"===t.RunStatus?e+this.localeText.SR_RunStatus_OLE:"MLE"===t.RunStatus?e+this.localeText.SR_RunStatus_MLE:"RE"===t.RunStatus?e+this.localeText.SR_RunStatus_RE:e}}},o=(n(1038),n(70)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.result?n("div",{staticClass:"probPanel"},[n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Results))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.statusResult(t.result)))])]),t._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_Score))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Score))])]),t._v(" "),t.showTime?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseTime))]),t._v(" "),n("span",{staticClass:"status"},[t._v("\n                CPU: "+t._s(t.result.CPUTime)+"ms / Real:\n                "+t._s(t.result.RealTime)+"ms\n            ")])]):t._e(),t._v(" "),t.showMemory?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v(t._s(t.localeText.SR_UseMemory))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(t.result.Memory)+" "+t._s(t.localeText.SR_Bytes))])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.showWrongCase?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_SampleInput))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.inputStr(t.result.WrongCase.input)))]),t._v(" "),n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_CorrectOutput)+" \n                ("+t._s(t.result.WrongCase.answer.length)+" "+t._s(t.localeText.SR_Bytes)+")")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.answer))}}),t._v(" "),n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_ProgramCoutput)+"\n                ("+t._s(t.result.WrongCase.source.length)+" "+t._s(t.localeText.SR_Bytes)+")")]),t._v(" "),n("pre",{staticClass:"sample",domProps:{innerHTML:t._s(t.outputStr(t.result.WrongCase.source))}})]):t._e(),t._v(" "),t.result.Response&&""!=t.result.Response?n("div",{staticClass:"item"},[n("div",{staticClass:"pseg"},[t._v(t._s(t.localeText.SR_Response))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.result.Response))])]):t._e(),t._v(" "),t.showStyleCheck?n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v(t._s(t.localeText.SR_StyleCheck))]),t._v(" "),n("pre",{staticClass:"sample"},[t._v(t._s(t.styleResult))])]):t._e()]):n("div",{staticClass:"ptitle"},[t._v("\n        "+t._s(t.localeText.SR_NoResult)+"\n    ")])])}),[],!1,null,"448f3e35",null);e.default=component.exports}}]);