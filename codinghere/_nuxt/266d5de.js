(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1082:function(e,t,n){"use strict";n(912)},1083:function(e,t,n){(t=n(60)(!1)).push([e.i,".container[data-v-7c18b09d]{margin:30px auto;padding:10px}input[data-v-7c18b09d]{max-width:800px;margin:20px auto}button[data-v-7c18b09d]{width:50%;margin:48px auto}",""]),e.exports=t},1152:function(e,t,n){"use strict";n.r(t);n(29),n(28),n(104),n(49);var r=n(8),l=n(32),c={data:function(){return{showResult:!1,name:"",email:"",message:"",localeTexts:{zh:{email:"姓名或電子郵件",query:"查詢"},en:{email:"Name or Email",query:"Query"}},players:null,localeText:null}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setLocaleText();case 1:case"end":return t.stop()}}),t)})))()},computed:{locale:function(){return this.$store.state.params.locale}},methods:{exit:function(){this.$router.push("/exit")},setLocaleText:function(){"en"===this.locale?this.localeText=this.localeTexts.en:this.localeText=this.localeTexts.zh},login:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.players){t.next=5;break}return t.next=3,l.d.collection("contests").doc("c2021").get();case 3:(n=t.sent).exists&&(e.players=n.data().players);case 5:if("all"===e.email){t.next=21;break}if(r=null,!e.players){t.next=20;break}t.t0=regeneratorRuntime.keys(e.players);case 9:if((t.t1=t.t0()).done){t.next=20;break}if(c=t.t1.value,(o=e.players[c]).email!==e.email){t.next=15;break}return r=o,t.abrupt("break",20);case 15:if(o.name!==e.email){t.next=18;break}return r=o,t.abrupt("break",20);case 18:t.next=9;break;case 20:e.message=r?"".concat(r.name," 已經報名！"):"查不到相關的報名資料！";case 21:e.showResult=!0;case 22:case"end":return t.stop()}}),t)})))()}},watch:{locale:function(e){this.setLocaleText()}}},o=(n(1082),n(55)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"pt-0"},[n("b-input",{attrs:{type:"text",placeholder:e.localeText.email},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("b-button",{staticClass:"w-25 mx-auto",attrs:{block:"",pill:"",variant:"outline-primary"},on:{click:e.login}},[e._v("\n        "+e._s(e.localeText.query)+"\n    ")]),e._v(" "),e.showResult?n("div",{staticClass:"mt-5 w-50 mx-auto"},["all"===e.email?n("div",[n("p",[e._v("報名人數： "+e._s(Object.keys(e.players).length)+" 人，名單如下：")]),e._v(" "),e._l(e.players,(function(p,t,r){return n("p",{key:t},[e._v("\n                "+e._s(r+1)+". "+e._s(p.stdID)+" - "+e._s(p.name)+" - "+e._s(p.grade)+"\n            ")])}))],2):n("p",{attrs:{align:"center"}},[e._v(e._s(e.message))])]):e._e()],1)}),[],!1,null,"7c18b09d",null);t.default=component.exports},912:function(e,t,n){var content=n(1083);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("fd98cce6",content,!0,{sourceMap:!1})}}]);