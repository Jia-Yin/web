(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{807:function(t,e,n){"use strict";n.r(e);n(173),n(26);var r=n(203),c=n.n(r),o={data:function(){return{config:null,result:null,decode:null}},methods:{encrypt2:function(){var t=new c.a("myexamsite"),e=this.config.split("\n"),n=[];e.forEach((function(line){var t=line.match(/\s*([\w\-\.:/]+)\s*:\s*\"([\w\-\.:/]+)\"\s*/);t&&n.push('"'+t[1]+'":"'+t[2]+'"')})),n="{"+n.join(",")+"}",this.result=t.encrypt(n);var r=t.decrypt(this.result);this.decode=r},encrypt:function(){new c.a("myexamsite");var t=JSON.stringify({apiKey:"AIzaSyByB6B9nlBwy8A-eAi-ay_KI_vGMF6kPy0",authDomain:"programming-e847f.firebaseapp.com",databaseURL:"https://programming-e847f.firebaseio.com",projectId:"programming-e847f",storageBucket:"programming-e847f.appspot.com",messagingSenderId:"686441198356",appId:"1:686441198356:web:cef6dbebb2b08f16"});this.result=JSON.parse(t)}}},l=n(33),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("p",[t._v("Fill in the config data:")]),t._v(" "),n("b-form-textarea",{attrs:{rows:"10"},model:{value:t.config,callback:function(e){t.config=e},expression:"config"}}),t._v(" "),n("br"),t._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:t.encrypt}},[t._v("Encrypt")]),t._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:t.encrypt2}},[t._v("Encrypt 2")]),t._v(" "),n("div",[t._v(t._s(t.result))]),t._v(" "),n("div",[t._v(t._s(t.decode))])],1)}),[],!1,null,"18bbf12a",null);e.default=component.exports}}]);