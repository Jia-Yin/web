(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1084:function(e,t,n){var content=n(1261);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("9f8026b2",content,!0,{sourceMap:!1})},1260:function(e,t,n){"use strict";n(1084)},1261:function(e,t,n){(t=n(56)(!1)).push([e.i,'[data-v-8e127bd4] h1{color:#00f;font-family:"Arial";font-size:120%;text-decoration:underline;margin:24px 0}[data-v-8e127bd4] h2{color:#ff4500;font-size:100%;margin:16px 0 8px}.container-fluid[data-v-8e127bd4]{width:90%;margin:30px auto}.localeButton[data-v-8e127bd4]{text-align:right}section[data-v-8e127bd4]{background:green;color:#fff;text-align:center;margin:16px 0;padding:3px}li[data-v-8e127bd4]{margin:8px 0}button[data-v-8e127bd4]{min-width:100px}',""]),e.exports=t},1400:function(e,t,n){"use strict";n.r(t);n(10),n(14),n(36),n(18),n(12),n(156),n(27),n(9),n(79),n(29),n(46),n(15),n(87),n(368);var l=n(28),o=(n(49),n(7)),r=n(26),c=n(860),d=n(855),f={components:{LocaleInput:c.default},data:function(){return{snLang:"en",pnLang:"en",siteNews:null,pgNews:null,infoAlert:!1,info:{title:"",message:""},locales:{zh:"中文"},newLang:{text:"",value:""},localeTable:{localeContents:[{field:"Site_LocaleField",zh:"欄位名稱",en:"Field Name"}],totalRows:1,filter:null,editable:!1,fields:[],file:null,fileContents:null,fileimport:!1},judgers:{http:[],https:[]},newhttp:null,newhttps:null,localeText:{Site_NewsManagement:"訊息管理",Site_LangsManagement:"語系管理",Site_JudgeManagement:"評判管理",Site_SiteNews:"平台訊息",Site_PlaygroundNews:"練習廣場訊息",Site_SupportLocales:"支援語系",Site_LocaleContents:"語系內容",Site_LocaleFilterLabel:"過濾器",Site_LocaleFilterHint:"搜尋關鍵字",Site_LocaleFilterClear:"清除",Site_LocaleField:"欄位名稱",Site_LocaleUpdateOK:"語系更新完成",Site_Edit:"編輯",Site_Add:"新增",Site_LocaleExport:"匯出",Site_LocaleImport:"匯入",Site_NewLangValue:"語言代碼",Site_Update:"更新",Site_NewLangText:"語言名稱",Site_Judggers:"評判器設定",Site_UpdateOK:"更新完成！",Site_MISC:"其他"}}},created:function(){this.localeText=this.$updateLocaleText(this.localeText);var e=this.$system("locales");e&&(this.locales=this.$copyObject(e&&e.support)),this.prepareLocaleContents();var t=this.$system("setting");t&&t.judgers&&(this.judgers=this.$copyObject(t.judgers)),t&&t.siteNews&&(this.siteNews=this.$copyObject(t.siteNews)),t&&t.pgNews&&(this.pgNews=this.$copyObject(t.pgNews))},mounted:function(){this.localeTable.totalRows=this.localeTable.localeContents.length},methods:{getSystemSetting:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$system("setting")){t.next=7;break}return t.next=3,r.d.collection("system").doc("setting").get();case 3:return n=t.sent,t.abrupt("return",n.data());case 7:return t.abrupt("return",{});case 8:case"end":return t.stop()}}),t)})))()},updateSystemSetting:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.$system("setting")){n.next=5;break}return n.next=3,r.d.collection("system").doc("setting").update(e);case 3:n.next=7;break;case 5:return n.next=7,r.d.collection("system").doc("setting").set(e);case 7:t.$store.commit("setObjItem",{obj:"system",name:"setting",value:e});case 8:case"end":return n.stop()}}),n)})))()},judgers_update:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$copyObject(e.judgers),t.next=3,e.getSystemSetting();case 3:return(l=t.sent).judgers=n,l.updated=d.a.getNow(),t.next=8,e.updateSystemSetting(l);case 8:e.info={title:e.localeText.Site_Judggers,message:e.localeText.Site_LocaleUpdateOK},e.infoAlert=!0;case 10:case"end":return t.stop()}}),t)})))()},setSiteNews:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSystemSetting();case 2:return(n=t.sent).siteNews=e.$copyObject(e.siteNews),n.updated=d.a.getNow(),t.next=7,e.updateSystemSetting(n);case 7:e.info={title:e.localeText.Site_SiteNews,message:e.localeText.Site_UpdateOK},e.infoAlert=!0;case 9:case"end":return t.stop()}}),t)})))()},deletehttp:function(e){this.judgers.http.splice(e,1)},inserthttp:function(){this.judgers.http.push(this.newhttp),this.newhttp=null},deletehttps:function(e){this.judgers.https.splice(e,1)},inserthttps:function(){this.judgers.https.push(this.newhttps),this.newhttps=null},localeTable_export:function(){var e=this.localeTable.fields.map((function(e){return e.key})),t=[e].concat(Object(l.a)(this.localeTable.localeContents.map((function(t){var data=[];return e.forEach((function(e){return data.push(t[e])})),data})))).map((function(e){return e.join(",")})).join("\n"),n=new Blob([t],{type:"text/plain;charset=utf-8"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(n,"localeContents.csv");else{var o=window.document.createElement("a");o.href=window.URL.createObjectURL(n),o.download="localeContents.csv",document.body.appendChild(o),o.click(),document.body.removeChild(o)}},handleFileUpload:function(){var e=this,t=new FileReader;t.onload=function(t){for(var n=[],l=t.target.result.split("\n"),o=l[0].split(","),i=1;i<l.length;i++){for(var r=l[i].split(","),c={},d=0;d<o.length;d++){var f=r[d]||"";c[o[d].trim()]=f.trim()}n.push(c)}e.localeTable.fileContents=n},t.readAsText(this.localeTable.file)},localeTable_import:function(){this.localeTable.localeContents=this.localeTable.fileContents},localeTable_add:function(){var e={field:"Field"};if(this.$system("locales")){for(var t in this.$system("locales").support)e[t]="";this.localeTable.localeContents.push(e)}},localeTable_getLangObj:function(e){var t={};return this.localeTable.localeContents.forEach((function(n){n[e]&&""!=n[e].trim()&&(t[n.field]=n[e].trim())})),t},localeTable_update:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,l,o,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n={},e.$system("locales")){t.next=5;break}return t.abrupt("return");case 5:for(l in e.$system("locales").support)o=e.localeTable_getLangObj(l),n[l]=o;return t.next=8,r.d.collection("system").doc("locales").update(n);case 8:c=e.$copyObject(e.$system("locales").support),(d=e.$copyObject(n)).support=c,e.$store.commit("setObjItem",{obj:"system",name:"locales",value:d}),e.$updateLocaleText(e.localeText),e.infoAlert=!0,e.info={title:e.localeText.Site_SupportLocales,message:e.localeText.Site_LocaleUpdateOK},t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log("Error",t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()},prepareLocaleContents:function(){var e=[],t=[];if(this.localeTable.fields.push({key:"field",label:this.localeText.Site_LocaleField,sortable:!0}),this.$system("locales")&&this.$system("locales").support)for(var n in this.$system("locales").support){this.localeTable.fields.push({key:n,label:this.$system("locales").support[n]});var l=this.$system("locales")[n];if(l)for(var o in l)if(t.indexOf(o)>=0){var r=t.indexOf(o);console.assert(r>=0,{field:o,exists:t}),e[r][n]=l[o]}else{t.push(o);var c={field:o};if(this.$system("locales").support){for(var d in this.$system("locales").support)c[d]="";c[n]=l[o],e.push(c)}}}e.length>0&&(this.localeTable.localeContents=e)},delLang:function(e){this.$delete(this.locales,e)},addLang:function(){this.$set(this.locales,this.newLang.value,this.newLang.text)},updateLocaleSupport:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$system("locales")){t.next=6;break}return t.next=4,r.d.collection("system").doc("locales").update({support:e.locales});case 4:t.next=8;break;case 6:return t.next=8,r.d.collection("system").doc("locales").set({support:e.locales});case 8:n=e.$copyObject(e.$system("locales")),l=e.$copyObject(e.locales),n.support=l,e.$store.commit("setObjItem",{obj:"system",name:"locales",value:n}),console.log("AL"),e.infoAlert=!0,e.info={title:e.localeText.Site_SupportLocales,message:e.$system("locales")},e.prepareLocaleContents(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.log("Error",t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()}}},v=(n(1260),n(55)),component=Object(v.a)(f,(function(){var e=this,t=this,n=t.$createElement,l=t._self._c||n;return l("b-container",{attrs:{fluid:""}},[l("b-modal",{attrs:{title:t.info.title},model:{value:t.infoAlert,callback:function(e){t.infoAlert=e},expression:"infoAlert"}},[t._v(t._s(t.info.message)+"\n    ")]),t._v(" "),l("b-tabs",{attrs:{"content-class":"mt-3"}},[l("b-tab",{attrs:{title:t.localeText.Site_NewsManagement}},[l("section",[t._v(t._s(t.localeText.Site_SiteNews))]),t._v(" "),l("b-row",[l("b-col",{attrs:{cols:"6"}},[l("locale-input",{attrs:{rows:12},on:{curLang:function(t){e.snLang=t}},model:{value:t.siteNews,callback:function(e){t.siteNews=e},expression:"siteNews"}})],1),t._v(" "),l("b-col",{attrs:{cols:"6"}},[l("div",{domProps:{innerHTML:t._s(t.$md.render(t.$selectLocaleText(t.siteNews,t.snLang)))}})])],1),t._v(" "),l("div",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[l("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"primary"},on:{click:t.setSiteNews}},[t._v("\n                    "+t._s(t.localeText.Site_Update)+"\n                ")])],1)],1),t._v(" "),l("b-tab",{attrs:{title:t.localeText.Site_LangsManagement}},[l("section",[t._v(t._s(t.localeText.Site_SupportLocales))]),t._v(" "),l("ul",[t._l(t.locales,(function(text,e,n){return l("li",{key:"lang"+n},[t._v("\n                    "+t._s(text)+" ("+t._s(e)+")   \n                    "),l("b-link",{on:{click:function(n){return t.delLang(e)}}},[l("b-icon",{attrs:{icon:"x"}})],1)],1)})),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.newLang.text,expression:"newLang.text"}],attrs:{placeholder:t.localeText.Site_NewLangText},domProps:{value:t.newLang.text},on:{input:function(e){e.target.composing||t.$set(t.newLang,"text",e.target.value)}}}),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.newLang.value,expression:"newLang.value"}],attrs:{placeholder:t.localeText.Site_NewLangValue},domProps:{value:t.newLang.value},on:{input:function(e){e.target.composing||t.$set(t.newLang,"value",e.target.value)}}}),t._v(" "),l("b-button",{attrs:{size:"sm",pill:"",variant:"outline-primary"},on:{click:t.addLang}},[l("b-icon",{attrs:{icon:"plus"}})],1),t._v(" "),l("b-button",{attrs:{size:"sm",pill:"",variant:"primary"},on:{click:t.updateLocaleSupport}},[t._v("\n                    "+t._s(t.localeText.Site_Update)+"\n                ")])],2),t._v(" "),l("section",[t._v(t._s(t.localeText.Site_LocaleContents))]),t._v(" "),l("b-form-group",{staticClass:"mb-2",attrs:{label:t.localeText.Site_LocaleFilterLabel,"label-for":"filter-input","label-cols-sm":"1","label-align-sm":"left","label-size":"sm"}},[l("b-input-group",{attrs:{size:"sm"}},[l("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:t.localeText.Site_LocaleFilterHint},model:{value:t.localeTable.filter,callback:function(e){t.$set(t.localeTable,"filter",e)},expression:"localeTable.filter"}}),t._v(" "),l("b-input-group-append",[l("b-button",{on:{click:function(e){t.localeTable.filter=""}}},[t._v(t._s(t.localeText.Site_LocaleFilterClear))])],1)],1)],1),t._v(" "),l("b-table",{attrs:{striped:"",hover:"","sticky-header":"",small:"",bordered:"","head-row-variant":"info",items:t.localeTable.localeContents,fields:t.localeTable.fields,filter:t.localeTable.filter},scopedSlots:t._u([t.localeTable.editable?{key:"cell()",fn:function(e){var n=e.item,o=e.field.key;return[l("b-form-input",{model:{value:n[o],callback:function(e){t.$set(n,o,e)},expression:"item[key]"}})]}}:null],null,!0)}),t._v(" "),l("b-modal",{on:{ok:t.localeTable_import},model:{value:t.localeTable.fileimport,callback:function(e){t.$set(t.localeTable,"fileimport",e)},expression:"localeTable.fileimport"}},[l("b-form-file",{attrs:{size:"sm",state:Boolean(t.localeTable.file),accept:".csv",placeholder:"選擇檔案匯入"},on:{input:function(e){return t.handleFileUpload()}},model:{value:t.localeTable.file,callback:function(e){t.$set(t.localeTable,"file",e)},expression:"localeTable.file"}})],1),t._v(" "),l("div",{staticClass:"localeButton"},[l("b-button",{attrs:{size:"sm",pill:"",variant:"info"},on:{click:function(e){t.localeTable.editable=!t.localeTable.editable}}},[t._v(t._s(t.localeText.Site_Edit))]),t._v(" "),l("b-button",{attrs:{size:"sm",pill:"",variant:"info"},on:{click:t.localeTable_add}},[t._v(t._s(t.localeText.Site_Add))]),t._v(" "),l("b-button",{attrs:{size:"sm",pill:"",variant:"warning"},on:{click:t.localeTable_export}},[t._v(t._s(t.localeText.Site_LocaleExport))]),t._v(" "),l("b-button",{attrs:{size:"sm",pill:"",variant:"warning"},on:{click:function(e){t.localeTable.fileimport=!0}}},[t._v(t._s(t.localeText.Site_LocaleImport))]),t._v(" "),l("b-button",{attrs:{size:"sm",pill:"",variant:"success"},on:{click:t.localeTable_update}},[t._v(t._s(t.localeText.Site_Update))])],1)],1),t._v(" "),l("b-tab",{attrs:{title:t.localeText.Site_JudgeManagement}},[l("section",[t._v(t._s(t.localeText.Site_Judggers))]),t._v("\n            HTTP\n            "),t._l(t.judgers.http,(function(e,n){return l("div",{key:n,staticClass:"item"},[t._v("\n                "+t._s(n+1)+". (\n                "),l("b-link",{on:{click:function(e){return t.deletehttp(n)}}},[l("b-icon",{attrs:{icon:"trash"}})],1),t._v("\n                )   "+t._s(e)+"\n            ")],1)})),t._v(" "),l("div",{staticClass:"new"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.newhttp,expression:"newhttp"}],attrs:{size:"50",placeholder:"New WS Server"},domProps:{value:t.newhttp},on:{input:function(e){e.target.composing||(t.newhttp=e.target.value)}}}),t._v(" "),l("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:function(e){return t.inserthttp()}}},[t._v("新增")])],1),t._v(" "),l("hr"),t._v("\n            HTTPS\n            "),t._l(t.judgers.https,(function(e,n){return l("div",{key:n+1e3,staticClass:"item"},[t._v("\n                "+t._s(n+1)+". (\n                "),l("b-link",{on:{click:function(e){return t.deletehttps(n)}}},[l("b-icon",{attrs:{icon:"trash"}})],1),t._v("\n                )   "+t._s(e)+"\n            ")],1)})),t._v(" "),l("div",{staticClass:"new"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.newhttps,expression:"newhttps"}],attrs:{size:"50",placeholder:"New WS Server"},domProps:{value:t.newhttps},on:{input:function(e){e.target.composing||(t.newhttps=e.target.value)}}}),t._v(" "),l("b-button",{attrs:{size:"sm",variant:"outline-success"},on:{click:function(e){return t.inserthttps()}}},[t._v("新增")])],1),t._v(" "),l("hr"),t._v(" "),l("div",{staticStyle:{"text-align":"center"}},[l("b-button",{attrs:{size:"sm",pill:"",center:"",variant:"primary"},on:{click:t.judgers_update}},[t._v("\n                    "+t._s(t.localeText.Site_Update)+"\n                ")])],1)],2)],1)],1)}),[],!1,null,"8e127bd4",null);t.default=component.exports;installComponents(component,{LocaleInput:n(860).default})},855:function(e,t,n){"use strict";n(10),n(14),n(86),n(9),n(856),n(29),n(15);var l=n(228),o=n.n(l),r={pad:function(e){return e<10?"0"+e:e},mmss:function(e){var t=Math.floor(e/60);return e%=60,"".concat(this.pad(t),":").concat(this.pad(e))},hhmmss:function(e){var t=Math.floor(e/60);e%=60;var n=Math.floor(t/60);return t%=60,"".concat(this.pad(n),":").concat(this.pad(t),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+t+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var t=[],n=Object.keys(e);return n.sort(),n.forEach((function(n){t.push(Object.assign({id:n},e[n]))})),t},arr2obj:function(e){var t={};return e.forEach((function(e){var n=JSON.parse(JSON.stringify(e)),l=e.id;delete n.id,t[l]=n})),t},getOptions:function(e){var t=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");t.push({text:s[0],value:s[1]})})),t},findIdPos:function(e,t){if(!e)return-1;for(var n=0;n<e.length;n++)if(t==e[n].id)return n;return-1},encode:function(e,t){return new o.a(e).encrypt(t)},decode:function(e,t){return new o.a(e).decrypt(t)}};t.a=r},856:function(e,t,n){"use strict";var l=n(8),o=n(857).start;l({target:"String",proto:!0,forced:n(858)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},857:function(e,t,n){var l=n(50),o=n(229),r=n(52),c=Math.ceil,d=function(e){return function(t,n,d){var f,v,h=String(r(t)),m=h.length,_=void 0===d?" ":String(d),x=l(n);return x<=m||""==_?h:(f=x-m,(v=o.call(_,c(f/_.length))).length>f&&(v=v.slice(0,f)),e?h+v:v+h)}};e.exports={start:d(!1),end:d(!0)}},858:function(e,t,n){var l=n(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l)},859:function(e,t,n){var content=n(864);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("75a234fb",content,!0,{sourceMap:!1})},860:function(e,t,n){"use strict";n.r(t);n(367);var l={props:{value:Object,rows:{type:Number,default:10}},data:function(){return{locales:{zh:"中文",en:"English"},content:{zh:"中文",en:"English"}}},created:function(){this.$system("locales")&&(this.locales=this.$copyObject(this.$system("locales").support)),this.value&&(this.content=this.value)},methods:{setLang:function(e){this.$emit("curLang",e)},cinput:function(){this.$emit("input",this.content)}},watch:{value:function(e){this.content=e}}},o=(n(863),n(55)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-tabs",e._l(e.locales,(function(t,l,o){return n("b-tab",{key:"locale"+o,attrs:{title:t},on:{click:function(t){return e.setLang(l)}}},[n("b-textarea",{attrs:{rows:e.rows},on:{input:e.cinput},model:{value:e.content[l],callback:function(t){e.$set(e.content,l,t)},expression:"content[key]"}})],1)})),1)],1)}),[],!1,null,"05c43ddc",null);t.default=component.exports},863:function(e,t,n){"use strict";n(859)},864:function(e,t,n){(t=n(56)(!1)).push([e.i,"textarea[data-v-05c43ddc]{width:100%}",""]),e.exports=t}}]);