(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1119:function(e,t,o){var content=o(1330);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(57).default)("395ba217",content,!0,{sourceMap:!1})},1329:function(e,t,o){"use strict";o(1119)},1330:function(e,t,o){(t=o(56)(!1)).push([e.i,'h1[data-v-4f9df0a4]{color:#00f;font-family:"Arial";font-size:120%;margin:24px 0;padding-bottom:3px;border-bottom:1px solid #000}.clabel[data-v-4f9df0a4]{padding:6px;display:inline-block;text-align:center;background:var(--teal);color:#fff;border-radius:6px}.clabel[data-v-4f9df0a4],.ebtn[data-v-4f9df0a4]{width:120px}',""]),e.exports=t},1435:function(e,t,o){"use strict";o.r(t);o(14),o(18),o(12),o(30),o(86),o(15),o(49);var r=o(7),c={data:function(){return{course:{},courses:null,mode:"show",kind:null,workMode:"show",selectUser:!1,infoAlert:!1,info:{title:"",message:""},courseForm:{name:"",teachers:[],assistants:[],school:"",dept:"",enrollCode:"",codeExpiredDate:"",codeExpiredTime:"",needApproval:!0,endDate:"",whitelist:"",note:""},localeText:{Course_Teachers:"教師",Course_Assistants:"助教",Course_Name:"課程名稱",Course_EnrollCode:"選課代碼",Course_School:"學校",Course_Department:"科系",Course_ProblemSet:"題庫",Course_EndDate:"結束日期",Course_Compilers:"程式語言",SYS_Edit:"編輯"}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.cid){t.next=2;break}return t.abrupt("return",e.$router.push("/user"));case 2:e.localeText=e.$updateLocaleText(e.localeText),e.updateCourse();case 4:case"end":return t.stop()}}),t)})))()},computed:{cid:function(){return this.$route.query.cid},manager:function(){return"admin"==this.$user("role")||"maintainer"==this.$user("role")}},methods:{updateCourse:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getCourse",e.cid);case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0={};case 5:e.course=t.t0;case 6:case"end":return t.stop()}}),t)})))()},showCompilers:function(e){return e?e.join(" / "):"c / cpp / python"},showSet:function(e){if(!e)return"";var t=[];return Object.keys(e).forEach((function(o){var s=e[o];t.push(s.name+"#"+s.mode)})),t.join(",")},editCourse:function(){this.$router.push("/teacher/edit?cid="+this.cid)},showNames:function(e){return e&&0!=e.length?e.map((function(e){return e.name})).join(", "):""}}},l=(o(1329),o(55)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v(e._s(e.course.name))]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_Teachers))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.showNames(e.course.teachers)))])]),e._v(" "),o("div",{staticClass:"col-md-6"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_Assistants))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.showNames(e.course.assistants)))])])]),e._v(" "),o("div",{staticClass:"row mt-3"},[o("div",{staticClass:"col-md-6"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_Name))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.course.name))])]),e._v(" "),o("div",{staticClass:"col-md-6"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_EnrollCode))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.course.enrollCode))])])]),e._v(" "),o("div",{staticClass:"row mt-3"},[o("div",{staticClass:"col-md-6"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_School))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.course.school))])]),e._v(" "),o("div",{staticClass:"col-md-6"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_Department))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.course.dept))])])]),e._v(" "),o("div",{staticClass:"row mt-3"},[o("div",{staticClass:"col-md-6"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_ProblemSet))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.showSet(e.course.problemSets)))])]),e._v(" "),o("div",{staticClass:"col-md-6"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_EndDate))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.course.endDate))])])]),e._v(" "),o("div",{staticClass:"row mt-3"},[o("div",{staticClass:"col"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.Course_Compilers))]),o("span",{staticClass:"ml-3"},[e._v(e._s(e.showCompilers(e.course.compilers)))])]),e._v(" "),o("div",{staticClass:"col"})]),e._v(" "),o("p",{staticClass:"mt-4",attrs:{align:"left"}},[o("b-button",{staticClass:"ebtn",attrs:{size:"sm",variant:"primary"},on:{click:e.editCourse}},[e._v(e._s(e.localeText.SYS_Edit))])],1)])}),[],!1,null,"4f9df0a4",null);t.default=component.exports}}]);