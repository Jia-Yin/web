(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{329:function(t,e,r){var content=r(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("cafab854",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";var n=r(329);r.n(n).a},385:function(t,e,r){(t.exports=r(27)(!1)).push([t.i,"input[data-v-571c27e6]{margin-left:12px;line-height:210%;border-radius:10px;width:300px;vertical-align:bottom}.row[data-v-571c27e6]{display:flex;justify-content:space-between;margin:32px 0 18px}.submitalert[data-v-571c27e6]{position:fixed;left:30vw;top:20vh;padding:24px;width:40vw;background:#fafad2;border:8px solid #f08080;border-radius:24px;text-align:center;overflow:auto;max-height:60vh}",""])},419:function(t,e,r){"use strict";r.r(e);r(21),r(40);var n,o,l=r(10),c={data:function(){return{qstr:"",sid:"",showlen:24,showsubmit:!1,searchresults:[]}},mounted:(o=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.state.admin.problems||this.$store.dispatch("admin/getCollection","problems"),this.$store.state.admin.users||this.$store.dispatch("admin/getCollection","users");case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),methods:{toggleMark:function(){this.$store.commit("admin/toggleMark")},toggleItem:function(t){var e=this;this.$store.commit("admin/toggleItem",{dkey:"problems",dvalue:t.id}),this.toggleMark(),this.$nextTick((function(){e.toggleMark()}))},shorten:function(t){return t?t.length>this.showlen?t.slice(0,this.showlen)+"...":t:"Error"},totalnum:function(t){return this.submits?this.submits.filter((function(e){return e.problem===t.id})).length:0},passnum:function(t){return this.submits?this.submits.filter((function(e){return e.problem===t.id&&"AC"===e.status})).length:0},searchSubmit:function(){var t=this;if(this.submits){var e=this.submits.filter((function(e){return e.id.indexOf(t.sid)>=0}));this.showsubmit=!0,this.searchresults=e}},debug:(n=Object(l.a)(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("person/getSubmitCode",e).then((function(t){r.$store.commit("person/setPathItem",{key:"problem",value:r.problemBySubmit(e)}),r.$store.commit("person/saveCode",{id:e.problem,code:t})}));case 2:this.$router.push("/coding");case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)}),tryProblem:function(t){this.$store.commit("person/setPathItem",{key:"problem",value:t}),this.$router.push("/coding")},problemtitle:function(t){return t.name||t.title},problemBySubmit:function(t){if(this.problems)for(var i=0;i<this.problems.length;i++){var e=this.problems[i];if(e.id===t.problem)return e}return null},userBySubmit:function(t){if(this.users)for(var i=0;i<this.users.length;i++){var e=this.users[i];if(e.id===t.user)return e}return null},problemNameBySubmit:function(t){var e=this.problemBySubmit(t),r=this.userBySubmit(t),n="";return r&&(n+=r.name+"--"),e?n+"".concat(e.name," (").concat(t.id.slice(0,8),")"):"找不到"}},computed:{mark:function(){return this.$store.state.admin.mark},users:function(){return this.$store.state.admin.users},problems:function(){return""===this.qstr?this.$store.state.admin.problems:this.$store.getters["admin/filter"]({dkey:"problems",dvalue:this.qstr})},submits:function(){return this.$store.state.admin.submits}}},m=(r(384),r(15)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[t.showsubmit?r("div",{staticClass:"submitalert",attrs:{show:""}},[r("b-container",[0==t.searchresults.length?r("div",[r("p",[t._v("找不到這個提交號碼！")])]):r("div",[r("p",[t._v("選哪一個？")]),t._v(" "),t._l(t.searchresults,(function(e,n){return r("p",{key:n},[r("b-button",{attrs:{pill:"",block:"",variant:"warning"},on:{click:function(r){return t.debug(e)}}},[t._v(t._s(t.problemNameBySubmit(e)))])],1)}))],2),t._v(" "),r("b-button",{attrs:{variant:"success"},on:{click:function(e){t.showsubmit=!1}}},[t._v("取消")])],1)],1):t._e(),t._v(" "),r("b-row",[r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.qstr,expression:"qstr"}],attrs:{type:"text",placeholder:" 搜尋..."},domProps:{value:t.qstr},on:{input:function(e){e.target.composing||(t.qstr=e.target.value)}}}),t._v("  \n      "),r("b-button",{attrs:{pill:"",variant:"outline-primary",to:"/admin/problem/new"}},[t._v("新增")]),t._v(" "),t.mark?r("span",[r("b-button",{attrs:{pill:"",variant:"primary"},on:{click:function(e){return t.toggleMark()}}},[t._v("標記")])],1):r("span",[r("b-button",{attrs:{pill:"",variant:"outline-primary"},on:{click:function(e){return t.toggleMark()}}},[t._v("標記")])],1)],1),t._v(" "),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.sid,expression:"sid"}],attrs:{type:"text",placeholder:" 提交號碼..."},domProps:{value:t.sid},on:{input:function(e){e.target.composing||(t.sid=e.target.value)}}}),t._v("  \n      "),r("b-button",{attrs:{pill:"",variant:"outline-primary",disabled:""==t.sid},on:{click:t.searchSubmit}},[t._v("尋找")])],1)]),t._v(" "),r("table",{staticClass:"table table-hover table-striped"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("題目")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("描述")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("提交")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("通過")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("通過率")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("操作")])])]),t._v(" "),r("tbody",t._l(t.problems,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(n+1))]),t._v(" "),r("td",[t._v(t._s(t.problemtitle(e)))]),t._v(" "),r("td",[t._v(t._s(t.shorten(e.description)))]),t._v(" "),r("td",[t._v(t._s(t.totalnum(e)))]),t._v(" "),r("td",[t._v(t._s(t.passnum(e)))]),t._v(" "),r("td",[t._v(t._s(Math.floor(100*t.passnum(e)/t.totalnum(e))/100))]),t._v(" "),r("td",[t.mark?r("span",[r("b-form-checkbox",{attrs:{checked:e.mark},on:{change:function(r){return t.toggleItem(e)}}})],1):r("span",[r("b-button",{attrs:{size:"sm",pill:"",variant:"outline-primary"},on:{click:function(r){return t.tryProblem(e)}}},[r("fa",{attrs:{icon:"play-circle"}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",pill:"",variant:"outline-warning"}},[r("fa",{attrs:{icon:["far","eye"]}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",pill:"",variant:"outline-warning"}},[r("fa",{attrs:{icon:["far","trash-alt"]}})],1)],1)])])})),0)])],1)}),[],!1,null,"571c27e6",null);e.default=component.exports}}]);