(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1091:function(t,e,r){"use strict";r(936)},1092:function(t,e,r){(e=r(57)(!1)).push([t.i,"div[data-v-7e41735e]{box-sizing:border-box;margin:0}.tbl-col[data-v-7e41735e]{display:flex;flex-flow:column nowrap;width:95%;min-width:40em;overflow:auto;border:2px solid grey;font-size:90%}.row[data-v-7e41735e]{height:2em;display:flex;flex-flow:row nowrap;justify-content:left;align-items:left}.row[data-v-7e41735e]:not(:first-child){border-top:1px solid #777}.row[data-v-7e41735e]:nth-child(2n){background-color:#eee}.row[data-v-7e41735e]:nth-child(odd){background-color:#fff}.td[data-v-7e41735e],.th[data-v-7e41735e],.tl[data-v-7e41735e]{display:flex;align-items:center;border:0;flex-shrink:0}.td[data-v-7e41735e],.th[data-v-7e41735e]{justify-content:center}.tl[data-v-7e41735e]{padding-left:1em;align-items:left}.th[data-v-7e41735e]{background-color:#aaa;color:#fff}.td[data-v-7e41735e]:not(:last-child),.th[data-v-7e41735e]:not(:last-child),.tl[data-v-7e41735e]:not(:last-child){border-right:1px solid #777}.wadj[data-v-7e41735e]{flex-grow:1}.wprob[data-v-7e41735e]{width:20em}.wscore[data-v-7e41735e]{width:6em}.wlink[data-v-7e41735e]{width:12em}",""]),t.exports=e},1160:function(t,e,r){var content=r(1373);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("af813230",content,!0,{sourceMap:!1})},1372:function(t,e,r){"use strict";r(1160)},1373:function(t,e,r){(e=r(57)(!1)).push([t.i,'.container-fluid[data-v-27183aae]{padding:48px;position:relative;margin:24px 0;border:1px solid green;border-radius:16px}h1[data-v-27183aae]{color:#00f;font-family:"Arial";font-size:100%;margin:24px 0 16px}.showPanel[data-v-27183aae]{margin:30px 30px 60px 45px}',""]),t.exports=e},1394:function(t,e,r){"use strict";r.r(e);r(14),r(36),r(25),r(30),r(87),r(27),r(15),r(88),r(49);var n=r(7),o=r(884),c=r(20),l={components:{ProblemList:r(941).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("playground").fetch();case 3:return n=e.sent,e.abrupt("return",{playground:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{updateRecord:!1,pgKey:"Coding",pgcourse:{},pgbase:{},pgproblems:[],mycoursesAll:{},tabIndex:0,localeText:{UserRecords_NoRecords:"尚未有任何學習記錄",UserRecords_TotalScore:"總共得分",UserRecords_Problem:"問題",UserRecords_Score:"得分",UserRecords_RecentRecords:"最近提交記錄",User_Playground:"練習廣場",UserRecords_ExpandAll:"全部展開",UserRecords_CollapseAll:"全部收合"}}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,d,f,h,v,m,x,_,y,w,i,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.dummy){e.next=9;break}return r=t.$user("id"),e.next=4,c.d.collection("users").doc(r).get();case 4:n=e.sent,(l=n.data()).id=r,t.$store.commit("setData",{name:"user",value:l}),t.$store.commit("setData",{name:"dummy",value:!0});case 9:if(t.localeText=t.$updateLocaleText(t.localeText),t.playground&&(d=t.playground.KEY,f=t.playground.DATA,t.pgproblems=o.a.decode(d,f)),h=t.$user("courses"),v=o.a.getNow().substring(0,8),m={},!h){e.next=30;break}h.playground&&(t.pgcourse=h.playground),e.t0=regeneratorRuntime.keys(h);case 17:if((e.t1=e.t0()).done){e.next=30;break}if("playground"!=(x=e.t1.value)){e.next=21;break}return e.abrupt("continue",17);case 21:return _=h[x],e.next=24,t.$store.dispatch("getCourse",x);case 24:if(y=e.sent,(w=JSON.parse(JSON.stringify(y))).units)for(i=0;i<w.units.length;i++)k=w.units[i],_.units&&_.units[k.name]&&(k.user=_.units[k.name]),k.cid=x,k.stylePoints=w.stylePoints,k.cname=w.name,i===w.units.length-1||v>=k.startDate&&v<=k.endDate?k.show=!0:k.show=!1;else w.units=[];m[x]=w,e.next=17;break;case 30:t.pgcourse&&t.pgcourse.units&&t.pgcourse.units.base||(t.pgcourse={name:"playground",units:{base:{}}}),t.mycoursesAll=m,t.$nextTick((function(){var e=t.$route.query.id;if(e){var r=Object.keys(t.mycoursesAll);t.tabIndex=r.indexOf(e)}else t.tabIndex=0}));case 33:case"end":return e.stop()}}),e)})))()},methods:{shownUnits:function(t){for(var e=t.slice().reverse(),r=o.a.getNow().substring(0,8),n=[],i=0;i<e.length;i++){var c=e[i];r>=c.startDate&&n.push(c)}return n},openAll:function(t){t.units&&t.units.forEach((function(t){return t.show=!0}))},closeAll:function(t){t.units&&t.units.forEach((function(t){return t.show=!1}))},checkRecordHasAC:function(t){if(!t)return!0;for(var e in t){var r=t[e];if(r.probs)for(var n in r.probs){var o=r.probs[n];if(o.last10&&o.last10[0].indexOf("/")>=0)return!0}}return!1},unitHover:function(t,e){e?(t.showSave=t.show,t.show=!0):t.show=t.showSave},unitColor:function(t){var e=o.a.getNow().substring(0,8);return e<t.startDate?"text-dark":e<=t.endDate?"text-primary":"text-dark"},doPGProblem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,d,f,h,v,m,x;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!((n=o.a.findIdPos(e.pgproblems,t.prob.id))>=0)){r.next=15;break}if(l=o.a.encode(e.pgKey,JSON.stringify(e.pgproblems[n])),d=e.pgcourse.queueNumber||3,f=void 0===e.pgcourse.stylePoints?2:e.pgcourse.stylePoints,h={courseID:"playground",courseName:"playground",courseUnit:"base",problem:l,courseQN:d,stylePoints:f},!t.smid){r.next=13;break}return r.next=9,c.d.collection("submits").doc(t.smid).get();case 9:v=r.sent,m=v.data(),x={lang:m.lang,code:m.code},h.initCode=x;case 13:e.$store.commit("setParam",{name:"probSet",value:h}),e.$router.push("/user/coding");case 15:case"end":return r.stop()}}),r)})))()},doProblem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,d,f,h,v,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=o.a.getNow().substring(0,8),l=o.a.encode(e.pgKey,JSON.stringify(t.prob)),d=void 0===t.stylePoints?2:t.stylePoints,f={courseID:t.cid,courseName:t.cname,courseUnit:t.unit,compilers:t.compilers,problem:l,stylePoints:d},n>t.endDate&&(f.practice=!0),!t.smid){r.next=12;break}return r.next=8,c.d.collection("submits").doc(t.smid).get();case 8:h=r.sent,v=h.data(),m={lang:v.lang,code:v.code},f.initCode=m;case 12:e.$store.commit("setParam",{name:"probSet",value:f}),e.$router.push("/user/coding");case 14:case"end":return r.stop()}}),r)})))()},probScore:function(t,e){return t.user&&t.user.probs&&t.user.probs[e.id]&&t.user.probs[e.id].score?t.user.probs[e.id].score:0},validDate:function(t){return o.a.getNow().substring(0,8)>=t.startDate},getUnits:function(t){return this.mycoursesAll[t]?this.mycoursesAll[t].units:[]},total:function(t){var e=0;if(t.units)for(var i=0;i<t.units.length;i++){var r=t.units[i];r.user&&(e+=r.user.score)}return e}}},d=(r(1372),r(56)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",[t.pgcourse||Object.keys(t.mycoursesAll).length>0?r("div",[r("b-tabs",{model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[t._l(t.mycoursesAll,(function(e,n){return r("b-tab",{key:n,attrs:{title:e.name}},[r("div",{staticClass:"ml-2 mr-4"},[r("h1",[t._v("\n                        "+t._s(t.localeText.UserRecords_TotalScore)+" =\n                        "+t._s(t.total(e))+"\n                        "),r("b-link",{staticClass:"ml-5",on:{click:function(r){return t.openAll(e)}}},[t._v(t._s(t.localeText.UserRecords_ExpandAll))]),t._v(" "),r("b-link",{staticClass:"ml-3",on:{click:function(r){return t.closeAll(e)}}},[t._v(t._s(t.localeText.UserRecords_CollapseAll))])],1),t._v(" "),t._l(t.shownUnits(e.units),(function(e,n){return r("div",{key:e.id},[r("div",{staticClass:"my-3"},[r("b-link",{staticClass:"mylink",class:t.unitColor(e),on:{click:function(t){e.show=!e.show}}},[t._v(t._s(n+1)+". "+t._s(e.name)+" ("+t._s(e.startDate)+"-"+t._s(e.endDate)+") SCORE =\n                                "),e.user?r("span",[t._v(t._s(e.user.score))]):r("span",[t._v("0")])]),t._v(" "),r("b-collapse",{staticClass:"mt-2 mb-4 ml-4",model:{value:e.show,callback:function(r){t.$set(e,"show",r)},expression:"unit.show"}},[r("problem-list",{attrs:{unit:e},on:{click:function(e){return t.doProblem(e)}}})],1)],1)])}))],2)])})),t._v(" "),r("b-tab",{attrs:{title:t.localeText.User_Playground}},[t.pgcourse.units&&t.pgcourse.units.base&&t.pgcourse.units.base.probs&&Object.keys(t.pgcourse.units.base.probs).length>0?r("div",{staticClass:"ml-2 mr-4"},[r("h1",[t._v("\n                        "+t._s(t.localeText.UserRecords_TotalScore)+" =\n                        "+t._s(t.pgcourse.units.base.score)+"\n                    ")]),t._v(" "),r("problem-list",{attrs:{unit:t.pgcourse.units.base},on:{click:t.doPGProblem}})],1):r("div",{staticClass:"ml-2 mt-4"},[t._v("\n                    "+t._s(t.localeText.UserRecords_NoRecords)+"\n                ")])])],2)],1):r("div",[t._v("\n        "+t._s(t.localeText.UserRecords_NoRecords)+"\n    ")])])}),[],!1,null,"27183aae",null);e.default=component.exports;installComponents(component,{ProblemList:r(941).default})},884:function(t,e,r){"use strict";r(10),r(14),r(87),r(9),r(885),r(29),r(15);var n=r(129),o=r.n(n),c={pad:function(t){return t<10?"0"+t:t},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var r=Math.floor(e/60);return e%=60,"".concat(this.pad(r),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],r=Object.keys(t);return r.sort(),r.forEach((function(r){e.push(Object.assign({id:r},t[r]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var r=JSON.parse(JSON.stringify(t)),n=t.id;delete r.id,e[n]=r})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var r=0;r<t.length;r++)if(e==t[r].id)return r;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},885:function(t,e,r){"use strict";var n=r(8),o=r(886).start;n({target:"String",proto:!0,forced:r(887)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},886:function(t,e,r){var n=r(50),o=r(232),c=r(52),l=Math.ceil,d=function(t){return function(e,r,d){var f,h,v=String(c(e)),m=v.length,x=void 0===d?" ":String(d),_=n(r);return _<=m||""==x?v:(f=_-m,(h=o.call(x,l(f/x.length))).length>f&&(h=h.slice(0,f)),t?v+h:h+v)}};t.exports={start:d(!1),end:d(!0)}},887:function(t,e,r){var n=r(128);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},936:function(t,e,r){var content=r(1092);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("27960cc4",content,!0,{sourceMap:!1})},941:function(t,e,r){"use strict";r.r(e);r(36),r(30);var n=r(48),o=r(884),c={props:{unit:Object},data:function(){return{compilers:["c","cpp","py","java"],stylePoints:2,inUnit:[],localeText:{UserRecords_NoRecords:"尚未有任何學習記錄",UserRecords_TotalScore:"總共得分",UserRecords_Problem:"問題",UserRecords_Score:"得分",UserRecords_RecentRecords:"最近提交記錄",AdminProblem_Playground:"練習廣場"}}},created:function(){"object"===Object(n.a)(this.unit.probs)?(this.inUnit=JSON.parse(JSON.stringify(this.unit)),this.inUnit.probs=o.a.obj2arr(this.unit.probs)):this.inUnit=this.unit,this.inUnit.compilers&&(this.compilers=this.inUnit.compilers),void 0!==this.inUnit.stylePoints&&(this.stylePoints=this.inUnit.stylePoints),this.localeText=this.$updateLocaleText(this.localeText)},methods:{history:function(p){return p.last10?p.last10:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].last10:[]},pass:function(p){return p.TP?p.TP>0:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].TP>0:0},score:function(p){return p.score?p.score:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].score:0},doPGProblem:function(t,e){var r=e;e&&e.indexOf("/")>=0&&(r=e.substring(2)),this.$emit("click",{cid:this.unit.cid,cname:this.unit.cname,unit:this.unit.name,compilers:this.compilers,stylePoints:this.stylePoints,prob:t,smid:r,startDate:this.unit.startDate,endDate:this.unit.endDate})}}},l=(r(1091),r(56)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"tbl-col"},[r("div",{staticClass:"row"},[r("div",{staticClass:"th wprob"},[t._v(t._s(t.localeText.UserRecords_Problem))]),t._v(" "),r("div",{staticClass:"th wscore"},[t._v(t._s(t.localeText.UserRecords_Score))]),t._v(" "),r("div",{staticClass:"th wadj"},[t._v(t._s(t.localeText.UserRecords_RecentRecords))])]),t._v(" "),t._l(t.inUnit.probs,(function(e,n){return r("div",{key:e.id,staticClass:"row"},[r("div",{staticClass:"tl wprob"},[r("span",[t._v(t._s(n+1)+".\n                    "),r("b-link",{staticClass:"ml-2",class:t.pass(e)?"text-success":"text-danger",on:{click:function(r){return t.doPGProblem(e)}}},[t._v(t._s(t.$selectUserLocaleText(e.title)))])],1)]),t._v(" "),r("div",{staticClass:"td wscore"},[r("span",{class:t.score(e)>60?"text-success":"text-danger",staticStyle:{display:"inline-block",width:"50px","text-align":"center"}},[t._v(t._s(t.score(e)))])]),t._v(" "),r("div",{staticClass:"tl wadj"},t._l(t.history(e),(function(n){return r("span",{key:n},[r("b-link",{staticClass:"mr-3",on:{click:function(r){return t.doPGProblem(e,n)}}},[n.indexOf("/")>=0?r("span",[r("span",{class:"1"==n.substring(0,1)?"text-success":"text-danger"},[t._v("\n                                "+t._s(n.substring(2,6))+"\n                            ")])]):r("span",[t._v(t._s(n.substring(0,4)))])])],1)})),0)])}))],2)])}),[],!1,null,"7e41735e",null);e.default=component.exports}}]);