(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1106:function(t,e,n){"use strict";n(911)},1107:function(t,e,n){(e=n(60)(!1)).push([t.i,".col-2[data-v-b9adaf6c]{padding:24px}.col-10[data-v-b9adaf6c]{padding:12px;border-left:1px solid #90ee90}.list-group-item[data-v-b9adaf6c]{width:80%;margin:20px auto;border-radius:20px;text-align:center;border:1px solid green;padding:6px}.list-group-item.active[data-v-b9adaf6c]{margin:20px auto}.container[data-v-b9adaf6c]{margin-top:30px;background:#f6faf6;min-height:600px}",""]),t.exports=e},1309:function(t,e,n){"use strict";n.r(e);var r={layout:"normal_user",middleware:"admin",data:function(){return{tcourses:{},localeText:{Admin_CourseManagement:"課程管理",Admin_UserManagement:"使用者管理",Admin_ProblemManagement:"題庫管理",Admin_SiteManagement:"網站設定",Admin_UserFunction:"使用者界面"}}},computed:{atLeastMaintainer:function(){return"admin"==this.$user("role")||"maintainer"==this.$user("role")},atLeastAssistant:function(){return"user"!=this.$user("role")}},created:function(){this.localeText=this.$updateLocaleText(this.localeText);var t=this.$user("");if(t.teach)for(var e in t.teach)this.tcourses[e]=t.teach[e];if(t.assist)for(var n in t.assist)this.tcourses[n]=t.assist[n]},methods:{apath:function(t){console.log("RN, k",this.$route,t)}}},o=(n(1106),n(55)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{cols:"2"}},[n("b-list-group",[t.atLeastMaintainer?n("b-list-group-item",{attrs:{to:"/admin/courses",variant:"danger",active:"admin-courses"==t.$route.name}},[t._v(t._s(t.localeText.Admin_CourseManagement))]):t._e(),t._v(" "),t._l(t.tcourses,(function(e,r){return n("b-list-group-item",{key:r,attrs:{to:"/admin/"+r,variant:"danger",active:t.$route.params.course==r}},[t._v(t._s(e))])})),t._v(" "),"admin"==t.$user("role")?n("b-list-group-item",{attrs:{to:"/admin/users",variant:"danger",active:"admin-users"==t.$route.name}},[t._v(t._s(t.localeText.Admin_UserManagement))]):t._e(),t._v(" "),t.atLeastAssistant?n("b-list-group-item",{attrs:{to:"/admin/problems",variant:"danger",active:"admin-problems"==t.$route.name}},[t._v(t._s(t.localeText.Admin_ProblemManagement))]):t._e(),t._v(" "),"admin"==t.$user("role")?n("b-list-group-item",{attrs:{to:"/admin/site",variant:"danger",active:"admin-site"==t.$route.name}},[t._v(t._s(t.localeText.Admin_SiteManagement))]):t._e(),t._v(" "),n("b-list-group-item",{attrs:{to:"/user",variant:"warning"}},[t._v(t._s(t.localeText.Admin_UserFunction))])],2),t._v(" "),"admin"==t.$user("role")?n("div",[n("hr"),t._v(" "),n("p",{attrs:{align:"center"}},[n("b-link",{attrs:{to:"/contest"}},[t._v("Contest")])],1)]):t._e()],1),t._v(" "),n("b-col",{attrs:{cols:"10"}},[n("nuxt-child")],1)],1)],1)}),[],!1,null,"b9adaf6c",null);e.default=component.exports},911:function(t,e,n){var content=n(1107);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("2a6bb7f7",content,!0,{sourceMap:!1})}}]);