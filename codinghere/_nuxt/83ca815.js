(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1016:function(e,t,l){"use strict";l(884)},1017:function(e,t,l){(t=l(59)(!1)).push([e.i,'[data-v-76432828] h1{color:#00f;font-family:"Arial";font-size:120%;text-decoration:underline;margin:24px 0}[data-v-76432828] h2{color:#ff4500;font-size:100%;margin:16px 0 8px}.container-fluid[data-v-76432828]{width:90%;margin:30px auto}.localeButton[data-v-76432828]{text-align:right}section[data-v-76432828]{background:green;color:#fff;text-align:center;margin:16px 0;padding:3px}li[data-v-76432828]{margin:8px 0}button[data-v-76432828]{min-width:100px}',""]),e.exports=t},1070:function(e,t,l){"use strict";l.r(t);l(9),l(14),l(39),l(18),l(12),l(156),l(28),l(8),l(79),l(27),l(46),l(15),l(104),l(363);var n=l(26),o=(l(54),l(10)),c=l(34),r={components:{LocaleInput:l(849).default},data:function(){return{snLang:"en",pnLang:"en",siteNews:null,pgNews:null,infoAlert:!1,info:{title:"",message:""},locales:{zh:"中文"},newLang:{text:"",value:""},localeTable:{localeContents:[],totalRows:1,filter:null,editable:!1,fields:[],file:null,fileContents:null,fileimport:!1},judgers:{http:[],https:[]},newhttp:null,newhttps:null,localeText:{Site_NewsManagement:"訊息管理",Site_LangsManagement:"語系管理",Site_JudgeManagement:"評判管理",Site_SiteNews:"平台訊息",Site_PlaygroundNews:"練習廣場訊息",Site_SupportLocales:"支援語系",Site_LocaleContents:"語系內容",Site_LocaleFilterLabel:"過濾器",Site_LocaleFilterHint:"搜尋關鍵字",Site_LocaleFilterClear:"清除",Site_LocaleField:"欄位名稱",Site_LocaleUpdateOK:"語系更新完成",Site_Edit:"編輯",Site_Add:"新增",Site_LocaleExport:"匯出",Site_LocaleImport:"匯入",Site_NewLangValue:"語言代碼",Site_Update:"更新",Site_NewLangText:"語言名稱",Site_Judggers:"評判器設定",Site_UpdateOK:"更新完成！"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText),this.locales=this.$copyObject(this.$system("locales").support),this.prepareLocaleContents(),this.$system("judgers")&&(this.judgers=this.$copyObject(this.$system("judgers"))),this.$system("news")&&(this.siteNews=Object.assign({},this.$system("news").siteNews),this.pgNews=Object.assign({},this.$system("news").playgroundNews))},mounted:function(){this.localeTable.totalRows=this.localeTable.localeContents.length},methods:{setSiteNews:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var l,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.$copyObject(e.siteNews),n={siteNews:l},(o=e.$store.state.system).news&&o.news.playgroundNews&&(n.playgroundNews=o.news.playgroundNews),t.next=6,c.d.collection("system").doc("news").set(n);case 6:e.$store.commit("setObjItem",{obj:"system",name:"news",value:n}),e.infoAlert=!0,e.info={title:e.localeText.Site_SiteNews,message:e.localeText.Site_UpdateOK};case 9:case"end":return t.stop()}}),t)})))()},setPlaygroundNews:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var l,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.$copyObject(e.pgNews),n={playgroundNews:l},(o=e.$store.state.system).news&&o.news.siteNews&&(n.siteNews=o.news.siteNews),t.next=6,c.d.collection("system").doc("news").set(n);case 6:e.$store.commit("setObjItem",{obj:"system",name:"news",value:n}),e.infoAlert=!0,e.info={title:e.localeText.Site_PlaygroundNews,message:e.localeText.Site_UpdateOK};case 9:case"end":return t.stop()}}),t)})))()},deletehttp:function(e){this.judgers.http.splice(e,1)},inserthttp:function(){this.judgers.http.push(this.newhttp),this.newhttp=null},deletehttps:function(e){this.judgers.https.splice(e,1)},inserthttps:function(){this.judgers.https.push(this.newhttps),this.newhttps=null},judgers_update:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l=e.$copyObject(e.judgers),t.next=4,c.d.collection("system").doc("judgers").set(l);case 4:e.$store.commit("setObjItem",{obj:"system",name:"judgers",value:l}),e.infoAlert=!0,e.info={title:e.localeText.Site_Judggers,message:e.localeText.Site_LocaleUpdateOK},t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},localeTable_export:function(){var e=this.localeTable.fields.map((function(e){return e.key})),t=[e].concat(Object(n.a)(this.localeTable.localeContents.map((function(t){var data=[];return e.forEach((function(e){return data.push(t[e])})),data})))).map((function(e){return e.join(",")})).join("\n"),l=new Blob([t],{type:"text/plain;charset=utf-8"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(l,"localeContents.csv");else{var o=window.document.createElement("a");o.href=window.URL.createObjectURL(l),o.download="localeContents.csv",document.body.appendChild(o),o.click(),document.body.removeChild(o)}},handleFileUpload:function(){var e=this,t=new FileReader;t.onload=function(t){for(var l=[],n=t.target.result.split("\n"),o=n[0].split(","),i=1;i<n.length;i++){for(var c=n[i].split(","),r={},d=0;d<o.length;d++){var m=c[d]||"";r[o[d].trim()]=m.trim()}l.push(r)}e.localeTable.fileContents=l},t.readAsText(this.localeTable.file)},localeTable_import:function(){this.localeTable.localeContents=this.localeTable.fileContents},localeTable_add:function(){var e={field:"Field"};for(var t in this.$system("locales").support)e[t]="";this.localeTable.localeContents.push(e)},localeTable_getLangObj:function(e){var t={};return this.localeTable.localeContents.forEach((function(l){l[e]&&""!=l[e].trim()&&(t[l.field]=l[e].trim())})),t},localeTable_update:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var l,n,o,r,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n in t.prev=0,l={},e.$system("locales").support)o=e.localeTable_getLangObj(n),l[n]=o;return t.next=5,c.d.collection("system").doc("locales").update(l);case 5:r=e.$copyObject(e.$system("locales").support),(d=e.$copyObject(l)).support=r,e.$store.commit("setObjItem",{obj:"system",name:"locales",value:d}),e.localeText=locale.updateParams(e.$system("locales")[e.locale],e.localeText),e.infoAlert=!0,e.info={title:e.localeText.Site_SupportLocales,message:e.localeText.Site_LocaleUpdateOK},t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("Error",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},prepareLocaleContents:function(){var e=[],t=[];if(this.localeTable.fields.push({key:"field",label:this.localeText.Site_LocaleField,sortable:!0}),this.$system("locales").support)for(var l in this.$system("locales").support){this.localeTable.fields.push({key:l,label:this.$system("locales").support[l]});var n=this.$system("locales")[l];if(n)for(var o in n)if(t.indexOf(o)>=0){var c=t.indexOf(o);console.assert(c>=0,{field:o,exists:t}),e[c][l]=n[o]}else{t.push(o);var r={field:o};for(var d in this.$system("locales").support)r[d]="";r[l]=n[o],e.push(r)}}this.localeTable.localeContents=e},delLang:function(e){this.$delete(this.locales,e)},addLang:function(){this.$set(this.locales,this.newLang.value,this.newLang.text)},updateLocaleSupport:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var l,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$system("locales")){t.next=6;break}return t.next=4,c.d.collection("system").doc("locales").update({support:e.locales});case 4:t.next=8;break;case 6:return t.next=8,c.d.collection("system").doc("locales").set({support:e.locales});case 8:l=e.$copyObject(e.$system("locales")),n=e.$copyObject(e.locales),l.support=n,e.$store.commit("setObjItem",{obj:"system",name:"locales",value:l}),e.infoAlert=!0,e.info={title:e.localeText.Site_SupportLocales,message:e.$system("locales")},e.prepareLocaleContents(),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log("Error",t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}},d=(l(1016),l(70)),component=Object(d.a)(r,(function(){var e=this,t=this,l=t.$createElement,n=t._self._c||l;return n("b-container",{attrs:{fluid:""}},[n("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message)+"\n    ")]),t._v(" "),n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:t.localeText.Site_NewsManagement}},[n("section",[t._v(t._s(t.localeText.Site_SiteNews))]),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("locale-input",{attrs:{rows:12},on:{curLang:function(t){e.snLang=t}},model:{value:t.siteNews,callback:function(e){t.siteNews=e},expression:"siteNews"}})],1),t._v(" "),n("b-col",{attrs:{cols:"6"}},[n("div",{domProps:{innerHTML:t._s(t.$md.render(t.$selectLocaleText(t.siteNews,t.snLang)))}})])],1),t._v(" "),n("div",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[n("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"primary"},on:{click:t.setSiteNews}},[t._v("\n                    "+t._s(t.localeText.Site_Update)+"\n                ")])],1),t._v(" "),n("section",[t._v(t._s(t.localeText.Site_PlaygroundNews))]),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("locale-input",{attrs:{rows:12},on:{curLang:function(t){e.pnLang=t}},model:{value:t.pgNews,callback:function(e){t.pgNews=e},expression:"pgNews"}})],1),t._v(" "),n("b-col",{attrs:{cols:"6"}},[n("div",{domProps:{innerHTML:t._s(t.$md.render(t.$selectLocaleText(t.pgNews,t.pnLang)))}})])],1),t._v(" "),n("div",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[n("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"primary"},on:{click:t.setPlaygroundNews}},[t._v("\n                    "+t._s(t.localeText.Site_Update)+"\n                ")])],1)],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Site_LangsManagement}},[n("section",[t._v(t._s(t.localeText.Site_SupportLocales))]),t._v(" "),n("ul",[t._l(t.locales,(function(text,e,l){return n("li",{key:"lang"+l},[t._v("\n                    "+t._s(text)+" ("+t._s(e)+")   \n                    "),n("b-link",{on:{click:function(l){return t.delLang(e)}}},[n("b-icon",{attrs:{icon:"x"}})],1)],1)})),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newLang.text,expression:"newLang.text"}],attrs:{placeholder:t.localeText.Site_NewLangText},domProps:{value:t.newLang.text},on:{input:function(e){e.target.composing||t.$set(t.newLang,"text",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newLang.value,expression:"newLang.value"}],attrs:{placeholder:t.localeText.Site_NewLangValue},domProps:{value:t.newLang.value},on:{input:function(e){e.target.composing||t.$set(t.newLang,"value",e.target.value)}}}),t._v(" "),n("b-button",{attrs:{size:"sm",pill:"",variant:"outline-primary"},on:{click:t.addLang}},[n("b-icon",{attrs:{icon:"plus"}})],1),t._v(" "),n("b-button",{attrs:{size:"sm",pill:"",variant:"primary"},on:{click:t.updateLocaleSupport}},[t._v("\n                    "+t._s(t.localeText.Site_Update)+"\n                ")])],2),t._v(" "),n("section",[t._v(t._s(t.localeText.Site_LocaleContents))]),t._v(" "),n("b-form-group",{staticClass:"mb-2",attrs:{label:t.localeText.Site_LocaleFilterLabel,"label-for":"filter-input","label-cols-sm":"1","label-align-sm":"left","label-size":"sm"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:t.localeText.Site_LocaleFilterHint},model:{value:t.localeTable.filter,callback:function(e){t.$set(t.localeTable,"filter",e)},expression:"localeTable.filter"}}),t._v(" "),n("b-input-group-append",[n("b-button",{on:{click:function(e){t.localeTable.filter=""}}},[t._v(t._s(t.localeText.Site_LocaleFilterClear))])],1)],1)],1),t._v(" "),n("b-table",{attrs:{striped:"",hover:"","sticky-header":"",small:"",bordered:"","head-row-variant":"info",items:t.localeTable.localeContents,fields:t.localeTable.fields,filter:t.localeTable.filter},scopedSlots:t._u([t.localeTable.editable?{key:"cell()",fn:function(e){var l=e.item,o=e.field.key;return[n("b-form-input",{model:{value:l[o],callback:function(e){t.$set(l,o,e)},expression:"item[key]"}})]}}:null],null,!0)}),t._v(" "),n("b-modal",{on:{ok:t.localeTable_import},model:{value:t.localeTable.fileimport,callback:function(e){t.$set(t.localeTable,"fileimport",e)},expression:"localeTable.fileimport"}},[n("b-form-file",{attrs:{size:"sm",state:Boolean(t.localeTable.file),accept:".csv",placeholder:"選擇檔案匯入"},on:{input:function(e){return t.handleFileUpload()}},model:{value:t.localeTable.file,callback:function(e){t.$set(t.localeTable,"file",e)},expression:"localeTable.file"}})],1),t._v(" "),n("div",{staticClass:"localeButton"},[n("b-button",{attrs:{size:"sm",pill:"",variant:"info"},on:{click:function(e){t.localeTable.editable=!t.localeTable.editable}}},[t._v(t._s(t.localeText.Site_Edit))]),t._v(" "),n("b-button",{attrs:{size:"sm",pill:"",variant:"info"},on:{click:t.localeTable_add}},[t._v(t._s(t.localeText.Site_Add))]),t._v(" "),n("b-button",{attrs:{size:"sm",pill:"",variant:"warning"},on:{click:t.localeTable_export}},[t._v(t._s(t.localeText.Site_LocaleExport))]),t._v(" "),n("b-button",{attrs:{size:"sm",pill:"",variant:"warning"},on:{click:function(e){t.localeTable.fileimport=!0}}},[t._v(t._s(t.localeText.Site_LocaleImport))]),t._v(" "),n("b-button",{attrs:{size:"sm",pill:"",variant:"success"},on:{click:t.localeTable_update}},[t._v(t._s(t.localeText.Site_Update))])],1)],1),t._v(" "),n("b-tab",{attrs:{title:t.localeText.Site_JudgeManagement}},[n("section",[t._v(t._s(t.localeText.Site_Judggers))]),t._v("\n            HTTP\n            "),t._l(t.judgers.http,(function(e,l){return n("div",{key:l,staticClass:"item"},[t._v("\n                "+t._s(l+1)+". (\n                "),n("b-link",{on:{click:function(e){return t.deletehttp(l)}}},[n("b-icon",{attrs:{icon:"trash"}})],1),t._v("\n                )   "+t._s(e)+"\n            ")],1)})),t._v(" "),n("div",{staticClass:"new"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newhttp,expression:"newhttp"}],attrs:{size:"50",placeholder:"New WS Server"},domProps:{value:t.newhttp},on:{input:function(e){e.target.composing||(t.newhttp=e.target.value)}}}),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:function(e){return t.inserthttp()}}},[t._v("新增")])],1),t._v(" "),n("hr"),t._v("\n            HTTPS\n            "),t._l(t.judgers.https,(function(e,l){return n("div",{key:l+1e3,staticClass:"item"},[t._v("\n                "+t._s(l+1)+". (\n                "),n("b-link",{on:{click:function(e){return t.deletehttps(l)}}},[n("b-icon",{attrs:{icon:"trash"}})],1),t._v("\n                )   "+t._s(e)+"\n            ")],1)})),t._v(" "),n("div",{staticClass:"new"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newhttps,expression:"newhttps"}],attrs:{size:"50",placeholder:"New WS Server"},domProps:{value:t.newhttps},on:{input:function(e){e.target.composing||(t.newhttps=e.target.value)}}}),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:function(e){return t.inserthttps()}}},[t._v("新增")])],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"primary"},on:{click:t.judgers_update}},[t._v("\n                    "+t._s(t.localeText.Site_Update)+"\n                ")])],1)],2)],1)],1)}),[],!1,null,"76432828",null);t.default=component.exports;installComponents(component,{LocaleInput:l(849).default})},845:function(e,t,l){var content=l(854);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(60).default)("7bc25547",content,!0,{sourceMap:!1})},849:function(e,t,l){"use strict";l.r(t);l(362);var n={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:{zh:"中文",en:"English"},content:{zh:"中文",en:"English"}}},created:function(){this.locales=this.$copyObject(this.$system("locales").support),this.value&&(this.content=this.value)},methods:{setLang:function(e){this.$emit("curLang",e)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(e){this.content=e}}},o=(l(853),l(70)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("b-tabs",e._l(e.locales,(function(t,n,o){return l("b-tab",{key:"locale"+o,attrs:{title:t},on:{click:function(t){return e.setLang(n)}}},[l("b-textarea",{attrs:{rows:e.rows},on:{input:e.cinput},model:{value:e.content[n],callback:function(t){e.$set(e.content,n,t)},expression:"content[key]"}})],1)})),1)],1)}),[],!1,null,"06f58b61",null);t.default=component.exports},853:function(e,t,l){"use strict";l(845)},854:function(e,t,l){(t=l(59)(!1)).push([e.i,"textarea[data-v-06f58b61]{width:100%}",""]),e.exports=t},884:function(e,t,l){var content=l(1017);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(60).default)("359728c6",content,!0,{sourceMap:!1})}}]);