(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{325:function(t,r,e){var content=e(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("196a9e5f",content,!0,{sourceMap:!1})},373:function(t,r,e){"use strict";var n=e(325);e.n(n).a},374:function(t,r,e){(t.exports=e(27)(!1)).push([t.i,"input[data-v-34f136bf]{margin-left:12px;line-height:200%;border-radius:10px;width:300px}.row[data-v-34f136bf]{margin:32px 0 18px}",""])},408:function(t,r,e){"use strict";e.r(r);e(40);var n,o=e(10),c={data:function(){return{qstr:""}},mounted:(n=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.state.admin.groups||this.$store.dispatch("admin/getCollection","groups");case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),methods:{toggleMark:function(){this.$store.commit("admin/toggleMark")},toggleItem:function(t){var r=this;this.$store.commit("admin/toggleItem",{dkey:"groups",dvalue:t.id}),this.toggleMark(),this.$nextTick((function(){r.toggleMark()}))},remove:function(t){confirm("確定要刪除嗎？")&&this.$store.dispatch("admin/delData",{dkey:"groups",dvalue:t})}},computed:{mark:function(){return this.$store.state.admin.mark},groups:function(){return""===this.qstr?this.$store.state.admin.groups:this.$store.getters["admin/filter"]({dkey:"groups",dvalue:this.qstr})}}},l=(e(373),e(15)),component=Object(l.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.qstr,expression:"qstr"}],attrs:{type:"text",placeholder:" 搜尋..."},domProps:{value:t.qstr},on:{input:function(r){r.target.composing||(t.qstr=r.target.value)}}}),t._v("  \n    "),e("b-button",{attrs:{pill:"",variant:"outline-primary",to:"/admin/group/new"}},[t._v("新增")]),t._v(" "),t.mark?e("span",[e("b-button",{attrs:{pill:"",variant:"primary"},on:{click:function(r){return t.toggleMark()}}},[t._v("標記")])],1):e("span",[e("b-button",{attrs:{pill:"",variant:"outline-primary"},on:{click:function(r){return t.toggleMark()}}},[t._v("標記")])],1)],1),t._v(" "),e("table",{staticClass:"table table-hover table-striped"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("名稱")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("備註")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("操作")])])]),t._v(" "),e("tbody",t._l(t.groups,(function(r,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",[t._v(t._s(r.note))]),t._v(" "),e("td",[t.mark?e("span",[e("b-form-checkbox",{attrs:{checked:r.mark},on:{change:function(e){return t.toggleItem(r)}}})],1):e("span",[e("b-button",{attrs:{size:"sm",pill:"",variant:"outline-warning"}},[e("fa",{attrs:{icon:["far","eye"]}})],1),t._v(" "),e("b-button",{attrs:{size:"sm",pill:"",variant:"outline-primary"},on:{click:function(e){return t.remove(r.id)}}},[e("fa",{attrs:{icon:["far","trash-alt"]}})],1)],1)])])})),0)])],1)}),[],!1,null,"34f136bf",null);r.default=component.exports}}]);