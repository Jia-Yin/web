(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1121:function(e,t,r){var content=r(1335);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("5ef44314",content,!0,{sourceMap:!1})},1334:function(e,t,r){"use strict";r(1121)},1335:function(e,t,r){(t=r(56)(!1)).push([e.i,'.container-fluid[data-v-4997a038]{padding:48px;position:relative;margin:24px 0;border:1px solid green;border-radius:16px}h1[data-v-4997a038]{color:#00f;font-family:"Arial";font-size:100%;margin:24px 0 16px}.showPanel[data-v-4997a038]{margin:30px 30px 60px 45px}',""]),e.exports=t},1441:function(e,t,r){"use strict";r.r(t);r(14),r(36),r(156),r(30),r(86),r(27),r(15),r(87),r(49);var n=r(7),o=r(855),c=r(26),l={components:{ProblemList:r(911).default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("playground").fetch();case 3:return n=t.sent,t.abrupt("return",{playground:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{updateRecord:!1,courseToFix:null,showReconstruct:!1,pgKey:"Coding",pgcourse:{},pgbase:{},user:{},pgproblems:[],mycoursesAll:{},tabIndex:0,localeText:{UserRecords_NoRecords:"尚未有任何學習記錄",UserRecords_TotalScore:"總共得分",UserRecords_Problem:"問題",UserRecords_Score:"得分",UserRecords_RecentRecords:"最近提交記錄",User_Playground:"練習廣場",UserRecords_ExpandAll:"全部展開",UserRecords_CollapseAll:"全部收合",SYS_Cancel:"取消",SYS_OK:"確定",UserRecords_Reconstruct:"資料重建",UserRecords_ReconstructConfirm:"確定重建使用者資料嗎？"}}},computed:{uid:function(){return this.$route.query.uid},cid:function(){return this.$route.query.cid}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.localeText=e.$updateLocaleText(e.localeText),r=e.uid,t.next=4,c.d.collection("users").doc(r).get();case 4:return n=t.sent,e.user=n.data(),e.user.id=r,e.playground&&(l=e.playground.KEY,d=e.playground.DATA,e.pgproblems=o.a.decode(l,d)),t.next=10,e.updateUserRecords();case 10:case"end":return t.stop()}}),t)})))()},methods:{updateUserRecords:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,l,d,f,h,i,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.user.courses,n=o.a.getNow().substring(0,8),c={},!r){t.next=19;break}r.playground&&(e.pgcourse=r.playground),t.t0=regeneratorRuntime.keys(r);case 6:if((t.t1=t.t0()).done){t.next=19;break}if("playground"!=(l=t.t1.value)){t.next=10;break}return t.abrupt("continue",6);case 10:return d=r[l],t.next=13,e.$store.dispatch("getCourse",l);case 13:if(f=t.sent,(h=JSON.parse(JSON.stringify(f))).units)for(i=0;i<h.units.length;i++)m=h.units[i],d.units&&d.units[m.name]&&(m.user=d.units[m.name]),m.cid=l,m.cname=h.name,i===h.units.length-1||n>=m.startDate&&n<=m.endDate?m.show=!0:m.show=!1;else h.units=[];c[l]=h,t.next=6;break;case 19:e.pgcourse&&e.pgcourse.units&&e.pgcourse.units.base||(e.pgcourse={name:"playground",units:{base:{}}}),e.mycoursesAll=c,e.$nextTick((function(){var t=e.$route.query.id;if(t){var r=Object.keys(e.mycoursesAll);e.tabIndex=r.indexOf(t)}else e.tabIndex=0}));case 22:case"end":return t.stop()}}),t)})))()},openAll:function(e){e.units&&e.units.forEach((function(e){return e.show=!0}))},closeAll:function(e){e.units&&e.units.forEach((function(e){return e.show=!1}))},checkRecordHasAC:function(e){if(!e)return!0;for(var t in e){var r=e[t];if(r.probs)for(var n in r.probs){var o=r.probs[n];if(o.last10&&o.last10[0].indexOf("/")>=0)return!0}}return!1},reconstruct:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var l,d,f,h,m,v,x,_,w,k,y,R,S,i,T,U,C,O,P,j,D,N,A,$,E,I,J,M,Y;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==t){n.next=4;break}return r.courseToFix=e,r.showReconstruct=!0,n.abrupt("return");case 4:return r.showReconstruct=!1,n.next=7,c.d.collection("submits").where("cid","==",r.cid).where("uid","==",r.uid).orderBy("created").get();case 7:if(!(l=n.sent).empty){n.next=10;break}return n.abrupt("return");case 10:return d=[],l.docs.forEach((function(e){var t=e.data();t.id=e.id,d.push(t)})),n.next=14,c.d.collection("users").doc(r.uid).get();case 14:return f=n.sent,f.data(),n.next=18,c.d.collection("courses").doc(r.cid).get();case 18:h=n.sent,m=h.data(),v=m.problemSets,x={},n.t0=regeneratorRuntime.keys(v);case 23:if((n.t1=n.t0()).done){n.next=31;break}return _=n.t1.value,n.next=27,c.d.collection("problems").doc(_).get();case 27:if((w=n.sent).exists&&(k=w.data().problems))for(y in k)x[y]=k[y];n.next=23;break;case 31:if(R={},m.courses&&(R=r.$copyObject(m.courses)),R[r.cid]={name:m.name,units:{}},(S=m.units)&&0!==S.length){n.next=37;break}return n.abrupt("return");case 37:i=0;case 38:if(!(i<d.length)){n.next=95;break}T=d[i],U=T.pid,C=T.created.substring(0,8),O=null,P=null,j=!1,D=S.length-1;case 46:if(!(D>=0)){n.next=65;break}if(!((N=S[D]).startDate>C)){n.next=50;break}return n.abrupt("continue",62);case 50:A=0;case 51:if(!(A<N.probs.length)){n.next=60;break}if(N.probs[A].id!==U){n.next=57;break}return O=N,P=N.probs[A],N.endDate<C&&(j=!0),n.abrupt("break",60);case 57:A++,n.next=51;break;case 60:if(!O||!P){n.next=62;break}return n.abrupt("break",65);case 62:D--,n.next=46;break;case 65:if(!O||!P){n.next=92;break}if(R[r.cid].units[O.name]||(R[r.cid].units[O.name]={score:0,TS:0,TP:0,probs:{}}),$=R[r.cid].units[O.name],(E=$.probs[U])?I=r.$copyObject(E):(I={title:P.title,TS:0,TP:0,score:0,last10:[]},$.probs[U]=I),$.TS+=1,I.TS+=1,J="0/","AC"==T.status&&($.TP+=1,I.TP+=1,J="1/"),!j&&T.score>I.score&&($.score+=T.score-I.score,I.score=T.score),I.last10.splice(0,0,J+T.id),!(I.last10.length>10)){n.next=91;break}if(!(I.last10[10].indexOf("1/")>=0)){n.next=90;break}M=!0,Y=0;case 80:if(!(Y<10)){n.next=87;break}if(!(I.last10[Y].indexOf("1/")>=0)){n.next=84;break}return M=!1,n.abrupt("break",87);case 84:Y++,n.next=80;break;case 87:M?I.last10.splice(9,1):I.last10.splice(10,1),n.next=91;break;case 90:I.last10.splice(10,1);case 91:$.probs[U]=I;case 92:i++,n.next=38;break;case 95:return n.next=97,c.d.collection("users").doc(r.uid).update({courses:R,updated:o.a.getNow()});case 97:return r.user.courses=R,n.next=100,r.updateUserRecords();case 100:case"end":return n.stop()}}),n)})))()},unitHover:function(e,t){t?(e.showSave=e.show,e.show=!0):e.show=e.showSave},unitColor:function(e){var t=o.a.getNow().substring(0,8);return t<e.startDate?"text-dark":t<=e.endDate?"text-primary":"text-dark"},doPGProblem:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,d,f,h,m,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!((n=o.a.findIdPos(t.pgproblems,e.prob.id))>=0)){r.next=14;break}if(l=o.a.encode(t.pgKey,JSON.stringify(t.pgproblems[n])),d=t.pgcourse.queueNumber||3,f={courseID:"playground",courseName:"playground",courseUnit:"base",problem:l,courseQN:d},!e.smid){r.next=12;break}return r.next=8,c.d.collection("submits").doc(e.smid).get();case 8:h=r.sent,m=h.data(),v={lang:m.lang,code:m.code},f.initCode=v;case 12:t.$store.commit("setParam",{name:"probSet",value:f}),t.$router.push("/user/coding");case 14:case"end":return r.stop()}}),r)})))()},doProblem:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,d,f,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o.a.getNow().substring(0,8),n=o.a.encode(t.pgKey,JSON.stringify(e.prob)),l={courseID:e.cid,courseName:e.cname,courseUnit:e.unit,compilers:e.compilers,problem:n,demo:!0},!e.smid){r.next=10;break}return r.next=6,c.d.collection("submits").doc(e.smid).get();case 6:d=r.sent,f=d.data(),h={lang:f.lang,code:f.code},l.initCode=h;case 10:t.$store.commit("setParam",{name:"probSet",value:l}),t.$router.push("/user/coding");case 12:case"end":return r.stop()}}),r)})))()},probScore:function(e,t){return e.user&&e.user.probs&&e.user.probs[t.id]&&e.user.probs[t.id].score?e.user.probs[t.id].score:0},validDate:function(e){return o.a.getNow().substring(0,8)>=e.startDate},getUnits:function(e){return this.mycoursesAll[e]?this.mycoursesAll[e].units:[]},total:function(e){var t=0;if(e.units)for(var i=0;i<e.units.length;i++){var r=e.units[i];r.user&&(t+=r.user.score)}return t}}},d=(r(1334),r(55)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",[r("b-modal",{attrs:{title:e.localeText.UserRecords_Reconstruct,"hide-footer":""},model:{value:e.showReconstruct,callback:function(t){e.showReconstruct=t},expression:"showReconstruct"}},[r("p",[e._v(e._s(e.localeText.UserRecords_ReconstructConfirm))]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(t){e.showReconstruct=!1}}},[e._v(e._s(e.localeText.SYS_Cancel))]),e._v(" "),r("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:function(t){return e.reconstruct(null,1)}}},[e._v(e._s(e.localeText.SYS_OK))])],1),e._v(" "),e.pgcourse||Object.keys(e.mycoursesAll).length>0?r("div",[r("b-tabs",{model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[e._l(e.mycoursesAll,(function(t,n){return r("b-tab",{key:n,attrs:{title:t.name}},[r("div",{staticClass:"ml-2 mr-4"},[r("h1",[r("span",{staticClass:"mr-3"},[e._v(e._s(e.user.name))]),e._v("\n                        "+e._s(e.localeText.UserRecords_TotalScore)+" =\n                        "+e._s(e.total(t))+"\n                        "),r("b-link",{staticClass:"ml-5",on:{click:function(r){return e.openAll(t)}}},[e._v(e._s(e.localeText.UserRecords_ExpandAll))]),e._v(" "),r("b-link",{staticClass:"ml-3",on:{click:function(r){return e.closeAll(t)}}},[e._v(e._s(e.localeText.UserRecords_CollapseAll))])],1),e._v(" "),e._l(t.units.slice().reverse(),(function(t,n){return r("div",{key:t.id},[r("div",{staticClass:"my-3"},[r("b-link",{staticClass:"mylink",class:e.unitColor(t),on:{click:function(e){t.show=!t.show}}},[e._v(e._s(n+1)+". "+e._s(t.name)+" ("+e._s(t.startDate)+"-"+e._s(t.endDate)+") SCORE =\n                                "),t.user?r("span",[e._v(e._s(t.user.score))]):r("span",[e._v("0")])]),e._v(" "),r("b-collapse",{staticClass:"mt-2 mb-4 ml-4",model:{value:t.show,callback:function(r){e.$set(t,"show",r)},expression:"unit.show"}},[r("problem-list",{attrs:{unit:t},on:{click:function(t){return e.doProblem(t)}}})],1)],1)])}))],2)])})),e._v(" "),r("b-tab",{attrs:{title:e.localeText.User_Playground}},[e.pgcourse.units&&e.pgcourse.units.base&&e.pgcourse.units.base.probs&&Object.keys(e.pgcourse.units.base.probs).length>0?r("div",{staticClass:"ml-2 mr-4"},[r("h1",[r("span",{staticClass:"mr-3"},[e._v(e._s(e.user.name))]),e._v("\n                        "+e._s(e.localeText.UserRecords_TotalScore)+" =\n                        "+e._s(e.pgcourse.units.base.score)+"\n                    ")]),e._v(" "),r("problem-list",{attrs:{unit:e.pgcourse.units.base},on:{click:e.doPGProblem}})],1):r("div",{staticClass:"ml-2 mt-4"},[e._v("\n                    "+e._s(e.localeText.UserRecords_NoRecords)+"\n                ")])])],2)],1):r("div",[e._v("\n        "+e._s(e.localeText.UserRecords_NoRecords)+"\n    ")])],1)}),[],!1,null,"4997a038",null);t.default=component.exports;installComponents(component,{ProblemList:r(911).default})},855:function(e,t,r){"use strict";r(10),r(14),r(86),r(9),r(856),r(29),r(15);var n=r(228),o=r.n(n),c={pad:function(e){return e<10?"0"+e:e},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),n=e.id;delete r.id,t[n]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},856:function(e,t,r){"use strict";var n=r(8),o=r(857).start;n({target:"String",proto:!0,forced:r(858)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},857:function(e,t,r){var n=r(50),o=r(229),c=r(52),l=Math.ceil,d=function(e){return function(t,r,d){var f,h,m=String(c(t)),v=m.length,x=void 0===d?" ":String(d),_=n(r);return _<=v||""==x?m:(f=_-v,(h=o.call(x,l(f/x.length))).length>f&&(h=h.slice(0,f)),e?m+h:h+m)}};e.exports={start:d(!1),end:d(!0)}},858:function(e,t,r){var n=r(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},906:function(e,t,r){var content=r(925);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("688748ce",content,!0,{sourceMap:!1})},911:function(e,t,r){"use strict";r.r(t);r(36),r(30);var n=r(48),o=r(855),c={props:{unit:Object},data:function(){return{compilers:["c","cpp","py"],inUnit:[],localeText:{UserRecords_NoRecords:"尚未有任何學習記錄",UserRecords_TotalScore:"總共得分",UserRecords_Problem:"問題",UserRecords_Score:"得分",UserRecords_RecentRecords:"最近提交記錄",AdminProblem_Playground:"練習廣場"}}},created:function(){"object"===Object(n.a)(this.unit.probs)?(this.inUnit=JSON.parse(JSON.stringify(this.unit)),this.inUnit.probs=o.a.obj2arr(this.unit.probs)):this.inUnit=this.unit,this.inUnit.compilers&&(this.compilers=this.inUnit.compilers),this.localeText=this.$updateLocaleText(this.localeText)},methods:{history:function(p){return p.last10?p.last10:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].last10:[]},pass:function(p){return p.TP?p.TP>0:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].TP>0:0},score:function(p){return p.score?p.score:this.unit.user&&this.unit.user.probs&&this.unit.user.probs[p.id]?this.unit.user.probs[p.id].score:0},doPGProblem:function(e,t){var r=t;t&&t.indexOf("/")>=0&&(r=t.substring(2)),this.$emit("click",{cid:this.unit.cid,cname:this.unit.cname,unit:this.unit.name,compilers:this.compilers,prob:e,smid:r,startDate:this.unit.startDate,endDate:this.unit.endDate})}}},l=(r(924),r(55)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"tbl-col"},[r("div",{staticClass:"row"},[r("div",{staticClass:"th wprob"},[e._v(e._s(e.localeText.UserRecords_Problem))]),e._v(" "),r("div",{staticClass:"th wscore"},[e._v(e._s(e.localeText.UserRecords_Score))]),e._v(" "),r("div",{staticClass:"th wadj"},[e._v(e._s(e.localeText.UserRecords_RecentRecords))])]),e._v(" "),e._l(e.inUnit.probs,(function(t,n){return r("div",{key:t.id,staticClass:"row"},[r("div",{staticClass:"tl wprob"},[r("span",[e._v(e._s(n+1)+".\n                    "),r("b-link",{staticClass:"ml-2",class:e.pass(t)?"text-success":"text-danger",on:{click:function(r){return e.doPGProblem(t)}}},[e._v(e._s(e.$selectUserLocaleText(t.title)))])],1)]),e._v(" "),r("div",{staticClass:"td wscore"},[r("span",{class:e.score(t)>60?"text-success":"text-danger",staticStyle:{display:"inline-block",width:"50px","text-align":"center"}},[e._v(e._s(e.score(t)))])]),e._v(" "),r("div",{staticClass:"tl wadj"},e._l(e.history(t),(function(n){return r("span",{key:n},[r("b-link",{staticClass:"mr-3",on:{click:function(r){return e.doPGProblem(t,n)}}},[n.indexOf("/")>=0?r("span",[r("span",{class:"1"==n.substring(0,1)?"text-success":"text-danger"},[e._v("\n                                "+e._s(n.substring(2,6))+"\n                            ")])]):r("span",[e._v(e._s(n.substring(0,4)))])])],1)})),0)])}))],2)])}),[],!1,null,"3d7ee7ea",null);t.default=component.exports},924:function(e,t,r){"use strict";r(906)},925:function(e,t,r){(t=r(56)(!1)).push([e.i,"div[data-v-3d7ee7ea]{box-sizing:border-box;margin:0}.tbl-col[data-v-3d7ee7ea]{display:flex;flex-flow:column nowrap;width:95%;min-width:40em;overflow:auto;border:2px solid grey;font-size:90%}.row[data-v-3d7ee7ea]{height:2em;display:flex;flex-flow:row nowrap;justify-content:left;align-items:left}.row[data-v-3d7ee7ea]:not(:first-child){border-top:1px solid #777}.row[data-v-3d7ee7ea]:nth-child(2n){background-color:#eee}.row[data-v-3d7ee7ea]:nth-child(odd){background-color:#fff}.td[data-v-3d7ee7ea],.th[data-v-3d7ee7ea],.tl[data-v-3d7ee7ea]{display:flex;align-items:center;border:0;flex-shrink:0}.td[data-v-3d7ee7ea],.th[data-v-3d7ee7ea]{justify-content:center}.tl[data-v-3d7ee7ea]{padding-left:1em;align-items:left}.th[data-v-3d7ee7ea]{background-color:#aaa;color:#fff}.td[data-v-3d7ee7ea]:not(:last-child),.th[data-v-3d7ee7ea]:not(:last-child),.tl[data-v-3d7ee7ea]:not(:last-child){border-right:1px solid #777}.wadj[data-v-3d7ee7ea]{flex-grow:1}.wprob[data-v-3d7ee7ea]{width:20em}.wscore[data-v-3d7ee7ea]{width:6em}.wlink[data-v-3d7ee7ea]{width:12em}",""]),e.exports=t}}]);