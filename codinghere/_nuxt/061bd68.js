(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1047:function(t,e,r){"use strict";r(895)},1048:function(t,e,r){(e=r(60)(!1)).push([t.i,".card[data-v-19077f27]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-19077f27]{margin-bottom:24px}.btn[data-v-19077f27]{min-width:10%;margin:12px auto 24px}",""]),t.exports=e},1118:function(t,e,r){"use strict";r.r(e);r(10),r(14),r(12),r(156),r(46),r(15),r(49);var o=r(8),n=r(850),l=r(32),c=r(843),m={components:{ProblemSelector:n.default},data:function(){return{infoAlert:!1,info:{title:"",message:""},selectProblems:!1,problems:[],examform:{title:null,tlimit:60,totalscore:0,probs:[]},examprobs:[],examfields:[{key:"type",label:"Type",sortable:!0,sortDirection:"desc"},{key:"title",label:"Title",sortable:!1},{key:"question",label:"Question",sortable:!1},{key:"tlimit",label:"Time Limit",sortable:!0},{key:"score",label:"Score",sortable:!0},{key:"actions",label:"Action",class:"text-center"}],quizselected:[],probselected:[],probconfig:{tlimit:null,score:null},sorttype:"title",tmap:{singlechoice:0,fillin:1,functest:2,progtest:3}}},computed:{cid:function(){return this.$route.params.course},examinfo:function(){var t=0,e=0;this.examprobs.forEach((function(r){t+=r.score,e+=r.tlimit}));var r="Total Score = ".concat(t,", Prob Times = ").concat(this.mmss(e));return r+=", Total Times = ".concat(this.examform.tlimit,":00")}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.collection("problems").doc("BASE").get();case 2:(r=e.sent).exists&&(o=r.data(),t.problems=c.a.obj2arr(o));case 4:case"end":return e.stop()}}),e)})))()},methods:{examData:function(){var t={name:this.examform.title,tlimit:this.examform.tlimit},e=0;this.examprobs.forEach((function(t){return e+=t.score})),t.tscore=e;var r=Object.assign({},t);return t.probs=this.examprobs.map((function(t){return{title:t.title,tlimit:t.tlimit,score:t.score,type:t.type}})),r.probs=this.$copyObject(this.examprobs),{short:t,full:r}},addExam:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.examform.title&&""!=t.examform.title.trim()&&t.examprobs&&0!=t.examprobs.length){e.next=3;break}return alert("Exam not set correctly."),e.abrupt("return");case 3:return r=t.examData(),n=l.d.collection("courses").doc(t.cid),m=l.d.collection("exams").doc(),f=null,e.prev=7,e.next=10,l.d.runTransaction(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get(n);case 2:return o=t.sent,t.next=5,e.set(m,r.full);case 5:return(l=r.short).id=m.id,(f=o.data().exams||[]).push(l),t.next=11,e.set(n,{exams:f,updated:c.a.getNow()},{merge:!0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:t.$store.commit("updateCourse",{id:t.cid,value:{exams:f}}),t.infoAlert=!0,t.info={title:"Exam",message:"Add Exam OK!"},e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[7,15]])})))()},sortCompare:function(t,e,r,o,n,l,c){if("type"===r){var a=this.tmap[t[r]],b=this.tmap[e[r]];return a<b?-1:a>b?1:0}var m=t[r],f=e[r];return"number"==typeof m&&"number"==typeof f?m<f?-1:m>f?1:0:toString(m).localeCompare(toString(f),c,l)},setprobconfig:function(){var t=0,e=0;this.probconfig.tlimit&&""!==this.probconfig.tlimit&&(t=parseInt(this.probconfig.tlimit)),this.probconfig.score&&""!==this.probconfig.score&&(e=parseInt(this.probconfig.score)),this.probselected.forEach((function(r){t>0&&(r.tlimit=t),e>0&&(r.score=e)})),this.probconfig={tlimit:null,score:null}},mmss:function(t){return c.a.mmss(t)},deleteprob:function(t){this.examprobs.splice(t.index,1)},pidExist:function(t,e){for(var i=0;i<t.length;i++)if(e===t[i].id)return!0;return!1},probRowSelected:function(t){this.probselected=t},addProblem:function(t){for(var e={singlechoice:[30,2],fillin:[30,2],functest:[360,5],progtest:[600,10]},i=0;i<t.length;i++){var r=this.$copyObject(t[i]);delete r._showDetails,r.type="progtest",r.tlimit=e[r.type][0],r.score=e[r.type][1],r.order||(r.order=100*this.tmap[r.type]),this.examprobs.push(r)}this.selectProblems=!1}}},f=(r(1047),r(55)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message)+"\n    ")]),t._v(" "),r("section",{staticClass:"mt-4"},[t._v("新增考試")]),t._v(" "),r("b-button",{attrs:{variant:"outline-success",to:"/admin/"+t.cid+"/exams"}},[t._v("取消")]),t._v(" "),r("b-button",{attrs:{variant:"outline-success"},on:{click:t.addExam}},[t._v("確定")]),t._v(" "),r("b-row",[r("b-col",{attrs:{md:"5"}},[r("b-form-group",{attrs:{"label-cols-md":"4",label:"Title","label-for":"examtitle"}},[r("b-form-input",{attrs:{id:"examtitle",type:"text"},model:{value:t.examform.title,callback:function(e){t.$set(t.examform,"title",e)},expression:"examform.title"}})],1)],1),t._v(" "),r("b-col",{attrs:{"offset-md":"1",md:"5"}},[r("b-form-group",{attrs:{"label-cols-md":"4",label:"限時 (分)","label-for":"examtime"}},[r("b-form-input",{attrs:{id:"examtime",type:"number"},model:{value:t.examform.tlimit,callback:function(e){t.$set(t.examform,"tlimit",e)},expression:"examform.tlimit"}})],1)],1)],1),t._v(" "),r("hr"),t._v(" "),r("p",[t._v(t._s(t.examinfo))]),t._v(" "),r("b-form",{attrs:{inline:""}},[r("b-form-input",{attrs:{id:"probtime",type:"text",placeholder:"Prob Time Limit"},model:{value:t.probconfig.tlimit,callback:function(e){t.$set(t.probconfig,"tlimit",e)},expression:"probconfig.tlimit"}}),t._v(" "),r("b-form-input",{attrs:{id:"probscore",type:"text",placeholder:"Prob Score"},model:{value:t.probconfig.score,callback:function(e){t.$set(t.probconfig,"score",e)},expression:"probconfig.score"}}),t._v(" "),r("b-button",{attrs:{variant:"outline-success"},on:{click:t.setprobconfig}},[t._v("設定問題參數")])],1),t._v(" "),r("b-table",{staticClass:"mt-3",attrs:{"show-empty":"",small:"",stacked:"md",selectable:!0,"select-mode":"range",items:t.examprobs,fields:t.examfields,"sort-by":t.sorttype,"sort-compare":t.sortCompare},on:{"update:sortBy":function(e){t.sorttype=e},"update:sort-by":function(e){t.sorttype=e},"row-selected":t.probRowSelected},scopedSlots:t._u([{key:"cell(title)",fn:function(e){return[t._v("\n            "+t._s(t.$selectUserLocaleText(e.value))+"\n        ")]}},{key:"cell(actions)",fn:function(e){return[r("b-button-group",[r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return t.testprob(e.item)}}},[r("b-icon",{attrs:{icon:"check"}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return t.deleteprob(e)}}},[r("b-icon",{attrs:{icon:"trash"}})],1)],1)]}}])}),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){t.selectProblems=!0}}},[t._v("Select Problems")]),t._v(" "),r("b-modal",{attrs:{size:"xl"},model:{value:t.selectProblems,callback:function(e){t.selectProblems=e},expression:"selectProblems"}},[r("problem-selector",{staticClass:"mt-4",attrs:{oriProblems:t.problems,selProblems:t.quizselected,selText:"添加到考試",OKText:"Set Exam Problems"},on:{OK:t.addProblem}})],1)],1)}),[],!1,null,"19077f27",null);e.default=component.exports;installComponents(component,{ProblemSelector:r(850).default})},843:function(t,e,r){"use strict";r(10),r(14),r(22),r(103),r(9),r(844),r(27),r(15);var o=r(227),n=r.n(o),l={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var r=Math.floor(e/60);return e%=60,"".concat(this.pad(r),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],r=Object.keys(t);return r.sort(),r.forEach((function(r){e.push(Object.assign({id:r},t[r]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var r=JSON.parse(JSON.stringify(t)),o=t.id;delete r.id,e[o]=r})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var r=0;r<t.length;r++)if(e==t[r].id)return r;return-1},encode:function(t,e){return new n.a(t).encrypt(e)},decode:function(t,e){return new n.a(t).decrypt(e)}};e.a=l},847:function(t,e,r){"use strict";r.r(e);r(156),r(49);var o=r(8),n=(r(854),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),t.showID&&t.pfields.push({key:"id",sortable:!0}),t.pfields.push({key:"title",sortable:!0,formatter:t.$selectUserLocaleText}),t.showTag&&t.pfields.push({key:"tags",sortable:!0}),(t.showArrow||t.showDetail||t.editProblem||t.copyProblem)&&t.pfields.push({key:"actions",label:"Actions"});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{moveUp:function(t){if(t>0){var e=this.$copyObject(this.problems[t]);this.problems.splice(t,1),this.problems.splice(t-1,0,e)}},moveDown:function(t){if(t<this.problems.length-1){var e=this.$copyObject(this.problems[t+1]);this.problems.splice(t+1,1),this.problems.splice(t,0,e)}},onRowSelected:function(t){this.$emit("rowSelected",t)},showProblem:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.toggleDetails();case 1:case"end":return e.stop()}}),e)})))()}}}),l=(r(855),r(55)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.showFilter?r("p",{staticClass:"p-0 mb-2"},[r("span",[t._v("Filter: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pfilter,expression:"pfilter"}],domProps:{value:t.pfilter},on:{input:function(e){e.target.composing||(t.pfilter=e.target.value)}}})])]):t._e(),t._v(" "),r("b-table",{attrs:{bordered:"",items:t.problems,selectable:"","select-mode":"multi",fields:t.pfields,filter:t.pfilter},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([t.showDetail||t.editProblem||t.copyProblem||t.showArrow?{key:"cell(actions)",fn:function(e){return[t.showDetail?r("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return t.showProblem(e)}}},[e.detailsShowing?r("b-icon",{attrs:{icon:"eye-slash"}}):r("b-icon",{attrs:{icon:"eye"}})],1):t._e(),t._v(" "),t.editProblem?r("b-link",{staticClass:"mr-1",on:{click:function(r){return t.editProblem(e.item)}}},[r("b-icon",{attrs:{icon:"pen"}})],1):t._e(),t._v(" "),t.copyProblem?r("b-link",{staticClass:"mr-1",on:{click:function(r){return t.copyProblem(e.item)}}},[r("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.showArrow?r("b-link",{staticClass:"mr-1",on:{click:function(r){return t.moveUp(e.index)}}},[r("b-icon",{attrs:{icon:"arrow-up"}})],1):t._e(),t._v(" "),t.showArrow?r("b-link",{staticClass:"mr-1",on:{click:function(r){return t.moveDown(e.index)}}},[r("b-icon",{attrs:{icon:"arrow-down"}})],1):t._e()]}}:null,t.showDetail?{key:"row-details",fn:function(e){return[r("b-card",[r("p",[t._v(t._s(e.item.id)+": "+t._s(t.$selectUserLocaleText(e.item.title)))]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$md.render(t.$selectUserLocaleText(e.item.description)))}}),t._v(" "),r("p",[t._v("TAGS: "+t._s(e.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"2398be4f",null);e.default=component.exports},848:function(t,e,r){var content=r(856);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("0d16a966",content,!0,{sourceMap:!1})},849:function(t,e,r){var content=r(858);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("56c34f47",content,!0,{sourceMap:!1})},850:function(t,e,r){"use strict";r.r(e);r(156);var o=r(847),n=r(843),l={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:o.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var t=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)t.push(this.selProblems[i]);for(var e=[],r=0;r<this.oriProblems.length;r++){var o=this.oriProblems[r];n.a.findIdPos(t,o.id)<0&&e.push(o)}this.leftProblems=e,this.rightProblems=t},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var t=this.leftSelected[i];this.rightProblems.push(t);var e=n.a.findIdPos(this.leftProblems,t.id);e>=0&&this.leftProblems.splice(e,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var t=this.rightSelected[i];this.leftProblems.push(t);var e=n.a.findIdPos(this.selProblems,t.id);e>=0&&this.rightProblems.splice(e,1)}}},watch:{oriProblems:function(t){this.initSelection()},selProblems:function(t){this.initSelection()}}},c=(r(857),r(55)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex justify-content-start align-items-top"},[r("problem-table",{attrs:{problems:t.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(e){return t.leftSelected=e}}}),t._v(" "),r("div",{staticClass:"mx-5"},[r("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.selectItems}},[r("b-icon",{attrs:{icon:"arrow-right"}})],1),t._v(" "),r("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.deSelectItems}},[r("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),t._v(" "),r("div",[r("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[r("span",{staticClass:"mr-3"},[t._v(t._s(t.selText))]),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.done}},[t._v(t._s(t.OKText))])],1),t._v(" "),r("problem-table",{attrs:{problems:t.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(e){return t.rightSelected=e}}})],1)],1)])}),[],!1,null,"c90387ec",null);e.default=component.exports;installComponents(component,{ProblemTable:r(847).default})},855:function(t,e,r){"use strict";r(848)},856:function(t,e,r){(e=r(60)(!1)).push([t.i,"[data-v-2398be4f] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},857:function(t,e,r){"use strict";r(849)},858:function(t,e,r){(e=r(60)(!1)).push([t.i,"[data-v-c90387ec] .itemList{margin:12px 0}.container-fluid[data-v-c90387ec]{margin-top:30px}.pdescription[data-v-c90387ec]{width:100%;height:300px}.titleLabel[data-v-c90387ec]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-c90387ec] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},895:function(t,e,r){var content=r(1048);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("24c3831d",content,!0,{sourceMap:!1})}}]);