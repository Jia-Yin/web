(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{328:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("27834f72",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";var r=n(328);n.n(r).a},382:function(t,e,n){(t.exports=n(27)(!1)).push([t.i,"section[data-v-53e23c98]{margin-top:24px}input[data-v-53e23c98]{display:inline-block;width:80%}",""])},418:function(t,e,n){"use strict";n.r(e);n(21),n(40);var r,o,c=n(10),l=n(36),d=n(12),v={data:function(){return{dconvstatus:"N/A",theuser:null,readpara:null,readans:null,writepara:null,writeans:null}},methods:{twod:function(t){return t<=9?"0"+t:t},subtime:function(t){var e=new Date;return t&&(e=new Date(t)),""+e.getFullYear()+this.twod(e.getMonth()+1)+this.twod(e.getDate())+this.twod(e.getHours())+this.twod(e.getMinutes())+this.twod(e.getSeconds())},datestr:(o=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n,r,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,n={},r=[],t.next=5,d.c.collection("submits").get().then((function(t){t.docs&&t.docs.forEach((function(t){r.push(t.id);var o=t.data(),c=null;o.timestamp&&(c=o.timestamp.toDate()),console.log("timestamp",c),n[t.id]=e.subtime(c),console.log("new time",n[t.id])}))}));case 5:r.forEach((function(t){d.c.collection("submits").doc(t).update({created:n[t],timestamp:l.firestore.FieldValue.delete()}),o.dconvstatus=t}));case 6:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),writeToFS:function(){},readFromFS:(r=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,n="",t.next=4,d.c.collection("courses").doc(this.readpara).get().then((function(t){n=t.data().groups,e.readans=n}));case 4:d.c.collection("groups").where(l.firestore.FieldPath.documentId(),"in",n).get().then((function(t){var n=[];t.docs.forEach((function(t){n.push(t.data().name)})),console.log("GROUPS",n),e.readans=n}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},f=(n(381),n(15)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[t._v("\n  To Process:\n  "),n("div",[n("p",[t._v("\n      Submits datetime convert to string.\n      "),n("b-button",{on:{click:function(e){return t.datestr()}}},[t._v("Go")])],1),t._v(" "),n("p",[t._v("Status: "+t._s(t.dconvstatus))])]),t._v(" "),n("hr"),t._v(" "),n("section",[n("h2",[t._v("Set User")]),t._v(" "),n("b-form-input",{model:{value:t.theuser,callback:function(e){t.theuser=e},expression:"theuser"}})],1),t._v(" "),n("section",[n("h2",[t._v("Read from Firestore")]),t._v(" "),n("b-form-input",{model:{value:t.readpara,callback:function(e){t.readpara=e},expression:"readpara"}}),t._v(" "),n("button",{on:{click:t.readFromFS}},[t._v("Read")]),t._v(" "),n("h4",[t._v("Results: "+t._s(t.readans))])],1),t._v(" "),n("section",[n("h2",[t._v("Write to Firestore.")]),t._v(" "),n("b-form-input",{model:{value:t.writepara,callback:function(e){t.writepara=e},expression:"writepara"}}),t._v(" "),n("button",{on:{click:t.writeToFS}},[t._v("Write")]),t._v(" "),n("h4",[t._v("Results: "+t._s(t.writeans))])],1)])}),[],!1,null,"53e23c98",null);e.default=component.exports}}]);