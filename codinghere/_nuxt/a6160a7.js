(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1030:function(e,t,r){"use strict";r(887)},1031:function(e,t,r){(t=r(59)(!1)).push([e.i,".tabs[data-v-f912c868]{margin-right:60px}.container-fluid[data-v-f912c868]{margin:16px}",""]),e.exports=t},1066:function(e,t,r){"use strict";r.r(t);r(22),r(156);var o=r(0),n=(r(54),r(14)),c=r(226),l=r(79),d=r(840),m=r(859),f=r(46);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var S={components:{ProblemSolver:m.default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,o=r.state.params.probSet,t.abrupt("return",{probSet:o});case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{problem:null,pgKey:"Coding",lang:"c",langs:"c,cpp,py",initCode:"",lastcode:{},localeText:{Coding_Problem:"問題",Coding_Code:"程式",Coding_Result:"結果",Coding_Reference:"參考"}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({user:function(e){return e.user},locale:function(e){return e.user.locale},system:function(e){return e.system},params:function(e){return e.params}})),created:function(){this.system.locales&&this.locale in this.system.locales.support&&(this.localeText=c.a.updateParams(this.system.locales[this.locale],this.localeText)),this.problem=d.a.decode(this.pgKey,this.probSet.problem),this.probSet.initCode&&(this.initCode=this.probSet.initCode.code,this.lang=this.probSet.initCode.lang,this.lastcode={sourceLang:this.lang,sourceCode:this.initCode})},methods:{submit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var o,n,c,l,m,h,S,O,y;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.cdata,n=e.result,o.sourceLang==t.lastcode.sourceLang&&o.sourceCode==t.lastcode.sourceCode){r.next=26;break}return t.lastcode={sourceLang:o.sourceLang,sourceCode:o.sourceCode},c={uid:t.user.id,pid:t.problem.id,created:d.a.getNow(),lang:o.sourceLang,code:o.sourceCode,status:n.RunStatus,score:n.Score},r.next=6,f.d.collection("submits").add(c);case 6:return l=r.sent,m=Object.assign({type:"submit"},c),r.next=10,f.d.collection("courses").doc(t.probSet.courseID).collection("tasks").doc(l.id).set(m);case 10:c.id=l.id,(h=t.user.courses?JSON.parse(JSON.stringify(t.user.courses)):{})[t.probSet.courseID]||(h[t.probSet.courseID]={name:t.probSet.courseName,units:{}}),h[t.probSet.courseID].units[t.probSet.courseUnit]||(h[t.probSet.courseID].units[t.probSet.courseUnit]={score:0,TS:0,TP:0,probs:{}}),S=h[t.probSet.courseID].units[t.probSet.courseUnit],(O=S.probs[c.pid])?y=JSON.parse(JSON.stringify(O)):(y={title:t.problem.title,TS:0,TP:0,score:0,last5:[]},S.probs[c.pid]=y),S.TS+=1,y.TS+=1,"AC"==c.status&&(S.TP+=1,y.TP+=1),c.score>y.score&&(S.score+=c.score-y.score,y.score=c.score),y.last5.splice(0,0,c.id),y.last5.length>5&&(y.last5=y.last5.slice(0,5)),S.probs[c.pid]=y,f.d.collection("users").doc(t.user.id).update({courses:h}),t.$store.commit("setObjItem",{obj:"user",name:"courses",value:h});case 26:case"end":return r.stop()}}),r)})))()}}},O=(r(1030),r(70)),component=Object(O.a)(S,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-container",{attrs:{fluid:""}},[t("problem-solver",{attrs:{problem:this.problem,initCode:this.initCode,lang:this.lang,langs:this.langs},on:{submit:this.submit}})],1)}),[],!1,null,"f912c868",null);t.default=component.exports;installComponents(component,{ProblemSolver:r(859).default})},887:function(e,t,r){var content=r(1031);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("921c4d06",content,!0,{sourceMap:!1})}}]);