(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{768:function(t,r,e){var content=e(839);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("731810ed",content,!0,{sourceMap:!1})},838:function(t,r,e){"use strict";e(768)},839:function(t,r,e){(r=e(41)(!1)).push([t.i,"input[data-v-4eecfea6]{margin-left:12px;line-height:200%;border-radius:10px;width:300px;vertical-align:bottom}.row[data-v-4eecfea6]{margin:32px 0 18px}",""]),t.exports=r},905:function(t,r,e){"use strict";e.r(r);e(17),e(20),e(3),e(2),e(5),e(18),e(53);var o,n=e(11),l={data:function(){return{qstr:"",whichcourse:"",allcourses:[{text:"全部課程",value:""}],whichgroup:""}},mounted:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.state.admin.courses||this.$store.dispatch("admin/getCollection","courses").then((function(){for(var t=r.$store.state.admin.courses,i=0;i<t.length;i++){var e={text:t[i].name,value:t[i].id};r.allcourses.push(e)}})),this.$store.state.admin.users||this.$store.dispatch("admin/getCollection","users"),this.$store.state.admin.groups||this.$store.dispatch("admin/getCollection","groups");case 4:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),methods:{lookuser:function(t){this.$store.commit("person/clearData"),this.$store.commit("setData",{key:"comuser",value:t}),this.$router.push("/admin/user/look")},toggleMark:function(){this.$store.commit("admin/toggleMark")},toggleItem:function(t){var r=this;this.$store.commit("admin/toggleItem",{dkey:"users",dvalue:t.id}),this.toggleMark(),this.$nextTick((function(){r.toggleMark()}))},role:function(t){return t||"學生"},allpass:function(t){if(""==this.whichgroup)return t&&t.solved?t.solved.length:0;if(!t||!t.solved)return 0;for(var r,i=0;i<this.groups.length;i++)if(this.whichgroup==this.groups[i].id){r=this.groups[i];break}var e=r.problems,o=0;if(!e)return 0;for(var n=0;n<e.length;n++)t.solved.indexOf(e[n])>=0&&o++;return o},allsubmits:function(t){if(""==this.whichgroup)return t&&t.submits?Object.keys(t.submits).length:0;if(!t||!t.submits)return 0;for(var r,i=0;i<this.groups.length;i++)if(this.whichgroup==this.groups[i].id){r=this.groups[i];break}var e=r.problems,o=0;if(!e)return 0;for(var n=0;n<e.length;n++)t.submits[e[n]]&&o++;return o},allsubmitscount:function(t){if(""==this.whichgroup)return t&&t.submits?Object.keys(t.submits).map((function(r){return t.submits[r].length})).reduce((function(a,b){return a+b}),0):0;if(!t||!t.submits)return 0;for(var r,i=0;i<this.groups.length;i++)if(this.whichgroup==this.groups[i].id){r=this.groups[i];break}var e=r.problems,o=0;if(!e)return 0;for(var n=0;n<e.length;n++)t.submits[e[n]]&&(o+=t.submits[e[n]].length);return o},allontimesubmits:function(t){if(""===this.whichgroup)return"none";if(!t||!t.submits)return 0;for(var r,i=0;i<this.groups.length;i++)if(this.whichgroup==this.groups[i].id){r=this.groups[i];break}var e=r.problems,o=0;if(!e)return 0;for(var n=0;n<e.length;n++)t.submits[e[n]]&&this.onTimeCheck(t,e[n])&&o++;return o},sum:function(t){if(!t)return 0;for(var r=0,i=0;i<t.length;i++)r+=this.allsubmitscount(t[i]);return r},psolved:function(t,r){return!(!t.solved||0===t.solved.length)&&t.solved.indexOf(r)>=0},onTimeCheck:function(t,r){var e,o=this.$store.state.admin.groups;if(!o)return 0;for(var i=0;i<o.length;i++)if(this.whichgroup==o[i].id){e=o[i];break}if(void 0===e.time)return this.psolved(t,r)?1:0;if(null==e.time.end)return this.psolved(t,r)?1:0;if(this.psolved(t,r))for(var n=e.time.start,l=e.time.end,h=0;h<t.submits[r].length;h++){var c=t.submits[r][h].split("/");if("1"===c[1]){var v=c[0].substr(0,8)+c[0].substr(8);if(n<=v&&v<=l)return" (準時)";if(null==n&&v<=l)return" (準時)"}}return 0},exportData:function(){console.log("Line 321: this.users = ",this.users);for(var text="姓名,學號,科系,年級,類型,總提交,allAC,allFail,rateAC(%),firstACtimes(sum),作答題目,通過,準時提交\n",i=0;i<this.users.length;i++)text+=this.users[i].name.replace(/,/,"-")+",",text+=this.users[i].stdID+",",text+=this.users[i].dept+",",text+=this.users[i].grade+",",text+=this.role(this.users[i].role)+",",text+=this.allsubmitscount(this.users[i])+",",text+=this.allAC(this.users[i])+",",text+=this.allFail(this.users[i])+",",text+=this.rateAC(this.users[i])+",",text+=this.firstACtimes(this.users[i])+",",text+=this.allsubmits(this.users[i])+",",text+=this.allpass(this.users[i])+",",text+=this.allontimesubmits(this.users[i])+"\n";this.saveStringToFile("scores.csv",text)},saveStringToFile:function(t,data){var r=new Blob([data],{type:"text/csv;charset=utf-8"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(r,t);else{var e=window.document.createElement("a");e.href=window.URL.createObjectURL(r),e.download=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}},allAC:function(t){var r;if(""===this.whichgroup){if(!t||!t.submits)return 0;r=Object.keys(t.submits)}else{if(!t||!t.submits)return 0;for(var e,i=0;i<this.groups.length;i++)if(this.whichgroup==this.groups[i].id){e=this.groups[i];break}var o=e.problems;if(!o)return 0;r=o}for(var n=0,l=0;l<r.length;l++){var h=r[l];if(t.submits[h])for(var c=0;c<t.submits[h].length;c++){"1"===t.submits[h][c].split("/")[1]&&n++}}return n},allFail:function(t){var r;if(""===this.whichgroup){if(!t||!t.submits)return 0;r=Object.keys(t.submits)}else{if(!t||!t.submits)return 0;for(var e,i=0;i<this.groups.length;i++)if(this.whichgroup==this.groups[i].id){e=this.groups[i];break}var o=e.problems;if(!o)return 0;r=o}for(var n=0,l=0;l<r.length;l++){var h=r[l];if(t.submits[h])for(var c=0;c<t.submits[h].length;c++){"0"===t.submits[h][c].split("/")[1]&&n++}}return n},rateAC:function(t){var r=this.allAC(t);return(r/(r+this.allFail(t))).toFixed(2)},rateFail:function(t){var r=this.allAC(t),e=this.allFail(t);return(e/(r+e)).toFixed(2)},firstACtimes:function(t){var r;if(""===this.whichgroup){if(!t||!t.submits)return 0;r=Object.keys(t.submits)}else{if(!t||!t.submits)return 0;for(var e,i=0;i<this.groups.length;i++)if(this.whichgroup==this.groups[i].id){e=this.groups[i];break}var o=e.problems;if(!o)return 0;r=o}for(var n=0,l=0;l<r.length;l++){var h=r[l];if(t.submits[h])for(var c=0;c<t.submits[h].length;c++){if(n++,"1"===t.submits[h][c].split("/")[1])break}}return n}},computed:{mark:function(){return this.$store.state.admin.mark},users:function(){if(""===this.qstr){if(""===this.whichcourse)return this.$store.state.admin.users;for(var t,r=this.$store.state.admin.courses,e=this.$store.state.admin.users,o=[],i=0;i<r.length;i++)if(r[i].id===this.whichcourse){t=r[i].users;break}for(var n=0;n<t.length;n++)for(var l=0;l<e.length;l++)e[l].id===t[n]&&o.push(e[l]);return o}if(""===this.whichcourse)return this.$store.getters["admin/filter"]({dkey:"users",dvalue:this.qstr});for(var h,c=this.$store.state.admin.courses,v=this.$store.getters["admin/filter"]({dkey:"users",dvalue:this.qstr}),f=[],m=0;m<c.length;m++)if(c[m].id===this.whichcourse){h=c[m].users;break}for(var d=0;d<h.length;d++)for(var _=0;_<v.length;_++)v[_].id===h[d]&&f.push(v[_]);return f},submits:function(){return this.$store.state.admin.submits},groups:function(){var t=[];if(""===this.whichcourse){var r=this.$store.state.admin.groups;if(r)for(var i=0;i<r.length;i++)t.push(r[i]);return t}for(var e,o=this.$store.state.admin.courses,n=this.$store.state.admin.groups,l=[],h=0;h<o.length;h++)if(o[h].id===this.whichcourse){e=o[h].groups;break}for(var c=0;c<e.length;c++)for(var v=0;v<n.length;v++)n[v].id===e[c]&&l.push(n[v]);return l},optgroups:function(){this.whichgroup="";var t=[{text:"全部單元",value:""}],r=this.groups;if(r)for(var i=0;i<r.length;i++){var e={text:r[i].name,value:r[i].id};t.push(e)}return t}}},h=(e(838),e(29)),component=Object(h.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.qstr,expression:"qstr"}],attrs:{type:"text",placeholder:" 搜尋..."},domProps:{value:t.qstr},on:{input:function(r){r.target.composing||(t.qstr=r.target.value)}}}),t._v("  \n      "),e("b-button",{attrs:{pill:"",variant:"outline-warning"}},[t._v("新增")]),t._v(" "),t.mark?e("span",[e("b-button",{attrs:{pill:"",variant:"primary"},on:{click:function(r){return t.toggleMark()}}},[t._v("標記")])],1):e("span",[e("b-button",{attrs:{pill:"",variant:"outline-primary"},on:{click:function(r){return t.toggleMark()}}},[t._v("標記")])],1),t._v(" "),e("b-button",{attrs:{pill:"",variant:"outline-primary"},on:{click:function(r){return t.exportData()}}},[t._v("匯出")])],1)]),t._v(" "),e("b-row",[e("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"whichcourse",options:t.allcourses,size:"sm"},model:{value:t.whichcourse,callback:function(r){t.whichcourse=r},expression:"whichcourse"}})],1),t._v(" "),e("b-row",[e("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"whichgroup",options:t.optgroups,size:"sm"},model:{value:t.whichgroup,callback:function(r){t.whichgroup=r},expression:"whichgroup"}})],1),t._v(" "),e("table",{staticClass:"table table-hover table-striped"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("姓名")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("學號")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("科系")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("年級")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("類型")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("總提交("+t._s(t.sum(t.users))+")")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("allAC")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("allFail")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("rateAC(%)")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("firstACtimes(sum)")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("作答題目")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("通過")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("準時提交")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("操作")])])]),t._v(" "),e("tbody",t._l(t.users,(function(r,o){return e("tr",{key:o},[e("td",[t._v(t._s(o+1))]),t._v(" "),e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",[t._v(t._s(r.stdID))]),t._v(" "),e("td",[t._v(t._s(r.dept))]),t._v(" "),e("td",[t._v(t._s(r.grade))]),t._v(" "),e("td",[t._v(t._s(t.role(r.role)))]),t._v(" "),e("td",[t._v(t._s(t.allsubmitscount(r)))]),t._v(" "),e("td",[t._v(t._s(t.allAC(r)))]),t._v(" "),e("td",[t._v(t._s(t.allFail(r)))]),t._v(" "),e("td",[t._v(t._s(t.rateAC(r)))]),t._v(" "),e("td",[t._v(t._s(t.firstACtimes(r)))]),t._v(" "),e("td",[t._v(t._s(t.allsubmits(r)))]),t._v(" "),e("td",[t._v(t._s(t.allpass(r)))]),t._v(" "),e("td",[t._v(t._s(t.allontimesubmits(r)))]),t._v(" "),e("td",[t.mark?e("span",[e("b-form-checkbox",{attrs:{checked:r.mark},on:{change:function(e){return t.toggleItem(r)}}})],1):e("span",[e("b-button",{attrs:{size:"sm",pill:"",variant:"outline-primary"},on:{click:function(e){return t.lookuser(r)}}},[e("fa",{attrs:{icon:["far","eye"]}})],1),t._v(" "),e("b-button",{attrs:{size:"sm",pill:"",variant:"outline-warning",to:"/admin/user"}},[e("fa",{attrs:{icon:["far","trash-alt"]}})],1)],1)])])})),0)])],1)}),[],!1,null,"4eecfea6",null);r.default=component.exports}}]);