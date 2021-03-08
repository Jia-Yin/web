(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{509:function(t,a,s){t.exports=s.p+"assets/img/P_to_u.78c98df5.png"},510:function(t,a,s){t.exports=s.p+"assets/img/Cont_to_digital.bc4377c8.png"},511:function(t,a,s){t.exports=s.p+"assets/img/Antenna.3c56eda4.png"},525:function(t,a,s){"use strict";s.r(a);var i=s(6),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("軟體無線電 (Software Defined Radio, SDR) 主要是將無輸傳輸中，除了發送和接收的天線端，必須使用射頻的類比電路之外，其餘的功能模組全部使用軟體來加以實現的一種技術。因為要使用軟體來進行處理，因此信號必須先轉換成數位的形式。對於原本就是數位形式的訊號，例如由電腦所發送的訊息，本來就是數位的形式，我們可以直接進行處理；但如果原本是類比的訊號，例如人講話的聲音，那麼我們必須先將此類比訊號轉換成數位的訊號，然後才能交由軟體來進行處理。經由軟體處理完之後，最後仍然必須轉換成類比訊號，透由發送端的天線發送出電磁波，所送出的電磁波可以看成是屬於類比的訊號，不過裡面所藏的卻是數位的訊息。另一方面，接收端的天線收到電磁波之後，先將其轉換成數位的形式，之後一樣交由一連串的軟體來進行解碼，最後解出其中所蘊藏的訊息。這個類比轉數位，以及數位轉類比的過程，也是目前大部份通訊系統所慣用的方式。")]),t._v(" "),i("p",[t._v("為了對這一連串的訊號處理有所認識，以下先介紹一些常見的專有名詞。")]),t._v(" "),i("h5",{attrs:{id:"什麼是類比訊號"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什麼是類比訊號"}},[t._v("#")]),t._v(" 什麼是類比訊號")]),t._v(" "),i("p",[t._v("以電壓為例，連續的電壓變化就是類比的訊號。例如，我們可以將聲音透由振動的量測轉換成電壓的訊號，由於音量的變化是連續的，透過一些電路所轉換出來的電壓，基本上也是連續的，這種連續的訊號值，在時間上是連續的，在訊號的大小上面也是連續的，稱為類比訊號。")]),t._v(" "),i("p",[i("img",{attrs:{src:s(509),alt:"p_to_u.png"}})]),t._v(" "),i("p",[t._v("圖片來源："),i("a",{attrs:{href:"https://wiki.gnuradio.org/index.php/Guided_Tutorial_Introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNU Radio 官網"),i("OutboundLink")],1)]),t._v(" "),i("h5",{attrs:{id:"什麼是數位訊號"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什麼是數位訊號"}},[t._v("#")]),t._v(" 什麼是數位訊號")]),t._v(" "),i("p",[t._v("數位訊號基本上可以看成是由一連串 0 和 1 的位元所構成的訊號，這種訊號可以很容易地透過軟體來加以儲存和處理。舉例來說，我們常聽到的 MP3 音樂檔，內容就是由一連串的 0 和 1 的位元所構成，因此是屬於一種數位訊號。這種訊號值，在時間和訊號的大小上面，都是離散可數的，以 MP3 的格式檔為例，我們可以設定聲音每秒的取樣值個數，以及每個取樣值是由多少位元構成。")]),t._v(" "),i("h5",{attrs:{id:"如何將類比訊號轉成數位訊號"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何將類比訊號轉成數位訊號"}},[t._v("#")]),t._v(" 如何將類比訊號轉成數位訊號")]),t._v(" "),i("p",[t._v("由類比訊號轉成數位訊號，基本上會經過兩個主要的步驟，第一個步驟是取樣，第二個步驟是量化。有些人覺得量化之後，還要經過訊號表示方法的編碼過程，不過基本上這已經算是在數位化之後的處理範疇了。從類比訊號轉成數位訊號稱為 Analog-to-Digital Converter (ADC)；反過來，從數位訊號轉成類比訊號，稱為 Digital-to-Analog Converter (DAC)。而執行 ADC 及 DAC 的單元，我們常將其稱為"),i("strong",[t._v("編碼/解碼器")]),t._v("，英文叫 Coder/Decoder，簡稱為 Codec。")]),t._v(" "),i("h5",{attrs:{id:"什麼是取樣"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什麼是取樣"}},[t._v("#")]),t._v(" 什麼是取樣？")]),t._v(" "),i("p",[t._v("以錄音為例，聲波的強度變化是隨著時間而改變的，因此在時間軸上，可以看成是連續的，也就是說，聲波的強度是時間的函式，可以寫成 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("v")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("t")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v(t)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。取樣的意思，就是在時間上，只保留特定時間點的值，一般來說，我們大都是做等間隔的取樣。例如取樣的間隔時間為 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("T")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("T")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])]),t._v("，那麼我們就只保留 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("v")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("t")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v(t)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 在 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("t")]),i("mo",[t._v("=")]),i("mi",[t._v("n")]),i("mi",[t._v("T")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("mi",[t._v("n")]),i("mo",[t._v("∈")]),i("mi",[t._v("N")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("t=nT, n\\in N")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("∈")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])])]),t._v(" 時間點的值。訊號將會由 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("v")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("t")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v(t)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 變成 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("v")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("n")]),i("mi",[t._v("T")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v(nT)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("，或者也可以寫成 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msub",[i("mi",[t._v("v")]),i("mi",[t._v("n")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v_n")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("n")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])])])])])]),t._v("。這樣的訊號就是取樣後的訊號，在時間軸上變成是離散可數的；然而在振幅上，理論上還是連續的，這樣的訊號我們也稱其為離散訊號 (discrete signal)。")],1),t._v(" "),i("h5",{attrs:{id:"什麼是量化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什麼是量化"}},[t._v("#")]),t._v(" 什麼是量化？")]),t._v(" "),i("p",[t._v("經過取樣之後的離散訊號，在時間上已經是離散的了，然而其振幅仍然是連續的，例如振幅的值可能是從 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mo",[t._v("−")]),i("msqrt",[i("mn",[t._v("2")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("-\\sqrt{2}")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1.04em","vertical-align":"-0.13278em"}}),i("span",{staticClass:"mord"},[t._v("−")]),i("span",{staticClass:"mord sqrt"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.90722em"}},[i("span",{staticClass:"svg-align",staticStyle:{top:"-3em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"mord",staticStyle:{"padding-left":"0.833em"}},[i("span",{staticClass:"mord"},[t._v("2")])])]),i("span",{staticStyle:{top:"-2.86722em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"hide-tail",staticStyle:{"min-width":"0.853em",height:"1.08em"}},[i("svg",{attrs:{width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"}},[i("path",{attrs:{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}})])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.13278em"}},[i("span")])])])])])])])]),t._v("  到 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("π")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\pi")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")])])])])]),t._v(" 這樣的值，它的變化空間還是連續的，其小數位數也可能是無限多個，實際上還是無法精準地儲存在電腦裡面。為了方便儲存在電腦或相關的數位設備，必須把值的可能性設定在一個可數的離散值的集合裡面，這也就是量化的概念。以聲音的大小為例，我們可以把聲音的振幅大小分成 65536 個水平，這樣就可以使用 16 個位元來加以儲存 ("),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mn",[t._v("2")]),i("mn",[t._v("16")])],1),i("mo",[t._v("=")]),i("mn",[t._v("65536")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^{16}=65536")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord"},[t._v("2")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("1")]),i("span",{staticClass:"mord mtight"},[t._v("6")])])])])])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[t._v("6")]),i("span",{staticClass:"mord"},[t._v("5")]),i("span",{staticClass:"mord"},[t._v("5")]),i("span",{staticClass:"mord"},[t._v("3")]),i("span",{staticClass:"mord"},[t._v("6")])])])])]),t._v(")，這也就是量化的概念。平常我們講一個人的體重的時候，通常都只講到整數，例如實際量測到的體重可能是 56.2312 公斤，但我們都只講 56 公斤，這也是一種量化。量化之後的訊號值跟實際的訊號值會有一些差異，可以把它看成是一種量化所產生的誤差。")],1),t._v(" "),i("p",[i("img",{attrs:{src:s(510),alt:"cont_to_digital.png"}})]),t._v(" "),i("p",[t._v("圖片來源："),i("a",{attrs:{href:"https://wiki.gnuradio.org/index.php/Guided_Tutorial_Introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNU Radio 官網"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"無線傳輸"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#無線傳輸"}},[t._v("#")]),t._v(" 無線傳輸")]),t._v(" "),i("p",[t._v("基本上通訊的目的，簡單說，就是把訊息從一個地方傳送到另一個地方。而為了達成這樣的目的所設計的系統，就稱為通訊系統。目前常用的通訊系統，可以分為有線傳輸和無線傳輸。有線傳輸，例如透過 USB 連接線進行數據傳輸，或者家裡電話的語音傳輸，都是屬於有線傳輸。至於無線傳輸，常見的如藍牙、WiFi 的數據傳輸，都是無線傳輸。無線傳輸，通常必須將數據資料轉換成類比的電磁波訊號，然後透過天線來進行發送和接收。如下圖所示：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(511),alt:"antenna.png"}})]),t._v(" "),i("p",[t._v("圖片來源："),i("a",{attrs:{href:"https://wiki.gnuradio.org/index.php/Guided_Tutorial_Introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNU Radio 官網"),i("OutboundLink")],1)]),t._v(" "),i("p",[t._v("目前的通訊系統，除了發送和接收端的模組，必須處理類比訊號之外，其餘的通訊模組，大都是採用數位化的處理方式。換句話說，在發送端，我們會把處理過的數位訊息，利用 DAC 轉成類比訊號，然後透過天線傳送出去。而接收端，則先利用天線把類比訊號接收下來，然後透過 ADC 轉成數位訊號，再使用數位訊號處理的方式把傳送的訊息還原回來。")])])}),[],!1,null,null,null);a.default=e.exports}}]);