(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1051:function(e,t,r){"use strict";r(902)},1052:function(e,t,r){(t=r(59)(!1)).push([e.i,'h1[data-v-664c7640]{color:#00f;font-family:"Arial";font-size:100%;margin:24px 0 16px}.showPanel[data-v-664c7640]{margin:30px 30px 60px 45px}',""]),e.exports=t},1085:function(e,t,r){"use strict";r.r(t);r(30),r(28),r(104),r(51);var n=r(9),o=r(841),c=r(34),l={components:{ProblemList:r(860).default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("playground").fetch();case 3:return n=t.sent,t.abrupt("return",{playground:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{pgKey:"Coding",pgcourse:{},pgbase:{},pgproblems:[],mycoursesAll:{},tabIndex:0,localeText:{UserRecords_NoRecords:"尚未有任何學習記錄",UserRecords_TotalScore:"總共得分",UserRecords_Problem:"問題",UserRecords_Score:"得分",UserRecords_RecentRecords:"最近提交記錄",AdminProblem_Playground:"練習廣場"}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,d,f,m,v,h,x,_,i,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.state.dummy){t.next=9;break}return r=e.$user("id"),t.next=4,c.d.collection("users").doc(r).get();case 4:n=t.sent,(l=n.data()).id=r,e.$store.commit("setData",{name:"user",value:l}),e.$store.commit("setData",{name:"dummy",value:!0});case 9:if(e.localeText=e.$updateLocaleText(e.localeText),e.playground&&(d=e.playground.KEY,f=e.playground.DATA,e.pgproblems=o.a.decode(d,f)),m=e.$user("courses"),v={},!m){t.next=28;break}m.playground&&(e.pgcourse=m.playground),t.t0=regeneratorRuntime.keys(m);case 16:if((t.t1=t.t0()).done){t.next=28;break}if("playground"!=(h=t.t1.value)){t.next=20;break}return t.abrupt("continue",16);case 20:return x=m[h],t.next=23,e.$store.dispatch("getCourse",h);case 23:if((_=t.sent).units)for(i=0;i<_.units.length;i++)w=_.units[i],x.units&&x.units[w.name]&&(w.user=x.units[w.name]),w.cid=h,w.cname=_.name;else _.units=[];v[h]=_,t.next=16;break;case 28:e.pgcourse&&e.pgcourse.units&&e.pgcourse.units.base||(e.pgcourse={name:"playground",units:{base:{}}}),e.mycoursesAll=v,e.$nextTick((function(){e.tabIndex=0}));case 31:case"end":return t.stop()}}),t)})))()},methods:{unitHover:function(e,t){t?(e.showSave=e.show,e.show=!0):e.show=e.showSave},unitColor:function(e){var t=o.a.getNow().substring(0,8);return t<e.startDate?"text-dark":t<=e.endDate?"text-primary":"text-dark"},doPGProblem:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,d,f,m,v,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!1,!((n=o.a.findIdPos(t.pgproblems,e.prob.id))>=0)){r.next=15;break}if(l=o.a.encode(t.pgKey,JSON.stringify(t.pgproblems[n])),d=t.pgcourse.queueNumber||3,f={courseID:"playground",courseName:"playground",courseUnit:"base",problem:l,courseQN:d},!e.smid){r.next=13;break}return r.next=9,c.d.collection("submits").doc(e.smid).get();case 9:m=r.sent,v=m.data(),h={lang:v.lang,code:v.code},f.initCode=h;case 13:t.$store.commit("setParam",{name:"probSet",value:f}),t.$router.push("/user/coding");case 15:case"end":return r.stop()}}),r)})))()},doProblem:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var l,d,f,m,v,h,x;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l=o.a.getNow().substring(0,8),d=o.a.encode(r.pgKey,JSON.stringify(t.prob)),f=e.queueNumber||3,m={courseID:t.cid,courseName:t.cname,courseUnit:t.unit,problem:d,courseQN:f},l>t.endDate&&(m.practice=!0),!t.smid){n.next=12;break}return n.next=8,c.d.collection("submits").doc(t.smid).get();case 8:v=n.sent,h=v.data(),x={lang:h.lang,code:h.code},m.initCode=x;case 12:r.$store.commit("setParam",{name:"probSet",value:m}),r.$router.push("/user/coding");case 14:case"end":return n.stop()}}),n)})))()},probScore:function(e,t){return e.user&&e.user.probs&&e.user.probs[t.id]&&e.user.probs[t.id].score?e.user.probs[t.id].score:0},validDate:function(e){return o.a.getNow().substring(0,8)>=e.startDate},getUnits:function(e){return this.mycoursesAll[e]?this.mycoursesAll[e].units:[]},total:function(e){var t=0;if(e.units)for(var i=0;i<e.units.length;i++){var r=e.units[i];r.user&&(t+=r.user.score)}return t}}},d=(r(1051),r(70)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"showPanel"},[e.pgcourse||Object.keys(e.mycoursesAll).length>0?r("div",[r("b-tabs",{model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[e._l(e.mycoursesAll,(function(t,n){return r("b-tab",{key:n,attrs:{title:t.name}},[r("div",{staticClass:"ml-2 mr-4"},[r("h1",[e._v("\n                        "+e._s(e.localeText.UserRecords_TotalScore)+" =\n                        "+e._s(e.total(t))+"\n                    ")]),e._v(" "),e._l(t.units,(function(n,o){return r("div",{key:n.id},[r("div",{staticClass:"my-3"},[r("b-link",{directives:[{name:"b-hover",rawName:"v-b-hover",value:function(t){return e.unitHover(n,t)},expression:"\n                                    (hover) => unitHover(unit, hover)\n                                "}],staticClass:"mylink",class:e.unitColor(n),on:{click:function(e){n.showSave=!n.showSave}}},[e._v(e._s(o+1)+". "+e._s(n.name)+" ("+e._s(n.startDate)+"-"+e._s(n.endDate)+") SCORE =\n                                "),n.user?r("span",[e._v(e._s(n.user.score))]):r("span",[e._v("0")])]),e._v(" "),r("b-collapse",{staticClass:"mt-2 mb-4",model:{value:n.show,callback:function(t){e.$set(n,"show",t)},expression:"unit.show"}},[r("problem-list",{attrs:{unit:n},on:{click:function(r){return e.doProblem(t,r)}}})],1)],1)])}))],2)])})),e._v(" "),r("b-tab",{attrs:{title:e.localeText.AdminProblem_Playground}},[e.pgcourse.units&&e.pgcourse.units.base&&e.pgcourse.units.base.probs&&Object.keys(e.pgcourse.units.base.probs).length>0?r("div",{staticClass:"ml-2 mr-4"},[r("h1",[e._v("\n                        "+e._s(e.localeText.UserRecords_TotalScore)+" =\n                        "+e._s(e.pgcourse.units.base.score)+"\n                    ")]),e._v(" "),r("problem-list",{attrs:{unit:e.pgcourse.units.base},on:{click:e.doPGProblem}})],1):r("div",{staticClass:"ml-2 mt-4"},[e._v("\n                    "+e._s(e.localeText.UserRecords_NoRecords)+"\n                ")])])],2)],1):r("div",[e._v("\n        "+e._s(e.localeText.UserRecords_NoRecords)+"\n    ")])])}),[],!1,null,"664c7640",null);t.default=component.exports;installComponents(component,{ProblemList:r(860).default})},841:function(e,t,r){"use strict";r(10),r(14),r(22),r(103),r(8),r(842),r(27),r(15);var n=r(227),o=r.n(n),c={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),n=e.id;delete r.id,t[n]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},842:function(e,t,r){"use strict";var n=r(7),o=r(843).start;n({target:"String",proto:!0,forced:r(844)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},843:function(e,t,r){var n=r(48),o=r(228),c=r(52),l=Math.ceil,d=function(e){return function(t,r,d){var f,m,v=String(c(t)),h=v.length,x=void 0===d?" ":String(d),_=n(r);return _<=h||""==x?v:(f=_-h,(m=o.call(x,l(f/x.length))).length>f&&(m=m.slice(0,f)),e?v+m:m+v)}};e.exports={start:d(!1),end:d(!0)}},844:function(e,t,r){var n=r(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},857:function(e,t,r){var content=r(869);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("29cd8a58",content,!0,{sourceMap:!1})},860:function(e,t,r){"use strict";r.r(t);r(30);var n=r(47),o=r(841),c={props:{unit:Object},data:function(){return{inUnit:[],localeText:{UserRecords_NoRecords:"尚未有任何學習記錄",UserRecords_TotalScore:"總共得分",UserRecords_Problem:"問題",UserRecords_Score:"得分",UserRecords_RecentRecords:"最近提交記錄",AdminProblem_Playground:"練習廣場"}}},created:function(){"object"===Object(n.a)(this.unit.probs)?(this.inUnit=JSON.parse(JSON.stringify(this.unit)),this.inUnit.probs=o.a.obj2arr(this.unit.probs)):this.inUnit=this.unit},methods:{history:function(p){return p.last5?p.last5:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].last5:[]},pass:function(p){return p.TP?p.TP>0:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].TP>0:0},score:function(p){return p.score?p.score:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].score:0},doPGProblem:function(e,t){this.$emit("click",{cid:this.unit.cid,cname:this.unit.cname,unit:this.unit.name,prob:e,smid:t,startDate:this.unit.startDate,endDate:this.unit.endDate})}}},l=(r(868),r(70)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"tbl-col"},[r("div",{staticClass:"row"},[r("div",{staticClass:"th wprob"},[e._v(e._s(e.localeText.UserRecords_Problem))]),e._v(" "),r("div",{staticClass:"th wscore"},[e._v(e._s(e.localeText.UserRecords_Score))]),e._v(" "),r("div",{staticClass:"th wadj"},[e._v(e._s(e.localeText.UserRecords_RecentRecords))])]),e._v(" "),e._l(e.inUnit.probs,(function(t,n){return r("div",{key:t.id,staticClass:"row"},[r("div",{staticClass:"tl wprob"},[r("span",[e._v(e._s(n+1)+".\n                    "),r("b-link",{staticClass:"ml-2",class:e.pass(t)?"text-success":"text-danger",on:{click:function(r){return e.doPGProblem(t)}}},[e._v(e._s(e.$selectUserLocaleText(t.title)))])],1)]),e._v(" "),r("div",{staticClass:"td wscore"},[r("span",{class:e.score(t)>60?"text-success":"text-danger",staticStyle:{display:"inline-block",width:"50px","text-align":"center"}},[e._v(e._s(e.score(t)))])]),e._v(" "),r("div",{staticClass:"tl wadj"},e._l(e.history(t),(function(n){return r("span",{key:n},[r("b-link",{staticClass:"mr-3",on:{click:function(r){return e.doPGProblem(t,n)}}},[e._v("\n                        "+e._s(n.substring(0,4))+"\n                    ")])],1)})),0)])}))],2)])}),[],!1,null,"aecaeb9a",null);t.default=component.exports},868:function(e,t,r){"use strict";r(857)},869:function(e,t,r){(t=r(59)(!1)).push([e.i,"div[data-v-aecaeb9a]{box-sizing:border-box;margin:0}.tbl-col[data-v-aecaeb9a]{display:flex;flex-flow:column nowrap;width:95%;min-width:40em;overflow:auto;border:2px solid grey;font-size:90%}.row[data-v-aecaeb9a]{height:2em;display:flex;flex-flow:row nowrap;justify-content:left;align-items:left}.row[data-v-aecaeb9a]:not(:first-child){border-top:1px solid #777}.row[data-v-aecaeb9a]:nth-child(2n){background-color:#eee}.row[data-v-aecaeb9a]:nth-child(odd){background-color:#fff}.td[data-v-aecaeb9a],.th[data-v-aecaeb9a],.tl[data-v-aecaeb9a]{display:flex;align-items:center;border:0;flex-shrink:0}.td[data-v-aecaeb9a],.th[data-v-aecaeb9a]{justify-content:center}.tl[data-v-aecaeb9a]{padding-left:1em;align-items:left}.th[data-v-aecaeb9a]{background-color:#aaa;color:#fff}.td[data-v-aecaeb9a]:not(:last-child),.th[data-v-aecaeb9a]:not(:last-child),.tl[data-v-aecaeb9a]:not(:last-child){border-right:1px solid #777}.wadj[data-v-aecaeb9a]{flex-grow:1}.wprob[data-v-aecaeb9a]{width:20em}.wscore[data-v-aecaeb9a]{width:6em}.wlink[data-v-aecaeb9a]{width:12em}",""]),e.exports=t},902:function(e,t,r){var content=r(1052);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("16e11f88",content,!0,{sourceMap:!1})}}]);