(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1007:function(t,e,n){"use strict";n(878)},1008:function(t,e,n){(e=n(59)(!1)).push([t.i,'.buttons[data-v-70772edf]{position:absolute;right:0;top:10px}.pmpanel[data-v-70772edf]{position:relative}.pdescription[data-v-70772edf]{width:100%;height:300px}.titleLabel[data-v-70772edf]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-70772edf] .katex{font-size:1.18em}.ptitle[data-v-70772edf]{color:#00f;font-size:120%;font-family:"Arial"}[data-v-70772edf] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}[data-v-70772edf] code{color:#333;font-family:"monospace",Courier;font-size:1.08em}',""]),t.exports=e},1009:function(t,e,n){"use strict";n(879)},1010:function(t,e,n){(e=n(59)(!1)).push([t.i,"[data-v-25d5e642] table td{padding:6px}.container-fluid[data-v-25d5e642]{margin-top:30px}.pdescription[data-v-25d5e642]{width:100%;height:300px}.titleLabel[data-v-25d5e642]{width:100px;margin:0 16px 24px 0;text-align:right}.titleLabel[data-v-25d5e642],[data-v-25d5e642] h1{display:inline-block}[data-v-25d5e642] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},1062:function(t,e,n){"use strict";n.r(e);n(156),n(28),n(8),n(42),n(79),n(841),n(20),n(27),n(46),n(104),n(363),n(54);var o=n(10),r=n(34),l=n(900),c=n(840),m=(n(850),n(848)),d=n(856),f={components:{ProblemEditor:l.default,ProblemTable:m.default,ProblemSelector:d.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("playground").fetch();case 3:return o=e.sent,e.abrupt("return",{playground:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{editMode:!1,problemTab:0,pgKey:"CHProblem",lastPID:0,problems:[],pgproblems:[],pgselected:null,psselected:null,pmText:"新增",infoAlert:!1,info:{title:"",message:""},problem:{title:null,description:null,answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",cmpMode:null,timeLimit:null,memoryLimit:null,outputLimit:null,tags:""},localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題庫管理",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,m,i,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.localeText=t.$updateLocaleText(t.localeText),e.next=3,r.d.collection("problems").doc("BASE").get();case 3:if(n=e.sent,o=n.data(),n.exists&&(t.problems=c.a.obj2arr(o),t.lastPID=t.problems.length),t.playground)for(l=t.playground.DATA,m=c.a.decode(t.pgKey,l),i=0;i<m.length;i++)(d=c.a.findIdPos(t.problems,m[i].id))>=0&&t.pgproblems.push(t.problems[d]);case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{openDataFunc:function(){var t=this.$router.resolve({path:"/admin/datafunc"});window.open(t.href,"_blank")},pmReset:function(){console.log("Here")},updateProblem:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,l,m,d,f,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.editMode){n.next=12;break}return o=e.$copyObject(t),o=e.copyAndTags2Arr(o),(l=c.a.findIdPos(e.problems,o.id))>=0&&e.problems.splice(l,1,o),m=c.a.arr2obj(e.problems),n.next=8,r.d.collection("problems").doc("BASE").set(m);case 8:e.infoAlert=!0,e.info={title:"Update",message:"OK"},n.next=23;break;case 12:return e.lastPID+=1,d="BASE"+e.lastPID.toString().padStart(3,"0"),(f=e.$copyObject(t)).id=d,f=e.copyAndTags2Arr(f),e.problems.push(f),h=c.a.arr2obj(e.problems),n.next=21,r.d.collection("problems").doc("BASE").set(h);case 21:e.infoAlert=!0,e.info={title:"Create",message:"OK"};case 23:case"end":return n.stop()}}),n)})))()},copyProblem:function(t){this.problem=t,this.editMode=!1,this.pmText="新增",this.problemTab=2},editProblem:function(t){this.problem=t,this.editMode=!0,this.pmText="更新",this.problemTab=2},copyAndTags2Arr:function(t){var e=this.$copyObject(t);if(e.tags&&!(e.tags instanceof Array)){var n=e.tags.trim();n.length>0?(n=n.replace(","," "),e.tags=n.split(/\s+/)):delete e.tags}return e},PGProblemGenerate:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i,n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=0;i<t.pgproblems.length;i++)delete t.pgproblems[i]._showDetails,delete t.pgproblems[i].tags;n='{\n    "KEY": "'+t.pgKey+'",\n    "DATA": "'+c.a.encode(t.pgKey,JSON.stringify(t.pgproblems))+'"\n}',"playground.json",o=new Blob([n],{type:"text/plain;charset=utf-8"}),window.navigator.msSaveOrOpenBlob?window.navigator.msSaveBlob(o,"playground.json"):((r=window.document.createElement("a")).href=window.URL.createObjectURL(o),r.download="playground.json",document.body.appendChild(r),r.click(),document.body.removeChild(r));case 5:case"end":return e.stop()}}),e)})))()}}},h=(n(1009),n(70)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),n("b-tabs",{attrs:{"content-class":"mt-3"},model:{value:t.problemTab,callback:function(e){t.problemTab=e},expression:"problemTab"}},["admin"==t.$user("role")?n("b-tab",{attrs:{title:t.localeText.AdminProblem_Playground}},[n("problem-selector",{attrs:{oriProblems:t.problems,selProblems:t.pgproblems,selText:"Playground",OKText:"Generate",OK:t.PGProblemGenerate}}),t._v(" "),n("hr")],1):t._e(),t._v(" "),n("b-tab",{attrs:{title:t.localeText.AdminProblem_ProbList}},[n("h1",{staticClass:"mb-3"},[t._v("Set = BASE")]),t._v(" "),t.problems.length>0?n("problem-table",{attrs:{problems:t.problems,showID:"",showFilter:"",showDetail:"",editProblem:t.editProblem,copyProblem:t.copyProblem}}):n("div",[n("p",[t._v("Currently there is no problems.")])])],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.AdminProblem_ProbEdit}},[n("div",{staticClass:"mb-3 d-flex justify-content-between"},[n("h1",[t._v("Set = BASE")]),t._v(" "),n("b-button",{attrs:{flex:"",size:"sm",variant:"success"},on:{click:t.openDataFunc}},[t._v("DOC")])],1),t._v(" "),n("problem-editor",{attrs:{problem:t.problem,okText:t.pmText},on:{OK:t.updateProblem,Reset:t.pmReset}})],1)],1)],1)}),[],!1,null,"25d5e642",null);e.default=component.exports;installComponents(component,{ProblemSelector:n(856).default,ProblemTable:n(848).default,ProblemEditor:n(900).default})},840:function(t,e,n){"use strict";n(9),n(14),n(22),n(103),n(8),n(841),n(27),n(15);var o=n(227),r=n.n(o),l={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),o=t.id;delete n.id,e[o]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new r.a(t).encrypt(e)},decode:function(t,e){return new r.a(t).decrypt(e)}};e.a=l},845:function(t,e,n){var content=n(854);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("7bc25547",content,!0,{sourceMap:!1})},848:function(t,e,n){"use strict";n.r(e);n(156),n(54);var o=n(10),r=(n(850),{props:{problems:Array,showID:{type:Boolean,default:!1},showTag:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!1},showDown:{type:Boolean,default:!1},editProblem:{type:Function,default:null},copyProblem:{type:Function,default:null}},data:function(){return{pfields:[],pfilter:null,localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.localeText=t.$updateLocaleText(t.localeText),t.showID&&t.pfields.push({key:"id",sortable:!0}),t.pfields.push({key:"title",sortable:!0,formatter:t.$selectUserLocaleText}),t.showTag&&t.pfields.push({key:"tags",sortable:!0}),(t.showArrow||t.showDetail||t.editProblem||t.copyProblem)&&t.pfields.push({key:"actions",label:"Actions"});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{moveUp:function(t){if(t>0){var e=this.$copyObject(this.problems[t]);this.problems.splice(t,1),this.problems.splice(t-1,0,e)}},moveDown:function(t){if(t<this.problems.length-1){var e=this.$copyObject(this.problems[t+1]);this.problems.splice(t+1,1),this.problems.splice(t,0,e)}},onRowSelected:function(t){this.$emit("rowSelected",t)},showProblem:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.toggleDetails();case 1:case"end":return e.stop()}}),e)})))()}}}),l=(n(858),n(70)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showFilter?n("p",{staticClass:"p-0 mb-2"},[n("span",[t._v("Filter: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pfilter,expression:"pfilter"}],domProps:{value:t.pfilter},on:{input:function(e){e.target.composing||(t.pfilter=e.target.value)}}})])]):t._e(),t._v(" "),n("b-table",{attrs:{bordered:"",items:t.problems,selectable:"","select-mode":"multi",fields:t.pfields,filter:t.pfilter},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([t.showDetail||t.editProblem||t.copyProblem||t.showArrow?{key:"cell(actions)",fn:function(e){return[t.showDetail?n("b-link",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(n){return t.showProblem(e)}}},[e.detailsShowing?n("b-icon",{attrs:{icon:"eye-slash"}}):n("b-icon",{attrs:{icon:"eye"}})],1):t._e(),t._v(" "),t.editProblem?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.editProblem(e.item)}}},[n("b-icon",{attrs:{icon:"pen"}})],1):t._e(),t._v(" "),t.copyProblem?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.copyProblem(e.item)}}},[n("b-icon",{attrs:{icon:"back"}})],1):t._e(),t._v(" "),t.showArrow?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.moveUp(e.index)}}},[n("b-icon",{attrs:{icon:"arrow-up"}})],1):t._e(),t._v(" "),t.showArrow?n("b-link",{staticClass:"mr-1",on:{click:function(n){return t.moveDown(e.index)}}},[n("b-icon",{attrs:{icon:"arrow-down"}})],1):t._e()]}}:null,t.showDetail?{key:"row-details",fn:function(e){return[n("b-card",[n("p",[t._v(t._s(e.item.id)+": "+t._s(t.$selectUserLocaleText(e.item.title)))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$md.render(t.$selectUserLocaleText(e.item.description)))}}),t._v(" "),n("p",[t._v("TAGS: "+t._s(e.item.tags))])])]}}:null],null,!0)})],1)}),[],!1,null,"2398be4f",null);e.default=component.exports},849:function(t,e,n){"use strict";n.r(e);n(362);var o={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:{zh:"中文",en:"English"},content:{zh:"中文",en:"English"}}},created:function(){this.locales=this.$copyObject(this.$system("locales").support),this.value&&(this.content=this.value)},methods:{setLang:function(t){this.$emit("curLang",t)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(t){this.content=t}}},r=(n(853),n(70)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-tabs",t._l(t.locales,(function(e,o,r){return n("b-tab",{key:"locale"+r,attrs:{title:e},on:{click:function(e){return t.setLang(o)}}},[n("b-textarea",{attrs:{rows:t.rows},on:{input:t.cinput},model:{value:t.content[o],callback:function(e){t.$set(t.content,o,e)},expression:"content[key]"}})],1)})),1)],1)}),[],!1,null,"06f58b61",null);e.default=component.exports},851:function(t,e,n){var content=n(859);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("0d16a966",content,!0,{sourceMap:!1})},852:function(t,e,n){var content=n(861);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("5d1eba62",content,!0,{sourceMap:!1})},853:function(t,e,n){"use strict";n(845)},854:function(t,e,n){(e=n(59)(!1)).push([t.i,"textarea[data-v-06f58b61]{width:100%}",""]),t.exports=e},856:function(t,e,n){"use strict";n.r(e);n(156),n(54);var o=n(10),r=n(848),l=n(840),c={props:{oriProblems:Array,selProblems:Array,selText:{type:String,Default:""},OKText:{type:String,Default:"OK"},OK:Function},components:{ProblemTable:r.default},data:function(){return{selSelected:null,oriSelected:null,leftProblems:[],localeText:{AdminProblem_Playground:"練習廣場",AdminProblem_ProbEdit:"題目編修",AdminProblem_ProbList:"題目清單",Common_Edit:"編輯",Common_Copy:"複製"}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.localeText=t.$updateLocaleText(t.localeText),i=0;i<t.oriProblems.length;i++)n=t.oriProblems[i],l.a.findIdPos(t.selProblems,n.id)<0&&t.leftProblems.push(n);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{selectItems:function(){if(this.oriSelected)for(var i=0;i<this.oriSelected.length;i++){var t=this.oriSelected[i];this.selProblems.push(t);var e=l.a.findIdPos(this.leftProblems,t.id);e>=0&&this.leftProblems.splice(e,1)}},deSelectItems:function(){if(this.selSelected)for(var i=0;i<this.selSelected.length;i++){var t=this.selSelected[i];this.leftProblems.push(t);var e=l.a.findIdPos(this.selProblems,t.id);e>=0&&this.selProblems.splice(e,1)}}}},m=(n(860),n(70)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-start align-items-top"},[n("problem-table",{attrs:{problems:t.leftProblems,showID:"",showDetail:"",showFilter:""},on:{rowSelected:function(e){return t.oriSelected=e}}}),t._v(" "),n("div",{staticClass:"mx-5"},[n("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.selectItems}},[n("b-icon",{attrs:{icon:"arrow-right"}})],1),t._v(" "),n("b-button",{attrs:{block:"",variant:"success",size:"sm"},on:{click:t.deSelectItems}},[n("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),t._v(" "),n("div",[n("p",{staticClass:"mb-2 p-0",attrs:{align:"right"}},[n("span",{staticClass:"mr-3"},[t._v(t._s(t.selText))]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:t.OK}},[t._v(t._s(t.OKText))])],1),t._v(" "),n("problem-table",{attrs:{problems:t.selProblems,showID:"",showArrow:""},on:{rowSelected:function(e){return t.selSelected=e}}})],1)],1)])}),[],!1,null,"7f700f4d",null);e.default=component.exports;installComponents(component,{ProblemTable:n(848).default})},858:function(t,e,n){"use strict";n(851)},859:function(t,e,n){(e=n(59)(!1)).push([t.i,"[data-v-2398be4f] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},860:function(t,e,n){"use strict";n(852)},861:function(t,e,n){(e=n(59)(!1)).push([t.i,"[data-v-7f700f4d] .itemList{margin:12px 0}.container-fluid[data-v-7f700f4d]{margin-top:30px}.pdescription[data-v-7f700f4d]{width:100%;height:300px}.titleLabel[data-v-7f700f4d]{display:inline-block;width:100px;margin:0 16px 24px 0;text-align:right}[data-v-7f700f4d] h1{color:#ff4500;font-size:110%;margin:12px 0 6px}",""]),t.exports=e},862:function(t,e,n){"use strict";n(39),n(28),n(8),n(20),n(27),n(49);var o=n(871),r=n.n(o),l={checkServer:function(t){return new Promise((function(e,n){var o="ws://",l=t.http;"https:"==document.location.protocol&&(l=t.https,o="wss://");var c=l.length,m=100,d=null,f=0,h=!1;window.setTimeout((function(){return h=!0}),2e3);for(var v=[],P=function(i){var t=o+l[i],P=t+"/submit",x=Math.random(),_=new r.a(P,{packMessage:function(data){return data.content},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return x}});_.open().then((function(){return _.sendRequest({content:"HELLO:"+l[i]},{requestId:x})})).then((function(o){var r=o.split("#"),P=parseInt(r[1],10);if(v.push({server:l[i],busy:P}),P<m)m=P,d=t;else if(P===m){Math.random()<.4&&(d=t)}if(f++,h||f===c||3===f)return m<99?void e({best:{channel:d+"/submit",busy:m},available:v}):void n("Judger not available!")})).catch((function(t){if(console.log("Error",t),f++,h||f===c||3===f)return m<99?void e({best:{channel:d+"/submit",busy:m},available:v}):void n("Judger not available!")}))},i=0;i<c;i++)P(i)}))},judgeFunctest:function(t,code){var content={sourcecode:code,sourcelang:"cpp",testdata:{style:"RUN",testsets:[{testcases:[{input:""}]}]}};return new Promise((function(e,n){if(t){var o=Math.random(),l=new r.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return o}});l.open().then((function(){return l.sendRequest({content:content},{requestId:o})})).then((function(t){try{var o=JSON.parse(t).RunStatus;if(o.indexOf('["AC"]')>=0)return void e("AC");if(o.indexOf("Wrong")>=0){var r=o.replace(/\\n/g,"\n");return r=(r=r.replace('["',"")).replace('"]',""),void e(r)}return void e(o)}catch(t){return console.log("Error:",t),void n(t)}})).catch((function(t){console.log("Error:",t),n(t)}))}else n("Null judger.")}))},judgeProgtest:function(t,e){var n=Math.random();return new Promise((function(o,l){if(t){var c=new r.a(t,{packMessage:function(data){return"CODE:"+JSON.stringify(data.content)},unpackMessage:function(data){return data},attachRequestId:function(data,t){return Object.assign({id:t},data)},extractRequestId:function(data){return n}});c.open().then((function(){return c.sendRequest({content:e},{requestId:n})})).then((function(t){try{return void o(JSON.parse(t))}catch(t){return console.log("Error:",t),void l(t)}})).catch((function(t){console.log("Error:",t),l(t)}))}else l("Null judger.")}))}};e.a=l},870:function(t,e,n){var content=n(976);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("791639b2",content,!0,{sourceMap:!1})},878:function(t,e,n){var content=n(1008);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("7bdc354b",content,!0,{sourceMap:!1})},879:function(t,e,n){var content=n(1010);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1051fbe7",content,!0,{sourceMap:!1})},900:function(t,e,n){"use strict";n.r(e);n(229),n(366),n(54);var o=n(10),r=n(849),l=n(902),c=n(862),m=(n(850),{props:{problem:Object,problemSet:String,okText:{type:String,default:"OK"}},components:{LocaleInput:r.default,CodeEditor:l.default},data:function(){return{curLang:null,dummyInt:0,showTest:!1,testDataStr:"",channel:null,cmpoptions:[{text:"Strict",value:"strict"},{text:"Space Ignored",value:"space"},{text:"Order Ignored",value:"order"}],nullLocales:{},locales:[{zh:"中文"}],PMProblem:{title:null,description:null,answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",cmpMode:"strict",timeLimit:1,memoryLimit:128,outputLimit:1e4,tags:""},localeText:{PM_Basic:"基本",PM_Question:"問題",PM_TestData:"測資",PM_Answer:"解答",PM_Title:"標題",PM_Tag:"標籤",PM_Compare:"比對",PM_TimeLimit:"限時",PM_MemoryLimit:"限制記憶體",PM_OutputLimit:"限制輸出",PM_Test:"測試",PM_Reset:"清除"}}},created:function(){if(this.problem&&(this.PMProblem=this.$copyObject(this.problem)),this.localeText=this.$updateLocaleText(this.localeText),this.$systemHasUserLocale()&&(this.locales=this.$copyObject(this.$system("locales").support),!this.PMProblem.title))for(var t in this.PMProblem.title={},this.$system("locales").support)this.PMProblem.title[t]=null},methods:{curTitle:function(){return this.PMProblem&&this.PMProblem.title?this.$selectLocaleText(this.PMProblem.title,this.curLang):""},curDesc:function(){return this.PMProblem&&this.PMProblem.description?(console.log("CHECK",this.PMProblem.description,this.curLang),this.$selectLocaleText(this.PMProblem.description,this.curLang)):""},ok:function(){this.$emit("OK",this.PMProblem)},getJudger:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$system("judgers")){e.next=5;break}return e.next=3,c.a.checkServer(t.$system("judgers"));case 3:n=e.sent,t.channel=n.best.channel;case 5:case"end":return e.stop()}}),e)})))()},testAnswer:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.channel){e.next=3;break}return e.next=3,t.getJudger();case 3:return n={execMode:"RUN",dataCode:t.PMProblem.dataCode,dataLang:t.PMProblem.dataLang,sourceCode:t.PMProblem.answerCode,sourceLang:t.PMProblem.answerLang},e.next=6,c.a.judgeProgtest(t.channel,n);case 6:o=e.sent,t.testDataStr="Input:\n"+o.WrongCase.input+"\nOutput:\n"+o.Response,t.showTest=!0;case 9:case"end":return e.stop()}}),e)})))()},testDataFunc:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.channel){e.next=3;break}return e.next=3,t.getJudger();case 3:return n={execMode:"TESTDATA",dataCode:t.PMProblem.dataCode,dataLang:t.PMProblem.dataLang},e.next=6,c.a.judgeProgtest(t.channel,n);case 6:o=e.sent,t.testDataStr=o.Response,t.showTest=!0;case 9:case"end":return e.stop()}}),e)})))()},resetProblem:function(){this.PMProblem={title:{},description:{},answerLang:"c",answerCode:"",dataLang:"py",dataCode:"",tags:"",timeLimit:null,memoryLimit:null,outputLimit:null},this.$emit("Reset")}},watch:{problem:function(p){p&&(this.PMProblem=this.$copyObject(p))}}}),d=(n(1007),n(70)),component=Object(d.a)(m,(function(){var t=this,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"pmpanel"},[o("div",{staticClass:"buttons"},[o("span",{staticClass:"mr-2"},[e._v(e._s(e.problemSet))]),e._v(" "),o("b-button",{staticClass:"mr-2",attrs:{variant:"primary",size:"sm"},on:{click:e.resetProblem}},[e._v("\n            "+e._s(e.localeText.PM_Reset)+"\n        ")]),e._v(" "),o("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:e.ok}},[e._v("\n            "+e._s(e.okText)+"\n        ")])],1),e._v(" "),o("b-tabs",[o("b-tab",{attrs:{title:e.localeText.PM_Basic}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Title))]),e._v(" "),o("div",{staticClass:"flex-grow-1"},e._l(e.locales,(function(label,t,n){return o("div",{key:"title"+n,staticClass:"d-flex justify-content-start mb-3"},[o("span",{staticClass:"mr-3",staticStyle:{"text-align":"right",width:"100px"}},[e._v(e._s(label))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.title[t],expression:"PMProblem.title[key]"}],staticClass:"flex-grow-1",domProps:{value:e.PMProblem.title[t]},on:{input:function(n){n.target.composing||e.$set(e.PMProblem.title,t,n.target.value)}}})])})),0)]),e._v(" "),o("div",{staticClass:"d-flex justify-content-start"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Tag))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.tags,expression:"PMProblem.tags"}],staticClass:"flex-grow-1",domProps:{value:e.PMProblem.tags},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"tags",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_Compare))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:e.cmpoptions},model:{value:e.PMProblem.cmpMode,callback:function(t){e.$set(e.PMProblem,"cmpMode",t)},expression:"PMProblem.cmpMode"}})],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_TimeLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.timeLimit,expression:"PMProblem.timeLimit"}],staticClass:"mr-5",attrs:{size:"2"},domProps:{value:e.PMProblem.timeLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"timeLimit",t.target.value)}}}),e._v(" "),o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_MemoryLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.memoryLimit,expression:"PMProblem.memoryLimit"}],staticClass:"mr-5",attrs:{size:"2"},domProps:{value:e.PMProblem.memoryLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"memoryLimit",t.target.value)}}}),e._v(" "),o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_OutputLimit))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.PMProblem.outputLimit,expression:"PMProblem.outputLimit"}],attrs:{size:"2"},domProps:{value:e.PMProblem.outputLimit},on:{input:function(t){t.target.composing||e.$set(e.PMProblem,"outputLimit",t.target.value)}}})])]),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_Question}},[o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("locale-input",{staticClass:"mt-3",attrs:{rows:16},on:{curLang:function(e){t.curLang=e}},model:{value:e.PMProblem.description,callback:function(t){e.$set(e.PMProblem,"description",t)},expression:"PMProblem.description"}})],1),e._v(" "),o("b-col",{staticClass:"pl-4 mt-4",attrs:{cols:"6"}},[o("div",[o("p",{staticClass:"ptitle"},[e._v(e._s(e.curTitle()))]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.$md.render(e.curDesc()))}})])])],1)],1),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_TestData},on:{click:function(t){e.dummyInt+=1}}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_DataLang))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:["py","cpp"]},model:{value:e.PMProblem.dataLang,callback:function(t){e.$set(e.PMProblem,"dataLang",t)},expression:"PMProblem.dataLang"}}),e._v(" "),o("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-success"},on:{click:e.testDataFunc}},[e._v(e._s(e.localeText.PM_Test))])],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_DataCode))]),e._v(" "),o("CodeEditor",{staticClass:"flex-grow-1",attrs:{lang:e.PMProblem.dataLang,dummy:e.dummyInt,rows:"10"},model:{value:e.PMProblem.dataCode,callback:function(t){e.$set(e.PMProblem,"dataCode",t)},expression:"PMProblem.dataCode"}})],1),e._v(" "),o("b-modal",{attrs:{size:"lg",title:"Test Data"},model:{value:e.showTest,callback:function(t){e.showTest=t},expression:"showTest"}},[o("pre",[e._v(e._s(e.testDataStr))])])],1),e._v(" "),o("b-tab",{attrs:{title:e.localeText.PM_Answer},on:{click:function(t){e.dummyInt+=1}}},[o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_AnswerLang))]),e._v(" "),o("b-form-radio-group",{staticClass:"flex-grow-1",attrs:{options:["c","cpp","py"]},model:{value:e.PMProblem.answerLang,callback:function(t){e.$set(e.PMProblem,"answerLang",t)},expression:"PMProblem.answerLang"}}),e._v(" "),o("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-success"},on:{click:e.testAnswer}},[e._v(e._s(e.localeText.PM_Test))])],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-start mt-3"},[o("span",{staticClass:"mr-3"},[e._v(e._s(e.localeText.PM_AnswerCode))]),e._v(" "),o("CodeEditor",{staticClass:"flex-grow-1",attrs:{lang:e.PMProblem.answerLang,dummy:e.dummyInt,rows:"10"},model:{value:e.PMProblem.answerCode,callback:function(t){e.$set(e.PMProblem,"answerCode",t)},expression:"PMProblem.answerCode"}})],1)])],1)],1)}),[],!1,null,"70772edf",null);e.default=component.exports;installComponents(component,{LocaleInput:n(849).default,CodeEditor:n(902).default})},902:function(t,e,n){"use strict";n.r(e);n(362),n(49),n(869);var o={props:{value:String,height:{type:Number,default:500},lang:{type:String,default:"c"},fontSize:{type:Number,default:100},lineNumbers:{type:Boolean,default:!0},tabSize:{type:Number,default:4},readOnly:{type:Boolean,default:!1},dummy:{type:Number,default:0}},data:function(){return{cm:null,cmstyle:{"font-size":"100%"},cmfontsize:100,cmcode:null,cmOption:{tabSize:4,indentUnit:4,styleActiveLine:!0,lineNumbers:!0,readOnly:!1,matchTags:!0,matchBrackets:!1,autoCloseBrackets:!0,indentWithTabs:!0,autoRefresh:!0,mode:"text/x-c++src",theme:"mdn-like"}}},mounted:function(){this.cmcode=this.value,this.cmOption.lineNumbers=this.lineNumbers,this.cmOption.tabSize=this.tabSize,this.cmOption.indentUnit=this.tabSize,this.cm.focus()},methods:{refresh:function(){if(this.$refs.coder){var t=this;setTimeout((function(){t.$refs.coder.codemirror.refresh()}),1)}},setLang:function(t){"c"!=t&&"cpp"!=t||(this.cmOption.mode="text/x-c++src"),"py"==t&&(this.cmOption.mode="text/x-python"),this.cm.focus()},cinput:function(t){this.$emit("input",t)},setFontSize:function(t){this.cmstyle={"font-size":"".concat(t,"%")}},onCmReady:function(t){t.setSize(null,this.height),this.cm=t,this.setLang(this.lang),this.setFontSize(this.fontSize)}},watch:{dummy:function(t){this.refresh()},value:function(t){this.cmcode=t,this.refresh()},height:function(t){this.cm.setSize(null,t)},fontSize:function(t){this.setFontSize(t)},lang:function(t){this.setLang(t)},lineNumbers:function(t){this.cmOption.lineNumbers=t},tabSize:function(t){this.cmOption.tabSize=t,this.cmOption.indentUnit=t},readOnly:function(t){this.cmOption.readOnly=t}}},r=(n(975),n(70)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-editor"},[n("codemirror",{ref:"coder",staticClass:"coder",style:t.cmstyle,attrs:{options:t.cmOption},on:{ready:t.onCmReady,input:t.cinput},model:{value:t.cmcode,callback:function(e){t.cmcode=e},expression:"cmcode"}})],1)}),[],!1,null,"1f11e5d5",null);e.default=component.exports},975:function(t,e,n){"use strict";n(870)},976:function(t,e,n){(e=n(59)(!1)).push([t.i,".code-editor[data-v-1f11e5d5]{width:100%}[data-v-1f11e5d5] .CodeMirror-gutters{border-left:0}[data-v-1f11e5d5] .CodeMirror-linenumber{text-align:center}.coder[data-v-1f11e5d5]{padding:0;border:1px solid #00f}",""]),t.exports=e}}]);