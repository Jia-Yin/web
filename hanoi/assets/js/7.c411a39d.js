(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(t,i,s){},295:function(t,i,s){"use strict";var e=s(150);s.n(e).a},304:function(t,i,s){"use strict";s.r(i);var e=[244,228,212,196,180,164,148],n=[130,380,630],r={name:"HanoiquizCN",mounted:function(){this.ring=[null,this.$refs.r1,this.$refs.r2,this.$refs.r3,this.$refs.r4,this.$refs.r5,this.$refs.r6,this.$refs.r7],this.setRing()},methods:{Randomize:function(){this.$refs.win.config.visible=!1;for(var t=Math.floor(101*Math.random())+100,i=0;i<t;){var s=Math.floor(3*Math.random()),r=Math.floor(3*Math.random());if(!this.m_stack[s].isEmpty()&&!(this.m_stack[r].size()>0&&this.m_stack[s].top()>this.m_stack[r].top())){var a=this.m_stack[s].pop(),o=this.ring[a];o.config.x=n[r]-10*(a-1),o.config.y=e[this.m_stack[r].size()],this.m_stack[r].push(a),i++}}},setRing:function(){if(this.$refs.win.config.visible=!1,this.from>=0&&this.to>=0&&this.ringnum>0&&this.from!==this.to){this.m_stack=[new this.Stack,new this.Stack,new this.Stack];for(var t=1;t<8;t++)this.ring[t].config.visible=!1;this.animset.anim&&this.animset.anim.stop(),this.PutRings(this.from,this.ringnum),this.animset.anim=null}},Move:function(t,i){if(this.$refs.win.config.visible=!1,this.m_stack[t].isEmpty())alert("Move from empty stick!");else if(this.m_stack[i].size()>0&&this.m_stack[t].top()>this.m_stack[i].top())alert("Move big on top of small!");else{this.moving=!0;var s=this;this.animset.from=t,this.animset.to=i;var r=this.m_stack[t].pop();this.animset.rnum=r;var a=this.ring[r].config,o=n[t]-10*(r-1),c=n[i]-10*(r-1),l=1,v=e[this.m_stack[i].size()];c<o&&(l=-1);var h=1;this.animset.anim=new Konva.Animation((function(t){var e=s.animset.speed*t.timeDiff/1e3;1===h?e>a.y-50?(a.y=50,h=2):a.y-=e:2===h?e>(c-a.x)*l?(a.x=c,h=3):a.x+=e*l:e>=v-a.y?(a.y=v,s.animset.anim.stop(),s.animset.anim=null,s.m_stack[i].push(r),s.moving=!1,i===s.to&&s.m_stack[i].size()===s.ringnum&&(s.$refs.win.config.visible=!0)):a.y+=e})),this.animset.anim.start()}},PutRings:function(t,i){for(var s=i;s>0;s--){var r=this.ring[s].config;r.x=n[this.from]-10*(s-1),r.y=e[i-s],r.visible=!0,this.m_stack[t].push(s)}},Stack:function(){var t=[];this.push=function(i){t.push(i)},this.pop=function(){return t.pop()},this.top=function(){return t[t.length-1]},this.isEmpty=function(){return 0===t.length},this.clear=function(){t=[]},this.size=function(){return t.length}}},data:function(){return{m_stack:null,from:0,to:2,ringnum:3,ring:null,moving:!1,animset:{anim:null,steps:[],pos:0,speed:256,from:null,to:null,rnum:null,speeds:[{value:4096,text:"5"},{value:1024,text:"4"},{value:256,text:"3"},{value:64,text:"2"},{value:16,text:"1"}]},optionsF:[{value:0,text:"A"},{value:1,text:"B"},{value:2,text:"C"}],optionsT:[{value:0,text:"A"},{value:1,text:"B"},{value:2,text:"C"}],optionsR:[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"},{value:6,text:"6"},{value:7,text:"7"}],configKonva:{width:800,height:320},border:{x:0,y:0,width:800,height:320,fill:"#EEEEEE",stroke:"gray",strokeWidth:4},win:{text:"You win !",fontSize:36,align:"center",fill:"blue",x:330,y:50,visible:!1},label1:{text:"A",fontSize:18,align:"center",x:143,y:290},label2:{text:"B",fontSize:18,align:"center",x:393,y:290},label3:{text:"C",fontSize:18,align:"center",x:643,y:290},ring1:{x:130,y:e[6],width:40,height:15,cornerRadius:30,fill:"#FF0000",strokeWidth:4,visible:!1},ring2:{x:120,y:164,width:60,height:15,cornerRadius:30,fill:"#FF7F00",strokeWidth:4,visible:!1},ring3:{x:110,y:180,width:80,height:15,cornerRadius:30,fill:"#FFFF00",strokeWidth:4,visible:!1},ring4:{x:100,y:196,width:100,height:15,cornerRadius:30,fill:"#00FF00",strokeWidth:4,visible:!1},ring5:{x:90,y:212,width:120,height:15,cornerRadius:30,fill:"#00FFFF",strokeWidth:4,visible:!1},ring6:{x:80,y:228,width:140,height:15,cornerRadius:30,fill:"#0000FF",strokeWidth:4,visible:!1},ring7:{x:70,y:244,width:160,height:15,cornerRadius:30,fill:"#8B00FF",strokeWidth:4,visible:!1},basea:{x:60,y:260,width:180,height:15,cornerRadius:30,fill:"brown",strokeWidth:4},baseb:{x:310,y:260,width:180,height:15,cornerRadius:30,fill:"brown",strokeWidth:4},basec:{x:560,y:260,width:180,height:15,cornerRadius:30,fill:"brown",strokeWidth:4},sticka:{x:142,y:120,width:16,height:150,cornerRadius:30,fill:"brown",strokeWidth:4},stickb:{x:392,y:120,width:16,height:150,cornerRadius:30,fill:"brown",strokeWidth:4},stickc:{x:642,y:120,width:16,height:150,cornerRadius:30,fill:"brown",strokeWidth:4}}}},a=(s(295),s(10)),o=Object(a.a)(r,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("b-container",{attrs:{fluid:""}},[s("v-stage",{attrs:{config:t.configKonva}},[s("v-layer",{attrs:{id:"background"}},[s("v-rect",{attrs:{config:t.border}}),t._v(" "),s("v-rect",{attrs:{config:t.basea}}),t._v(" "),s("v-rect",{attrs:{config:t.baseb}}),t._v(" "),s("v-rect",{attrs:{config:t.basec}}),t._v(" "),s("v-rect",{attrs:{config:t.sticka}}),t._v(" "),s("v-rect",{attrs:{config:t.stickb}}),t._v(" "),s("v-rect",{attrs:{config:t.stickc}}),t._v(" "),s("v-text",{attrs:{config:t.label1}}),t._v(" "),s("v-text",{attrs:{config:t.label2}}),t._v(" "),s("v-text",{attrs:{config:t.label3}}),t._v(" "),s("v-text",{ref:"win",attrs:{config:t.win}})],1),t._v(" "),s("v-layer",{attrs:{id:"ring"}},[s("v-rect",{ref:"r1",attrs:{config:t.ring1}}),t._v(" "),s("v-rect",{ref:"r2",attrs:{config:t.ring2}}),t._v(" "),s("v-rect",{ref:"r3",attrs:{config:t.ring3}}),t._v(" "),s("v-rect",{ref:"r4",attrs:{config:t.ring4}}),t._v(" "),s("v-rect",{ref:"r5",attrs:{config:t.ring5}}),t._v(" "),s("v-rect",{ref:"r6",attrs:{config:t.ring6}}),t._v(" "),s("v-rect",{ref:"r7",attrs:{config:t.ring7}})],1)],1),t._v(" "),s("b-row",[s("label",{staticClass:"mr-1"},[t._v("从")]),t._v(" "),s("b-form-select",{staticClass:"mr-2",attrs:{options:t.optionsF},model:{value:t.from,callback:function(i){t.from=i},expression:"from"}}),t._v(" "),s("label",{staticClass:"mx-1"},[t._v("到")]),t._v(" "),s("b-form-select",{staticClass:"mr-2",attrs:{options:t.optionsT},model:{value:t.to,callback:function(i){t.to=i},expression:"to"}}),t._v(" "),s("label",{staticClass:"mx-1"},[t._v("环数")]),t._v(" "),s("b-form-select",{staticClass:"mr-3",attrs:{options:t.optionsR},model:{value:t.ringnum,callback:function(i){t.ringnum=i},expression:"ringnum"}}),t._v(" "),s("b-button",{staticClass:"mr-3",attrs:{variant:"success"},on:{click:t.setRing}},[t._v("设定")]),t._v(" "),s("b-button",{attrs:{variant:"success"},on:{click:function(i){return t.Randomize()}}},[t._v("打乱")])],1),t._v(" "),s("b-row",[s("label",{staticClass:"mr-1"},[t._v("速度")]),t._v(" "),s("b-form-select",{staticClass:"mr-3",attrs:{options:t.animset.speeds},model:{value:t.animset.speed,callback:function(i){t.$set(t.animset,"speed",i)},expression:"animset.speed"}}),t._v(" "),s("b-button",{staticClass:"mr-3",attrs:{variant:"success",disabled:t.moving},on:{click:function(i){return t.Move(0,1)}}},[t._v("A->B")]),t._v(" "),s("b-button",{staticClass:"mr-3",attrs:{variant:"success",disabled:t.moving},on:{click:function(i){return t.Move(0,2)}}},[t._v("A->C")]),t._v(" "),s("b-button",{staticClass:"mr-3",attrs:{variant:"success",disabled:t.moving},on:{click:function(i){return t.Move(1,0)}}},[t._v("B->A")]),t._v(" "),s("b-button",{staticClass:"mr-3",attrs:{variant:"success",disabled:t.moving},on:{click:function(i){return t.Move(1,2)}}},[t._v("B->C")]),t._v(" "),s("b-button",{staticClass:"mr-3",attrs:{variant:"success",disabled:t.moving},on:{click:function(i){return t.Move(2,0)}}},[t._v("C->A")]),t._v(" "),s("b-button",{attrs:{variant:"success",disabled:t.moving},on:{click:function(i){return t.Move(2,1)}}},[t._v("C->B")])],1)],1)}),[],!1,null,"a9a08a4c",null);i.default=o.exports}}]);