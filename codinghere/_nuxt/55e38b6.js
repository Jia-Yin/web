(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1131:function(t,e,r){var n=r(8),o=r(1132);n({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},1132:function(t,e,r){var n=r(23),o=r(234).trim,c=r(235),l=n.parseFloat,d=1/l(c+"-0")!=-1/0;t.exports=d?function(t){var e=o(String(t)),r=l(e);return 0===r&&"-"==e.charAt(0)?-0:r}:l},1133:function(t,e,r){"use strict";r(952)},1134:function(t,e,r){(e=r(57)(!1)).push([t.i,".container-fluid[data-v-010f9fbd]{padding:48px;position:relative;margin:24px 0;border:1px solid green;border-radius:16px}h1[data-v-010f9fbd]{font-size:120%;color:#00f;margin:24px 60px 24px 0;border-bottom:1px solid #00f}[data-v-010f9fbd] .itemList{margin:12px 0}",""]),t.exports=e},1237:function(t,e,r){"use strict";r.r(e);r(379),r(1131),r(163),r(49);var n=r(7),o=r(27),c=r(884),l={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("playground").fetch();case 3:return n=e.sent,e.abrupt("return",{playground:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{pgKey:"Coding",problems:[],stats:{},infoAlert:!1,info:{title:"",message:""},locales:{zh:"中文"},fields:[{key:"id",sortable:!0},{key:"title"}],localeText:{Playground_Title:"練習廣場"}}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,d,f,m,h,v,x,i,y,S;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.localeText=t.$updateLocaleText(t.localeText),t.playground&&(r=t.playground.KEY,n=t.playground.DATA,t.problems=c.a.decode(r,n)),(l=t.$user("courses"))&&l.playground)for(f in d=l.playground.units.base.probs)m="danger",d[f].score>=60&&(m="success"),(h=c.a.findIdPos(t.problems,f))>=0&&(t.problems[h].variant=m);return e.next=6,o.d.collection("problems").doc("STAT").get();case 6:if((v=e.sent).exists){for(x=v.data(),i=0;i<t.problems.length;i++)y=t.problems[i],(S=x[y.id])&&(t.$set(y,"total",S.TS),t.$set(y,"pass",S.TP),0!==S.TS?t.$set(y,"rate",Number.parseFloat(S.TP/S.TS).toFixed(3)):t.$set(y,"rate",0));t.stats=v.data()}case 8:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{doProblem:function(data){var p=data.item,t=c.a.encode(this.pgKey,JSON.stringify(p)),e=p.queueNumber||3,r=void 0===p.stylePoints?2:p.stylePoints;this.$store.commit("setParam",{name:"probSet",value:{courseID:"playground",courseName:"playground",courseUnit:"base",problem:t,courseQN:e,stylePoints:r}}),this.$router.push("/user/coding")}}},d=(r(1133),r(56)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",[r("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message))]),t._v(" "),r("b-table",{attrs:{items:t.problems,fields:t.fields,small:""},scopedSlots:t._u([{key:"cell(id)",fn:function(data){return[r("b-link",{on:{click:function(e){return t.doProblem(data)}}},[t._v(t._s(t.$selectUserLocaleText(data.value)))])]}},{key:"cell(title)",fn:function(data){return[r("b-link",{on:{click:function(e){return t.doProblem(data)}}},[t._v(t._s(t.$selectUserLocaleText(data.value)))])]}}])})],1)}),[],!1,null,"010f9fbd",null);e.default=component.exports},884:function(t,e,r){"use strict";r(10),r(14),r(87),r(9),r(885),r(29),r(15);var n=r(129),o=r.n(n),c={pad:function(t){return t<10?"0"+t:t},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var r=Math.floor(e/60);return e%=60,"".concat(this.pad(r),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],r=Object.keys(t);return r.sort(),r.forEach((function(r){e.push(Object.assign({id:r},t[r]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var r=JSON.parse(JSON.stringify(t)),n=t.id;delete r.id,e[n]=r})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var r=0;r<t.length;r++)if(e==t[r].id)return r;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},885:function(t,e,r){"use strict";var n=r(8),o=r(886).start;n({target:"String",proto:!0,forced:r(887)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},886:function(t,e,r){var n=r(50),o=r(232),c=r(52),l=Math.ceil,d=function(t){return function(e,r,d){var f,m,h=String(c(e)),v=h.length,x=void 0===d?" ":String(d),y=n(r);return y<=v||""==x?h:(f=y-v,(m=o.call(x,l(f/x.length))).length>f&&(m=m.slice(0,f)),t?h+m:m+h)}};t.exports={start:d(!1),end:d(!0)}},887:function(t,e,r){var n=r(128);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},952:function(t,e,r){var content=r(1134);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("422a64f8",content,!0,{sourceMap:!1})}}]);