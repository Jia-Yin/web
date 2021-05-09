(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{585:function(e,i,v){e.exports=v.p+"assets/img/2021-05-03-13-59-39.cbd96a56.png"},725:function(e,i,v){"use strict";v.r(i);var l=v(1),t=Object(l.a)({},(function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h2",{attrs:{id:"使用-sdr-傳送音頻"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#使用-sdr-傳送音頻"}},[e._v("#")]),e._v(" 使用 SDR 傳送音頻")]),e._v(" "),l("p",[l("font",{attrs:{color:"red"}},[e._v("目前各國政府對於無線電頻道使用，都有相應的法令規範，因此在使用 SDR 傳送無線訊號之前，必須先了解相關的法規，否則隨意傳送無線訊號，可能干擾或破壞現有的無線頻道通訊，可能觸犯相關的法令。因此在進行無線訊號發送的相關實驗之前，應取得合格的身份證明以及使用權限。若是在實驗室進行相關實驗，也要特別注意訊號的傳送是否伺限在一個密閉的環境，以免干擾其他無線頻道的運作而觸犯相關法令。")])],1),e._v(" "),l("p",[e._v("此處所要建立的模擬系統，仍然是針對單頻的 FM 訊號。從程式庫模組中選擇 Signal Source, Rational Resampler x2, osomocomm Source, WBFM Transmit, QT GUI Sink 及 osmocom Sink 模組。將所有模組如下圖方式連接在一起：")]),e._v(" "),l("p",[l("img",{attrs:{src:v(585),alt:""}})]),e._v(" "),l("p",[e._v("各模組的參數依次如下：")]),e._v(" "),l("ul",[l("li",[e._v("Sample Rate: 設定為 32 KHz。")]),e._v(" "),l("li",[e._v("Signal Source: 設定發送的訊號\n"),l("ul",[l("li",[e._v("Output Type: float")]),e._v(" "),l("li",[e._v("Waveform: Cosine")]),e._v(" "),l("li",[e._v("Frequency: 1000")])])]),e._v(" "),l("li",[e._v("Rational Resampler 1: 將抽樣頻率從 32K 轉換成 320K\n"),l("ul",[l("li",[e._v("Interpolation: 10")]),e._v(" "),l("li",[e._v("Decimation: 1")]),e._v(" "),l("li",[e._v("Taps: firdes.low_pass(1, 320e3, 20e3, 2e3)")])])]),e._v(" "),l("li",[e._v("WBFM Transmit: 將訊號進行 FM 調變\n"),l("ul",[l("li",[e._v("Audio Rate: 320e3")]),e._v(" "),l("li",[e._v("Quadrature Rate: 320e3")])])]),e._v(" "),l("li",[e._v("Rational Resampler 2: 將抽樣頻率從 320K 轉換成 8M\n"),l("ul",[l("li",[e._v("Interpolation: 25")]),e._v(" "),l("li",[e._v("Decimation: 1")]),e._v(" "),l("li",[e._v("Taps: firdes.low_pass(40, 8e6, 75e3, 10e3)")])])]),e._v(" "),l("li",[e._v("QT GUI Sink: 觀察送出的訊號\n"),l("ul",[l("li",[e._v("Bandwidth: 8e6")])])]),e._v(" "),l("li",[e._v("osomocomm Sink: 使用 HackRF One 傳送 FM 訊號\n"),l("ul",[l("li",[e._v("Device Arguments: hackrf=0")]),e._v(" "),l("li",[e._v("Sample Rate: 8e6")]),e._v(" "),l("li",[e._v("Ch0: Frequency (Hz): 17241e4")]),e._v(" "),l("li",[e._v("Ch0: RF Gain (dB): 0")]),e._v(" "),l("li",[e._v("Ch0: IF Gain (dB): 32")])])])]),e._v(" "),l("div",{staticClass:"custom-block info"},[l("p",{staticClass:"custom-block-title"},[e._v("使用 HackRF One 傳送")]),e._v(" "),l("p",[e._v("在某些機器上，可能要把上面 osomcomm Sink 的 Device Arguments 拿掉（變成空白）才能正常傳送訊號。")])]),e._v(" "),l("p",[e._v("在這個系統中，訊號由 Signal Source 產生，之後透過抽樣轉換模組將訊號的抽樣速度由 32K 轉換成 320K。之後經由 WBFM Transmit 模組進行 FM 調變，調變之後，再次透過樣轉換模組將訊號的抽樣速度由 320K 轉換成 8M，最後再透過 osomocomm Sink 將訊號送出，同時也使用一個 QT GUI Sink 模組進行訊號的觀察。")]),e._v(" "),l("p",[e._v("接好之後，將檔案存檔，產出模型並執行，如果沒有錯誤的話，應該會在 QT GUI Sink 看到輸出的訊號圖。如果有相應的 FM 接收器，也可以聽到音頻的聲音。")]),e._v(" "),l("br"),e._v(" "),l("exercise"),e._v("\n兩組一起做實驗，一組發射訊號，另一組接收訊號，看是否能夠成功？\n")],1)}),[],!1,null,null,null);i.default=t.exports}}]);