(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1024:function(e,t,r){"use strict";r(888)},1025:function(e,t,r){(t=r(59)(!1)).push([e.i,".error[data-v-609b9896]{width:100%;padding:20px 20px 10px 30px;background:#fffacd;color:red;line-height:180%}.container[data-v-609b9896]{margin:30px auto;padding:10px}form[data-v-609b9896]{max-width:600px;margin:0 auto}.form-control[data-v-609b9896]{display:block;width:100%;padding:.375rem .75rem;margin:20px 0;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.perrors[data-v-609b9896],form.errors[data-v-609b9896] :invalid{outline:2px solid red}button[data-v-609b9896]{width:50%;margin:36px auto}",""]),e.exports=t},1074:function(e,t,r){"use strict";r.r(t);r(30),r(54);var o=r(10),n=r(34),l=r(840),c={data:function(){return{infoAlert:!1,info:{title:"",message:""},errors:!1,disable:!1,formData:{email:"",password:"",password2:"",name:"",stdID:"",school:"CYCU",dept:"EE",grade:"1"},allschools:{zh:[{text:"中原大學",value:"CYCU"},{text:"其他",value:"Others"}],en:[{text:"Chung Yuan Christian University",value:"CYCU"},{text:"Others",value:"Others"}]},schools:null,alldepts:{zh:[{text:"電機工程學系",value:"EE"},{text:"電資學士班",value:"EECS"},{text:"其他",value:"Others"}],en:[{text:"Electrical Engineering",value:"EE"},{text:"EECS College Program",value:"EECS"},{text:"Others",value:"Others"}]},depts:null,allgrades:{zh:[{text:"大一",value:"1"},{text:"大二",value:"2"},{text:"大三",value:"3"},{text:"大四",value:"4"},{text:"研究所",value:"G"},{text:"教師",value:"T"},{text:"其他",value:"Others"}],en:[{text:"Freshman",value:"1"},{text:"Sophomore",value:"2"},{text:"Junior",value:"3"},{text:"Senior",value:"4"},{text:"Graduate",value:"G"},{text:"Teacher",value:"T"},{text:"Others",value:"Others"}]},grades:null,localeTexts:{zh:{email:"電子郵件",password:"密碼",password2:"重覆密碼",name:"姓名",stdID:"學號",register:"註冊",registerOK:"註冊成功，請收取郵件並按下回覆確認，謝謝！",login:"回登入畫面"},en:{email:"Email",password:"Password",password2:"Password Again",name:"Name",stdID:"Student ID",register:"Register",registerOK:"Registration is successful, please receive the email and press Reply to confirm, thank you!",login:"Back to Login"}},localeText:null}},computed:{locale:function(){return this.$store.state.params.locale}},created:function(){this.setLocaleText()},methods:{signUpWithFireAuth:function(form){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.c.createUserWithEmailAndPassword(form.email,form.password).then((function(e){n.c.currentUser.updateProfile({displayName:form.name}).then((function(){}))})));case 1:case"end":return e.stop()}}),e)})))()},createUserProfile:function(form){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.c.currentUser)){e.next=5;break}return r=l.a.getNow(),o={email:form.email,name:form.name,stdID:form.stdID,school:form.school,dept:form.dept,grade:form.grade,role:"user",locale:form.locale,created:r},e.abrupt("return",n.d.collection("users").doc(t.uid).set(o).then((function(){})));case 5:case"end":return e.stop()}}),e)})))()},register:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var form,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disable=!0,form=e.formData,e.locale?form.locale=e.locale:form.locale="zh",t.prev=3,t.next=6,e.signUpWithFireAuth(form);case 6:return t.next=8,e.createUserProfile(form);case 8:return r=n.c.currentUser,t.next=11,r.sendEmailVerification();case 11:e.info={title:e.localeText.register,message:e.localeText.registerOK},e.infoAlert=!0,e.disable=!1,t.next=20;break;case 16:t.prev=16,t.t0=t.catch(3),alert("ERRcode:"+t.t0.code+" ERRmsg: "+t.t0.message),e.disable=!1;case 20:case"end":return t.stop()}}),t,null,[[3,16]])})))()},toUser:function(){this.$router.push("/login")},invalidateForm:function(){this.errors=!0},setLocaleText:function(){"en"===this.locale?(this.localeText=this.localeTexts.en,this.schools=this.allschools.en,this.depts=this.alldepts.en,this.grades=this.allgrades.en):(this.localeText=this.localeTexts.zh,this.schools=this.allschools.zh,this.depts=this.alldepts.zh,this.grades=this.allgrades.zh)}},watch:{locale:function(e){this.setLocaleText()}}},d=(r(1024),r(70)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("b-modal",{attrs:{title:e.info.title},on:{ok:e.toUser},model:{value:e.infoAlert,callback:function(t){e.infoAlert=t},expression:"infoAlert"}},[e._v(e._s(e.info.message)+"\n    ")]),e._v(" "),r("b-form",{class:!!this.errors&&"errors"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{required:"",type:"email",placeholder:e.localeText.email},domProps:{value:e.formData.email},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:e.localeText.password,minlength:"6"},domProps:{value:e.formData.password},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password2,expression:"formData.password2"}],staticClass:"form-control",class:""!=e.formData.password2&&e.formData.password2!=e.formData.password&&"perrors",attrs:{required:"",type:"password",placeholder:e.localeText.password2,minlength:"6"},domProps:{value:e.formData.password2},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.formData,"password2",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.name,expression:"formData.name"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:e.localeText.name},domProps:{value:e.formData.name},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.formData,"name",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.stdID,expression:"formData.stdID"}],staticClass:"form-control",attrs:{required:"",placeholder:e.localeText.stdID,pattern:"[A-Z]?[0-9]+"},domProps:{value:e.formData.stdID},on:{invalid:e.invalidateForm,input:function(t){t.target.composing||e.$set(e.formData,"stdID",t.target.value)}}}),e._v(" "),r("b-form-select",{staticClass:"form-control",attrs:{options:e.schools},model:{value:e.formData.school,callback:function(t){e.$set(e.formData,"school",t)},expression:"formData.school"}}),e._v(" "),r("b-form-select",{staticClass:"form-control",attrs:{options:e.depts},model:{value:e.formData.dept,callback:function(t){e.$set(e.formData,"dept",t)},expression:"formData.dept"}}),e._v(" "),r("b-form-select",{staticClass:"form-control",attrs:{options:e.grades},model:{value:e.formData.grade,callback:function(t){e.$set(e.formData,"grade",t)},expression:"formData.grade"}}),e._v(" "),e.disable?r("p",{attrs:{align:"center"}},[r("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1):r("div",[r("b-button",{attrs:{pill:"",block:"",variant:"outline-primary"},on:{click:e.register}},[e._v("\n                "+e._s(e.localeText.register)+"\n            ")]),e._v(" "),r("p",{attrs:{align:"center"}},[r("b-link",{attrs:{to:"/login"}},[e._v("\n                    "+e._s(e.localeText.login)+"\n                ")])],1)],1)],1)],1)}),[],!1,null,"609b9896",null);t.default=component.exports},840:function(e,t,r){"use strict";r(9),r(14),r(22),r(103),r(8),r(841),r(27),r(15);var o=r(227),n=r.n(o),l={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var r=Math.floor(t/60);return t%=60,"".concat(this.pad(r),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],r=Object.keys(e);return r.sort(),r.forEach((function(r){t.push(Object.assign({id:r},e[r]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var r=JSON.parse(JSON.stringify(e)),o=e.id;delete r.id,t[o]=r})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var r=0;r<e.length;r++)if(t==e[r].id)return r;return-1},encode:function(e,t){return new n.a(e).encrypt(t)},decode:function(e,t){return new n.a(e).decrypt(t)}};t.a=l},841:function(e,t,r){"use strict";var o=r(7),n=r(842).start;o({target:"String",proto:!0,forced:r(843)},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},842:function(e,t,r){var o=r(48),n=r(228),l=r(51),c=Math.ceil,d=function(e){return function(t,r,d){var m,f,h=String(l(t)),v=h.length,x=void 0===d?" ":String(d),w=o(r);return w<=v||""==x?h:(m=w-v,(f=n.call(x,c(m/x.length))).length>m&&(f=f.slice(0,m)),e?h+f:f+h)}};e.exports={start:d(!1),end:d(!0)}},843:function(e,t,r){var o=r(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)},888:function(e,t,r){var content=r(1025);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("2bbf8cac",content,!0,{sourceMap:!1})}}]);