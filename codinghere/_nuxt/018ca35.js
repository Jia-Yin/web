(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1119:function(e,t,r){var content=r(1323);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("7e398a22",content,!0,{sourceMap:!1})},1125:function(e,t,r){"use strict";r.r(t);r(58),r(30),r(86),r(27),r(87),r(49);var n=r(7),o=r(855),c=r(26),l={data:function(){return{infoAlert:!1,info:{},siteNews:null,nocourse:!0,selected:null,showCodebox:!1,enterCode:null,teachCourses:{},assistCourses:{},selectCourses:{},otherCourses:{},courseLIST:{},cidToSelect:null,localeText:{User_SysInfo:"系統訊息",User_TeachCourse:"教授課程",User_AssistCourse:"助教課程",User_SelectedCourse:"已修課程",User_AvailableCourse:"可選課程",User_CourseCode:"輸入課程代碼"}}},computed:{ctitle:function(){if(this.cidToSelect&&this.courseLIST[this.cidToSelect])return this.courseLIST[this.cidToSelect].name}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==Object.keys(e.$store.state.system).length){t.next=3;break}return t.next=3,e.$store.dispatch("getCollection","system");case 3:return e.localeText=e.$updateLocaleText(e.localeText),(r=e.$system("setting"))&&r.siteNews&&(e.siteNews=e.$copyObject(r.siteNews)),t.next=8,e.$store.dispatch("getCourse","LIST");case 8:n=t.sent,o=e.$user("courses"),n&&function(){var t=e.$user().id;for(var r in e.courseLIST=n,e.courseLIST){var c=e.courseLIST[r];c.teachers&&c.teachers.some((function(e){return e.id===t}))&&(e.$set(e.teachCourses,r,c),o||(o={})),c.assistants&&c.assistants.some((function(e){return e.id===t}))&&(e.$set(e.assistCourses,r,c),o||(o={})),o&&r in o?e.$set(e.selectCourses,r,c):e.$set(e.otherCourses,r,c)}}();case 11:case"end":return t.stop()}}),t)})))()},methods:{updateCoursesAll:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,i,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={},n=["courses","teach","assist"],i=0;case 3:if(!(i<n.length)){t.next=20;break}if(o=n[i],!e.$user(o)){t.next=17;break}t.t0=regeneratorRuntime.keys(e.$user(o));case 7:if((t.t1=t.t0()).done){t.next=17;break}if("playground"!=(c=t.t1.value)){t.next=11;break}return t.abrupt("continue",7);case 11:if(r[c]){t.next=15;break}return t.next=14,e.$store.dispatch("getCourse",c);case 14:r[c]=t.sent;case 15:t.next=7;break;case 17:i++,t.next=3;break;case 20:e.coursesAll=r;case 21:case"end":return t.stop()}}),t)})))()},checkCode:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,l,d,f,v,m,x,_,h,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e.cidToSelect)||!e.courseLIST[r]){t.next=5;break}l=e.courseLIST[r],t.next=6;break;case 5:return t.abrupt("return");case 6:if(l.enrollCode!==e.enterCode){t.next=46;break}return d=e.$user("id"),t.next=10,c.d.collection("users").doc(d).get();case 10:if((f=t.sent).exists){t.next=13;break}return t.abrupt("return");case 13:if(v=f.data(),m={},!v.courses){t.next=21;break}if(!v.courses[r]){t.next=20;break}return t.abrupt("return");case 20:m=e.$copyObject(v.courses);case 21:return m[r]={name:l.name},t.next=24,c.d.collection("users").doc(e.$user("id")).update({courses:m,updated:o.a.getNow()});case 24:return e.$store.commit("setObjItem",{obj:"user",name:"courses",value:m}),x=e.$user(""),_=null,h=null,C=c.d.collection("courses").doc(r),t.prev=29,t.next=32,c.d.runTransaction(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get(C);case 2:return n=t.sent,_=n.data(),c={},_.students&&(c=e.$copyObject(_.students)),c[x.id]||(c[x.id]={name:x.name,stdID:x.stdID}),h={students:c,updated:o.a.getNow()},t.next=10,r.update(C,h);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 32:t.next=37;break;case 34:t.prev=34,t.t0=t.catch(29),console.log(t.t0);case 37:_.students=h.students,_.updated=h.updated,e.$store.commit("setObjItem",{obj:"courseCache",name:r,value:_}),e.$delete(e.otherCourses,r),e.$set(e.selectCourses,r,_),e.info={title:"加選課程",message:"成功！"},e.infoAlert=!0,t.next=48;break;case 46:e.info={title:"加選課程",message:"錯誤！"},e.infoAlert=!0;case 48:case"end":return t.stop()}}),t,null,[[29,34]])})))()},addNewCourse:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.cidToSelect=e,t.showCodebox=!0;case 2:case"end":return r.stop()}}),r)})))()}}},d=(r(923),r(55)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",[r("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message)+"\n    ")]),e._v(" "),r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_SysInfo))]),e._v(" "),r("div",{domProps:{innerHTML:e._s(e.$md.render(e.$selectUserLocaleText(e.siteNews)))}})]),e._v(" "),Object.keys(e.teachCourses).length>0?r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_TeachCourse))]),e._v(" "),e._l(e.teachCourses,(function(t,n,o){return r("div",{key:"t"+n},[r("span",{staticClass:"mr-2"},[e._v(e._s(o+1)+".")]),e._v(" "),r("b-link",{class:"text-"+t.variant,attrs:{to:"/teacher/"+n}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e._v(" "),Object.keys(e.assistCourses).length>0?r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_AssistCourse))]),e._v(" "),e._l(e.assistCourses,(function(t,n,o){return r("div",{key:"a"+n},[r("span",{staticClass:"mr-2"},[e._v(e._s(o+1)+".")]),e._v(" "),r("b-link",{class:"text-"+t.variant,attrs:{to:"/teacher/"+n}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e._v(" "),Object.keys(e.selectCourses).length>0?r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_SelectedCourse))]),e._v(" "),e._l(e.selectCourses,(function(t,n,o){return r("div",{key:"s"+n},[r("span",{staticClass:"mr-2"},[e._v(e._s(o+1)+".")]),e._v(" "),r("b-link",{class:"text-"+t.variant,attrs:{to:"/user/records?id="+n}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e._v(" "),Object.keys(e.otherCourses).length>0?r("div",{staticClass:"ml-3"},[r("h1",[e._v(e._s(e.localeText.User_AvailableCourse))]),e._v(" "),e._l(e.otherCourses,(function(t,n,o){return r("div",{key:"o"+n},[r("span",{staticClass:"mr-2"},[e._v(e._s(o+1)+".")]),e._v(" "),r("b-link",{class:"text-"+t.variant,on:{click:function(t){return e.addNewCourse(n)}}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e._v(" "),r("b-modal",{attrs:{size:"lg",title:e.ctitle},on:{ok:e.checkCode},model:{value:e.showCodebox,callback:function(t){e.showCodebox=t},expression:"showCodebox"}},[r("p",[e._v(e._s(e.localeText.User_CourseCode))]),e._v(" "),r("b-input",{staticClass:"mr-3",attrs:{size:"sm",type:"text",placeholder:"Enroll Code"},model:{value:e.enterCode,callback:function(t){e.enterCode=t},expression:"enterCode"}})],1)],1)}),[],!1,null,"20677823",null);t.default=component.exports},1126:function(e,t,r){"use strict";r.r(t);r(367),r(925),r(159),r(49);var n=r(7),o=r(26),c=r(855),l={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("playground").fetch();case 3:return n=t.sent,t.abrupt("return",{playground:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{pgKey:"Coding",problems:[],stats:{},infoAlert:!1,info:{title:"",message:""},locales:{zh:"中文"},fields:[{key:"id",sortable:!0},{key:"title"}],localeText:{Playground_Title:"練習廣場"}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,d,f,v,m,x,_,i,h,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.localeText=e.$updateLocaleText(e.localeText),e.playground&&(r=e.playground.KEY,n=e.playground.DATA,e.problems=c.a.decode(r,n)),(l=e.$user("courses"))&&l.playground)for(f in d=l.playground.units.base.probs)v="danger",d[f].score>=60&&(v="success"),(m=c.a.findIdPos(e.problems,f))>=0&&(e.problems[m].variant=v);return t.next=6,o.d.collection("problems").doc("STAT").get();case 6:if((x=t.sent).exists){for(_=x.data(),i=0;i<e.problems.length;i++)h=e.problems[i],(C=_[h.id])&&(e.$set(h,"total",C.TS),e.$set(h,"pass",C.TP),0!==C.TS?e.$set(h,"rate",Number.parseFloat(C.TP/C.TS).toFixed(3)):e.$set(h,"rate",0));e.stats=x.data()}case 8:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{doProblem:function(data){var p=data.item,e=c.a.encode(this.pgKey,JSON.stringify(p)),t=p.queueNumber||3;this.$store.commit("setParam",{name:"probSet",value:{courseID:"playground",courseName:"playground",courseUnit:"base",problem:e,courseQN:t}}),this.$router.push("/user/coding")}}},d=(r(927),r(55)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",[r("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message))]),e._v(" "),r("b-table",{attrs:{items:e.problems,fields:e.fields,small:""},scopedSlots:e._u([{key:"cell(id)",fn:function(data){return[r("b-link",{on:{click:function(t){return e.doProblem(data)}}},[e._v(e._s(e.$selectUserLocaleText(data.value)))])]}},{key:"cell(title)",fn:function(data){return[r("b-link",{on:{click:function(t){return e.doProblem(data)}}},[e._v(e._s(e.$selectUserLocaleText(data.value)))])]}}])})],1)}),[],!1,null,"3b2ae298",null);t.default=component.exports},1322:function(e,t,r){"use strict";r(1119)},1323:function(e,t,r){(t=r(56)(!1)).push([e.i,".row[data-v-6da4a50c]{padding:0 10px}.panel[data-v-6da4a50c]{padding:12px}[data-v-6da4a50c] .col-6{margin:0;padding:12px 6px}",""]),e.exports=t},1405:function(e,t,r){"use strict";r.r(t);var n=r(1126),o=r(1342),c=r(1125),l={components:{playground:n.default,records:o.default,course:c.default}},d=(r(1322),r(55)),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"panel"},[t("course"),this._v(" "),t("b-row",[t("b-col",{attrs:{cols:"6"}},[t("records")],1),this._v(" "),t("b-col",{attrs:{cols:"6"}},[t("playground")],1)],1)],1)}),[],!1,null,"6da4a50c",null);t.default=component.exports},908:function(e,t,r){var content=r(924);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("f4c4c45a",content,!0,{sourceMap:!1})},909:function(e,t,r){var content=r(928);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("9b3f8888",content,!0,{sourceMap:!1})},923:function(e,t,r){"use strict";r(908)},924:function(e,t,r){(t=r(56)(!1)).push([e.i,'.container-fluid[data-v-20677823]{padding:24px 24px 80px;position:relative;margin:0}[data-v-20677823] h1{color:#00f;font-family:"Arial";margin:32px 12px 12px -20px;border-bottom:1px solid #00f;padding-bottom:3px}[data-v-20677823] h1,[data-v-20677823] h2{font-size:100%}[data-v-20677823] h2{color:#ff4500;margin:16px 0 8px}',""]),e.exports=t},925:function(e,t,r){var n=r(8),o=r(926);n({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},926:function(e,t,r){var n=r(24),o=r(232).trim,c=r(233),l=n.parseFloat,d=1/l(c+"-0")!=-1/0;e.exports=d?function(e){var t=o(String(e)),r=l(t);return 0===r&&"-"==t.charAt(0)?-0:r}:l},927:function(e,t,r){"use strict";r(909)},928:function(e,t,r){(t=r(56)(!1)).push([e.i,".container-fluid[data-v-3b2ae298]{padding:48px;position:relative;margin:24px 0;border:1px solid green;border-radius:16px}h1[data-v-3b2ae298]{font-size:120%;color:#00f;margin:24px 60px 24px 0;border-bottom:1px solid #00f}[data-v-3b2ae298] .itemList{margin:12px 0}",""]),e.exports=t}}]);