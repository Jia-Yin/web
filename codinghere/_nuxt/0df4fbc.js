(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1117:function(e,t,r){var content=r(1329);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("99d5983e",content,!0,{sourceMap:!1})},1328:function(e,t,r){"use strict";r(1117)},1329:function(e,t,r){(t=r(56)(!1)).push([e.i,".cname[data-v-41fc4fee]{color:#00f;text-align:center}.col-2[data-v-41fc4fee]{padding:24px}.col-10[data-v-41fc4fee]{padding:12px;border-left:1px solid #90ee90}.list-group-item[data-v-41fc4fee]{width:80%;margin:20px auto;border-radius:20px;text-align:center;border:1px solid green;padding:6px}.list-group-item.active[data-v-41fc4fee]{margin:20px auto}.container[data-v-41fc4fee]{margin-top:30px;background:#f6faf6;min-height:600px}",""]),e.exports=t},1444:function(e,t,r){"use strict";r.r(t);r(58),r(30),r(86),r(9),r(20),r(49);var n=r(7),o=r(26),c={data:function(){return{teachCourses:[],course:null,courseID:null,localeProcessed:!1,localeText:{Admin_CourseList:"修課清單",Admin_CourseUnit:"課程單元",Admin_CourseScore:"成績管理",Admin_CourseExam:"考試管理",Admin_CourseProblem:"題目管理",Admin_CourseInfo:"課程資訊"}}},computed:{cid:function(){return this.$route.params.cid}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.localeText=e.$updateLocaleText(e.localeText),e.updateCourse();case 2:case"end":return t.stop()}}),t)})))()},methods:{updateCourse:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,d,l,m,f,i,v,h,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$user("id"),t.next=3,e.$store.dispatch("getCourse",e.cid);case 3:if((n=t.sent).id=e.cid,e.courseID=e.cid,e.course=n,c=!1,e.course&&e.course.teachers&&e.course.teachers.some((function(e){return e.id===r}))&&(c=!0),e.course&&e.course.assistants&&e.course.assistants.some((function(e){return e.id===r}))&&(c=!0),c){t.next=14;break}e.$router.push("/user"),t.next=19;break;case 14:if(0!=e.teachCourses.length){t.next=19;break}return t.next=17,o.d.collection("courses").doc("LIST").get();case 17:if((d=t.sent).exists){for(l=[],m=d.data(),(f=Object.keys(m)).sort(),i=0;i<f.length;i++)v=f[i],h=m[v],x=!1,h.teachers&&h.teachers.some((function(e){return e.id===r}))&&(x=!0),h.assistants&&h.assistants.some((function(e){return e.id===r}))&&(x=!0),x&&(l.push(h),h.id=v,h.text=h.name);e.teachCourses=l}case 19:case"end":return t.stop()}}),t)})))()},changeCourse:function(){var path=this.$route.path.replace(this.cid,this.courseID);this.$router.push(path)}}},d=(r(1328),r(55)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{cols:"2"}},[e.course&&e.course.id?r("div",[r("b-select",{staticClass:"cname",attrs:{size:"sm","value-field":"id",options:e.teachCourses},on:{change:function(t){return e.changeCourse()}},model:{value:e.courseID,callback:function(t){e.courseID=t},expression:"courseID"}})],1):e._e(),e._v(" "),r("b-list-group",{staticClass:"mt-3"},[r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/students",variant:"danger",active:e.$route.name.includes("students")}},[e._v(e._s(e.localeText.Admin_CourseList))]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/units",variant:"danger",active:e.$route.name.includes("units")}},[e._v(e._s(e.localeText.Admin_CourseUnit))]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/scores",variant:"danger",active:e.$route.name.includes("scores")}},[e._v(e._s(e.localeText.Admin_CourseScore))]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/exams",variant:"danger",active:e.$route.name.includes("exams")}},[e._v(e._s(e.localeText.Admin_CourseExam))]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/problems",variant:"danger",active:e.$route.name.includes("problems")}},[e._v(e._s(e.localeText.Admin_CourseProblem))]),e._v(" "),r("b-list-group-item",{attrs:{to:"/teacher/"+e.cid+"/profile",variant:"danger",active:e.$route.name.includes("profile")}},[e._v(e._s(e.localeText.Admin_CourseInfo))])],1)],1),e._v(" "),r("b-col",{attrs:{cols:"10"}},[r("nuxt-child")],1)],1)],1)}),[],!1,null,"41fc4fee",null);t.default=component.exports}}]);