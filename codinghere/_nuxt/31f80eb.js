(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1398:function(e,t,o){"use strict";o.r(t);o(14),o(12),o(156),o(30),o(86),o(46),o(15),o(49);var r=o(7),l=o(860),n=o(26),c=o(855),m={components:{ProblemSelector:l.default},data:function(){return{infoAlert:!1,info:{title:"",message:""},selectProblems:!1,problems:[],examform:{title:null,tlimit:60,tscore:0,probs:[],compilers:[]},examprobs:[],examfields:[],quizselected:[],probselected:[],probconfig:{tlimit:null,score:null,order:null},sorttype:"title",cachequiz:{},tmap:{singlechoice:0,fillin:1,functest:2,progtest:3},nmap:{},localeText:{ExamMan_Title:"名稱",ExamMan_EditExam:"編輯考試",ExamMan_TLMin:"限時 (分)",ExamMan_TLSec:"限時 (秒)",ExamMan_TotalScore:"總分",ExamMan_ProbTotalTime:"問題時長",ExamMan_TotalTime:"考試時長",ExamMan_Score:"分數",ExamMan_QuizOrder:"順序",ExamMan_SetParam:"設定問題參數",ExamMan_SetDefaultOrder:"設定預設順序",ExamMan_SelectProbs:"選擇題目",ExamMan_Compilers:"語言",ExamMan_Type:"類型",Exam_Choice:"選擇",Exam_Fillin:"填充",Exam_Function:"函式",Exam_Program:"程式",SYS_OK:"確定",SYS_Cancel:"取消",SYS_Success:"成功",SYS_Actions:"操作"}}},computed:{cid:function(){return this.$route.params.cid},eid:function(){return this.$route.params.eid},examinfo:function(){var e=0,t=0;this.examform.probs.forEach((function(o){e+=o.score,t+=o.tlimit}));var o=this.localeText.ExamMan_TotalScore;return o+=" = ".concat(e,", "),o+=this.localeText.ExamMan_ProbTotalTime,o+=" = ".concat(c.a.mmss(t),", "),o+=this.localeText.ExamMan_TotalTime,o+=" = ".concat(this.examform.tlimit,":00")}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,l,m,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.localeText=e.$updateLocaleText(e.localeText),t.next=3,e.$store.dispatch("getCourse",e.cid);case 3:if(e.course=t.sent,o=e.course.problemSets,1!==(r=Object.keys(o)).length){t.next=12;break}return e.curPSetID=r[0],t.next=10,n.d.collection("problems").doc(e.curPSetID).get();case 10:(l=t.sent).exists&&(m=l.data().problems,e.problems=c.a.obj2arr(m));case 12:return t.next=14,n.d.collection("exams").doc(e.eid).get();case 14:(f=t.sent).exists&&(e.examform=f.data()),e.examform.compilers=e.course.compilers?e.course.compilers:["c","cpp","py"],e.examfields=[{key:"type",label:e.localeText.ExamMan_Type,sortable:!0,sortDirection:"desc"},{key:"title",label:e.localeText.ExamMan_Title,sortable:!1},{key:"tlimit",label:e.localeText.ExamMan_TLSec,sortable:!0},{key:"score",label:e.localeText.ExamMan_Score,sortable:!0},{key:"order",label:e.localeText.ExamMan_QuizOrder,sortable:!0},{key:"actions",label:e.localeText.SYS_Actions,class:"text-center"}],e.nmap={singlechoice:e.localeText.Exam_Choice,fillin:e.localeText.Exam_Fillin,functest:e.localeText.Exam_Function,progtest:e.localeText.Exam_Program};case 19:case"end":return t.stop()}}),t)})))()},methods:{examData:function(){var e={name:this.examform.name,tlimit:this.examform.tlimit,compilers:this.examform.compilers},t=0;this.examform.probs.forEach((function(e){return t+=e.score})),e.tscore=t;var o=Object.assign({},e);return e.probs=this.examform.probs.map((function(e){return{title:e.title,tlimit:e.tlimit,score:e.score,type:e.type}})),e.id=this.eid,o.probs=this.$copyObject(this.examform.probs),{short:e,full:o}},modifyExam:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,l,m,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.examform.name&&""!=e.examform.name.trim()&&e.examform.probs&&0!=e.examform.probs.length){t.next=3;break}return alert("Exam not set correctly."),t.abrupt("return");case 3:return o=e.examData(),l=n.d.collection("courses").doc(e.cid),m=n.d.collection("exams").doc(e.eid),f=null,t.prev=7,t.next=10,n.d.runTransaction(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var r,n,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(l);case 2:return r=e.sent,e.next=5,t.set(m,o.full);case 5:if(n=o.short,f=r.data().exams,!((d=c.a.findIdPos(f,n.id))<0)){e.next=10;break}throw"Cannot find exam in Course";case 10:return f.splice(d,1,n),e.next=13,t.update(l,{exams:f,updated:c.a.getNow()});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:e.$store.commit("updateCourse",{id:e.cid,value:{exams:f}}),e.infoAlert=!0,e.info={title:e.localeText.ExamMan_EditExam,message:e.localeText.SYS_Success},t.next=18;break;case 15:t.prev=15,t.t0=t.catch(7),alert(t.t0);case 18:case"end":return t.stop()}}),t,null,[[7,15]])})))()},sortCompare:function(e,t,o,r,l,n,c){if("type"===o){var a=this.tmap[e[o]],b=this.tmap[t[o]];return a<b?-1:a>b?1:0}var m=e[o],f=t[o];return"number"==typeof m&&"number"==typeof f?m<f?-1:m>f?1:0:toString(m).localeCompare(toString(f),c,n)},setdeforder:function(){var e=this;this.examprobs.forEach((function(t){console.log("prob",t);var o=e.quizbyid(t.id);console.log("quiz",o),t.order=100*e.tmap[o.type]}))},setprobconfig:function(){var e=0,t=0,o=0;this.probconfig.tlimit&&""!==this.probconfig.tlimit&&(e=parseInt(this.probconfig.tlimit)),this.probconfig.score&&""!==this.probconfig.score&&(t=parseInt(this.probconfig.score)),this.probconfig.order&&""!==this.probconfig.order&&(o=parseInt(this.probconfig.order)),this.probselected.forEach((function(r){e>0&&(r.tlimit=e),t>0&&(r.score=t),o>0&&(r.order=o)})),this.probconfig={tlimit:null,score:null,order:null}},testprob:function(e){},editprob:function(e){},deleteprob:function(e){this.examform.probs.splice(e.index,1)},pidExist:function(e,t){for(var i=0;i<e.length;i++)if(t===e[i].id)return!0;return!1},probRowSelected:function(e){this.probselected=e},quizRowSelected:function(e){this.quizselected=e},addProblem:function(e){for(var t={singlechoice:[30,2],fillin:[30,2],functest:[360,5],progtest:[600,10]},i=0;i<e.length;i++){if(!(c.a.findIdPos(this.examform.probs,e[i].id)>=0)){var o=this.$copyObject(e[i]);delete o._showDetails,o.type="progtest",o.tlimit=t[o.type][0],o.score=t[o.type][1],o.order||(o.order=100*this.tmap[o.type]),this.examform.probs.push(o)}}this.selectProblems=!1}}},f=o(55),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message)+"\n    ")]),e._v(" "),o("section",{staticClass:"mt-4"},[e._v("\n        "+e._s(e.localeText.ExamMan_EditExam)+"    \n        ("+e._s(e.examinfo)+")\n    ")]),e._v(" "),o("b-form",{staticClass:"mt-3",attrs:{inline:""}},[o("span",{staticClass:"elabel"},[e._v(e._s(e.localeText.ExamMan_Title))]),e._v(" "),o("b-input",{staticClass:"ml-3",attrs:{size:"sm",type:"text"},model:{value:e.examform.name,callback:function(t){e.$set(e.examform,"name",t)},expression:"examform.name"}}),e._v(" "),o("span",{staticClass:"ml-3 elabel"},[e._v(e._s(e.localeText.ExamMan_TLMin))]),e._v(" "),o("b-input",{staticClass:"ml-3",attrs:{size:"sm",type:"number"},model:{value:e.examform.tlimit,callback:function(t){e.$set(e.examform,"tlimit",t)},expression:"examform.tlimit"}}),e._v(" "),o("div",{staticClass:"col"},[o("span",{staticClass:"clabel"},[e._v(e._s(e.localeText.ExamMan_Compilers))]),e._v(" "),o("div",{staticClass:"ml-3 d-inline-block compiler"},[o("div",{staticClass:"d-inline-block compiler"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.examform.compilers,expression:"examform.compilers"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"compiler_c",value:"c"},domProps:{checked:Array.isArray(e.examform.compilers)?e._i(e.examform.compilers,"c")>-1:e.examform.compilers},on:{change:function(t){var o=e.examform.compilers,r=t.target,l=!!r.checked;if(Array.isArray(o)){var n=e._i(o,"c");r.checked?n<0&&e.$set(e.examform,"compilers",o.concat(["c"])):n>-1&&e.$set(e.examform,"compilers",o.slice(0,n).concat(o.slice(n+1)))}else e.$set(e.examform,"compilers",l)}}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"compiler_c"}},[e._v("C")])])])]),e._v(" "),o("div",{staticClass:"ml-3 d-inline-block compiler"},[o("div",{staticClass:"d-inline-block compiler"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.examform.compilers,expression:"examform.compilers"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"compiler_cpp",value:"cpp"},domProps:{checked:Array.isArray(e.examform.compilers)?e._i(e.examform.compilers,"cpp")>-1:e.examform.compilers},on:{change:function(t){var o=e.examform.compilers,r=t.target,l=!!r.checked;if(Array.isArray(o)){var n=e._i(o,"cpp");r.checked?n<0&&e.$set(e.examform,"compilers",o.concat(["cpp"])):n>-1&&e.$set(e.examform,"compilers",o.slice(0,n).concat(o.slice(n+1)))}else e.$set(e.examform,"compilers",l)}}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"compiler_cpp"}},[e._v("C++")])])])]),e._v(" "),o("div",{staticClass:"ml-3 d-inline-block compiler"},[o("div",{staticClass:"d-inline-block compiler"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.examform.compilers,expression:"examform.compilers"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"compiler_py",value:"py"},domProps:{checked:Array.isArray(e.examform.compilers)?e._i(e.examform.compilers,"py")>-1:e.examform.compilers},on:{change:function(t){var o=e.examform.compilers,r=t.target,l=!!r.checked;if(Array.isArray(o)){var n=e._i(o,"py");r.checked?n<0&&e.$set(e.examform,"compilers",o.concat(["py"])):n>-1&&e.$set(e.examform,"compilers",o.slice(0,n).concat(o.slice(n+1)))}else e.$set(e.examform,"compilers",l)}}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"compiler_py"}},[e._v("Python")])])])])]),e._v(" "),o("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success",to:"/teacher/"+e.cid+"/exams"}},[e._v(e._s(e.localeText.SYS_Cancel))]),e._v(" "),o("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"outline-success"},on:{click:e.modifyExam}},[e._v(e._s(e.localeText.SYS_OK))])],1),e._v(" "),o("hr"),e._v(" "),o("b-form",{attrs:{inline:""}},[o("b-form-input",{attrs:{size:"sm",id:"probtime",type:"text",placeholder:e.localeText.ExamMan_TLSec},model:{value:e.probconfig.tlimit,callback:function(t){e.$set(e.probconfig,"tlimit",t)},expression:"probconfig.tlimit"}}),e._v(" "),o("b-form-input",{staticClass:"ml-2",attrs:{size:"sm",id:"probscore",type:"text",placeholder:e.localeText.ExamMan_Score},model:{value:e.probconfig.score,callback:function(t){e.$set(e.probconfig,"score",t)},expression:"probconfig.score"}}),e._v(" "),o("b-form-input",{staticClass:"ml-2",attrs:{size:"sm",id:"proborder",type:"text",placeholder:e.localeText.ExamMan_QuizOrder},model:{value:e.probconfig.order,callback:function(t){e.$set(e.probconfig,"order",t)},expression:"probconfig.order"}}),e._v(" "),o("b-button",{staticClass:"mx-3",attrs:{size:"sm",variant:"outline-success"},on:{click:e.setprobconfig}},[e._v(e._s(e.localeText.ExamMan_SetParam))]),e._v(" "),o("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:e.setdeforder}},[e._v(e._s(e.localeText.ExamMan_SetDefaultOrder))])],1),e._v(" "),o("b-table",{staticClass:"mt-3",attrs:{"show-empty":"",small:"",stacked:"md",selectable:!0,"select-mode":"range",items:e.examform.probs,fields:e.examfields,"sort-by":e.sorttype,"sort-compare":e.sortCompare},on:{"update:sortBy":function(t){e.sorttype=t},"update:sort-by":function(t){e.sorttype=t},"row-selected":e.probRowSelected},scopedSlots:e._u([{key:"cell(type)",fn:function(t){return[e._v("\n            "+e._s(e.nmap[t.value])+"\n        ")]}},{key:"cell(title)",fn:function(t){return[e._v("\n            "+e._s(e.$selectUserLocaleText(t.value))+"\n        ")]}},{key:"cell(actions)",fn:function(t){return[o("b-button-group",[o("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(o){return e.testprob(t.item)}}},[o("b-icon",{attrs:{icon:"check"}})],1),e._v(" "),o("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(o){return e.deleteprob(t)}}},[o("b-icon",{attrs:{icon:"trash"}})],1)],1)]}}])}),e._v(" "),o("b-button",{attrs:{variant:"outline-success"},on:{click:function(t){e.selectProblems=!0}}},[e._v(e._s(e.localeText.ExamMan_SelectProbs))]),e._v(" "),o("b-modal",{attrs:{size:"xl"},model:{value:e.selectProblems,callback:function(t){e.selectProblems=t},expression:"selectProblems"}},[o("problem-selector",{staticClass:"mt-4",attrs:{oriProblems:e.problems,selProblems:e.examform.probs,selText:e.localeText.ExamMan_SelectProbs,OKText:e.localeText.SYS_OK},on:{OK:e.addProblem}})],1)],1)}),[],!1,null,"4b814004",null);t.default=component.exports;installComponents(component,{ProblemSelector:o(860).default})},855:function(e,t,o){"use strict";o(10),o(14),o(22),o(86),o(9),o(856),o(29),o(15);var r=o(228),l=o.n(r),n={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var o=Math.floor(t/60);return t%=60,"".concat(this.pad(o),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],o=Object.keys(e);return o.sort(),o.forEach((function(o){t.push(Object.assign({id:o},e[o]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var o=JSON.parse(JSON.stringify(e)),r=e.id;delete o.id,t[r]=o})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var o=0;o<e.length;o++)if(t==e[o].id)return o;return-1},encode:function(e,t){return new l.a(e).encrypt(t)},decode:function(e,t){return new l.a(e).decrypt(t)}};t.a=n},856:function(e,t,o){"use strict";var r=o(8),l=o(857).start;r({target:"String",proto:!0,forced:o(858)},{padStart:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},857:function(e,t,o){var r=o(50),l=o(229),n=o(52),c=Math.ceil,m=function(e){return function(t,o,m){var f,d,h=String(n(t)),x=h.length,v=void 0===m?" ":String(m),_=r(o);return _<=x||""==v?h:(f=_-x,(d=l.call(v,c(f/v.length))).length>f&&(d=d.slice(0,f)),e?h+d:d+h)}};e.exports={start:m(!1),end:m(!0)}},858:function(e,t,o){var r=o(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},859:function(e,t,o){"use strict";o.r(t);o(156),o(49);var r=o(7),l=(o(867),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Problem_ID:"編號",Problem_Title:"名稱",Common_Edit:"編輯",Common_Copy:"複製",SYS_Actions:"操作",SYS_Find:"搜尋"}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.localeText=e.$updateLocaleText(e.localeText),e.showID&&e.pfields.push({key:"id",label:e.localeText.Problem_ID,sortable:!0}),e.pfields.push({key:"title",label:e.localeText.Problem_Title,sortable:!0,formatter:e.$selectUserLocaleText}),e.showTag&&e.pfields.push({key:"tags",sortable:!0}),(e.showArrow||e.showDetail||e.editProblem||e.copyProblem)&&e.pfields.push({key:"actions",label:e.localeText.SYS_Actions});case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{moveUp:function(e){if(e>0){var t=this.$copyObject(this.problems[e]);this.problems.splice(e,1),this.problems.splice(e-1,0,t)}},moveDown:function(e){if(e<this.problems.length-1){var t=this.$copyObject(this.problems[e+1]);this.problems.splice(e+1,1),this.problems.splice(e,0,t)}},onRowSelected:function(e){this.$emit("rowSelected",e)},showProblem:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.toggleDetails();case 1:case"end":return t.stop()}}),t)})))()}}}),n=(o(870),o(55)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.showFilter?o("p",{staticClass:"p-0 mb-2"},[o("span",[e._v(e._s(e.localeText.SYS_Find)),o("input",{directives:[{name:"model",rawName:"v-model",value:e.pfilter,expression:"pfilter"}],staticClass:"ml-2",domProps:{value:e.pfilter},on:{input:function(t){t.target.composing||(e.pfilter=t.target.value)}}})])]):e._e(),e._v(" "),o("b-table",{attrs:{bordered:"",items:e.problems,selectable:"","select-mode":"multi",fields:e.pfields,filter:e.pfilter},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([e.showDetail||e.editProblem||e.copyProblem||e.showArrow?{key:"cell(actions)",fn:function(t){return[e.showDetail?o("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(o){return e.showProblem(t)}}},[t.detailsShowing?o("b-icon",{attrs:{icon:"eye-slash"}}):o("b-icon",{attrs:{icon:"eye"}})],1):e._e(),e._v(" "),e.editProblem?o("b-link",{staticClass:"mr-1",on:{click:function(o){return e.editProblem(t.item)}}},[o("b-icon",{attrs:{icon:"pen"}})],1):e._e(),e._v(" "),e.copyProblem?o("b-link",{staticClass:"mr-1",on:{click:function(o){return e.copyProblem(t.item)}}},[o("b-icon",{attrs:{icon:"back"}})],1):e._e(),e._v(" "),e.showArrow?o("b-link",{staticClass:"mr-1",on:{click:function(o){return e.moveUp(t.index)}}},[o("b-icon",{attrs:{icon:"arrow-up"}})],1):e._e(),e._v(" "),e.showArrow?o("b-link",{staticClass:"mr-1",on:{click:function(o){return e.moveDown(t.index)}}},[o("b-icon",{attrs:{icon:"arrow-down"}})],1):e._e()]}}:null,e.showDetail?{key:"row-details",fn:function(t){return[o("b-card",[o("p",[e._v(e._s(t.item.id)+": "+e._s(e.$selectUserLocaleText(t.item.title)))]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.$md.render(e.$selectUserLocaleText(t.item.description)))}}),e._v(" "),o("p",[e._v("TAGS: "+e._s(t.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"713cf5a8",null);t.default=component.exports},860:function(e,t,o){"use strict";o.r(t);o(156);var r=o(859),l=o(855),n={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:r.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var e=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)e.push(this.selProblems[i]);for(var t=[],o=0;o<this.oriProblems.length;o++){var r=this.oriProblems[o];l.a.findIdPos(e,r.id)<0&&t.push(r)}this.leftProblems=t,this.rightProblems=e},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var e=this.leftSelected[i];this.rightProblems.push(e);var t=l.a.findIdPos(this.leftProblems,e.id);t>=0&&this.leftProblems.splice(t,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var e=this.rightSelected[i];this.leftProblems.push(e);var t=l.a.findIdPos(this.rightProblems,e.id);t>=0&&this.rightProblems.splice(t,1)}}},watch:{oriProblems:function(e){this.initSelection()},selProblems:function(e){this.initSelection()}}},c=(o(872),o(55)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"d-flex justify-content-start align-items-top"},[o("problem-table",{attrs:{problems:e.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(t){return e.leftSelected=t}}}),e._v(" "),o("div",{staticClass:"mx-5"},[o("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:e.selectItems}},[o("b-icon",{attrs:{icon:"arrow-right"}})],1),e._v(" "),o("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:e.deSelectItems}},[o("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),e._v(" "),o("div",[o("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.selText))]),e._v(" "),o("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.done}},[e._v(e._s(e.OKText))])],1),e._v(" "),o("problem-table",{attrs:{problems:e.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(t){return e.rightSelected=t}}})],1)],1)])}),[],!1,null,"743b81cc",null);t.default=component.exports;installComponents(component,{ProblemTable:o(859).default})},862:function(e,t,o){var content=o(871);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(57).default)("713447c1",content,!0,{sourceMap:!1})},863:function(e,t,o){var content=o(873);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(57).default)("a57ebe90",content,!0,{sourceMap:!1})},870:function(e,t,o){"use strict";o(862)},871:function(e,t,o){(t=o(56)(!1)).push([e.i,"[data-v-713cf5a8] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),e.exports=t},872:function(e,t,o){"use strict";o(863)},873:function(e,t,o){(t=o(56)(!1)).push([e.i,"[data-v-743b81cc] .itemList{margin:12px 0}.container-fluid[data-v-743b81cc]{margin-top:30px}.pdescription[data-v-743b81cc]{width:100%;height:300px}.titleLabel[data-v-743b81cc]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-743b81cc] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),e.exports=t}}]);