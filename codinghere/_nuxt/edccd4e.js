(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1116:function(e,t,r){var content=r(1326);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("23149100",content,!0,{sourceMap:!1})},1325:function(e,t,r){"use strict";r(1116)},1326:function(e,t,r){(t=r(56)(!1)).push([e.i,".rightBox[data-v-b1ee8ab8]{position:absolute;right:32px;top:14px;width:120px}.tabs[data-v-b1ee8ab8]{margin-right:60px}.container-fluid[data-v-b1ee8ab8]{position:relative;margin:0;padding:0}",""]),e.exports=t},1411:function(e,t,r){"use strict";r.r(t);r(39),r(18),r(156),r(30),r(49);var n=r(7),o=r(855),c=r(865),l=r(26),d={components:{ProblemSolver:c.default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=r.state.params.probSet,t.abrupt("return",{probSet:n});case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{submitid:"",submitList:null,problem:null,baseProblems:null,demo:!1,pgKey:"Coding",lang:"c",langs:"c,cpp,py",initCode:"",lastcode:{},localeText:{Coding_Problem:"問題",Coding_Code:"程式",Coding_Result:"結果",Coding_Reference:"參考"}}},computed:{teaching:function(){var e=this.$user("role");return"teacher"==e||"assistant"==e}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.problem=o.a.decode(this.pgKey,this.probSet.problem),this.probSet.initCode&&(this.initCode=this.probSet.initCode.code,this.lang=this.probSet.initCode.lang,this.lastcode={sourceLang:this.lang,sourceCode:this.initCode}),this.probSet.compilers&&(this.langs=this.probSet.compilers.join(",")),this.probSet.demo&&(this.demo=!0)},methods:{getBaseProblems:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.baseProblems){t.next=5;break}return t.next=3,l.d.collection("problems").doc("BASE").get();case 3:r=t.sent,e.baseProblems=r.data();case 5:case"end":return t.stop()}}),t)})))()},doSubmit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.problem=e.problem,t.lang=e.lang,t.initCode="",t.$nextTick((function(){t.initCode=e.code})),t.demo=!0;case 5:case"end":return r.stop()}}),r)})))()},searchSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,d,m,h,i,f,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=e.submitid.length)<4)){t.next=4;break}return alert("Code should have 4 chars!"),t.abrupt("return");case 4:return n=e.submitid.charCodeAt(r-1),o=e.submitid.substr(0,r-1)+String.fromCharCode(n+1),t.next=8,l.d.collection("submits").where(l.b.firestore.FieldPath.documentId(),">",e.submitid).where(l.b.firestore.FieldPath.documentId(),"<",o).get();case 8:if(!(c=t.sent).empty){t.next=12;break}return alert("No Match Results!"),t.abrupt("return");case 12:return d=c.docs,t.next=15,e.getBaseProblems();case 15:if(1!=d.length){t.next=20;break}return(m=d[0].data()).problem=e.baseProblems[m.pid],e.doSubmit(m),t.abrupt("return");case 20:h=[],i=0;case 22:if(!(i<d.length)){t.next=33;break}return(f=d[i].data()).problem=e.baseProblems[f.pid],t.next=27,l.d.collection("users").doc(f.uid).get();case 27:x=t.sent,f.user=x.data(),h.push(f);case 30:i++,t.next=22;break;case 33:e.submitList=h;case 34:case"end":return t.stop()}}),t)})))()},submit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var c,d,m,h,f,x,v,S,k,w,C,y,T,O,i,P,j;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c=e.cdata,d=e.result,c.sourceLang!==t.lastcode.sourceLang||c.sourceCode!==t.lastcode.sourceCode){r.next=3;break}return r.abrupt("return");case 3:if(t.lastcode={sourceLang:c.sourceLang,sourceCode:c.sourceCode},m=t.probSet.courseID,h={uid:t.$user("id"),pid:t.problem.id,cid:m,created:o.a.getNow(),lang:c.sourceLang,code:c.sourceCode,status:d.RunStatus,score:d.Score},!t.demo){r.next=9;break}return console.log("DEMO"),r.abrupt("return");case 9:return r.next=11,l.d.collection("submits").add(h);case 11:return f=r.sent,h.id=f.id,x=t.$user("id"),r.next=16,l.d.collection("users").doc(x).get();case 16:if(v=r.sent,(S=v.data()).id=x,t.$store.commit("setData",{name:"user",value:S}),k={},t.$user("courses")&&(k=t.$copyObject(t.$user("courses"))),k[m]&&k[m].units||(k[m]={name:t.probSet.courseName,units:{}}),k[m].units[t.probSet.courseUnit]||(k[m].units[t.probSet.courseUnit]={score:0,TS:0,TP:0,probs:{}}),w=k[m].units[t.probSet.courseUnit],(C=w.probs[h.pid])?y=t.$copyObject(C):(y={title:t.problem.title,TS:0,TP:0,score:0,last10:[]},w.probs[h.pid]=y),w.TS+=1,y.TS+=1,T="0/","AC"==h.status&&(w.TP+=1,y.TP+=1,T="1/"),!t.probSet.practice&&h.score>y.score&&(w.score+=h.score-y.score,y.score=h.score),y.last10.splice(0,0,T+h.id),!(y.last10.length>10)){r.next=48;break}if(!(y.last10[10].indexOf("1/")>=0)){r.next=47;break}O=!0,i=0;case 37:if(!(i<10)){r.next=44;break}if(!(y.last10[i].indexOf("1/")>=0)){r.next=41;break}return O=!1,r.abrupt("break",44);case 41:i++,r.next=37;break;case 44:O?y.last10.splice(9,1):y.last10.splice(10,1),r.next=48;break;case 47:y.last10.splice(10,1);case 48:return w.probs[h.pid]=y,r.next=51,l.d.collection("users").doc(t.$user("id")).update({courses:k,updated:o.a.getNow()});case 51:if(t.$store.commit("setObjItem",{obj:"user",name:"courses",value:k}),!t.probSet.practice){r.next=54;break}return r.abrupt("return");case 54:if("playground"===m){r.next=66;break}return P=l.d.collection("courses").doc(m),r.prev=56,r.next=59,l.d.runTransaction(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,c,l,d,f,x,u,v,S;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get(P);case 2:for(n=e.sent,c=n.data(),l=c.units,d={},c.scores&&(d=t.$copyObject(c.scores)),f=[],x=k[m].units,u=0;u<l.length;u++)v=l[u].name,x[v]?f.push(x[v].score):f.push(0);return d[h.uid]=f,S={scores:d,updated:o.a.getNow()},e.next=14,r.update(P,S);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 59:r.next=64;break;case 61:r.prev=61,r.t0=r.catch(56),console.log(r.t0);case 64:return r.next=66,t.$store.dispatch("getCourseT",m);case 66:return j=l.d.collection("problems").doc("STAT"),r.prev=67,r.next=70,l.d.runTransaction(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get(j);case 2:return(n=e.sent).exists?(l=n.data()).updated=o.a.getNow():(c={updated:o.a.getNow()},l=c),d=t.problem.id,l[d]||(l[d]={TS:0,TP:0}),l[d].TS+=1,"AC"==h.status&&(l[d].TP+=1),e.next=10,r.set(j,l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 70:r.next=75;break;case 72:r.prev=72,r.t1=r.catch(67),console.log(r.t1);case 75:case"end":return r.stop()}}),r,null,[[56,61],[67,72]])})))()}}},m=(r(1325),r(55)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"mt-1",attrs:{fluid:""}},[e.teaching?r("p",{staticClass:"rightBox"},[r("b-input",{attrs:{size:"sm",placeholder:"SubmitID"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchSubmit(t)}},model:{value:e.submitid,callback:function(t){e.submitid=t},expression:"submitid"}})],1):e._e(),e._v(" "),r("b-modal",{model:{value:e.submitList,callback:function(t){e.submitList=t},expression:"submitList"}},[r("p",{staticClass:"my-3"},[e._v("Which one?")]),e._v(" "),e._l(e.submitList,(function(t,n){return r("p",{key:t.id},[e._v("\n                "+e._s(n+1)+". "+e._s(t.user.name)+" -\n                "+e._s(e.$selectUserLocaleText(t.problem.title))+"\n            ")])}))],2),e._v(" "),r("problem-solver",{attrs:{problem:e.problem,initCode:e.initCode,lang:e.lang,langs:e.langs},on:{submit:e.submit}})],1)}),[],!1,null,"b1ee8ab8",null);t.default=component.exports;installComponents(component,{ProblemSolver:r(865).default})},855:function(e,t,r){"use strict";r(10),r(14),r(22),r(86),r(9),r(856),r(29),r(15);var n=r(228),o=r.n(n),c={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),n=e.id;delete r.id,t[n]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},856:function(e,t,r){"use strict";var n=r(8),o=r(857).start;n({target:"String",proto:!0,forced:r(858)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},857:function(e,t,r){var n=r(50),o=r(229),c=r(52),l=Math.ceil,d=function(e){return function(t,r,d){var m,h,f=String(c(t)),x=f.length,v=void 0===d?" ":String(d),S=n(r);return S<=x||""==v?f:(m=S-x,(h=o.call(v,l(m/v.length))).length>m&&(h=h.slice(0,m)),e?f+h:h+f)}};e.exports={start:d(!1),end:d(!0)}},858:function(e,t,r){var n=r(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},866:function(e,t,r){(t=r(56)(!1)).push([e.i,'.vdr{touch-action:none;border:1px dashed #000}.handle,.vdr{position:absolute;box-sizing:border-box}.handle{width:10px;height:10px;background:#eee;border:1px solid #333}.handle-tl{top:-10px;left:-10px;cursor:nw-resize}.handle-tm{top:-10px;left:50%;margin-left:-5px;cursor:n-resize}.handle-tr{top:-10px;right:-10px;cursor:ne-resize}.handle-ml{left:-10px;cursor:w-resize}.handle-ml,.handle-mr{top:50%;margin-top:-5px}.handle-mr{right:-10px;cursor:e-resize}.handle-bl{bottom:-10px;left:-10px;cursor:sw-resize}.handle-bm{bottom:-10px;left:50%;margin-left:-5px;cursor:s-resize}.handle-br{bottom:-10px;right:-10px;cursor:se-resize}@media only screen and (max-width:768px){[class*=handle-]:before{content:"";left:-10px;right:-10px;bottom:-10px;top:-10px;position:absolute}}',""]),e.exports=t},875:function(e,t,r){var content=r(866);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("649448c2",content,!0,{sourceMap:!1})}}]);