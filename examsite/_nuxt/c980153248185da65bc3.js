(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{898:function(e,t,r){"use strict";r.r(t);r(5),r(2),r(3),r(1),r(4),r(58);var n=r(14),l=r(0),o=r(83),c=r(19);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={data:function(){return{thedate:"",showResults:null,selectedUser:null,totalRows:0,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:["name","stdID"],fields:[{key:"name",label:"Name",sortable:!0,sortDirection:"desc"},{key:"dept",label:"Dept",sortable:!0},{key:"stdID",label:"StdID",sortable:!0},{key:"grade",label:"Grade",sortable:!0}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({user:function(e){return e.user},users:function(e){return e.users}})),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.users||0!==e.users.length){t.next=3;break}return t.next=3,e.$store.dispatch("getCollection","users");case 3:console.log("Users",e.users);case 4:case"end":return t.stop()}}),t)})))()},methods:{onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},rowselected:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.selectedUser=e[0],""!=t.thedate&&t.selectedUser){r.next=3;break}return r.abrupt("return");case 3:t,n="",t.livelisten=c.c.collection("answers").where("userid","==",t.selectedUser.id).where("date","==",t.thedate).get().then((function(e){e.docs.forEach((function(e){var t=e.data().submits;t&&t.forEach((function(e){e.uans&&console.log("UANS",e.uans);var t=JSON.stringify(e,null,2);n+="\n"+t}))})),t.showResults=n}));case 6:case"end":return r.stop()}}),r)})))()}}},m=r(33),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("h2",{staticClass:"my-4"},[e._v("Check Answer")]),e._v(" "),r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"2"}},[r("b-form-input",{attrs:{size:"sm",placeholder:"20201020"},model:{value:e.thedate,callback:function(t){e.thedate=t},expression:"thedate"}})],1),e._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"4"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)],1)],1),e._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"2"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"N","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[r("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"4"}},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1),e._v(" "),r("b-table",{staticClass:"mt-3",attrs:{"show-empty":"",small:"",stacked:"md",selectable:!0,"select-mode":"single",responsive:!0,items:e.users,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,"filter-included-fields":e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered,"row-selected":e.rowselected}}),e._v(" "),r("div",[r("pre",[e._v(e._s(e.showResults))])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);