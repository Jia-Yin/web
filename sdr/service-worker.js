if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.5125013f.css",revision:"39b5b202c8aa1fc5a58e624859ff6931"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/4.467de177.js",revision:"5df819b3a4b0363630206938427c2992"},{url:"assets/js/51.8c519a33.js",revision:"64d4d35345b5009b5c6204edda2917b3"},{url:"assets/js/52.dac3f0b6.js",revision:"dd016f0640eba88e77a12d875ff633af"},{url:"assets/js/53.759bcaeb.js",revision:"8d1c44ba6837f9a2949a169715db25d8"},{url:"assets/js/54.76c82aa3.js",revision:"eaa1829736c6a0a676510d3cd1f1aace"},{url:"assets/js/55.2e73055d.js",revision:"247fc16f6f423941dff78adc51bc6561"},{url:"assets/js/56.58e0bc05.js",revision:"0ece19a18e3debba98bfecc32c746b9a"},{url:"assets/js/57.9bcb16bd.js",revision:"4b842bfd5e8f9f1b058b0e67a50490b8"},{url:"assets/js/58.f51e2a29.js",revision:"12c02471fe8b0caaff5bea7481fdf7fc"},{url:"assets/js/59.209da237.js",revision:"4507edf322ad641afd5238ea6d890749"},{url:"assets/js/60.b7b8f536.js",revision:"3f09aba2fef4fd91f65ecc1389911393"},{url:"assets/js/61.17dd00e2.js",revision:"8db871086c2c8ba55b8ea2c81ce5feee"},{url:"assets/js/62.15f9fabb.js",revision:"0dbef21b805ce39787c61b296717712d"},{url:"assets/js/63.eb1fae5a.js",revision:"d976be9d80eac935a986dbcb38a5d29b"},{url:"assets/js/app.024a78f1.js",revision:"33118de11e0a03e1b819e44d96053edf"},{url:"assets/js/layout-Blog.79e8acf4.js",revision:"81770af9d299146a7e78eb1fde0fe5eb"},{url:"assets/js/layout-Layout.8e9fc965.js",revision:"a837d77b21d42e057bdfe2803351f3d4"},{url:"assets/js/layout-NotFound.a5cad481.js",revision:"5f0f465cdcb4b69a41ed8992f23050ac"},{url:"assets/js/layout-Slide.ffc59718.js",revision:"6b8281279e74a347df0a1cc566f2d0eb"},{url:"assets/js/page-DTMF應用練習.2d84af24.js",revision:"7749b68f93c35251e3ec0773a66f921a"},{url:"assets/js/page-GNURadioBasic.44ace591.js",revision:"b4b5e4d973afe94d99294500f200674b"},{url:"assets/js/page-GNURadio簡介.ee9a88ad.js",revision:"96d2c8051f8cfe5c92cf2d8859476f00"},{url:"assets/js/page-Home.a32ddfd9.js",revision:"204b73f3ed453c4ba7d727d9aeeb6e96"},{url:"assets/js/page-SDR簡介.54d471a1.js",revision:"91e3e4a35a1950637343bafec34df7db"},{url:"assets/js/page-Ubuntu及套件管理程式.44280e7f.js",revision:"6746ca24fd5d56c2584fabf38025b4d1"},{url:"assets/js/page-信號還原.610ce2c6.js",revision:"d50146bcc3364afb71c3eaec189f0f14"},{url:"assets/js/page-傅立葉級數.04238452.js",revision:"c3202ad13c548c972a7e807fb7e7ea55"},{url:"assets/js/page-傅立葉變換-01.3ee8390a.js",revision:"1b7fab3a46809d83359deb0d1b770e76"},{url:"assets/js/page-傅立葉變換-02.3ae0ef24.js",revision:"4cd663cb23bf3ac3088a1ce8047507e2"},{url:"assets/js/page-傅立葉變換-03.77485282.js",revision:"2307e9272919991be4d7e7e907cdec57"},{url:"assets/js/page-傅立葉變換-04.8e59e639.js",revision:"ce13ffdf40cf1de48126d120781d8252"},{url:"assets/js/page-傅立葉變換-05.b585b05a.js",revision:"ce65f15fe1ef9ca0f09d9cc2ea40e912"},{url:"assets/js/page-傅立葉變換-06.61968939.js",revision:"54f192e849a63b631fe73c6074bd1919"},{url:"assets/js/page-傅立葉變換-07.9eb928b9.js",revision:"f6a6f0841e723c099e1ca4efec166813"},{url:"assets/js/page-傅立葉變換-08.9b7c87a0.js",revision:"2bef82793960ecaca30c555837bbb393"},{url:"assets/js/page-傅立葉變換-09.be94cba9.js",revision:"51b0225cdbb455079f13f1fda56af397"},{url:"assets/js/page-傅立葉變換-10.4534f3cf.js",revision:"4c183041dae1a239c94c107fd42ccc1b"},{url:"assets/js/page-傅立葉變換-11.4d395adc.js",revision:"0246502b553c414d6169c51401294b4c"},{url:"assets/js/page-傅立葉變換-12.e72e802c.js",revision:"3f3cc4390bb2898c1e37b0bbd66ae1f3"},{url:"assets/js/page-傅立葉變換.ca8855e8.js",revision:"90a96df3060c748fe1476e1acb8d82f6"},{url:"assets/js/page-前言.9d34db00.js",revision:"8114e40c964af8e553385a56effafb77"},{url:"assets/js/page-升餘弦脈衝信號.be453dcb.js",revision:"548ce0e254d7248177031df587ff3ad0"},{url:"assets/js/page-問題參考答案.fc27e39b.js",revision:"006eb2b597d682526fa36907f5532330"},{url:"assets/js/page-基本語法.e0612eeb.js",revision:"93a27e56abd91eb81fe3783b4d5022bc"},{url:"assets/js/page-安裝GNURadio.daeac437.js",revision:"9914a49951e17580c2f42cb643fae5a8"},{url:"assets/js/page-尤拉公式.6d484b10.js",revision:"7a97d89cec015cb4c84ae665416d94ff"},{url:"assets/js/page-幾個小問題.ade81ca6.js",revision:"8c13529b38f02cff0194f832b2860acc"},{url:"assets/js/page-抽樣定理.000af3c1.js",revision:"d9ab63aa4399e2f23b8fd3f982de7403"},{url:"assets/js/page-抽樣模擬實驗.e826e78e.js",revision:"04454f862035559785512af3bb2d832f"},{url:"assets/js/page-抽樣頻譜.0b6bbdd1.js",revision:"a34300f3476309662f4aee4f75f74952"},{url:"assets/js/page-時域與頻域.bb0b58da.js",revision:"47513fdb923959b0608c3c12b8d7c8ee"},{url:"assets/js/page-模擬參數.a4e1ed5a.js",revision:"4620e9ac4365c6a6ea411c796fe72298"},{url:"assets/js/page-模擬實驗解答.e31129fc.js",revision:"40a19fe6d9ca3fcdd1decb50d991e83e"},{url:"assets/js/page-目錄.9b2c5f40.js",revision:"2eec1ed9dc5e5621a0dc86331b964e7d"},{url:"assets/js/page-第一個簡單的模擬.12dda866.js",revision:"0adecc616bbbf51cadd067a6579cc6e1"},{url:"assets/js/page-觀察訊號頻譜的實驗.720a33ae.js",revision:"1f136edda5f72188a48ecf20dea726c3"},{url:"assets/js/page-軟體設置.b6c4eadd.js",revision:"1542b8647d7e830dc889bf4dcb73806c"},{url:"assets/js/vendors~flowchart.9ece7af2.js",revision:"7cfc23952dc5eea1cb9ccb0e9fdd1a7c"},{url:"assets/js/vendors~layout-Blog~layout-Layout.a3a47956.js",revision:"41cbb79e11013d8d93f9e747155991a0"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.58098beb.js",revision:"19ecb2150c5e23aaec18c49e4de9e301"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.18ed82b6.js",revision:"8c3d6725f883ffd325f7374fd7c301b4"},{url:"assets/js/vendors~photo-swipe.42dca087.js",revision:"3c3aa9c0aee154595b271ff318ac0c9f"},{url:"assets/js/vendors~reveal.faca37b0.js",revision:"1a604df531b690066dbfdec0c246baf9"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"668726198c2ab6f7800be41c24bea27e"},{url:"article/index.html",revision:"7f2869635ae15c907156f3e2d33a7a2c"},{url:"category/course/index.html",revision:"d024d71f37db1f1729001aa84c2a5d87"},{url:"category/course/page/2/index.html",revision:"77b4bcb5d57f5ccedffed235153410a3"},{url:"category/course/page/3/index.html",revision:"bc6c6b14c4fa96a952550275de43a682"},{url:"category/course/page/4/index.html",revision:"c47d93e2c0ca9fd09a0fb5e88573c29d"},{url:"category/index.html",revision:"0f5f2daa9adf679c64b65e6687f2a9cd"},{url:"category/SDR/index.html",revision:"28f10c055931d5b85db1592b9f1baefe"},{url:"category/SDR/page/2/index.html",revision:"d92cfe5c78c7b9e081d45ec5ccc84a4a"},{url:"category/SDR/page/3/index.html",revision:"c248695612890251ebe69d18ebf025c3"},{url:"category/SDR/page/4/index.html",revision:"5cce8df7a97d577879ca62f17f141b69"},{url:"contents/FFT/Fourier-01/index.html",revision:"03ca8af5fda5d4832e11c29079b89aa0"},{url:"contents/FFT/Fourier-02/index.html",revision:"496a0fce28cddd3ccfc1fb7f9689237b"},{url:"contents/FFT/Fourier-03/index.html",revision:"226cc9e5975a6300f3a4ac56efa7f6ea"},{url:"contents/FFT/Fourier-04/index.html",revision:"2a0a8b4c6d4d9418cc0aad0b3c347ff3"},{url:"contents/FFT/Fourier-05/index.html",revision:"2bc2ab5457d29719dddddc3a2e40ab0b"},{url:"contents/FFT/Fourier-06/index.html",revision:"e4e9c93ca357405a9f1cf8162f49f691"},{url:"contents/FFT/Fourier-07/index.html",revision:"c28d6f02a7c80a48f90a523862cf8ae8"},{url:"contents/FFT/Fourier-08/index.html",revision:"bf6e44bdfdd6fd57096cdffb72aa9c3e"},{url:"contents/FFT/Fourier-09/index.html",revision:"e306af18766706c669aebf6902b45043"},{url:"contents/FFT/Fourier-10/index.html",revision:"50f95709aee781b9b4b997163e0afd56"},{url:"contents/FFT/Fourier-11/index.html",revision:"4993141dff557080e2fabbfc5fa0880c"},{url:"contents/FFT/Fourier-12/index.html",revision:"9f520103f7cffa937d1b3e460bea9804"},{url:"contents/FFT/index.html",revision:"9665f1a9c7bb4b4340d806a9702e4d69"},{url:"contents/gnuradio/Answer/index.html",revision:"f20e8ab4a985f3ed3092201c77db05ec"},{url:"contents/gnuradio/index.html",revision:"9a474766b5f73582bc9207314146a481"},{url:"contents/gnuradio/Install/index.html",revision:"925d55e4ee831bc1a1623e984c429798"},{url:"contents/gnuradio/Parameters/index.html",revision:"b68a844a389de9fdbe36e0c4e9f15acd"},{url:"contents/gnuradio/Questions/index.html",revision:"1bf740269d4826f4569b4b08052f9aab"},{url:"contents/gnuradio/SignalFFT/index.html",revision:"2a3463308502aa94b6d970bea19478b0"},{url:"contents/gnuradio/Spectrum/index.html",revision:"8acff0069f468d1e6f9a2ca8e8015d10"},{url:"contents/gnuradio/Synaptic/index.html",revision:"bcb2427e2a29891c9fb86d710c2c7115"},{url:"contents/grbasic/index.html",revision:"3b4c8be8c191af8933a111f04189065a"},{url:"contents/index.html",revision:"49b780f7d602879d6a97c144161cd4b2"},{url:"contents/preface/index.html",revision:"7975e5fa6b3018f8a2da0e5c5753bbde"},{url:"contents/sampling/Basic/index.html",revision:"024bd0db6dcef9f2f3de7d2797626271"},{url:"contents/sampling/DTMF/index.html",revision:"0ef586981fd87502a68cc97bbdcb695f"},{url:"contents/sampling/Euler/index.html",revision:"16521ff502329abeee476f20a31bb86a"},{url:"contents/sampling/index.html",revision:"2077033ea70b6f8ec3fb205fa3a0a4bf"},{url:"contents/sampling/Octave/index.html",revision:"40abdfc725093f5c10f8d3039d28884a"},{url:"contents/sampling/Rcos/index.html",revision:"670757d7dfff1e1da0f804626765a02b"},{url:"contents/sampling/Recovery/index.html",revision:"e1df2fc8c328f34c8833d12d9a0aa661"},{url:"contents/sampling/SampleFreq/index.html",revision:"46b86fe66494d014c3bf57a1249f01d4"},{url:"contents/sampling/Series/index.html",revision:"554f175ca85c2a0eb0328cd11a09e915"},{url:"contents/sampling/SimuAnswer/index.html",revision:"125660071e9cd4dae82103d20bdaffcd"},{url:"contents/sampling/Theory/index.html",revision:"7ef12a194edcbde7f8c77063099e80c1"},{url:"contents/sampling/TimeAndFreq/index.html",revision:"5c2411dbd61a1128c175e5a3bba740f0"},{url:"contents/sampling/Transform/index.html",revision:"7549dc89914fc0b9ce9a734d5cecb0da"},{url:"contents/sdrintro/index.html",revision:"4ccce1b6bed0b0afb9bb357bea619651"},{url:"encrypt/index.html",revision:"5a62a67f1ef0fd4c4d0bab4dc688a118"},{url:"index.html",revision:"d181caf7d43430d603d60a671c8b9ad2"},{url:"slide/index.html",revision:"de69f18f1e679ace2684220616a276e3"},{url:"star/index.html",revision:"bcd91edbfea4ec1d5dbe43cee9b50159"},{url:"tag/comm/index.html",revision:"ecc4b8715f516b4184f04d5c9d077606"},{url:"tag/comm/page/2/index.html",revision:"803b790c1af9484f42630beb742ffcf6"},{url:"tag/comm/page/3/index.html",revision:"c7bb69a59d81f54c236d6d003f2eb4aa"},{url:"tag/comm/page/4/index.html",revision:"e58dc192ecc2fe3cbd5afe74b3c89d55"},{url:"tag/index.html",revision:"0b2ef88df127c0083fa3f200544cad64"},{url:"timeline/index.html",revision:"9ce475fb53cc53478ef510ef3ac4d0a6"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
