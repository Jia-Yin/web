(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1108:function(e,t,r){var content=r(1310);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("88cd7814",content,!0,{sourceMap:!1})},1309:function(e,t,r){"use strict";r(1108)},1310:function(e,t,r){(t=r(56)(!1)).push([e.i,".cname[data-v-44da2064]{color:#00f;text-align:center}.col-2[data-v-44da2064]{padding:24px}.col-10[data-v-44da2064]{padding:12px;border-left:1px solid #90ee90}.list-group-item[data-v-44da2064]{width:80%;margin:20px auto;border-radius:20px;text-align:center;border:1px solid green;padding:6px}.list-group-item.active[data-v-44da2064]{margin:20px auto}.container[data-v-44da2064]{margin-top:30px;background:#f6faf6;min-height:600px}",""]),e.exports=t},1399:function(e,t,r){"use strict";r.r(t);r(58),r(49);var n=r(7),o={data:function(){return{course:{},localeText:{Admin_CourseManagement:"課程管理",Admin_UserManagement:"使用者管理",Admin_ProblemManagement:"題庫管理",Admin_SiteManagement:"網站設定",Admin_UserFunction:"使用者界面"}}},computed:{cid:function(){return this.$route.params.id}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.localeText=e.$updateLocaleText(e.localeText),r=e.$user(""),t.next=4,e.$store.dispatch("getCourse",e.cid);case 4:e.course=t.sent,!1,e.course&&e.course.teachers&&e.course.teachers.some((function(e){return e.id===r.id}))&&!0,e.course&&e.course.assistants&&e.course.assistants.some((function(e){return e.id===r.id}))&&!0;case 8:case"end":return t.stop()}}),t)})))()}},c=(r(1309),r(55)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("div",{staticClass:"cname"},[e._v(e._s(e.course.name))]),e._v(" "),r("b-list-group",[r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/students",variant:"danger",active:e.$route.name.includes("students")}},[e._v("修課清單")]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/units",variant:"danger",active:e.$route.name.includes("units")}},[e._v("課程單元")]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/scores",variant:"danger",active:e.$route.name.includes("scores")}},[e._v("成績管理")]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/problems",variant:"danger",active:e.$route.name.includes("problems")}},[e._v("題目管理")]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/profile",variant:"danger",active:e.$route.name.includes("profile")}},[e._v("課程資訊")])],1)],1),e._v(" "),r("b-col",{attrs:{cols:"10"}},[r("nuxt-child")],1)],1)],1)}),[],!1,null,"44da2064",null);t.default=component.exports}}]);