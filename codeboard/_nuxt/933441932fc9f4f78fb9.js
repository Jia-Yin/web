(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{392:function(t,e,r){var content=r(410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("7d9e707a",content,!0,{sourceMap:!1})},409:function(t,e,r){"use strict";var o=r(392);r.n(o).a},410:function(t,e,r){(t.exports=r(30)(!1)).push([t.i,"h1[data-v-0fd4fbee]{font-size:120%;margin-left:12px;color:#44f}section[data-v-0fd4fbee]{padding:0}.scontent[data-v-0fd4fbee]{display:flex;padding:6px 0}.course[data-v-0fd4fbee]{flex:1 1 180px}.course[data-v-0fd4fbee],.group[data-v-0fd4fbee]{border:1px solid #add8e6;border-radius:10px;padding:12px;margin:0 2px}.group[data-v-0fd4fbee]{flex:1 1 200px}.problem[data-v-0fd4fbee]{flex:3 2 300px}.problem[data-v-0fd4fbee],.submits[data-v-0fd4fbee]{border:1px solid #add8e6;border-radius:10px;padding:12px;margin:0 2px}.submits[data-v-0fd4fbee]{flex:2 2 300px}.submitlabel[data-v-0fd4fbee]{font-family:Courier New,Courier,monospace}.noanswer[data-v-0fd4fbee]{margin:12px}.btn[data-v-0fd4fbee]{margin:8px 12px;border-radius:10px}.chooseLabel[data-v-0fd4fbee]{background:#fafad2;padding:10px 20px}input[data-v-0fd4fbee]{margin-bottom:12px}textarea[data-v-0fd4fbee]{width:100%;padding:20px 30px;height:500px;font-family:Courier New,Courier,monospace;-moz-tab-size:4;-o-tab-size:4;tab-size:4}.summary[data-v-0fd4fbee]{border:1px solid #f08080;border-radius:10px;padding:14px;background:#fafad2}.alert[data-v-0fd4fbee]{margin-bottom:6px}.slabel[data-v-0fd4fbee]{padding:6px 0;color:#00f}",""])},411:function(t,e,r){var content=r(480);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("66b55ef4",content,!0,{sourceMap:!1})},421:function(t,e,r){"use strict";r(7),r(4),r(22),r(25),r(41);var o=r(10),n=(r(3),r(1),r(5),r(0)),c=(r(33),r(11)),l=r(59);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h,d,f,v,_={data:function(){return{name:"N/A",currentPage:1,perpage:5,allcourses:[],chooseCourse:!1,showCodeInput:!1,showSubmitCode:!1,inputCode:null,selected:null,problemscache:{},submitCode:"載入中...",submitLang:"c"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({mosterrorkey:function(){if(this.comuser&&this.comuser.submits){var t=Object.keys(this.comuser.submits);if(!t||0==t.length)return null;for(var e=0,i=(this.errrate(t[0]),1);i<t.length;i++)this.errrate(t[i])>this.errrate(t[e])&&(e=i);return this.errrate(t[e])>1e-4?t[e]:null}return null},mosterror:function(){var t=this.mosterrorkey;return t?this.probname(t):"無"},mostsubmitkey:function(){if(this.comuser&&this.comuser.submits){for(var t=Object.keys(this.comuser.submits),e=0,i=1;i<t.length;i++)this.comuser.submits[t[i]].length>this.comuser.submits[t[e]].length&&(e=i);return t[e]}return null},mostsubmit:function(){var t=this.mostsubmitkey;return t?this.probname(t):"無"},allpass:function(){return console.log("ALL",this.comuser),this.comuser&&this.comuser.solved?this.comuser.solved.length:0},allsubmits:function(){return this.comuser&&this.comuser.submits?Object.keys(this.comuser.submits).length:0},allsubmitscount:function(){var t=this;return this.comuser&&this.comuser.submits?Object.keys(this.comuser.submits).map((function(e){return t.comuser.submits[e].length})).reduce((function(a,b){return a+b}),0):0},currentProblems:function(){return console.log("Current Group",this.path.group),this.path.group?this.path.group.problems:[]},problemSubmits:function(){if(!this.path.problem)return[];var t=this.path.problem.id,e=[];this.submits&&this.submits[t]&&(e=this.submits[t]);var r=e.slice();return r.sort(),r.reverse(),r},submitscount:function(){return this.problemSubmits?this.problemSubmits.length:1},pageSubmits:function(){return this.problemSubmits?this.problemSubmits.slice((this.currentPage-1)*this.perpage,this.currentPage*this.perpage):null},currentGroups:function(){return this.path.course&&this.groups?this.$store.getters["person/getListFromIds"]({list:this.groups,ids:this.path.course.groups}):[]}},Object(l.b)({comuser:function(t){return t.comuser},courses:function(t){return t.person.courses},groups:function(t){return t.person.groups},problems:function(t){return t.person.problems},path:function(t){return t.person.path},solved:function(t){return t.person.solved},submits:function(t){return t.person.submits},savecodes:function(t){return t.person.savecodes}})),mounted:(v=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("Comuser = ",this.comuser),this.comuser||this.$store.commit("setData",{key:"comuser",value:this.$store.state.user}),this.$store.commit("person/setObject",{key:"solved",value:this.comuser.solved}),this.$store.commit("person/setObject",{key:"submits",value:this.comuser.submits}),this.problemscache=JSON.parse(JSON.stringify(this.problems)),this.courses&&0!==this.courses.length){t.next=8;break}return t.next=8,this.$store.dispatch("person/getUserData",this.$store.state.comuser);case 8:!this.path.group&&this.courses&&this.courses.length>0?this.path.course?this.setCourse(this.path.course):(e=this.courses[this.courses.length-1],this.setCourse(e)):this.setGroup(this.path.group);case 9:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),methods:{errrate:function(t){var e=this.submits[t],r=0;if(!e||0==e.length)return 0;for(var i=0;i<e.length;i++)console.log("submits[i][15]",e[i].substr(15,1)),"0"===e[i].substr(15,1)&&(r+=1);return 1*r/e.length},submitAC:function(t){return"1"===t.split("/")[1]},showSubmit:function(t){this.showSubmitCode=!0;var e=t.split("/"),r=this;this.$store.dispatch("person/getSubmit",e[2]).then((function(t){r.submitCode=t.code,r.submitLang="c",t.lang&&(r.submitLang=t.lang)}))},subtime:function(t){var e=t.split("/"),r=e[0].substr(0,8)+"-"+e[0].substr(8);return"(".concat(e[2].slice(0,4),") ").concat(r)},groupSolved:function(t){if(!t.problems||0===t.problems.length)return!0;if(!this.solved)return!1;for(var i=0;i<t.problems.length;i++)if(this.solved.indexOf(t.problems[i])<0)return!1;return!0},psolved:function(t){return!(!this.solved||0===this.solved.length)&&this.solved.indexOf(t)>=0},problemsSolved:function(t){if(!this.solved||0===this.solved.length)return 0;for(var e=0,i=0;i<t.length;i++){var r=t[i];this.solved.indexOf(r)>=0&&e++}return e},grouptext:function(t){return t.problems?"".concat(t.name," -- \n          ").concat(this.problemsSolved(t.problems)," /\n          ").concat(t.problems.length):"".concat(t.name," -- 0/0")},addCourse:function(t){this.$store.dispatch("person/selectCourse",{course:t,user:this.comuser})},probname:function(t){var e=this;return this.problemscache[t]?this.problemscache[t]+this.probTimes(t):(c.c.collection("problems").doc(t).get().then((function(r){e.$store.commit("person/setObjectField",{key:"problems",field:t,value:r.data().name}),e.$set(e.problemscache,t,r.data().name)})),"載入中...")},probTimes:function(t){return" -- "+(this.submits[t]?this.submits[t].length:0)+"次"},notIn:function(t){if(!this.courses)return!0;for(var i=0;i<this.courses.length;i++)if(t.id===this.courses[i].id)return!1;return!0},enterCode:function(t){t.code?(this.showCodeInput=!0,this.selected=t):(this.addCourse(t),this.chooseCourse=!1)},cancelChoose:function(){this.chooseCourse=!1,this.showCodeInput=!1},checkCode:function(){this.selected.code===this.inputCode?(this.addCourse(this.selected),this.selected=null,this.showCodeInput=!1,this.chooseCourse=!1):alert("代碼錯誤")},selectCourse:(f=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],r=this.courses.map((function(t){return t.id})),c.c.collection("courses").get().then((function(t){t.docs&&t.docs.forEach((function(t){if(r.indexOf(t.id)<0){var o=t.data();o.id=t.id,e.push(o)}}))})),this.allcourses=e,this.chooseCourse=!0;case 5:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),getItemByID:function(t,e){if(t)for(var i=0;i<t.length;i++){var r=t[i];if(r.id==e)return r}return null},setCourse:function(t){if(this.$store.commit("person/setObjectField",{key:"path",field:"course",value:t}),t.groups){var e=this.getItemByID(this.groups,t.groups[t.groups.length-1]);this.setGroup(e)}else this.$store.commit("person/setObjectField",{key:"path",field:"group",value:null})},setGroup:(d=Object(o.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:this.$store.commit("person/setObjectField",{key:"path",field:"group",value:e}),e.problems&&(r=e.problems[0],this.setProblem(r));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),setProblem:(h=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=this.problemscache[e]||"",o={id:e,name:r},this.$store.commit("person/setObjectField",{key:"path",field:"problem",value:o});case 3:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)}),fixcode:function(){var data={code:this.submitCode,lang:this.submitLang};this.$store.commit("person/setObjectField",{key:"savecodes",field:this.path.problem.id,value:data}),this.$router.push("/coding")},answer:function(t){var e={id:t,name:this.problemscache[t]||""};this.$store.commit("person/setObjectField",{key:"path",field:"problem",value:e}),this.$router.push("/coding")},onLogout:function(){var t=this;this.$store.dispatch("logout").then((function(){t.$router.push("/")}))}}},k=(r(409),r(16)),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("section",{staticClass:"mt-1"},[r("div",{staticClass:"summary mx-0"},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"m-1",attrs:{variant:"outline-warning"}},[r("span",{staticClass:"slabel"},[t._v("\n          通過題數：\n          "),r("font",{attrs:{color:"red"}},[t._v(t._s(t.allpass))])],1)]),t._v(" "),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"m-1",attrs:{variant:"outline-warning"}},[r("span",{staticClass:"slabel"},[t._v("\n          作答題數 / 提交次數：\n          "),r("font",{attrs:{color:"red"}},[t._v(t._s(t.allsubmits)+" / "+t._s(t.allsubmitscount))])],1)]),t._v(" "),r("b-button",{staticClass:"m-1",attrs:{variant:"outline-warning"},on:{click:function(e){t.mostsubmitkey&&t.answer(t.mostsubmitkey)}}},[r("span",{staticClass:"slabel"},[t._v("\n          提交最多：\n          "),r("font",{attrs:{color:"red"}},[t._v(t._s(t.mostsubmit))])],1)]),t._v(" "),r("b-button",{staticClass:"m-1",attrs:{variant:"outline-warning"},on:{click:function(e){t.mosterrorkey&&t.answer(t.mosterrorkey)}}},[r("span",{staticClass:"slabel"},[t._v("\n          錯誤率最高：\n          "),r("font",{attrs:{color:"red"}},[t._v(t._s(t.mosterror))])],1)]),t._v(" "),r("b-collapse",{staticClass:"mt-1",attrs:{id:"collapse-1"}},[r("b-card",{attrs:{title:"通過題數"}},[t.solved&&t.solved.length>0?r("ol",t._l(t.solved,(function(e,o){return r("li",{key:o},[r("b-link",{on:{click:function(r){return t.answer(e)}}},[t._v(t._s(t.probname(e)))])],1)})),0):r("div",[t._v("無")])])],1),t._v(" "),r("b-collapse",{staticClass:"mt-1",attrs:{id:"collapse-2"}},[r("b-card",{attrs:{title:"作答題數 / 提交次數"}},[t.submits&&Object.keys(t.submits).length>0?r("ol",t._l(Object.keys(t.submits),(function(e,o){return r("li",{key:o},[r("b-link",{on:{click:function(r){return t.answer(e)}}},[t._v(t._s(t.probname(e)))])],1)})),0):r("div",[t._v("無")])])],1)],1)]),t._v(" "),r("section",[r("div",{staticClass:"scontent"},[r("div",{staticClass:"course"},[r("h1",[t._v("課程")]),t._v(" "),t._l(t.courses,(function(e,o){return r("div",{key:o},[t.path.course&&e.id===t.path.course.id?r("b-button",{key:o,attrs:{variant:"outline-success"},on:{click:function(r){return t.setCourse(e)}}},[t._v(t._s(e.name))]):r("b-button",{key:o,attrs:{variant:"outline-info"},on:{click:function(r){return t.setCourse(e)}}},[t._v(t._s(e.name))])],1)})),t._v(" "),r("b-button",{attrs:{pill:"",variant:"outline-success"},on:{click:t.selectCourse}},[r("fa",{attrs:{icon:"plus"}})],1)],2),t._v(" "),t.path.course?r("div",{staticClass:"group"},[r("h1",[t._v("單元")]),t._v(" "),t._l(t.currentGroups,(function(e,o){return r("div",{key:o},[t.groupSolved(e)?r("b-button",{key:o,attrs:{variant:"outline-success"},on:{click:function(r){return t.setGroup(e)}}},[t._v(t._s(t.grouptext(e)))]):r("b-button",{key:o,attrs:{variant:"outline-danger"},on:{click:function(r){return t.setGroup(e)}}},[t._v(t._s(t.grouptext(e)))])],1)}))],2):t._e(),t._v(" "),t.path.group?r("div",{staticClass:"problem"},[r("h1",[t._v("問題")]),t._v(" "),t._l(t.currentProblems,(function(e,o){return r("div",{key:o},[r("b-row",{staticClass:"ml-0"},[r("b-col",{attrs:{cols:"10"}},[t.psolved(e)?r("b-button",{key:o,staticClass:"ml-0",attrs:{variant:"outline-success"},on:{click:function(r){return t.answer(e)}}},[t._v(t._s(t.probname(e)))]):r("b-button",{key:o,staticClass:"ml-0",attrs:{variant:"outline-danger"},on:{click:function(r){return t.answer(e)}}},[t._v(t._s(t.probname(e)))])],1),t._v(" "),r("b-col",{attrs:{cols:"2"}},[r("b-button",{staticClass:"mr-0",attrs:{variant:"outline-info"},on:{click:function(r){return t.setProblem(e)}}},[r("fa",{attrs:{icon:"list"}})],1)],1)],1)],1)}))],2):t._e(),t._v(" "),t.path.problem?r("div",{staticClass:"submits"},[r("h1",[t._v("程式")]),t._v(" "),r("div",{staticClass:"overflow-auto"},[r("b-pagination",{attrs:{"total-rows":t.submitscount,"per-page":t.perpage,"aria-controls":"my-submits"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),t._l(t.pageSubmits,(function(e,o){return r("div",{key:o,attrs:{id:"my-submits"}},[t.submitAC(e)?r("b-button",{key:o,attrs:{variant:"outline-success"},on:{click:function(r){return t.showSubmit(e)}}},[r("span",{staticClass:"submitlabel"},[t._v(t._s((t.currentPage-1)*t.perpage+o+1)+". "+t._s(t.subtime(e)))])]):r("b-button",{key:o,attrs:{variant:"outline-danger"},on:{click:function(r){return t.showSubmit(e)}}},[r("span",{staticClass:"submitlabel"},[t._v(t._s((t.currentPage-1)*t.perpage+o+1)+". "+t._s(t.subtime(e)))])])],1)})),t._v(" "),t.problemSubmits&&0==t.problemSubmits.length?r("div",[r("p",{staticClass:"noanswer"},[t._v("尚未答題")])]):t._e()],2)]):t._e()])]),t._v(" "),t.showSubmitCode?r("section",[r("b-alert",{attrs:{variant:"warning",show:""}},[t._v("\n      程式碼  \n      "),r("b-link",[r("fa",{attrs:{icon:"times-circle"},on:{click:function(e){t.showSubmitCode=!1}}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-info"},on:{click:t.fixcode}},[t._v("修正")])],1),t._v(" "),r("b-form-textarea",{model:{value:t.submitCode,callback:function(e){t.submitCode=e},expression:"submitCode"}})],1):t._e(),t._v(" "),t.chooseCourse?r("section",[r("b-alert",{attrs:{variant:"warning",show:""}},[t._v("\n      可選課程  \n      "),r("b-link",[r("fa",{attrs:{icon:"times-circle"},on:{click:function(e){t.chooseCourse=!1}}})],1)],1),t._v(" "),t.showCodeInput?r("b-row",[r("b-col",{attrs:{md:"7"}},[r("b-input",{attrs:{type:"text",placeholder:"輸入代碼"},model:{value:t.inputCode,callback:function(e){t.inputCode=e},expression:"inputCode"}})],1),t._v(" "),r("b-col",{attrs:{md:"5"}},[r("b-button",{attrs:{variant:"outline-success"},on:{click:t.checkCode}},[t._v("輸入")]),t._v(" "),r("b-button",{attrs:{variant:"outline-success"},on:{click:t.cancelChoose}},[t._v("取消")])],1)],1):t._e(),t._v(" "),t._l(t.allcourses,(function(e,o){return r("span",{key:o},[t.notIn(e)?r("b-button",{key:o,attrs:{pill:"",variant:"outline-warning"},on:{click:function(r){return t.enterCode(e)}}},[t._v(t._s(e.name))]):t._e()],1)})),t._v(" "),t.courses&&t.courses.length===t.allcourses.length?r("span",[r("p",{attrs:{align:"center"}},[t._v("無可選課程")])]):t._e()],2):t._e()])}),[],!1,null,"0fd4fbee",null);e.a=component.exports},479:function(t,e,r){"use strict";var o=r(411);r.n(o).a},480:function(t,e,r){(t.exports=r(30)(!1)).push([t.i,".alert[data-v-30d482f3]{padding:10px;margin:24px 0 10px;text-align:center}",""])},513:function(t,e,r){"use strict";r.r(e);r(22);var o={data:function(){return{}},computed:{username:function(){return this.$store.state.comuser.name}},components:{UserCom:r(421).a}},n=(r(479),r(16)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{attrs:{fluid:""}},[e("b-alert",{attrs:{show:""}},[this._v(this._s(this.username))]),this._v(" "),e("UserCom")],1)}),[],!1,null,"30d482f3",null);e.default=component.exports}}]);