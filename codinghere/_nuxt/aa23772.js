(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1048:function(e,t,r){var content=r(1232);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("08f0f904",content,!0,{sourceMap:!1})},1231:function(e,t,r){"use strict";r(1048)},1232:function(e,t,r){(t=r(60)(!1)).push([e.i,".container[data-v-57c68a54]{margin:30px auto;padding:10px}form[data-v-57c68a54]{max-width:600px;margin:0 auto}input[data-v-57c68a54]{margin-top:36px}button[data-v-57c68a54]{width:50%;margin:36px auto}",""]),e.exports=t},1308:function(e,t,r){"use strict";r.r(t);r(29),r(49);var n=r(8),o=r(32),c=r(844),l={middleware:"no_authentication",data:function(){return{emailAlert:!1,infoAlert:!1,info:{title:"",message:""},resetPass:!1,remail:"",form:{email:"",password:""},localeTexts:{zh:{email:"電子郵件",password:"密碼",register:"報名",verifyTitle:"密碼檢查",verifyFail:"檢查未通過"},en:{email:"Email",password:"Password",register:"Register",verifyTitle:"Password Check",verifyFail:"Invalid User/Password"}},localeText:null}},created:function(){this.setLocaleText()},computed:{locale:function(){return this.$store.state.params.locale}},methods:{toUser:function(){this.$router.push("/contest/c2021/news")},setLocaleText:function(){"en"===this.locale?this.localeText=this.localeTexts.en:this.localeText=this.localeTexts.zh},sendEmail:function(){o.c.currentUser.sendEmailVerification(),this.doLogout()},doLogout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.signOut();case 2:e.emailAlert=!1;case 3:case"end":return t.stop()}}),t)})))()},register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var form,r,l,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return form=e.form,t.prev=1,t.next=4,o.c.signInWithEmailAndPassword(form.email,form.password);case 4:if(!(r=o.c.currentUser)){t.next=28;break}if(!r.emailVerified){t.next=25;break}return t.next=9,o.d.collection("users").doc(r.uid).get();case 9:if(!(l=t.sent).exists){t.next=21;break}return d=l.data(),f=o.d.collection("contests").doc("c2021"),t.next=15,o.d.runTransaction(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(f);case 2:return r=e.sent,n={},r.exists&&(n=r.data().players||{}),n[l.id]={stdID:d.stdID,name:d.name,email:d.email,school:d.school,dept:d.dept,grade:d.grade,created:c.a.getNow()},e.next=8,t.set(f,{players:n,updated:c.a.getNow()},{merge:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:return t.next=17,e.doLogout();case 17:e.info={title:"報名成功",message:"感謝您的報名！"},e.infoAlert=!0,t.next=23;break;case 21:e.info={title:"錯誤訊息",message:"無使用者資料，請洽詢管理員！"},e.infoAlert=!0;case 23:t.next=26;break;case 25:e.emailAlert=!0;case 26:t.next=30;break;case 28:e.info={title:"錯誤訊息",message:"帳號或密碼錯誤"},e.infoAlert=!0;case 30:t.next=36;break;case 32:t.prev=32,t.t0=t.catch(1),e.info={title:"錯誤訊息",message:t.t0.message},e.infoAlert=!0;case 36:case"end":return t.stop()}}),t,null,[[1,32]])})))()}},watch:{locale:function(e){this.setLocaleText()}}},d=(r(1231),r(55)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"pt-0"},[r("b-modal",{attrs:{title:e.info.title},on:{ok:e.toUser},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message)+"\n    ")]),e._v(" "),r("b-alert",{attrs:{variant:"danger",dismissible:""},on:{dismissed:e.doLogout},model:{value:e.emailAlert,callback:function(t){e.emailAlert=t},expression:"emailAlert"}},[r("b-button",{attrs:{variant:"success"},on:{click:e.sendEmail}},[e._v("\n            "+e._s(e.localeText.emailVerify)+"\n        ")])],1),e._v(" "),r("p",{staticStyle:{color:"red"},attrs:{align:"center"}},[r("b-icon",{attrs:{icon:"exclamation-circle"}}),e._v(" \n        請填入 CodingHere 帳號及密碼\n    ")],1),e._v(" "),r("b-form",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control form-control-md",attrs:{type:"email",placeholder:e.localeText.email},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control form-control-md",attrs:{type:"password",placeholder:e.localeText.password},domProps:{value:e.form.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),r("b-button",{attrs:{block:"",pill:"",variant:"outline-primary"},on:{click:e.register}},[e._v("\n            "+e._s(e.localeText.register)+"\n        ")])],1)],1)}),[],!1,null,"57c68a54",null);t.default=component.exports},844:function(e,t,r){"use strict";r(10),r(14),r(22),r(103),r(9),r(845),r(27),r(15);var n=r(227),o=r.n(n),c={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),n=e.id;delete r.id,t[n]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=c},845:function(e,t,r){"use strict";var n=r(7),o=r(846).start;n({target:"String",proto:!0,forced:r(847)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},846:function(e,t,r){var n=r(50),o=r(228),c=r(52),l=Math.ceil,d=function(e){return function(t,r,d){var f,m,v=String(c(t)),h=v.length,x=void 0===d?" ":String(d),w=n(r);return w<=h||""==x?v:(f=w-h,(m=o.call(x,l(f/x.length))).length>f&&(m=m.slice(0,f)),e?v+m:m+v)}};e.exports={start:d(!1),end:d(!0)}},847:function(e,t,r){var n=r(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)}}]);