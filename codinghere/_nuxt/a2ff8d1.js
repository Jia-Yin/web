(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1062:function(e,o,t){var content=t(1260);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(61).default)("bd0fc384",content,!0,{sourceMap:!1})},1259:function(e,o,t){"use strict";t(1062)},1260:function(e,o,t){(o=t(60)(!1)).push([e.i,".container-fluid[data-v-b0784da8]{margin:40px}[data-v-b0784da8] label{color:#00f;border-radius:4px;text-align:right;margin-right:40px}.error[data-v-b0784da8]{width:100%;padding:20px 20px 10px 30px;background:#fffacd;color:red;line-height:180%}.perrors[data-v-b0784da8],form.errors[data-v-b0784da8] :invalid{outline:2px solid red}button[data-v-b0784da8]{width:50%;margin:36px auto}",""]),e.exports=o},1327:function(e,o,t){"use strict";t.r(o);t(29),t(49);var r=t(8),l=t(32),n=t(844),c={data:function(){return{errors:!1,confirm:!1,modify:!1,confirmTitle:"",confirmMessage:"",modPass:!1,origPassword:"",newPassword:"",newPassword2:"",localeText:{Profile_Name:"姓名",Profile_Email:"電子郵件",Profile_StdID:"學號",Profile_School:"學校",Profile_Dept:"科系",Profile_Grade:"年級",Profile_Locale:"語言",Profile_ModifyProfile:"修改資料",Profile_ModifyPassword:"修改密碼",Profile_PasswordModTitle:"修改密碼",Profile_CurrentPassword:"目前密碼",Profile_NewPassword:"更新密碼",Profile_NewPassword2:"重覆密碼",Profile_PasswordUpdateOK:"密碼更新完成！",Profile_PasswordUpdateFail:"密碼更新失敗！",Profile_ProfileUpdateOK:"資料更新完成，請重新載入頁面！",Profile_AllSchools:"中原大學#@CYCU#@@#其他#@Others",Profile_AllDepts:"電機工程學系#@EE#@@#電資學士班#@EECS#@@#其他#@Others",Profile_AllGrades:"大一#@1#@@#大二#@2#@@#大三#@3#@@#大四#@4#@@#研究所#@G#@@#教師#@T#@@#其他#@Others"},schools:[],depts:[],grades:[],locales:{zh:"中文"}}},created:function(){var e=this.$store.state.user;this.cuser={name:e.name,created:e.created,dept:e.dept,email:e.email,grade:e.grade,locale:e.locale,role:e.role,school:e.school,stdID:e.stdID},this.localeText=this.$updateLocaleText(this.localeText),this.locales=this.$copyObject(this.$system("locales").support),this.schools=n.a.getOptions(this.localeText.Profile_AllSchools),this.depts=n.a.getOptions(this.localeText.Profile_AllDepts),this.grades=n.a.getOptions(this.localeText.Profile_AllGrades)},methods:{modifyPassword:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var t,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.newPassword==e.newPassword2){o.next=3;break}return e.showConfirm("PasswordDiff"),o.abrupt("return");case 3:return t=e,o.next=6,l.b.auth.EmailAuthProvider.credential(e.$user("email"),e.origPassword);case 6:r=o.sent,l.c.currentUser.reauthenticateWithCredential(r).then((function(){l.c.currentUser.updatePassword(t.newPassword).then((function(){t.showConfirm("PasswordOK")})).catch((function(e){t.showConfirm("PasswordFail",e.message)}))})).catch((function(e){t.showConfirm("PasswordWrong")}));case 8:case"end":return o.stop()}}),o)})))()},onSubmit:function(e){var o=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.modify){e.next=5;break}o.modify=!0,o.localeText.modifyProfile="Update",e.next=13;break;case 5:return o.cuser,e.next=8,l.d.collection("users").doc(o.$user("id")).update(o.cuser);case 8:o.cuser.id=o.$user("id"),o.cuser.role=o.$user("role"),t=o.$copyObject(o.cuser),o.$store.commit("setData",{name:"user",value:t}),o.showConfirm("ProfileOK");case 13:case"end":return e.stop()}}),e)})))()},showConfirm:function(e,o){"ProfileOK"==e&&(this.confirmTitle=this.localeText.Profile_ModifyProfile,this.confirmMessage=o||this.localeText.Profile_ProfileUpdateOK,this.confirm=!0),"PasswordOK"==e&&(this.confirmTitle=this.localeText.Profile_ModifyPassword,this.confirmMessage=o||this.localeText.Profile_PasswordUpdateOK,this.confirm=!0),"PasswordDiff"==e&&(this.confirmTitle=this.localeText.Profile_ModifyPassword,this.confirmMessage=o||this.localeText.Profile_PasswordUpdateOK,this.confirm=!0),"PasswordWrong"==e&&(this.confirmTitle=this.localeText.Profile_ModifyPassword,this.confirmMessage=o||this.localeText.Profile_PasswordUpdateOK,this.confirm=!0),"PasswordFail"==e&&(this.confirmTitle=this.localeText.Profile_ModifyPassword,this.confirmMessage=o||this.localeText.Profile_PasswordUpdateFail,this.confirm=!0)},invalidateForm:function(){this.errors=!0}}},d=(t(1259),t(55)),component=Object(d.a)(c,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("b-container",{attrs:{fluid:""}},[t("b-form",{class:!!this.errors&&"errors",on:{submit:function(o){return o.preventDefault(),e.onSubmit(o)}}},[t("b-form-group",{attrs:{"label-cols":"2","content-cols":"8",label:e.localeText.Profile_Name,"label-for":"form-name"}},[t("b-form-input",{staticClass:"form-control",attrs:{disabled:!e.modify,required:"",type:"text"},on:{invalid:e.invalidateForm},model:{value:e.cuser.name,callback:function(o){e.$set(e.cuser,"name",o)},expression:"cuser.name"}})],1),e._v(" "),t("b-form-group",{attrs:{"label-cols":"2","content-cols":"8",label:e.localeText.Profile_Email,"label-for":"form-email"}},[t("b-form-input",{staticClass:"form-control",attrs:{disabled:"",type:"text"},model:{value:e.cuser.email,callback:function(o){e.$set(e.cuser,"email",o)},expression:"cuser.email"}})],1),e._v(" "),t("b-form-group",{attrs:{"label-cols":"2","content-cols":"8",label:e.localeText.Profile_StdID,"label-for":"form-stdID"}},[t("b-form-input",{staticClass:"form-control",attrs:{required:"",disabled:!e.modify,type:"text",pattern:"[A-Z]?[0-9]+"},on:{invalid:e.invalidateForm},model:{value:e.cuser.stdID,callback:function(o){e.$set(e.cuser,"stdID",o)},expression:"cuser.stdID"}})],1),e._v(" "),t("b-form-group",{attrs:{"label-cols":"2","content-cols":"8",label:e.localeText.Profile_School,"label-for":"form-school"}},[t("b-form-select",{staticClass:"form-control",attrs:{disabled:!e.modify,options:e.schools},model:{value:e.cuser.school,callback:function(o){e.$set(e.cuser,"school",o)},expression:"cuser.school"}})],1),e._v(" "),t("b-form-group",{attrs:{"label-cols":"2","content-cols":"8",label:e.localeText.Profile_Dept,"label-for":"form-dept"}},[t("b-form-select",{staticClass:"form-control",attrs:{disabled:!e.modify,options:e.depts},model:{value:e.cuser.dept,callback:function(o){e.$set(e.cuser,"dept",o)},expression:"cuser.dept"}})],1),e._v(" "),t("b-form-group",{attrs:{"label-cols":"2","content-cols":"8",label:e.localeText.Profile_Grade,"label-for":"form-grade"}},[t("b-form-select",{staticClass:"form-control",attrs:{disabled:!e.modify,options:e.grades},model:{value:e.cuser.grade,callback:function(o){e.$set(e.cuser,"grade",o)},expression:"cuser.grade"}})],1),e._v(" "),t("b-form-group",{attrs:{"label-cols":"2","content-cols":"8",label:e.localeText.Profile_Locale,"label-for":"form-locale"}},[t("b-form-select",{staticClass:"form-control",attrs:{disabled:!e.modify,options:e.locales},model:{value:e.cuser.locale,callback:function(o){e.$set(e.cuser,"locale",o)},expression:"cuser.locale"}})],1),e._v(" "),t("b-button",{attrs:{pill:"",block:"",type:"submit",variant:"outline-primary"}},[e._v("\n                "+e._s(e.localeText.Profile_ModifyProfile)+"\n            ")]),e._v(" "),t("p",{attrs:{align:"center"}},[t("b-link",{on:{click:function(o){e.modPass=!0}}},[e._v("\n                    "+e._s(e.localeText.Profile_ModifyPassword)+"\n                ")])],1),e._v(" "),t("br"),e._v(" "),t("b-modal",{attrs:{title:e.confirmTitle},model:{value:e.confirm,callback:function(o){e.confirm=o},expression:"confirm"}},[e._v(e._s(e.confirmMessage))]),e._v(" "),t("b-modal",{attrs:{size:"lg","ok-only":"",title:e.localeText.Profile_PasswordModTitle},on:{ok:e.modifyPassword},model:{value:e.modPass,callback:function(o){e.modPass=o},expression:"modPass"}},[t("p",[t("label",[e._v(e._s(e.localeText.Profile_CurrentPassword))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.origPassword,expression:"origPassword"}],attrs:{type:"password"},domProps:{value:e.origPassword},on:{input:function(o){o.target.composing||(e.origPassword=o.target.value)}}})]),e._v(" "),t("p",[t("label",[e._v(e._s(e.localeText.Profile_NewPassword))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{type:"password"},domProps:{value:e.newPassword},on:{input:function(o){o.target.composing||(e.newPassword=o.target.value)}}})]),e._v(" "),t("p",[t("label",[e._v(e._s(e.localeText.Profile_NewPassword2))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword2,expression:"newPassword2"}],attrs:{type:"password"},domProps:{value:e.newPassword2},on:{input:function(o){o.target.composing||(e.newPassword2=o.target.value)}}})])])],1)],1)}),[],!1,null,"b0784da8",null);o.default=component.exports},844:function(e,o,t){"use strict";t(10),t(14),t(22),t(103),t(9),t(845),t(27),t(15);var r=t(227),l=t.n(r),n={pad:function(e){return("0"+e).slice(-2)},mmss:function(e){var o=Math.floor(e/60);return e%=60,"".concat(this.pad(o),":").concat(this.pad(e))},hhmmss:function(e){var o=Math.floor(e/60);e%=60;var t=Math.floor(o/60);return o%=60,"".concat(this.pad(t),":").concat(this.pad(o),":").concat(this.pad(e))},getToday:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),o=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+o+dd},getNow:function(){var e=new Date;return""+e.getFullYear()+this.pad(e.getMonth()+1)+this.pad(e.getDate())+this.pad(e.getHours())+this.pad(e.getMinutes())+this.pad(e.getSeconds())},obj2arr:function(e){var o=[],t=Object.keys(e);return t.sort(),t.forEach((function(t){o.push(Object.assign({id:t},e[t]))})),o},arr2obj:function(e){var o={};return e.forEach((function(e){var t=JSON.parse(JSON.stringify(e)),r=e.id;delete t.id,o[r]=t})),o},getOptions:function(e){var o=[];return e.split("#@@#").forEach((function(e){var s=e.split("#@");o.push({text:s[0],value:s[1]})})),o},findIdPos:function(e,o){if(!e)return-1;for(var t=0;t<e.length;t++)if(o==e[t].id)return t;return-1},encode:function(e,o){return new l.a(e).encrypt(o)},decode:function(e,o){return new l.a(e).decrypt(o)}};o.a=n},845:function(e,o,t){"use strict";var r=t(7),l=t(846).start;r({target:"String",proto:!0,forced:t(847)},{padStart:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},846:function(e,o,t){var r=t(50),l=t(228),n=t(52),c=Math.ceil,d=function(e){return function(o,t,d){var f,m,h=String(n(o)),P=h.length,w=void 0===d?" ":String(d),v=r(t);return v<=P||""==w?h:(f=v-P,(m=l.call(w,c(f/w.length))).length>f&&(m=m.slice(0,f)),e?h+m:m+h)}};e.exports={start:d(!1),end:d(!0)}},847:function(e,o,t){var r=t(127);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)}}]);