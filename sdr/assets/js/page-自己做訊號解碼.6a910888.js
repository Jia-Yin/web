(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{507:function(t,e,o){t.exports=o.p+"assets/img/2021-05-08-22-37-47.4e1e48f3.png"},696:function(t,e,o){"use strict";o.r(e);var s=o(1),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自己做訊號解碼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自己做訊號解碼"}},[t._v("#")]),t._v(" 自己做訊號解碼")]),t._v(" "),s("p",[t._v("我們剛才使用系統提供的 AM Demod 模組來解碼 AM 的訊號，但其實 AM 訊號很單純，它使用載波來傳送訊號，而載波的振幅變化，其實就是我們的訊號。了解這個原理之後，其實我們也可以自己來進行解碼。")]),t._v(" "),s("p",[t._v("解碼的方式，是先找到訊號的振幅，怎麼找呢？因為收到的訊號實際是複數值，因此只要求出其振幅就可以了，GNU Radio 中有一個模組叫做 Complex to Mag，就是用來找複數訊號的振幅，找出來的就是我們的訊號，接著可以將訊號的抽樣率降下來，以便送到 Audio Sink 播放。在播放之前，也可以先去掉訊號的直流成份，以及調整訊號的增益。")]),t._v(" "),s("p",[t._v("系統的架構如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:o(507),alt:""}})]),t._v(" "),s("p",[t._v("存檔並執行之後，發現也可以將訊號解碼出來，不過解出來的訊號似乎沒有 AM Demod 解出來的訊號來得清晰。")]),t._v(" "),s("br"),t._v(" "),s("exercise"),t._v(" "),s("ol",[s("li",[t._v("實際上，我們使用 Complex to Mag 得到的是載波振幅的變化，但我們真正的訊號應該是載波的振幅波包才對，這兩者還是有一點點小差別的。請說明這兩者的差別為何？")]),t._v(" "),s("li",[t._v("試著將上圖中的 Rational Resampler 改成 Low Pass Filter，Decimation 一樣設成 8，但是 Cutoff frequency 和 Transition Width 可以設得比 5K 和 100 再小一點，看解碼出來的訊號有何影響？")])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);