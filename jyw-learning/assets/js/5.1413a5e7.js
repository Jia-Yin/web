(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7,8],{387:function(t,n,s){"use strict";var e,i,r=s(398),a=RegExp.prototype.exec,c=String.prototype.replace,u=a,o=(e=/a/,i=/b*/g,a.call(e,"a"),a.call(i,"a"),0!==e.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(o||l)&&(u=function(t){var n,s,e,i,u=this;return l&&(s=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),o&&(n=u.lastIndex),e=a.call(u,t),o&&e&&(u.lastIndex=u.global?e.index+e[0].length:n),l&&e&&e.length>1&&c.call(e[0],s,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(e[i]=void 0)}),e}),t.exports=u},388:function(t,n,s){"use strict";var e=s(100);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},391:function(t,n,s){"use strict";var e=s(188)(!0);t.exports=function(t,n,s){return n+(s?e(t,n).length:1)}},392:function(t,n,s){"use strict";var e=s(400),i=RegExp.prototype.exec;t.exports=function(t,n){var s=t.exec;if("function"==typeof s){var r=s.call(t,n);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==e(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},393:function(t,n,s){"use strict";s(401);var e=s(60),i=s(30),r=s(100),a=s(59),c=s(32),u=s(387),o=c("species"),l=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,n,s){var f=c(t),p=!r(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)}),v=p?!r(function(){var n=!1,s=/a/;return s.exec=function(){return n=!0,null},"split"===t&&(s.constructor={},s.constructor[o]=function(){return s}),s[f](""),!n}):void 0;if(!p||!v||"replace"===t&&!l||"split"===t&&!h){var d=/./[f],g=s(a,f,""[t],function(t,n,s,e,i){return n.exec===u?p&&!i?{done:!0,value:d.call(n,s,e)}:{done:!0,value:t.call(s,n,e)}:{done:!1}}),_=g[0],x=g[1];e(String.prototype,t,_),i(RegExp.prototype,f,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},394:function(t,n,s){},395:function(t,n,s){},398:function(t,n,s){"use strict";var e=s(57);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},400:function(t,n,s){var e=s(183),i=s(32)("toStringTag"),r="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,s,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(s=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?s:r?e(n):"Object"==(a=e(n))&&"function"==typeof n.callee?"Arguments":a}},401:function(t,n,s){"use strict";var e=s(387);s(182)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},402:function(t,n,s){var e=s(58),i=s(183),r=s(32)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[r])?!!n:"RegExp"==i(t))}},425:function(t,n,s){"use strict";var e=s(402),i=s(57),r=s(426),a=s(391),c=s(184),u=s(392),o=s(387),l=s(100),h=Math.min,f=[].push,p=!l(function(){RegExp(4294967295,"y")});s(393)("split",2,function(t,n,s,l){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!e(t))return s.call(i,t,n);for(var r,a,c,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,p=void 0===n?4294967295:n>>>0,v=new RegExp(t.source,l+"g");(r=o.call(v,i))&&!((a=v.lastIndex)>h&&(u.push(i.slice(h,r.index)),r.length>1&&r.index<i.length&&f.apply(u,r.slice(1)),c=r[0].length,h=a,u.length>=p));)v.lastIndex===r.index&&v.lastIndex++;return h===i.length?!c&&v.test("")||u.push(""):u.push(i.slice(h)),u.length>p?u.slice(0,p):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:s.call(this,t,n)}:s,[function(s,e){var i=t(this),r=null==s?void 0:s[n];return void 0!==r?r.call(s,i,e):v.call(String(i),s,e)},function(t,n){var e=l(v,t,this,n,v!==s);if(e.done)return e.value;var o=i(t),f=String(this),d=r(o,RegExp),g=o.unicode,_=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(p?"y":"g"),x=new d(p?o:"^(?:"+o.source+")",_),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===f.length)return null===u(x,f)?[f]:[];for(var m=0,y=0,w=[];y<f.length;){x.lastIndex=p?y:0;var E,k=u(x,p?f:f.slice(y));if(null===k||(E=h(c(x.lastIndex+(p?0:y)),f.length))===m)y=a(f,y,g);else{if(w.push(f.slice(m,y)),w.length===b)return w;for(var C=1;C<=k.length-1;C++)if(w.push(k[C]),w.length===b)return w;y=m=E}}return w.push(f.slice(m)),w}]})},426:function(t,n,s){var e=s(57),i=s(187),r=s(32)("species");t.exports=function(t,n){var s,a=e(t).constructor;return void 0===a||null==(s=e(a)[r])?n:i(s)}},427:function(t,n,s){"use strict";var e=s(394);s.n(e).a},428:function(t,n,s){"use strict";var e=s(395);s.n(e).a},429:function(t,n,s){},439:function(t,n,s){"use strict";s.r(n);var e={props:["step"]},i=(s(428),s(12)),r=Object(i.a)(e,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"question"},[n("span",{staticClass:"qhead"},[this._v("Q"+this._s(this.step))]),this._v(" "),this._t("default")],2)},[],!1,null,"119463f8",null);n.default=r.exports},441:function(t,n,s){"use strict";s.r(n);var e={},i=(s(427),s(12)),r=Object(i.a)(e,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"question"},[this._t("default")],2)},[],!1,null,"39bb40e4",null);n.default=r.exports},478:function(t,n,s){"use strict";var e=s(182),i=s(187),r=s(185),a=s(100),c=[].sort,u=[1,2,3];e(e.P+e.F*(a(function(){u.sort(void 0)})||!a(function(){u.sort(null)})||!s(388)(c)),"Array",{sort:function(t){return void 0===t?c.call(r(this)):c.call(r(this),i(t))}})},479:function(t,n,s){"use strict";var e=s(429);s.n(e).a},508:function(t,n,s){"use strict";s.r(n);s(478),s(425);var e=s(441),i=s(439),r={components:{QuestionIntro:e.default,QuestionMessage:i.default},data:function(){return{qarr:["2,4,6,8,10,12,14,16","3,4,7,8,11,12,15,16","5,6,7,8,13,14,15,16","9,10,11,12,13,14,15,16","2,3,5,8,10,11,13,16","2,3,6,7,9,12,13,16","2,4,5,7,9,11,14,16"],sfl:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],ans:[],step:0,gstate:"open",records:[],tarr:[],ansnum:-1,cheat:-1}},methods:{gstart:function(){this.step=1,this.ans=[],this.records=[],this.tarr=[],this.ansnum=-1,this.cheat=-1;for(var t=15;t>0;t--){var n=Math.floor(Math.random()*(t+1)),s=this.sfl[t];this.sfl[t]=this.sfl[n],this.sfl[n]=s}this.gstate="game"},byes:function(){this.records.push({id:this.step,num:this.tarr,ans:"Y"}),this.ans.push(1),this.step<7?this.step++:this.ncheck()},bno:function(){this.records.push({id:this.step,num:this.tarr,ans:"N"}),this.ans.push(0),this.step<7?this.step++:this.ncheck()},ncheck:function(){var t=1,n=-1,s="";(this.ans[0]+this.ans[1]+this.ans[2]+this.ans[4])%2==0?s+="0":(s+="1",n=4),(this.ans[0]+this.ans[1]+this.ans[3]+this.ans[5])%2==0?s+="0":(s+="1",n=5),(this.ans[0]+this.ans[2]+this.ans[3]+this.ans[6])%2==0?s+="0":(s+="1",n=6),"111"==s&&(n=0),"110"==s&&(n=1),"101"==s&&(n=2),"011"==s&&(n=3);for(var e=0;e<4;e++)t+=e==n?(1-this.ans[e])*(1<<e):this.ans[e]*(1<<e);this.ansnum=this.sfl[t-1],n>=0&&(this.cheat=n+1),this.gstate="end"}},computed:{numberList:function(){for(var t=this.qarr[this.step-1].split(","),n=[],s=0;s<8;s++)n[s]=this.sfl[t[s]-1];return n.sort(function(t,n){return t-n}),this.tarr=n,n}}},a=(s(479),s(12)),c=Object(a.a)(r,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"hcontent"},["open"==t.gstate?s("div",[s("question-intro",{staticClass:"question"},[s("p",[t._v("請從1～16中想一個數字，回答以下問題，最多說謊一次。")]),t._v(" "),s("p",[t._v("準備好了嗎？")])]),t._v(" "),s("br"),t._v(" "),s("b-button",{attrs:{id:"gstart",variant:"success"},on:{click:t.gstart}},[t._v("好")])],1):"game"==t.gstate?s("div",[s("question-message",{attrs:{step:t.step}},[t._v("\n      請問是下面其中的一個數嗎？\n    ")]),t._v(" "),t._l(t.numberList,function(n){return s("span",[t._v(t._s(n)+" ")])}),t._v(" "),s("br"),s("br"),t._v(" "),s("b-button",{attrs:{id:"bguess",variant:"success"},on:{click:t.byes}},[t._v("是")]),t._v(" "),s("span",{staticStyle:{display:"inline-block",width:"60px"}}),t._v(" "),s("b-button",{attrs:{id:"bok",variant:"warning"},on:{click:t.bno}},[t._v("否")])],2):s("div",[s("question-intro",{staticClass:"question"},[t.cheat>0?s("p",[t._v("\n        你想的數是"),s("span",{staticClass:"answer"},[t._v(t._s(t.ansnum))]),t._v("，\n        你第"),s("span",{staticClass:"answer"},[t._v(t._s(t.cheat))]),t._v("次騙我！\n      ")]):s("p",[t._v("\n        你想的數是"),s("span",{staticClass:"answer"},[t._v(t._s(t.ansnum))]),t._v("，\n        你都沒有騙我！ \n      ")]),t._v(" "),s("p",[t._v("是否重來一次？")])]),s("br"),t._v(" "),t.gstate?s("b-button",{attrs:{id:"byes",variant:"success"},on:{click:function(n){t.gstate="open"}}},[t._v("好")]):t._e()],1),t._v(" "),s("br"),t._v(" "),"open"!=t.gstate?s("div",{staticClass:"records"},t._l(t.records,function(n){return s("div",[s("p",[t._v(t._s(n.id)+".  "+t._s(n.num)+"  ==> "+t._s(n.ans))])])}),0):t._e(),s("br")])},[],!1,null,"281a3368",null);n.default=c.exports}}]);