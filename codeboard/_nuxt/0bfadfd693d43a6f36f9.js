(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{328:function(t,e,r){var content=r(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("3afc184e",content,!0,{sourceMap:!1})},381:function(t,e,r){"use strict";var n=r(328);r.n(n).a},382:function(t,e,r){(t.exports=r(27)(!1)).push([t.i,"input[data-v-9a1c6bc8]{margin-left:12px;line-height:200%;border-radius:10px;width:300px}.row[data-v-9a1c6bc8]{margin:32px 0 18px}",""])},414:function(t,e,r){"use strict";r.r(e);r(40);var n,o=r(10),c={data:function(){return{qstr:""}},mounted:(n=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.state.admin.users||this.$store.dispatch("admin/getCollection","users"),this.$store.state.admin.submits||this.$store.dispatch("admin/getAllSubmits");case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),methods:{lookuser:function(t){this.$store.commit("person/clearData"),this.$store.commit("setData",{key:"currentUser",value:t}),this.$router.push("/admin/user/look")},toggleMark:function(){this.$store.commit("admin/toggleMark")},toggleItem:function(t){var e=this;this.$store.commit("admin/toggleItem",{dkey:"users",dvalue:t.id}),this.toggleMark(),this.$nextTick((function(){e.toggleMark()}))},role:function(t){return t||"學生"},submitstat:function(t){if(this.submits){var e=0,r=0;return this.submits.forEach((function(n){n.user===t.id&&("AC"===n.status?e++:r++)})),"".concat(e,"/").concat(e+r)}return"載入中..."}},computed:{mark:function(){return this.$store.state.admin.mark},users:function(){return""===this.qstr?this.$store.state.admin.users:this.$store.getters["admin/filter"]({dkey:"users",dvalue:this.qstr})},submits:function(){return this.$store.state.admin.submits}}},l=(r(381),r(15)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.qstr,expression:"qstr"}],attrs:{type:"text",placeholder:" 搜尋..."},domProps:{value:t.qstr},on:{input:function(e){e.target.composing||(t.qstr=e.target.value)}}}),t._v("  \n    "),r("b-button",{attrs:{pill:"",variant:"outline-warning"}},[t._v("新增")]),t._v(" "),t.mark?r("span",[r("b-button",{attrs:{pill:"",variant:"primary"},on:{click:function(e){return t.toggleMark()}}},[t._v("標記")])],1):r("span",[r("b-button",{attrs:{pill:"",variant:"outline-primary"},on:{click:function(e){return t.toggleMark()}}},[t._v("標記")])],1)],1),t._v(" "),r("table",{staticClass:"table table-hover table-striped"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("姓名")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("學號")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("科系")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("年級")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("類型")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("解題")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("操作")])])]),t._v(" "),r("tbody",t._l(t.users,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(n+1))]),t._v(" "),r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.stdID))]),t._v(" "),r("td",[t._v(t._s(e.dept))]),t._v(" "),r("td",[t._v(t._s(e.grade))]),t._v(" "),r("td",[t._v(t._s(t.role(e.role)))]),t._v(" "),r("td",[t._v(t._s(t.submitstat(e)))]),t._v(" "),r("td",[t.mark?r("span",[r("b-form-checkbox",{attrs:{checked:e.mark},on:{change:function(r){return t.toggleItem(e)}}})],1):r("span",[r("b-button",{attrs:{size:"sm",pill:"",variant:"outline-primary"},on:{click:function(r){return t.lookuser(e)}}},[r("fa",{attrs:{icon:["far","eye"]}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",pill:"",variant:"outline-warning",to:"/admin/user"}},[r("fa",{attrs:{icon:["far","trash-alt"]}})],1)],1)])])})),0)])],1)}),[],!1,null,"9a1c6bc8",null);e.default=component.exports}}]);