(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1076:function(e,t,r){"use strict";r(909)},1077:function(e,t,r){(t=r(60)(!1)).push([e.i,".col-2[data-v-7d930ff8]{padding:24px}.col-10[data-v-7d930ff8]{padding:12px;border-left:1px solid #90ee90}.list-group-item[data-v-7d930ff8]{width:80%;margin:20px auto;border-radius:20px;text-align:center;border:1px solid green;padding:6px}.list-group-item.active[data-v-7d930ff8]{margin:20px auto}",""]),e.exports=t},1130:function(e,t,r){"use strict";r.r(t);r(103);var o={middleware:"authentication",layout:"normal_user",data:function(){return{localeText:{User_Courses:"課程訊息",User_Records:"學習記錄",User_Profile:"基本資料",User_SiteNews:"平台訊息",User_AdminFunction:"管理功能"}}},computed:{adminPerson:function(){return!!(this.$user("teach")&&Object.keys(this.$user("teach")).length>0)||(!!(this.$user("assist")&&Object.keys(this.$user("assist")).length>0)||("admin"===this.$user("role")||"maintainer"===this.$user("role")))}},created:function(){this.localeText=this.$updateLocaleText(this.localeText)}},n=(r(1076),r(55)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("b-list-group",[r("b-list-group-item",{attrs:{to:"/user/course",variant:"warning",active:"user-course"==e.$route.name}},[e._v(e._s(e.localeText.User_Courses))]),e._v(" "),r("b-list-group-item",{attrs:{to:"/user/records",variant:"warning",active:"user-records"==e.$route.name}},[e._v(e._s(e.localeText.User_Records))]),e._v(" "),r("b-list-group-item",{attrs:{to:"/user/profile",variant:"warning",active:"user-profile"==e.$route.name}},[e._v(e._s(e.localeText.User_Profile))]),e._v(" "),r("b-list-group-item",{attrs:{to:"/user/site",variant:"warning",active:"user-site"==e.$route.name}},[e._v(e._s(e.localeText.User_SiteNews))]),e._v(" "),e.adminPerson?r("b-list-group-item",{attrs:{to:"/admin",variant:"danger"}},[e._v(e._s(e.localeText.User_AdminFunction))]):e._e()],1)],1),e._v(" "),r("b-col",{attrs:{cols:"10"}},[r("nuxt-child")],1)],1)],1)}),[],!1,null,"7d930ff8",null);t.default=component.exports},909:function(e,t,r){var content=r(1077);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("8670d26c",content,!0,{sourceMap:!1})}}]);