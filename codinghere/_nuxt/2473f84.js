(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1019:function(t,e,r){"use strict";r(884)},1020:function(t,e,r){(e=r(59)(!1)).push([t.i,".error[data-v-159febb9]{width:100%;padding:20px 20px 10px 30px;background:#fffacd;color:red;line-height:180%}.container[data-v-159febb9]{margin:30px auto;padding:10px}form[data-v-159febb9]{max-width:600px;margin:0 auto}.form-control[data-v-159febb9]{display:block;width:100%;padding:.375rem .75rem;margin:20px 0;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.perrors[data-v-159febb9],form.errors[data-v-159febb9] :invalid{outline:2px solid red}button[data-v-159febb9]{width:50%;margin:36px auto}",""]),t.exports=e},1067:function(t,e,r){"use strict";r.r(e);r(30),r(54);var o=r(10),n=r(34),l=r(840),c={data:function(){return{infoAlert:!1,info:{title:"",message:""},errors:!1,disable:!1,formData:{email:"",password:"",password2:"",name:"",stdID:"",school:"CYCU",dept:"EE",grade:"1"},allschools:{zh:[{text:"中原大學",value:"CYCU"},{text:"其他",value:"Others"}],en:[{text:"Chung Yuan Christian University",value:"CYCU"},{text:"Others",value:"Others"}]},schools:null,alldepts:{zh:[{text:"電機工程學系",value:"EE"},{text:"電資學士班",value:"EECS"},{text:"其他",value:"Others"}],en:[{text:"Electrical Engineering",value:"EE"},{text:"EECS College Program",value:"EECS"},{text:"Others",value:"Others"}]},depts:null,allgrades:{zh:[{text:"大一",value:"1"},{text:"大二",value:"2"},{text:"大三",value:"3"},{text:"大四",value:"4"},{text:"研究所",value:"G"},{text:"教師",value:"T"},{text:"其他",value:"Others"}],en:[{text:"Freshman",value:"1"},{text:"Sophomore",value:"2"},{text:"Junior",value:"3"},{text:"Senior",value:"4"},{text:"Graduate",value:"G"},{text:"Teacher",value:"T"},{text:"Others",value:"Others"}]},grades:null,localeTexts:{zh:{email:"電子郵件",password:"密碼",password2:"重覆密碼",name:"姓名",stdID:"學號",register:"註冊",registerOK:"註冊成功，請收取郵件並按下回覆確認，謝謝！",login:"回登入畫面"},en:{email:"Email",password:"Password",password2:"Password Again",name:"Name",stdID:"Student ID",register:"Register",registerOK:"Registration is successful, please receive the email and press Reply to confirm, thank you!",login:"Back to Login"}},localeText:null}},computed:{locale:function(){return this.$store.state.params.locale}},created:function(){this.setLocaleText()},methods:{onSubmit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var form,r,o,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return");case 5:if(r=t.sent,null==(o=r.user)){t.next=19;break}return t.next=10,o.updateProfile({displayName:form.name});case 10:return c=l.a.getNow(),d={email:form.email,name:form.name,stdID:form.stdID,school:form.school,dept:form.dept,grade:form.grade,role:"user",locale:e.locale,created:c},t.next=14,n.d.collection("users").doc(o.uid).set(d);case 14:return t.next=16,o.sendEmailVerification();case 16:e.info={title:e.localeText.register,message:e.localeText.registerOK},e.infoAlert=!0,e.disable=!1;case 19:case"end":return t.stop()}}),t)})))()},toUser:function(){this.$router.push("/login")},invalidateForm:function(){this.errors=!0},setLocaleText:function(){"en"===this.locale?(this.localeText=this.localeTexts.en,this.schools=this.allschools.en,this.depts=this.alldepts.en,this.grades=this.allgrades.en):(this.localeText=this.localeTexts.zh,this.schools=this.allschools.zh,this.depts=this.alldepts.zh,this.grades=this.allgrades.zh)}},watch:{locale:function(t){this.setLocaleText()}}},d=(r(1019),r(70)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-modal",{attrs:{title:t.info.title},on:{ok:t.toUser},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message)+"\n    ")]),t._v(" "),r("b-form",{class:!!this.errors&&"errors",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{required:"",type:"email",placeholder:t.localeText.email},domProps:{value:t.formData.email},on:{invalid:t.invalidateForm,input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:t.localeText.password,minlength:"6"},domProps:{value:t.formData.password},on:{invalid:t.invalidateForm,input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password2,expression:"formData.password2"}],staticClass:"form-control",class:""!=t.formData.password2&&t.formData.password2!=t.formData.password&&"perrors",attrs:{required:"",type:"password",placeholder:t.localeText.password2,minlength:"6"},domProps:{value:t.formData.password2},on:{invalid:t.invalidateForm,input:function(e){e.target.composing||t.$set(t.formData,"password2",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:t.localeText.name},domProps:{value:t.formData.name},on:{invalid:t.invalidateForm,input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.stdID,expression:"formData.stdID"}],staticClass:"form-control",attrs:{required:"",placeholder:t.localeText.stdID,pattern:"[A-Z]?[0-9]+"},domProps:{value:t.formData.stdID},on:{invalid:t.invalidateForm,input:function(e){e.target.composing||t.$set(t.formData,"stdID",e.target.value)}}}),t._v(" "),r("b-form-select",{staticClass:"form-control",attrs:{options:t.schools},model:{value:t.formData.school,callback:function(e){t.$set(t.formData,"school",e)},expression:"formData.school"}}),t._v(" "),r("b-form-select",{staticClass:"form-control",attrs:{options:t.depts},model:{value:t.formData.dept,callback:function(e){t.$set(t.formData,"dept",e)},expression:"formData.dept"}}),t._v(" "),r("b-form-select",{staticClass:"form-control",attrs:{options:t.grades},model:{value:t.formData.grade,callback:function(e){t.$set(t.formData,"grade",e)},expression:"formData.grade"}}),t._v(" "),t.disable?r("p",{attrs:{align:"center"}},[r("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1):r("div",[r("b-button",{attrs:{pill:"",block:"",type:"submit",variant:"outline-primary"}},[t._v("\n                "+t._s(t.localeText.register)+"\n            ")]),t._v(" "),r("p",{attrs:{align:"center"}},[r("b-link",{attrs:{to:"/login"}},[t._v("\n                    "+t._s(t.localeText.login)+"\n                ")])],1)],1)],1)],1)}),[],!1,null,"159febb9",null);e.default=component.exports},840:function(t,e,r){"use strict";r(9),r(14),r(22),r(103),r(8),r(841),r(27),r(15);var o=r(227),n=r.n(o),l={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var r=Math.floor(e/60);return e%=60,"".concat(this.pad(r),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],r=Object.keys(t);return r.sort(),r.forEach((function(r){e.push(Object.assign({id:r},t[r]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var r=JSON.parse(JSON.stringify(t)),o=t.id;delete r.id,e[o]=r})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var r=0;r<t.length;r++)if(e==t[r].id)return r;return-1},encode:function(t,e){return new n.a(t).encrypt(e)},decode:function(t,e){return new n.a(t).decrypt(e)}};e.a=l},841:function(t,e,r){"use strict";var o=r(7),n=r(842).start;o({target:"String",proto:!0,forced:r(843)},{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},842:function(t,e,r){var o=r(48),n=r(228),l=r(51),c=Math.ceil,d=function(t){return function(e,r,d){var m,f,v=String(l(e)),h=v.length,x=void 0===d?" ":String(d),w=o(r);return w<=h||""==x?v:(m=w-h,(f=n.call(x,c(m/x.length))).length>m&&(f=f.slice(0,m)),t?v+f:f+v)}};t.exports={start:d(!1),end:d(!0)}},843:function(t,e,r){var o=r(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)},884:function(t,e,r){var content=r(1020);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("318e6004",content,!0,{sourceMap:!1})}}]);