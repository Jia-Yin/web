(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1093:function(t,e,n){var content=n(1275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("58df41a8",content,!0,{sourceMap:!1})},1274:function(t,e,n){"use strict";n(1093)},1275:function(t,e,n){(e=n(56)(!1)).push([t.i,".container[data-v-45094694]{margin:30px auto;padding:10px}input[data-v-45094694]{max-width:800px;margin:20px auto}button[data-v-45094694]{width:50%;margin:48px auto}",""]),t.exports=e},1375:function(t,e,n){"use strict";n.r(e);n(30),n(27),n(87),n(49);var r=n(7),o=n(26),c=n(855),l={data:function(){return{showResult:!1,name:"",email:"",message:"",fields:[{key:"stdID",sortable:!0},{key:"name",sortable:!0},{key:"grade",sortable:!0},{key:"created",sortable:!0}],localeTexts:{zh:{email:"姓名或電子郵件",query:"查詢"},en:{email:"Name or Email",query:"Query"}},players:null,localeText:null}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setLocaleText();case 1:case"end":return e.stop()}}),e)})))()},computed:{locale:function(){return this.$store.state.params.locale},allPlayers:function(){return this.players?c.a.obj2arr(this.players):[]}},methods:{exit:function(){this.$router.push("/exit")},setLocaleText:function(){"en"===this.locale?this.localeText=this.localeTexts.en:this.localeText=this.localeTexts.zh},login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.players){e.next=5;break}return e.next=3,o.d.collection("contests").doc("c2021").get();case 3:(n=e.sent).exists&&(t.players=n.data().players);case 5:if("all"===t.email){e.next=21;break}if(r=null,!t.players){e.next=20;break}e.t0=regeneratorRuntime.keys(t.players);case 9:if((e.t1=e.t0()).done){e.next=20;break}if(c=e.t1.value,(l=t.players[c]).email!==t.email){e.next=15;break}return r=l,e.abrupt("break",20);case 15:if(l.name!==t.email){e.next=18;break}return r=l,e.abrupt("break",20);case 18:e.next=9;break;case 20:t.message=r?"".concat(r.name," 已經報名！"):"查不到相關的報名資料！";case 21:t.showResult=!0;case 22:case"end":return e.stop()}}),e)})))()}},watch:{locale:function(t){this.setLocaleText()}}},f=(n(1274),n(55)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"pt-0"},[n("b-input",{attrs:{type:"text",placeholder:t.localeText.email},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("b-button",{staticClass:"w-25 mx-auto",attrs:{block:"",pill:"",variant:"outline-primary"},on:{click:t.login}},[t._v("\n        "+t._s(t.localeText.query)+"\n    ")]),t._v(" "),t.showResult?n("div",{staticClass:"mt-5 w-50 mx-auto"},["all"===t.email?n("div",[n("p",[t._v("報名人數： "+t._s(Object.keys(t.players).length)+" 人，名單如下：")]),t._v(" "),n("b-table",{attrs:{items:t.allPlayers,fields:t.fields}})],1):n("p",{attrs:{align:"center"}},[t._v(t._s(t.message))])]):t._e()],1)}),[],!1,null,"45094694",null);e.default=component.exports},855:function(t,e,n){"use strict";n(10),n(14),n(22),n(86),n(9),n(856),n(29),n(15);var r=n(228),o=n.n(r),c={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},856:function(t,e,n){"use strict";var r=n(8),o=n(857).start;r({target:"String",proto:!0,forced:n(858)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},857:function(t,e,n){var r=n(50),o=n(229),c=n(52),l=Math.ceil,f=function(t){return function(e,n,f){var d,h,m=String(c(e)),v=m.length,x=void 0===f?" ":String(f),y=r(n);return y<=v||""==x?m:(d=y-v,(h=o.call(x,l(d/x.length))).length>d&&(h=h.slice(0,d)),t?m+h:h+m)}};t.exports={start:f(!1),end:f(!0)}},858:function(t,e,n){var r=n(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)}}]);