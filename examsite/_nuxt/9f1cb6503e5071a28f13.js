(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{745:function(t,e,o){var content=o(780);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("008b4716",content,!0,{sourceMap:!1})},779:function(t,e,o){"use strict";var r=o(745);o.n(r).a},780:function(t,e,o){(e=o(37)(!1)).push([t.i,".card[data-v-56591b43]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-56591b43]{margin-bottom:24px}.btn[data-v-56591b43]{max-width:300px;margin:12px auto 24px}p[data-v-56591b43]{color:#00f}.Answer[data-v-56591b43]{background:#e0ffff;padding:16px}.DataFunc[data-v-56591b43]{background:#fafad2;padding:16px}",""]),t.exports=e},843:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{qid:null,langs:[{text:"C",value:"c"},{text:"C++",value:"cpp"},{text:"Python 3",value:"py"}],qForm:{type:"progtest",title:null,question:null,image:null,answerlang:"c",answercode:null,testdata:{Style:"DATAFUNC",DataLang:"py",DataCode:null}}}},mounted:function(){},methods:{onSubmit:function(){var t=this,e=JSON.parse(JSON.stringify(this.qForm));null!==e.image&&""!==e.image||delete e.image,this.$store.dispatch("addCollectionItem",{collection:"quizzes",item:e}).then((function(){t.$router.push("/admin/quizlist")})).catch((function(t){}))}}},n=(o(779),o(31)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:""}},[o("b-card",{staticClass:"my-card",attrs:{title:"新增問題"}},[o("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("b-form-group",[o("b-form-input",{attrs:{id:"qtitle",type:"text",placeholder:"Title",size:"sm"},model:{value:t.qForm.title,callback:function(e){t.$set(t.qForm,"title",e)},expression:"qForm.title"}})],1),t._v(" "),o("b-form-group",[o("b-form-textarea",{attrs:{id:"qquestion",placeholder:"問題",size:"sm"},model:{value:t.qForm.question,callback:function(e){t.$set(t.qForm,"question",e)},expression:"qForm.question"}})],1),t._v(" "),o("b-form-group",[o("b-form-input",{attrs:{id:"qimage",placeholder:"圖片",size:"sm"},model:{value:t.qForm.image,callback:function(e){t.$set(t.qForm,"image",e)},expression:"qForm.image"}})],1),t._v(" "),o("div",{staticClass:"Answer"},[o("p",[t._v("Answer Code")]),t._v(" "),o("b-form-group",{attrs:{id:"group-answerlang"}},[o("b-form-select",{attrs:{id:"answerlang",options:t.langs,size:"sm"},model:{value:t.qForm.answerlang,callback:function(e){t.$set(t.qForm,"answerlang",e)},expression:"qForm.answerlang"}})],1),t._v(" "),o("b-form-group",[o("b-form-textarea",{attrs:{id:"answercode",placeholder:"答案",size:"sm"},model:{value:t.qForm.answercode,callback:function(e){t.$set(t.qForm,"answercode",e)},expression:"qForm.answercode"}})],1)],1),t._v(" "),o("div",{staticClass:"DataFunc"},[o("p",[t._v("Data Func")]),t._v(" "),o("b-form-group",{attrs:{id:"group-datalang"}},[o("b-form-select",{attrs:{id:"datalang",options:t.langs,size:"sm"},model:{value:t.qForm.testdata.DataLang,callback:function(e){t.$set(t.qForm.testdata,"DataLang",e)},expression:"qForm.testdata.DataLang"}})],1),t._v(" "),o("b-form-group",[o("b-form-textarea",{attrs:{id:"datafunc",placeholder:"測試函式",size:"sm"},model:{value:t.qForm.testdata.DataCode,callback:function(e){t.$set(t.qForm.testdata,"DataCode",e)},expression:"qForm.testdata.DataCode"}})],1)],1),t._v(" "),o("b-row",[o("b-col",{attrs:{md:"3","offset-md":"2"}},[o("b-button",{attrs:{to:"/admin/quizlist",pill:"",block:"",type:"submit",variant:"outline-primary"}},[t._v("取消")])],1),t._v(" "),o("b-col",{attrs:{md:"3","offset-md":"1"}},[o("b-button",{attrs:{pill:"",block:"",type:"submit",variant:"outline-primary"}},[t._v("新增")])],1)],1)],1)],1)],1)}),[],!1,null,"56591b43",null);e.default=component.exports}}]);