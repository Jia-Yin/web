(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1116:function(e,t,n){var content=n(1324);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("4219aadd",content,!0,{sourceMap:!1})},1117:function(e,t,n){var content=n(1326);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("4ee5109c",content,!0,{sourceMap:!1})},1144:function(e,t,n){"use strict";n.r(t);n(10),n(14),n(370),n(18),n(12),n(58),n(156),n(30),n(9),n(79),n(160),n(15),n(49);var r=n(7),o=n(855),c=n(26),l={props:{cid:String},data:function(){return{infoAlert:!1,info:{title:"",message:""},search:!1,searchEID:null,searchUID:null,courseStudents:null,exams:[],showCopy:!1,toCopy:null,teachCourses:[],copy:{course:null,name:""},short:!0,fields:[],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],todel:null,selected:[],cachequiz:{},tmap:{singlechoice:0,fillin:1,functest:2,progtest:3},localeText:{ExamMan_NewTitle:"新的名稱",ExamMan_QuizType:"題目類型",ExamMan_Short:"短",ExamMan_TotalScore:"總分",ExamMan_Long:"長",ExamMan_Title:"名稱",ExamMan_TLMin:"限時 (分)",ExamMan_Content:"內容",ExamMan_Monitor:"監看",ExamMan_Examine:"閱卷",ExamMan_PageLen:"頁長",ExamMan_SelectStudent:"選擇學生",ExamMan_ReverseOrder:"反轉順序",SYS_Delete:"刪除",SYS_Copy:"複製",SYS_Clear:"清除",SYS_New:"新建",SYS_Actions:"操作",SYS_Start:"開始",SYS_Test:"測試",SYS_Edit:"編輯",Exam_Choice:"選擇",Exam_Fillin:"填充",Exam_Function:"函式",Exam_Program:"程式"}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.localeText=e.$updateLocaleText(e.localeText),e.updateCourse();case 2:case"end":return t.stop()}}),t)})))()},methods:{updateCourse:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.courseStudents=null,t.next=3,e.$store.dispatch("getCourse",e.cid);case 3:(n=t.sent).exams&&(e.exams=Array.from(n.exams||[])),e.totalRows=e.exams.length,e.fields=[{key:"name",label:e.localeText.ExamMan_Title,sortable:!0},{key:"tscore",label:e.localeText.ExamMan_TotalScore,sortable:!1},{key:"tlimit",label:e.localeText.ExamMan_TLMin,sortable:!1},{key:"probs",label:e.localeText.ExamMan_Content,sortable:!1},{key:"actions",label:e.localeText.SYS_Actions,class:"text-center"}];case 7:case"end":return t.stop()}}),t)})))()},startexam:function(e){this.$emit("start",e)},checkUserExam:function(){if(this.searchUID&&""!==this.searchUID){for(var e=null,i=0;i<this.courseStudents.length;i++)if(this.courseStudents[i].text===this.searchUID){e=this.courseStudents[i].value;break}this.search=!1,e&&this.$router.push("/teacher/exams/person?cid=".concat(this.cid,"&eid=").concat(this.searchEID,"&uid=").concat(e))}},prepareSearch:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.search=!0,t.searchEID=e.id,n.next=4,t.$store.dispatch("getCourse",t.cid);case 4:if(r=n.sent,!t.courseStudents){for(c in o=[],r.students)p=r.students[c],o.push({value:c+"##"+p.name,text:p.stdID+" "+p.name});t.courseStudents=o}case 6:case"end":return n.stop()}}),n)})))()},prepareCopy:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.showCopy=!0,t.toCopy=t.$copyObject(e),t.teachCourses=[],n.next=5,t.$store.dispatch("getCourse","LIST");case 5:(r=n.sent)&&function(){var e=t.$user("id");for(var n in r){var o=r[n];o.teachers&&o.teachers.some((function(t){return t.id==e}))&&t.teachCourses.push({value:n,text:o.name})}}(),t.copy.course=t.cid;case 8:case"end":return n.stop()}}),n)})))()},monitor:function(e){var t=e.id,n="/teacher/exams/monitor?cid=".concat(this.cid,"&eid=").concat(t);this.$router.push(n)},onRowSelected:function(e){this.selected=e,this.$emit("rowSelected",e)},onFiltered:function(e){e&&(this.totalRows=e.length,this.currentPage=1)},editexam:function(e){this.$router.push("/teacher/exams/edit?cid=".concat(this.cid,"&eid=").concat(e.id))},copyexam:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,l,m,d,x,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.collection("exams").doc(e.toCopy.id).get();case 2:return n=t.sent,(l=n.data()).name=e.copy.name,delete e.toCopy.id,(m=e.toCopy).name=e.copy.name,d=c.d.collection("courses").doc(e.copy.course),x=c.d.collection("exams").doc(),h=null,t.prev=11,t.next=14,c.d.runTransaction(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(d);case 2:return n=e.sent,e.next=5,t.set(x,l);case 5:return(r=m).id=x.id,(h=n.data().exams||[]).push(r),e.next=11,t.set(d,{exams:h,updated:o.a.getNow()},{merge:!0});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 14:e.$store.commit("updateCourse",{id:e.copy.course,value:{exams:h}}),e.exams=Array.from(h),e.totalRows=e.exams.length,e.infoAlert=!0,e.info={title:"Exam",message:"Copy Exam OK!"},t.next=24;break;case 21:t.prev=21,t.t0=t.catch(11),alert(t.t0);case 24:case"end":return t.stop()}}),t,null,[[11,21]])})))()},testexam:function(e){this.$store.commit("setObject",{key:"exam",value:e}),this.$router.push("/teacher/exams/test?cid=".concat(this.cid,"&eid=").concat(e.id))},deleteexam:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n=o.a.findIdPos(e.exams,e.todel.id))<0)){t.next=3;break}return t.abrupt("return");case 3:return e.exams.splice(n,1),t.next=6,e.$store.dispatch("updateCourse",{id:e.cid,value:{exams:e.exams}});case 6:return t.next=8,e.$store.dispatch("getCourse",e.cid);case 8:r=t.sent,e.exams=Array.from(r.exams||[]),e.infoAlert=!0,e.info={title:"Exam",message:"Delete Exam OK!"};case 12:case"end":return t.stop()}}),t)})))()},deleteconfirm:function(e){this.todel=e,this.$bvModal.show("modal-delete")},typcmp:function(e,t){return this.tmap[e.type]-this.tmap[t.type]},listprobshort:function(e){var t=this,n=0,r=[0,0,0,0];e.forEach((function(e){n+=e.tlimit;var o=t.tmap[e.type];r[o]++}));var c=this.localeText.Exam_Choice;return c+="".concat(r[0],"，"),c+=this.localeText.Exam_Fillin,c+="".concat(r[1],"，"),c+=this.localeText.Exam_Function,c+="".concat(r[2],"，"),c+=this.localeText.Exam_Program,(c+="".concat(r[3]))+"；共".concat(o.a.hhmmss(n))},listprob:function(e){var t=this,n=0,r=e.map((function(p){var e={id:p.id};return e.title=p.title,e.question=p.question,e.timelimit=p.tlimit,n+=p.tlimit,e.score=p.score,e.type=p.type,e}));return r.sort(this.typcmp),"Total Time = "+o.a.hhmmss(n)+"<br>"+r.map((function(e){return t.typename(e.type)+"--"+t.$selectUserLocaleText(e.title)+"--"+e.score+"--"+o.a.hhmmss(e.timelimit)})).join("<br>")},typename:function(e){return"singlechoice"===e?"單選":"fillin"===e?"填充":"functest"===e?"函式":"progtest"===e?"程式":"？？"}},watch:{exams:function(e){this.totalRows=this.exams.length},cid:function(e){this.updateCourse()}}},m=(n(1323),n(55)),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"qpanel"},[n("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message)+"\n    ")]),e._v(" "),n("b-modal",{attrs:{title:e.localeText.ExamMan_Examine},on:{ok:e.checkUserExam},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[n("b-form-input",{attrs:{size:"sm",list:"namelist"},model:{value:e.searchUID,callback:function(t){e.searchUID=t},expression:"searchUID"}}),e._v(" "),n("datalist",{attrs:{id:"namelist"}},e._l(e.courseStudents,(function(p,t){return n("option",{key:p+t},[e._v(e._s(p.text))])})),0)],1),e._v(" "),n("b-modal",{attrs:{title:e.localeText.SYS_Copy},on:{ok:e.copyexam},model:{value:e.showCopy,callback:function(t){e.showCopy=t},expression:"showCopy"}},[n("b-form-select",{staticClass:"mt-3",attrs:{options:e.teachCourses,size:"sm"},model:{value:e.copy.course,callback:function(t){e.$set(e.copy,"course",t)},expression:"copy.course"}}),e._v(" "),n("b-input",{staticClass:"mt-3",attrs:{size:"sm",placeholder:e.localeText.ExamMan_NewTitle},model:{value:e.copy.name,callback:function(t){e.$set(e.copy,"name",t)},expression:"copy.name"}})],1),e._v(" "),n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"4"}},[n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(t){e.exams=e.exams.reverse()}}},[e._v("\n                "+e._s(e.localeText.ExamMan_ReverseOrder)+" \n            ")])],1),e._v(" "),n("b-col",{staticClass:"my-1",attrs:{md:"2"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:e.localeText.ExamMan_PageLen,"label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[n("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._v(" "),n("b-col",{staticClass:"my-1",attrs:{md:"2"}},[n("b-button",{attrs:{size:"sm",variant:"outline-success",to:"/teacher/exams/create?cid="+e.cid}},[e._v(e._s(e.localeText.SYS_New))]),e._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:function(t){e.short=!e.short}}},[e._v(e._s(e.short?e.localeText.ExamMan_Long:e.localeText.ExamMan_Short))])],1),e._v(" "),n("b-col",{staticClass:"my-1",attrs:{md:"4"}},[n("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1),e._v(" "),n("b-modal",{attrs:{id:"modal-delete",title:e.localeText.SYS_Delete},on:{ok:function(t){return e.deleteexam()}}},[n("p",{staticClass:"my-4"},[e._v(e._s(e.todel&&e.todel.name))])]),e._v(" "),n("b-table",{staticClass:"mt-3",attrs:{"show-empty":"",small:"",stacked:"md",selectable:!0,"select-mode":"range",items:e.exams,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,filterIncludedFields:e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered,"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(probs)",fn:function(data){return[e.short?n("span",{domProps:{innerHTML:e._s(e.listprobshort(data.value))}}):n("span",{domProps:{innerHTML:e._s(e.listprob(data.value))}})]}},{key:"cell(actions)",fn:function(t){return[n("b-button-group",[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.localeText.SYS_Start,size:"sm",variant:"outline-primary"},on:{click:function(n){return e.startexam(t.item)}}},[n("b-icon",{attrs:{icon:"arrow-right-circle"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.localeText.SYS_Test,size:"sm",variant:"outline-primary"},on:{click:function(n){return e.testexam(t.item)}}},[n("b-icon",{attrs:{icon:"check"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.localeText.SYS_Edit,size:"sm",variant:"outline-primary"},on:{click:function(n){return e.editexam(t.item)}}},[n("b-icon",{attrs:{icon:"pen"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.localeText.SYS_Copy,size:"sm",variant:"outline-primary"},on:{click:function(n){return e.prepareCopy(t.item)}}},[n("b-icon",{attrs:{icon:"back"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.localeText.SYS_Delete,size:"sm",variant:"outline-primary"},on:{click:function(n){return e.deleteconfirm(t.item)}}},[n("b-icon",{attrs:{icon:"trash"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.localeText.ExamMan_Monitor,size:"sm",variant:"outline-primary"},on:{click:function(n){return e.monitor(t.item)}}},[n("b-icon",{attrs:{icon:"eye"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.localeText.ExamMan_Examine,size:"sm",variant:"outline-primary"},on:{click:function(n){return e.prepareSearch(t.item)}}},[n("b-icon",{attrs:{icon:"search"}})],1)],1)]}}])})],1)}),[],!1,null,"1734d612",null);t.default=component.exports},1323:function(e,t,n){"use strict";n(1116)},1324:function(e,t,n){(t=n(56)(!1)).push([e.i,".modal-content[data-v-1734d612]{position:fixed;left:365px;top:365px;width:50%;height:50%;background:#e0ffff}",""]),e.exports=t},1325:function(e,t,n){"use strict";n(1117)},1326:function(e,t,n){(t=n(56)(!1)).push([e.i,"section{color:#00f;font-size:120%}",""]),e.exports=t},1433:function(e,t,n){"use strict";n.r(t);n(30),n(49);var r=n(7),o=n(1144),c=n(26),l={components:{ExamMan:o.default},computed:{cid:function(){return this.$route.query.cid}},data:function(){return{showExam:!1,examTitle:"Exam",contest:!1,runningexam:null,examselected:[],checkcode:null,userlimit:null,localeText:{Admin_ExamList:"考試列表",Admin_ExamRunning:"考試進行中...",Admin_Contest:"競賽",Admin_Stop:"結束",Admin_NoRunningExam:"目前沒有考試",Admin_ExamCheckCode:"檢查碼",Admin_ExamUserLimit:"限制使用者",Admin_ExamStart:"開始",SYS_Cancel:"取消"}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.cid){t.next=2;break}return t.abrupt("return",e.$router.push("/user"));case 2:e.localeText=e.$updateLocaleText(e.localeText),e.updateCourse();case 4:case"end":return t.stop()}}),t)})))()},methods:{updateCourse:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return!1,t.next=3,c.d.collection("comms").doc("user").get();case 3:(n=t.sent).exists&&(r=n.data())[e.cid]&&r[e.cid].cmd&&"startExam"===r[e.cid].cmd&&"exam"===r[e.cid].examtype?(e.runningexam=r[e.cid].name,e.contest="contest"===r[e.cid].examtype):e.runningexam=null;case 5:case"end":return t.stop()}}),t)})))()},examConfig:function(e){this.examTitle=e.name,this.examselected=[e],this.showExam=!0},startexam:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(1===t.examselected.length){n.next=2;break}return n.abrupt("return");case 2:return(r={})[t.cid]={cmd:"startExam",name:t.examselected[0].name,examid:t.examselected[0].id,checkcode:t.checkcode,userlimit:t.userlimit,examtype:e},t.contest="contest"===e,n.prev=5,n.next=8,c.d.collection("comms").doc("user").set(r,{merge:!0});case 8:t.runningexam=t.examselected[0].name,t.showExam=!1,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),alert(n.t0);case 15:case"end":return n.stop()}}),n,null,[[5,12]])})))()},examRowSelected:function(e){this.examselected=e},stopexam:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n={})[e.cid]={cmd:"stopExam"},t.next=4,c.d.collection("comms").doc("user").set(n,{merge:!0});case 4:e.runningexam=null;case 5:case"end":return t.stop()}}),t)})))()}},watch:{cid:function(e){this.updateCourse()}}},m=(n(1325),n(55)),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"my-4"},[e._v(e._s(e.localeText.Admin_ExamList))]),e._v(" "),e.runningexam?n("div",[e._v("\n        "+e._s(e.runningexam)+" "+e._s(e.localeText.Admin_ExamRunning)+" \n        "),e.contest?n("span",{staticClass:"ml-3"},[e._v("("+e._s(e.localeText.Admin_Contest)+")")]):e._e(),e._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success"},on:{click:e.stopexam}},[e._v(e._s(e.localeText.Admin_Stop))])],1):n("div",[e._v("\n        "+e._s(e.localeText.Admin_NoRunningExam)+"\n    ")]),e._v(" "),n("hr"),e._v(" "),n("b-modal",{attrs:{size:"lg",title:e.examTitle,"hide-footer":""},model:{value:e.showExam,callback:function(t){e.showExam=t},expression:"showExam"}},[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",[e._v(e._s(e.localeText.Admin_ExamCheckCode))])]),e._v(" "),n("b-col",{attrs:{cols:"9"}},[n("b-form-input",{attrs:{type:"text",placeholder:e.localeText.Admin_ExamCheckCode},model:{value:e.checkcode,callback:function(t){e.checkcode=t},expression:"checkcode"}})],1)],1),e._v(" "),n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{sm:"3"}},[n("label",[e._v(e._s(e.localeText.Admin_ExamUserLimit))])]),e._v(" "),n("b-col",{attrs:{cols:"9"}},[n("b-form-input",{attrs:{type:"text",placeholder:e.localeText.Admin_ExamUserLimit},model:{value:e.userlimit,callback:function(t){e.userlimit=t},expression:"userlimit"}})],1)],1),e._v(" "),n("p",{staticClass:"mt-4",attrs:{align:"right"}},[n("b-button",{attrs:{variant:"outline-success"},on:{click:function(t){e.showExam=!1}}},[e._v(e._s(e.localeText.SYS_Cancel))]),e._v(" "),n("b-button",{staticClass:"ml-3",attrs:{variant:"outline-success"},on:{click:function(t){return e.startexam("contest")}}},[e._v(e._s(e.localeText.Admin_Contest))]),e._v(" "),n("b-button",{staticClass:"ml-3",attrs:{variant:"outline-success"},on:{click:function(t){return e.startexam("exam")}}},[e._v(e._s(e.localeText.Admin_ExamStart))])],1)],1),e._v(" "),n("ExamMan",{staticClass:"mt-4",attrs:{cid:e.cid},on:{rowSelected:e.examRowSelected,start:e.examConfig}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ExamMan:n(1144).default})},855:function(e,t,n){"use strict";n(10),n(14),n(86),n(9),n(856),n(29),n(15);var r=n(228),o=n.n(r),c={pad:function(e){return e<10?"0"+e:e},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var n=Math.floor(t/60);return t%=60,"".concat(this.pad(n),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],n=Object.keys(e);return n.sort(),n.forEach((function(n){t.push(Object.assign({id:n},e[n]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var n=JSON.parse(JSON.stringify(e)),r=e.id;delete n.id,t[r]=n})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var n=0;n<e.length;n++)if(t==e[n].id)return n;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},856:function(e,t,n){"use strict";var r=n(8),o=n(857).start;r({target:"String",proto:!0,forced:n(858)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},857:function(e,t,n){var r=n(50),o=n(229),c=n(52),l=Math.ceil,m=function(e){return function(t,n,m){var d,x,h=String(c(t)),f=h.length,v=void 0===m?" ":String(m),_=r(n);return _<=f||""==v?h:(d=_-f,(x=o.call(v,l(d/v.length))).length>d&&(x=x.slice(0,d)),e?h+x:x+h)}};e.exports={start:m(!1),end:m(!0)}},858:function(e,t,n){var r=n(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)}}]);