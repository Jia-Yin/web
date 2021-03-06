(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(t,s,i){},293:function(t,s,i){"use strict";var e=i(148);i.n(e).a},302:function(t,s,i){"use strict";i.r(s);var e=[244,228,212,196,180,164,148],a=[130,380,630],n={name:"Hanoi",mounted:function(){this.ring=[null,this.$refs.r1,this.$refs.r2,this.$refs.r3,this.$refs.r4,this.$refs.r5,this.$refs.r6,this.$refs.r7],this.setRing()},computed:{pausetext:function(){return this.animset.pause?"Play":"Pause"}},methods:{back:function(){if(0!==this.animset.pos||this.animset.anim)if(this.animset.auto=!1,this.animset.pause=!0,this.animset.back=!0,this.animset.forward=!1,this.animset.anim){this.animset.anim.stop(),this.animset.anim=null;this.animset.steps[this.animset.pos];var t=this.animset.from,s=this.animset.rnum,i=this.ring[s];i.config.x=a[t]-10*(s-1),i.config.y=e[this.m_stack[t].size()],this.m_stack[t].push(s),this.animset.back=!1}else if(this.animset.pos>0){var n=this.animset.steps[this.animset.pos-1];this.Move(n.to,n.from)}},forward:function(){if(this.animset.pos!==this.animset.steps.length||this.animset.anim)if(this.animset.auto=!1,this.animset.pause=!0,this.animset.forward=!0,this.animset.back=!1,this.animset.anim){this.animset.anim.stop(),this.animset.anim=null;this.animset.steps[this.animset.pos];var t=this.animset.to,s=this.animset.rnum,i=this.ring[s];i.config.x=a[t]-10*(s-1),i.config.y=e[this.m_stack[t].size()],this.m_stack[t].push(s),this.animset.pos++,this.animset.forward=!1}else if(this.animset.pos<this.animset.steps.length){var n=this.animset.steps[this.animset.pos];this.Move(n.from,n.to)}},pause:function(){if(this.animset.anim)this.animset.anim.isRunning()?this.animset.anim.stop():(this.animset.auto=!0,this.animset.anim.start());else if(this.animset.pos>=0&&this.animset.pos<this.animset.steps.length){var t=this.animset.steps[this.animset.pos];this.animset.auto=!0,this.Move(t.from,t.to)}this.animset.pause=!this.animset.pause},_Solve:function(t,s,i,e){1===e?this.animset.steps.push({from:t,to:i}):(this._Solve(t,i,s,e-1),this.animset.steps.push({from:t,to:i}),this._Solve(s,t,i,e-1))},setRing:function(){if(this.from>=0&&this.to>=0&&this.ringnum>0&&this.from!==this.to){this.m_stack=[new this.Stack,new this.Stack,new this.Stack];for(var t=1;t<8;t++)this.ring[t].config.visible=!1;this.animset.auto=!0,this.animset.pause=!0,this.animset.pos=0,this.animset.back=!1,this.animset.forward=!1,this.animset.steps=[],this.animset.anim&&(this.animset.anim.stop(),this.animset.anim=null),this.PutRings(this.from,this.ringnum),this._Solve(this.from,3-this.from-this.to,this.to,this.ringnum),this.animset.pos=0,this.animset.anim=null}},Move:function(t,s){if(this.m_stack[t].isEmpty())alert("Move from empty stick!");else if(this.m_stack[s].size()>0&&this.m_stack[t].top()>this.m_stack[s].top())alert("Move big on top of small!");else{var i=this;this.animset.from=t,this.animset.to=s;var n=this.m_stack[t].pop();this.animset.rnum=n;var r=this.ring[n].config,o=a[t]-10*(n-1),h=a[s]-10*(n-1),m=1,c=e[this.m_stack[s].size()];h<o&&(m=-1);var l=1;this.animset.anim=new Konva.Animation((function(t){var e=i.animset.speed*t.timeDiff/1e3;if(1===l)e>r.y-50?(r.y=50,l=2):r.y-=e;else if(2===l)e>(h-r.x)*m?(r.x=h,l=3):r.x+=e*m;else if(e>=c-r.y)if(r.y=c,i.animset.anim.stop(),i.animset.anim=null,i.m_stack[s].push(n),i.animset.back?i.animset.pos--:i.animset.pos++,i.animset.auto&&!i.animset.back&&!i.animset.forward&&i.animset.pos<i.animset.steps.length){var a=i.animset.steps[i.animset.pos];i.animset.back=!1,i.animset.forward=!1,i.Move(a.from,a.to)}else i.animset.back=!1,i.animset.forward=!1;else r.y+=e})),this.animset.anim.start()}},PutRings:function(t,s){for(var i=s;i>0;i--){var n=this.ring[i].config;n.x=a[this.from]-10*(i-1),n.y=e[s-i],n.visible=!0,this.m_stack[t].push(i)}},Stack:function(){var t=[];this.push=function(s){t.push(s)},this.pop=function(){return t.pop()},this.top=function(){return t[t.length-1]},this.isEmpty=function(){return 0===t.length},this.clear=function(){t=[]},this.size=function(){return t.length}}},data:function(){return{m_stack:null,from:0,to:2,ringnum:3,ring:null,animset:{anim:null,steps:[],pos:0,speed:256,back:!1,forward:!1,from:null,to:null,rnum:null,speeds:[{value:4096,text:"5"},{value:1024,text:"4"},{value:256,text:"3"},{value:64,text:"2"},{value:16,text:"1"}],auto:!0,pause:!1},optionsF:[{value:0,text:"A"},{value:1,text:"B"},{value:2,text:"C"}],optionsT:[{value:0,text:"A"},{value:1,text:"B"},{value:2,text:"C"}],optionsR:[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"},{value:6,text:"6"},{value:7,text:"7"}],configKonva:{width:800,height:320},border:{x:0,y:0,width:800,height:320,fill:"#EEEEEE",stroke:"gray",strokeWidth:4},label1:{text:"A",fontSize:18,align:"center",x:143,y:290},label2:{text:"B",fontSize:18,align:"center",x:393,y:290},label3:{text:"C",fontSize:18,align:"center",x:643,y:290},ring1:{x:130,y:e[6],width:40,height:15,cornerRadius:30,fill:"#FF0000",strokeWidth:4,visible:!1},ring2:{x:120,y:164,width:60,height:15,cornerRadius:30,fill:"#FF7F00",strokeWidth:4,visible:!1},ring3:{x:110,y:180,width:80,height:15,cornerRadius:30,fill:"#FFFF00",strokeWidth:4,visible:!1},ring4:{x:100,y:196,width:100,height:15,cornerRadius:30,fill:"#00FF00",strokeWidth:4,visible:!1},ring5:{x:90,y:212,width:120,height:15,cornerRadius:30,fill:"#00FFFF",strokeWidth:4,visible:!1},ring6:{x:80,y:228,width:140,height:15,cornerRadius:30,fill:"#0000FF",strokeWidth:4,visible:!1},ring7:{x:70,y:244,width:160,height:15,cornerRadius:30,fill:"#8B00FF",strokeWidth:4,visible:!1},basea:{x:60,y:260,width:180,height:15,cornerRadius:30,fill:"brown",strokeWidth:4},baseb:{x:310,y:260,width:180,height:15,cornerRadius:30,fill:"brown",strokeWidth:4},basec:{x:560,y:260,width:180,height:15,cornerRadius:30,fill:"brown",strokeWidth:4},sticka:{x:142,y:120,width:16,height:150,cornerRadius:30,fill:"brown",strokeWidth:4},stickb:{x:392,y:120,width:16,height:150,cornerRadius:30,fill:"brown",strokeWidth:4},stickc:{x:642,y:120,width:16,height:150,cornerRadius:30,fill:"brown",strokeWidth:4}}}},r=(i(293),i(10)),o=Object(r.a)(n,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("b-container",{attrs:{fluid:""}},[i("v-stage",{attrs:{config:t.configKonva}},[i("v-layer",{attrs:{id:"background"}},[i("v-rect",{attrs:{config:t.border}}),t._v(" "),i("v-rect",{attrs:{config:t.basea}}),t._v(" "),i("v-rect",{attrs:{config:t.baseb}}),t._v(" "),i("v-rect",{attrs:{config:t.basec}}),t._v(" "),i("v-rect",{attrs:{config:t.sticka}}),t._v(" "),i("v-rect",{attrs:{config:t.stickb}}),t._v(" "),i("v-rect",{attrs:{config:t.stickc}}),t._v(" "),i("v-text",{attrs:{config:t.label1}}),t._v(" "),i("v-text",{attrs:{config:t.label2}}),t._v(" "),i("v-text",{attrs:{config:t.label3}})],1),t._v(" "),i("v-layer",{attrs:{id:"ring"}},[i("v-rect",{ref:"r1",attrs:{config:t.ring1}}),t._v(" "),i("v-rect",{ref:"r2",attrs:{config:t.ring2}}),t._v(" "),i("v-rect",{ref:"r3",attrs:{config:t.ring3}}),t._v(" "),i("v-rect",{ref:"r4",attrs:{config:t.ring4}}),t._v(" "),i("v-rect",{ref:"r5",attrs:{config:t.ring5}}),t._v(" "),i("v-rect",{ref:"r6",attrs:{config:t.ring6}}),t._v(" "),i("v-rect",{ref:"r7",attrs:{config:t.ring7}})],1)],1),t._v(" "),i("b-row",[i("label",{staticClass:"mr-1"},[t._v("From:")]),t._v(" "),i("b-form-select",{staticClass:"mr-2",attrs:{options:t.optionsF},model:{value:t.from,callback:function(s){t.from=s},expression:"from"}}),t._v(" "),i("label",{staticClass:"mx-1"},[t._v("To:")]),t._v(" "),i("b-form-select",{staticClass:"mr-2",attrs:{options:t.optionsT},model:{value:t.to,callback:function(s){t.to=s},expression:"to"}}),t._v(" "),i("label",{staticClass:"mx-1"},[t._v("Num:")]),t._v(" "),i("b-form-select",{staticClass:"mr-3",attrs:{options:t.optionsR},model:{value:t.ringnum,callback:function(s){t.ringnum=s},expression:"ringnum"}}),t._v(" "),i("b-button",{attrs:{variant:"success"},on:{click:t.setRing}},[t._v("Set")])],1),t._v(" "),i("b-row",[i("label",{staticClass:"mr-1"},[t._v("Speed:")]),t._v(" "),i("b-form-select",{staticClass:"mr-3",attrs:{options:t.animset.speeds},model:{value:t.animset.speed,callback:function(s){t.$set(t.animset,"speed",s)},expression:"animset.speed"}}),t._v(" "),i("b-button",{staticClass:"mr-2",attrs:{variant:"success"},on:{click:t.pause}},[t._v(t._s(t.pausetext))]),t._v(" "),i("b-button",{staticClass:"mr-2",attrs:{variant:"success",disabled:!t.animset.pause||t.animset.back||t.animset.forward},on:{click:t.back}},[t._v("<")]),t._v(" "),i("b-button",{attrs:{variant:"success",disabled:!t.animset.pause||t.animset.back||t.animset.forward},on:{click:t.forward}},[t._v(">")])],1)],1)}),[],!1,null,"99148d50",null);s.default=o.exports}}]);