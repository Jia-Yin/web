(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{793:function(e,r,t){var content=t(889);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(42).default)("3cb47c12",content,!0,{sourceMap:!1})},888:function(e,r,t){"use strict";t(793)},889:function(e,r,t){(r=t(41)(!1)).push([e.i,".card[data-v-d465f00c]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-d465f00c]{margin-bottom:24px}.btn[data-v-d465f00c]{max-width:200px;margin:12px auto 24px}.alert[data-v-d465f00c]{margin-top:30px;margin-bottom:0}input[data-v-d465f00c],select[data-v-d465f00c]{margin-top:6px}",""]),e.exports=r},923:function(e,r,t){"use strict";t.r(r);t(18);var o=t(758),d=t(757),m={mixins:[o.validationMixin],data:function(){return{regisError:null,disable:!1,registerForm:{name:null,email:null,stdID:null,dept:null,grade:null},depts:[{text:"科系",value:null},"電機工程學系","電資學士班","其他"],grades:[{text:"年級",value:null},"大一","大二","大三","大四","研究所","其他"]}},validations:{registerForm:{name:{required:d.required},email:{required:d.required,email:d.email},dept:{required:d.required},grade:{required:d.required},stdID:{required:d.required,numeric:d.numeric,minLength:Object(d.minLength)(8),maxLength:Object(d.maxLength)(8)}}},mounted:function(){this.registerForm.name=this.$store.state.user.name,this.registerForm.email=this.$store.state.user.email,this.registerForm.stdID=this.$store.state.user.stdID,this.registerForm.dept=this.$store.state.user.dept,this.registerForm.grade=this.$store.state.user.grade,this.registerForm.id=this.$store.state.user.id},methods:{onSubmit:function(){var e=this;this.$v.registerForm.$touch(),this.$v.registerForm.$anyError?console.log("error"):(this.regisError=null,this.disable=!0,this.$store.dispatch("modifyProfile",this.registerForm).then((function(){e.$router.push("/")})).catch((function(r){e.regisError="註冊時發生問題，如果持續遇到請聯絡管理員",e.disable=!1})))}}},l=(t(888),t(29)),component=Object(l.a)(m,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-container",{attrs:{fluid:""}},[t("b-col",{attrs:{md:"6","offset-md":"3"}},[t("b-alert",{staticStyle:{"margin-top":"20px"},attrs:{show:e.regisError,dismissible:"",variant:"danger"}},[e._v(e._s(e.regisError))]),e._v(" "),t("b-card",{staticClass:"my-card",attrs:{title:"基本資料"}},[t("b-form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[t("b-form-group",{attrs:{id:"group-email"}},[t("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Email",disabled:"",state:e.$v.registerForm.email.$dirty?!e.$v.registerForm.email.$error:null,size:"sm"},model:{value:e.$v.registerForm.email.$model,callback:function(r){e.$set(e.$v.registerForm.email,"$model",r)},expression:"$v.registerForm.email.$model"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"group-name"}},[t("b-form-input",{attrs:{id:"name",placeholder:"姓名",state:e.$v.registerForm.name.$dirty?!e.$v.registerForm.name.$error:null,size:"sm"},model:{value:e.$v.registerForm.name.$model,callback:function(r){e.$set(e.$v.registerForm.name,"$model",r)},expression:"$v.registerForm.name.$model"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"group-stdID"}},[t("b-form-input",{attrs:{id:"stdID",placeholder:"學號",state:e.$v.registerForm.stdID.$dirty?!e.$v.registerForm.stdID.$error:null,size:"sm"},model:{value:e.$v.registerForm.stdID.$model,callback:function(r){e.$set(e.$v.registerForm.stdID,"$model",e._n(r))},expression:"$v.registerForm.stdID.$model"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"group-dept"}},[t("b-form-select",{attrs:{id:"dept",state:e.$v.registerForm.dept.$dirty?!e.$v.registerForm.dept.$error:null,options:e.depts,size:"sm"},model:{value:e.$v.registerForm.dept.$model,callback:function(r){e.$set(e.$v.registerForm.dept,"$model",r)},expression:"$v.registerForm.dept.$model"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"group-grade"}},[t("b-form-select",{attrs:{id:"grade",state:e.$v.registerForm.grade.$dirty?!e.$v.registerForm.grade.$error:null,options:e.grades,size:"sm"},model:{value:e.$v.registerForm.grade.$model,callback:function(r){e.$set(e.$v.registerForm.grade,"$model",r)},expression:"$v.registerForm.grade.$model"}})],1),e._v(" "),t("b-row",[t("b-col",{attrs:{md:"6","offset-md":"3"}},[t("b-button",{attrs:{pill:"",block:"",type:"submit",variant:"outline-primary",disabled:e.disable}},[e._v("\n              修改\n            "),e.disable?t("b-spinner",{staticStyle:{width:"1.3rem",height:"1.3rem"}}):e._e()],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"d465f00c",null);r.default=component.exports}}]);