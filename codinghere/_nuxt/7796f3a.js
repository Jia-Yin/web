(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1114:function(t,e,r){var content=r(1314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("ca2778ac",content,!0,{sourceMap:!1})},1313:function(t,e,r){"use strict";r(1114)},1314:function(t,e,r){(e=r(56)(!1)).push([t.i,"section{color:#00f;font-size:120%}",""]),t.exports=e},1400:function(t,e,r){"use strict";r.r(e);r(14),r(30),r(15),r(49);var n=r(7),o=r(26),c=r(855),l={data:function(){return{listen:!1,exam:null,course:{},curexamanswers:[],fields:[],livelisten:null,localeText:{Monitor_TotalUsers:"人數",Monitor_Stop:"停止監看",Monitor_Start:"開始監看",Profile_StdID:"學號",Profile_Name:"姓名",ExamMan_Score:"分數",ExamMan_SortNum:"排序數",Exam_UseTime:"用時"}}},computed:{cid:function(){return this.$route.params.cid},eid:function(){return this.$route.params.eid}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.localeText=t.$updateLocaleText(t.localeText),t.fields=[{key:"sid",label:t.localeText.Profile_StdID,sortable:!0},{key:"name",label:t.localeText.Profile_Name,sortable:!0},{key:"score",label:t.localeText.ExamMan_Score,sortable:!0},{key:"times",label:t.localeText.Exam_UseTime,sortable:!0},{key:"wscore",label:t.localeText.ExamMan_SortNum,sortable:!0}],e.next=4,t.$store.dispatch("getCourse",t.cid);case 4:return t.course=e.sent,e.next=7,o.d.collection("exams").doc(t.eid).get();case 7:r=e.sent,t.exam=r.data(),t.initTable(),t.listenAnswer(),t.listen=!0;case 12:case"end":return e.stop()}}),e)})))()},methods:{initTable:function(){for(var i=0;i<this.exam.probs.length;i++){var t=this.exam.probs[i],e=t.id,r=this.$selectUserLocaleText(t.title);this.fields.push({key:e,label:r,sortable:!0})}for(var n in this.course.students){var o=this.course.students[n],data={id:n,sid:o.stdID,name:o.name,score:0,times:0,wscore:0};this.curexamanswers.push(data)}},change:function(){this.listen?this.livelisten():this.listenAnswer(),this.listen=!this.listen},listenAnswer:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t,t.livelisten=o.d.collection("answers").where("examid","==",t.eid).onSnapshot((function(t){t.docChanges().forEach((function(t){var e=t.doc.data();if(r.course.students[e.userid]){var n=c.a.findIdPos(r.curexamanswers,e.userid);if(n>=0){var o=r.curexamanswers[n];for(var l in r.$set(o,"score",e.score),r.$set(o,"times",e.totaltime),r.$set(o,"wscore",1e5*e.score+99999-e.totaltime),e.submits)r.$set(o,l,e.submits[l].correct?1:0)}}}))}));case 2:case"end":return e.stop()}}),e)})))()}}},d=(r(1313),r(55)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("section",[t._v(t._s(t.exam&&t.exam.name))]),t._v(" "),r("p",{staticClass:"mt-2"},[t._v(" "+t._s(t.localeText.Monitor_TotalUsers)+" = "+t._s(t.curexamanswers.length)+"\n        "),r("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success"},on:{click:t.change}},[t._v("\n            "+t._s(t.listen?t.localeText.Monitor_Stop:t.localeText.Monitor_Start)+"\n        ")])],1),t._v(" "),r("b-table",{staticClass:"mt-3",attrs:{"show-empty":"",small:"",stacked:"md",responsive:!0,items:t.curexamanswers,fields:t.fields}})],1)}),[],!1,null,null,null);e.default=component.exports},855:function(t,e,r){"use strict";r(10),r(14),r(22),r(86),r(9),r(856),r(29),r(15);var n=r(228),o=r.n(n),c={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var r=Math.floor(e/60);return e%=60,"".concat(this.pad(r),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],r=Object.keys(t);return r.sort(),r.forEach((function(r){e.push(Object.assign({id:r},t[r]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var r=JSON.parse(JSON.stringify(t)),n=t.id;delete r.id,e[n]=r})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var r=0;r<t.length;r++)if(e==t[r].id)return r;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},856:function(t,e,r){"use strict";var n=r(8),o=r(857).start;n({target:"String",proto:!0,forced:r(858)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},857:function(t,e,r){var n=r(50),o=r(229),c=r(52),l=Math.ceil,d=function(t){return function(e,r,d){var f,h,m=String(c(e)),v=m.length,x=void 0===d?" ":String(d),w=n(r);return w<=v||""==x?m:(f=w-v,(h=o.call(x,l(f/x.length))).length>f&&(h=h.slice(0,f)),t?m+h:h+m)}};t.exports={start:d(!1),end:d(!0)}},858:function(t,e,r){var n=r(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)}}]);