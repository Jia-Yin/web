(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{452:function(t,e,n){var content=n(541);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("c50da636",content,!0,{sourceMap:!1})},540:function(t,e,n){"use strict";var o=n(452);n.n(o).a},541:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".container-fluid[data-v-d0527d8e]{padding:0}.btn[data-v-d0527d8e]{margin-right:12px}.timeLeft[data-v-d0527d8e]{color:#ff0}.ptitle[data-v-d0527d8e]{padding:3px;background:#00f;color:#fff;margin:12px 0 6px;text-align:center}.pseg[data-v-d0527d8e]{display:inline-block;margin-top:8px;background:orange;color:#00f;padding:3px}.psample[data-v-d0527d8e]{margin:6px 0;width:100%;overflow:auto;background:#eee;color:#000;padding:3px 8px;font-family:Courier New,Courier,monospace}label[data-v-d0527d8e]{color:#fff}.container[data-v-d0527d8e]{width:100%;margin:0 auto;padding:50px 0;text-align:left}.navbar-text[data-v-d0527d8e]{color:#ffb6c1}.probPanel[data-v-d0527d8e]{padding:0 10px}.alert[data-v-d0527d8e]{position:fixed;left:0;top:0;text-align:center;width:100%;height:70px}",""])},577:function(t,e,n){"use strict";n.r(e);n(7),n(4),n(3),n(2),n(5),n(27),n(79),n(43);var o=n(10),r=(n(25),n(24),n(0)),c=n(11),l=n(64);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d,h,f,v,O,S={middleware:["authenticated"],layout:"codingLayout",data:function(){return{protocol:"",cmdlistener:null,datalistener:null,workmode:"user",styleMinus:0,stylePoints:3,servers:null,maxavail:0,trial:!1,status:"Connecting...",alertmsg:null,dismissCountDown:0,disabled:!1,timerHandle:null,spentTime:0,timerPause:!1,cmOptionSave:null,lastsubmit:null,langOptions:[{value:"c",text:"C"},{value:"cpp",text:"C++"},{value:"py",text:"Python 3"}],cmOption:{tabSize:3,indentUnit:3,styleActiveLine:!0,lineNumbers:!0,readOnly:!1,matchTags:!0,matchBrackets:!0,autoCloseBrackets:!0,indentWithTabs:!0,mode:"text/x-c++src",theme:"mdn-like",problemid:null,problem:{name:"載入中..."},tabidx:0,language:"c",code:"",cmstyle:{"font-size":"100%"},cmfontsize:100,info:{RunStatus:"Not Available",StyleCheck:"N/A",ErrorCase:null}}}},mounted:function(){this.$store.state.user||this.$router.push("/login"),this.$store.state.person&&this.path&&this.path.problem||this.$router.push("/user"),this.checkServer(),this.cmOption.problemid=this.path.problem.id,this.loadProblem(this.cmOption.problemid)},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({user:function(t){return t.user},path:function(t){return t.person.path},savecodes:function(t){return t.person.savecodes}}),{broadcasting:function(){return"user"!==this.workmode},isAdmin:function(){return"admin"===this.$store.state.user.role},problemlabel:function(){var t="";return this.path.course&&(t+=this.path.course.name+" / "),this.path.group&&(t+=this.path.group.name+" / "),t+this.cmOption.problem.name},showTime:function(){var t=new Date(null);return t.setSeconds(this.spentTime),t.toISOString().substr(11,8)},statusResults:function(){var t=this.cmOption.info;return t&&t.RunStatus?(this.adminlog("Received:",t.RunStatus),"AC"===t.RunStatus?this.showJudge("正確",null):"NA"===t.RunStatus?this.showJudge("部份錯誤",t.ErrorCase):"PE"===t.RunStatus?this.showJudge("排版錯誤",t.ErrorCase):"WA"===t.RunStatus?this.showJudge("錯誤",t.ErrorCase):"TLE"===this.cmOption.info.RunStatus?"超過時間限制":"OLE"===this.cmOption.info.RunStatus?"超過輸出限制":"MLE"===this.cmOption.info.RunStatus?"超過記憶體限制":"RE"===this.cmOption.info.RunStatus?"執行時期錯誤":this.cmOption.info.RunStatus):"N/A"},styleResults:function(){if(!this.cmOption.info||!this.cmOption.info.StyleCheck)return"N/A";this.adminlog("STY COMEIN = ",this.cmOption.info.StyleCheck);var t=/(\d+:)\s*/gi,a=this.cmOption.info.StyleCheck.replace(t,"<li>L$1 ");t=/\n/gi;var e=a.replace(t,"</li>");return this.adminlog("STY = ",e),e},problemSampleInput:function(){if(this.cmOption.problem.samples){var t=JSON.parse(this.cmOption.problem.samples);return t[0]&&t[0].Input?t[0].Input:"N/A"}return"N/A"},problemSampleOutput:function(){if(this.cmOption.problem.samples){var t=JSON.parse(this.cmOption.problem.samples);return t[0]&&t[0].Output?t[0].Output:"N/A"}return"N/A"}}),methods:{onCmReady:function(t){t.setSize(null,800),this.adminlog("onCmReady",t)},startListener:function(){var t=this;this.cmdlistener=c.c.collection("comms").doc("cmd").onSnapshot((function(e){t.processCmd(e.data())})),this.datalistener=c.c.collection("comms").doc("data").onSnapshot((function(e){t.processData(e.data())})),this.timer()},changeLang:function(t){this.adminlog("LANGCHANG",t),this.cmOption.mode="py"==t?"text/x-python":"text/x-c++src"},showJudge:function(t,e){var n=t;if("AC"!=this.cmOption.info.RunStatus&&"NA"!=this.cmOption.info.RunStatus||(n+="，得"+(this.cmOption.info.Score+this.styleMinus)+"分，",this.styleMinus>0?n+="格式扣"+this.styleMinus+"分，\n總得分＝"+this.cmOption.info.Score:n+="格式良好，\n總得分＝"+this.cmOption.info.Score),e){var o=e.wrong.replace(/\n/g,"\\n\n"),r=e.right.replace(/\n/g,"\\n\n");n+="，錯誤範例如下\n",n+="\n輸入\n---------------\n".concat(e.input),n+="\n\n程式輸出 (ch=".concat(e.wrong.length,")\n---------------\n").concat(o),n+="\n\n正確輸出 (ch=".concat(e.right.length,")\n---------------\n").concat(r,"\n")}return n},countDownChanged:function(t){this.dismissCountDown=t},clearBroadcast:(O=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.workmode="user",this.adminlog("TBRCT","Clear"),t.next=4,c.c.collection("comms").doc("cmd").set({from:"admin",to:"all",cmd:"RESET"}).then((function(){e.adminlog("CMD","RESET"),e.workmode="user"})).catch((function(t){}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return O.apply(this,arguments)}),broadcast:(v=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.adminlog("TBRCT","Set"),this.cmOptionSave=null,t.next=4,c.c.collection("comms").doc("cmd").set({from:"admin",to:"all",cmd:"TBRCT"}).then((function(){e.adminlog("TBRCT","Written"),e.workmode="broadcast"})).catch((function(t){console.log("Write Error: ",t)}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),pdesc:function(t){if(!t)return"載入中...";var e=t.match(/(.*)(https?[:\/\.\?\=\w]+)(.*)/);return e?"".concat(e[1],'<a href="').concat(e[2],'" target="_blank">問題連結</a>').concat(e[3]):t.indexOf("\n")>=0?"<pre>"+t+"</pre>":t},processAdminCmd:function(t){},processUserCmd:function(t){var e=this;"admin"===t.from&&"all"===t.to&&"TBRCT"===t.cmd&&(this.timerPause=!0,this.cmOptionSave=JSON.parse(JSON.stringify(this.cmOption)),this.save(),this.workmode="follow",c.c.collection("comms").doc("data").get().then((function(t){e.cmOption=t.data()}))),"admin"===t.from&&"all"===t.to&&"TBRCT"!==t.cmd&&this.cmOptionSave&&(this.timerPause=!1,this.cmOption=JSON.parse(JSON.stringify(this.cmOptionSave)),this.workmode="user")},processCmd:function(t){this.adminlog("Prcess Cmd",t),this.adminlog("isAdmin",this.isAdmin),this.isAdmin?this.processAdminCmd(t):this.processUserCmd(t)},processData:function(data){data.readOnly=!0,"follow"==this.workmode&&(this.cmOption=data)},adminlog:function(t,e){this.isAdmin&&console.log(t,e)},incfont:function(){this.cmOption.cmfontsize+=10,this.cmOption.cmstyle={"font-size":"".concat(this.cmOption.cmfontsize,"%")}},decfont:function(){this.cmOption.cmfontsize-=10,this.cmOption.cmstyle={"font-size":"".concat(this.cmOption.cmfontsize,"%")}},resetfont:function(){this.cmOption.cmfontsize=100,this.cmOption.cmstyle={"font-size":"".concat(this.cmOption.cmfontsize,"%")}},loadProblem:(f=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this,t.prev=1,t.next=4,this.$store.dispatch("person/getProblem",e).then((function(t){if(n.adminlog("Pdata",t),n.cmOption.problem=t,n.cmOption.problem.timelimit=t.timelimit||1,n.cmOption.problem.memorylimit=t.memorylimit||1,t.answercode){var o=t.answercode.replace(/\\\\n/g,"@Q@Q@");o=(o=(o=(o=(o=(o=(o=o.replace(/\\n/g,"\n")).replace(/@Q@Q@/g,"\\n")).replace(/\\\\t/g,"##@@!")).replace(/\\t/g,"\t")).replace(/##@@!/g,"\\t")).replace(/\\"/g,'"')).replace(/\\'/g,"'"),n.cmOption.problem.answerCode=o}n.cmOption.tabidx=0,n.savecodes[e]?(n.cmOption.code=n.savecodes[e].code,n.cmOption.language=n.savecodes[e].lang):(n.cmOption.code="",n.cmOption.language="c"),n.timer()}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,this,[[1,6]])}))),function(t){return f.apply(this,arguments)}),checkServer:(h=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,this.$store.state.servers){t.next=4;break}return t.next=4,this.$store.dispatch("getServers").then((function(t){e.adminlog("Get SERVER RESULT:",t)})).catch((function(t){e.adminlog("Get SERVER ERROR:",t)}));case 4:for(n="ws://","https:"==document.location.protocol?(this.servers=this.$store.state.servers.https,n="wss://"):this.servers=this.$store.state.servers.http,o=this.servers.length,i=0;i<o;i++)r=n+this.servers[i],this.sendMessage(r,"HELLO"+i);case 8:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),cmDiff:function(){return!this.cmOptionSave||this.cmOption.code!=this.cmOptionSave.code||this.cmOption.tabidx!=this.cmOptionSave.tabidx||this.cmOption.language!=this.cmOptionSave.language||this.cmOption.cmfontsize!=this.cmOptionSave.cmfontsize||!this.cmOptionSave.info||this.cmOption.info.RunStatus!=this.cmOptionSave.info.RunStatus||this.cmOption.info.StyleCheck!=this.cmOptionSave.info.StyleCheck},timer:function(){var t=this,e=this;this.timerHandle=setInterval((function(){t.timerPause||e.spentTime++,t.isAdmin&&"broadcast"===t.workmode&&t.cmDiff()&&c.c.collection("comms").doc("data").set(t.cmOption).then((function(){e.cmOptionSave=JSON.parse(JSON.stringify(e.cmOption))}))}),1e3)},parseMessage:function(t){this.adminlog("To Parse: ",t);var data=JSON.parse(t.data);if("string"==typeof data&&"HELLO:"===data.substr(0,6)){var e=data.substr(6),n=e.indexOf(":");this.adminlog("SERVER NO = ",e.substr(0,n)),this.adminlog("NUMSTR = ",e.substr(n+1));var o=parseInt(e.substr(n+1),10);this.adminlog("NUM = ",o),o>this.maxavail&&(this.maxavail=o,this.protocol=t.origin,this.status="SRV-"+e.substr(0,n),this.adminlog("Choose Server:",this.protocol))}else try{this.cmOption.info=JSON.parse(t.data);var r=this.cmOption.info.RunStatus;if(r.indexOf("error")>=0?r="CE":"AC"!=r&&"NA"!=r?(r="WA",this.adminlog("ERRORCASE",this.cmOption.info.ErrorCase)):""!=this.cmOption.info.StyleCheck?(this.styleMinus=this.stylePoints*(this.cmOption.info.StyleCheck.split(/\r\n|\r|\n/).length-1),this.cmOption.info.Score-=this.styleMinus,this.cmOption.info.Score<0&&(this.cmOption.info.Score=0)):this.styleMinus=0,!(this.trial||this.lastsubmit&&this.lastsubmit.lang==this.cmOption.language&&this.lastsubmit.code==this.cmOption.code)){var c={user:this.user.id,problem:this.cmOption.problemid,code:this.cmOption.code,lang:this.cmOption.language,status:r,score:this.cmOption.info.Score,created:this.curtime()};this.$store.dispatch("person/submit",c),this.lastsubmit=c}}catch(t){alert(t)}this.trial=!1},twod:function(t){return t<=9?"0"+t:t},curtime:function(){var t=new Date;return""+t.getFullYear()+this.twod(t.getMonth()+1)+this.twod(t.getDate())+this.twod(t.getHours())+this.twod(t.getMinutes())+this.twod(t.getSeconds())},backhome:(d=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.user.role&&"admin"===this.user.role?this.$router.push("/admin/config"):this.$router.push("/user");case 1:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),save:function(){var data={code:this.cmOption.code,lang:this.cmOption.language};this.$store.commit("person/setObjectField",{key:"savecodes",field:this.cmOption.problemid,value:data}),"user"===this.workmode&&(this.alertmsg="已儲存到暫存區！",this.dismissCountDown=1)},judge:function(t){if(t&&this.cmOption.code.length<10)return this.alertmsg="請先寫好程式碼再繳交！",void(this.dismissCountDown=1);this.cmOption.tabidx=1,this.disabled=!0;var e=this.cmOption.problem;if(e.sourceCode=this.cmOption.code,e.sourceLang=this.cmOption.language,"string"==typeof e.testdata)try{e.testdata=JSON.parse(e.testdata)}catch(t){return alert(t),!1}var content=JSON.stringify(e),data={code:this.cmOption.code,lang:this.cmOption.language};this.$store.commit("person/setObjectField",{key:"savecodes",field:this.cmOption.problemid,value:data}),this.trial=!t,this.sendMessage(this.protocol,"CODE:"+content)},sendMessage:function(t,content){var e=this,n=t+"/submit",o=null;try{o=new WebSocket(n)}catch(t){console.log("Error",t)}o.onopen=function(t){e.adminlog("WS open and send:",content),o.send(content)},o.onmessage=function(t){e.adminlog("Receive:",t.data),e.parseMessage(t),e.disabled=!1,o.close()},o.onclose=function(t){e.adminlog("WS closed:",t)},o.onerror=function(t){e.adminlog("Socket ERR:",t),o.close()}}}},y=(n(540),n(17)),component=Object(y.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-navbar",{attrs:{type:"dark",variant:"primary"}},[n("b-navbar-brand",{attrs:{disabled:t.broadcasting}},[t._v("CTRL OJ")]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-text",[t._v(t._s(t.cmOption.problem.name))])],1),t._v(" "),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[t.disabled?n("b-spinner",{attrs:{small:""}}):t._e(),t._v(" "),n("b-button",{attrs:{variant:"primary",disabled:t.broadcasting},on:{click:t.backhome}},[n("fa",{attrs:{icon:"home"}})],1),t._v(" "),n("b-button",{attrs:{variant:"primary",disabled:t.disabled},on:{click:t.decfont}},[n("fa",{attrs:{icon:"minus"}})],1),t._v(" "),n("b-button",{attrs:{variant:"primary",disabled:t.disabled},on:{click:t.resetfont}},[n("fa",{attrs:{icon:["far","circle"]}})],1),t._v(" "),n("b-button",{attrs:{variant:"primary",disabled:t.disabled},on:{click:t.incfont}},[n("fa",{attrs:{icon:"plus"}})],1),t._v(" "),n("b-button",{attrs:{variant:"primary",disabled:t.disabled||t.broadcasting},on:{click:function(e){return t.save()}}},[n("fa",{attrs:{icon:"save"}})],1),t._v(" "),t.isAdmin&&"broadcast"===t.workmode?n("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.clearBroadcast()}}},[n("fa",{attrs:{icon:"bullhorn"}})],1):t._e(),t._v(" "),t.isAdmin&&"broadcast"!==t.workmode?n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.broadcast()}}},[n("fa",{attrs:{icon:"bullhorn"}})],1):t._e(),t._v(" "),t.isAdmin?n("b-button",{attrs:{variant:"primary",disabled:t.disabled},on:{click:function(e){return t.judge(!1)}}},[n("fa",{attrs:{icon:"check"}})],1):t._e(),t._v(" "),n("b-button",{staticClass:"mr-3",attrs:{variant:"primary",disabled:t.disabled||!t.isAdmin&&t.broadcasting},on:{click:function(e){return t.judge(!0)}}},[n("fa",{attrs:{icon:"balance-scale"}})],1),t._v(" "),n("b-form-select",{attrs:{options:t.langOptions,plain:!0,disabled:!t.isAdmin&&t.broadcasting,size:"sm"},on:{change:t.changeLang},model:{value:t.cmOption.language,callback:function(e){t.$set(t.cmOption,"language",e)},expression:"cmOption.language"}})],1),t._v("  \n        "),n("b-nav-text",{staticClass:"mx-3"},[t._v(t._s(t.status))]),t._v(" "),n("b-nav-text",[n("fa",{attrs:{icon:"hourglass-half"}}),t._v("\n          = "+t._s(t.showTime)+"\n        ")],1)],1),t._v(" "),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-text",[t._v(t._s(t.user.name))])],1)],1)],1),t._v(" "),n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"danger"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.alertmsg))]),t._v(" "),n("div",[n("Split",{staticStyle:{height:"805px"},attrs:{gutterSize:5}},[n("SplitArea",{attrs:{size:25,minSize:300}},[n("b-tabs",{model:{value:t.cmOption.tabidx,callback:function(e){t.$set(t.cmOption,"tabidx",e)},expression:"cmOption.tabidx"}},[n("b-tab",{attrs:{title:"問題說明"}},[n("div",{staticClass:"probPanel"},[n("p",{staticClass:"ptitle"},[t._v(t._s(t.cmOption.problem.name))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.pdesc(t.cmOption.problem.description))}}),t._v(" "),n("span",{staticClass:"pseg"},[t._v("條件限制")]),t._v(" "),n("p",{staticClass:"psample"},[t._v("時間＜"+t._s(t.cmOption.problem.timelimit)+"秒 記憶體＜"+t._s(t.cmOption.problem.memorylimit)+"M")]),t._v(" "),n("span",{staticClass:"pseg"},[t._v("範例輸入")]),t._v(" "),n("pre",{staticClass:"psample"},[t._v(t._s(t.problemSampleInput))]),t._v(" "),n("span",{staticClass:"pseg"},[t._v("範例輸出")]),t._v(" "),n("pre",{staticClass:"psample"},[t._v(t._s(t.problemSampleOutput))])])]),t._v(" "),n("b-tab",{attrs:{title:"評判結果"}},[n("div",{staticClass:"probPanel"},[n("span",{staticClass:"pseg"},[t._v("執行結果")]),t._v(" "),n("pre",{staticClass:"psample"},[t._v(t._s(t.statusResults))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"pseg"},[t._v("格式檢查")]),t._v(" "),t.cmOption.info&&t.cmOption.info.StyleCheck&&""!=t.cmOption.info.StyleCheck?n("ul",{staticClass:"psample",domProps:{innerHTML:t._s(t.styleResults)}}):n("p",{staticClass:"psample"},[t._v("檢查通過")])])])],1)],1),t._v(" "),n("SplitArea",{attrs:{size:75,minSize:500}},[n("no-ssr",[n("codemirror",{style:t.cmOption.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady},model:{value:t.cmOption.code,callback:function(e){t.$set(t.cmOption,"code",e)},expression:"cmOption.code"}})],1)],1)],1)],1)],1)}),[],!1,null,"d0527d8e",null);e.default=component.exports}}]);