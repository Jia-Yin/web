(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{509:function(t,s,a){t.exports=a.p+"assets/img/step5a.56fb5d73.png"},510:function(t,s,a){t.exports=a.p+"assets/img/step5b.bc0c4090.png"},525:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"步驟-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步驟-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 步驟 5")]),t._v(" "),n("p",[t._v("截至目前為止，我們已經可以把資料傳到雲端試算表了。但如果仔細檢查試算表寫入的資料，會發現寫入的時間並不均勻，而且寫入的時間間隔也不用那麼密集，所以還要做一些調整。")]),t._v(" "),n("ol",[n("li",[t._v("其實 Webduino 的感測模組，一般情況下是感測值有變化才會產生新的事件，也就是說，在以下的程式碼中，photocell.measure 裡面那個函數，是感測值有變化才會被呼叫。而呼叫之後，會把新的感測值寫入 photocell.detectedVal 中。")])]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("  photocell"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("measure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    photocell"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detectedVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#lightvalue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[t._v("雖然 photocell.measure 被呼叫的時間不均勻，但 photocell.detectedVal 的值一直會被更新成最新的值。我們可以另外使用進階功能中的等待模組，裡面有一個每隔多少時間執行程序的積木來寫入資料。像下面這樣：\n"),n("img",{attrs:{src:a(509),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("把它的 JavaScript 程式碼找出來。這邊 setInterval 有兩個參數，第一個是要執行的函數，第二個是每隔多少毫秒執行一次。")])])]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  myData"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  myData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sheetUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  myData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sheetName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'工作表1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  myData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  myData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeSheetData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[t._v("把我們上一個版本中，寫入資料的程式碼部份取出來，改放到上面的 setInterval 的第一個函數中。記得要量測值的欄位改成 photocell.detectedVal，另外，把 1000 加長，例如改成 3000（每 3 秒寫入一筆資料）。")])]),t._v(" "),n("li",[n("p",[t._v("試著執行看看結果如何。從下表可以看出來，幾乎都是每隔 3 秒寫入一筆資料，只有一筆例外。（可能跟程式或網路的延遲有關？）"),n("br"),t._v(" "),n("img",{attrs:{src:a(510),alt:""}})])])]),t._v(" "),n("hr"),t._v(" "),n("ClientOnly",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{variant:"outline-primary"}},[t._v("提示")]),t._v(" "),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[n("b-card",[n("iframe",{attrs:{width:"100%",height:"300",src:"//jsfiddle.net/jywglady/2burt1gx/14/embedded/js,html,css/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}})])],1)],1)],1)},[],!1,null,null,null);s.default=e.exports}}]);