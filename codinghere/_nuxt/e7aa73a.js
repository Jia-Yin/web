(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1068:function(e,t,r){"use strict";r.r(t);r(10),r(156),r(30),r(103),r(28),r(42),r(842),r(104),r(51);var o=r(9),n=r(34),c=r(847),l=r(841),d=r(870),m=r(858),f=r(905),h=r(848),v={components:{ItemList:c.default,UserSelector:d.default,ProblemSelector:m.default,CourseBasic:f.default,LocaleInput:h.default},data:function(){return{cnLang:"en",courseNews:null,selectUser:!1,kind:"",playgroundStat:{},courseScores:[],scoreFields:[],courses:[],coursesAll:{},curCourse:null,curCourseAll:null,itemName:!1,courseItems:[],queueNumber:null,cunits:[],curUnit:null,selUnitProb:!1,unitIdx:null,showItem:"ListCourse",showUnitUpdate:!1,infoAlert:!1,courseEditMode:!1,unitEditMode:!1,problems:[],pgproblems:[],info:{title:"",message:""},locales:[{zh:"中文"}],unitForm:{name:"",startDate:"",endDate:"",probs:[]},localeText:{AdminCourse_Title:"課程",Common_Edit:"編輯",Common_Copy:"複製",Common_New:"新增"}}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,i,n,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.localeText=e.$updateLocaleText(e.localeText),t.next=3,e.$store.dispatch("getCourse","LIST");case 3:if(r=t.sent)for((o=Object.keys(r)).sort(),i=0;i<o.length;i++)(n=r[o[i]]).id=o[i],"admin"==e.$user("role")||"maintainer"==e.$user("role")?e.courses.push(n):(c=e.$user("id"),d=!1,n.teachers&&l.a.findIdPos(n.teachers,c)>=0&&(d=!0),!d&&n.assistants&&l.a.findIdPos(n.assistants,c)>=0&&(d=!0),d&&e.courses.push(n));case 5:case"end":return t.stop()}}),t)})))()},methods:{selectDone:function(e){this.unitForm.probs=e,this.selUnitProb=!1},sname:function(e){return this.curCourseAll&&this.curCourseAll.students&&this.curCourseAll.students[e]?this.curCourseAll.students[e].name:"Wait..."},updateUnit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var i,r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=0;i<e.unitForm.probs.length;i++)delete e.unitForm.probs[i]._showDetails,delete e.unitForm.probs[i].tags;r=e.$copyObject(e.unitForm),o=e.curCourseAll.units?e.$copyObject(e.curCourseAll.units):[],e.unitEditMode?o.splice(e.unitIdx,1,r):o.push(r),n={units:o,updated:l.a.getNow()},e.$store.dispatch("updateCourse",{id:e.curCourseAll.id,value:n}),e.$set(e.curCourseAll,"units",o),e.cunits=o,e.showUnitUpdate=!1;case 9:case"end":return t.stop()}}),t)})))()},editUnit:function(e){this.unitEditMode=!0,this.unitForm=this.$copyObject(this.cunits[e]),this.unitIdx=e,this.showUnitUpdate=!0},createUnit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.unitEditMode=!1,0!=e.problems.length){t.next=7;break}return t.next=4,n.d.collection("problems").doc("BASE").get();case 4:r=t.sent,o=r.data(),r.exists&&(e.problems=l.a.obj2arr(o));case 7:e.showUnitUpdate=!0;case 8:case"end":return t.stop()}}),t)})))()},updateCourseSetting:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$copyObject(e.courseNews),(o={news:r}).queueNumber=e.queueNumber,e.curCourseAll.queueNumber&&e.curCourseAll.queueNumber==e.queueNumber){t.next=20;break}i=0;case 5:if(!(i<e.queueNumber)){t.next=20;break}return c="queue"+(i+1),t.next=9,n.d.collection("courses").doc(e.curCourse.id).collection("tasks").doc(c).get();case 9:if(!t.sent.exists){t.next=15;break}return t.next=13,n.d.collection("courses").doc(e.curCourse.id).collection("tasks").doc(c).update({updated:l.a.getNow()});case 13:t.next=17;break;case 15:return t.next=17,n.d.collection("courses").doc(e.curCourse.id).collection("tasks").doc(c).set({updated:l.a.getNow()});case 17:i++,t.next=5;break;case 20:return t.next=22,e.$store.dispatch("updateCourse",{id:e.curCourse.id,value:o});case 22:e.$set(e.curCourseAll,"news",r),e.$set(e.curCourseAll,"queueNumber",e.queueNumber),e.infoAlert=!0,e.info={title:"Setting",message:"OK"};case 26:case"end":return t.stop()}}),t)})))()},processCourseTask:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,c,d,m,f,h,v,_,i,x,C,w,k,y,A,S,N,F,u,P,T,U;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.curCourseAll.students?e.$copyObject(e.curCourseAll.students):{},o=e.curCourseAll.scores?e.$copyObject(e.curCourseAll.scores):{},t.next=4,n.d.collection("problems").doc("STAT").get();case 4:if((c=t.sent).exists){t.next=12;break}return d={updated:l.a.getNow()},t.next=9,n.d.collection("problems").doc("STAT").set(d);case 9:m=d,t.next=14;break;case 12:(m=c.data()).updated=l.a.getNow();case 14:f="playground"!=e.curCourseAll.id,h=e.curCourseAll.units,v=3,(_=e.$system("setting"))&&_.queueNumber&&(v=_.queueNumber),e.curCourseAll.queueNumber&&(v=e.curCourseAll.queueNumber),i=0;case 21:if(!(i<v)){t.next=54;break}return x="queue"+(i+1),t.next=25,n.d.collection("courses").doc(e.curCourse.id).collection("tasks").doc(x).get();case 25:if(!(C=t.sent).exists){t.next=51;break}w=C.data(),t.t0=regeneratorRuntime.keys(w);case 29:if((t.t1=t.t0()).done){t.next=48;break}if("updated"!=(k=t.t1.value)){t.next=33;break}return t.abrupt("continue",29);case 33:if("S_"!=k.substring(0,2)||!f){t.next=44;break}if(y=k.substring(2),r[y]||(r[y]={name:w[k].name,stdID:w[k].stdID}),!w[k].score){t.next=44;break}return t.next=39,n.d.collection("users").doc(y).get();case 39:if(A=t.sent,S=A.data(),N=[],S.courses&&S.courses[e.curCourseAll.id])for(F=S.courses[e.curCourseAll.id].units,u=0;u<h.length;u++)P=h[u].name,F[P]?N.push(F[P].score):N.push(0);o[y]=N;case 44:"P_"==k.substring(0,2)&&(T=k.substring(20),m[T]||(m[T]={TS:0,TP:0}),m[T].TS+=1,1==w[k]&&(m[T].TP+=1)),w[k]=n.b.firestore.FieldValue.delete(),t.next=29;break;case 48:return w.updated=l.a.getNow(),t.next=51,n.d.collection("courses").doc(e.curCourse.id).collection("tasks").doc(x).update(w);case 51:i++,t.next=21;break;case 54:return t.next=56,n.d.collection("problems").doc("STAT").set(m);case 56:if(e.playgroundStat=m,!f){t.next=63;break}return U={scores:o,students:r,updated:l.a.getNow()},t.next=61,e.$store.dispatch("updateCourse",{id:e.curCourseAll.id,value:U});case 61:e.$set(e.curCourseAll,"scores",o),e.$set(e.curCourseAll,"students",r);case 63:case"end":return t.stop()}}),t)})))()},prepareCourseContent:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("playground"==(r=e.curCourseAll.id)){t.next=9;break}return t.next=4,e.$store.dispatch("getCourseT",r);case 4:e.curCourseAll=t.sent,e.curCourseAll.id=r,e.courseNews=Object.assign({},e.curCourseAll.news),t.next=13;break;case 9:return t.next=11,e.$content("playground").fetch();case 11:(o=t.sent)&&(n=o.KEY,c=o.DATA,e.pgproblems=l.a.decode(n,c));case 13:e.processCourseTask();case 14:case"end":return t.stop()}}),t)})))()},showPGProblem:function(e){var t=this.$selectUserLocaleText(e.title);if(this.playgroundStat[e.id]){var r=this.playgroundStat[e.id];t+=" (".concat(r.TP,"/").concat(r.TS,")")}else t+=" (0/0)";return t},showCourseItem:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:"basic"==e.id&&(t.showItem="courseBasic",t.itemName="Basic"),"units"==e.id&&(t.curCourseAll.units?t.cunits=t.$copyObject(t.curCourseAll.units):t.cunits=[],t.showItem="courseUnits",t.itemName="Units"),"students"==e.id&&(t.showItem="courseStudents",t.itemName="Students"),"scores"==e.id&&(t.showItem="courseScores",t.itemName="Scores"),"setting"==e.id&&(t.queueNumber=3,(o=t.$system("setting"))&&o.queueNumber&&(t.queueNumber=o.queueNumber),t.coursesAll.queueNumber&&(t.queueNumber=t.coursesAll.queueNumber),t.showItem="courseSetting",t.itemName="Setting");case 5:case"end":return r.stop()}}),r)})))()},showCourse:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.curCourse=e,r.next=3,t.$store.dispatch("getCourse",e.id);case 3:if((o=r.sent)||"playground"!=e.id){r.next=11;break}return n={name:"Playground"},r.next=8,t.$store.dispatch("setCourse",{id:"playground",value:n});case 8:t.curCourseAll={name:"Playground",id:"playground"},r.next=14;break;case 11:t.curCourseAll=o,t.curCourseAll.id=e.id,t.courseItems=[{id:"basic",name:"Basic"},{id:"units",name:"Units"},{id:"students",name:"Students"},{id:"scores",name:"Scores"},{id:"setting",name:"Setting"}];case 14:return r.next=16,t.prepareCourseContent();case 16:t.showItem="showCourse",t.itemName=null,console.log("Course",t.curCourseAll);case 19:case"end":return r.stop()}}),r)})))()},showUnit:function(){},home:function(){this.showItem="ListCourse",this.curCourse=null},courseLabel:function(e){var t=e.name;return e.teacher&&e.note?t+=" (".concat(e.teacher," / ").concat(e.note,")"):e.teacher?t+=" (".concat(e.teacher,")"):e.note&&(t+=" (".concat(e.note,")")),t},NUsersTeachCourse:function(e,t,r){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var i,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e)for(i=0;i<e.length;i++)c=e[i].id,n.UserTeachCourse(c,t,r);case 1:case"end":return o.stop()}}),o)})))()},UserTeachCourse:function(e,t,r){return Object(o.a)(regeneratorRuntime.mark((function o(){var c,d,m,f,h;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.d.collection("users").doc(e).get();case 2:if(c=o.sent,d=c.data(),m=d[r],f={},m&&(f=m),f[t.id]){o.next=14;break}return f[t.id]=t.name,(h={updated:l.a.getNow()})[r]=f,"user"==d.role&&(h.role="teach"==r?"teacher":"assistant"),o.next=14,n.d.collection("users").doc(e).update(h);case 14:case"end":return o.stop()}}),o)})))()},UserNotTeachCourse:function(e,t,r){return Object(o.a)(regeneratorRuntime.mark((function o(){var c,d,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.d.collection("users").doc(e).get();case 2:if(c=o.sent,!(d=c.data()[r])){o.next=11;break}if(!d[t.id]){o.next=11;break}return delete d[t.id],(m={updated:l.a.getNow()})[r]=d,o.next=11,n.d.collection("users").doc(e).update(m);case 11:case"end":return o.stop()}}),o)})))()},updateCourse:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,i,o,c,d,m,f,h,v,_,x,C,w,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(delete(r=e.$copyObject(data.value)).codeExpiredDate,delete r.codeExpiredTime,"edit"!=data.mode){t.next=21;break}return r.id&&delete r.id,t.next=7,e.$store.dispatch("updateCourse",{id:e.curCourse.id,value:r});case 7:if(r.id=e.curCourse.id,e.NUsersTeachCourse(r.teachers,r,"teach"),e.curCourse.teachers)for(i=0;i<e.curCourse.teachers.length;i++)o=e.curCourse.teachers[i].id,l.a.findIdPos(r.teachers,o)<0&&e.UserNotTeachCourse(o,r,"teach");if(e.NUsersTeachCourse(r.assistants,r,"assist"),e.curCourse.assistants)for(c=0;c<e.curCourse.assistants.length;c++)d=e.curCourse.assistants[c].id,l.a.findIdPos(r.assistants,d)<0&&e.UserNotTeachCourse(d,r,"assist");return(m=l.a.findIdPos(e.courses,r.id))>=0&&(e.courses[m]=r),f=l.a.arr2obj(e.courses),t.next=17,e.$store.dispatch("setCourse",{id:"LIST",value:f});case 17:e.infoAlert=!0,e.info={title:"Update",message:"OK"},t.next=46;break;case 21:return r.id&&delete r.id,h=e.courses.length,v="C"+h.toString().padStart(6,"0"),t.next=26,e.$store.dispatch("setCourse",{id:v,value:r});case 26:_=3,(x=e.$system("setting"))&&x.queueNumber&&(_=x.queueNumber),C=0;case 30:if(!(C<_)){t.next=37;break}return w="queue"+(C+1),t.next=34,n.d.collection("courses").doc(v).collection("tasks").doc(w).set({updated:l.a.getNow()});case 34:C++,t.next=30;break;case 37:return r.id=v,e.NUsersTeachCourse(r.teachers,r,"teach"),e.NUsersTeachCourse(r.assistants,r,"assist"),e.courses.push(r),k=l.a.arr2obj(e.courses),t.next=44,e.$store.dispatch("setCourse",{id:"LIST",value:k});case 44:e.infoAlert=!0,e.info={title:"Create",message:"OK"};case 46:case"end":return t.stop()}}),t)})))()}}},_=(r(977),r(70)),component=Object(_.a)(v,(function(){var e=this,t=this,r=t.$createElement,o=t._self._c||r;return o("b-container",{attrs:{fluid:""}},[o("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),o("div",{staticClass:"panel"},[o("b-breadcrumb",[o("b-breadcrumb-item",{on:{click:t.home}},[o("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),t._v("\n                "+t._s(t.localeText.AdminCourse_Title)+"\n            ")],1),t._v(" "),t.curCourse?o("b-breadcrumb-item",{on:{click:function(e){return t.showCourse(t.curCourse)}}},[t._v(t._s(t.curCourse.name))]):t._e(),t._v(" "),t.itemName?o("b-breadcrumb-item",{on:{click:t.showCourseItem}},[t._v(t._s(t.itemName))]):t._e(),t._v(" "),t.curCourse?t._e():o("b-button",{staticClass:"newButton",attrs:{size:"sm",variant:"primary"},on:{click:function(e){t.showItem="addCourse"}}},[t._v(t._s(t.localeText.Common_New))])],1),t._v(" "),"addCourse"==t.showItem?o("course-basic",{attrs:{course:t.curCourse,mode:"create"},on:{update:t.updateCourse}}):t._e(),t._v(" "),"ListCourse"==t.showItem?o("item-list",{attrs:{items:t.courses,click:t.showCourse,show:t.courseLabel}}):t._e(),t._v(" "),"showCourse"==t.showItem?o("div",{staticClass:"mt-3 ml-3"},["playground"==t.curCourse.id?o("div",[o("item-list",{attrs:{items:t.pgproblems,show:t.showPGProblem}})],1):o("div",[o("item-list",{attrs:{items:t.courseItems,click:t.showCourseItem}})],1)]):t._e(),t._v(" "),"courseBasic"==t.showItem?o("div",{staticClass:"mt-3"},[o("course-basic",{attrs:{course:t.curCourse},on:{update:t.updateCourse}})],1):t._e(),t._v(" "),"courseUnits"==t.showItem?o("div",{staticClass:"mt-3"},[t.cunits.length>0?o("div",t._l(t.cunits,(function(e,r){return o("p",{key:e+r},[t._v("\n                    "+t._s(r+1)+". "+t._s(e.name)+" : "+t._s(e.startDate)+"-"+t._s(e.endDate)+"\n                    "),o("b-link",{staticClass:"ml-3 text-info",on:{click:function(e){return t.editUnit(r)}}},[t._v("Edit")]),o("br"),t._v(" "),t._l(e.probs,(function(e,r){return o("span",{key:e.id,staticClass:"ml-3 text-primary"},[t._v("\n                        ("+t._s(r+1)+")\n                        "+t._s(t.$selectUserLocaleText(e.title))+"\n                    ")])}))],2)})),0):o("div",[t._v("No any units.")]),t._v(" "),o("div",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[o("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"success"},on:{click:t.createUnit}},[t._v("\n                    New\n                ")])],1),t._v(" "),t.showUnitUpdate?o("div",{staticClass:"mt-4"},[o("b-input",{staticClass:"mb-3",attrs:{placeholder:"Name"},model:{value:t.unitForm.name,callback:function(e){t.$set(t.unitForm,"name",e)},expression:"unitForm.name"}}),t._v(" "),o("b-input",{staticClass:"mb-3",attrs:{placeholder:"Start Date"},model:{value:t.unitForm.startDate,callback:function(e){t.$set(t.unitForm,"startDate",e)},expression:"unitForm.startDate"}}),t._v(" "),o("b-input",{staticClass:"mb-3",attrs:{placeholder:"End Date"},model:{value:t.unitForm.endDate,callback:function(e){t.$set(t.unitForm,"endDate",e)},expression:"unitForm.endDate"}}),t._v(" "),o("item-list",{attrs:{items:t.unitForm.probs,name:"title"}}),t._v(" "),o("p",{attrs:{align:"center"}},[o("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){t.showUnitUpdate=!1}}},[t._v("Cancel")]),t._v(" "),o("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:function(e){t.selUnitProb=!0}}},[t._v("Set Problems")]),t._v(" "),o("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:t.updateUnit}},[t._v("Update")])],1),t._v(" "),o("b-modal",{attrs:{size:"xl",title:"Select Problems","hide-footer":""},model:{value:t.selUnitProb,callback:function(e){t.selUnitProb=e},expression:"selUnitProb"}},[o("problem-selector",{staticClass:"mt-4",attrs:{oriProblems:t.problems,selProblems:t.unitForm.probs,selText:t.unitForm.name,OKText:"Set Unit Problems"},on:{OK:t.selectDone}})],1)],1):t._e()]):t._e(),t._v(" "),"courseStudents"==t.showItem?o("div",{staticClass:"mt-3"},[t.curCourseAll.students?o("div",t._l(t.curCourseAll.students,(function(e,r,n){return o("p",{key:e.name},[t._v("\n                    "+t._s(n+1)+".\n                    "),o("span",{staticClass:"ml-3",staticStyle:{display:"inline-block",width:"150px"}},[t._v(t._s(e.stdID))]),t._v(" "),o("span",{staticClass:"ml-3"},[t._v(t._s(t.sname(r)))])])})),0):t._e()]):t._e(),t._v(" "),"courseScores"==t.showItem?o("div",{staticClass:"mt-3"},[t.curCourseAll.scores?o("div",t._l(t.curCourseAll.scores,(function(e,r,n){return o("p",{key:r},[t._v("\n                    "+t._s(n+1)+". "+t._s(t.sname(r))+" => "+t._s(e)+"\n                ")])})),0):t._e()]):t._e(),t._v(" "),"courseSetting"==t.showItem?o("div",{staticClass:"mt-3"},[o("section",[t._v("Task Queue")]),t._v("\n            Queue Number: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.queueNumber,expression:"queueNumber"}],attrs:{size:"sm"},domProps:{value:t.queueNumber},on:{input:function(e){e.target.composing||(t.queueNumber=e.target.value)}}}),t._v(" "),o("section",[t._v("News")]),t._v(" "),o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("locale-input",{attrs:{rows:12},on:{curLang:function(t){e.cnLang=t}},model:{value:t.courseNews,callback:function(e){t.courseNews=e},expression:"courseNews"}})],1),t._v(" "),o("b-col",{attrs:{cols:"6"}},[o("div",{domProps:{innerHTML:t._s(t.$md.render(t.$selectLocaleText(t.courseNews,t.cnLang)))}})])],1),t._v(" "),o("div",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[o("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"primary"},on:{click:t.updateCourseSetting}},[t._v("\n                    Update\n                ")])],1)],1):t._e()],1)],1)}),[],!1,null,"0f2a4cce",null);t.default=component.exports;installComponents(component,{CourseBasic:r(905).default,ItemList:r(847).default,ProblemSelector:r(858).default,LocaleInput:r(848).default})},841:function(e,t,r){"use strict";r(10),r(14),r(22),r(103),r(8),r(842),r(27),r(15);var o=r(227),n=r.n(o),c={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),o=e.id;delete r.id,t[o]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new n.a(e).encrypt(t)},decode:function(e,t){return new n.a(e).decrypt(t)}};t.a=c},846:function(e,t,r){var content=r(855);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("7bc25547",content,!0,{sourceMap:!1})},847:function(e,t,r){"use strict";r.r(t);var o={props:{items:Array,name:{type:String,default:"name"},keyPrefix:{type:String,default:"item"},show:{type:Function,default:null},headVariant:{type:String,default:"dark"},textVariant:{type:String,default:"primary"},editVariant:{type:String,default:"primary"},copyVariant:{type:String,default:"primary"},removeVariant:{type:String,default:"primary"},addVariant:{type:String,default:"primary"},order:{type:Boolean,default:!0},click:{type:Function,default:null},remove:{type:Function,default:null},edit:{type:Function,default:null},copy:{type:Function,default:null},add:{type:Function,default:null},addLabel:{type:String,default:"New"},noEntryLabel:{type:String,default:"No items."}},methods:{itemName:function(e,t){return this.show?this.show(e):e[t]?this.$selectUserLocaleText(e[t]):"Unknown"},itemClass:function(e){return e.variant?"text-"+e.variant:this.textVariant?"text-"+this.textVariant:null}}},n=r(70),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.add?r("p",{attrs:{align:"right"}},[e.add?r("b-button",{attrs:{size:"sm",variant:e.addVariant},on:{click:function(t){return e.add()}}},[e._v("\n            "+e._s(e.addLabel)+"\n        ")]):e._e()],1):e._e(),e._v(" "),e.items&&e.items.length>0?r("div",e._l(e.items,(function(t,o){return r("div",{key:e.keyPrefix+o,staticClass:"itemList d-flex justify-content-between"},[r("span",[e.order?r("span",{staticClass:"mr-2",class:"text-"+e.headVariant},[e._v(e._s(o+1)+".")]):r("span",{staticClass:"mr-2",class:"text-"+e.headVariant},[e._v("•")]),e._v(" "),r("b-link",{staticClass:"itemBody",class:e.itemClass(t),on:{click:function(r){e.click&&e.click(t)}}},[e._v("\n                    "+e._s(e.itemName(t,e.name))+"\n                ")])],1),e._v(" "),e.remove||e.edit||e.copy?r("span",[e.edit?r("b-link",{class:"text-"+e.editVariant,on:{click:function(r){return e.edit(t)}}},[r("b-icon",{attrs:{icon:"pencil"}})],1):e._e(),e._v(" "),e.copy&&e.edit?r("span",{staticClass:"mr-2"}):e._e(),e._v(" "),e.copy?r("b-link",{class:"text-"+e.editVariant,on:{click:function(r){return e.copy(t)}}},[r("b-icon",{attrs:{icon:"back"}})],1):e._e(),e._v(" "),e.remove&&e.copy?r("span",{staticClass:"mr-2"}):e._e(),e._v(" "),e.remove?r("b-link",{class:"text-"+e.removeVariant,on:{click:function(r){return e.remove(t)}}},[r("b-icon",{attrs:{icon:"trash-fill"}})],1):e._e()],1):e._e()])})),0):r("div",[e._v("\n        "+e._s(e.noEntryLabel)+"\n    ")])])}),[],!1,null,"c3feb25c",null);t.default=component.exports},848:function(e,t,r){"use strict";r.r(t);r(363);var o={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:{zh:"中文",en:"English"},content:{zh:"中文",en:"English"}}},created:function(){this.locales=this.$copyObject(this.$system("locales").support),this.value&&(this.content=this.value)},methods:{setLang:function(e){this.$emit("curLang",e)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(e){this.content=e}}},n=(r(854),r(70)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-tabs",e._l(e.locales,(function(t,o,n){return r("b-tab",{key:"locale"+n,attrs:{title:t},on:{click:function(t){return e.setLang(o)}}},[r("b-textarea",{attrs:{rows:e.rows},on:{input:e.cinput},model:{value:e.content[o],callback:function(t){e.$set(e.content,o,t)},expression:"content[key]"}})],1)})),1)],1)}),[],!1,null,"06f58b61",null);t.default=component.exports},850:function(e,t,r){"use strict";r.r(t);r(156),r(51);var o=r(9),n=(r(851),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.localeText=e.$updateLocaleText(e.localeText),e.showID&&e.pfields.push({key:"id",sortable:!0}),e.pfields.push({key:"title",sortable:!0,formatter:e.$selectUserLocaleText}),e.showTag&&e.pfields.push({key:"tags",sortable:!0}),(e.showArrow||e.showDetail||e.editProblem||e.copyProblem)&&e.pfields.push({key:"actions",label:"Actions"});case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{moveUp:function(e){if(e>0){var t=this.$copyObject(this.problems[e]);this.problems.splice(e,1),this.problems.splice(e-1,0,t)}},moveDown:function(e){if(e<this.problems.length-1){var t=this.$copyObject(this.problems[e+1]);this.problems.splice(e+1,1),this.problems.splice(e,0,t)}},onRowSelected:function(e){this.$emit("rowSelected",e)},showProblem:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.toggleDetails();case 1:case"end":return t.stop()}}),t)})))()}}}),c=(r(861),r(70)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showFilter?r("p",{staticClass:"p-0 mb-2"},[r("span",[e._v("Filter: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pfilter,expression:"pfilter"}],domProps:{value:e.pfilter},on:{input:function(t){t.target.composing||(e.pfilter=t.target.value)}}})])]):e._e(),e._v(" "),r("b-table",{attrs:{bordered:"",items:e.problems,selectable:"","select-mode":"multi",fields:e.pfields,filter:e.pfilter},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([e.showDetail||e.editProblem||e.copyProblem||e.showArrow?{key:"cell(actions)",fn:function(t){return[e.showDetail?r("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return e.showProblem(t)}}},[t.detailsShowing?r("b-icon",{attrs:{icon:"eye-slash"}}):r("b-icon",{attrs:{icon:"eye"}})],1):e._e(),e._v(" "),e.editProblem?r("b-link",{staticClass:"mr-1",on:{click:function(r){return e.editProblem(t.item)}}},[r("b-icon",{attrs:{icon:"pen"}})],1):e._e(),e._v(" "),e.copyProblem?r("b-link",{staticClass:"mr-1",on:{click:function(r){return e.copyProblem(t.item)}}},[r("b-icon",{attrs:{icon:"back"}})],1):e._e(),e._v(" "),e.showArrow?r("b-link",{staticClass:"mr-1",on:{click:function(r){return e.moveUp(t.index)}}},[r("b-icon",{attrs:{icon:"arrow-up"}})],1):e._e(),e._v(" "),e.showArrow?r("b-link",{staticClass:"mr-1",on:{click:function(r){return e.moveDown(t.index)}}},[r("b-icon",{attrs:{icon:"arrow-down"}})],1):e._e()]}}:null,e.showDetail?{key:"row-details",fn:function(t){return[r("b-card",[r("p",[e._v(e._s(t.item.id)+": "+e._s(e.$selectUserLocaleText(t.item.title)))]),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.$md.render(e.$selectUserLocaleText(t.item.description)))}}),e._v(" "),r("p",[e._v("TAGS: "+e._s(t.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"2398be4f",null);t.default=component.exports},852:function(e,t,r){var content=r(862);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("0d16a966",content,!0,{sourceMap:!1})},853:function(e,t,r){var content=r(864);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("56c34f47",content,!0,{sourceMap:!1})},854:function(e,t,r){"use strict";r(846)},855:function(e,t,r){(t=r(59)(!1)).push([e.i,"textarea[data-v-06f58b61]{width:100%}",""]),e.exports=t},858:function(e,t,r){"use strict";r.r(t);r(156);var o=r(850),n=r(841),c={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:o.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var e=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)e.push(this.selProblems[i]);for(var t=[],r=0;r<this.oriProblems.length;r++){var o=this.oriProblems[r];n.a.findIdPos(e,o.id)<0&&t.push(o)}this.leftProblems=t,this.rightProblems=e},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var e=this.leftSelected[i];this.rightProblems.push(e);var t=n.a.findIdPos(this.leftProblems,e.id);t>=0&&this.leftProblems.splice(t,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var e=this.rightSelected[i];this.leftProblems.push(e);var t=n.a.findIdPos(this.selProblems,e.id);t>=0&&this.rightProblems.splice(t,1)}}},watch:{oriProblems:function(e){this.initSelection()},selProblems:function(e){this.initSelection()}}},l=(r(863),r(70)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex justify-content-start align-items-top"},[r("problem-table",{attrs:{problems:e.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(t){return e.leftSelected=t}}}),e._v(" "),r("div",{staticClass:"mx-5"},[r("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:e.selectItems}},[r("b-icon",{attrs:{icon:"arrow-right"}})],1),e._v(" "),r("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:e.deSelectItems}},[r("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),e._v(" "),r("div",[r("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[r("span",{staticClass:"mr-3"},[e._v(e._s(e.selText))]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.done}},[e._v(e._s(e.OKText))])],1),e._v(" "),r("problem-table",{attrs:{problems:e.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(t){return e.rightSelected=t}}})],1)],1)])}),[],!1,null,"c90387ec",null);t.default=component.exports;installComponents(component,{ProblemTable:r(850).default})},861:function(e,t,r){"use strict";r(852)},862:function(e,t,r){(t=r(59)(!1)).push([e.i,"[data-v-2398be4f] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),e.exports=t},863:function(e,t,r){"use strict";r(853)},864:function(e,t,r){(t=r(59)(!1)).push([e.i,"[data-v-c90387ec] .itemList{margin:12px 0}.container-fluid[data-v-c90387ec]{margin-top:30px}.pdescription[data-v-c90387ec]{width:100%;height:300px}.titleLabel[data-v-c90387ec]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-c90387ec] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),e.exports=t},870:function(e,t,r){"use strict";r.r(t);r(30),r(51);var o=r(9),n=r(34),c={data:function(){return{name:"",candidates:{}}},methods:{selectUser:function(e,t){var r={id:e,name:t.name};this.$emit("getUser",r)},searchUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.name.length<2)){t.next=2;break}return t.abrupt("return");case 2:return r={},t.next=5,n.d.collection("users").where("name","==",e.name).get();case 5:if(!(o=t.sent).empty)for(i=0;i<o.docs.length;i++)c=o.docs[i],r[c.id]=c.data();e.candidates=r;case 8:case"end":return t.stop()}}),t)})))()}}},l=r(70),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{attrs:{align:"center"}},[e._v("User name: \n        "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"ml-2",domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("button",{attrs:{size:"sm",variant:"success"},on:{click:e.searchUser}},[e._v("Search")])]),e._v(" "),e._l(e.candidates,(function(t,o,n){return r("p",{key:t.id,attrs:{align:"center"}},[e._v("\n        "+e._s(n+1)+". "),r("b-link",{on:{click:function(r){return e.selectUser(o,t)}}},[e._v(e._s(t.name)+" - "+e._s(t.email))])],1)}))],2)}),[],!1,null,null,null);t.default=component.exports},872:function(e,t,r){var content=r(978);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("7805e2e0",content,!0,{sourceMap:!1})},905:function(e,t,r){"use strict";r.r(t);r(18),r(12),r(156),r(30);var o={components:{UserSelector:r(870).default},props:{course:Object,mode:{type:String,default:"show"}},data:function(){return{kind:null,workMode:"show",selectUser:!1,courseForm:{name:"",teachers:[],assistants:[],school:"",dept:"",enrollCode:"",codeExpiredDate:"",codeExpiredTime:"",needApproval:!0,whitelist:"",note:""}}},created:function(){"edit"==this.mode&&this.editCourse(),"create"==this.mode&&this.createCourse()},computed:{manager:function(){return"admin"==this.$user("role")||"maintainer"==this.$user("role")}},methods:{cancel:function(){this.workMode="show"},addUser:function(e){this.courseForm[this.kind]?this.courseForm[this.kind].push(e):this.$set(this.courseForm,this.kind,[e]),this.selectUser=!1},removeUser:function(e,t){this.courseForm[e].splice(t,1)},getUser:function(e){this.kind=e,this.selectUser=!0},createCourse:function(){this.workMode="create"},editCourse:function(){var e=this.$copyObject(this.course);for(var t in this.courseForm)this.courseForm[t]=e[t];this.workMode="edit"},showNames:function(e){return e&&0!=e.length?e.map((function(e){return e.name})).join(", "):""},updateCourse:function(){if(this.courseForm.codeExpiredDate&&this.courseForm.codeExpiredDate.length>0){var e=this.courseForm.codeExpiredDate.replaceAll("-","");this.courseForm.codeExpiredTime&&this.courseForm.codeExpiredTime.length>0?e+=this.courseForm.codeExpiredTime.replaceAll(":",""):e+="235959",this.courseForm.codeExpired=e}else if(this.courseForm.codeExpiredTime&&this.courseForm.codeExpiredTime.length>0){var t=utils.getNow();this.courseForm.codeExpired=t.substring(0,8)+this.courseForm.codeExpiredTime.replaceAll(":","")}else delete this.courseForm.codeExpired;this.$emit("update",{mode:this.workMode,value:this.courseForm})}}},n=r(70),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-modal",{attrs:{size:"lg"},model:{value:e.selectUser,callback:function(t){e.selectUser=t},expression:"selectUser"}},[r("user-selector",{on:{getUser:e.addUser}})],1),e._v(" "),"show"==e.workMode?r("div",[r("p",[e._v("Name: "+e._s(e.course.name))]),e._v(" "),r("p",[e._v("Teacher: "+e._s(e.showNames(e.course.teachers)))]),e._v(" "),r("p",[e._v("Assistant: "+e._s(e.showNames(e.course.assistants)))]),e._v(" "),r("p",[e._v("School: "+e._s(e.course.school))]),e._v(" "),r("p",[e._v("Dept: "+e._s(e.course.dept))]),e._v(" "),e.course.enrollCode?r("p",[e._v("EnrollCode: "+e._s(e.course.enrollCode))]):e._e(),e._v(" "),e.course.codeExpired?r("p",[e._v("CodeExpired: "+e._s(e.course.codeExpired))]):e._e(),e._v(" "),e.course.needApproval?r("p",[e._v("NeedApproval: "+e._s(e.course.needApproval))]):e._e(),e._v(" "),e.course.whitelist?r("p",[e._v("WhiteList: "+e._s(e.course.whitelist))]):e._e(),e._v(" "),r("p",[e._v("Note: "+e._s(e.course.note))]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.editCourse}},[e._v("Edit")])],1):e._e(),e._v(" "),"edit"==e.workMode||"create"==e.workMode?r("div",["edit"==e.workMode?r("p",{attrs:{align:"center"}},[e._v("Modify Course")]):r("p",{attrs:{align:"center"}},[e._v("New Course")]),e._v(" "),r("p",{staticClass:"ml-2"},[e._v("Teachers: \n            "),e.courseForm.teachers&&e.courseForm.teachers.length>0?r("span",e._l(e.courseForm.teachers,(function(t,o){return r("span",{key:t.id},[e._v("\n                    "+e._s(t.name)+"\n                    "),e.manager?r("b-link",{staticClass:"mr-3",on:{click:function(t){return e.removeUser("teachers",o)}}},[r("b-icon",{attrs:{icon:"x"}})],1):e._e()],1)})),0):e._e(),e._v(" "),e.manager?r("button",{staticClass:"ml-3",on:{click:function(t){return e.getUser("teachers")}}},[e._v("Add")]):e._e()]),e._v(" "),r("p",{staticClass:"ml-2"},[e._v("Assistants: \n            "),e.courseForm.assistants&&e.courseForm.assistants.length>0?r("span",e._l(e.courseForm.assistants,(function(t,o){return r("span",{key:t.id},[e._v("\n                    "+e._s(t.name)+"\n                    "),r("b-link",{staticClass:"mr-3",on:{click:function(t){return e.removeUser("assistants",o)}}},[r("b-icon",{attrs:{icon:"x"}})],1)],1)})),0):e._e(),e._v(" "),r("button",{staticClass:"ml-3",on:{click:function(t){return e.getUser("assistants")}}},[e._v("Add")])]),e._v(" "),r("b-input",{staticClass:"mb-3",attrs:{placeholder:"Name"},model:{value:e.courseForm.name,callback:function(t){e.$set(e.courseForm,"name",t)},expression:"courseForm.name"}}),e._v(" "),r("b-input",{staticClass:"mb-3",attrs:{placeholder:"School"},model:{value:e.courseForm.school,callback:function(t){e.$set(e.courseForm,"school",t)},expression:"courseForm.school"}}),e._v(" "),r("b-input",{staticClass:"mb-3",attrs:{placeholder:"Department"},model:{value:e.courseForm.dept,callback:function(t){e.$set(e.courseForm,"dept",t)},expression:"courseForm.dept"}}),e._v(" "),r("b-input",{staticClass:"mb-3",attrs:{placeholder:"enrollCode"},model:{value:e.courseForm.enrollCode,callback:function(t){e.$set(e.courseForm,"enrollCode",t)},expression:"courseForm.enrollCode"}}),e._v(" "),r("b-form-datepicker",{attrs:{placeholder:"Code Expired Date",locale:e.$user("locale"),"today-button":"","reset-button":"","close-button":""},model:{value:e.courseForm.codeExpiredDate,callback:function(t){e.$set(e.courseForm,"codeExpiredDate",t)},expression:"courseForm.codeExpiredDate"}}),e._v(" "),r("b-form-timepicker",{attrs:{placeholder:"Code Expired Time",locale:e.$user("locale"),"show-seconds":"","reset-button":"","close-button":""},model:{value:e.courseForm.codeExpiredTime,callback:function(t){e.$set(e.courseForm,"codeExpiredTime",t)},expression:"courseForm.codeExpiredTime"}}),e._v(" "),r("p",{staticClass:"my-3 ml-2"},[r("b-form-radio-group",{attrs:{options:[{value:!0,text:"Approval needed"},{value:!1,text:"No approval needed"}]},model:{value:e.courseForm.needApproval,callback:function(t){e.$set(e.courseForm,"needApproval",t)},expression:"courseForm.needApproval"}})],1),e._v(" "),r("b-textarea",{staticClass:"mb-3",attrs:{placeholder:"White List",rows:"5"},model:{value:e.courseForm.whitelist,callback:function(t){e.$set(e.courseForm,"whitelist",t)},expression:"courseForm.whitelist"}}),e._v(" "),r("b-input",{staticClass:"mb-3",attrs:{placeholder:"Note"},model:{value:e.courseForm.note,callback:function(t){e.$set(e.courseForm,"note",t)},expression:"courseForm.note"}}),e._v(" "),r("b-button",{staticClass:"mr-3",attrs:{size:"sm",variant:"primary"},on:{click:e.cancel}},[e._v("Cancel")]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.updateCourse}},[e._v("Update")])],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UserSelector:r(870).default})},977:function(e,t,r){"use strict";r(872)},978:function(e,t,r){(t=r(59)(!1)).push([e.i,'[data-v-0f2a4cce] h1{color:#00f;font-family:"Arial";font-size:120%;margin:24px 0;padding-bottom:3px;border-bottom:1px solid #000}[data-v-0f2a4cce] h2{color:#ff4500;font-size:110%;margin:16px 0 8px}section[data-v-0f2a4cce]{padding:8px 0;color:red;margin:18px 0 6px;font-size:150%}[data-v-0f2a4cce] .itemList{margin-top:8px}.container-fluid[data-v-0f2a4cce]{margin:30px}.panel[data-v-0f2a4cce]{margin-right:30px;position:relative}.newButton[data-v-0f2a4cce]{position:absolute;top:12px;right:12px}',""]),e.exports=t}}]);