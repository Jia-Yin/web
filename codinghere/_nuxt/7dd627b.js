(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1090:function(e,t,r){"use strict";r(911)},1091:function(e,t,r){(t=r(60)(!1)).push([e.i,".error[data-v-03825517]{width:100%;padding:20px 20px 10px 30px;background:#fffacd;color:red;line-height:180%}.container[data-v-03825517]{margin:30px auto;padding:10px}form[data-v-03825517]{max-width:600px;margin:0 auto}.form-control[data-v-03825517]{display:block;width:100%;padding:.375rem .75rem;margin:20px 0;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.perrors[data-v-03825517],form.errors[data-v-03825517] :invalid{outline:2px solid red}button[data-v-03825517]{width:50%;margin:36px auto}",""]),e.exports=t},1165:function(e,t,r){"use strict";r.r(t);r(29),r(49);var n=r(7),o=r(32),l=r(843),c={data:function(){return{infoAlert:!1,info:{title:"",message:""},errors:!1,disable:!1,finish:!0,form:{email:"",password:"",password2:"",name:"",stdID:"",school:"CYCU",dept:"EE",grade:"1"},schools:null,allgrades:{zh:[{text:"大一",value:"1"},{text:"大二",value:"2"},{text:"大三",value:"3"},{text:"大四",value:"4"},{text:"研究所",value:"G"}],en:[{text:"Freshman",value:"1"},{text:"Sophomore",value:"2"},{text:"Junior",value:"3"},{text:"Senior",value:"4"},{text:"Graduate",value:"G"}]},grades:null,localeTexts:{zh:{email:"電子郵件",password:"密碼",password2:"重覆密碼",name:"姓名",stdID:"學號",register:"報名",registerOK:"註冊成功，請收取郵件並按下回覆確認，謝謝！"},en:{email:"Email",password:"Password",password2:"Password Again",name:"Name",stdID:"Student ID",register:"Register",registerOK:"Registration is successful, please receive the email and press Reply to confirm, thank you!"}},localeText:null}},computed:{locale:function(){return this.$store.state.params&&this.$store.state.params.locale||"zh"}},created:function(){this.setLocaleText()},methods:{signUpWithFireAuth:function(form){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.c.createUserWithEmailAndPassword(form.email,form.password).then((function(e){o.c.currentUser.updateProfile({displayName:form.name}).then((function(){}))})));case 1:case"end":return e.stop()}}),e)})))()},createUserProfile:function(form){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=o.c.currentUser)){e.next=5;break}return r=l.a.getNow(),n={email:form.email,name:form.name,stdID:form.stdID,school:form.school,dept:form.dept,grade:form.grade,role:"user",locale:form.locale,created:r},e.abrupt("return",o.d.collection("users").doc(t.uid).set(n).then((function(){})));case 5:case"end":return e.stop()}}),e)})))()},addUserToContest:function(form){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=o.c.currentUser)){e.next=5;break}return r=o.d.collection("contests").doc("c2021"),e.next=5,o.d.runTransaction(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get(r);case 2:return o=e.sent,c={},o.exists&&(c=o.data().players||{}),c[t.uid]={stdID:form.stdID,name:form.name,email:form.email,school:form.school,dept:form.dept,grade:form.grade,created:l.a.getNow()},e.next=8,n.set(r,{players:c,updated:l.a.getNow()},{merge:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})))()},register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var form,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disable=!0,form=e.form,e.locale?form.locale=e.locale:form.locale="zh",t.prev=3,t.next=6,e.signUpWithFireAuth(form);case 6:return t.next=8,e.createUserProfile(form);case 8:return t.next=10,e.addUserToContest(form);case 10:return r=o.c.currentUser,t.next=13,r.sendEmailVerification();case 13:e.info={title:e.localeText.register,message:e.localeText.registerOK},e.infoAlert=!0,e.disable=!1,t.next=22;break;case 18:t.prev=18,t.t0=t.catch(3),alert("ERRcode:"+t.t0.code+" ERRmsg: "+t.t0.message),e.disable=!1;case 22:case"end":return t.stop()}}),t,null,[[3,18]])})))()},toUser:function(){this.$router.push("/contest/c2021/news")},invalidateForm:function(){this.errors=!0},setLocaleText:function(){"en"===this.locale?(this.localeText=this.localeTexts.en,this.grades=this.allgrades.en):(this.localeText=this.localeTexts.zh,this.grades=this.allgrades.zh)}},watch:{locale:function(e){this.setLocaleText()}}},d=(r(1090),r(55)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"pt-0"},[r("b-modal",{attrs:{title:e.info.title},on:{ok:e.toUser},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message)+"\n    ")]),e._v(" "),e.finish?r("p",{staticClass:"mt-0",staticStyle:{color:"red"},attrs:{align:"center"}},[r("b-icon",{attrs:{icon:"exclamation-circle"}}),e._v(" \n        報名已截止！\n    ")],1):r("p",{staticClass:"mt-0",staticStyle:{color:"red"},attrs:{align:"center"}},[r("b-icon",{attrs:{icon:"exclamation-circle"}}),e._v(" \n        若已經有 CodingHere 帳號，請按\n        "),r("b-link",{attrs:{to:"/contest/c2021/register2"}},[e._v("這裡")]),e._v(" 報名\n    ")],1),e._v(" "),r("b-form",{class:!!this.errors&&"errors"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{required:"",type:"email",placeholder:e.localeText.email},domProps:{value:e.form.email},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:e.localeText.password,minlength:"6"},domProps:{value:e.form.password},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password2,expression:"form.password2"}],staticClass:"form-control",class:""!=e.form.password2&&e.form.password2!=e.form.password&&"perrors",attrs:{required:"",type:"password",placeholder:e.localeText.password2,minlength:"6"},domProps:{value:e.form.password2},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.form,"password2",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:e.localeText.name},domProps:{value:e.form.name},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.stdID,expression:"form.stdID"}],staticClass:"form-control",attrs:{required:"",placeholder:e.localeText.stdID,pattern:"[A-Z]?[0-9]+"},domProps:{value:e.form.stdID},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.form,"stdID",t.target.value)}}}),e._v(" "),r("b-form-select",{staticClass:"form-control",attrs:{options:e.grades},model:{value:e.form.grade,callback:function(t){e.$set(e.form,"grade",t)},expression:"form.grade"}}),e._v(" "),e.disable?r("p",{attrs:{align:"center"}},[r("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1):r("div",[e.finish?r("b-button",{attrs:{disabled:"",pill:"",block:"",variant:"outline-primary"},on:{click:e.register}},[e._v("\n                報名已截止\n            ")]):r("b-button",{attrs:{pill:"",block:"",variant:"outline-primary"},on:{click:e.register}},[e._v("\n                "+e._s(e.localeText.register)+"\n            ")])],1)],1)],1)}),[],!1,null,"03825517",null);t.default=component.exports},843:function(e,t,r){"use strict";r(10),r(14),r(22),r(103),r(9),r(844),r(27),r(15);var n=r(227),o=r.n(n),l={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),n=e.id;delete r.id,t[n]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=l},844:function(e,t,r){"use strict";var n=r(8),o=r(845).start;n({target:"String",proto:!0,forced:r(846)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},845:function(e,t,r){var n=r(50),o=r(228),l=r(52),c=Math.ceil,d=function(e){return function(t,r,d){var m,f,v=String(l(t)),h=v.length,x=void 0===d?" ":String(d),w=n(r);return w<=h||""==x?v:(m=w-h,(f=o.call(x,c(m/x.length))).length>m&&(f=f.slice(0,m)),e?v+f:f+v)}};e.exports={start:d(!1),end:d(!0)}},846:function(e,t,r){var n=r(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},911:function(e,t,r){var content=r(1091);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("41ff9eb0",content,!0,{sourceMap:!1})}}]);