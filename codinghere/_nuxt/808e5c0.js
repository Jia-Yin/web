(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1123:function(e,t,n){var content=n(1332);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("7b40f7a6",content,!0,{sourceMap:!1})},1331:function(e,t,n){"use strict";n(1123)},1332:function(e,t,n){(t=n(56)(!1)).push([e.i,"[data-v-32634084] h1{color:#00f;font-size:120%;margin:24px 0 20px}[data-v-32634084] h2{color:#ff4500;font-size:110%;margin:16px 0 12px}[data-v-32634084] h3{color:green;font-size:100%;margin:12px 0 6px}.showPanel[data-v-32634084]{padding:6px 24px;border:1px solid #d3d3d3;background:#fafad2}.control[data-v-32634084]{display:flex;padding:12px;background:#e0ffff}.desc[data-v-32634084]{margin-left:24px;padding-top:5px;align-content:center;color:brown}[data-v-32634084] code.hljs.language-c{background-color:#eee;padding:12px 18px}.one[data-v-32634084],.two[data-v-32634084]{overflow-x:scroll;height:100%}",""]),e.exports=t},1411:function(e,t,n){"use strict";n.r(t);n(10),n(36),n(12),n(30),n(27),n(87),n(49);var r=n(7),o=n(26),c=n(855),l=n(3),d=n(903),f=n.n(d),h=n(922),v=n.n(h);l.default.use(f.a),l.default.use(v.a);var m={data:function(){return{showStatus:!1,showReaders:!1,showReference:!1,showPerson:!1,content:"# 期末報告\n\n趕快開始寫吧...\n",profile:null,csAstudents:null,csBstudents:null,csAoptions:null,csBoptions:null,selectedA:[],selectedB:[],readers:null,toSee:[],rperson:null,rcontent:null,csGuiders:[],isGuider:!1}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,d,f,h,v,m,x,w,k,_,A,S,i,B;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.profile){t.next=5;break}return t.next=3,o.d.collection("reports").doc(e.$user("id")).get();case 3:(n=t.sent).exists&&(e.profile=n.data(),e.content=e.profile.content);case 5:if(e.csAstudents){t.next=26;break}return t.next=8,o.d.collection("courses").doc("C000003").get();case 8:r=t.sent,c=r.data(),e.csAstudents=c.students,l=[],c.teachers&&(l=c.teachers.map((function(e){return e.id}))),c.assistants&&(l=l.concat(c.assistants.map((function(e){return e.id})))),l.indexOf(e.$user("id"))>=0&&(e.isGuider=!0),d=[],t.t0=regeneratorRuntime.keys(e.csAstudents);case 17:if((t.t1=t.t0()).done){t.next=25;break}if(f=t.t1.value,!(l.indexOf(f)>=0)){t.next=21;break}return t.abrupt("continue",17);case 21:h=e.csAstudents[f],d.push({text:h.name,value:f}),t.next=17;break;case 25:e.csAoptions=d;case 26:if(e.csBstudents){t.next=47;break}return t.next=29,o.d.collection("courses").doc("C000002").get();case 29:v=t.sent,m=v.data(),e.csBstudents=m.students,x=[],m.teachers&&(x=m.teachers.map((function(e){return e.id}))),m.assistants&&(x=x.concat(m.assistants.map((function(e){return e.id})))),x.indexOf(e.$user("id"))>=0&&(e.isGuider=!0),w=[],t.t2=regeneratorRuntime.keys(e.csBstudents);case 38:if((t.t3=t.t2()).done){t.next=46;break}if(k=t.t3.value,!(x.indexOf(k)>=0)){t.next=42;break}return t.abrupt("continue",38);case 42:_=e.csBstudents[k],w.push({text:_.name,value:k}),t.next=38;break;case 46:e.csBoptions=w;case 47:if(e.readers){t.next=54;break}return t.next=50,o.d.collection("reports").doc("readers").get();case 50:if(A=t.sent,e.readers=A.data(),S=e.readers[e.$user("id")])for(i=0;i<S.readers.length;i++)B=e.readers[i],e.csAstudents[B]&&e.selectedA.push(B),e.csBstudents[B]&&e.selectedB.push(B);case 54:case"end":return t.stop()}}),t)})))()},methods:{look:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.csAstudents[e]&&(t.rperson=t.csAstudents[e]),t.csBstudents[e]&&(t.rperson=t.csBstudents[e]),n.next=4,o.d.collection("reports").doc(e).get();case 4:(r=n.sent).exists&&(t.rcontent=r.data().content,t.showReference=!1,t.showPerson=!0);case 6:case"end":return n.stop()}}),n)})))()},seeOthers:function(){this.toSee=[];var e=this.$user("id");for(var t in this.readers){this.readers[t].readers.indexOf(e)>=0&&this.toSee.indexOf(t)<0&&this.toSee.push(t)}if(this.isGuider){if(this.csAstudents)for(var n in this.csAstudents)this.toSee.push(n);if(this.csBstudents)for(var r in this.csBstudents)this.toSee.push(r)}this.showReference=!0},updateReaders:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.selectedA.concat(e.selectedB),r={readers:n,updated:c.a.getNow()},(l={})[e.$user("id")]=r,t.next=6,o.d.collection("reports").doc("readers").set(l,{merge:!0});case 6:e.showReaders=!1,e.showStatus=!0;case 8:case"end":return t.stop()}}),t)})))()},selAllA:function(){var e=[];for(var t in this.csAstudents)e.push(t);this.selectedA=e},selAllB:function(){var e=[];for(var t in this.csBstudents)e.push(t);this.selectedB=e},save:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.collection("reports").doc(e.$user("id")).set({content:e.content,updated:c.a.getNow()},{merge:!0});case 2:e.showStatus=!0;case 3:case"end":return t.stop()}}),t)})))()},showHelp:function(){window.open("https://markdown-it.github.io/","_blank")}}},x=(n(1331),n(55)),component=Object(x.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{attrs:{size:"xl",title:e.rperson&&e.rperson.name},on:{ok:e.seeOthers},model:{value:e.showPerson,callback:function(t){e.showPerson=t},expression:"showPerson"}},[e.rcontent?n("div",{domProps:{innerHTML:e._s(e.$md.render(e.rcontent))}}):e._e()]),e._v(" "),n("b-modal",{attrs:{title:"更新","ok-only":""},model:{value:e.showStatus,callback:function(t){e.showStatus=t},expression:"showStatus"}},[e._v("\n        更新完成！\n    ")]),e._v(" "),n("b-modal",{attrs:{title:"誰可以看我",size:"xl"},on:{ok:e.updateReaders},model:{value:e.showReaders,callback:function(t){e.showReaders=t},expression:"showReaders"}},[n("p",[e._v("甲班\n            "),n("span",{staticClass:"ml-4"},[n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.selAllA}},[e._v("全選")])],1),e._v(" "),n("span",{staticClass:"ml-4"},[n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(t){e.selectedA=[]}}},[e._v("全消")])],1)]),e._v(" "),n("b-form-checkbox-group",{attrs:{options:e.csAoptions},model:{value:e.selectedA,callback:function(t){e.selectedA=t},expression:"selectedA"}}),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("乙班\n            "),n("span",{staticClass:"ml-4"},[n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.selAllB}},[e._v("全選")])],1),e._v(" "),n("span",{staticClass:"ml-4"},[n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(t){e.selectedB=[]}}},[e._v("全消")])],1)]),e._v(" "),n("b-form-checkbox-group",{attrs:{options:e.csBoptions},model:{value:e.selectedB,callback:function(t){e.selectedB=t},expression:"selectedB"}})],1),e._v(" "),n("b-modal",{attrs:{title:"我可以看誰",size:"xl","ok-only":""},model:{value:e.showReference,callback:function(t){e.showReference=t},expression:"showReference"}},e._l(e.toSee,(function(t,r){return n("p",{key:"see"+r},[e.csAstudents[t]?n("b-link",{on:{click:function(n){return e.look(t)}}},[e._v("\n                "+e._s(e.csAstudents[t].name)+"\n            ")]):e.csBstudents[t]?n("b-link",{on:{click:function(n){return e.look(t)}}},[e._v("\n                "+e._s(e.csBstudents[t].name)+"\n            ")]):e._e()],1)})),0),e._v(" "),n("div",{staticClass:"control"},[n("b-button",{staticClass:"ml-1",attrs:{size:"sm",variant:"success"},on:{click:e.save}},[e._v("存檔")]),e._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:function(t){e.showReaders=!0}}},[e._v("誰可以看我")]),e._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:e.seeOthers}},[e._v("我可以看誰")]),e._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:e.showHelp}},[e._v("編輯說明")]),e._v(" "),e.isGuider?n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success",to:"/user/checkReport"}},[e._v("檢查作業")]):e._e(),e._v(" "),n("div",{staticClass:"desc"},[e._v("請不要拖到最後才寫，老師每週日有時間會檢查一次")])],1),e._v(" "),n("Split",{staticStyle:{height:"750px"},attrs:{gutterSize:24}},[n("SplitArea",{attrs:{size:50,minSize:500}},[n("b-textarea",{directives:[{name:"scroll-sync",rawName:"v-scroll-sync"}],staticClass:"one",attrs:{"no-resize":""},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e._v(" "),n("SplitArea",{staticClass:"showPanel",attrs:{size:50,minSize:700}},[n("div",{directives:[{name:"scroll-sync",rawName:"v-scroll-sync"}],staticClass:"two",domProps:{innerHTML:e._s(e.$md.render(e.content))}})])],1)],1)}),[],!1,null,"32634084",null);t.default=component.exports},855:function(e,t,n){"use strict";n(10),n(14),n(22),n(86),n(9),n(856),n(29),n(15);var r=n(228),o=n.n(r),c={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var n=Math.floor(t/60);return t%=60,"".concat(this.pad(n),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],n=Object.keys(e);return n.sort(),n.forEach((function(n){t.push(Object.assign({id:n},e[n]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var n=JSON.parse(JSON.stringify(e)),r=e.id;delete n.id,t[r]=n})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var n=0;n<e.length;n++)if(t==e[n].id)return n;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},856:function(e,t,n){"use strict";var r=n(8),o=n(857).start;r({target:"String",proto:!0,forced:n(858)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},857:function(e,t,n){var r=n(50),o=n(229),c=n(52),l=Math.ceil,d=function(e){return function(t,n,d){var f,h,v=String(c(t)),m=v.length,x=void 0===d?" ":String(d),w=r(n);return w<=m||""==x?v:(f=w-m,(h=o.call(x,l(f/x.length))).length>f&&(h=h.slice(0,f)),e?v+h:h+v)}};e.exports={start:d(!1),end:d(!0)}},858:function(e,t,n){var r=n(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={install:function(e,t){var n={},r=!1,o=function(e,t,r){return r&&(e in n||(n[e]=[]),n[e].push({modifiers:t,e:r})),n[e]},c={bind:function(e,t){var n=t.arg,c=t.modifiers,l=t.value,d=void 0===l?function(element,e,t){var n=t.x;t.y&&(e.scrollTop=element.scrollTop*(e.scrollHeight-e.clientHeight)/(element.scrollHeight-element.clientHeight)),n&&(e.scrollLeft=element.scrollLeft*(e.scrollWidth-e.clientWidth)/(element.scrollWidth-element.clientWidth))}:l;"x"in c||"y"in c||(c.x=!0,c.y=!0),o(n,c,e),e.addEventListener("scroll",(function(){r||(r=!0,requestAnimationFrame((function(){o(n).filter((function(t){return t.e!==e})).forEach((function(t){var n=t.modifiers,r=t.e;d(e,r,n)})),requestAnimationFrame((function(){r=!1}))})))}))}};e.directive("scroll-sync",c)}};t.default=r}}]);