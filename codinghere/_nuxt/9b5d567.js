(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1049:function(t,e,o){"use strict";o(896)},1050:function(t,e,o){(e=o(60)(!1)).push([t.i,".card[data-v-5d978f6a]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-5d978f6a]{margin-bottom:24px}.btn[data-v-5d978f6a]{min-width:10%;margin:12px auto 24px}",""]),t.exports=e},1119:function(t,e,o){"use strict";o.r(e);o(10),o(14),o(12),o(156),o(30),o(46),o(15),o(49);var r=o(8),n=o(850),l=o(32),c=o(843),m={components:{ProblemSelector:n.default},data:function(){return{infoAlert:!1,info:{title:"",message:""},selectProblems:!1,problems:[],examform:{title:null,tlimit:60,tscore:0,probs:[]},examprobs:[],examfields:[{key:"type",label:"Type",sortable:!0,sortDirection:"desc"},{key:"title",label:"Title",sortable:!1},{key:"question",label:"Question",sortable:!1},{key:"timelimit",label:"Time Limit",sortable:!0},{key:"score",label:"Score",sortable:!0},{key:"order",label:"Order",sortable:!0},{key:"actions",label:"Action",class:"text-center"}],quizselected:[],probselected:[],probconfig:{timelimit:null,score:null,order:null},sorttype:"title",cachequiz:{},tmap:{singlechoice:0,fillin:1,functest:2,progtest:3}}},computed:{cid:function(){return this.$route.params.course},eid:function(){return this.$route.params.eid},examinfo:function(){var t=0,e=0;this.examprobs.forEach((function(o){t+=o.score,e+=o.timelimit}));var o="Total Score = ".concat(t,", Prob Times = ").concat(this.hhmmss(e));return o+=", Total Times = ".concat(this.examform.timelimit,":00")}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.collection("problems").doc("BASE").get();case 2:return(o=e.sent).exists&&(r=o.data(),t.problems=c.a.obj2arr(r)),e.next=6,l.d.collection("exams").doc(t.eid).get();case 6:(n=e.sent).exists&&(t.examform=n.data());case 8:case"end":return e.stop()}}),e)})))()},methods:{examData:function(){var t={name:this.examform.name,tlimit:this.examform.tlimit},e=0;this.examform.probs.forEach((function(t){return e+=t.score})),t.tscore=e;var o=Object.assign({},t);return t.probs=this.examform.probs.map((function(t){return{title:t.title,tlimit:t.tlimit,score:t.score,type:t.type}})),t.id=this.eid,o.probs=this.$copyObject(this.examform.probs),{short:t,full:o}},modifyExam:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.examform.name&&""!=t.examform.name.trim()&&t.examform.probs&&0!=t.examform.probs.length){e.next=3;break}return alert("Exam not set correctly."),e.abrupt("return");case 3:return o=t.examData(),n=l.d.collection("courses").doc(t.cid),m=l.d.collection("exams").doc(t.eid),f=null,e.prev=7,e.next=10,l.d.runTransaction(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var r,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get(n);case 2:return r=t.sent,t.next=5,e.set(m,o.full);case 5:if(l=o.short,f=r.data().exams,!((d=c.a.findIdPos(f,l.id))<0)){t.next=10;break}throw"Cannot find exam in Course";case 10:return f.splice(d,1,l),t.next=13,e.update(n,{exams:f,updated:c.a.getNow()});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:t.$store.commit("updateCourse",{id:t.cid,value:{exams:f}}),t.infoAlert=!0,t.info={title:"Exam",message:"Modify Exam OK!"},e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[7,15]])})))()},sortCompare:function(t,e,o,r,n,l,c){if("type"===o){var a=this.tmap[t[o]],b=this.tmap[e[o]];return a<b?-1:a>b?1:0}var m=t[o],f=e[o];return"number"==typeof m&&"number"==typeof f?m<f?-1:m>f?1:0:toString(m).localeCompare(toString(f),c,l)},setdeforder:function(){var t=this;this.examprobs.forEach((function(e){console.log("prob",e);var o=t.quizbyid(e.id);console.log("quiz",o),e.order=100*t.tmap[o.type]}))},setprobconfig:function(){var t=0,e=0,o=0;this.probconfig.timelimit&&""!==this.probconfig.timelimit&&(t=parseInt(this.probconfig.timelimit)),this.probconfig.score&&""!==this.probconfig.score&&(e=parseInt(this.probconfig.score)),this.probconfig.order&&""!==this.probconfig.order&&(o=parseInt(this.probconfig.order)),this.probselected.forEach((function(r){t>0&&(r.timelimit=t),e>0&&(r.score=e),o>0&&(r.order=o)})),this.probconfig={timelimit:null,score:null,order:null}},hhmmss:function(t){return c.a.hhmmss(t)},testprob:function(t){},editprob:function(t){},deleteprob:function(t){this.examform.probs.splice(t.index,1)},pidExist:function(t,e){for(var i=0;i<t.length;i++)if(e===t[i].id)return!0;return!1},probRowSelected:function(t){this.probselected=t},quizRowSelected:function(t){this.quizselected=t},addProblem:function(t){for(var e={singlechoice:[30,2],fillin:[30,2],functest:[360,5],progtest:[600,10]},i=0;i<t.length;i++){if(!(c.a.findIdPos(this.examform.probs,t[i].id)>=0)){var o=this.$copyObject(t[i]);delete o._showDetails,o.type="progtest",o.tlimit=e[o.type][0],o.score=e[o.type][1],o.order||(o.order=100*this.tmap[o.type]),this.examform.probs.push(o)}}this.selectProblems=!1}}},f=(o(1049),o(55)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message)+"\n    ")]),t._v(" "),o("section",{staticClass:"mt-4"},[t._v("修改考試")]),t._v(" "),o("b-button",{attrs:{variant:"outline-success",to:"/admin/"+t.cid+"/exams"}},[t._v("取消")]),t._v(" "),o("b-button",{attrs:{variant:"outline-success"},on:{click:t.modifyExam}},[t._v("確定")]),t._v(" "),o("b-row",[o("b-col",{attrs:{md:"5"}},[o("b-form-group",{attrs:{"label-cols-md":"4",label:"Title","label-for":"examtitle"}},[o("b-form-input",{attrs:{id:"examtitle",type:"text"},model:{value:t.examform.name,callback:function(e){t.$set(t.examform,"name",e)},expression:"examform.name"}})],1)],1),t._v(" "),o("b-col",{attrs:{"offset-md":"1",md:"5"}},[o("b-form-group",{attrs:{"label-cols-md":"4",label:"限時 (分)","label-for":"examtime"}},[o("b-form-input",{attrs:{id:"examtime",type:"number"},model:{value:t.examform.tlimit,callback:function(e){t.$set(t.examform,"tlimit",e)},expression:"examform.tlimit"}})],1)],1)],1),t._v(" "),o("hr"),t._v(" "),o("p",[t._v(t._s(t.examinfo))]),t._v(" "),o("b-row",[o("b-col",{attrs:{md:"2"}},[o("b-form-input",{attrs:{id:"probtime",type:"text",placeholder:"TimeLimit"},model:{value:t.probconfig.timelimit,callback:function(e){t.$set(t.probconfig,"timelimit",e)},expression:"probconfig.timelimit"}})],1),t._v(" "),o("b-col",{attrs:{md:"2"}},[o("b-form-input",{attrs:{id:"probscore",type:"text",placeholder:"Prob Score"},model:{value:t.probconfig.score,callback:function(e){t.$set(t.probconfig,"score",e)},expression:"probconfig.score"}})],1),t._v(" "),o("b-col",{attrs:{md:"2"}},[o("b-form-input",{attrs:{id:"proborder",type:"text",placeholder:"Prob Order"},model:{value:t.probconfig.order,callback:function(e){t.$set(t.probconfig,"order",e)},expression:"probconfig.order"}})],1),t._v(" "),o("b-col",{attrs:{"offset-md":"2",md:"2"}},[o("b-button",{staticClass:"mt-0",attrs:{variant:"outline-success"},on:{click:t.setprobconfig}},[t._v("設定問題參數")])],1),t._v(" "),o("b-col",{attrs:{md:"2"}},[o("b-button",{staticClass:"mt-0",attrs:{variant:"outline-success"},on:{click:t.setdeforder}},[t._v("設定預設序數")])],1)],1),t._v(" "),o("b-table",{staticClass:"mt-3",attrs:{"show-empty":"",small:"",stacked:"md",selectable:!0,"select-mode":"range",items:t.examform.probs,fields:t.examfields,"sort-by":t.sorttype,"sort-compare":t.sortCompare},on:{"update:sortBy":function(e){t.sorttype=e},"update:sort-by":function(e){t.sorttype=e},"row-selected":t.probRowSelected},scopedSlots:t._u([{key:"cell(title)",fn:function(e){return[t._v("\n            "+t._s(t.$selectUserLocaleText(e.value))+"\n        ")]}},{key:"cell(actions)",fn:function(e){return[o("b-button-group",[o("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(o){return t.testprob(e.item)}}},[o("b-icon",{attrs:{icon:"check"}})],1),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(o){return t.deleteprob(e)}}},[o("b-icon",{attrs:{icon:"trash"}})],1)],1)]}}])}),t._v(" "),o("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){t.selectProblems=!0}}},[t._v("Select Problems")]),t._v(" "),o("b-modal",{attrs:{size:"xl"},model:{value:t.selectProblems,callback:function(e){t.selectProblems=e},expression:"selectProblems"}},[o("problem-selector",{staticClass:"mt-4",attrs:{oriProblems:t.problems,selProblems:t.examform.probs,selText:"Problem",OKText:"Set Exam Problems"},on:{OK:t.addProblem}})],1)],1)}),[],!1,null,"5d978f6a",null);e.default=component.exports;installComponents(component,{ProblemSelector:o(850).default})},843:function(t,e,o){"use strict";o(10),o(14),o(22),o(103),o(9),o(844),o(27),o(15);var r=o(227),n=o.n(r),l={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var o=Math.floor(e/60);return e%=60,"".concat(this.pad(o),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],o=Object.keys(t);return o.sort(),o.forEach((function(o){e.push(Object.assign({id:o},t[o]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var o=JSON.parse(JSON.stringify(t)),r=t.id;delete o.id,e[r]=o})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var o=0;o<t.length;o++)if(e==t[o].id)return o;return-1},encode:function(t,e){return new n.a(t).encrypt(e)},decode:function(t,e){return new n.a(t).decrypt(e)}};e.a=l},847:function(t,e,o){"use strict";o.r(e);o(156),o(49);var r=o(8),n=(o(854),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),t.showID&&t.pfields.push({key:"id",sortable:!0}),t.pfields.push({key:"title",sortable:!0,formatter:t.$selectUserLocaleText}),t.showTag&&t.pfields.push({key:"tags",sortable:!0}),(t.showArrow||t.showDetail||t.editProblem||t.copyProblem)&&t.pfields.push({key:"actions",label:"Actions"});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{moveUp:function(t){if(t>0){var e=this.$copyObject(this.problems[t]);this.problems.splice(t,1),this.problems.splice(t-1,0,e)}},moveDown:function(t){if(t<this.problems.length-1){var e=this.$copyObject(this.problems[t+1]);this.problems.splice(t+1,1),this.problems.splice(t,0,e)}},onRowSelected:function(t){this.$emit("rowSelected",t)},showProblem:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.toggleDetails();case 1:case"end":return e.stop()}}),e)})))()}}}),l=(o(855),o(55)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.showFilter?o("p",{staticClass:"p-0 mb-2"},[o("span",[t._v("Filter: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.pfilter,expression:"pfilter"}],domProps:{value:t.pfilter},on:{input:function(e){e.target.composing||(t.pfilter=e.target.value)}}})])]):t._e(),t._v(" "),o("b-table",{attrs:{bordered:"",items:t.problems,selectable:"","select-mode":"multi",fields:t.pfields,filter:t.pfilter},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([t.showDetail||t.editProblem||t.copyProblem||t.showArrow?{key:"cell(actions)",fn:function(e){return[t.showDetail?o("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(o){return t.showProblem(e)}}},[e.detailsShowing?o("b-icon",{attrs:{icon:"eye-slash"}}):o("b-icon",{attrs:{icon:"eye"}})],1):t._e(),t._v(" "),t.editProblem?o("b-link",{staticClass:"mr-1",on:{click:function(o){return t.editProblem(e.item)}}},[o("b-icon",{attrs:{icon:"pen"}})],1):t._e(),t._v(" "),t.copyProblem?o("b-link",{staticClass:"mr-1",on:{click:function(o){return t.copyProblem(e.item)}}},[o("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.showArrow?o("b-link",{staticClass:"mr-1",on:{click:function(o){return t.moveUp(e.index)}}},[o("b-icon",{attrs:{icon:"arrow-up"}})],1):t._e(),t._v(" "),t.showArrow?o("b-link",{staticClass:"mr-1",on:{click:function(o){return t.moveDown(e.index)}}},[o("b-icon",{attrs:{icon:"arrow-down"}})],1):t._e()]}}:null,t.showDetail?{key:"row-details",fn:function(e){return[o("b-card",[o("p",[t._v(t._s(e.item.id)+": "+t._s(t.$selectUserLocaleText(e.item.title)))]),t._v(" "),o("p",{domProps:{innerHTML:t._s(t.$md.render(t.$selectUserLocaleText(e.item.description)))}}),t._v(" "),o("p",[t._v("TAGS: "+t._s(e.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"2398be4f",null);e.default=component.exports},848:function(t,e,o){var content=o(856);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("0d16a966",content,!0,{sourceMap:!1})},849:function(t,e,o){var content=o(858);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("56c34f47",content,!0,{sourceMap:!1})},850:function(t,e,o){"use strict";o.r(e);o(156);var r=o(847),n=o(843),l={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:r.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var t=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)t.push(this.selProblems[i]);for(var e=[],o=0;o<this.oriProblems.length;o++){var r=this.oriProblems[o];n.a.findIdPos(t,r.id)<0&&e.push(r)}this.leftProblems=e,this.rightProblems=t},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var t=this.leftSelected[i];this.rightProblems.push(t);var e=n.a.findIdPos(this.leftProblems,t.id);e>=0&&this.leftProblems.splice(e,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var t=this.rightSelected[i];this.leftProblems.push(t);var e=n.a.findIdPos(this.selProblems,t.id);e>=0&&this.rightProblems.splice(e,1)}}},watch:{oriProblems:function(t){this.initSelection()},selProblems:function(t){this.initSelection()}}},c=(o(857),o(55)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"d-flex justify-content-start align-items-top"},[o("problem-table",{attrs:{problems:t.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(e){return t.leftSelected=e}}}),t._v(" "),o("div",{staticClass:"mx-5"},[o("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.selectItems}},[o("b-icon",{attrs:{icon:"arrow-right"}})],1),t._v(" "),o("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.deSelectItems}},[o("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),t._v(" "),o("div",[o("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[o("span",{staticClass:"mr-3"},[t._v(t._s(t.selText))]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.done}},[t._v(t._s(t.OKText))])],1),t._v(" "),o("problem-table",{attrs:{problems:t.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(e){return t.rightSelected=e}}})],1)],1)])}),[],!1,null,"c90387ec",null);e.default=component.exports;installComponents(component,{ProblemTable:o(847).default})},855:function(t,e,o){"use strict";o(848)},856:function(t,e,o){(e=o(60)(!1)).push([t.i,"[data-v-2398be4f] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},857:function(t,e,o){"use strict";o(849)},858:function(t,e,o){(e=o(60)(!1)).push([t.i,"[data-v-c90387ec] .itemList{margin:12px 0}.container-fluid[data-v-c90387ec]{margin-top:30px}.pdescription[data-v-c90387ec]{width:100%;height:300px}.titleLabel[data-v-c90387ec]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-c90387ec] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},896:function(t,e,o){var content=o(1050);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("4a1a4385",content,!0,{sourceMap:!1})}}]);