(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{776:function(t,o,r){var content=r(855);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("a2f87c2c",content,!0,{sourceMap:!1})},854:function(t,o,r){"use strict";r(776)},855:function(t,o,r){(o=r(41)(!1)).push([t.i,".my-card[data-v-46c6e240]{margin-top:20px;margin-bottom:20px;padding:10px}.btn[data-v-46c6e240]{width:50%;margin:0 auto}.alert[data-v-46c6e240]{margin-top:30px;margin-bottom:0}",""]),t.exports=o},913:function(t,o,r){"use strict";r.r(o);var e=r(758),n=r(757),m=(r(13),{mixins:[e.validationMixin],data:function(){return{error:null,disable:!1,groupForm:{name:null,note:null,time:{start:this.curtime(),end:null}}}},validations:{groupForm:{name:{required:n.required},note:{}}},computed:{},methods:{onSubmit:function(){var t=this;if(console.log("groupForm",this.groupForm),this.$v.groupForm.$touch(),this.$v.groupForm.$anyError)return this.error="資料錯誤，請檢查！",void console.log("error");this.$store.dispatch("admin/newData",{dkey:"groups",dvalue:this.groupForm}).then((function(){t.$router.push("/admin/group")}))},twod:function(t){return t<=9?"0"+t:t},curtime:function(){var t=new Date;return""+t.getFullYear()+this.twod(t.getMonth()+1)+this.twod(t.getDate())+this.twod(t.getHours())+this.twod(t.getMinutes())+this.twod(t.getSeconds())}}}),l=(r(854),r(29)),component=Object(l.a)(m,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",[r("b-col",{attrs:{md:"6","offset-md":"3"}},[r("b-alert",{attrs:{show:t.error,dismissible:"",variant:"danger"}},[t._v(t._s(t.error))]),t._v(" "),r("b-card",{staticClass:"my-card",attrs:{title:"新增題組"}},[r("b-form",{on:{submit:function(o){return o.preventDefault(),t.onSubmit(o)}}},[r("b-form-group",{attrs:{id:"name"}},[r("b-form-input",{attrs:{id:"name",placeholder:"題組名稱",size:"sm"},model:{value:t.$v.groupForm.name.$model,callback:function(o){t.$set(t.$v.groupForm.name,"$model",o)},expression:"$v.groupForm.name.$model"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"note"}},[r("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"note",placeholder:"備註",size:"sm"},model:{value:t.$v.groupForm.note.$model,callback:function(o){t.$set(t.$v.groupForm.note,"$model",o)},expression:"$v.groupForm.note.$model"}})],1),t._v(" "),r("b-button",{attrs:{pill:"",block:"",type:"submit",variant:"outline-primary",disabled:t.disable}},[t._v("\n          建立題組\n          "),t.disable?r("b-spinner",{staticStyle:{width:"1.3rem",height:"1.3rem"}}):t._e()],1)],1)],1)],1)],1)}),[],!1,null,"46c6e240",null);o.default=component.exports}}]);