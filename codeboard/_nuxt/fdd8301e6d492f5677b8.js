(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{323:function(t,e,r){var content=r(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("8705cb08",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";var n=r(323);r.n(n).a},337:function(t,e,r){(t.exports=r(29)(!1)).push([t.i,"h1[data-v-2caae499]{font-size:120%;margin-left:12px;color:#44f}section[data-v-2caae499]{margin-top:12px;padding:10px 0}.scontent[data-v-2caae499]{display:flex;padding:6px 0}.course[data-v-2caae499]{flex:0.15 1 180px}.course[data-v-2caae499],.group[data-v-2caae499]{border:1px solid #add8e6;border-radius:10px;padding:12px;margin:2px}.group[data-v-2caae499]{flex:0.15 1 200px}.problem[data-v-2caae499],.submits[data-v-2caae499]{flex:0.3 2 300px;border:1px solid #add8e6;border-radius:10px;padding:12px;margin:2px}.submitlabel[data-v-2caae499]{font-family:Courier New,Courier,monospace}.noanswer[data-v-2caae499]{margin:12px}.btn[data-v-2caae499]{margin:8px 12px;border-radius:10px}.chooseLabel[data-v-2caae499]{background:#fafad2;padding:10px 20px}input[data-v-2caae499]{margin-bottom:12px}textarea[data-v-2caae499]{margin:20px;width:97%;padding:20px 30px;height:500px;font-family:Courier New,Courier,monospace;-moz-tab-size:4;-o-tab-size:4;tab-size:4}",""])},338:function(t,e,r){var content=r(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("66b55ef4",content,!0,{sourceMap:!1})},347:function(t,e,r){"use strict";r(7),r(4),r(1),r(5),r(2),r(21),r(24),r(40);var n=r(10),o=r(0),c=(r(28),r(11)),l=r(58);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m,d,f,v,x,_={data:function(){return{name:"N/A",currentPage:1,perpage:5,allcourses:[],currentProblems:[],chooseCourse:!1,showCodeInput:!1,showSubmitCode:!1,inputCode:null,selected:null,submitCode:"載入中..."}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({problemSubmits:function(){if(!this.path.problem)return[];var t=this.path.problem.id,e=[];this.submits&&this.submits[t]&&(e=this.submits[t]);var r=e.slice();return r.sort(),r.reverse(),r},submitscount:function(){return this.problemSubmits?this.problemSubmits.length:1},pageSubmits:function(){return this.problemSubmits?this.problemSubmits.slice((this.currentPage-1)*this.perpage,this.currentPage*this.perpage):null},currentGroups:function(){return this.path.course&&this.groups?this.$store.getters["person/getListFromIds"]({list:this.groups,ids:this.path.course.groups}):[]}},Object(l.b)({comuser:function(t){return t.comuser},courses:function(t){return t.person.courses},groups:function(t){return t.person.groups},solved:function(t){return t.person.solved},problems:function(t){return t.person.problems},submits:function(t){return t.person.submits},path:function(t){return t.person.path},savecodes:function(t){return t.person.savecodes}})),mounted:(x=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("Comuser = ",this.comuser),this.comuser||this.$store.commit("setData",{key:"comuser",value:this.$store.state.user}),this.courses&&0!==this.courses.length){t.next=5;break}return t.next=5,this.$store.dispatch("person/getUserData",this.$store.state.comuser);case 5:!this.path.group&&this.courses&&this.courses.length>0?this.path.course?this.setCourse(this.path.course):(e=this.courses[this.courses.length-1],this.setCourse(e)):this.setGroup(this.path.group);case 6:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)}),methods:{submitAC:function(t){return"1"===t.split("/")[1]},showSubmit:function(t){var e=this;this.showSubmitCode=!0;var r=t.split("/");this.$store.dispatch("person/getSubmitCode",r[2]).then((function(t){e.submitCode=t}))},twod:function(t){return t<=9?"0"+t:t},subtime:function(t){var e=t.split("/"),r=e[0].substr(0,8)+"-"+e[0].substr(8);return"(".concat(e[2].slice(0,4),") ").concat(r)},groupSolved:function(t){if(!t.problems||0===t.problems.length)return!0;if(!this.solved)return!1;for(var i=0;i<t.problems.length;i++)if(this.solved.indexOf(t.problems[i])<0)return!1;return!0},psolved:function(t){var e=t.split("/")[1];return!(!this.solved||0===this.solved.length)&&this.solved.indexOf(e)>=0},problemsSolved:function(t){if(!this.solved||0===this.solved.length)return 0;for(var e=0,i=0;i<t.length;i++){var r=t[i];this.solved.indexOf(r)>=0&&e++}return e},grouptext:function(t){return t.problems?"".concat(t.name," -- \n          ").concat(this.problemsSolved(t.problems)," /\n          ").concat(t.problems.length):"".concat(t.name," -- 0/0")},addCourse:function(t){this.$store.dispatch("person/selectCourse",{course:t,user:this.comuser})},probText:function(t){var e=t.split("/");return e[2]+" -- "+e[3]+"次"},notIn:function(t){if(!this.courses)return!0;for(var i=0;i<this.courses.length;i++)if(t.id===this.courses[i].id)return!1;return!0},enterCode:function(t){t.code?(this.showCodeInput=!0,this.selected=t):(this.addCourse(t),this.chooseCourse=!1)},cancelChoose:function(){this.chooseCourse=!1,this.showCodeInput=!1},checkCode:function(){this.selected.code===this.inputCode?(this.addCourse(this.selected),this.selected=null,this.showCodeInput=!1,this.chooseCourse=!1):alert("代碼錯誤")},selectCourse:(v=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],r=this.courses.map((function(t){return t.id})),c.c.collection("courses").get().then((function(t){t.docs&&t.docs.forEach((function(t){if(r.indexOf(t.id)<0){var n=t.data();n.id=t.id,e.push(n)}}))})),this.allcourses=e,this.chooseCourse=!0;case 5:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),getItemByID:function(t,e){if(t)for(var i=0;i<t.length;i++){var r=t[i];if(r.id==e)return r}return null},setCourse:function(t){if(this.$store.commit("person/setPathItem",{key:"course",value:t}),t.groups){var e=this.getItemByID(this.groups,t.groups[t.groups.length-1]);this.setGroup(e)}else this.$store.commit("person/setPathItem",{key:"group",value:null})},setGroup:(f=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,i,c,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:if(r=this,this.$store.commit("person/setPathItem",{key:"group",value:e}),!e.problems){t.next=13;break}for(n=[],o=[],i=0;i<e.problems.length;i++)c=e.problems[i],l="".concat(i,"/").concat(c,"/"),r.problems[c]?l+="".concat(r.problems[c],"/"):(l+="載入中.../",o.push({idx:i,pid:c})),r.submits&&r.submits[c]?l+=r.submits[c].length:(l+="0",o.push({idx:i,pid:c})),n.push(l);return this.currentProblems=n,t.next=11,this.processCache(o);case 11:h=e.problems[0],this.setProblem("0/".concat(h,"/").concat(this.problems[h],"/0"));case 13:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)}),processCache:(d=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=this,n=regeneratorRuntime.mark((function t(i){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e[i],o="",t.next=4,c.c.collection("problems").doc(n.pid).get().then((function(t){var e=t.data();r.$store.commit("person/cacheProblem",{key:n.pid,value:e.name}),o=e.name}));case 4:c.c.collection("summary").where("type","==","submits").where("user","==",r.comuser.id).where("problem","==",n.pid).get().then((function(t){var e=0;if(t.docs&&t.docs.length>0){var c=t.docs[0].data();e=c.submits.length,r.$store.commit("person/cacheSubmits",{key:n.pid,value:c.submits}),r.$set(r.currentProblems,n.idx,"".concat(n.idx,"/").concat(n.pid,"/").concat(o,"/").concat(e))}else r.$set(r.currentProblems,n.idx,"".concat(n.idx,"/").concat(n.pid,"/").concat(o,"/0")),r.$store.commit("person/cacheSubmits",{key:n.pid,value:[]})})).catch((function(){r.$set(r.currentProblems,n.idx,"".concat(n.idx,"/").concat(n.pid,"/").concat(o,"/0")),r.$store.commit("person/cacheSubmits",{key:n.pid,value:[]})}));case 5:case"end":return t.stop()}}),t)})),i=0;case 3:if(!(i<e.length)){t.next=8;break}return t.delegateYield(n(i),"t0",5);case 5:i++,t.next=3;break;case 8:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),setProblem:(m=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:r=e.split("/"),n=r[1],o={id:n,name:r[2]},this.$store.commit("person/setPathItem",{key:"problem",value:o});case 7:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)}),fixcode:function(){this.$store.commit("person/saveCode",{id:this.path.problem.id,code:this.submitCode}),this.$router.push("/coding")},answer:function(t){var e=t.split("/"),r={id:e[1],name:e[2]};this.$store.commit("person/setPathItem",{key:"problem",value:r}),this.$router.push("/coding")},onLogout:function(){var t=this;this.$store.dispatch("logout").then((function(){t.$router.push("/")}))}}},C=(r(336),r(15)),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("section",[r("div",{staticClass:"scontent"},[r("div",{staticClass:"course"},[r("h1",[t._v("課程")]),t._v(" "),t._l(t.courses,(function(e,n){return r("div",{key:n},[t.path.course&&e.id===t.path.course.id?r("b-button",{key:n,attrs:{variant:"outline-success"},on:{click:function(r){return t.setCourse(e)}}},[t._v(t._s(e.name))]):r("b-button",{key:n,attrs:{variant:"outline-info"},on:{click:function(r){return t.setCourse(e)}}},[t._v(t._s(e.name))])],1)})),t._v(" "),r("b-button",{attrs:{pill:"",variant:"outline-success"},on:{click:t.selectCourse}},[r("fa",{attrs:{icon:"plus"}})],1)],2),t._v(" "),t.path.course?r("div",{staticClass:"group"},[r("h1",[t._v("單元")]),t._v(" "),t._l(t.currentGroups,(function(e,n){return r("div",{key:n},[t.groupSolved(e)?r("b-button",{key:n,attrs:{variant:"outline-success"},on:{click:function(r){return t.setGroup(e)}}},[t._v(t._s(t.grouptext(e)))]):r("b-button",{key:n,attrs:{variant:"outline-danger"},on:{click:function(r){return t.setGroup(e)}}},[t._v(t._s(t.grouptext(e)))])],1)}))],2):t._e(),t._v(" "),t.path.group?r("div",{staticClass:"problem"},[r("h1",[t._v("問題")]),t._v(" "),t._l(t.currentProblems,(function(e,n){return r("div",{key:n},[r("b-button",{staticClass:"mr-0",attrs:{variant:"outline-info"},on:{click:function(r){return t.answer(e)}}},[t._v("作答")]),t._v(" "),t.psolved(e)?r("b-button",{key:n,staticClass:"ml-0",attrs:{variant:"outline-success"},on:{click:function(r){return t.setProblem(e)}}},[t._v(t._s(t.probText(e)))]):r("b-button",{key:n,staticClass:"ml-0",attrs:{variant:"outline-danger"},on:{click:function(r){return t.setProblem(e)}}},[t._v(t._s(t.probText(e)))])],1)}))],2):t._e(),t._v(" "),t.path.problem?r("div",{staticClass:"submits"},[r("h1",[t._v("程式")]),t._v(" "),r("div",{staticClass:"overflow-auto"},[r("b-pagination",{attrs:{"total-rows":t.submitscount,"per-page":t.perpage,"aria-controls":"my-submits"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),t._l(t.pageSubmits,(function(e,n){return r("div",{key:n,attrs:{id:"my-submits"}},[t.submitAC(e)?r("b-button",{key:n,attrs:{variant:"outline-success"},on:{click:function(r){return t.showSubmit(e)}}},[r("span",{staticClass:"submitlabel"},[t._v(t._s((t.currentPage-1)*t.perpage+n+1)+". "+t._s(t.subtime(e)))])]):r("b-button",{key:n,attrs:{variant:"outline-danger"},on:{click:function(r){return t.showSubmit(e)}}},[r("span",{staticClass:"submitlabel"},[t._v(t._s((t.currentPage-1)*t.perpage+n+1)+". "+t._s(t.subtime(e)))])])],1)})),t._v(" "),t.problemSubmits&&0==t.problemSubmits.length?r("div",[r("p",{staticClass:"noanswer"},[t._v("尚未答題")])]):t._e()],2)]):t._e()])]),t._v(" "),t.showSubmitCode?r("section",[r("b-alert",{attrs:{variant:"warning",show:""}},[t._v("\n      程式碼  \n      "),r("b-link",[r("fa",{attrs:{icon:"times-circle"},on:{click:function(e){t.showSubmitCode=!1}}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-info"},on:{click:t.fixcode}},[t._v("修正")])],1),t._v(" "),r("b-form-textarea",{model:{value:t.submitCode,callback:function(e){t.submitCode=e},expression:"submitCode"}})],1):t._e(),t._v(" "),t.chooseCourse?r("section",[r("b-alert",{attrs:{variant:"warning",show:""}},[t._v("\n      可選課程  \n      "),r("b-link",[r("fa",{attrs:{icon:"times-circle"},on:{click:function(e){t.chooseCourse=!1}}})],1)],1),t._v(" "),t.showCodeInput?r("b-row",[r("b-col",{attrs:{md:"7"}},[r("b-input",{attrs:{type:"text",placeholder:"輸入代碼"},model:{value:t.inputCode,callback:function(e){t.inputCode=e},expression:"inputCode"}})],1),t._v(" "),r("b-col",{attrs:{md:"5"}},[r("b-button",{attrs:{variant:"outline-success"},on:{click:t.checkCode}},[t._v("輸入")]),t._v(" "),r("b-button",{attrs:{variant:"outline-success"},on:{click:t.cancelChoose}},[t._v("取消")])],1)],1):t._e(),t._v(" "),t._l(t.allcourses,(function(e,n){return r("span",{key:n},[t.notIn(e)?r("b-button",{key:n,attrs:{pill:"",variant:"outline-warning"},on:{click:function(r){return t.enterCode(e)}}},[t._v(t._s(e.name))]):t._e()],1)})),t._v(" "),t.courses&&t.courses.length===t.allcourses.length?r("span",[r("p",{attrs:{align:"center"}},[t._v("無可選課程")])]):t._e()],2):t._e()])}),[],!1,null,"2caae499",null);e.a=component.exports},397:function(t,e,r){"use strict";var n=r(338);r.n(n).a},398:function(t,e,r){(t.exports=r(29)(!1)).push([t.i,".alert[data-v-30d482f3]{padding:10px;margin:24px 0 10px;text-align:center}",""])},426:function(t,e,r){"use strict";r.r(e);r(21);var n={data:function(){return{}},computed:{username:function(){return this.$store.state.comuser.name}},components:{UserCom:r(347).a}},o=(r(397),r(15)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{attrs:{fluid:""}},[e("b-alert",{attrs:{show:""}},[this._v(this._s(this.username))]),this._v(" "),e("UserCom")],1)}),[],!1,null,"30d482f3",null);e.default=component.exports}}]);