(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{757:function(o,t,e){var content=e(792);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(40).default)("0fe7f469",content,!0,{sourceMap:!1})},791:function(o,t,e){"use strict";var n=e(757);e.n(n).a},792:function(o,t,e){(t=e(39)(!1)).push([o.i,".card[data-v-16693fc1]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-16693fc1]{margin-bottom:24px}.btn[data-v-16693fc1]{max-width:300px;margin:12px auto 24px}",""]),o.exports=t},841:function(o,t,e){"use strict";e.r(t);var n={data:function(){return{qForm:{type:"singlechoice",title:null,question:null,image:null,option1:null,option2:null,option3:null,option4:null,answer:0},answers:[{text:"1",value:0},{text:"2",value:1},{text:"3",value:2},{text:"4",value:3}]}},methods:{onSubmit:function(){var o=this,t=JSON.parse(JSON.stringify(this.qForm)),e=[t.option1,t.option2];""!=t.option3&&e.push(t.option3),""!=t.option4&&e.push(t.option4),t.options=e,delete t.option1,delete t.option2,delete t.option3,delete t.option4,null!==t.image&&""!==t.image||delete t.image,this.$store.dispatch("addQuiz",t).then((function(){o.$router.push("/admin/quizlist")})).catch((function(o){}))}}},r=(e(791),e(33)),component=Object(r.a)(n,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("b-container",{attrs:{fluid:""}},[e("b-card",{staticClass:"my-card",attrs:{title:"新增問題"}},[e("b-form",{on:{submit:function(t){return t.preventDefault(),o.onSubmit(t)}}},[e("b-form-group",[e("b-form-input",{attrs:{id:"qtitle",type:"text",placeholder:"Title",size:"sm"},model:{value:o.qForm.title,callback:function(t){o.$set(o.qForm,"title",t)},expression:"qForm.title"}})],1),o._v(" "),e("b-form-group",[e("b-form-textarea",{attrs:{id:"qquestion",placeholder:"問題",size:"sm"},model:{value:o.qForm.question,callback:function(t){o.$set(o.qForm,"question",t)},expression:"qForm.question"}})],1),o._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qimage",placeholder:"圖片",size:"sm"},model:{value:o.qForm.image,callback:function(t){o.$set(o.qForm,"image",t)},expression:"qForm.image"}})],1),o._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qoption1",placeholder:"選項1",size:"sm"},model:{value:o.qForm.option1,callback:function(t){o.$set(o.qForm,"option1",t)},expression:"qForm.option1"}})],1),o._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qoption2",placeholder:"選項2",size:"sm"},model:{value:o.qForm.option2,callback:function(t){o.$set(o.qForm,"option2",t)},expression:"qForm.option2"}})],1),o._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qoption3",placeholder:"選項3",size:"sm"},model:{value:o.qForm.option3,callback:function(t){o.$set(o.qForm,"option3",t)},expression:"qForm.option3"}})],1),o._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qoption4",placeholder:"選項4",size:"sm"},model:{value:o.qForm.option4,callback:function(t){o.$set(o.qForm,"option4",t)},expression:"qForm.option4"}})],1),o._v(" "),e("b-form-group",[e("b-form-select",{attrs:{id:"qanswer",options:o.answers,size:"sm"},model:{value:o.qForm.answer,callback:function(t){o.$set(o.qForm,"answer",t)},expression:"qForm.answer"}})],1),o._v(" "),e("b-row",[e("b-button",{attrs:{to:"/admin/quizlist",pill:"",block:"",type:"submit",variant:"outline-primary"}},[o._v("\n            取消\n          ")]),o._v(" "),e("b-button",{attrs:{pill:"",block:"",type:"submit",variant:"outline-primary"}},[o._v("\n            新增\n          ")])],1)],1)],1)],1)}),[],!1,null,"16693fc1",null);t.default=component.exports}}]);