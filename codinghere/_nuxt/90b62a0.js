(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1293:function(t,e,n){"use strict";n.r(e);n(156),n(49);var r=n(8),o=n(32),l=n(851),c=n(844),d={props:{course:Object},components:{ProblemSelector:l.default},data:function(){return{problems:[],cunits:[],showUnitUpdate:!1,unitEditMode:!1,selUnitProb:!1,unitIdx:null,unitForm:{name:"",startDate:"",endDate:"",probs:[]}}},computed:{cid:function(){return this.$route.params.course}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.updateCunits(t.course),e.next=3,o.d.collection("problems").doc("BASE").get();case 3:(n=e.sent).exists&&(r=n.data(),t.problems=c.a.obj2arr(r));case 5:case"end":return e.stop()}}),e)})))()},methods:{selectDone:function(t){this.unitForm.probs=t,this.selUnitProb=!1},updateCunits:function(t){t.units?this.cunits=this.$copyObject(t.units):this.cunits=[]},updateUnit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var i,n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=0;i<t.unitForm.probs.length;i++)delete t.unitForm.probs[i]._showDetails,delete t.unitForm.probs[i].tags;n=t.$copyObject(t.unitForm),r=t.course.units?t.$copyObject(t.course.units):[],t.unitEditMode?r.splice(t.unitIdx,1,n):r.push(n),o={units:r,updated:c.a.getNow()},t.$store.dispatch("updateCourse",{id:t.cid,value:o}),t.cunits=r,t.showUnitUpdate=!1;case 8:case"end":return e.stop()}}),e)})))()},editUnit:function(t){this.unitEditMode=!0,this.unitForm=this.$copyObject(this.cunits[t]),this.unitIdx=t,this.showUnitUpdate=!0},createUnit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.unitEditMode=!1,0!=t.problems.length){e.next=7;break}return e.next=4,o.d.collection("problems").doc("BASE").get();case 4:n=e.sent,r=n.data(),n.exists&&(t.problems=c.a.obj2arr(r));case 7:t.showUnitUpdate=!0;case 8:case"end":return e.stop()}}),e)})))()}},watch:{course:function(t){this.updateCunits(t)}}},m=n(55),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.course.units&&t.course.units.length>0?n("div",t._l(t.cunits,(function(e,r){return n("p",{key:e+r},[t._v("\n            "+t._s(r+1)+". "+t._s(e.name)+" : "+t._s(e.startDate)+"-"+t._s(e.endDate)+"\n            "),n("b-link",{staticClass:"ml-3 text-info",on:{click:function(e){return t.editUnit(r)}}},[t._v("Edit")]),n("br"),t._v(" "),t._l(e.probs,(function(e,r){return n("span",{key:e.id,staticClass:"ml-3 text-primary"},[t._v("\n                ("+t._s(r+1)+")\n                "+t._s(t.$selectUserLocaleText(e.title))+"\n            ")])}))],2)})),0):n("div",[t._v("No any units.")]),t._v(" "),n("div",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[n("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"success"},on:{click:t.createUnit}},[t._v("\n            New\n        ")])],1),t._v(" "),t.showUnitUpdate?n("div",{staticClass:"mt-4"},[n("b-input",{staticClass:"mb-3",attrs:{placeholder:"Name"},model:{value:t.unitForm.name,callback:function(e){t.$set(t.unitForm,"name",e)},expression:"unitForm.name"}}),t._v(" "),n("b-input",{staticClass:"mb-3",attrs:{placeholder:"Start Date"},model:{value:t.unitForm.startDate,callback:function(e){t.$set(t.unitForm,"startDate",e)},expression:"unitForm.startDate"}}),t._v(" "),n("b-input",{staticClass:"mb-3",attrs:{placeholder:"End Date"},model:{value:t.unitForm.endDate,callback:function(e){t.$set(t.unitForm,"endDate",e)},expression:"unitForm.endDate"}}),t._v(" "),n("item-list",{attrs:{items:t.unitForm.probs,name:"title"}}),t._v(" "),n("p",{attrs:{align:"center"}},[n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){t.showUnitUpdate=!1}}},[t._v("Cancel")]),t._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:function(e){t.selUnitProb=!0}}},[t._v("Set Problems")]),t._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:t.updateUnit}},[t._v("Update")])],1),t._v(" "),n("b-modal",{attrs:{size:"xl",title:"Select Problems","hide-footer":""},model:{value:t.selUnitProb,callback:function(e){t.selUnitProb=e},expression:"selUnitProb"}},[n("problem-selector",{staticClass:"mt-4",attrs:{oriProblems:t.problems,selProblems:t.unitForm.probs,selText:t.unitForm.name,OKText:"Set Unit Problems"},on:{OK:t.selectDone}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemList:n(858).default,ProblemSelector:n(851).default})},844:function(t,e,n){"use strict";n(10),n(14),n(22),n(103),n(9),n(845),n(27),n(15);var r=n(227),o=n.n(r),l={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=l},845:function(t,e,n){"use strict";var r=n(7),o=n(846).start;r({target:"String",proto:!0,forced:n(847)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},846:function(t,e,n){var r=n(50),o=n(228),l=n(52),c=Math.ceil,d=function(t){return function(e,n,d){var m,f,h=String(l(e)),v=h.length,_=void 0===d?" ":String(d),w=r(n);return w<=v||""==_?h:(m=w-v,(f=o.call(_,c(m/_.length))).length>m&&(f=f.slice(0,m)),t?h+f:f+h)}};t.exports={start:d(!1),end:d(!0)}},847:function(t,e,n){var r=n(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},848:function(t,e,n){"use strict";n.r(e);n(156),n(49);var r=n(8),o=(n(860),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),t.showID&&t.pfields.push({key:"id",sortable:!0}),t.pfields.push({key:"title",sortable:!0,formatter:t.$selectUserLocaleText}),t.showTag&&t.pfields.push({key:"tags",sortable:!0}),(t.showArrow||t.showDetail||t.editProblem||t.copyProblem)&&t.pfields.push({key:"actions",label:"Actions"});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{moveUp:function(t){if(t>0){var e=this.$copyObject(this.problems[t]);this.problems.splice(t,1),this.problems.splice(t-1,0,e)}},moveDown:function(t){if(t<this.problems.length-1){var e=this.$copyObject(this.problems[t+1]);this.problems.splice(t+1,1),this.problems.splice(t,0,e)}},onRowSelected:function(t){this.$emit("rowSelected",t)},showProblem:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.toggleDetails();case 1:case"end":return e.stop()}}),e)})))()}}}),l=(n(853),n(55)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showFilter?n("p",{staticClass:"p-0 mb-2"},[n("span",[t._v("Filter: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pfilter,expression:"pfilter"}],domProps:{value:t.pfilter},on:{input:function(e){e.target.composing||(t.pfilter=e.target.value)}}})])]):t._e(),t._v(" "),n("b-table",{attrs:{bordered:"",items:t.problems,selectable:"","select-mode":"multi",fields:t.pfields,filter:t.pfilter},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([t.showDetail||t.editProblem||t.copyProblem||t.showArrow?{key:"cell(actions)",fn:function(e){return[t.showDetail?n("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(n){return t.showProblem(e)}}},[e.detailsShowing?n("b-icon",{attrs:{icon:"eye-slash"}}):n("b-icon",{attrs:{icon:"eye"}})],1):t._e(),t._v(" "),t.editProblem?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.editProblem(e.item)}}},[n("b-icon",{attrs:{icon:"pen"}})],1):t._e(),t._v(" "),t.copyProblem?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.copyProblem(e.item)}}},[n("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.showArrow?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.moveUp(e.index)}}},[n("b-icon",{attrs:{icon:"arrow-up"}})],1):t._e(),t._v(" "),t.showArrow?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.moveDown(e.index)}}},[n("b-icon",{attrs:{icon:"arrow-down"}})],1):t._e()]}}:null,t.showDetail?{key:"row-details",fn:function(e){return[n("b-card",[n("p",[t._v(t._s(e.item.id)+": "+t._s(t.$selectUserLocaleText(e.item.title)))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$md.render(t.$selectUserLocaleText(e.item.description)))}}),t._v(" "),n("p",[t._v("TAGS: "+t._s(e.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"2398be4f",null);e.default=component.exports},849:function(t,e,n){var content=n(854);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("0d16a966",content,!0,{sourceMap:!1})},850:function(t,e,n){var content=n(856);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("56c34f47",content,!0,{sourceMap:!1})},851:function(t,e,n){"use strict";n.r(e);n(156);var r=n(848),o=n(844),l={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"}},components:{ProblemTable:r.default},data:function(){return{leftSelected:null,rightSelected:null,leftProblems:[],rightProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.initSelection()},mounted:function(){},methods:{done:function(){this.$emit("OK",this.rightProblems)},initSelection:function(){var t=[];if(this.selProblems&&this.selProblems.length>0)for(var i=0;i<this.selProblems.length;i++)t.push(this.selProblems[i]);for(var e=[],n=0;n<this.oriProblems.length;n++){var r=this.oriProblems[n];o.a.findIdPos(t,r.id)<0&&e.push(r)}this.leftProblems=e,this.rightProblems=t},selectItems:function(){if(this.leftSelected)for(var i=0;i<this.leftSelected.length;i++){var t=this.leftSelected[i];this.rightProblems.push(t);var e=o.a.findIdPos(this.leftProblems,t.id);e>=0&&this.leftProblems.splice(e,1)}},deSelectItems:function(){if(this.rightSelected)for(var i=0;i<this.rightSelected.length;i++){var t=this.rightSelected[i];this.leftProblems.push(t);var e=o.a.findIdPos(this.selProblems,t.id);e>=0&&this.rightProblems.splice(e,1)}}},watch:{oriProblems:function(t){this.initSelection()},selProblems:function(t){this.initSelection()}}},c=(n(855),n(55)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-start align-items-top"},[n("problem-table",{attrs:{problems:t.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(e){return t.leftSelected=e}}}),t._v(" "),n("div",{staticClass:"mx-5"},[n("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.selectItems}},[n("b-icon",{attrs:{icon:"arrow-right"}})],1),t._v(" "),n("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.deSelectItems}},[n("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),t._v(" "),n("div",[n("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[n("span",{staticClass:"mr-3"},[t._v(t._s(t.selText))]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.done}},[t._v(t._s(t.OKText))])],1),t._v(" "),n("problem-table",{attrs:{problems:t.rightProblems,showID:"",showArrow:""},on:{rowSelected:function(e){return t.rightSelected=e}}})],1)],1)])}),[],!1,null,"c90387ec",null);e.default=component.exports;installComponents(component,{ProblemTable:n(848).default})},853:function(t,e,n){"use strict";n(849)},854:function(t,e,n){(e=n(60)(!1)).push([t.i,"[data-v-2398be4f] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},855:function(t,e,n){"use strict";n(850)},856:function(t,e,n){(e=n(60)(!1)).push([t.i,"[data-v-c90387ec] .itemList{margin:12px 0}.container-fluid[data-v-c90387ec]{margin-top:30px}.pdescription[data-v-c90387ec]{width:100%;height:300px}.titleLabel[data-v-c90387ec]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-c90387ec] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},858:function(t,e,n){"use strict";n.r(e);var r=n(844),o={props:{items:Array,itemObj:Object,name:{type:String,default:"name"},keyPrefix:{type:String,default:"item"},show:{type:Function,default:null},headVariant:{type:String,default:"dark"},textVariant:{type:String,default:"primary"},editVariant:{type:String,default:"primary"},copyVariant:{type:String,default:"primary"},removeVariant:{type:String,default:"primary"},addVariant:{type:String,default:"primary"},order:{type:Boolean,default:!0},click:{type:Function,default:null},remove:{type:Function,default:null},edit:{type:Function,default:null},copy:{type:Function,default:null},add:{type:Function,default:null},addLabel:{type:String,default:"New"},noEntryLabel:{type:String,default:"No items."}},data:function(){return{titems:[]}},created:function(){this.updateItems(this.items)},methods:{updateItems:function(t){this.titems=t||r.a.obj2arr(this.itemObj)},itemName:function(t,e){return this.show?this.show(t):t[e]?this.$selectUserLocaleText(t[e]):"Unknown"},itemClass:function(t){return t.variant?"text-"+t.variant:this.textVariant?"text-"+this.textVariant:null}},watch:{items:function(t){this.updateItems(t)}}},l=n(55),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.add?n("p",{attrs:{align:"right"}},[t.add?n("b-button",{attrs:{size:"sm",variant:t.addVariant},on:{click:function(e){return t.add()}}},[t._v("\n            "+t._s(t.addLabel)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.titems&&t.titems.length>0?n("div",t._l(t.titems,(function(e,r){return n("div",{key:t.keyPrefix+r,staticClass:"itemList d-flex justify-content-between"},[n("span",[t.order?n("span",{staticClass:"mr-2",class:"text-"+t.headVariant},[t._v(t._s(r+1)+".")]):n("span",{staticClass:"mr-2",class:"text-"+t.headVariant},[t._v("•")]),t._v(" "),n("b-link",{staticClass:"itemBody",class:t.itemClass(e),on:{click:function(n){t.click&&t.click(e)}}},[t._v("\n                    "+t._s(t.itemName(e,t.name))+"\n                ")])],1),t._v(" "),t.remove||t.edit||t.copy?n("span",[t.edit?n("b-link",{class:"text-"+t.editVariant,on:{click:function(n){return t.edit(e)}}},[n("b-icon",{attrs:{icon:"pencil"}})],1):t._e(),t._v(" "),t.copy&&t.edit?n("span",{staticClass:"mr-2"}):t._e(),t._v(" "),t.copy?n("b-link",{class:"text-"+t.editVariant,on:{click:function(n){return t.copy(e)}}},[n("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.remove&&t.copy?n("span",{staticClass:"mr-2"}):t._e(),t._v(" "),t.remove?n("b-link",{class:"text-"+t.removeVariant,on:{click:function(n){return t.remove(e)}}},[n("b-icon",{attrs:{icon:"trash-fill"}})],1):t._e()],1):t._e()])})),0):n("div",[t._v("\n        "+t._s(t.noEntryLabel)+"\n    ")])])}),[],!1,null,"562311c8",null);e.default=component.exports}}]);