(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{322:function(t,n,r){var content=r(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("36af7f03",content,!0,{sourceMap:!1})},367:function(t,n,r){"use strict";var e=r(322);r.n(e).a},368:function(t,n,r){(t.exports=r(27)(!1)).push([t.i,"section[data-v-220919c5]{margin-top:24px;padding:10px;border:1px solid #d3d3d3}.scontent[data-v-220919c5]{padding:6px 50px}.btn[data-v-220919c5]{width:100px;margin-right:18px}p[data-v-220919c5]{color:#00f}",""])},405:function(t,n,r){"use strict";r.r(n);r(21),r(40);var e,o=r(10),c={data:function(){return{showItems:8}},mounted:(e=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$store.state.admin.users){t.next=3;break}return t.next=3,this.$store.dispatch("admin/getCollection","users");case 3:if(this.$store.state.admin.courses){t.next=6;break}return t.next=6,this.$store.dispatch("admin/getCollection","courses");case 6:if(this.$store.state.admin.problems){t.next=9;break}return t.next=9,this.$store.dispatch("admin/getCollection","problems");case 9:if(this.$store.state.admin.groups){t.next=12;break}return t.next=12,this.$store.dispatch("admin/getCollection","groups");case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)}),computed:{userstat:function(){return this.summary(this.$store.state.admin.users)},coursestat:function(){return this.summary(this.$store.state.admin.courses)},problemstat:function(){return this.summary(this.$store.state.admin.problems)},groupstat:function(){return this.summary(this.$store.state.admin.groups)}},methods:{summary:function(t){if(t){for(var n="("+t.length+") ",i=0;i<Math.min(t.length,this.showItems);i++)n+="&nbsp;&nbsp;&nbsp;<u>"+(t[i].name||t[i].title)+"</u>";return t.length>this.showItems&&(n+="&nbsp;&nbsp;......"),n}return"Counting..."}}},d=(r(367),r(15)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("b-container",{attrs:{fluid:""}},[r("section",[r("b-alert",{attrs:{show:""}},[t._v("Summary")]),t._v(" "),r("div",{staticClass:"scontent"},[r("p",[r("b-button",{attrs:{pill:"",variant:"warning",to:"/admin/user"}},[t._v("使用者")]),t._v(" "),r("span",{domProps:{innerHTML:t._s(t.userstat)}})],1),t._v(" "),r("p",[r("b-button",{attrs:{pill:"",variant:"warning",to:"/admin/course"}},[t._v("課程")]),t._v(" "),r("span",{domProps:{innerHTML:t._s(t.coursestat)}})],1),t._v(" "),r("p",[r("b-button",{attrs:{pill:"",variant:"warning",to:"/admin/group"}},[t._v("題組")]),t._v(" "),r("span",{domProps:{innerHTML:t._s(t.groupstat)}})],1),t._v(" "),r("p",[r("b-button",{attrs:{pill:"",variant:"warning",to:"/admin/problem"}},[t._v("題目")]),t._v(" "),r("span",{domProps:{innerHTML:t._s(t.problemstat)}})],1)])],1),t._v(" "),r("section",[r("b-alert",{attrs:{show:""}},[t._v("MISC")]),t._v(" "),r("div",{staticClass:"scontent"},[r("nuxt-link",{attrs:{to:"/user/coding"}},[t._v("練習廣場")])],1)],1)])],1)}),[],!1,null,"220919c5",null);n.default=component.exports}}]);