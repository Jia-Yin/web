(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1260:function(t,e,n){t.exports=n(1261)},1261:function(t,e,n){"use strict";function r(object){switch(typeof object){case"string":return function(t){for(var s=t.length,i=t.length-1;i>=0;i--){var code=t.charCodeAt(i);code>127&&code<=2047?s++:code>2047&&code<=65535&&(s+=2)}return s}(object)+1;case"boolean":return 1;case"number":return 8;case"object":return Array.isArray(object)?object.map(r).reduce((function(t,e){return t+e}),0):function(object){if(null===object)return 1;if(object.hasOwnProperty("_lat")&&"function"==typeof object.isEqual)return 16;if("function"==typeof object.toDate||"function"==typeof object.getDate)return 8;if("function"==typeof object.toUint8Array)return object.toUint8Array().byteLength;if("function"==typeof object.onSnapshot)return object._key.path.segments.slice(object._key.path.offset).reduce((function(t,e){return t+e.length+1}),16);var t=0;for(var e in object)if(Object.hasOwnProperty.call(object,e)){t+=r(e);try{t+=r(object[e])}catch(e){e instanceof RangeError&&(t=0)}}return t}(object);default:return 0}}t.exports=function(object){return 32+r(object)}},1262:function(t,e,n){"use strict";n(952)},1263:function(t,e,n){(e=n(56)(!1)).push([t.i,"[data-v-30493cf3] .row{margin:24px}",""]),t.exports=e},1365:function(t,e,n){"use strict";n.r(e);n(14),n(30),n(27),n(9),n(157),n(29),n(15),n(87),n(49);var r=n(7),o=n(26),c=n(855),l=n(1260),f=n.n(l),d={computed:{user:function(){return this.$store.state.user}},data:function(){return{doc:"",docSize:"",roles:[],therole:null,fireConfig:null,key:"KEY",config:"",secret:""}},created:function(){var t=this.$user("realrole");"admin"==t?this.roles=["admin","maintainer","teacher","assistant","user"]:"maintainer"==t?this.roles=["maintainer","teacher","assistant","user"]:"teacher"==t?this.roles=["teacher","assistant","user"]:"assistant"==t?this.roles=["assistant","user"]:"user"==t&&(this.roles=["user"]),this.therole=this.$user("role")},mounted:function(){},methods:{rebuild:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,i,r,c,l,f,d,h,v,m,k,y,x,w,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.collection("courses").get();case 2:if(e=t.sent,n={},e.empty){t.next=16;break}i=0;case 6:if(!(i<e.docs.length)){t.next=16;break}if("LIST"!==(r=e.docs[i]).id){t.next=10;break}return t.abrupt("continue",13);case 10:if("playground"!==r.id){t.next=12;break}return t.abrupt("continue",13);case 12:n[r.id]=r.data();case 13:i++,t.next=6;break;case 16:return console.log("Courses",n),t.next=19,o.d.collection("users").get();case 19:if(c=t.sent,l={},!c.empty)for(f=0;f<c.docs.length;f++)d=c.docs[f],l[d.id]=d.data();for(h in console.log("Set course empty"),n)n[h].students={},n[h].scores={};console.log("Process Students"),t.t0=regeneratorRuntime.keys(l);case 26:if((t.t1=t.t0()).done){t.next=43;break}if(v=t.t1.value,(m=l[v]).courses){t.next=31;break}return t.abrupt("continue",26);case 31:t.t2=regeneratorRuntime.keys(m.courses);case 32:if((t.t3=t.t2()).done){t.next=41;break}if(k=t.t3.value,n[k]){t.next=36;break}return t.abrupt("continue",32);case 36:if(n[k].students[v]={name:m.name,stdID:m.stdID},y=[],n[k].units){for(x=0;x<n[k].units.length;x++)w=n[k].units[x].name,m.courses[k].units&&m.courses[k].units[w]?y.push(m.courses[k].units[w].score):y.push(0);n[k].scores[v]=y}t.next=32;break;case 41:t.next=26;break;case 43:t.t4=regeneratorRuntime.keys(n);case 44:if((t.t5=t.t4()).done){t.next=51;break}return _=t.t5.value,t.next=48,o.d.collection("courses").doc(_).update({students:n[_].students,scores:n[_].scores});case 48:console.log("Course ".concat(_," finished!")),t.next=44;break;case 51:case"end":return t.stop()}}),t)})))()},calDocSize:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.doc.split("##"),console.log("C, D",n[0],n[1]),e.next=4,o.d.collection(n[0]).doc(n[1]).get();case 4:r=e.sent,t.docSize=f()(r.data());case 6:case"end":return e.stop()}}),e)})))()},roleChange:function(t){this.$store.commit("setObjItem",{obj:"user",name:"role",value:t})},getObject:function(t){var e={},n=/\s*\"?(\w+)\"?:\s*\"([\w\d\-,\.:\/]+)\".*/i;return t.split("\n").forEach((function(line){var t=line.match(n);t&&(e[t[1]]=t[2])})),e},relogin:function(){var t=this.getObject(this.config);Object(o.a)(t)},encode:function(){var t=this.getObject(this.config);this.secret=c.a.encode(this.key,JSON.stringify(t))},decode:function(){var t=c.a.decode(this.key,this.secret);this.config=JSON.stringify(t,null,2)},getFire:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.collection("projects").doc("oa62QJj2WKcjb6ePozmJ").get().then((function(e){t.fireConfig=e.data()}));case 2:t.key=t.fireConfig.key,t.secret=t.fireConfig.prodconfig;case 4:case"end":return e.stop()}}),e)})))()},signOut:function(){this.$store.dispatch("logout",this.loginForm)},onSubmit:function(){this.$store.dispatch("login",this.loginForm)}}},h=(n(1262),n(55)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-tabs",[n("b-tab",{attrs:{title:"Course"}},[n("button",{on:{click:t.rebuild}},[t._v("Rebuild Course Students/Scores Data")])]),t._v(" "),n("b-tab",{attrs:{title:"Doc Size"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.doc,expression:"doc"}],attrs:{size:"sm",placeholder:"col##doc"},domProps:{value:t.doc},on:{input:function(e){e.target.composing||(t.doc=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.calDocSize}},[t._v("Calculate")]),t._v(" "),n("p",[t._v("Size = "+t._s(t.docSize))])]),t._v(" "),n("b-tab",{attrs:{title:"Change"}},[n("b-select",{attrs:{options:t.roles},on:{input:t.roleChange},model:{value:t.therole,callback:function(e){t.therole=e},expression:"therole"}})],1),t._v(" "),n("b-tab",{attrs:{title:"Project"}},[n("b-row",[n("b-col",{attrs:{cols:"2"}},[t._v("Key:")]),t._v(" "),n("b-col",{attrs:{cols:"10"}},[n("b-form-input",{model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1)],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"2"}},[t._v("Config:")]),t._v(" "),n("b-col",{attrs:{cols:"10"}},[n("b-textarea",{attrs:{rows:"10"},model:{value:t.config,callback:function(e){t.config=e},expression:"config"}})],1)],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"2"}},[t._v("Secret:")]),t._v(" "),n("b-col",{attrs:{cols:"10"}},[n("b-textarea",{attrs:{rows:"9"},model:{value:t.secret,callback:function(e){t.secret=e},expression:"secret"}})],1)],1),t._v(" "),n("p",{attrs:{align:"center"}},[n("b-button",{attrs:{variant:"success"},on:{click:t.getFire}},[t._v("FireConfig")]),t._v("   \n                "),n("b-button",{attrs:{variant:"success"},on:{click:t.encode}},[t._v("Encode")]),t._v("   \n                "),n("b-button",{attrs:{variant:"success"},on:{click:t.decode}},[t._v("Decode")]),t._v("   \n                "),n("b-button",{attrs:{variant:"success"},on:{click:t.relogin}},[t._v("Relogin")])],1)],1)],1)],1)}),[],!1,null,"30493cf3",null);e.default=component.exports},855:function(t,e,n){"use strict";n(10),n(14),n(22),n(86),n(9),n(856),n(29),n(15);var r=n(228),o=n.n(r),c={pad:function(t){return("0"+t).slice(-2)},mmss:function(t){var e=Math.floor(t/60);return t%=60,"".concat(this.pad(e),":").concat(this.pad(t))},hhmmss:function(t){var e=Math.floor(t/60);t%=60;var n=Math.floor(e/60);return e%=60,"".concat(this.pad(n),":").concat(this.pad(e),":").concat(this.pad(t))},getToday:function(){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+e+dd},getNow:function(){var t=new Date;return""+t.getFullYear()+this.pad(t.getMonth()+1)+this.pad(t.getDate())+this.pad(t.getHours())+this.pad(t.getMinutes())+this.pad(t.getSeconds())},obj2arr:function(t){var e=[],n=Object.keys(t);return n.sort(),n.forEach((function(n){e.push(Object.assign({id:n},t[n]))})),e},arr2obj:function(t){var e={};return t.forEach((function(t){var n=JSON.parse(JSON.stringify(t)),r=t.id;delete n.id,e[r]=n})),e},getOptions:function(t){var e=[];return t.split("#@@#").forEach((function(t){var s=t.split("#@");e.push({text:s[0],value:s[1]})})),e},findIdPos:function(t,e){if(!t)return-1;for(var n=0;n<t.length;n++)if(e==t[n].id)return n;return-1},encode:function(t,e){return new o.a(t).encrypt(e)},decode:function(t,e){return new o.a(t).decrypt(e)}};e.a=c},856:function(t,e,n){"use strict";var r=n(8),o=n(857).start;r({target:"String",proto:!0,forced:n(858)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},857:function(t,e,n){var r=n(50),o=n(229),c=n(52),l=Math.ceil,f=function(t){return function(e,n,f){var d,h,v=String(c(e)),m=v.length,k=void 0===f?" ":String(f),y=r(n);return y<=m||""==k?v:(d=y-m,(h=o.call(k,l(d/k.length))).length>d&&(h=h.slice(0,d)),t?v+h:h+v)}};t.exports={start:f(!1),end:f(!0)}},858:function(t,e,n){var r=n(127);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},952:function(t,e,n){var content=n(1263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("1f8eac6e",content,!0,{sourceMap:!1})}}]);