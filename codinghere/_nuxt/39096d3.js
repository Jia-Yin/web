(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1051:function(t,e,r){var content=r(1238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("66b8a7f4",content,!0,{sourceMap:!1})},1237:function(t,e,r){"use strict";r(1051)},1238:function(t,e,r){(e=r(60)(!1)).push([t.i,".dcenter[data-v-1846e5da]{text-align:center}.notice[data-v-1846e5da]{color:#00f;width:600px;margin:36px auto}.exit[data-v-1846e5da]{margin:0;width:100px;position:fixed;bottom:0;right:0}",""]),t.exports=e},1313:function(t,e,r){"use strict";r.r(e);r(39),r(28),r(9),r(20),r(27),r(47),r(104),r(49);var n=r(8),c=r(0),o=r(32),d=r(121);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{contest:!1,showExit:!1,userpass:!1,codeseg:!1,entercode:"",rightcode:!1,examdata:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({tick:function(t){return t.params&&t.params.tick},listen:function(t){return t.vparams&&t.vparams.listen}})),methods:{exit:function(){this.$router.push("/exit")},findUserInUserList:function(t){for(var e=this.$user("name"),r=t.trim().replace(/\s+/g,",").split(","),i=0;i<r.length;i++){var element=r[i];if(e.indexOf(element)>=0)return!0}return!1},processCmd:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,data,m,l,f,x;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.$user(),c=n.courses,d=n.id,data=null,r.t0=regeneratorRuntime.keys(t);case 5:if((r.t1=r.t0()).done){r.next=22;break}if(m=r.t1.value,!c||!c[m]||"startExam"!==t[m].cmd){r.next=11;break}return(data=t[m]).courseid=m,r.abrupt("break",22);case 11:if("startContest"!==t[m].cmd){r.next=20;break}return r.next=14,o.d.collection("contests").doc(m).get();case 14:if(!(l=r.sent).data().players||!l.data().players[d]){r.next=20;break}return(data=t[m]).contestid=m,e.contest=!0,r.abrupt("break",22);case 20:r.next=5;break;case 22:if(data){r.next=24;break}return r.abrupt("return");case 24:if(e.examdata=data,!e.contest){r.next=37;break}if(f=n.contests,!data.userlimit||!e.findUserInUserList(data.userlimit)){r.next=30;break}if(f&&f[data.contestid]&&f[data.contestid].finish){r.next=30;break}return r.abrupt("return",e.startContest());case 30:if(!f||!f[data.contestid]){r.next=33;break}return e.$router.push("/afterexam?taken=1"),r.abrupt("return");case 33:if(data.checkcode){r.next=35;break}return r.abrupt("return",e.startContest());case 35:r.next=46;break;case 37:if(x=n.exams,!data.userlimit||!e.findUserInUserList(data.userlimit)){r.next=41;break}if(x&&x[data.examid]&&x[data.examid].finish){r.next=41;break}return r.abrupt("return",e.startExam());case 41:if(!x||!x[data.examid]){r.next=44;break}return e.$router.push("/afterexam?taken=1"),r.abrupt("return");case 44:if(data.checkcode){r.next=46;break}return r.abrupt("return",e.startExam());case 46:e.rightcode=data.checkcode,e.codeseg=!0;case 48:case"end":return r.stop()}}),r)})))()},codecheck:function(){this.rightcode===this.entercode.trim()&&(this.contest?this.startContest():this.startExam())},startContest:function(){this.$store.commit("setVParam",{name:"contest",value:this.examdata}),this.$router.push("/exam/startContest?case=exam")},startExam:function(){this.$store.commit("setVParam",{name:"exam",value:this.examdata}),this.examdata.contest?this.$router.push("/exam/courseContest?case=exam"):this.$router.push("/exam/startExam?case=exam")}},watch:{listen:function(t){this.processCmd(t)}}},f=(r(1237),r(55)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"my-4"},[r("b-button",{staticClass:"exit",attrs:{size:"sm"},on:{click:function(e){t.showExit=!0}}},[t._v("Exit")]),t._v(" "),r("b-modal",{attrs:{title:"Confirm"},on:{ok:t.exit},model:{value:t.showExit,callback:function(e){t.showExit=e},expression:"showExit"}},[t._v("\n        Are you sure to exit?\n    ")]),t._v(" "),r("p",{staticClass:"mt-5",attrs:{align:"center"}},[t._v("等待老師開題中...")]),t._v(" "),t.codeseg?r("div",{staticClass:"dcenter"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.entercode,expression:"entercode"}],staticClass:"mr-2 mt-3",attrs:{type:"text",placeholder:"通關密碼"},domProps:{value:t.entercode},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.codecheck(e)},input:function(e){e.target.composing||(t.entercode=e.target.value)}}}),t._v(" "),r("button",{attrs:{variant:"outline-success",size:"sm"},on:{click:t.codecheck}},[t._v("\n            通關\n        ")])]):r("div",{staticClass:"notice"},[t._v("\n        注意：同學在作答過程中，請勿嘗試各種系統切換鍵，如果因此導致作答系統當掉，未作答部份則不予計分，謝謝您的合作！\n    ")])],1)}),[],!1,null,"1846e5da",null);e.default=component.exports}}]);