(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1045:function(t,e,n){var content=n(1226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("20e7a34a",content,!0,{sourceMap:!1})},1076:function(t,e,n){"use strict";n.r(e);var r=n(1277),o=r.b.reactiveProp,c={extends:r.a,mixins:[o],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#00F"}},scales:{yAxes:[{ticks:{min:0,max:6,stepSize:1,fontColor:"#000"},gridLines:{color:"#F7DC6F"}}],xAxes:[{gridLines:{color:"#F7DC6F"},ticks:{fontColor:"#000"}}]},plugins:{}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},j=n(55),component=Object(j.a)(c,void 0,void 0,!1,null,null,null);e.default=component.exports},1224:function(t,e,n){var map={"./af":910,"./af.js":910,"./ar":911,"./ar-dz":912,"./ar-dz.js":912,"./ar-kw":913,"./ar-kw.js":913,"./ar-ly":914,"./ar-ly.js":914,"./ar-ma":915,"./ar-ma.js":915,"./ar-sa":916,"./ar-sa.js":916,"./ar-tn":917,"./ar-tn.js":917,"./ar.js":911,"./az":918,"./az.js":918,"./be":919,"./be.js":919,"./bg":920,"./bg.js":920,"./bm":921,"./bm.js":921,"./bn":922,"./bn-bd":923,"./bn-bd.js":923,"./bn.js":922,"./bo":924,"./bo.js":924,"./br":925,"./br.js":925,"./bs":926,"./bs.js":926,"./ca":927,"./ca.js":927,"./cs":928,"./cs.js":928,"./cv":929,"./cv.js":929,"./cy":930,"./cy.js":930,"./da":931,"./da.js":931,"./de":932,"./de-at":933,"./de-at.js":933,"./de-ch":934,"./de-ch.js":934,"./de.js":932,"./dv":935,"./dv.js":935,"./el":936,"./el.js":936,"./en-au":937,"./en-au.js":937,"./en-ca":938,"./en-ca.js":938,"./en-gb":939,"./en-gb.js":939,"./en-ie":940,"./en-ie.js":940,"./en-il":941,"./en-il.js":941,"./en-in":942,"./en-in.js":942,"./en-nz":943,"./en-nz.js":943,"./en-sg":944,"./en-sg.js":944,"./eo":945,"./eo.js":945,"./es":946,"./es-do":947,"./es-do.js":947,"./es-mx":948,"./es-mx.js":948,"./es-us":949,"./es-us.js":949,"./es.js":946,"./et":950,"./et.js":950,"./eu":951,"./eu.js":951,"./fa":952,"./fa.js":952,"./fi":953,"./fi.js":953,"./fil":954,"./fil.js":954,"./fo":955,"./fo.js":955,"./fr":956,"./fr-ca":957,"./fr-ca.js":957,"./fr-ch":958,"./fr-ch.js":958,"./fr.js":956,"./fy":959,"./fy.js":959,"./ga":960,"./ga.js":960,"./gd":961,"./gd.js":961,"./gl":962,"./gl.js":962,"./gom-deva":963,"./gom-deva.js":963,"./gom-latn":964,"./gom-latn.js":964,"./gu":965,"./gu.js":965,"./he":966,"./he.js":966,"./hi":967,"./hi.js":967,"./hr":968,"./hr.js":968,"./hu":969,"./hu.js":969,"./hy-am":970,"./hy-am.js":970,"./id":971,"./id.js":971,"./is":972,"./is.js":972,"./it":973,"./it-ch":974,"./it-ch.js":974,"./it.js":973,"./ja":975,"./ja.js":975,"./jv":976,"./jv.js":976,"./ka":977,"./ka.js":977,"./kk":978,"./kk.js":978,"./km":979,"./km.js":979,"./kn":980,"./kn.js":980,"./ko":981,"./ko.js":981,"./ku":982,"./ku.js":982,"./ky":983,"./ky.js":983,"./lb":984,"./lb.js":984,"./lo":985,"./lo.js":985,"./lt":986,"./lt.js":986,"./lv":987,"./lv.js":987,"./me":988,"./me.js":988,"./mi":989,"./mi.js":989,"./mk":990,"./mk.js":990,"./ml":991,"./ml.js":991,"./mn":992,"./mn.js":992,"./mr":993,"./mr.js":993,"./ms":994,"./ms-my":995,"./ms-my.js":995,"./ms.js":994,"./mt":996,"./mt.js":996,"./my":997,"./my.js":997,"./nb":998,"./nb.js":998,"./ne":999,"./ne.js":999,"./nl":1e3,"./nl-be":1001,"./nl-be.js":1001,"./nl.js":1e3,"./nn":1002,"./nn.js":1002,"./oc-lnc":1003,"./oc-lnc.js":1003,"./pa-in":1004,"./pa-in.js":1004,"./pl":1005,"./pl.js":1005,"./pt":1006,"./pt-br":1007,"./pt-br.js":1007,"./pt.js":1006,"./ro":1008,"./ro.js":1008,"./ru":1009,"./ru.js":1009,"./sd":1010,"./sd.js":1010,"./se":1011,"./se.js":1011,"./si":1012,"./si.js":1012,"./sk":1013,"./sk.js":1013,"./sl":1014,"./sl.js":1014,"./sq":1015,"./sq.js":1015,"./sr":1016,"./sr-cyrl":1017,"./sr-cyrl.js":1017,"./sr.js":1016,"./ss":1018,"./ss.js":1018,"./sv":1019,"./sv.js":1019,"./sw":1020,"./sw.js":1020,"./ta":1021,"./ta.js":1021,"./te":1022,"./te.js":1022,"./tet":1023,"./tet.js":1023,"./tg":1024,"./tg.js":1024,"./th":1025,"./th.js":1025,"./tk":1026,"./tk.js":1026,"./tl-ph":1027,"./tl-ph.js":1027,"./tlh":1028,"./tlh.js":1028,"./tr":1029,"./tr.js":1029,"./tzl":1030,"./tzl.js":1030,"./tzm":1031,"./tzm-latn":1032,"./tzm-latn.js":1032,"./tzm.js":1031,"./ug-cn":1033,"./ug-cn.js":1033,"./uk":1034,"./uk.js":1034,"./ur":1035,"./ur.js":1035,"./uz":1036,"./uz-latn":1037,"./uz-latn.js":1037,"./uz.js":1036,"./vi":1038,"./vi.js":1038,"./x-pseudo":1039,"./x-pseudo.js":1039,"./yo":1040,"./yo.js":1040,"./zh-cn":1041,"./zh-cn.js":1041,"./zh-hk":1042,"./zh-hk.js":1042,"./zh-mo":1043,"./zh-mo.js":1043,"./zh-tw":1044,"./zh-tw.js":1044};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=1224},1225:function(t,e,n){"use strict";n(1045)},1226:function(t,e,n){(e=n(60)(!1)).push([t.i,".container[data-v-0702c1f8]{max-width:700px}section[data-v-0702c1f8]{text-align:center;margin:24px 0;background:#f0cdb1;color:#f82020;padding:6px 12px;border-radius:12px}h1[data-v-0702c1f8]{color:#00f;font-size:120%}p[data-v-0702c1f8]{margin-left:48px}li[data-v-0702c1f8]{margin:0 0 10px 32px}.order[data-v-0702c1f8]{color:#00f}",""]),t.exports=e},1305:function(t,e,n){"use strict";n.r(e);n(14),n(103),n(15),n(49);var r=n(8),o=n(1076),c=n(32),j={components:{ChartBar:o.default},data:function(){return{contest:null,contestName:"c2021",answers:null,ten:null,nstr:["一","二","三","四","五","六","七","八","九","十"]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],t.contest){e.next=6;break}return e.next=4,c.d.collection("contests").doc(t.contestName).get();case 4:(r=e.sent).exists&&(t.contest=r.data());case 6:if(t.answers){e.next=11;break}return e.next=9,c.d.collection("contests").doc(t.contestName).collection("answers").get();case 9:(o=e.sent).empty||o.docs.forEach((function(t){n.push(t.data())}));case 11:n.sort((function(a,b){return b.wscore-a.wscore})),t.answers=n;case 13:case"end":return e.stop()}}),e)})))()},computed:{chartdata:function(){var s=[0,0,0,0,0,0,0,0];s[0]=Object.keys(this.contest.players).length-this.answers.length;for(var i=0;i<this.answers.length;i++){var t=this.answers[i];t.score?s[t.score/1e5]+=1:s[0]+=1}var data={labels:["0","1","2","3","4","5","6","7"],datasets:[{label:"競賽成績分佈",borderColor:"#f87979",fill:!0,backgroundColor:"#7DCEA0",data:s}]};return console.log("CDATA",data),data}},methods:{user:function(t){if(this.contest)return this.contest.players[t.userid]},newLogin:function(){var t=this.$router.resolve({path:"/login"});window.open(t.href,"_blank")}}},l=(n(1225),n(55)),component=Object(l.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("section",[t._v("程式競賽名次公佈")]),t._v(" "),t.contest&&t.answers?n("div",{staticClass:"d-flex justify-content-center"},[n("div",t._l(t.answers.slice(0,10),(function(e,r){return n("div",{key:"order"+r,staticClass:"order"},[n("span",[t._v("第"+t._s(t.nstr[r])+"名")]),t._v(" "),n("span",{staticClass:"ml-2"},[t._v("電機 "+t._s(t.user(e).grade))]),t._v(" "),n("span",{staticClass:"ml-2"},[t._v(t._s(t.user(e).name))]),t._v(" "),n("span",{staticClass:"ml-2"},[t._v(t._s(e.score/1e5)+" 題")])])})),0)]):t._e(),t._v(" "),n("section",[t._v("得分分佈")]),t._v(" "),n("div",{staticStyle:{width:"90%",margin:"10px auto"}},[t.contest&&t.answers?n("chart-bar",{attrs:{"chart-data":t.chartdata,width:100}}):t._e()],1),t._v(" "),n("br"),n("br")])}),[],!1,null,"0702c1f8",null);e.default=component.exports;installComponents(component,{ChartBar:n(1076).default})}}]);