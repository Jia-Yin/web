(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{458:function(t,e,n){var content=n(553);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1ab24727",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";var r=n(458);n.n(r).a},553:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".card[data-v-5031883e]{margin:30px 10px;padding:10px 10px 0}.card-title[data-v-5031883e]{margin-bottom:24px}.btn[data-v-5031883e]{max-width:200px;margin:12px auto 24px}.alert[data-v-5031883e]{margin-top:30px;margin-bottom:0}input[data-v-5031883e],select[data-v-5031883e]{margin-top:6px}",""])},585:function(t,e,n){"use strict";n.r(e);n(43);var r,o,c=n(10),d=n(11),l=n(40),m=n.n(l),h=(n(216),{data:function(){return{notunique:!1,qstr:"",sid:"",showsubmit:!1,searchresults:[]}},mounted:function(){},methods:{searchSubmit:(o=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.notunique=!1,e=this.sid.length,n=this.sid.charCodeAt(e-1),r=this.sid.substr(0,e-1)+String.fromCharCode(n+1),o=null,t.next=7,d.c.collection("submits").where(m.a.firestore.FieldPath.documentId(),">",this.sid).where(m.a.firestore.FieldPath.documentId(),"<=",r).get().then((function(t){if(!t.empty){var e=t.docs;if(1==e.length){var n=e[0].data();n.id=e[0].id,o=n}}}));case 7:if(!o){t.next=15;break}return c=null,t.next=11,d.c.collection("problems").doc(o.problem).get().then((function(t){var e=t.data();e.id=t.id,c=e}));case 11:console.log("Problem",c),c&&(this.$store.commit("person/setObjectField",{key:"path",field:"problem",value:c}),data={code:o.code,lang:o.lang},this.$store.commit("person/setObjectField",{key:"savecodes",field:o.problem,value:data}),this.$router.push("/coding")),t.next=17;break;case 15:console.log("HERE"),this.notunique=!0;case 17:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),debug:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})}}),f=(n(552),n(17)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-col",{attrs:{md:"6","offset-md":"3"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sid,expression:"sid"}],attrs:{type:"text",placeholder:" 提交號碼..."},domProps:{value:t.sid},on:{input:function(e){e.target.composing||(t.sid=e.target.value)}}}),t._v("  \n      "),n("b-button",{attrs:{pill:"",variant:"outline-primary",disabled:""==t.sid},on:{click:t.searchSubmit}},[t._v("尋找")])],1),t._v(" "),t.notunique?n("div",{staticClass:"submitalert",attrs:{show:""}},[n("b-container",[n("p",[t._v("找不到這個提交號碼或結果不唯一！")])])],1):t._e()],1)}),[],!1,null,"5031883e",null);e.default=component.exports}}]);