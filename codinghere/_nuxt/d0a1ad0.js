(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1112:function(t,e,r){var content=r(1318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("47124910",content,!0,{sourceMap:!1})},1317:function(t,e,r){"use strict";r(1112)},1318:function(t,e,r){(e=r(56)(!1)).push([t.i,'h1[data-v-ded0a4a0]{color:#00f;font-family:"Arial";font-size:120%;margin:24px 0;padding-bottom:3px;border-bottom:1px solid #000}',""]),t.exports=e},1406:function(t,e,r){"use strict";r.r(e);r(18),r(156),r(86),r(49);var o=r(7),n=r(26),c=r(860),l=r(855),m={components:{ProblemSelector:c.default},data:function(){return{course:{},curPSet:{},curPSetID:null,problems:[],cunits:[],showUnitUpdate:!1,unitEditMode:!1,selUnitProb:!1,unitIdx:null,unitForm:{name:"",startDate:"",endDate:"",probs:[],compilers:[]}}},computed:{cid:function(){return this.$route.params.id}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCourse",t.cid);case 2:return t.course=e.sent,e.next=5,t.$store.dispatch("getCourse",t.cid);case 5:return t.course=e.sent,r=t.course.problemSets,1===(o=Object.keys(r)).length&&(t.curPSetID=o[0],t.curPSet=r[t.curPSetID]),t.updateCunits(t.course),e.next=12,n.d.collection("problems").doc(t.curPSetID).get();case 12:(c=e.sent).exists&&(m=c.data().problems,t.problems=l.a.obj2arr(m));case 14:case"end":return e.stop()}}),e)})))()},methods:{showCompilers:function(t){return t?t.join(" / "):"c / cpp / python"},selectDone:function(t){this.unitForm.probs=t,this.selUnitProb=!1},updateCunits:function(t){t.units?this.cunits=this.$copyObject(t.units):this.cunits=[]},updateUnit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i,r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=0;i<t.unitForm.probs.length;i++)delete t.unitForm.probs[i]._showDetails,delete t.unitForm.probs[i].tags;r=t.$copyObject(t.unitForm),o=t.course.units?t.$copyObject(t.course.units):[],t.unitEditMode?o.splice(t.unitIdx,1,r):o.push(r),n={units:o,updated:l.a.getNow()},t.$store.dispatch("updateCourse",{id:t.cid,value:n}),t.cunits=o,t.showUnitUpdate=!1;case 8:case"end":return e.stop()}}),e)})))()},editUnit:function(t){this.unitEditMode=!0,this.unitForm=this.$copyObject(this.cunits[t]),this.unitForm.compilers||(this.unitForm.compilers=["c","cpp","py"]),this.unitIdx=t,this.showUnitUpdate=!0},createUnit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.unitEditMode=!1,t.showUnitUpdate=!0,t.course.compilers?t.unitForm.compilers=t.course.compilers:t.unitForm.compilers=["c","cpp","py"];case 3:case"end":return e.stop()}}),e)})))()}},watch:{course:function(t){this.updateCunits(t)}}},d=(r(1317),r(55)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.course.name))]),t._v(" "),t.course.units&&t.course.units.length>0?r("div",t._l(t.cunits,(function(e,o){return r("p",{key:e+o},[t._v("\n            "+t._s(o+1)+". "+t._s(e.name)+" : "+t._s(e.startDate)+"-"+t._s(e.endDate)+" "),r("span",{staticClass:"ml-3"},[t._v("("+t._s(t.showCompilers(e.compilers))+")")]),t._v(" "),r("b-link",{staticClass:"ml-3 text-info",on:{click:function(e){return t.editUnit(o)}}},[t._v("Edit")]),r("br"),t._v(" "),t._l(e.probs,(function(e,o){return r("span",{key:e.id,staticClass:"ml-3 text-primary"},[t._v("\n                ("+t._s(o+1)+")\n                "+t._s(t.$selectUserLocaleText(e.title))+"\n            ")])}))],2)})),0):r("div",[t._v("No any units.")]),t._v(" "),r("div",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[r("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"success"},on:{click:t.createUnit}},[t._v("\n            New\n        ")])],1),t._v(" "),t.showUnitUpdate?r("div",{staticClass:"mt-4"},[r("b-input",{staticClass:"mb-3",attrs:{placeholder:"Name"},model:{value:t.unitForm.name,callback:function(e){t.$set(t.unitForm,"name",e)},expression:"unitForm.name"}}),t._v(" "),r("b-input",{staticClass:"mb-3",attrs:{placeholder:"Start Date"},model:{value:t.unitForm.startDate,callback:function(e){t.$set(t.unitForm,"startDate",e)},expression:"unitForm.startDate"}}),t._v(" "),r("b-input",{staticClass:"mb-3",attrs:{placeholder:"End Date"},model:{value:t.unitForm.endDate,callback:function(e){t.$set(t.unitForm,"endDate",e)},expression:"unitForm.endDate"}}),t._v(" "),r("div",{staticClass:"col"},[r("span",{staticClass:"clabel"},[t._v("Compilers")]),t._v(" "),r("div",{staticClass:"ml-3 d-inline-block compiler"},[r("div",{staticClass:"d-inline-block compiler"},[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.unitForm.compilers,expression:"unitForm.compilers"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"compiler_c",value:"c"},domProps:{checked:Array.isArray(t.unitForm.compilers)?t._i(t.unitForm.compilers,"c")>-1:t.unitForm.compilers},on:{change:function(e){var r=t.unitForm.compilers,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"c");o.checked?c<0&&t.$set(t.unitForm,"compilers",r.concat(["c"])):c>-1&&t.$set(t.unitForm,"compilers",r.slice(0,c).concat(r.slice(c+1)))}else t.$set(t.unitForm,"compilers",n)}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"compiler_c"}},[t._v("C")])])])]),t._v(" "),r("div",{staticClass:"ml-3 d-inline-block compiler"},[r("div",{staticClass:"d-inline-block compiler"},[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.unitForm.compilers,expression:"unitForm.compilers"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"compiler_cpp",value:"cpp"},domProps:{checked:Array.isArray(t.unitForm.compilers)?t._i(t.unitForm.compilers,"cpp")>-1:t.unitForm.compilers},on:{change:function(e){var r=t.unitForm.compilers,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"cpp");o.checked?c<0&&t.$set(t.unitForm,"compilers",r.concat(["cpp"])):c>-1&&t.$set(t.unitForm,"compilers",r.slice(0,c).concat(r.slice(c+1)))}else t.$set(t.unitForm,"compilers",n)}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"compiler_cpp"}},[t._v("C++")])])])]),t._v(" "),r("div",{staticClass:"ml-3 d-inline-block compiler"},[r("div",{staticClass:"d-inline-block compiler"},[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.unitForm.compilers,expression:"unitForm.compilers"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"compiler_py",value:"py"},domProps:{checked:Array.isArray(t.unitForm.compilers)?t._i(t.unitForm.compilers,"py")>-1:t.unitForm.compilers},on:{change:function(e){var r=t.unitForm.compilers,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"py");o.checked?c<0&&t.$set(t.unitForm,"compilers",r.concat(["py"])):c>-1&&t.$set(t.unitForm,"compilers",r.slice(0,c).concat(r.slice(c+1)))}else t.$set(t.unitForm,"compilers",n)}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"compiler_py"}},[t._v("Python")])])])])]),t._v(" "),r("p",{staticClass:"mt-3 mb-3"},t._l(t.unitForm.probs,(function(e,o){return r("span",{key:"cur"+e.id,staticClass:"ml-3 text-primary"},[t._v("\n                ("+t._s(o+1)+") "+t._s(t.$selectUserLocaleText(e.title))+"\n            ")])})),0),t._v(" "),r("p",{attrs:{align:"center"}},[r("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){t.showUnitUpdate=!1}}},[t._v("Cancel")]),t._v(" "),r("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:function(e){t.selUnitProb=!0}}},[t._v("Set Problems")]),t._v(" "),r("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:t.updateUnit}},[t._v("Update")])],1),t._v(" "),r("b-modal",{attrs:{size:"xl",title:"Select Problems","hide-footer":""},model:{value:t.selUnitProb,callback:function(e){t.selUnitProb=e},expression:"selUnitProb"}},[r("problem-selector",{staticClass:"mt-4",attrs:{oriProblems:t.problems,selProblems:t.unitForm.probs,selText:t.unitForm.name,OKText:"Set Unit Problems"},on:{OK:t.selectDone}})],1)],1):t._e()])}),[],!1,null,"ded0a4a0",null);e.default=component.exports;installComponents(component,{ProblemSelector:r(860).default})},855:function(t,e,r){"use strict";r(10),r(14),r(22),r(86),r(9),r(856),r(29),r(15);var o=r(228),n=r.n(o),c={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var r=Math.floor(e/60);return e%=60,"".concat(this.pad(r),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],r=Object.keys(t);return r.sort(),r.forEach((function(r){e.push(Object.assign({id:r},t[r]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var r=JSON.parse(JSON.stringify(t)),o=t.id;delete r.id,e[o]=r})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var r=0;r<t.length;r++)if(e==t[r].id)return r;return-1},encode:function(t,e){return new n.a(t).encrypt(e)},decode:function(t,e){return new n.a(t).decrypt(e)}};e.a=c},856:function(t,e,r){"use strict";var o=r(8),n=r(857).start;o({target:"String",proto:!0,forced:r(858)},{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},857:function(t,e,r){var o=r(50),n=r(229),c=r(52),l=Math.ceil,m=function(t){return function(e,r,m){var d,f,h=String(c(e)),v=h.length,_=void 0===m?" ":String(m),w=o(r);return w<=v||""==_?h:(d=w-v,(f=n.call(_,l(d/_.length))).length>d&&(f=f.slice(0,d)),t?h+f:f+h)}};t.exports={start:m(!1),end:m(!0)}},858:function(t,e,r){var o=r(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)},859:function(t,e,r){"use strict";r.r(e);r(156),r(49);var o=r(7),n=(r(867),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),t.showID&&t.pfields.push({key:"id",sortable:!0}),t.pfields.push({key:"title",sortable:!0,formatter:t.$selectUserLocaleText}),t.showTag&&t.pfields.push({key:"tags",sortable:!0}),(t.showArrow||t.showDetail||t.editProblem||t.copyProblem)&&t.pfields.push({key:"actions",label:"Actions"});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{moveUp:function(t){if(t>0){var e=this.$copyObject(this.problems[t]);this.problems.splice(t,1),this.problems.splice(t-1,0,e)}},moveDown:function(t){if(t<this.problems.length-1){var e=this.$copyObject(this.problems[t+1]);this.problems.splice(t+1,1),this.problems.splice(t,0,e)}},onRowSelected:function(t){this.$emit("rowSelected",t)},showProblem:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.toggleDetails();case 1:case"end":return e.stop()}}),e)})))()}}}),c=(r(870),r(55)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.showFilter?r("p",{staticClass:"p-0 mb-2"},[r("span",[t._v("Filter: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pfilter,expression:"pfilter"}],domProps:{value:t.pfilter},on:{input:function(e){e.target.composing||(t.pfilter=e.target.value)}}})])]):t._e(),t._v(" "),r("b-table",{attrs:{bordered:"",items:t.problems,selectable:"","select-mode":"multi",fields:t.pfields,filter:t.pfilter},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([t.showDetail||t.editProblem||t.copyProblem||t.showArrow?{key:"cell(actions)",fn:function(e){return[t.showDetail?r("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return t.showProblem(e)}}},[e.detailsShowing?r("b-icon",{attrs:{icon:"eye-slash"}}):r("b-icon",{attrs:{icon:"eye"}})],1):t._e(),t._v(" "),t.editProblem?r("b-link",{staticClass:"mr-1",on:{click:function(r){return t.editProblem(e.item)}}},[r("b-icon",{attrs:{icon:"pen"}})],1):t._e(),t._v(" "),t.copyProblem?r("b-link",{staticClass:"mr-1",on:{click:function(r){return t.copyProblem(e.item)}}},[r("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.showArrow?r("b-link",{staticClass:"mr-1",on:{click:function(r){return t.moveUp(e.index)}}},[r("b-icon",{attrs:{icon:"arrow-up"}})],1):t._e(),t._v(" "),t.showArrow?r("b-link",{staticClass:"mr-1",on:{click:function(r){return t.moveDown(e.index)}}},[r("b-icon",{attrs:{icon:"arrow-down"}})],1):t._e()]}}:null,t.showDetail?{key:"row-details",fn:function(e){return[r("b-card",[r("p",[t._v(t._s(e.item.id)+": "+t._s(t.$selectUserLocaleText(e.item.title)))]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.$md.render(t.$selectUserLocaleText(e.item.description)))}}),t._v(" "),r("p",[t._v("TAGS: "+t._s(e.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"2398be4f",null);e.default=component.exports},860:function(t,e,r){"use strict";r.r(e);r(156);var o=r(859),n=r(855),c={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:o.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var t=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)t.push(this.selProblems[i]);for(var e=[],r=0;r<this.oriProblems.length;r++){var o=this.oriProblems[r];n.a.findIdPos(t,o.id)<0&&e.push(o)}this.leftProblems=e,this.rightProblems=t},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var t=this.leftSelected[i];this.rightProblems.push(t);var e=n.a.findIdPos(this.leftProblems,t.id);e>=0&&this.leftProblems.splice(e,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var t=this.rightSelected[i];this.leftProblems.push(t);var e=n.a.findIdPos(this.selProblems,t.id);e>=0&&this.rightProblems.splice(e,1)}}},watch:{oriProblems:function(t){this.initSelection()},selProblems:function(t){this.initSelection()}}},l=(r(872),r(55)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex justify-content-start align-items-top"},[r("problem-table",{attrs:{problems:t.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(e){return t.leftSelected=e}}}),t._v(" "),r("div",{staticClass:"mx-5"},[r("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.selectItems}},[r("b-icon",{attrs:{icon:"arrow-right"}})],1),t._v(" "),r("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.deSelectItems}},[r("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),t._v(" "),r("div",[r("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[r("span",{staticClass:"mr-3"},[t._v(t._s(t.selText))]),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.done}},[t._v(t._s(t.OKText))])],1),t._v(" "),r("problem-table",{attrs:{problems:t.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(e){return t.rightSelected=e}}})],1)],1)])}),[],!1,null,"c90387ec",null);e.default=component.exports;installComponents(component,{ProblemTable:r(859).default})},862:function(t,e,r){var content=r(871);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("0d16a966",content,!0,{sourceMap:!1})},863:function(t,e,r){var content=r(873);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("56c34f47",content,!0,{sourceMap:!1})},870:function(t,e,r){"use strict";r(862)},871:function(t,e,r){(e=r(56)(!1)).push([t.i,"[data-v-2398be4f] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},872:function(t,e,r){"use strict";r(863)},873:function(t,e,r){(e=r(56)(!1)).push([t.i,"[data-v-c90387ec] .itemList{margin:12px 0}.container-fluid[data-v-c90387ec]{margin-top:30px}.pdescription[data-v-c90387ec]{width:100%;height:300px}.titleLabel[data-v-c90387ec]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-c90387ec] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e}}]);