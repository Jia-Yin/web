(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{222:function(e,t,r){"use strict";r(27);var n=r(26);t.a=function(e){var t=e.store,r=e.redirect;return new Promise((function(e,c){n.c.onAuthStateChanged((function(c){return c?(c.emailVerified&&!t.state.user&&n.d.collection("users").doc(c.uid).get().then((function(e){var n=e.data();n.id=e.id,n.realrole=n.role,t.commit("setData",{name:"user",value:n}),r("/user")})),e()):(r("/login"),e())}))}))}},223:function(e,t,r){"use strict";t.a=function(e){var t=e.app;(function(i,s,e,g,t,a,r){i.GoogleAnalyticsObject=t,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(e),r=s.getElementsByTagName(e)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(a,r)})(window,document,"script",0,"ga"),ga("create","UA-137962358-1","auto"),t.router.afterEach((function(e,t){ga("set","page",e.fullPath),ga("send","pageview")}))}},224:function(e,t,r){"use strict";var n=r(3),c=r(359),o=r.n(c);r(824),r(834),r(835),r(101),r(345),r(346),r(836),r(837),r(838),r(347),r(839),r(840),r(348),r(841),r(843),r(844),r(845),r(847),r(848),r(349),r(849),r(850),r(851),r(852);n.default.use(o.a)},225:function(e,t,r){"use strict";var n=r(360);t.a=function(e){var t=e.store;e.req,e.isDev;Object(n.a)({key:"codinghere2021",paths:["params","system"]})(t)}},226:function(e,t,r){"use strict";t.a=function(e,t){var r=e.store;t("user",(function(e){if(r.state.user)return e&&""!==e?r.state.user[e]:r.state.user})),t("system",(function(e){return r.state.system&&r.state.system[e]})),t("params",(function(e){return r.state.params&&r.state.params[e]})),t("systemHasUserLocale",(function(){return!(!r.state.system||!r.state.system.locales)&&(!!r.state.system.locales.support&&(!r.state.user||!r.state.user.locale||r.state.user.locale in r.state.system.locales.support))})),t("selectUserLocaleText",(function(e){if(!e)return"";var t="en";return r.state.user&&r.state.user.locale&&(t=r.state.user.locale),t&&e[t]&&e[t].length>0?e[t]:e.en&&e.en.length>0?e.en:e.zh&&e.zh.length>0?e.zh:e})),t("selectLocaleText",(function(e,t){return e?t&&e[t]&&e[t].length>0?e[t]:e.en&&e.en.length>0?e.en:e.zh&&e.zh.length>0?e.zh:"string"==typeof e||e instanceof String?e:"":""})),t("updateLocaleText",(function(e){if(!r.state.system||!r.state.system.locales)return e;if(!r.state.user||!r.state.user.locale)return e;if(!r.state.system.locales.support)return e;var t=r.state.system.locales[r.state.user.locale];if(!t)return e;var n=e;for(var c in e)c in t&&(n[c]=t[c]);return n})),t("copyObject",(function(e){return JSON.parse(JSON.stringify(e))}))}},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return x}));r(49);var n=r(7),c=r(228),o=r.n(c),l=r(4),m=(r(511),r(512),r(853),new o.a("codinghere2021").decrypt("9f6b3aa4d1a424574dd7b66127b68ce0c35a95ae6b759fbca3a74f52756ea074DW77Lo71Ys3I35gQLHnC3+E1kqtubWkfhhWnw5dMMjz40BroL+o/ASXwjLe1LI36rXvHdymO+bGVB+IyZTU1pwClU5iGJqsjb97tMqNVqW0MmmM/w7fD6JYwnNdF+g9k0WTok7cmmfbQx6RRHJO0MBgn7iFQlbq443m226lVR3Wb3a3a7uI1EsQSWTTJEopBALheVMxOW89p7cjZs0nvUPNE9m7vqCWdl/duI8VJSXnPykvpAnSO9BjPdQsDgnxDH8uZGGupp/rYK9bxiL9WU0rI2J6CQ6V4thV19OHOs+6xJS0ERPr/TCKzH0Baiy3+M93mcZuh+ZasBk4QAOlVmaLTP0+R3YSmSBiSWmt32ccWPL7wxbOqyw741HP+xwm8MhLe+7EWYsj/SMp2CpW4Tw==dcc6b89081deba332458c7bfc7995b9cd081b18174696beb67a6acdcbbba9a4f"));!l.a.apps.length&&l.a.initializeApp(m);var f=m;function d(e){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(f.apiKey!==t.apiKey&&l.a.apps.length>0)){e.next=9;break}return f=t,e.next=4,h.signOut();case 4:return e.next=6,l.a.app().delete();case 6:l.a.initializeApp(t),h=l.a.auth(),x=l.a.firestore();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=l.a.auth(),x=l.a.firestore();l.a.storage().ref();t.b=l.a},321:function(e,t,r){var content=r(544);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("f11df3b6",content,!0,{sourceMap:!1})},322:function(e,t,r){var content=r(546);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("2b8c0c3c",content,!0,{sourceMap:!1})},362:function(e,t,r){"use strict";var n={name:"default",created:function(){this.$route.query&&"exam"===this.$route.query.case&&(this.rootUrl="")},methods:{setLocale:function(e){this.$store.commit("setParam",{name:"locale",value:e})}}},c=(r(543),r(55)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-navbar",{attrs:{type:"light",variant:"light"}},[r("b-navbar-brand",{attrs:{to:"/"}},[r("img",{attrs:{src:"tlogo.png"}})]),e._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{on:{click:function(t){return e.setLocale("en")}}},[e._v("English")]),e._v(" "),r("b-nav-item",{on:{click:function(t){return e.setLocale("zh")}}},[e._v("中文")])],1)],1)],1),e._v(" "),r("nuxt")],1)}),[],!1,null,"6ca910e6",null);t.a=component.exports},363:function(e,t,r){"use strict";r(49);var n=r(7),c={methods:{logout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/afterexam");case 3:case"end":return t.stop()}}),t)})))()}}},o=r(55),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-container",{attrs:{fluid:""}},[t("b-navbar",{attrs:{type:"dark",variant:"primary"}},[t("b-navbar-brand",[this._v(this._s(this.$user("name")))])],1),this._v(" "),t("nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},364:function(e,t,r){"use strict";r(58),r(86),r(27),r(87),r(49);var n=r(7),c=r(26),o={data:function(){return{is_admin:!1,is_teacher:!1,out:!1,localeText:{UserNav_BasicPractice:"練習廣場",UserNav_HomeworkArea:"作業園區",UserNav_Logout:"登出",UserNav_LogoutAlert:"確定登出嗎？",User_Dashboard:"資訊總表",User_Courses:"課程訊息",User_Records:"學習記錄",User_Profile:"基本資料",User_SiteNews:"平台訊息",User_AdminFunction:"管理功能",User_Report:"期末報告"}}},computed:{inCSClass:function(){return!1},adminPerson:function(){return!!(this.$user("teach")&&Object.keys(this.$user("teach")).length>0)||(!!(this.$user("assist")&&Object.keys(this.$user("assist")).length>0)||("admin"===this.$user("role")||"maintainer"===this.$user("role")))}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.localeText=e.$updateLocaleText(e.localeText),t.next=3,c.d.collection("courses").doc("LIST").get();case 3:if(r=t.sent,"admin"===e.$user("role")&&(e.is_admin=!0),n=e.$user("id"),!r.exists){t.next=21;break}o=r.data(),t.t0=regeneratorRuntime.keys(o);case 9:if((t.t1=t.t0()).done){t.next=21;break}if(l=t.t1.value,!o[l].teachers){t.next=15;break}if(!o[l].teachers.some((function(e){return e.id===n}))){t.next=15;break}return e.is_teacher=!0,t.abrupt("break",21);case 15:if(!o[l].assistants){t.next=19;break}if(!o[l].assistants.some((function(e){return e.id===n}))){t.next=19;break}return e.is_teacher=!0,t.abrupt("break",21);case 19:t.next=9;break;case 21:case"end":return t.stop()}}),t)})))()},methods:{logout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}}},l=(r(545),r(55)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-navbar",{attrs:{type:"light",variant:"light"}},[r("b-navbar-brand",{attrs:{to:"/user"}},[r("img",{attrs:{src:"tlogo.png"}})]),e._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[e.inCSClass?r("b-nav-item",{staticClass:"mr-3",attrs:{to:"/user/report",active:"user-report"===e.$route.name}},[e._v("\n                "+e._s(e.localeText.User_Report)+"\n            ")]):e._e(),e._v(" "),e.is_admin?e._e():r("b-nav-item",{staticClass:"ml-3",attrs:{to:"/user/course",active:"user-course"===e.$route.name}},[e._v("\n                "+e._s(e.localeText.User_Courses)+"\n            ")]),e._v(" "),e.is_admin?e._e():r("b-nav-item",{staticClass:"ml-3",attrs:{to:"/user/records",active:"user-records"===e.$route.name}},[e._v("\n                "+e._s(e.localeText.User_Records)+"\n            ")]),e._v(" "),r("b-nav-item",{staticClass:"ml-3",attrs:{to:"/user/playground",active:"user-playground"===e.$route.name}},[e._v("\n                "+e._s(e.localeText.UserNav_BasicPractice)+"\n            ")]),e._v(" "),r("b-nav-item",{staticClass:"ml-3",attrs:{to:"/user/profile",active:"user-profile"===e.$route.name}},[e._v("\n                "+e._s(e.localeText.User_Profile)+"\n            ")]),e._v(" "),e.is_admin?r("b-nav-item",{staticClass:"ml-3",attrs:{to:"/admin",active:e.$route.name.indexOf("admin")>=0}},[e._v("\n                "+e._s(e.localeText.User_AdminFunction)+"\n            ")]):e._e(),e._v(" "),r("b-nav-item",{staticClass:"ml-3",on:{click:function(t){e.out=!0}}},[e._v("\n                "+e._s(e.localeText.UserNav_Logout)+"\n            ")])],1),e._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{to:"/user/records"}},[r("b-avatar",{attrs:{variant:"primary",size:"1.32em"}}),e._v(" "),r("span",{staticClass:"ml-1 name"},[e._v(e._s(e.$user("name")))])],1)],1)],1),e._v(" "),r("b-modal",{attrs:{title:e.localeText.UserNav_Logout},on:{ok:e.logout},model:{value:e.out,callback:function(t){e.out=t},expression:"out"}},[r("p",{staticClass:"my-4"},[e._v(e._s(e.localeText.UserNav_LogoutAlert))])]),e._v(" "),r("nuxt")],1)}),[],!1,null,"73190d60",null);t.a=component.exports},365:function(e,t,r){"use strict";var n=r(55),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},372:function(e,t,r){r(373),e.exports=r(374)},387:function(e,t,r){"use strict";r.r(t);r(49);var n=r(7);r(26);function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.redirect,r.state.user){e.next=5;break}return e.abrupt("return",n("/login"));case 5:if("user"!=r.state.user.realrole){e.next=7;break}return e.abrupt("return",n("/user"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){return c.apply(this,arguments)}},394:function(e,t){},396:function(e,t){},406:function(e,t){},408:function(e,t){},433:function(e,t){},435:function(e,t){},436:function(e,t){},441:function(e,t){},443:function(e,t){},449:function(e,t){},451:function(e,t){},470:function(e,t){},482:function(e,t){},485:function(e,t){},513:function(e,t,r){"use strict";r.r(t);r(47),r(49);var n=r(7),c=r(26);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,o,l,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.redirect,t.route,r.state.user){e.next=5;break}return e.abrupt("return",n("/login"));case 5:r.state.vparams&&!r.state.vparams.timer&&(o=0,r.state.params&&r.state.params.tick?o=r.state.params.tick:r.commit("setParam",{name:"tick",value:o}),l=window.setInterval((function(){o++,r.commit("setParam",{name:"tick",value:o})}),1e3),r.commit("setVParam",{name:"timer",value:l})),r.state.vparams&&!r.state.vparams.listener&&(m=c.d.collection("comms").doc("user").onSnapshot((function(e){r.commit("setVParam",{name:"listen",value:e.data()})})),r.commit("setVParam",{name:"listener",value:m}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){return o.apply(this,arguments)}},514:function(e,t,r){"use strict";r.r(t);r(30),r(49);var n=r(7);r(26);function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.redirect,c=t.route,!r.state.user){e.next=10;break}if("login"!==c.name||"exam"!==c.query.case){e.next=7;break}return e.next=5,r.dispatch("logout");case 5:e.next=10;break;case 7:if(!r.state.params||!r.state.params.client){e.next=9;break}return e.abrupt("return",n("/exam/codinghereexam"));case 9:return e.abrupt("return",n("/user"));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){return c.apply(this,arguments)}},543:function(e,t,r){"use strict";r(321)},544:function(e,t,r){(t=r(56)(!1)).push([e.i,".container-fluid[data-v-6ca910e6]{margin:0;padding:0}",""]),e.exports=t},545:function(e,t,r){"use strict";r(322)},546:function(e,t,r){(t=r(56)(!1)).push([e.i,".container-fluid[data-v-73190d60]{margin:0;padding:0}.name[data-v-73190d60]{color:#00f}.nav-link[data-v-73190d60]:hover{color:red}",""]),e.exports=t},547:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return l})),r.d(t,"mutations",(function(){return m})),r.d(t,"actions",(function(){return f}));r(370),r(14),r(156),r(30),r(15),r(49);var n=r(7),c=r(3),o=r(26),l=function(){return{user:null,params:{},system:{},vparams:{},dummy:null,courseCache:{},problemCache:{}}},m={reset:function(e){e.vparams&&e.vparams.listener&&e.vparams.listener(),e.vparams&&e.vparams.timer&&window.clearInterval(e.vparams.timer),c.default.set(e,"user",null),c.default.set(e,"params",{}),c.default.set(e,"system",{}),c.default.set(e,"dummy",null),c.default.set(e,"courseCache",{}),c.default.set(e,"problemCache",{})},setData:function(e,data){c.default.set(e,data.name,data.value)},appendListItem:function(e,t){e[t.list].push(t.value)},deleteListItem:function(e,t){e[t.list].findIndex((function(e){return e.id===t.id}))>=0&&e[t.list].splice(i,1)},updateListItem:function(e,t){e[t.list].findIndex((function(e){return e.id===t.id}))>=0&&e[t.list].splice(i,1,t.value)},setObjItem:function(e,t){var data=JSON.parse(JSON.stringify(t.value));c.default.set(e[t.obj],t.name,data)},unsetObjItem:function(e,t){c.default.delete(e[t.obj],t.name)},setParam:function(e,data){c.default.set(e.params,data.name,data.value)},setVParam:function(e,data){c.default.set(e.vparams,data.name,data.value)},unsetParam:function(e,t){c.default.delete(e.params,t.name)},unsetVParam:function(e,t){c.default.delete(e.vparams,t.name)},updateCourse:function(e,t){var r=e.courseCache[t.id],n=JSON.parse(JSON.stringify(t.value));for(var o in n)c.default.set(r,o,n[o])}},f={setCourse:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.state,n=e.commit,r.next=3,o.d.collection("courses").doc(t.id).set(t.value);case 3:n("setObjItem",{obj:"courseCache",name:t.id,value:t.value});case 4:case"end":return r.stop()}}),r)})))()},updateCourse:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.state,c=e.commit,r.next=3,o.d.collection("courses").doc(t.id).update(t.value);case 3:t.id in n.courseCache&&c("updateCourse",t);case 4:case"end":return r.stop()}}),r)})))()},getCourseT:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,o.d.collection("courses").doc(t).get();case 3:if(!(c=r.sent).exists){r.next=8;break}return data=c.data(),n("setObjItem",{obj:"courseCache",name:t,value:data}),r.abrupt("return",data);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()},getCourse:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.state,c=e.dispatch,!(t in n.courseCache)){r.next=3;break}return r.abrupt("return",n.courseCache[t]);case 3:return r.next=5,c("getCourseT",t);case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}}),r)})))()},login:function(e,form){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o.c.signInWithEmailAndPassword(form.email,form.password);case 3:if(!(n=o.c.currentUser)){t.next=20;break}if(!n.emailVerified){t.next=16;break}return t.next=8,o.d.collection("users").doc(n.uid).get();case 8:return c=t.sent,(l=c.data()).id=c.id,l.realrole=l.role,r("setData",{name:"user",value:l}),t.abrupt("return","OK");case 16:return r("setData",{name:"user",value:null}),t.abrupt("return","EmailNotVerified");case 18:t.next=22;break;case 20:return r("setData",{name:"user",value:null}),t.abrupt("return","Error");case 22:case"end":return t.stop()}}),t)})))()},getLocales:function(e,form){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o.c.signInWithEmailAndPassword(form.email,form.password);case 3:if(!(n=o.c.currentUser)){t.next=19;break}if(!n.emailVerified){t.next=15;break}return t.next=8,o.d.collection("users").doc(n.uid).get();case 8:return c=t.sent,(l=c.data()).id=c.id,r("setData",{name:"user",value:l}),t.abrupt("return","OK");case 15:return r("setData",{name:"user",value:null}),t.abrupt("return","EmailNotVerified");case 17:t.next=21;break;case 19:return r("setData",{name:"user",value:null}),t.abrupt("return","Error");case 21:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o.c.signOut();case 3:r("reset");case 4:case"end":return t.stop()}}),t)})))()},getCollection:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,l,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.state,c=e.commit,r.prev=1,r.next=4,o.d.collection(t).get();case 4:if((l=r.sent).empty){r.next=10;break}return m={},l.forEach((function(e){m[e.id]=e.data()})),t in n&&c("setData",{name:t,value:m}),r.abrupt("return",m);case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.log("Error",r.t0),r.abrupt("return",{});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},78:function(e,t,r){"use strict";var n={created:function(){this.$router.push("/")}},c=r(55),component=Object(c.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("b-container",[this._v(" Error Occured! Redirecting... ")])}),[],!1,null,null,null);t.a=component.exports}},[[372,77,9,78]]]);