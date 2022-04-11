(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1286:function(e,t,r){"use strict";r(962)},1287:function(e,t,r){(t=r(56)(!1)).push([e.i,".card[data-v-0111218e]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-0111218e]{margin-bottom:24px}",""]),e.exports=t},1415:function(e,t,r){"use strict";r.r(t);r(14),r(156),r(30),r(15),r(49);var n=r(7),o=r(865),l=r(26),c=r(855),m={components:{ProblemSelector:o.default},data:function(){return{contestName:"c2021",running:!1,checkcode:"",userlimit:"",infoAlert:!1,info:{title:"",message:""},selectProblems:!1,problems:[],examform:{name:"",tlimit:60,probs:[]},examfields:[{key:"title",label:"Title",sortable:!1},{key:"description",label:"Description",sortable:!1},{key:"actions",label:"Action",class:"text-center"}]}},computed:{},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"admin"!==e.$user("role")&&e.$router.push("/contest"),t.next=3,l.d.collection("problems").doc("BASE").get();case 3:return(r=t.sent).exists&&(n=r.data(),e.problems=c.a.obj2arr(n)),t.next=7,l.d.collection("contests").doc(e.contestName).get();case 7:return(o=t.sent).exists&&o.data().exam&&(e.examform=e.$copyObject(o.data().exam)),t.next=11,l.d.collection("comms").doc("user").get();case 11:(m=t.sent).exists&&(d=m.data())[e.contestName]&&d[e.contestName].cmd&&"startContest"===d[e.contestName].cmd&&(e.running=!0);case 13:case"end":return t.stop()}}),t)})))()},methods:{testRun:function(){this.$router.push("/contest/".concat(this.contestName,"/test"))},testProb:function(p){},startContest:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r={})[t.contestName]={cmd:"startContest",name:t.examform.name,checkcode:t.checkcode,userlimit:t.userlimit},e.prev=2,e.next=5,l.d.collection("comms").doc("user").set(r,{merge:!0});case 5:t.running=!0,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()},stopexam:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r={})[e.contestName]={cmd:"stopContest"},t.next=4,l.d.collection("comms").doc("user").set(r,{merge:!0});case 4:e.running=!1;case 5:case"end":return t.stop()}}),t)})))()},describe:function(e){var t=this.$selectUserLocaleText(e);return t.length>100?t.substring(0,100)+"...":t},updateExam:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.examform.probs&&0!=e.examform.probs.length){t.next=3;break}return alert("Exam not set correctly."),t.abrupt("return");case 3:return t.prev=3,t.next=6,l.d.collection("contests").doc(e.contestName).update({exam:e.$copyObject(e.examform),updated:c.a.getNow()});case 6:e.infoAlert=!0,e.info={title:"Exam",message:"Update Exam OK!"},t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},deleteprob:function(e){this.examform.probs.splice(e.index,1)},updateProblem:function(e){var t=this.$copyObject(e);t.forEach((function(e){delete e._showDetails})),this.examform.probs=t,this.selectProblems=!1}}},d=(r(1286),r(55)),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v("\n        "+e._s(e.info.message)+"\n    ")]),e._v(" "),r("b-form",{attrs:{inline:""}},[e._v("\n        Status: "+e._s(e.running?"Running":"Prepare")+"\n        "),e.running?r("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"danger"},on:{click:e.stopexam}},[e._v("Stop")]):e._e(),e._v(" "),r("b-input",{staticClass:"ml-5",attrs:{size:"sm",type:"text",placeholder:"checkcode"},model:{value:e.checkcode,callback:function(t){e.checkcode=t},expression:"checkcode"}}),e._v(" "),r("b-input",{attrs:{size:"sm",type:"text",placeholder:"userlimit"},model:{value:e.userlimit,callback:function(t){e.userlimit=t},expression:"userlimit"}}),e._v(" "),r("b-button",{staticClass:"ml-2",attrs:{size:"sm",variant:"success"},on:{click:function(t){return e.startContest(!1)}}},[e._v("\n            "+e._s(e.running?"ReStart":"Start")+"\n        ")]),e._v(" "),r("b-button",{staticClass:"ml-5",attrs:{size:"sm",variant:"warning",to:"/admin"}},[e._v("Home")])],1),e._v(" "),r("hr",{staticClass:"my-5"}),e._v(" "),r("div",{staticClass:"d-flex justify-content-between"},[r("span",[e._v("\n            Problems: "+e._s(e.examform.probs.length)+"\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.examform.name,expression:"examform.name"}],staticClass:"ml-4 mr-2",attrs:{type:"text",placeholder:"Exam Name"},domProps:{value:e.examform.name},on:{input:function(t){t.target.composing||e.$set(e.examform,"name",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.examform.tlimit,expression:"examform.tlimit"}],staticClass:"mr-4",attrs:{type:"number",placeholder:"TLimit (min)"},domProps:{value:e.examform.tlimit},on:{input:function(t){t.target.composing||e.$set(e.examform,"tlimit",t.target.value)}}})]),e._v(" "),r("span",[r("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:function(t){e.selectProblems=!0}}},[e._v("Edit")]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:e.testRun}},[e._v("TestRun")]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:e.updateExam}},[e._v("Update")]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-success",to:"/contest/c2021/monitor"}},[e._v("Monitor")])],1)]),e._v(" "),r("b-table",{staticClass:"mt-3",attrs:{"show-empty":"",small:"",stacked:"md",selectable:!0,"select-mode":"range",items:e.examform.probs,fields:e.examfields},scopedSlots:e._u([{key:"cell(title)",fn:function(t){return[e._v("\n            "+e._s(e.$selectUserLocaleText(t.value))+"\n        ")]}},{key:"cell(description)",fn:function(t){return[e._v("\n            "+e._s(e.describe(t.value))+"\n        ")]}},{key:"cell(actions)",fn:function(t){return[r("b-button-group",[r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return e.testprob(t.item)}}},[r("b-icon",{attrs:{icon:"check"}})],1),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return e.deleteprob(t)}}},[r("b-icon",{attrs:{icon:"trash"}})],1)],1)]}}])}),e._v(" "),r("b-modal",{attrs:{size:"xl","hide-footer":""},model:{value:e.selectProblems,callback:function(t){e.selectProblems=t},expression:"selectProblems"}},[r("problem-selector",{staticClass:"mt-4",attrs:{oriProblems:e.problems,selProblems:e.examform.probs,selText:"添加到考試",OKText:"Set Exam Problems"},on:{OK:e.updateProblem}})],1)],1)}),[],!1,null,"0111218e",null);t.default=component.exports;installComponents(component,{ProblemSelector:r(865).default})},855:function(e,t,r){"use strict";r(10),r(14),r(86),r(9),r(856),r(29),r(15);var n=r(228),o=r.n(n),l={pad:function(e){return e<10?"0"+e:e},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),n=e.id;delete r.id,t[n]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=l},856:function(e,t,r){"use strict";var n=r(8),o=r(857).start;n({target:"String",proto:!0,forced:r(858)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},857:function(e,t,r){var n=r(50),o=r(229),l=r(52),c=Math.ceil,m=function(e){return function(t,r,m){var d,f,h=String(l(t)),v=h.length,x=void 0===m?" ":String(m),_=n(r);return _<=v||""==x?h:(d=_-v,(f=o.call(x,c(d/x.length))).length>d&&(f=f.slice(0,d)),e?h+f:f+h)}};e.exports={start:m(!1),end:m(!0)}},858:function(e,t,r){var n=r(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},861:function(e,t,r){"use strict";r.r(t);r(156),r(49);var n=r(7),o=(r(870),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Problem_ID:"編號",Problem_Title:"名稱",Common_Edit:"編輯",Common_Copy:"複製",SYS_Actions:"操作",SYS_Find:"搜尋"}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.localeText=e.$updateLocaleText(e.localeText),e.showID&&e.pfields.push({key:"id",label:e.localeText.Problem_ID,sortable:!0}),e.pfields.push({key:"title",label:e.localeText.Problem_Title,sortable:!0,formatter:e.$selectUserLocaleText}),e.showTag&&e.pfields.push({key:"tags",sortable:!0}),(e.showArrow||e.showDetail||e.editProblem||e.copyProblem)&&e.pfields.push({key:"actions",label:e.localeText.SYS_Actions});case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{moveUp:function(e){if(e>0){var t=this.$copyObject(this.problems[e]);this.problems.splice(e,1),this.problems.splice(e-1,0,t)}},moveDown:function(e){if(e<this.problems.length-1){var t=this.$copyObject(this.problems[e+1]);this.problems.splice(e+1,1),this.problems.splice(e,0,t)}},onRowSelected:function(e){this.$emit("rowSelected",e)},showProblem:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.toggleDetails();case 1:case"end":return t.stop()}}),t)})))()}}}),l=(r(872),r(55)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showFilter?r("p",{staticClass:"p-0 mb-2"},[r("span",[e._v(e._s(e.localeText.SYS_Find)),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pfilter,expression:"pfilter"}],staticClass:"ml-2",domProps:{value:e.pfilter},on:{input:function(t){t.target.composing||(e.pfilter=t.target.value)}}})])]):e._e(),e._v(" "),r("b-table",{attrs:{bordered:"",items:e.problems,selectable:"","select-mode":"multi",fields:e.pfields,filter:e.pfilter},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([e.showDetail||e.editProblem||e.copyProblem||e.showArrow?{key:"cell(actions)",fn:function(t){return[e.showDetail?r("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return e.showProblem(t)}}},[t.detailsShowing?r("b-icon",{attrs:{icon:"eye-slash"}}):r("b-icon",{attrs:{icon:"eye"}})],1):e._e(),e._v(" "),e.editProblem?r("b-link",{staticClass:"mr-1",on:{click:function(r){return e.editProblem(t.item)}}},[r("b-icon",{attrs:{icon:"pen"}})],1):e._e(),e._v(" "),e.copyProblem?r("b-link",{staticClass:"mr-1",on:{click:function(r){return e.copyProblem(t.item)}}},[r("b-icon",{attrs:{icon:"back"}})],1):e._e(),e._v(" "),e.showArrow?r("b-link",{staticClass:"mr-1",on:{click:function(r){return e.moveUp(t.index)}}},[r("b-icon",{attrs:{icon:"arrow-up"}})],1):e._e(),e._v(" "),e.showArrow?r("b-link",{staticClass:"mr-1",on:{click:function(r){return e.moveDown(t.index)}}},[r("b-icon",{attrs:{icon:"arrow-down"}})],1):e._e()]}}:null,e.showDetail?{key:"row-details",fn:function(t){return[r("b-card",[r("p",[e._v(e._s(t.item.id)+": "+e._s(e.$selectUserLocaleText(t.item.title)))]),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.$md.render(e.$selectUserLocaleText(t.item.description)))}}),e._v(" "),r("p",[e._v("TAGS: "+e._s(t.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"713cf5a8",null);t.default=component.exports},865:function(e,t,r){"use strict";r.r(t);r(156);var n=r(861),o=r(855),l={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:n.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var e=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)e.push(this.selProblems[i]);for(var t=[],r=0;r<this.oriProblems.length;r++){var n=this.$copyObject(this.oriProblems[r]);o.a.findIdPos(e,n.id)<0&&t.push(n)}this.leftProblems=t,this.rightProblems=e},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var e=this.leftSelected[i];this.rightProblems.push(e);var t=o.a.findIdPos(this.leftProblems,e.id);t>=0&&this.leftProblems.splice(t,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var e=this.rightSelected[i];this.leftProblems.push(e);var t=o.a.findIdPos(this.rightProblems,e.id);t>=0&&this.rightProblems.splice(t,1)}}},watch:{oriProblems:function(e){this.initSelection()},selProblems:function(e){this.initSelection()}}},c=(r(874),r(55)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex justify-content-start align-items-top"},[r("problem-table",{attrs:{problems:e.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(t){return e.leftSelected=t}}}),e._v(" "),r("div",{staticClass:"mx-5"},[r("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:e.selectItems}},[r("b-icon",{attrs:{icon:"arrow-right"}})],1),e._v(" "),r("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:e.deSelectItems}},[r("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),e._v(" "),r("div",[r("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.selText))]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.done}},[e._v(e._s(e.OKText))])],1),e._v(" "),r("problem-table",{attrs:{problems:e.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(t){return e.rightSelected=t}}})],1)],1)])}),[],!1,null,"e5184376",null);t.default=component.exports;installComponents(component,{ProblemTable:r(861).default})},866:function(e,t,r){var content=r(873);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("713447c1",content,!0,{sourceMap:!1})},867:function(e,t,r){var content=r(875);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("7c274b48",content,!0,{sourceMap:!1})},872:function(e,t,r){"use strict";r(866)},873:function(e,t,r){(t=r(56)(!1)).push([e.i,"[data-v-713cf5a8] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),e.exports=t},874:function(e,t,r){"use strict";r(867)},875:function(e,t,r){(t=r(56)(!1)).push([e.i,"[data-v-e5184376] .itemList{margin:12px 0}.container-fluid[data-v-e5184376]{margin-top:30px}.pdescription[data-v-e5184376]{width:100%;height:300px}.titleLabel[data-v-e5184376]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-e5184376] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),e.exports=t},962:function(e,t,r){var content=r(1287);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("4d915fa4",content,!0,{sourceMap:!1})}}]);