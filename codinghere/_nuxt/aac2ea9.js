(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1070:function(t,e,r){"use strict";r(909)},1071:function(t,e,r){(e=r(60)(!1)).push([t.i,".dcenter[data-v-7729a2bc]{text-align:center}.notice[data-v-7729a2bc]{color:#00f;width:600px;margin:36px auto}.exit[data-v-7729a2bc]{margin:0;width:100px;position:fixed;bottom:0;right:0}",""]),t.exports=e},1132:function(t,e,r){"use strict";r.r(e);r(39),r(9),r(20),r(27),r(46);var n=r(0),o=r(121);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{showExit:!1,userpass:!1,codeseg:!1,entercode:"",rightcode:!1,examdata:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({tick:function(t){return t.params&&t.params.tick},listen:function(t){return t.vparams&&t.vparams.listen}})),methods:{exit:function(){this.$router.push("/exit")},findUserInUserList:function(t){for(var e=this.$user("name"),r=t.trim().replace(/\s+/g,",").split(","),i=0;i<r.length;i++){var element=r[i];if(e.indexOf(element)>=0)return!0}return!1},processCmd:function(t){console.log("Data",t);var e=this.$user("courses"),data=null;for(var r in t)if(e&&e[r]&&"startExam"===t[r].cmd){(data=t[r]).courseid=r;break}if(data){this.examdata=data;var n=this.$user("exams");if(data.userlimit&&this.findUserInUserList(data.userlimit)&&(!n||!n[data.examid]||!n[data.examid].finish))return this.startExam();if(n&&n[data.examid])this.$router.push("/afterexam?taken=1");else{if(!data.checkcode)return this.startExam();this.rightcode=data.checkcode,this.codeseg=!0}}},codecheck:function(){this.rightcode===this.entercode.trim()&&this.startExam()},startExam:function(){this.$store.commit("setVParam",{name:"exam",value:this.examdata}),this.examdata.contest?this.$router.push("/exam/startContest?case=exam"):this.$router.push("/exam/startExam?case=exam")}},watch:{listen:function(t){this.processCmd(t)}}},m=(r(1070),r(55)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"my-4"},[r("b-button",{staticClass:"exit",attrs:{size:"sm"},on:{click:function(e){t.showExit=!0}}},[t._v("Exit")]),t._v(" "),r("b-modal",{attrs:{title:"Confirm"},on:{ok:t.exit},model:{value:t.showExit,callback:function(e){t.showExit=e},expression:"showExit"}},[t._v("\n        Are you sure to exit?\n    ")]),t._v(" "),r("p",{staticClass:"mt-5",attrs:{align:"center"}},[t._v("等待老師開題中...")]),t._v(" "),t.codeseg?r("div",{staticClass:"dcenter"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.entercode,expression:"entercode"}],staticClass:"mr-2 mt-3",attrs:{type:"text",placeholder:"通關密碼"},domProps:{value:t.entercode},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.codecheck(e)},input:function(e){e.target.composing||(t.entercode=e.target.value)}}}),t._v(" "),r("button",{attrs:{variant:"outline-success",size:"sm"},on:{click:t.codecheck}},[t._v("\n            通關\n        ")])]):r("div",{staticClass:"notice"},[t._v("\n        注意：同學在作答過程中，請勿嘗試各種系統切換鍵，如果因此導致作答系統當掉，未作答部份則不予計分，謝謝您的合作！\n    ")])],1)}),[],!1,null,"7729a2bc",null);e.default=component.exports},909:function(t,e,r){var content=r(1071);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("090c4877",content,!0,{sourceMap:!1})}}]);