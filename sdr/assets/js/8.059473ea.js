(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{509:function(t,r,a){t.exports=a.p+"assets/img/P_to_u.78c98df5.png"},510:function(t,r,a){t.exports=a.p+"assets/img/Cont_to_digital.bc4377c8.png"},511:function(t,r,a){t.exports=a.p+"assets/img/Antenna.3c56eda4.png"},525:function(t,r,a){"use strict";a.r(r);var e=a(6),n=Object(e.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"數位訊號處理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#數位訊號處理"}},[t._v("#")]),t._v(" 數位訊號處理")]),t._v(" "),e("p",[t._v("為了使用軟體來處理訊號，我們必須先將訊數從類比訊號轉成數位訊號。")]),t._v(" "),e("h5",{attrs:{id:"什麼是類比訊號"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什麼是類比訊號"}},[t._v("#")]),t._v(" 什麼是類比訊號")]),t._v(" "),e("p",[t._v("以電壓為例，連續的電壓變化就是類比的訊號。例如，我們可以將聲音透由振動的量測轉換成電壓的訊號，由於音量的變化是連續的，透過一些電路所轉換出來的電壓，基本上也是連續的，這種連續的訊號值，在時間上是連續的，在訊號的大小上面也是連續的，便稱為類比訊號。")]),t._v(" "),e("p",[t._v("["),e("img",{attrs:{src:a(509),alt:"p_to_u.png"}})]),t._v(" "),e("p",[t._v("圖片來源："),e("a",{attrs:{href:"https://wiki.gnuradio.org/index.php/Guided_Tutorial_Introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNU Radio 官網"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"什麼是數位訊號"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什麼是數位訊號"}},[t._v("#")]),t._v(" 什麼是數位訊號")]),t._v(" "),e("p",[t._v("數位訊號基本上可以看成是由 0 和 1 等位元所構成的訊號，這種訊號可以很容易地透過軟體來加以儲存和處理。舉例來說，我們常聽的 MP3 音樂的檔案，就是由一堆的 0 和 1 的位元所構成，因此便屬於一種數位訊號。這種訊號值，在時間上和訊號的大小上面，都是離散可數的，例如 MP3 的格式檔，可以設定聲音每秒的取樣個數，以及每個取樣值由多少位元構成。")]),t._v(" "),e("h5",{attrs:{id:"如何將類比訊號轉成數位訊號"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何將類比訊號轉成數位訊號"}},[t._v("#")]),t._v(" 如何將類比訊號轉成數位訊號")]),t._v(" "),e("p",[t._v("由類比訊號轉成數位訊號，基本上會經過兩個主要的步驟，第一個步驟是取樣，第二個步驟是量化。有些人覺得量化之後，還要經過訊號表示方法的編碼，不過基本上這已經算是在數位化之後的處理範疇了。從類比訊號轉成數位訊號稱為 Analog-to-Digital Converter (ADC)；反過來，從數位訊號轉成類比訊號，稱為 Digital-to-Analog Converter (DAC)。而執行 ADC 及 DAC 的單元，我們常將其稱為"),e("strong",[t._v("編碼/解碼器")]),t._v("，英文叫 Coder/Decoder，簡稱為 Codec。")]),t._v(" "),e("h5",{attrs:{id:"什麼是取樣"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什麼是取樣"}},[t._v("#")]),t._v(" 什麼是取樣？")]),t._v(" "),e("p",[t._v("以錄音為例，聲波的強度變化是隨著時間而改變的，因此在時間軸上，可以看成是連續的，也就是說，聲波的強度是時間的函式，可以寫成 $v(t)$。取樣的意思，就是在時間上，只保留等間隔的時間點的值，換句話說，假設其間隔為 $T$，那麼我們只保留 $v(t)$ 在 $t=nT, n\\in N$ 的值。訊號將會由 $v(t)$ 變成 $v(nT)$，或者也可以寫成 $v_n$。這樣的訊號就是取樣後的訊號，在時間軸上變成是離散可數的；然而在振幅上，理論上還是連續的，這樣的訊號我們也稱其為離散訊號 (discrete signal)。")]),t._v(" "),e("h5",{attrs:{id:"什麼是量化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什麼是量化"}},[t._v("#")]),t._v(" 什麼是量化？")]),t._v(" "),e("p",[t._v("經過取樣之後的離散訊號，在時間上已經是離散的了，然而其振幅仍然是連續的，例如振幅的值可能是 $\\sqrt{2}$  或者 $\\pi$，這樣的值，它的變化空間還是連續的，其小數位數可能是無限多個，實際上還是無法精準地儲存在電腦裡面。為了方便儲存在電腦或相關的數位設備，必須把值的可能性設定在一個可數的離散值集合裡面，這也就是量化的概念。以聲音的大小為例，我們可以把可能的振幅大小分成 65536 個水平，這樣就可以使用 16 個位元來加以儲存 ($2^{16}=65536$)，這也就是量化的概念。平常我們講體重的時候，通常都只講到整數，例如實際量測到的體重可能是 56.2312 公斤，但我們都只講 56 公斤，這也是一種量化。量化之後的訊號值跟實際的訊號值會有一些差異，可以把它看成是一種量化所產生的誤差。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://wiki.gnuradio.org/index.php/File:Cont_to_digital.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:a(510),alt:"cont_to_digital.png"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("圖片來源："),e("a",{attrs:{href:"https://wiki.gnuradio.org/index.php/Guided_Tutorial_Introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNU Radio 官網"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"無線傳輸"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#無線傳輸"}},[t._v("#")]),t._v(" 無線傳輸")]),t._v(" "),e("p",[t._v("基本上通訊的目的，簡單說，就是把訊息從一個地方傳送到另一個地方。而為了達成這樣的目的所設計的系統，就稱為通訊系統。目前常用的通訊系統，可以分為有線傳輸和無線傳輸。有線傳輸，例如透過 USB 連接線進行數據傳輸，或者家裡電話的語音傳輸，都是屬於有線傳輸。至於無線傳輸，常見的如藍牙、WiFi 的數據傳輸，都是無線傳輸。無線傳輸，通常必須將數據資料轉換成類比的電磁波訊號，然後透過天線來進行發送和接收。如下圖所示：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://wiki.gnuradio.org/index.php/File:Antenna.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:a(511),alt:"antenna.png"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("圖片來源："),e("a",{attrs:{href:"https://wiki.gnuradio.org/index.php/Guided_Tutorial_Introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNU Radio 官網"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("目前的通訊系統，除了發送和接收端的模組，必須處理類比訊號之外，其餘的通訊模組，大都是採用數位化的處理方式。換句話說，在發送端，我們會把處理過的數位訊息，利用 DAC 轉成類比訊號，然後透過天線傳送出去。而接收端，則先利用天線把類比訊號接收下來，然後透過 ADC 轉成數位訊號，再使用數位訊號處理的方式把傳送的訊息還原回來。")])])}),[],!1,null,null,null);r.default=n.exports}}]);