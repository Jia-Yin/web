(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1138:function(e,t,o){"use strict";o(930)},1139:function(e,t,o){(t=o(56)(!1)).push([e.i,'h1[data-v-c3a83e58]{color:#00f;font-family:"Arial";font-size:120%;margin:24px 0;padding-bottom:3px;border-bottom:1px solid #000}',""]),e.exports=t},1352:function(e,t,o){"use strict";o.r(t);o(14),o(18),o(12),o(30),o(86),o(15),o(49);var r=o(7),n={data:function(){return{course:{},courses:null,mode:"show",kind:null,workMode:"show",selectUser:!1,infoAlert:!1,info:{title:"",message:""},courseForm:{name:"",teachers:[],assistants:[],school:"",dept:"",enrollCode:"",codeExpiredDate:"",codeExpiredTime:"",needApproval:!0,endDate:"",whitelist:"",note:""}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getCourse",e.$route.params.id);case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0={};case 5:e.course=t.t0;case 6:case"end":return t.stop()}}),t)})))()},computed:{manager:function(){return"admin"==this.$user("role")||"maintainer"==this.$user("role")},cid:function(){return this.$route.params.id}},methods:{showSet:function(e){var t=[];return Object.keys(e).forEach((function(o){var s=e[o];t.push(s.name+"#"+s.mode)})),t.join(",")},editCourse:function(){this.$router.push("/admin/courses/"+this.cid+"/edit")},showNames:function(e){return e&&0!=e.length?e.map((function(e){return e.name})).join(", "):""}}},c=(o(1138),o(55)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v(e._s(e.course.name))]),e._v(" "),o("p",[e._v("Teacher: "+e._s(e.showNames(e.course.teachers)))]),e._v(" "),o("p",[e._v("Assistant: "+e._s(e.showNames(e.course.assistants)))]),e._v(" "),o("p",[e._v("School: "+e._s(e.course.school))]),e._v(" "),o("p",[e._v("Dept: "+e._s(e.course.dept))]),e._v(" "),e.course.enrollCode?o("p",[e._v("Enroll code: "+e._s(e.course.enrollCode))]):e._e(),e._v(" "),e.course.codeExpired?o("p",[e._v("\n        Enroll code expired: "+e._s(e.course.codeExpired)+"\n    ")]):e._e(),e._v(" "),e.course.needApproval?o("p",[e._v("\n        Enroll code need approval: "+e._s(e.course.needApproval)+"\n    ")]):e._e(),e._v(" "),e.course.endDate?o("p",[e._v("\n        Course end date: "+e._s(e.course.endDate)+"\n    ")]):e._e(),e._v(" "),e.course.problemSets?o("p",[e._v("\n        Problem Sets: "+e._s(e.showSet(e.course.problemSets))+"\n    ")]):e._e(),e._v(" "),e.course.whitelist?o("p",[e._v("White List: "+e._s(e.course.whitelist))]):e._e(),e._v(" "),e.course.note?o("p",[e._v("Note: "+e._s(e.course.note))]):e._e(),e._v(" "),o("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.editCourse}},[e._v("Edit")]),e._v(" "),o("b-button",{attrs:{size:"sm",variant:"primary",to:"/admin/courses"}},[e._v("Return")])],1)}),[],!1,null,"c3a83e58",null);t.default=component.exports},930:function(e,t,o){var content=o(1139);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(57).default)("73dde08c",content,!0,{sourceMap:!1})}}]);