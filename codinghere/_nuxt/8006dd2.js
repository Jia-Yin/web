(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1105:function(e,t,r){e.exports=r(1106)},1106:function(e,t,r){"use strict";function o(object){switch(typeof object){case"string":return function(e){for(var s=e.length,i=e.length-1;i>=0;i--){var code=e.charCodeAt(i);code>127&&code<=2047?s++:code>2047&&code<=65535&&(s+=2)}return s}(object)+1;case"boolean":return 1;case"number":return 8;case"object":return Array.isArray(object)?object.map(o).reduce((function(e,t){return e+t}),0):function(object){if(null===object)return 1;if(object.hasOwnProperty("_lat")&&"function"==typeof object.isEqual)return 16;if("function"==typeof object.toDate||"function"==typeof object.getDate)return 8;if("function"==typeof object.toUint8Array)return object.toUint8Array().byteLength;if("function"==typeof object.onSnapshot)return object._key.path.segments.slice(object._key.path.offset).reduce((function(e,t){return e+t.length+1}),16);var e=0;for(var t in object)if(Object.hasOwnProperty.call(object,t)){e+=o(t);try{e+=o(object[t])}catch(t){t instanceof RangeError&&(e=0)}}return e}(object);default:return 0}}e.exports=function(object){return 32+o(object)}},1219:function(e,t,r){var content=r(1549);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("0395fd10",content,!0,{sourceMap:!1})},1548:function(e,t,r){"use strict";r(1219)},1549:function(e,t,r){(t=r(57)(!1)).push([e.i,"[data-v-8ce7ac88] table td{padding:6px}.container-fluid[data-v-8ce7ac88]{margin-top:30px}.pdescription[data-v-8ce7ac88]{width:100%;height:300px}.titleLabel[data-v-8ce7ac88]{width:100px;margin:0 16px 24px 0;text-align:right}.titleLabel[data-v-8ce7ac88],[data-v-8ce7ac88] h1{display:inline-block}[data-v-8ce7ac88] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),e.exports=t},1637:function(e,t,r){"use strict";r.r(t);r(160),r(87),r(26),r(9),r(42),r(885),r(20),r(29),r(46),r(49);var o=r(7),n=r(27),l=r(1102),c=r(884),m=(r(905),r(903)),d=r(920),f=r(1105),h=r.n(f),x={computed:{cid:function(){return this.$route.query.cid}},components:{ProblemEditor:l.default,ProblemTable:m.default,ProblemSelector:d.default},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("playground").fetch();case 3:return o=t.sent,t.abrupt("return",{playground:o});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{course:{},curPSet:{},curPSetID:null,editMode:!1,problemTab:0,pSize:0,pgKey:"CHProblem",lastPID:0,problems:[],pgproblems:[],pgselected:null,psselected:null,pmText:"新增",infoAlert:!1,info:{title:"",message:""},problem:{title:null,description:null,answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",cmpMode:null,timeLimit:null,memoryLimit:null,outputLimit:null,tags:""},localeText:{AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題庫管理",AdminProblem_ProbDoc:"出題說明",AdminProblem_SpaceRatio:"使用率",SYS_New:"新增",SYS_Update:"更新"}}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.cid){t.next=2;break}return t.abrupt("return",e.$router.push("/user"));case 2:e.localeText=e.$updateLocaleText(e.localeText),e.updateCourse();case 4:case"end":return t.stop()}}),t)})))()},methods:{updateCourse:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,l,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.pmText=e.localeText.SYS_New,t.next=3,e.$store.dispatch("getCourse",e.cid);case 3:if(e.course=t.sent,r=e.course.problemSets,1!==(o=Object.keys(r)).length){t.next=13;break}return e.curPSetID=o[0],e.curPSet=r[e.curPSetID],t.next=11,n.d.collection("problems").doc(e.curPSetID).get();case 11:(l=t.sent).exists&&(m=l.data(),e.pSize=Math.ceil(h()(m)/1e4),(d=m.problems)&&(e.problems=c.a.obj2arr(d),e.lastPID=e.problems.length));case 13:case"end":return t.stop()}}),t)})))()},selectDone:function(e){this.unitForm.probs=e,this.selUnitProb=!1},openDoc:function(){this.$store.commit("setParam",{name:"url",value:"/probdoc"});var e=this.$router.resolve({path:"/probdoc"});window.open(e.href,"_blank")},pmReset:function(){this.editMode=!1,this.pmText=this.localeText.SYS_New},updateProblem:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,l,m,d,f,h,x,P,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.d.collection("problems").doc(t.curPSetID).get();case 2:if((o=r.sent).exists||console.log("No Problem Set: ",t.curPSetID),l=o.data(),(m=l.problems)?(t.problems=c.a.obj2arr(m),t.lastPID=t.problems.length):(t.problems=[],t.lastPID=0),!t.editMode){r.next=19;break}return d=t.$copyObject(e),d=t.copyAndTags2Arr(d),(f=c.a.findIdPos(t.problems,d.id))>=0&&t.problems.splice(f,1,d),h=c.a.arr2obj(t.problems),r.next=15,n.d.collection("problems").doc(t.curPSetID).update({problems:h});case 15:t.infoAlert=!0,t.info={title:"Update",message:"OK"},r.next=30;break;case 19:return t.lastPID+=1,x=t.curPSetID+t.lastPID.toString().padStart(3,"0"),(P=t.$copyObject(e)).id=x,P=t.copyAndTags2Arr(P),t.problems.push(P),v=c.a.arr2obj(t.problems),r.next=28,n.d.collection("problems").doc(t.curPSetID).update({problems:v});case 28:t.infoAlert=!0,t.info={title:"Create",message:"OK"};case 30:case"end":return r.stop()}}),r)})))()},copyProblem:function(e){this.problem=e,this.editMode=!1,this.pmText=this.localeText.SYS_New,this.problemTab=2},editProblem:function(e){this.problem=e,this.editMode=!0,this.pmText=this.localeText.SYS_Update,this.problemTab=2},copyAndTags2Arr:function(e){var t=this.$copyObject(e);if(t.tags&&!(t.tags instanceof Array)){var r=t.tags.trim();r.length>0?(r=r.replace(/,/g," "),t.tags=r.split(/\s+/)):delete t.tags}return t}}},P=(r(1548),r(56)),component=Object(P.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message))]),e._v(" "),r("b-tabs",{attrs:{"content-class":"mt-3"},model:{value:e.problemTab,callback:function(t){e.problemTab=t},expression:"problemTab"}},[r("h1",{staticClass:"mb-3"},[e._v(e._s(e.curPSet.name)+"\n            "),r("b-button",{staticClass:"ml-3",attrs:{flex:"",size:"sm",variant:"success"},on:{click:e.openDoc}},[e._v("\n                "+e._s(e.localeText.AdminProblem_ProbDoc)+"\n            ")]),e._v(" "),r("span",{staticClass:"ml-3"},[e._v("("+e._s(e.localeText.AdminProblem_SpaceRatio)+" = "+e._s(e.pSize)+"%)")])],1),e._v(" "),r("b-tab",{attrs:{title:e.localeText.AdminProblem_ProbList}},[e.problems.length>0?r("problem-table",{attrs:{problems:e.problems,showID:"",showFilter:"",showDetail:"",editProblem:e.editProblem,copyProblem:e.copyProblem}}):r("div",[r("p",[e._v("Currently there is no problems.")])])],1),e._v(" "),r("b-tab",{attrs:{title:e.localeText.AdminProblem_ProbEdit}},[r("problem-editor",{attrs:{problem:e.problem,okText:e.pmText,pSize:e.pSize},on:{OK:e.updateProblem,Reset:e.pmReset}})],1)],1)],1)}),[],!1,null,"8ce7ac88",null);t.default=component.exports;installComponents(component,{ProblemTable:r(903).default,ProblemEditor:r(1102).default})}}]);