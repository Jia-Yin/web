(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1135:function(e,t,r){var content=r(1325);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("355f632d",content,!0,{sourceMap:!1})},1324:function(e,t,r){"use strict";r(1135)},1325:function(e,t,r){(t=r(57)(!1)).push([e.i,".probLabel[data-v-a003a256]{padding:12px 18px;margin:48px auto -48px}.probBut[data-v-a003a256]{width:100%}",""]),e.exports=t},1426:function(e,t,r){"use strict";r.r(t);r(30),r(47),r(49);var n=r(7),o=r(26),c=r(884),l={components:{ProblemSolver:r(891).default},data:function(){return{contestName:"c2021",showCorrect:!1,correctNum:0,first:!0,curProblem:null,curCode:"",curLang:"c",codes:{},dummy:0,answers:{},time:10,totalScore:0,finished:!1,problems:[],exam:null,record:{userid:null,examid:null,date:null,submits:{},score:0},recordId:null}},computed:{tick:function(){return this.$store.state.params.tick},eid:function(){return this.$store.state.vparams.exam.examid},cid:function(){return this.$store.state.vparams.exam.courseid}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.collection("contests").doc(e.contestName).get();case 2:r=t.sent,e.exam=r.data().exam,e.setExam();case 5:case"end":return t.stop()}}),t)})))()},methods:{probColor:function(e){return e&&e.id&&this.curProblem?this.answers[e.id]&&this.answers[e.id].correct?e.id===this.curProblem.id?"success":"outline-success":this.answers[e.id]&&!this.answers[e.id].correct?e.id===this.curProblem.id?"danger":"outline-danger":e.id===this.curProblem.id?"info":"outline-info":"outline-info"},getCode:function(data){this.codes[this.curProblem.id]=data},selectProblem:function(e){this.dummy+=1;var t=this;window.setTimeout((function(){t.curProblem=e,t.curCode="   ",t.curLang="None",t.$nextTick((function(){t.codes[e.id]||(t.codes[e.id]={code:"",lang:"c"}),t.curCode=t.codes[e.id].code,t.curLang=t.codes[e.id].lang}))}),100)},submit:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=data.cdata,n=data.result,!(o=e.answers[e.curProblem.id])||r.sourceLang!==o.lang||r.sourceCode!==o.uans){t.next=5;break}return t.abrupt("return");case 5:if(!o||!o.correct){t.next=7;break}return t.abrupt("return");case 7:c={correct:"AC"===n.RunStatus,uans:r.sourceCode,lang:r.sourceLang,usetime:60*e.exam.tlimit-e.time},e.answers[e.curProblem.id]=c,c.correct&&(e.correctNum+=1,e.totalScore+=1e5),e.record.score=e.totalScore,e.first&&!e.reExam&&(e.record.submits=e.answers,e.first=!1),c.correct&&(e.showCorrect=!0);case 13:case"end":return t.stop()}}),t)})))()},checkFinish:function(){this.correctNum===this.problems.length&&this.leave()},setExam:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.time=60*e.exam.tlimit,e.problems=e.$copyObject(e.exam.probs),e.record.userid=e.$user("id"),e.record.examid=e.contestName,e.record.examname=e.exam.name,e.record.date=c.a.getToday(),e.record.finish=!1,e.curProblem=e.problems[0],e.codes[e.curProblem.id]={lang:"c",code:""};case 9:case"end":return t.stop()}}),t)})))()},leave:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.record.score+=e.time,e.record.finish=!0,console.log("Records",e.record),e.$router.push("/contest/".concat(e.contestName,"/admin"));case 4:case"end":return t.stop()}}),t)})))()},mmss:function(e){return c.a.mmss(e)},hhmmss:function(e){return c.a.hhmmss(e)}},watch:{tick:function(e){this.time--,0===this.time&&this.leave()}}},d=(r(1324),r(56)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-modal",{attrs:{title:"通過"},on:{ok:e.checkFinish,cancel:e.checkFinish,hidden:e.checkFinish},model:{value:e.showCorrect,callback:function(t){e.showCorrect=t},expression:"showCorrect"}},[r("p",[e._v("本題已完成！")]),e._v(" "),e.correctNum===e.problems.length?r("p",[e._v("\n            恭喜已完成所有題目！\n        ")]):e._e()]),e._v(" "),r("b-modal",{attrs:{id:"modal-leave",title:"溫馨提醒","ok-title":"確定","cancel-title":"取消","no-close-on-esc":!0,"no-close-on-backdrop":!0},on:{ok:function(t){return e.leave()}}},[r("p",{staticClass:"mt-4 text-danger"},[e._v("此視窗顯示時，計時不會暫停。")]),e._v(" "),r("p",{staticClass:"my-4 text-danger"},[e._v("\n            離開考場等於交卷，不得再次進入！\n            "),r("br"),e._v("確定要離開嗎？\n        ")])]),e._v(" "),r("b-row",{staticClass:"mt-3"},[r("b-col",{attrs:{cols:"3"}},e._l(e.problems,(function(t,n){return r("div",{key:t.key,staticClass:"probLabel"},[r("b-button",{staticClass:"probBut",attrs:{variant:e.probColor(t)},on:{click:function(r){return e.selectProblem(t)}}},[e._v("\n                    "+e._s(n+1)+" - "+e._s(e.$selectUserLocaleText(t.title))+"\n                ")])],1)})),0),e._v(" "),r("b-col",{attrs:{cols:"9"}},[r("div",{staticClass:"d-flex justify-content-around mb-3"},[r("span",[e._v("\n                "+e._s(e.exam&&e.exam.name)+"   \n                ")]),e._v(" "),r("span",[e._v("\n                限時 "+e._s(e.exam&&e.exam.tlimit)+" 分鐘，剩餘考試時間 "+e._s(e.hhmmss(e.time)))]),e._v(" "),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-leave",modifiers:{"modal-leave":!0}}],staticClass:"ml-4 btn btn-sm btn-outline-danger",attrs:{variant:"outline-danger"}},[e._v("離開考場")]),e._v(" "),r("span",[e._v(e._s(e.$user("name")))])],1),e._v(" "),e.curProblem&&e.curProblem?r("div",[r("problem-solver",{attrs:{problem:e.curProblem,initCode:e.curCode,lang:e.curLang,dummy:e.dummy},on:{submit:e.submit,getCode:e.getCode}})],1):r("div",[e._v("\n                Loading...\n            ")])])],1)],1)}),[],!1,null,"a003a256",null);t.default=component.exports;installComponents(component,{ProblemSolver:r(891).default})},884:function(e,t,r){"use strict";r(10),r(14),r(87),r(9),r(885),r(29),r(15);var n=r(129),o=r.n(n),c={pad:function(e){return e<10?"0"+e:e},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),n=e.id;delete r.id,t[n]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},885:function(e,t,r){"use strict";var n=r(8),o=r(886).start;n({target:"String",proto:!0,forced:r(887)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},886:function(e,t,r){var n=r(50),o=r(232),c=r(52),l=Math.ceil,d=function(e){return function(t,r,d){var m,h,f=String(c(t)),v=f.length,x=void 0===d?" ":String(d),w=n(r);return w<=v||""==x?f:(m=w-v,(h=o.call(x,l(m/x.length))).length>m&&(h=h.slice(0,m)),e?f+h:h+f)}};e.exports={start:d(!1),end:d(!0)}},887:function(e,t,r){var n=r(128);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},897:function(e,t,r){(t=r(57)(!1)).push([e.i,'.vdr{touch-action:none;border:1px dashed #000}.handle,.vdr{position:absolute;box-sizing:border-box}.handle{width:10px;height:10px;background:#eee;border:1px solid #333}.handle-tl{top:-10px;left:-10px;cursor:nw-resize}.handle-tm{top:-10px;left:50%;margin-left:-5px;cursor:n-resize}.handle-tr{top:-10px;right:-10px;cursor:ne-resize}.handle-ml{left:-10px;cursor:w-resize}.handle-ml,.handle-mr{top:50%;margin-top:-5px}.handle-mr{right:-10px;cursor:e-resize}.handle-bl{bottom:-10px;left:-10px;cursor:sw-resize}.handle-bm{bottom:-10px;left:50%;margin-left:-5px;cursor:s-resize}.handle-br{bottom:-10px;right:-10px;cursor:se-resize}@media only screen and (max-width:768px){[class*=handle-]:before{content:"";left:-10px;right:-10px;bottom:-10px;top:-10px;position:absolute}}',""]),e.exports=t},904:function(e,t,r){var content=r(897);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("649448c2",content,!0,{sourceMap:!1})}}]);