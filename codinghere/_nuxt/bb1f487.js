(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1066:function(e,t,r){"use strict";r(909)},1067:function(e,t,r){(t=r(56)(!1)).push([e.i,'.container-fluid[data-v-e204303e]{padding:24px 24px 80px;position:relative;margin:0}[data-v-e204303e] h1{color:#00f;font-family:"Arial";margin:32px 12px 12px -20px;border-bottom:1px solid #00f;padding-bottom:3px}[data-v-e204303e] h1,[data-v-e204303e] h2{font-size:100%}[data-v-e204303e] h2{color:#ff4500;margin:16px 0 8px}',""]),e.exports=t},1068:function(e,t,r){var n=r(8),o=r(1069);n({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},1069:function(e,t,r){var n=r(23),o=r(231).trim,c=r(232),l=n.parseFloat,d=1/l(c+"-0")!=-1/0;e.exports=d?function(e){var t=o(String(e)),r=l(t);return 0===r&&"-"==t.charAt(0)?-0:r}:l},1070:function(e,t,r){"use strict";r(910)},1071:function(e,t,r){(t=r(56)(!1)).push([e.i,".container-fluid[data-v-010f9fbd]{padding:48px;position:relative;margin:24px 0;border:1px solid green;border-radius:16px}h1[data-v-010f9fbd]{font-size:120%;color:#00f;margin:24px 60px 24px 0;border-bottom:1px solid #00f}[data-v-010f9fbd] .itemList{margin:12px 0}",""]),e.exports=t},1142:function(e,t,r){var content=r(1374);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("7e398a22",content,!0,{sourceMap:!1})},1149:function(e,t,r){"use strict";r.r(t);r(58),r(30),r(86),r(27),r(9),r(20),r(87),r(49);var n=r(7),o=r(855),c=r(26),l={data:function(){return{infoAlert:!1,info:{},siteNews:null,nocourse:!0,selected:null,showCodebox:!1,enterCode:null,teachCourses:{},assistCourses:{},selectCourses:{},otherCourses:{},courseLIST:{},cidToSelect:null,localeText:{User_SysInfo:"系統訊息",User_TeachCourse:"教授課程",User_AssistCourse:"助教課程",User_SelectedCourse:"已修課程",User_AvailableCourse:"可選課程",User_CourseCode:"輸入課程代碼"}}},computed:{ctitle:function(){if(this.cidToSelect&&this.courseLIST[this.cidToSelect])return this.courseLIST[this.cidToSelect].name}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==Object.keys(e.$store.state.system).length){t.next=3;break}return t.next=3,e.$store.dispatch("getCollection","system");case 3:return e.localeText=e.$updateLocaleText(e.localeText),(r=e.$system("setting"))&&r.siteNews&&(e.siteNews=e.$copyObject(r.siteNews)),t.next=8,e.$store.dispatch("getCourse","LIST");case 8:n=t.sent,c=e.$user("courses"),n&&function(){var t=e.$user().id;e.courseLIST=n;var r=o.a.getToday();for(var l in e.courseLIST){var d=e.courseLIST[l];if(!(d.endDate&&d.endDate<r))if(d.teachers&&d.teachers.some((function(e){return e.id===t}))&&(e.$set(e.teachCourses,l,d),c||(c={})),d.assistants&&d.assistants.some((function(e){return e.id===t}))&&(e.$set(e.assistCourses,l,d),c||(c={})),c&&l in c)e.$set(e.selectCourses,l,d);else if(d.endDate)d.endDate.replace(/-/g,"")>r&&e.$set(e.otherCourses,l,d);else e.$set(e.otherCourses,l,d)}}();case 11:case"end":return t.stop()}}),t)})))()},methods:{sortCourses:function(e){var t=o.a.obj2arr(e);return t.sort((function(a,b){return a.name<b.name?-1:a.name>b.name?1:0})),t},updateCoursesAll:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,i,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={},n=["courses","teach","assist"],i=0;case 3:if(!(i<n.length)){t.next=20;break}if(o=n[i],!e.$user(o)){t.next=17;break}t.t0=regeneratorRuntime.keys(e.$user(o));case 7:if((t.t1=t.t0()).done){t.next=17;break}if("playground"!=(c=t.t1.value)){t.next=11;break}return t.abrupt("continue",7);case 11:if(r[c]){t.next=15;break}return t.next=14,e.$store.dispatch("getCourse",c);case 14:r[c]=t.sent;case 15:t.next=7;break;case 17:i++,t.next=3;break;case 20:e.coursesAll=r;case 21:case"end":return t.stop()}}),t)})))()},checkCode:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,l,d,f,m,v,x,h,_,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e.cidToSelect)||!e.courseLIST[r]){t.next=5;break}l=e.courseLIST[r],t.next=6;break;case 5:return t.abrupt("return");case 6:if(l.enrollCode!==e.enterCode){t.next=46;break}return d=e.$user("id"),t.next=10,c.d.collection("users").doc(d).get();case 10:if((f=t.sent).exists){t.next=13;break}return t.abrupt("return");case 13:if(m=f.data(),v={},!m.courses){t.next=21;break}if(!m.courses[r]){t.next=20;break}return t.abrupt("return");case 20:v=e.$copyObject(m.courses);case 21:return v[r]={name:l.name},t.next=24,c.d.collection("users").doc(e.$user("id")).update({courses:v,updated:o.a.getNow()});case 24:return e.$store.commit("setObjItem",{obj:"user",name:"courses",value:v}),x=e.$user(""),h=null,_=null,C=c.d.collection("courses").doc(r),t.prev=29,t.next=32,c.d.runTransaction(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get(C);case 2:return n=t.sent,h=n.data(),c={},h.students&&(c=e.$copyObject(h.students)),c[x.id]||(c[x.id]={name:x.name,stdID:x.stdID}),_={students:c,updated:o.a.getNow()},t.next=10,r.update(C,_);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 32:t.next=37;break;case 34:t.prev=34,t.t0=t.catch(29),console.log(t.t0);case 37:h.students=_.students,h.updated=_.updated,e.$store.commit("setObjItem",{obj:"courseCache",name:r,value:h}),e.$delete(e.otherCourses,r),e.$set(e.selectCourses,r,h),e.info={title:"加選課程",message:"成功！"},e.infoAlert=!0,t.next=48;break;case 46:e.info={title:"加選課程",message:"錯誤！"},e.infoAlert=!0;case 48:case"end":return t.stop()}}),t,null,[[29,34]])})))()},addNewCourse:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.cidToSelect=e,t.showCodebox=!0;case 2:case"end":return r.stop()}}),r)})))()}}},d=(r(1066),r(55)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",[r("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message)+"\n    ")]),e._v(" "),r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_SysInfo))]),e._v(" "),r("div",{domProps:{innerHTML:e._s(e.$md.render(e.$selectUserLocaleText(e.siteNews)))}})]),e._v(" "),Object.keys(e.teachCourses).length>0?r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_TeachCourse))]),e._v(" "),e._l(e.sortCourses(e.teachCourses),(function(t,n){return r("div",{key:"t"+t.id},[r("span",{staticClass:"mr-2"},[e._v(e._s(n+1)+".")]),e._v(" "),r("b-link",{class:"text-"+t.variant,attrs:{to:"/teacher/students?cid="+t.id}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e._v(" "),Object.keys(e.assistCourses).length>0?r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_AssistCourse))]),e._v(" "),e._l(e.sortCourses(e.assistCourses),(function(t,n){return r("div",{key:"a"+t.id},[r("span",{staticClass:"mr-2"},[e._v(e._s(n+1)+".")]),e._v(" "),r("b-link",{class:"text-"+t.variant,attrs:{to:"/teacher/students?cid="+t.id}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e._v(" "),Object.keys(e.selectCourses).length>0?r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_SelectedCourse))]),e._v(" "),e._l(e.sortCourses(e.selectCourses),(function(t,n){return r("div",{key:"s"+t.id},[r("span",{staticClass:"mr-2"},[e._v(e._s(n+1)+".")]),e._v(" "),r("b-link",{class:"text-"+t.variant,attrs:{to:"/user/records?id="+t.id}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e._v(" "),Object.keys(e.otherCourses).length>0?r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_AvailableCourse))]),e._v(" "),e._l(e.sortCourses(e.otherCourses),(function(t,n){return r("div",{key:"o"+t.id},[r("span",{staticClass:"mr-2"},[e._v(e._s(n+1)+".")]),e._v(" "),r("b-link",{class:"text-"+t.variant,on:{click:function(r){return e.addNewCourse(t.id)}}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e._v(" "),r("b-modal",{attrs:{size:"lg",title:e.ctitle},on:{ok:e.checkCode},model:{value:e.showCodebox,callback:function(t){e.showCodebox=t},expression:"showCodebox"}},[r("p",[e._v(e._s(e.localeText.User_CourseCode))]),e._v(" "),r("b-input",{staticClass:"mr-3",attrs:{size:"sm",type:"text",placeholder:"Enroll Code"},model:{value:e.enterCode,callback:function(t){e.enterCode=t},expression:"enterCode"}})],1)],1)}),[],!1,null,"e204303e",null);t.default=component.exports},1150:function(e,t,r){"use strict";r.r(t);r(367),r(1068),r(159),r(49);var n=r(7),o=r(26),c=r(855),l={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("playground").fetch();case 3:return n=t.sent,t.abrupt("return",{playground:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{pgKey:"Coding",problems:[],stats:{},infoAlert:!1,info:{title:"",message:""},locales:{zh:"中文"},fields:[{key:"id",sortable:!0},{key:"title"}],localeText:{Playground_Title:"練習廣場"}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,d,f,m,v,x,h,i,_,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.localeText=e.$updateLocaleText(e.localeText),e.playground&&(r=e.playground.KEY,n=e.playground.DATA,e.problems=c.a.decode(r,n)),(l=e.$user("courses"))&&l.playground)for(f in d=l.playground.units.base.probs)m="danger",d[f].score>=60&&(m="success"),(v=c.a.findIdPos(e.problems,f))>=0&&(e.problems[v].variant=m);return t.next=6,o.d.collection("problems").doc("STAT").get();case 6:if((x=t.sent).exists){for(h=x.data(),i=0;i<e.problems.length;i++)_=e.problems[i],(C=h[_.id])&&(e.$set(_,"total",C.TS),e.$set(_,"pass",C.TP),0!==C.TS?e.$set(_,"rate",Number.parseFloat(C.TP/C.TS).toFixed(3)):e.$set(_,"rate",0));e.stats=x.data()}case 8:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{doProblem:function(data){var p=data.item,e=c.a.encode(this.pgKey,JSON.stringify(p)),t=p.queueNumber||3,r=void 0===p.stylePoints?2:p.stylePoints;this.$store.commit("setParam",{name:"probSet",value:{courseID:"playground",courseName:"playground",courseUnit:"base",problem:e,courseQN:t,stylePoints:r}}),this.$router.push("/user/coding")}}},d=(r(1070),r(55)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",[r("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message))]),e._v(" "),r("b-table",{attrs:{items:e.problems,fields:e.fields,small:""},scopedSlots:e._u([{key:"cell(id)",fn:function(data){return[r("b-link",{on:{click:function(t){return e.doProblem(data)}}},[e._v(e._s(e.$selectUserLocaleText(data.value)))])]}},{key:"cell(title)",fn:function(data){return[r("b-link",{on:{click:function(t){return e.doProblem(data)}}},[e._v(e._s(e.$selectUserLocaleText(data.value)))])]}}])})],1)}),[],!1,null,"010f9fbd",null);t.default=component.exports},1373:function(e,t,r){"use strict";r(1142)},1374:function(e,t,r){(t=r(56)(!1)).push([e.i,".row[data-v-6da4a50c]{padding:0 10px}.panel[data-v-6da4a50c]{padding:12px}[data-v-6da4a50c] .col-6{margin:0;padding:12px 6px}",""]),e.exports=t},1461:function(e,t,r){"use strict";r.r(t);var n=r(1150),o=r(1393),c=r(1149),l={components:{playground:n.default,records:o.default,course:c.default}},d=(r(1373),r(55)),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"panel"},[t("course"),this._v(" "),t("b-row",[t("b-col",{attrs:{cols:"6"}},[t("records")],1),this._v(" "),t("b-col",{attrs:{cols:"6"}},[t("playground")],1)],1)],1)}),[],!1,null,"6da4a50c",null);t.default=component.exports},909:function(e,t,r){var content=r(1067);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("250184dc",content,!0,{sourceMap:!1})},910:function(e,t,r){var content=r(1071);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("422a64f8",content,!0,{sourceMap:!1})}}]);