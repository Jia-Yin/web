(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{792:function(e,r,t){var content=t(887);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(42).default)("78fe05a0",content,!0,{sourceMap:!1})},886:function(e,r,t){"use strict";t(792)},887:function(e,r,t){(r=t(41)(!1)).push([e.i,".card[data-v-2d4932b6]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-2d4932b6]{margin-bottom:24px}.btn[data-v-2d4932b6]{width:50%;margin:24px auto}.alert[data-v-2d4932b6]{margin-top:30px;margin-bottom:0}input[data-v-2d4932b6]{margin-top:6px}",""]),e.exports=r},920:function(e,r,t){"use strict";t.r(r);var n=t(758),d=t(757),o={mixins:[n.validationMixin],middleware:["notAuthenticated"],data:function(){return{regisError:null,disable:!1,registerForm:{password:null,name:null,email:null,stdID:null,dept:null,grade:null},depts:[{text:"科系",value:null},"電機工程學系","電資學士班","其他"],grades:[{text:"年級",value:null},"大一","大二","大三","大四","研究所","其他"]}},validations:{registerForm:{password:{required:d.required,minLength:Object(d.minLength)(8)},name:{required:d.required},email:{required:d.required,email:d.email},dept:{required:d.required},grade:{required:d.required},stdID:{required:d.required,numeric:d.numeric,minLength:Object(d.minLength)(8),maxLength:Object(d.maxLength)(8)}}},methods:{onSubmit:function(){var e=this;this.$v.registerForm.$touch(),this.$v.registerForm.$anyError?console.log("error"):(this.regisError=null,this.disable=!0,this.$store.dispatch("registration",this.registerForm).then((function(){e.$router.push("/confirm")})).catch((function(r){"auth/email-already-in-use"==r.code?e.regisError="該信箱已被註冊":e.regisError="註冊時發生問題，如果持續遇到請聯絡管理員",e.disable=!1})))}}},l=(t(886),t(29)),component=Object(l.a)(o,(function(){var e=this.$createElement,r=this._self._c||e;return r("b-container",{attrs:{fluid:""}},[this._v("\n  本網站已不再接受新的註冊！請使用新的版本 "),r("a",{attrs:{href:"https://www.jywglady.org/codinghere"}},[this._v("CodingHere")]),this._v("，謝謝。\n  "),this._e()],1)}),[],!1,null,"2d4932b6",null);r.default=component.exports}}]);