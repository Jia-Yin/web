(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{743:function(t,e,r){"use strict";r(5),r(2),r(3),r(1),r(4);var n=r(0),o=r(99);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={data:function(){return{fields:[{key:"type",label:"Type",sortable:!0,sortDirection:"desc"},{key:"title",label:"Title",sortable:!0,sortDirection:"desc"},{key:"question",label:"Question",sortable:!1},{key:"actions",label:"Action",class:"text-center"}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],todel:null,selected:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({user:function(t){return t.user},quizzes:function(t){return t.quizzes}})),mounted:function(){this.totalRows=this.quizzes.length},created:function(){var t=this;this.quizzes&&0===this.quizzes.length&&this.$store.dispatch("getCollection","quizzes").then((function(){t.totalRows=t.quizzes.length}))},methods:{onRowSelected:function(t){this.selected=t,this.$emit("rowSelected",t)},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},editquiz:function(t){this.$store.commit("setObject",{key:"quiz",value:t}),"singlechoice"===t.type?this.$router.push("/admin/scedit"):"functest"===t.type?this.$router.push("/admin/ftedit"):"progtest"===t.type?this.$router.push("/admin/pgedit"):"fillin"===t.type&&this.$router.push("/admin/fiedit")},copyquiz:function(t){var e=this,r=JSON.parse(JSON.stringify(t));delete r.id,r.title+="(COPY)",this.$store.dispatch("addCollectionItem",{collection:"quizzes",item:r}).then((function(){e.$router.push("/admin/quizlist")}))},testquiz:function(t){this.$store.commit("setObject",{key:"quiz",value:t}),this.$router.push("/admin/testquiz")},deletequiz:function(){var t=this;this.$store.dispatch("deleteDoc",{collection:"quizzes",id:this.todel.id}).then((function(){t.$router.push("/admin/quizlist")}))},deleteconfirm:function(t){this.todel=t,this.$bvModal.show("modal-delete")}},watch:{quizzes:function(t){this.totalRows=this.quizzes.length}}},d=r(31),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"qpanel"},[r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"4"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),r("b-input-group-append",[r("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),t._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"2"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"N","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[r("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"1"}},[r("b-button",{attrs:{size:"sm",variant:"outline-success",to:"/admin/quizadd"}},[t._v("New")])],1),t._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"5"}},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),t._v(" "),r("b-modal",{attrs:{id:"modal-delete",title:"確認刪除"},on:{ok:function(e){return t.deletequiz()}}},[r("p",{staticClass:"my-4"},[t._v(t._s(t.todel&&t.todel.title))])]),t._v(" "),r("b-table",{staticClass:"mt-3",attrs:{"show-empty":"",small:"",stacked:"md",selectable:!0,"select-mode":"range",items:t.quizzes,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,filterIncludedFields:t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered,"row-selected":t.onRowSelected},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[r("b-button-group",[r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return t.testquiz(e.item)}}},[r("fa",{attrs:{icon:"check"}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return t.editquiz(e.item)}}},[r("fa",{attrs:{icon:"edit"}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return t.copyquiz(e.item)}}},[r("fa",{attrs:{icon:"copy"}})],1),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return t.deleteconfirm(e.item)}}},[r("fa",{attrs:{icon:"trash-alt"}})],1)],1)]}}])})],1)}),[],!1,null,null,null);e.a=component.exports},885:function(t,e,r){"use strict";r.r(e);r(5),r(2),r(3),r(1),r(4);var n=r(0),o=r(99);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={components:{QuizMan:r(743).a},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({user:function(t){return t.user}})),methods:{}},d=r(31),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{attrs:{fluid:""}},[e("h2",{staticClass:"my-4"},[this._v("Quiz List")]),this._v(" "),e("QuizMan")],1)}),[],!1,null,null,null);e.default=component.exports}}]);