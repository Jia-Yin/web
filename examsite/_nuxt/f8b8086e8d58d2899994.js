(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{895:function(e,t,r){"use strict";r.r(t);r(5),r(2),r(3),r(1),r(4),r(738),r(59);var n=r(14),o=r(0),l=(r(742),r(737)),c=r(744),m=r(745),d=r(746),h=r(748),v=r(99);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var x={middleware:["authenticated"],layout:"answer",components:{RTSingle:c.a,RTFillin:m.a,FuncTest:d.a,ProgTest:h.a},data:function(){return{time:10,timer:null,index:0,numCorrect:0,totalScore:0,lastskip:1e6,skip:!1,finished:!1,problems:[],exam:null,listidx:[],record:{userid:null,examid:null,date:null,submits:[],score:0}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({ready:function(){return this.problems&&this.problems.length>0}},Object(v.b)({user:function(e){return e.user},quizzes:function(e){return e.quizzes}})),created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===e.$store.state.params.examid&&e.$router.push("/error"),t.next=3,e.$store.dispatch("getCollection","quizzes");case 3:e.$store.dispatch("getCollectionItem",{collection:"exams",id:e.$store.state.params.examid}).then((function(t){e.exam=t,e.setExam(),e.record.userid=e.user.id,e.record.examid=t.id,e.record.date=e.getToday(),e.score=0,e.submits=[]}));case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;console.log("Start Outer timer"),this.timer=setInterval((function(){e.time--,0===e.time&&e.leave()}),1e3)},methods:{skipproblem:function(){this.skip=!0},submit:function(e){var t=this;if(console.log("Answer = ",e),e.correct&&(this.totalScore+=this.problems[this.index].score),e.qid=this.problems[this.index].id,this.record.submits.push(e),this.record.score=this.totalScore,console.log("Record = ",this.record),0==this.index)this.$store.dispatch("createAnswer",this.record).then((function(e){console.log("FS: Answer created, id = ",e),t.record.id=e}));else{var data={id:this.record.id,updates:{submits:this.record.submits,score:this.totalScore}};this.$store.dispatch("updateAnswer",data).then((function(){console.log("FS: Answer updated!")}))}!this.finished&&this.index<this.problems.length-1?(this.skip=!1,this.index++):(console.log("Finished, Leave Out!"),this.leave())},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getquizscore:function(e,t){for(var i=0;i<e.probs.length;i++)if(t===e.probs[i].id)return e.probs[i].score;return 0},getquiztime:function(e,t){for(var i=0;i<e.probs.length;i++)if(t===e.probs[i].id)return e.probs[i].timelimit;return 30},convertarrtomap:function(e,t){return e.reduce((function(map,e){return map[e[t]]=e,map}),{})},setExam:function(){var e=this.convertarrtomap(this.quizzes,"id"),t=this.exam.probs.map((function(t){var r=JSON.parse(JSON.stringify(e[t.id]));return r.timelimit=t.timelimit,r.score=t.score,r.order=t.order,r}));t.sort((function(e,t){return e.order-t.order!=0?e.order-t.order:Math.random()-.5})),this.time=60*this.exam.timelimit,this.problems=t},leave:function(){var e=this;console.log("Clear Outer Timer"),clearInterval(this.timer),this.skip=!0,this.finished=!0,setTimeout((function(){e.$router.push("/end")}),100)},mmss:function(e){return l.a.mmss(e)},hhmmss:function(e){return l.a.hhmmss(e)}}},_=r(31),component=Object(_.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("b-navbar",{attrs:{variant:"light"}},[r("b-navbar-nav",{staticClass:"mr-auto"},[r("b-nav-text",{staticClass:"text-dark"},[e._v(e._s(e.user&&e.user.name))])],1),e._v(" "),r("b-navbar-nav",{staticClass:"mr-auto"},[r("b-nav-text",{staticClass:"text-primary"},[e._v("\n        總分 "+e._s(e.exam&&e.exam.totalscore)+"，限時 "+e._s(e.exam&&e.exam.timelimit)+" 分；  \n        本題 "+e._s(e.problems[e.index]&&e.problems[e.index].score)+"，\n        限時 "+e._s(e.problems[e.index]&&e.mmss(e.problems[e.index].timelimit))+"   \n        剩餘考試時間 "+e._s(e.hhmmss(e.time))+"\n      ")])],1),e._v(" "),r("b-navbar-nav",{staticClass:"mr-auto"},[r("b-button",{staticClass:"ml-3 btn-sm btn-outline-success",attrs:{variant:"outline-success"},on:{click:function(t){return e.skipproblem()}}},[e._v("跳過本題")]),e._v(" "),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-leave",modifiers:{"modal-leave":!0}}],staticClass:"ml-3 btn btn-sm btn-outline-danger",attrs:{variant:"outline-danger"}},[e._v("離開考場")]),e._v(" "),r("b-modal",{attrs:{id:"modal-leave",title:"溫馨提醒","ok-title":"確定","cancel-title":"取消","no-close-on-esc":!0,"no-close-on-backdrop":!0},on:{ok:function(t){return e.leave()}}},[r("p",{staticClass:"mt-4 text-danger"},[e._v("此視窗顯示時，計時不會暫停。")]),e._v(" "),r("p",{staticClass:"my-4 text-danger"},[e._v("\n          離開考場等於交卷，不得再次進入！\n          "),r("br"),e._v("確定要離開嗎？\n        ")])])],1),e._v(" "),r("b-navbar-nav",[r("b-nav-text",{staticClass:"text-dark"},[e._v(e._s(e.index+1)+" / "+e._s(e.problems&&e.problems.length))])],1)],1),e._v(" "),e.ready&&"singlechoice"==e.problems[e.index].type?r("RTSingle",{key:e.index,attrs:{shuffle:!0,times:e.problems[e.index].timelimit,quiz:e.problems[e.index],submit:e.submit,skip:e.skip}}):e._e(),e._v(" "),e.ready&&"fillin"==e.problems[e.index].type?r("RTFillin",{key:e.index,attrs:{times:e.problems[e.index].timelimit,quiz:e.problems[e.index],submit:e.submit,skip:e.skip}}):e._e(),e._v(" "),e.ready&&"functest"==e.problems[e.index].type?r("FuncTest",{key:e.index,attrs:{times:e.problems[e.index].timelimit,quiz:e.problems[e.index],submit:e.submit,skip:e.skip}}):e._e(),e._v(" "),e.ready&&"progtest"==e.problems[e.index].type?r("ProgTest",{key:e.index,attrs:{times:e.problems[e.index].timelimit,quiz:e.problems[e.index],submit:e.submit,skip:e.skip}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);