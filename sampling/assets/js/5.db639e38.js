(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{186:function(t,i,s){var a=s(1),e=s(187),n=s(63);a({target:"Array",proto:!0},{fill:e}),n("fill")},187:function(t,i,s){"use strict";var a=s(15),e=s(65),n=s(14);t.exports=function(t){for(var i=a(this),s=n(i.length),r=arguments.length,o=e(r>1?arguments[1]:void 0,s),h=r>2?arguments[2]:void 0,c=void 0===h?s:e(h,s);c>o;)i[o++]=t;return i}},188:function(t,i,s){var a=s(1),e=s(4),n=s(107),r=[].slice,o=function(t){return function(i,s){var a=arguments.length>2,e=a?r.call(arguments,2):void 0;return t(a?function(){("function"==typeof i?i:Function(i)).apply(this,e)}:i,s)}};a({global:!0,bind:!0,forced:/MSIE .\./.test(n)},{setTimeout:o(e.setTimeout),setInterval:o(e.setInterval)})},191:function(t,i,s){},273:function(t,i,s){"use strict";var a=s(191);s.n(a).a},279:function(t,i,s){"use strict";s.r(i);s(186),s(109),s(188);var a={data:function(){return{rs:1,fs:10,gs:1,canw:0,speed:1,canh:0,idx:0,frame:0,scnt:1,showrange:1,degree:0,radius:120,showoriginal:!0,showrecover:!1,cx:0,cy:0,acolor:"#555555",fcolor:"#0000ffa0",bdcolor:"#00ff00",cdcolor:"#00ff00",tdcolor:"#00ff00",dcolor:"#ff8000",arccolor:"#ff0000"}},mounted:function(){this.init()},computed:{boriginal:function(){return this.showoriginal?"Hide Original Signal":"Show Original Signal"},brecover:function(){return this.showrecover?"Hide Recovery Signal":"Show Recovery Signal"}},methods:{setspeed:function(t){this.speed=t,this.changepara()},changepara:function(){this.gs=this.rs%this.fs,this.gs>this.fs/2&&(this.gs-=this.fs),this.idx=0,this.frame=0,this.scnt=1},coriginal:function(){this.showoriginal=!this.showoriginal,this.showoriginal?this.boriginal="Hide Original":this.boriginal="Show Original"},path_circ:function(t,i,s,a){t.beginPath(),t.arc(i,s,a,0,2*Math.PI,!0),t.stroke(),t.closePath()},path_line:function(t,i,s,a,e){t.beginPath(),t.moveTo(i,s),t.lineTo(a,e),t.stroke(),t.closePath()},millis:function(){return(new Date).getTime()},init:function(){var t=this,i=this.$refs.canv,s=i.getContext("2d");this.canw=i.width,this.canh=i.height,this.cx=this.canw/2,this.cy=this.canh/2,setInterval((function(){t.draw(s)}),10)},path_dot:function(t,i,s){t.strokeStyle=this.cdcolor,t.lineWidth=1.5;var a=Math.round(10*this.scnt);if(this.frame>=a-this.showrange&&this.frame<=a+this.showrange){var e=this.canw/2+this.radius*Math.cos(a*this.rs*Math.PI/(5*this.fs)),n=this.canh/2-this.radius*Math.sin(a*this.rs*Math.PI/(5*this.fs));this.circle_dot(t,e,n,15,"#ff0000",0),this.frame===a+this.showrange&&this.scnt++}if(this.showoriginal){var r=this.canw/2+this.radius*Math.cos(i),o=this.canh/2-this.radius*Math.sin(i);this.circle_dot(t,r,o,4,this.dcolor,1)}},circle_dot:function(t,i,s,a,e,n){t.beginPath(),t.fillStyle=e,t.strokeStyle=e,t.arc(i,s,a,0,2*Math.PI,!0),1===n?t.fill():t.stroke(),t.closePath()},draw:function(t){if(this.idx%(11-this.speed)==0){this.idx++,this.degree=36*this.frame*this.rs/this.fs;var i=this.degree/360*2*Math.PI;if(t.clearRect(0,0,this.canw,this.canh),t.strokeStyle=this.acolor,t.lineWidth=.6,this.path_line(t,10,this.cy,this.canw-10,this.cy),this.path_line(t,this.cx,10,this.cx,this.canh-10),t.fillStyle="rgba(0,0,0,0)",t.strokeStyle=this.fcolor,t.lineWidth=2.5,this.path_circ(t,this.cx,this.cy,this.radius),this.path_dot(t,i,1),this.showrecover){var s=this.canw/2+this.radius*Math.cos(i*this.gs/this.rs),a=this.canh/2-this.radius*Math.sin(i*this.gs/this.rs);this.circle_dot(t,s,a,6,"#00ff00",1)}this.frame++}else this.idx++}}},e=(s(273),s(30)),n=Object(e.a)(a,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"gcontainer"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"my-2"},[s("span",{staticClass:"label"},[t._v("Rotate Speed:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.rs,expression:"rs"}],domProps:{value:t.rs},on:{keyup:t.changepara,input:function(i){i.target.composing||(t.rs=i.target.value)}}})]),t._v(" "),s("div",{staticClass:"my-2"},[s("span",{staticClass:"label"},[t._v("Sample Rate:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fs,expression:"fs"}],domProps:{value:t.fs},on:{keyup:t.changepara,input:function(i){i.target.composing||(t.fs=i.target.value)}}})]),t._v(" "),s("b-button",{staticClass:"my-2",attrs:{size:"sm",variant:"outline-success"},on:{click:function(i){t.showoriginal=!t.showoriginal}}},[t._v(t._s(t.boriginal))]),t._v(" "),s("b-button",{staticClass:"my-2",attrs:{size:"sm",variant:"outline-success"},on:{click:function(i){t.showrecover=!t.showrecover}}},[t._v(t._s(t.brecover))]),t._v(" "),s("div",{staticClass:"mt-3"},[s("span",[t._v("Speed: "+t._s(t.speed)+"   ")]),t._v(" "),s("b-form-input",{staticClass:"speed",attrs:{type:"range",min:"1",max:"10"},model:{value:t.speed,callback:function(i){t.speed=i},expression:"speed"}})],1)],1),t._v(" "),s("div",{staticClass:"graph"},[s("canvas",{ref:"canv",staticClass:"mycanvas",attrs:{width:"300",height:"300"}},[t._v("Canvas Not supported, sorry.")])])])}),[],!1,null,"61309266",null);i.default=n.exports}}]);