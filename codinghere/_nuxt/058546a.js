(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{222:function(e,t,r){"use strict";t.a=function(e){var t=e.app;(function(i,s,e,g,t,a,r){i.GoogleAnalyticsObject=t,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(e),r=s.getElementsByTagName(e)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(a,r)})(window,document,"script",0,"ga"),ga("create","UA-137962358-1","auto"),t.router.afterEach((function(e,t){ga("set","page",e.fullPath),ga("send","pageview")}))}},223:function(e,t,r){"use strict";var n=r(3),c=r(356),o=r.n(c);r(810),r(820),r(821),r(99),r(343),r(344),r(822),r(823),r(824),r(345),r(825),r(826),r(346),r(827),r(829),r(830),r(831),r(833),r(834),r(347),r(835),r(836),r(837),r(838);n.default.use(o.a)},224:function(e,t,r){"use strict";var n=r(357);t.a=function(e){var t=e.store;e.req,e.isDev;Object(n.a)({key:"iamhereforcoding",paths:["user","params","system"]})(t)}},225:function(e,t,r){"use strict";t.a=function(e,t){var r=e.store;t("user",(function(e){if(r.state.user)return e?r.state.user[e]:r.state.user})),t("system",(function(e){return r.state.system&&r.state.system[e]})),t("params",(function(e){return r.state.params&&r.state.params[e]})),t("systemHasUserLocale",(function(){return!(!r.state.system||!r.state.system.locales)&&(!!r.state.system.locales.support&&(!r.state.user||!r.state.user.locale||r.state.user.locale in r.state.system.locales.support))})),t("selectUserLocaleText",(function(e){if(!e)return"";if(!r.state.user||!r.state.user.locale)return"";var t=r.state.user.locale;return t&&e[t]&&e[t].length>0?e[t]:e.en&&e.en.length>0?e.en:e.zh&&e.zh.length>0?e.zh:e})),t("selectLocaleText",(function(e,t){return e?t&&e[t]&&e[t].length>0?e[t]:e.en&&e.en.length>0?e.en:e.zh&&e.zh.length>0?e.zh:"string"==typeof e||e instanceof String?e:"":""})),t("updateLocaleText",(function(e){if(!r.state.system||!r.state.system.locales)return e;if(!r.state.user||!r.state.user.locale)return e;if(!r.state.system.locales.support)return e;var t=r.state.system.locales[r.state.user.locale];if(!t)return e;var n=e;for(var c in e)c in t&&(n[c]=t[c]);return n})),t("copyObject",(function(e){return JSON.parse(JSON.stringify(e))}))}},317:function(e,t,r){var content=r(539);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("1c3b4b5f",content,!0,{sourceMap:!1})},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return x}));r(54);var n=r(10),c=r(227),o=r.n(c),l=r(4),f=(r(506),r(507),r(839),new o.a("fromJYW").decrypt("140753a33d81431de00f7a28923b56b1812cb72523c61cfa622033ec6504f623VRv42OtQrzyEHYGx+38g+DsIITDhMWWpJcDIPOb2DrVMv+Mmk5afvpsRsB+vFXPxMc/7vyv5gsSqztrR0sQQ587HMP28e6+POwabTlWxs6qHHKzBQvhTyOS2bO4ck/ijF4TlOEnLWV5Qw/so+b2gXAQE5BnEkTzQfyVxfjiHdTBafePQS4CP7+RQ5daA5t6i3NSDsMQXO98scBHKVZEbxagAmea//totFlMo69ZkLzR1xk3PI+dC4kqyMK6vvW5LlVl3ytAU0/oz8yfgXRgp+HU/xoyFv++BYznrozr2jqRMMWUvsfrK/4cTggxlM6KHUEcCpPVsXH8erwWy6sQ5WrRxe+EFQ0yU/TctzkqZVi7NuaGQPdw5w/8ELfbYzalQGWaUMKlrGKD8YHOFbNFB2x9IaIsDIrNzE8NhBCzWSKULlk5M+4EG+OCgpfeRW99V8d1f489bdfc622d4212944907f836d88f00a0d193e65b187ce91802b09da5799"));!l.a.apps.length&&l.a.initializeApp(f);var m=f;function v(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m.apiKey!==t.apiKey&&l.a.apps.length>0)){e.next=9;break}return m=t,e.next=4,h.signOut();case 4:return e.next=6,l.a.app().delete();case 6:l.a.initializeApp(t),h=l.a.auth(),x=l.a.firestore();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=l.a.auth(),x=l.a.firestore();l.a.storage().ref();t.b=l.a},359:function(e,t,r){"use strict";var n={name:"default",methods:{setLocale:function(e){this.$store.commit("setParam",{name:"locale",value:e})}}},c=r(70),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-navbar",{attrs:{type:"dark",variant:"primary"}},[r("b-navbar-brand",{attrs:{to:"/"}},[e._v("CodingHere")]),e._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{on:{click:function(t){return e.setLocale("en")}}},[e._v("English")]),e._v(" "),r("b-nav-item",{on:{click:function(t){return e.setLocale("zh")}}},[e._v("中文")])],1)],1)],1),e._v(" "),r("nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},360:function(e,t,r){"use strict";r(54);var n=r(10),c={layout:"normal_user",middleware:"authentication",data:function(){return{out:!1,localeText:{UserNav_BasicPractice:"練習廣場",UserNav_HomeworkArea:"作業園區",UserNav_Logout:"登出",UserNav_LogoutAlert:"確定登出嗎？"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText)},methods:{logout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}}},o=(r(538),r(70)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-navbar",{attrs:{type:"dark",variant:"primary"}},[r("b-navbar-brand",{attrs:{to:"/"}},[e._v("CodingHere")]),e._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{to:"/user/playground"}},[r("span",[e._v(e._s(e.localeText.UserNav_BasicPractice))])]),e._v(" "),r("b-nav-item",{staticClass:"ml-3",attrs:{to:"/user/homework"}},[r("span",[e._v(e._s(e.localeText.UserNav_HomeworkArea))])]),e._v(" "),r("b-nav-item",{staticClass:"ml-3",on:{click:function(t){e.out=!0}}},[e._v("\n                "+e._s(e.localeText.UserNav_Logout)+"\n            ")])],1),e._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{to:"/user/records"}},[r("b-avatar",{attrs:{variant:"success",size:"1.32em"}}),e._v(" "),r("span",{staticClass:"ml-1"},[e._v(e._s(e.$user("name")))])],1)],1)],1),e._v(" "),r("b-modal",{attrs:{title:e.localeText.UserNav_Logout},on:{ok:e.logout},model:{value:e.out,callback:function(t){e.out=t},expression:"out"}},[r("p",{staticClass:"my-4"},[e._v(e._s(e.localeText.UserNav_LogoutAlert))])]),e._v(" "),r("nuxt")],1)}),[],!1,null,"08a4054c",null);t.a=component.exports},367:function(e,t,r){r(368),e.exports=r(369)},382:function(e,t,r){"use strict";r.r(t);r(54);var n=r(10);r(34);function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.redirect,r.state.user){e.next=5;break}return e.abrupt("return",n("/login"));case 5:if("user"!=r.state.user.realrole){e.next=7;break}return e.abrupt("return",n("/user"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){return c.apply(this,arguments)}},389:function(e,t){},391:function(e,t){},401:function(e,t){},403:function(e,t){},428:function(e,t){},430:function(e,t){},431:function(e,t){},436:function(e,t){},438:function(e,t){},444:function(e,t){},446:function(e,t){},465:function(e,t){},477:function(e,t){},480:function(e,t){},508:function(e,t,r){"use strict";r.r(t);r(54);var n=r(10);r(34);function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.redirect,r.state.user){e.next=3;break}return e.abrupt("return",n("/login"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){return c.apply(this,arguments)}},509:function(e,t,r){"use strict";r.r(t);r(54);var n=r(10);r(34);function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.redirect,!r.state.user){e.next=3;break}return e.abrupt("return",n("/user"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){return c.apply(this,arguments)}},538:function(e,t,r){"use strict";r(317)},539:function(e,t,r){(t=r(59)(!1)).push([e.i,"span[data-v-08a4054c]{color:#ff0}",""]),e.exports=t},540:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return l})),r.d(t,"mutations",(function(){return f})),r.d(t,"actions",(function(){return m}));r(365),r(14),r(156),r(30),r(15),r(54);var n=r(10),c=r(3),o=r(34),l=function(){return{user:null,params:{},system:{},courseCache:{},problemCache:{}}},f={reset:function(e){c.default.set(e,"user",null)},setData:function(e,data){c.default.set(e,data.name,data.value)},appendListItem:function(e,t){e[t.list].push(t.value)},deleteListItem:function(e,t){e[t.list].findIndex((function(e){return e.id===t.id}))>=0&&e[t.list].splice(i,1)},updateListItem:function(e,t){e[t.list].findIndex((function(e){return e.id===t.id}))>=0&&e[t.list].splice(i,1,t.value)},setObjItem:function(e,t){var data=JSON.parse(JSON.stringify(t.value));c.default.set(e[t.obj],t.name,data)},unsetObjItem:function(e,t){c.default.delete(e[t.obj],t.name)},setParam:function(e,data){c.default.set(e.params,data.name,data.value)},unsetParam:function(e,t){c.default.delete(e.params,t.name)},updateCourse:function(e,t){var r=e.courseCache[t.id],n=JSON.parse(JSON.stringify(t.value));for(var o in n)c.default.set(r,o,n[o])}},m={setCourse:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.state,c=e.commit,r.next=3,o.d.collection("courses").doc(t.id).set(t.value);case 3:c("setObjItem",{obj:"courseCache",name:t.id,value:t.value}),console.log("UC",n.courseCache[t.id]);case 5:case"end":return r.stop()}}),r)})))()},updateCourse:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.state,c=e.commit,r.next=3,o.d.collection("courses").doc(t.id).update(t.value);case 3:t.id in n.courseCache&&c("updateCourse",t);case 4:case"end":return r.stop()}}),r)})))()},getCourseT:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,o.d.collection("courses").doc(t).get();case 3:if(!(c=r.sent).exists){r.next=8;break}return data=c.data(),n("setObjItem",{obj:"courseCache",name:t,value:data}),r.abrupt("return",data);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()},getCourse:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,l,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.state,c=e.commit,!(t in n.courseCache)){r.next=3;break}return r.abrupt("return",JSON.parse(JSON.stringify(n.courseCache[t])));case 3:return r.next=5,o.d.collection("courses").doc(t).get();case 5:if(!(l=r.sent).exists){r.next=10;break}return data=l.data(),c("setObjItem",{obj:"courseCache",name:t,value:data}),r.abrupt("return",data);case 10:return r.abrupt("return",null);case 11:case"end":return r.stop()}}),r)})))()},login:function(e,form){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o.c.signInWithEmailAndPassword(form.email,form.password);case 3:if(!(n=o.c.currentUser)){t.next=20;break}if(!n.emailVerified){t.next=16;break}return t.next=8,o.d.collection("users").doc(n.uid).get();case 8:return c=t.sent,(l=c.data()).id=c.id,l.realrole=l.role,r("setData",{name:"user",value:l}),t.abrupt("return","OK");case 16:return r("setData",{name:"user",value:null}),t.abrupt("return","EmailNotVerified");case 18:t.next=22;break;case 20:return r("setData",{name:"user",value:null}),t.abrupt("return","Error");case 22:case"end":return t.stop()}}),t)})))()},getLocales:function(e,form){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o.c.signInWithEmailAndPassword(form.email,form.password);case 3:if(!(n=o.c.currentUser)){t.next=19;break}if(!n.emailVerified){t.next=15;break}return t.next=8,o.d.collection("users").doc(n.uid).get();case 8:return c=t.sent,(l=c.data()).id=c.id,r("setData",{name:"user",value:l}),t.abrupt("return","OK");case 15:return r("setData",{name:"user",value:null}),t.abrupt("return","EmailNotVerified");case 17:t.next=21;break;case 19:return r("setData",{name:"user",value:null}),t.abrupt("return","Error");case 21:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o.c.signOut();case 3:r("reset");case 4:case"end":return t.stop()}}),t)})))()},getCollection:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.state,c=e.commit,r.prev=1,r.next=4,o.d.collection(t).get();case 4:if((l=r.sent).empty){r.next=10;break}return f={},l.forEach((function(e){f[e.id]=e.data()})),t in n&&c("setData",{name:t,value:f}),r.abrupt("return",f);case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.log("Error",r.t0),r.abrupt("return",{});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},78:function(e,t,r){"use strict";var n={created:function(){this.$router.push("/")}},c=r(70),component=Object(c.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("b-container",[this._v(" Error Occured! Redirecting... ")])}),[],!1,null,null,null);t.a=component.exports}},[[367,26,3,27]]]);