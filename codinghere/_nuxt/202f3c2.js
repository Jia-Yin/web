(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1090:function(t,e,n){var content=n(1273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("74dfd958",content,!0,{sourceMap:!1})},1272:function(t,e,n){"use strict";n(1090)},1273:function(t,e,n){(e=n(56)(!1)).push([t.i,'h1[data-v-5bca3002]{color:#00f;font-family:"Arial";font-size:120%;margin:24px 0;padding-bottom:3px;border-bottom:1px solid #000}',""]),t.exports=e},1406:function(t,e,n){"use strict";n.r(e);n(86),n(27),n(42),n(856),n(46),n(49);var r=n(7),o=n(855),c=n(26),l={data:function(){return{curLang:"zh",infoAlert:!1,info:{title:"",message:""},formdata:{status:"",msg:{en:"",zh:""}},localeText:{}}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{checkFormData:function(){if(""===this.formdata.status)return!1;var t=!1;for(var e in this.formdata.msg)this.formdata.msg[e]=this.formdata.msg[e].trim(),""!==this.formdata.msg[e]&&(t=!0);return t},createNewMessage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,f,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.checkFormData()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c.d.collection("system").doc("setting").get();case 5:for(n=e.sent,r=n.data(),l=r.statusMsg||{},f=Object.keys(l).length,d="R"+(f+1).toString().padStart(3,"0");l[d];)d="R"+((f+=1)+1).toString().padStart(3,"0");return m=t.$copyObject(t.formdata),l[d]=m,r.statusMsg=l,r.updated=o.a.getNow(),e.next=17,c.d.collection("system").doc("setting").update({statusMsg:l,updated:o.a.getNow()});case 17:t.$store.commit("setObjItem",{obj:"system",name:"setting",value:r}),t.info={title:"Create Status Msg",message:"OK"},t.infoAlert=!0,e.next=25;break;case 22:e.prev=22,e.t0=e.catch(2),console.log("Error",e.t0);case 25:case"end":return e.stop()}}),e,null,[[2,22]])})))()}}},f=(n(1272),n(55)),component=Object(f.a)(l,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("b-modal",{attrs:{title:e.info.title},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message)+"\n    ")]),e._v(" "),r("h1",[e._v("New Status Msg")]),e._v(" "),r("div",{staticClass:"my-3 ml-2 d-flex justify-content-start"},[r("span",{staticClass:"mr-3"},[e._v("Status:")]),e._v(" "),r("b-form-radio-group",{attrs:{options:[{value:"CE",text:"CE"},{value:"WA",text:"WA"},{value:"RE",text:"RE"},{value:"PE",text:"PE"},{value:"TLE",text:"TLE"},{value:"OLE",text:"OLE"},{value:"MLE",text:"MLE"}]},model:{value:e.formdata.status,callback:function(t){e.$set(e.formdata,"status",t)},expression:"formdata.status"}})],1),e._v(" "),r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("locale-input",{staticClass:"mt-3",attrs:{rows:5},on:{curLang:function(e){t.curLang=e}},model:{value:e.formdata.msg,callback:function(t){e.$set(e.formdata,"msg",t)},expression:"formdata.msg"}})],1),e._v(" "),r("b-col",{staticClass:"pl-4 mt-4",attrs:{cols:"6"}},[r("p",[e._v("Preview")]),e._v(" "),r("div",[r("p",{domProps:{innerHTML:e._s(e.$md.render(e.$selectLocaleText(e.formdata.msg,e.curLang)))}})])])],1),e._v(" "),r("b-button",{staticClass:"mt-3 mr-3",attrs:{size:"sm",variant:"primary",to:"/admin/dataman/status_msg"}},[e._v("Return")]),e._v(" "),r("b-button",{staticClass:"mt-3",attrs:{size:"sm",variant:"primary"},on:{click:e.createNewMessage}},[e._v("Create")])],1)}),[],!1,null,"5bca3002",null);e.default=component.exports;installComponents(component,{LocaleInput:n(860).default})},855:function(t,e,n){"use strict";n(10),n(14),n(86),n(9),n(856),n(29),n(15);var r=n(228),o=n.n(r),c={pad:function(t){return t<10?"0"+t:t},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},856:function(t,e,n){"use strict";var r=n(8),o=n(857).start;r({target:"String",proto:!0,forced:n(858)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},857:function(t,e,n){var r=n(50),o=n(229),c=n(52),l=Math.ceil,f=function(t){return function(e,n,f){var d,m,v=String(c(e)),h=v.length,x=void 0===f?" ":String(f),w=r(n);return w<=h||""==x?v:(d=w-h,(m=o.call(x,l(d/x.length))).length>d&&(m=m.slice(0,d)),t?v+m:m+v)}};t.exports={start:f(!1),end:f(!0)}},858:function(t,e,n){var r=n(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},859:function(t,e,n){var content=n(864);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("75a234fb",content,!0,{sourceMap:!1})},860:function(t,e,n){"use strict";n.r(e);n(367);var r={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:{zh:"中文",en:"English"},content:{zh:"中文",en:"English"}}},created:function(){this.$system("locales")&&(this.locales=this.$copyObject(this.$system("locales").support)),this.value&&(this.content=this.value)},methods:{setLang:function(t){this.$emit("curLang",t)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(t){this.content=t}}},o=(n(863),n(55)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-tabs",t._l(t.locales,(function(e,r,o){return n("b-tab",{key:"locale"+o,attrs:{title:e},on:{click:function(e){return t.setLang(r)}}},[n("b-textarea",{attrs:{rows:t.rows},on:{input:t.cinput},model:{value:t.content[r],callback:function(e){t.$set(t.content,r,e)},expression:"content[key]"}})],1)})),1)],1)}),[],!1,null,"05c43ddc",null);e.default=component.exports},863:function(t,e,n){"use strict";n(859)},864:function(t,e,n){(e=n(56)(!1)).push([t.i,"textarea[data-v-05c43ddc]{width:100%}",""]),t.exports=e}}]);