(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1134:function(e,t,n){var content=n(1363);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("6fc677ea",content,!0,{sourceMap:!1})},1362:function(e,t,n){"use strict";n(1134)},1363:function(e,t,n){(t=n(56)(!1)).push([e.i,"[data-v-4d53b10c] h1{color:#00f;font-size:120%;margin:24px 0 20px}[data-v-4d53b10c] h2{color:#ff4500;font-size:110%;margin:16px 0 12px}[data-v-4d53b10c] h3{color:green;font-size:100%;margin:12px 0 6px}.showPanel[data-v-4d53b10c]{padding:6px 24px;border:1px solid #d3d3d3;background:#fafad2}.control[data-v-4d53b10c]{display:flex;padding:12px;background:#e0ffff}.desc[data-v-4d53b10c]{margin-left:24px;padding-top:5px;align-content:center;color:brown}[data-v-4d53b10c] code.hljs.language-c{background-color:#eee;padding:12px 18px}.one[data-v-4d53b10c],.two[data-v-4d53b10c]{overflow-x:scroll;height:100%}",""]),e.exports=t},1452:function(e,t,n){"use strict";n.r(t);n(10),n(36),n(18),n(12),n(30),n(27),n(79),n(87),n(368),n(49);var r=n(7),o=n(26),c=n(855),d=n(3),l=n(902),f=n.n(l),h=n(926),v=n.n(h);d.default.use(f.a),d.default.use(v.a);var m={data:function(){return{pscore:0,showContent:!1,showReaders:!1,showScore:!1,person:null,keyword:"",reports:null,readers:null,csAstudents:null,csBstudents:null,allStudents:{},guiders:[],isGuider:!1,records:[],scores:{},fields:[{key:"index",label:"編號"},{key:"name",label:"姓名",sortable:!0},{key:"stdID",label:"學號",sortable:!0},{key:"class",label:"班級",sortable:!0},{key:"conlen",label:"內容長度",sortable:!0},{key:"updated",label:"更新時間",sortable:!0},{key:"readers",label:"讀者"},{key:"score",label:"分數",sortable:!0}]}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,d,l,f,i,h,v,m,k,x,w,y,_,s,S,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null,e.csAstudents){t.next=12;break}return t.next=4,o.d.collection("courses").doc("C000003").get();case 4:n=t.sent,r=n.data(),e.csAstudents=r.students,c=[],r.teachers&&(c=r.teachers.map((function(e){return e.id}))),r.assistants&&(c=c.concat(r.assistants.map((function(e){return e.id})))),c.indexOf(e.$user("id"))>=0&&(e.isGuider=!0),e.guiders=e.guiders.concat(c);case 12:if(e.csBstudents){t.next=23;break}return t.next=15,o.d.collection("courses").doc("C000002").get();case 15:n=t.sent,d=n.data(),e.csBstudents=d.students,l=[],d.teachers&&(l=d.teachers.map((function(e){return e.id}))),d.assistants&&(l=l.concat(d.assistants.map((function(e){return e.id})))),l.indexOf(e.$user("id"))>=0&&(e.isGuider=!0),e.guiders=e.guiders.concat(l);case 23:if(e.isGuider){t.next=26;break}return e.$router.push("/user/report"),t.abrupt("return");case 26:if(e.reports){t.next=31;break}return t.next=29,o.d.collection("reports").get();case 29:if(!(f=t.sent).empty)for(e.reports={},i=0;i<f.docs.length;i++)"readers"===(h=f.docs[i]).id?e.readers=h.data():"scores"===h.id?e.scores=h.data():e.reports[h.id]=h.data();case 31:for(k in v=[],m=[{key:"甲",data:e.csAstudents},{key:"乙",data:e.csBstudents}],e.csAstudents)e.allStudents[k]=e.csAstudents[k];for(x in e.csBstudents)e.allStudents[x]=e.csBstudents[x];w=0;case 36:if(!(w<m.length)){t.next=54;break}y=m[w],t.t0=regeneratorRuntime.keys(y.data);case 39:if((t.t1=t.t0()).done){t.next=51;break}if(_=t.t1.value,!(e.guiders.indexOf(_)>=0)){t.next=43;break}return t.abrupt("continue",39);case 43:s=y.data[_],S={id:_,name:s.name,stdID:s.stdID,readers:"",class:y.key,content:"",conlen:0,score:0,updated:""},e.reports[_]&&(S.content=e.reports[_].content,S.conlen=S.content.length,S.updated=e.reports[_].updated),e.readers[_]&&(C=e.readers[_].readers)&&C.length>0&&(S.readers=C.join(",")),e.scores[_]&&(S.score=e.scores[_].score),v.push(S),t.next=39;break;case 51:w++,t.next=36;break;case 54:e.records=v;case 55:case"end":return t.stop()}}),t)})))()},methods:{saveStringToFile:function(e,data){var t=new Blob([data],{type:"text/plain;charset=utf-8"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(t,e);else{var n=window.document.createElement("a");n.href=window.URL.createObjectURL(t),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}},exportCSV:function(){var text="學號,姓名,班級,分數\n";for(var e in this.allStudents){var s=this.allStudents[e],t="乙";this.csAstudents[e]&&(t="甲");var n=0;this.scores[e]&&(n=this.scores[e].score),text+="".concat(s.stdID,",").concat(s.name,",").concat(t,",").concat(n,"\n")}this.saveStringToFile("scores.csv",text)},lookLink:function(e){for(var i=0;i<this.records.length;i++)if(this.records[i].id===e){this.person=this.records[i],this.pscore=this.records[i].score,this.showContent=!0;break}},lookPerson:function(p){this.person=p,this.pscore=p.score,this.showContent=!0},setScore:function(p){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.scores[p.id]={score:e.pscore,updated:c.a.getNow()},t.next=3,o.d.collection("reports").doc("scores").set(e.scores);case 3:i=0;case 4:if(!(i<e.records.length)){t.next=12;break}if(e.records[i].id===p.id){t.next=7;break}return t.abrupt("continue",9);case 7:return e.$set(e.records[i],"score",e.pscore),t.abrupt("break",12);case 9:i++,t.next=4;break;case 12:e.showContent=!1;case 13:case"end":return t.stop()}}),t)})))()}}},k=(n(1362),n(55)),component=Object(k.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{attrs:{size:"xl","ok-only":""},model:{value:e.showContent,callback:function(t){e.showContent=t},expression:"showContent"}},[e.person?n("div",{domProps:{innerHTML:e._s(e.$md.render(e.person.content))}}):e._e(),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"d-flex justify-content-start"},[n("span",[e._v("Score")]),e._v(" "),n("b-input",{staticClass:"ml-3 w-50",attrs:{size:"sm"},model:{value:e.pscore,callback:function(t){e.pscore=t},expression:"pscore"}}),e._v(" "),n("b-button",{staticClass:"ml-3",attrs:{size:"sm",variant:"success"},on:{click:function(t){return e.setScore(e.person)}}},[e._v("給分")])],1)]),e._v(" "),n("div",{staticClass:"mt-3 mb-2 d-flex justify-content-start"},[n("span",{staticClass:"mr-3"},[e._v("Keyword:")]),e._v(" "),n("b-input",{staticClass:"w-50",attrs:{size:"sm"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),n("b-button",{staticClass:"ml-2",attrs:{size:"sm",variant:"success"},on:{click:function(t){e.keyword=""}}},[e._v("清除")]),e._v(" "),n("b-button",{staticClass:"ml-2",attrs:{size:"sm",variant:"success"},on:{click:function(t){e.showReaders=!e.showReaders}}},[e._v("\n            "+e._s(e.showReaders?"隱藏讀者":"顯示讀者")+"\n        ")]),e._v(" "),n("b-button",{staticClass:"ml-2",attrs:{size:"sm",variant:"success"},on:{click:function(t){e.showScore=!e.showScore}}},[e._v("\n            "+e._s(e.showScore?"隱藏分數":"顯示分數")+"\n        ")]),e._v(" "),n("b-button",{staticClass:"ml-2",attrs:{size:"sm",variant:"success"},on:{click:e.exportCSV}},[e._v("\n            匯出\n        ")])],1),e._v(" "),n("b-table",{attrs:{items:e.records,fields:e.fields,small:"",striped:"","sticky-header":"700px",filter:e.keyword},scopedSlots:e._u([{key:"cell(index)",fn:function(data){return[e._v("\n            "+e._s(data.index+1)+"\n        ")]}},{key:"cell(name)",fn:function(data){return[n("b-link",{on:{click:function(t){return e.lookPerson(data.item)}}},[e._v(e._s(data.item.name))])]}},e.showReaders?{key:"cell(readers)",fn:function(data){return[data.value&&data.value.length>0?n("span",e._l(data.value.split(","),(function(t){return n("span",{key:"r"+t},[t!==data.item.id?n("b-link",{staticClass:"mr-2",on:{click:function(n){return e.lookLink(t)}}},[e._v(e._s(e.allStudents[t].name))]):e._e()],1)})),0):e._e()]}}:{key:"cell(readers)",fn:function(){return[e._v("隱藏")]},proxy:!0},e.showScore?null:{key:"cell(score)",fn:function(){return[e._v("隱藏")]},proxy:!0}],null,!0)})],1)}),[],!1,null,"4d53b10c",null);t.default=component.exports},855:function(e,t,n){"use strict";n(10),n(14),n(86),n(9),n(856),n(29),n(15);var r=n(228),o=n.n(r),c={pad:function(e){return e<10?"0"+e:e},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var n=Math.floor(t/60);return t%=60,"".concat(this.pad(n),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],n=Object.keys(e);return n.sort(),n.forEach((function(n){t.push(Object.assign({id:n},e[n]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var n=JSON.parse(JSON.stringify(e)),r=e.id;delete n.id,t[r]=n})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var n=0;n<e.length;n++)if(t==e[n].id)return n;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},856:function(e,t,n){"use strict";var r=n(8),o=n(857).start;r({target:"String",proto:!0,forced:n(858)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},857:function(e,t,n){var r=n(50),o=n(229),c=n(52),d=Math.ceil,l=function(e){return function(t,n,l){var f,h,v=String(c(t)),m=v.length,k=void 0===l?" ":String(l),x=r(n);return x<=m||""==k?v:(f=x-m,(h=o.call(k,d(f/k.length))).length>f&&(h=h.slice(0,f)),e?v+h:h+v)}};e.exports={start:l(!1),end:l(!0)}},858:function(e,t,n){var r=n(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},926:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={install:function(e,t){var n={},r=!1,o=function(e,t,r){return r&&(e in n||(n[e]=[]),n[e].push({modifiers:t,e:r})),n[e]},c={bind:function(e,t){var n=t.arg,c=t.modifiers,d=t.value,l=void 0===d?function(element,e,t){var n=t.x;t.y&&(e.scrollTop=element.scrollTop*(e.scrollHeight-e.clientHeight)/(element.scrollHeight-element.clientHeight)),n&&(e.scrollLeft=element.scrollLeft*(e.scrollWidth-e.clientWidth)/(element.scrollWidth-element.clientWidth))}:d;"x"in c||"y"in c||(c.x=!0,c.y=!0),o(n,c,e),e.addEventListener("scroll",(function(){r||(r=!0,requestAnimationFrame((function(){o(n).filter((function(t){return t.e!==e})).forEach((function(t){var n=t.modifiers,r=t.e;l(e,r,n)})),requestAnimationFrame((function(){r=!1}))})))}))}};e.directive("scroll-sync",c)}};t.default=r}}]);