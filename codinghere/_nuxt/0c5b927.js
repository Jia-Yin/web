(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1440:function(t,e,r){"use strict";r.r(e);r(10),r(14),r(18),r(12),r(156),r(30),r(27),r(79),r(15),r(87),r(368);var n=r(28),o=(r(49),r(7)),c=r(855),l={computed:{cid:function(){return this.$route.query.cid}},data:function(){return{course:{},scores:[],localeText:{Profile_StdID:"學號",Profile_Name:"姓名",SYS_IDX:"序號",SYS_Export:"匯出",ExamMan_TotalScore:"總分"},fields:[]}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.cid){e.next=2;break}return e.abrupt("return",t.$router.push("/user"));case 2:t.localeText=t.$updateLocaleText(t.localeText),t.updateCourse();case 4:case"end":return e.stop()}}),e)})))()},methods:{updateCourse:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCourseT",t.cid);case 2:t.course=e.sent,t.fields=[{key:"idx",label:t.localeText.SYS_IDX},{key:"stdID",label:t.localeText.Profile_StdID,sortable:!0},{key:"name",label:t.localeText.Profile_Name,sortable:!0},{key:"total",label:t.localeText.ExamMan_TotalScore,sortable:!0}],t.updateData();case 5:case"end":return e.stop()}}),e)})))()},exportCSV:function(){var t=this.fields.map((function(t){return t.key}));t.splice(0,1);var e=[t].concat(Object(n.a)(this.scores.map((function(e){var data=[];return t.forEach((function(t){return data.push(e[t])})),data})))).map((function(t){return t.join(",")})).join("\n"),r=new Blob([e],{type:"text/plain;charset=utf-8"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(r,"scoreList.csv");else{var o=window.document.createElement("a");o.href=window.URL.createObjectURL(r),o.download="scoreList.csv",document.body.appendChild(o),o.click(),document.body.removeChild(o)}},updateData:function(){if(this.course.units){for(var t=this.course.units.length,i=0;i<t;i++)this.fields.push({key:"U"+(i+1),sortable:!0});var e=[];t=this.course.units?this.course.units.length:0;var r=1;for(var n in this.course.scores)if(!(c.a.findIdPos(this.course.teachers,n)>=0||c.a.findIdPos(this.course.assistants,n)>=0)){var o=this.course.students[n],l={id:n,idx:r,stdID:o.stdID,name:o.name};r++;for(var d=this.course.scores[n],f=0,h=0;h<d.length;h++)l["U"+(h+1)]=d[h],f+=d[h];l.total=f,e.push(l)}this.scores=e}else this.scores=[]}}},d=r(55),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{staticClass:"mb-2",attrs:{size:"sm",variant:"success"},on:{click:t.exportCSV}},[t._v(t._s(t.localeText.SYS_Export))]),t._v(" "),r("b-table",{attrs:{striped:"",hover:"",items:t.scores,fields:t.fields},scopedSlots:t._u([{key:"cell(name)",fn:function(data){return[r("b-link",{attrs:{to:"/teacher/student?cid="+t.cid+"&uid="+data.item.id}},[t._v(t._s(data.value))])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports},855:function(t,e,r){"use strict";r(10),r(14),r(86),r(9),r(856),r(29),r(15);var n=r(228),o=r.n(n),c={pad:function(t){return t<10?"0"+t:t},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var r=Math.floor(e/60);return e%=60,"".concat(this.pad(r),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],r=Object.keys(t);return r.sort(),r.forEach((function(r){e.push(Object.assign({id:r},t[r]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var r=JSON.parse(JSON.stringify(t)),n=t.id;delete r.id,e[n]=r})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var r=0;r<t.length;r++)if(e==t[r].id)return r;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},856:function(t,e,r){"use strict";var n=r(8),o=r(857).start;n({target:"String",proto:!0,forced:r(858)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},857:function(t,e,r){var n=r(50),o=r(229),c=r(52),l=Math.ceil,d=function(t){return function(e,r,d){var f,h,v=String(c(e)),m=v.length,S=void 0===d?" ":String(d),w=n(r);return w<=m||""==S?v:(f=w-m,(h=o.call(S,l(f/S.length))).length>f&&(h=h.slice(0,f)),t?v+h:h+v)}};t.exports={start:d(!1),end:d(!0)}},858:function(t,e,r){var n=r(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)}}]);