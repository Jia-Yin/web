(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{693:function(t,s,a){"use strict";a.r(s);var i=a(1),m=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模擬實驗解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模擬實驗解答"}},[t._v("#")]),t._v(" 模擬實驗解答")]),t._v(" "),a("h2",{attrs:{id:"抽樣實驗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽樣實驗"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.jywglady.org/sdr/contents/sampling/",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽樣實驗"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("password: keepgoing")]),t._v(" "),a("p",[t._v("試著利用上圖的模擬器回答以下問題：")]),t._v(" "),a("ol",[a("li",[t._v("旋轉速率和抽樣速率同時乘上一個倍數，模擬會產生什麼變化？")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("當旋轉速率和抽樣速率同時乘上一個倍數，圓周上取樣的點相同，但是時間尺度會改變。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("訊號點的轉速 r 增加 f 的整數倍，對於訊號點的軌跡和抽樣有何影響？")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("轉速增加抽樣的整數倍，圓周上取樣的點相同。因此只看抽樣點時，無法區分轉速 r, r+f, r+2f... 等的差別。")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("改變訊號點轉速的正負號，對於訊號點的軌跡和抽樣有何影響？")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("轉速正與負，對於訊號點的軌跡與抽樣而言，都是映射（旋轉方向不同，對稱於 x 軸），數學上代表共軛的複數。")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("假設 f=10，當 r 分別為 1 和 9 時，訊號點的軌跡和抽樣有什麼異同？")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("已知當 r 增加 f 的整數倍時，抽樣點位置不變，因此 r=9 與 r=-1 的抽樣點是相同的。如此一來，等同於比較 r=1 及 r=-1 的差異。所以 r=1 與r=9 的訊號點軌跡不同，但是抽樣點對稱於 x 軸。也就是說，兩者的抽樣訊號是共軛複數。")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("假設 f=10，且 r<10，可否透過抽樣點所猜測的訊號點軌跡來確定 r 值？")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("無法確定，例如：「轉速1的反轉」與「轉速9的正轉」兩者是無法區分的。")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("假設 r 值不超過 30，如果要透過抽樣點來估測訊號點的實際轉速，那麼 f 值有何限制？")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("為了區隔正轉與反轉，每次抽樣時，旋轉角度不能超過 1/2 圓，因此抽樣速率要大於 2 倍的 r，也就是說，抽樣速率 f 須大於 60。")])]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("這個模擬和抽樣定理有沒有什麼相似的地方？")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("此實驗就是在模擬抽樣定理。但是，此實驗只模擬單一頻率的情況。單一頻率可能有正轉或負轉，當訊號頻率固定時，抽樣頻率只要大於 2 倍轉速，就可以唯一確定。")])]),t._v(" "),a("h2",{attrs:{id:"尤拉公式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尤拉公式"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.jywglady.org/sdr/contents/sampling/Euler/",target:"_blank",rel:"noopener noreferrer"}},[t._v("尤拉公式"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("試著把 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("sin")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\sin(\\omega t)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mop"},[t._v("sin")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 寫成 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("e^{j\\omega t}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.824664em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.824664em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])])])])]),t._v(" 和 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("e^{-j\\omega t}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.824664em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.824664em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])])])])]),t._v(" 的線性組合。")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("已知尤拉公式：")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1),a("mo",[t._v("=")]),a("mi",[t._v("cos")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("+")]),a("mi",[t._v("j")]),a("mi",[t._v("sin")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("e^{j\\omega t} = \\cos(\\omega t) + j \\sin(\\omega t)\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.874664em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.874664em"}},[a("span",{staticStyle:{top:"-3.1130000000000004em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mop"},[t._v("cos")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mop"},[t._v("sin")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1),a("mo",[t._v("=")]),a("mi",[t._v("cos")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mi",[t._v("sin")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("e^{-j\\omega t} = \\cos(\\omega t) - j \\sin(\\omega t)\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.874664em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.874664em"}},[a("span",{staticStyle:{top:"-3.1130000000000004em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mop"},[t._v("cos")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mop"},[t._v("sin")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),a("p",[t._v("兩式相減：")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1),a("mo",[t._v("−")]),a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1),a("mo",[t._v("=")]),a("mn",[t._v("2")]),a("mi",[t._v("j")]),a("mi",[t._v("sin")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("e^{j\\omega t}-e^{-j\\omega t} = 2j\\sin(\\omega t)\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.957994em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.874664em"}},[a("span",{staticStyle:{top:"-3.1130000000000004em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.874664em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.874664em"}},[a("span",{staticStyle:{top:"-3.1130000000000004em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mop"},[t._v("sin")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mo",[t._v("⇒")]),a("mi",[t._v("sin")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("=")]),a("mfrac",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1),a("mo",[t._v("−")]),a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1)],1),a("mrow",[a("mn",[t._v("2")]),a("mi",[t._v("j")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\Rightarrow \\sin(\\omega t) = \\frac{e^{j\\omega t}-e^{-j\\omega t}}{2j}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),a("span",{staticClass:"mrel"},[t._v("⇒")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mop"},[t._v("sin")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.382104em","vertical-align":"-0.8804400000000001em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.5016639999999999em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.824664em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.824664em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8804400000000001em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("試著把 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("cos")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",[t._v("+")]),a("mi",[t._v("θ")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\cos(\\omega t+\\theta)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mop"},[t._v("cos")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("寫成 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("e^{j\\omega t}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.824664em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.824664em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])])])])]),t._v(" 和 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("e^{-j\\omega t}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.824664em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.824664em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])])])])]),t._v("的線性組合。")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mfrac",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("j")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",[t._v("+")]),a("mi",[t._v("θ")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1),a("mo",[t._v("+")]),a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")]),a("mo",[t._v("+")]),a("mi",[t._v("θ")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("mn",[t._v("2")])],1),a("mo",[t._v("=")]),a("mfrac",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("j")]),a("mi",[t._v("θ")])],1)],1),a("mn",[t._v("2")])],1),a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1),a("mo",[t._v("+")]),a("mfrac",[a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mi",[t._v("θ")])],1)],1),a("mn",[t._v("2")])],1),a("msup",[a("mi",[t._v("e")]),a("mrow",[a("mo",[t._v("−")]),a("mi",[t._v("j")]),a("mi",[t._v("ω")]),a("mi",[t._v("t")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\frac{e^{j(\\omega t+\\theta)}+e^{-j(\\omega t+\\theta)}}{2} \n= \\frac{e^{j\\theta}}{2}e^{j\\omega t} + \\frac{e^{-j\\theta}}{2}e^{-j\\omega t}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.251em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.565em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8879999999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")]),a("span",{staticClass:"mbin mtight"},[t._v("+")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8879999999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")]),a("span",{staticClass:"mbin mtight"},[t._v("+")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.2121079999999997em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.5261079999999998em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8491079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.874664em"}},[a("span",{staticStyle:{top:"-3.1130000000000004em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.2121079999999997em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.5261079999999998em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8491079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.874664em"}},[a("span",{staticStyle:{top:"-3.1130000000000004em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("jω")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("t")])])])])])])])])])])])])])])]),t._v(" "),a("h2",{attrs:{id:"傅立葉變換"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#傅立葉變換"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.jywglady.org/sdr/contents/sampling/Transform/",target:"_blank",rel:"noopener noreferrer"}},[t._v("傅立葉變換"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("一個特定頻率成份（轉速）的訊號，是否可以由其他不同頻率（轉速）的訊號做線性組合（放大縮小及加減運算）而得到？為什麼？")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("不可以。每一個不同頻率的旋轉波都保有各自頻率的特性，不能由其他旋轉波組合而成。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("傅立葉變換可以用來找出時間訊號中每一個不同頻率的訊號成份；反過來說，如果已知每一個不同頻率的訊號成份，那麼也可以合成原來的時間訊號。請結合這個概念，以及前面所提到的內容，重新說明取樣定理的限制條件。")])]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("Answer")]),t._v(" "),a("p",[t._v("抽樣速率超過訊號中最高頻率成份的 2 倍，也就超過所有頻率成份的 2 倍，那麼每個頻率成份都可以確定，因此整個訊號就可以確定下來。")])])])}),[],!1,null,null,null);s.default=m.exports}}]);