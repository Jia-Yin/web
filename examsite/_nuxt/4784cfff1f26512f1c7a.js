(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{771:function(t,o,e){var content=e(819);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("0e254f9d",content,!0,{sourceMap:!1})},818:function(t,o,e){"use strict";var n=e(771);e.n(n).a},819:function(t,o,e){(o=e(39)(!1)).push([t.i,".card[data-v-4ffbe5a2]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-4ffbe5a2]{margin-bottom:24px}.btn[data-v-4ffbe5a2]{max-width:300px;margin:12px auto 24px}",""]),t.exports=o},909:function(t,o,e){"use strict";e.r(o);var n={data:function(){return{qid:null,qForm:{type:"singlechoice",title:null,question:null,option1:null,option2:null,option3:null,option4:null,answer:0},answers:[{text:"1",value:0},{text:"2",value:1},{text:"3",value:2},{text:"4",value:3}]}},mounted:function(){var t=this.$store.state.params.quiz;this.qid=t.id,this.qForm.type=t.type,this.qForm.title=t.title,this.qForm.question=t.question,this.qForm.option1=t.options[0],this.qForm.option2=t.options[1],t.options.length>2&&(this.qForm.option3=t.options[2]),t.options.length>3&&(this.qForm.option4=t.options[3]),this.qForm.answer=t.answer},methods:{onSubmit:function(){var t=this,o=JSON.parse(JSON.stringify(this.qForm));o.id=this.qid;var e=[o.option1,o.option2];""!==o.option3&&e.push(o.option3),""!==o.option4&&e.push(o.option4),o.options=e,delete o.option1,delete o.option2,delete o.option3,delete o.option4,o.collection="quizzes",this.$store.dispatch("updateCollectionItem",o).then((function(o){t.$store.commit("setObject",{key:"quiz",value:o}),t.$router.push("/admin/testquiz")})).catch((function(t){}))}}},r=(e(818),e(33)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",{attrs:{fluid:""}},[e("b-card",{staticClass:"my-card",attrs:{title:"修改問題"}},[e("b-form",{on:{submit:function(o){return o.preventDefault(),t.onSubmit(o)}}},[e("b-form-group",[e("b-form-input",{attrs:{id:"qtitle",type:"text",placeholder:"Title",size:"sm"},model:{value:t.qForm.title,callback:function(o){t.$set(t.qForm,"title",o)},expression:"qForm.title"}})],1),t._v(" "),e("b-form-group",[e("b-form-textarea",{attrs:{id:"qquestion",placeholder:"問題",size:"sm"},model:{value:t.qForm.question,callback:function(o){t.$set(t.qForm,"question",o)},expression:"qForm.question"}})],1),t._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qoption1",placeholder:"選項1",size:"sm"},model:{value:t.qForm.option1,callback:function(o){t.$set(t.qForm,"option1",o)},expression:"qForm.option1"}})],1),t._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qoption2",placeholder:"選項2",size:"sm"},model:{value:t.qForm.option2,callback:function(o){t.$set(t.qForm,"option2",o)},expression:"qForm.option2"}})],1),t._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qoption3",placeholder:"選項3",size:"sm"},model:{value:t.qForm.option3,callback:function(o){t.$set(t.qForm,"option3",o)},expression:"qForm.option3"}})],1),t._v(" "),e("b-form-group",[e("b-form-input",{attrs:{id:"qoption4",placeholder:"選項4",size:"sm"},model:{value:t.qForm.option4,callback:function(o){t.$set(t.qForm,"option4",o)},expression:"qForm.option4"}})],1),t._v(" "),e("b-form-group",[e("b-form-select",{attrs:{id:"qanswer",options:t.answers,size:"sm"},model:{value:t.qForm.answer,callback:function(o){t.$set(t.qForm,"answer",o)},expression:"qForm.answer"}})],1),t._v(" "),e("b-row",[e("b-col",{attrs:{md:"3","offset-md":"2"}},[e("b-button",{attrs:{to:"/admin/quizlist",pill:"",block:"",type:"submit",variant:"outline-primary"}},[t._v("取消")])],1),t._v(" "),e("b-col",{attrs:{md:"3","offset-md":"1"}},[e("b-button",{attrs:{pill:"",block:"",type:"submit",variant:"outline-primary"}},[t._v("修改")])],1)],1)],1)],1)],1)}),[],!1,null,"4ffbe5a2",null);o.default=component.exports}}]);