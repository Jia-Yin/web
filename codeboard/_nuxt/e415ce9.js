(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{770:function(t,n,e){var content=e(843);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("18b3cb2e",content,!0,{sourceMap:!1})},842:function(t,n,e){"use strict";e(770)},843:function(t,n,e){(n=e(41)(!1)).push([t.i,"section[data-v-d380e7aa]{margin-top:24px;padding:10px;border:1px solid #d3d3d3}.scontent[data-v-d380e7aa]{padding:6px 50px}h1[data-v-d380e7aa]{font-size:140%;color:red;padding:12px 0 0 12px}h2[data-v-d380e7aa]{font-size:120%;color:#00f}.item[data-v-d380e7aa]{margin:6px 12px}input[data-v-d380e7aa]{float:left;margin-left:24px;width:70%}.btn[data-v-d380e7aa]{width:100px;margin-left:18px}.new[data-v-d380e7aa]{margin-top:12px}.send[data-v-d380e7aa]{width:25%;margin:12px}p[data-v-d380e7aa]{color:#00f}",""]),t.exports=n},907:function(t,n,e){"use strict";e.r(n);var o=e(13),r={data:function(){return{servers:null,httplist:[],httpslist:[],newhttp:null,newhttps:null,dismissCountDown:0}},mounted:function(){var t=this;return o.c.collection("configs").doc("servers").get().then((function(n){t.servers=n.data(),t.httplist=t.servers.http,t.httpslist=t.servers.https})).catch((function(t){return console.log(t)}))},methods:{countDownChanged:function(t){this.dismissCountDown=t},upload:function(){this.servers.http=this.httplist,this.servers.https=this.httpslist;var t=this;return o.c.collection("configs").doc("servers").set(this.servers).then((function(n){t.dismissCountDown=1})).catch((function(t){return console.log(t)}))},deletehttp:function(t){this.httplist.splice(t,1)},inserthttp:function(){this.httplist.push(this.newhttp),this.newhttp=null},deletehttps:function(t){this.httpslist.splice(t,1)},inserthttps:function(){this.httpslist.push(this.newhttps),this.newhttps=null}}},c=(e(842),e(29)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("b-container",{attrs:{fluid:""}},[e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(n){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("上傳成功！")]),t._v(" "),e("section",[e("h1",[t._v("評判伺服器")]),t._v(" "),e("div",{staticClass:"scontent"},[e("h2",[t._v("HTTP")]),t._v(" "),t._l(t.httplist,(function(n,o){return e("div",{key:o,staticClass:"item"},[t._v("\n          "+t._s(o+1)+". (\n          "),e("b-link",{on:{click:function(n){return t.deletehttp(o)}}},[e("fa",{attrs:{icon:"trash-alt"}})],1),t._v("\n          ) "+t._s(n)+"\n        ")],1)})),t._v(" "),e("div",{staticClass:"new"},[e("b-form-input",{attrs:{align:"center",placeholder:"New WS Server"},model:{value:t.newhttp,callback:function(n){t.newhttp=n},expression:"newhttp"}}),t._v(" "),e("b-button",{attrs:{variant:"outline-success"},on:{click:function(n){return t.inserthttp()}}},[t._v("新增")])],1),t._v(" "),e("hr"),t._v(" "),e("h2",[t._v("HTTPS")]),t._v(" "),t._l(t.httpslist,(function(n,o){return e("div",{key:o+1e3,staticClass:"item"},[t._v("\n          "+t._s(o+1)+". (\n          "),e("b-link",{on:{click:function(n){return t.deletehttps(o)}}},[e("fa",{attrs:{icon:"trash-alt"}})],1),t._v("\n          ) "+t._s(n)+"\n        ")],1)})),t._v(" "),e("div",{staticClass:"new"},[e("b-form-input",{attrs:{align:"center",placeholder:"New WS Server"},model:{value:t.newhttps,callback:function(n){t.newhttps=n},expression:"newhttps"}}),t._v(" "),e("b-button",{attrs:{variant:"outline-success"},on:{click:function(n){return t.inserthttps()}}},[t._v("新增")])],1)],2),t._v(" "),e("hr"),t._v(" "),e("p",{attrs:{align:"center"}},[e("b-button",{staticClass:"send",attrs:{variant:"outline-success"},on:{click:t.upload}},[t._v("更新伺服器")])],1)])],1)],1)}),[],!1,null,"d380e7aa",null);n.default=component.exports}}]);