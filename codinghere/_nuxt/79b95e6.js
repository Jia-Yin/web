(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1038:function(t,e,n){"use strict";n(893)},1039:function(t,e,n){(e=n(59)(!1)).push([t.i,".jumbotron[data-v-9211488a]{margin-top:48px;line-height:180%;text-align:center}",""]),t.exports=e},1067:function(t,e,n){"use strict";n.r(e);n(54);var o=n(14),r=(n(46),{data:function(){return{out:!1,page:null,localeTexts:{zh:{home:"回主畫面",logout:"登出",login:"登入",register:"註冊"},en:{home:"Back to Home",logout:"Logout",login:"Login",register:"Register"}},localeText:null}},computed:{user:function(){return this.$store.state.user},locale:function(){return this.$store.state.params.locale}},created:function(){this.setContent()},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("logout");case 2:case"end":return e.stop()}}),e)})))()},setContent:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("en"!==t.locale){e.next=7;break}return t.localeText=t.localeTexts.en,e.next=4,t.$content("en/home").fetch();case 4:t.page=e.sent,e.next=11;break;case 7:return t.localeText=t.localeTexts.zh,e.next=10,t.$content("zh/home").fetch();case 10:t.page=e.sent;case 11:case"end":return e.stop()}}),e)})))()}},watch:{locale:function(t){this.setContent()}}}),c=(n(1038),n(70)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-jumbotron",[n("nuxt-content",{attrs:{document:t.page}}),t._v(" "),t.user?n("p",{staticClass:"action"},[n("b-button",{attrs:{variant:"outline-success",to:"/user"}},[t._v("\n                "+t._s(t.localeText.home)+"\n            ")]),t._v("\n                   \n            "),n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){t.out=!0}}},[t._v("\n                "+t._s(t.localeText.logout)+"\n            ")])],1):n("p",{staticClass:"action"},[n("b-button",{attrs:{variant:"outline-success",to:"/login"}},[t._v("\n                "+t._s(t.localeText.login)+"\n            ")]),t._v("\n                   \n            "),n("b-button",{attrs:{variant:"outline-success",to:"/register"}},[t._v("\n                "+t._s(t.localeText.register)+"\n            ")])],1)],1),t._v(" "),n("b-modal",{attrs:{title:"即將登出"},on:{ok:t.logout},model:{value:t.out,callback:function(e){t.out=e},expression:"out"}},[n("p",{staticClass:"my-4"},[t._v("確定登出嗎？")])])],1)}),[],!1,null,"9211488a",null);e.default=component.exports},893:function(t,e,n){var content=n(1039);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("6b1d4e71",content,!0,{sourceMap:!1})}}]);