(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{343:function(r,e,t){var content=t(408);"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,t(30).default)("6e8d48e5",content,!0,{sourceMap:!1})},407:function(r,e,t){"use strict";var o=t(343);t.n(o).a},408:function(r,e,t){(r.exports=t(29)(!1)).push([r.i,".card[data-v-192e260f]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-192e260f]{margin-bottom:24px}.btn[data-v-192e260f]{width:50%;margin:24px auto}.alert[data-v-192e260f]{margin-top:30px;margin-bottom:0}input[data-v-192e260f]{margin-top:6px}",""])},431:function(r,e,t){"use strict";t.r(e);var o=t(322),d=t(321),l={mixins:[o.validationMixin],middleware:["notAuthenticated"],data:function(){return{regisError:null,disable:!1,registerForm:{password:null,name:null,email:null,stdID:null,dept:null,grade:null},depts:[{text:"科系",value:null},"電機工程學系","電資學士班","其他"],grades:[{text:"年級",value:null},"大一","大二","大三","大四","研究所","其他"]}},validations:{registerForm:{password:{required:d.required,minLength:Object(d.minLength)(8)},name:{required:d.required},email:{required:d.required,email:d.email},dept:{required:d.required},grade:{required:d.required},stdID:{required:d.required,numeric:d.numeric,minLength:Object(d.minLength)(8),maxLength:Object(d.maxLength)(8)}}},methods:{onSubmit:function(){var r=this;this.$v.registerForm.$touch(),this.$v.registerForm.$anyError?console.log("error"):(this.regisError=null,this.disable=!0,this.$store.dispatch("registration",this.registerForm).then((function(){r.$router.push("/confirm")})).catch((function(e){"auth/email-already-in-use"==e.code?r.regisError="該信箱已被註冊":r.regisError="註冊時發生問題，如果持續遇到請聯絡管理員",r.disable=!1})))}}},m=(t(407),t(15)),component=Object(m.a)(l,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-container",{attrs:{fluid:""}},[t("b-col",{attrs:{md:"6","offset-md":"3"}},[t("b-alert",{attrs:{show:r.regisError,dismissible:"",variant:"danger"}},[r._v(r._s(r.regisError))]),r._v(" "),t("b-card",{attrs:{title:"歡迎加入！"}},[t("b-form",{on:{submit:function(e){return e.preventDefault(),r.onSubmit(e)}}},[t("b-form-group",{attrs:{id:"group-email"}},[t("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Email",state:r.$v.registerForm.email.$dirty?!r.$v.registerForm.email.$error:null,size:"sm"},model:{value:r.$v.registerForm.email.$model,callback:function(e){r.$set(r.$v.registerForm.email,"$model",e)},expression:"$v.registerForm.email.$model"}})],1),r._v(" "),t("b-form-group",{attrs:{id:"group-password"}},[t("b-form-input",{attrs:{id:"password",type:"password",state:r.$v.registerForm.password.$dirty?!r.$v.registerForm.password.$error:null,placeholder:"密碼",size:"sm"},model:{value:r.$v.registerForm.password.$model,callback:function(e){r.$set(r.$v.registerForm.password,"$model",e)},expression:"$v.registerForm.password.$model"}}),r._v(" "),r.$v.registerForm.password.minLength?r._e():t("div",{staticClass:"error"},[r._v("密碼至少 "+r._s(r.$v.registerForm.password.$params.minLength.min)+" 個字元")])],1),r._v(" "),t("b-form-group",{attrs:{id:"group-name"}},[t("b-form-input",{attrs:{id:"name",placeholder:"姓名",state:r.$v.registerForm.name.$dirty?!r.$v.registerForm.name.$error:null,size:"sm"},model:{value:r.$v.registerForm.name.$model,callback:function(e){r.$set(r.$v.registerForm.name,"$model",e)},expression:"$v.registerForm.name.$model"}})],1),r._v(" "),t("b-form-group",{attrs:{id:"group-stdID"}},[t("b-form-input",{attrs:{id:"stdID",placeholder:"學號",state:r.$v.registerForm.stdID.$dirty?!r.$v.registerForm.stdID.$error:null,size:"sm"},model:{value:r.$v.registerForm.stdID.$model,callback:function(e){r.$set(r.$v.registerForm.stdID,"$model",r._n(e))},expression:"$v.registerForm.stdID.$model"}})],1),r._v(" "),t("b-form-group",{attrs:{id:"group-dept"}},[t("b-form-select",{attrs:{id:"dept",state:r.$v.registerForm.dept.$dirty?!r.$v.registerForm.dept.$error:null,options:r.depts,size:"sm"},model:{value:r.$v.registerForm.dept.$model,callback:function(e){r.$set(r.$v.registerForm.dept,"$model",e)},expression:"$v.registerForm.dept.$model"}})],1),r._v(" "),t("b-form-group",{attrs:{id:"group-grade"}},[t("b-form-select",{attrs:{id:"grade",state:r.$v.registerForm.grade.$dirty?!r.$v.registerForm.grade.$error:null,options:r.grades,size:"sm"},model:{value:r.$v.registerForm.grade.$model,callback:function(e){r.$set(r.$v.registerForm.grade,"$model",e)},expression:"$v.registerForm.grade.$model"}})],1),r._v(" "),t("b-button",{attrs:{pill:"",block:"",type:"submit",variant:"outline-primary",disabled:r.disable}},[r._v("\n          註冊\n            "),r.disable?t("b-spinner",{staticStyle:{width:"1.3rem",height:"1.3rem"}}):r._e()],1)],1)],1)],1)],1)}),[],!1,null,"192e260f",null);e.default=component.exports}}]);