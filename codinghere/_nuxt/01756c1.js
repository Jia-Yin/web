(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1447:function(t,e,n){"use strict";n.r(e);n(10),n(14),n(18),n(12),n(160),n(27),n(80),n(15),n(88),n(380);var r=n(28),o=(n(49),n(7)),c=n(884),d={computed:{cid:function(){return this.$route.query.cid}},data:function(){return{course:{},students:[],localeText:{Profile_StdID:"學號",Profile_Name:"姓名",SYS_IDX:"序號",SYS_Export:"匯出"},fields:[]}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.cid){e.next=2;break}return e.abrupt("return",t.$router.push("/user"));case 2:t.localeText=t.$updateLocaleText(t.localeText),t.updateCourse();case 4:case"end":return e.stop()}}),e)})))()},methods:{updateCourse:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCourse",t.cid);case 2:t.course=e.sent,t.course.students&&(t.students=c.a.obj2arr(t.course.students)),t.fields=[{key:"idx",label:t.localeText.SYS_IDX},{key:"stdID",label:t.localeText.Profile_StdID,sortable:!0},{key:"name",label:t.localeText.Profile_Name,sortable:!0},{key:"id",label:"UID",sortable:!0}];case 5:case"end":return e.stop()}}),e)})))()},exportCSV:function(){var t=this.fields.map((function(t){return t.key}));t.splice(0,1);var e=[t].concat(Object(r.a)(this.students.map((function(e){var data=[];return t.forEach((function(t){return data.push(e[t])})),data})))).map((function(t){return t.join(",")})).join("\n"),n=new Blob([e],{type:"text/plain;charset=utf-8"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(n,"studentList.csv");else{var o=window.document.createElement("a");o.href=window.URL.createObjectURL(n),o.download="studentList.csv",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}}},l=n(56),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button",{staticClass:"mb-2",attrs:{size:"sm",variant:"success"},on:{click:t.exportCSV}},[t._v(t._s(t.localeText.SYS_Export))]),t._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:t.students,fields:t.fields,small:""},scopedSlots:t._u([{key:"cell(idx)",fn:function(data){return[t._v("\n            "+t._s(data.index+1)+"\n        ")]}},{key:"cell(name)",fn:function(data){return[n("b-link",{attrs:{to:"/teacher/student?cid="+t.cid+"&uid="+data.item.id}},[t._v(t._s(data.value))])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports},884:function(t,e,n){"use strict";n(10),n(14),n(87),n(9),n(885),n(29),n(15);var r=n(129),o=n.n(r),c={pad:function(t){return t<10?"0"+t:t},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},885:function(t,e,n){"use strict";var r=n(8),o=n(886).start;r({target:"String",proto:!0,forced:n(887)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},886:function(t,e,n){var r=n(50),o=n(232),c=n(52),d=Math.ceil,l=function(t){return function(e,n,l){var f,h,v=String(c(e)),m=v.length,S=void 0===l?" ":String(l),w=r(n);return w<=m||""==S?v:(f=w-m,(h=o.call(S,d(f/S.length))).length>f&&(h=h.slice(0,f)),t?v+h:h+v)}};t.exports={start:l(!1),end:l(!0)}},887:function(t,e,n){var r=n(128);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)}}]);