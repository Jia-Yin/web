if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const f={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.849dfad0.css",revision:"0e59a28d0bf034961db273f900bb82e8"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/4.467de177.js",revision:"5df819b3a4b0363630206938427c2992"},{url:"assets/js/62.af75307e.js",revision:"4952c31155dd52216725adced1deff0b"},{url:"assets/js/63.10eddd1a.js",revision:"3a79520480ccec05ab14ed2ac78be2db"},{url:"assets/js/64.327b997b.js",revision:"a2224493e482b0094ea7f660dd6b1f62"},{url:"assets/js/65.b7d9bb18.js",revision:"441a04bb4386fcfc39c169f4167b3417"},{url:"assets/js/66.50cb4b41.js",revision:"93626bae3ef87dbe7ebd2a51c1f4b2ce"},{url:"assets/js/67.5689cd07.js",revision:"7b16adfe11d4c4a302885393eac3fbdd"},{url:"assets/js/68.b731c413.js",revision:"8bdfe3d9dab5f3a2bbf97cff7693a609"},{url:"assets/js/69.61c87290.js",revision:"2e81de3ad969e5f9cacb6e7c8456802e"},{url:"assets/js/70.fff7605f.js",revision:"c7b45dbdc90683b853c960c4c7e40fee"},{url:"assets/js/71.0f4b9dfb.js",revision:"002925d50774cd6602c2ae877b24be04"},{url:"assets/js/72.96010fe7.js",revision:"71fae4beddc0ac2367a2a9e49dfc61f5"},{url:"assets/js/73.19f2497d.js",revision:"b0a972629d67fbbc67f873a0563f902e"},{url:"assets/js/74.e0a4235f.js",revision:"ef9f7f8e59d652887e3a9e56bbe8df27"},{url:"assets/js/app.e245d59e.js",revision:"d198a0085ac3155d2594cdff3eb3f790"},{url:"assets/js/layout-Blog.b3d0eb59.js",revision:"bd6c61181c96c125769e33e94c14a376"},{url:"assets/js/layout-Layout.71bb41d8.js",revision:"a11cd634766d265fbbe141e2728f764b"},{url:"assets/js/layout-NotFound.6304aa22.js",revision:"8be93efd996db11fa3c64314975c4843"},{url:"assets/js/layout-Slide.84897e9d.js",revision:"dce5b4716eaa225b782c0ade3e461c9b"},{url:"assets/js/page-升餘弦脈衝信號.cb8d3e8c.js",revision:"e496855ad91e267d26483abfb4979b59"},{url:"assets/js/page-尤拉公式.1cec06d3.js",revision:"cb2e69101cff4bd91dbe4fa7dc536950"},{url:"assets/js/page-目錄.b53ea902.js",revision:"88fd5172b16567f9dbb97486857e6279"},{url:"assets/js/page-安裝GNURadio.ab69f347.js",revision:"baffe681dcbd4e32ea2f79657613fbd6"},{url:"assets/js/page-自己做訊號解碼.759adb1a.js",revision:"2c3b0800e55fbdca36cfbf04ea1b1a39"},{url:"assets/js/page-使用網路傳送音頻.58b0cbf9.js",revision:"36f1e59c9664e65157081c0a264a7ccc"},{url:"assets/js/page-使用PythonBlock找訊號波包.ae931b9a.js",revision:"d0c5c09501a19bd835217985737cb4f4"},{url:"assets/js/page-使用SDR掃描頻譜.d28a112e.js",revision:"0aadcd14cd12758e1ba4f000a63c46d6"},{url:"assets/js/page-使用SDR接收音頻.09e7b456.js",revision:"829347c4704dd0741af2aa60217363f4"},{url:"assets/js/page-使用SDR傳送音頻.cdfb2570.js",revision:"5dbef898f54476909443975247726759"},{url:"assets/js/page-抽樣定理.bb58092b.js",revision:"6d59dcea2e6b8fef336a7e1aece7f6fa"},{url:"assets/js/page-抽樣模擬實驗.f625e13e.js",revision:"44ab4ce6a5c3ba87d1a3ce27a8ad0134"},{url:"assets/js/page-抽樣頻譜.987d573f.js",revision:"b9cd0655ef7fe4425542bdab343032e5"},{url:"assets/js/page-信號還原.4d062e22.js",revision:"7cf23da6b086efd763394d8d1a6de0c8"},{url:"assets/js/page-前言.def0f5ba.js",revision:"c2699d92fc1a9adacb2fd567c080ba9a"},{url:"assets/js/page-時域與頻域.6acced50.js",revision:"ace52da35c051aee4b463a1176e7a281"},{url:"assets/js/page-問題參考答案.b8a32be5.js",revision:"84f4806934325d4e27162fcc21105bb8"},{url:"assets/js/page-基本語法.7893b476.js",revision:"2c34d632d5f0aad16959fcbb85678adc"},{url:"assets/js/page-第一個簡單的模擬.a789d22a.js",revision:"2ee24e893c3c0e8376c66ad77d316614"},{url:"assets/js/page-軟體設置.b84a0f3d.js",revision:"c5fb54136518f716f8028d7054328b8b"},{url:"assets/js/page-傅立葉級數.ec886932.js",revision:"b902d0a6a815af628e5c2fd4175afa1c"},{url:"assets/js/page-傅立葉變換-01.7fe0ee64.js",revision:"0c5dfe4c31e5c1690db33bb1edec55fe"},{url:"assets/js/page-傅立葉變換-02.6b71da70.js",revision:"193bd88f204b7997f6e92273c5f3ae21"},{url:"assets/js/page-傅立葉變換-03.b4d13984.js",revision:"fb57282c20523198ca5793177028e790"},{url:"assets/js/page-傅立葉變換-04.15051c00.js",revision:"073e81857d3de4948613aeb7059d4f48"},{url:"assets/js/page-傅立葉變換-05.8945907b.js",revision:"55f711858489b2861d4f97d6142bc42f"},{url:"assets/js/page-傅立葉變換-06.ada51bd0.js",revision:"bd8f4a59d91992c7e6c07c3066307a79"},{url:"assets/js/page-傅立葉變換-07.3074057a.js",revision:"398848776196607c40f2a649a897712a"},{url:"assets/js/page-傅立葉變換-08.1ebdb907.js",revision:"0129b7581db1047debf0dabd0ec4472e"},{url:"assets/js/page-傅立葉變換-09.ab741f37.js",revision:"0ac74b5f1010878b1594afbc34a9f6d2"},{url:"assets/js/page-傅立葉變換-10.a4e87020.js",revision:"3db97376769c2e8f45ae40efab04f60c"},{url:"assets/js/page-傅立葉變換-11.a89e95a1.js",revision:"a2fed60f1f97df2c2d9c100885e027e5"},{url:"assets/js/page-傅立葉變換-12.e633c321.js",revision:"757dc1bb5b393f47227d5bbc0bd6059e"},{url:"assets/js/page-傅立葉變換.0928bd52.js",revision:"1e61490757edfb90f87dae00a8fd9106"},{url:"assets/js/page-單頻訊號的儲存與播放.4a7ef972.js",revision:"b42f5b67809db4763ef046025fd0b062"},{url:"assets/js/page-幾個小問題.62ddd986.js",revision:"36818bfefa3bb6fc9b016b75f3658288"},{url:"assets/js/page-模擬參數.255c0124.js",revision:"49433883aebafabacdda4cab26fd0f41"},{url:"assets/js/page-模擬實驗解答.d4c0339a.js",revision:"a09a4c968874acf874747d8ac0101b45"},{url:"assets/js/page-調整中心頻率.193f07ab.js",revision:"6325c77fb62a9083b29cecd425562ffc"},{url:"assets/js/page-觀察訊號頻譜的實驗.7b15b9f2.js",revision:"8b10e103ad756cc9a4b3076b0dfaeb79"},{url:"assets/js/page-AM訊號的解碼.08d31dc1.js",revision:"a02c3ebfba24cd52ac704d8ecb57e7f5"},{url:"assets/js/page-AM訊號解碼.e8b44fbd.js",revision:"f9b15d46607c3f2af1263865f2e63c75"},{url:"assets/js/page-DTMF應用練習.e257e062.js",revision:"1dd81de6653b7efaf6fb3b0b236ba0fb"},{url:"assets/js/page-GNURadio簡介.8cfbdce9.js",revision:"c30574aa5e643441b4a62ff9c190d804"},{url:"assets/js/page-GNURadioBasic.ac72bbfa.js",revision:"2aed0ffe496a6cad424da123dcb0728c"},{url:"assets/js/page-Home.4f2b7910.js",revision:"475bdbbfbc2a0d914ec282165095b7a4"},{url:"assets/js/page-SDR簡介.11b7408e.js",revision:"82282183d20d69f0890375aac5713ee8"},{url:"assets/js/page-Something.369d3ed4.js",revision:"41d18e8e678df08ab384b2e4e4f33cdf"},{url:"assets/js/page-Ubuntu及套件管理程式.b44669b5.js",revision:"917583b8d2a7416bb794b2e7bdf6d041"},{url:"assets/js/vendors~flowchart.c6934e89.js",revision:"7d6463994ad96548e7f062579da475ff"},{url:"assets/js/vendors~layout-Blog~layout-Layout.a3a47956.js",revision:"41cbb79e11013d8d93f9e747155991a0"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.58098beb.js",revision:"19ecb2150c5e23aaec18c49e4de9e301"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.18ed82b6.js",revision:"8c3d6725f883ffd325f7374fd7c301b4"},{url:"assets/js/vendors~photo-swipe.b13a6a75.js",revision:"97224ebc33f262785abde6f113ae7aa6"},{url:"assets/js/vendors~reveal.40493946.js",revision:"0b3f0ac663d0147aae29599a61cb5b53"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"2baa2722c8a5f2af8560cd3f0e927d7e"},{url:"article/index.html",revision:"78567aa918474979015865b6596d1422"},{url:"category/course/index.html",revision:"01fa4eaefef873f3f107f3cb6c67392d"},{url:"category/course/page/2/index.html",revision:"a33e65d42e9cc4c8d4c97efbcac9d75a"},{url:"category/course/page/3/index.html",revision:"d15611a7d327419f24d621028b5e749d"},{url:"category/course/page/4/index.html",revision:"def28db558bdee0bc2c1e58df2270731"},{url:"category/course/page/5/index.html",revision:"e66cff25b104368597ab6f22428a97a1"},{url:"category/index.html",revision:"a9879d70fa3826f697ba1d5dab16323d"},{url:"category/SDR/index.html",revision:"6271b865045dfdec09d998a5dec47e3f"},{url:"category/SDR/page/2/index.html",revision:"edbc19610ecdb2f0d4bb7abec726777e"},{url:"category/SDR/page/3/index.html",revision:"9d06f2a2d1be69beb63abec249ab4c38"},{url:"category/SDR/page/4/index.html",revision:"223b928e1e6da969a2092ffa45a92a7d"},{url:"category/SDR/page/5/index.html",revision:"c0e1576244116b80e80a5b7148e3c558"},{url:"contents/FFT/Fourier-01/index.html",revision:"025eb5ba208f52243d36927e07e37725"},{url:"contents/FFT/Fourier-02/index.html",revision:"cc0e4f92bd29ad75769d861d8abebb65"},{url:"contents/FFT/Fourier-03/index.html",revision:"67070c589575d81bc00a079b307edcae"},{url:"contents/FFT/Fourier-04/index.html",revision:"12f28f1fc74ac36312bcb071aca8395d"},{url:"contents/FFT/Fourier-05/index.html",revision:"49a8d313d40b214d148432c693948359"},{url:"contents/FFT/Fourier-06/index.html",revision:"7019fa04b33fddce6eda160bb5dea45d"},{url:"contents/FFT/Fourier-07/index.html",revision:"e6c1f093f4ea487c02e0b43e0428113a"},{url:"contents/FFT/Fourier-08/index.html",revision:"d6130b13aadf01605510fd4bd8968125"},{url:"contents/FFT/Fourier-09/index.html",revision:"f65b7737408ddfd32a89a916b22bdbcc"},{url:"contents/FFT/Fourier-10/index.html",revision:"a4f7018f0f58af22fb6aa61190bb4ab3"},{url:"contents/FFT/Fourier-11/index.html",revision:"aa29fec6a0b59742d6bd1a04c7e6eaa2"},{url:"contents/FFT/Fourier-12/index.html",revision:"d95eaa404fec4d73f3811dc4ebd47cf1"},{url:"contents/FFT/index.html",revision:"5a0c3e8a991ff5ba60ee0cab6fdb2dea"},{url:"contents/gnuradio/Answer/index.html",revision:"f75dafc9df2252167ac23c1763406aa6"},{url:"contents/gnuradio/index.html",revision:"108206304d7716260aea2b37713a89ce"},{url:"contents/gnuradio/Install/index.html",revision:"ef6612530131d3334a245f5de87a0e2e"},{url:"contents/gnuradio/Parameters/index.html",revision:"88ff640ea12fd149b2e60494197b6349"},{url:"contents/gnuradio/Questions/index.html",revision:"90741588000b465d996c56a330b00bd5"},{url:"contents/gnuradio/SignalFFT/index.html",revision:"c3f2550598407154324c5886e328d2f8"},{url:"contents/gnuradio/Spectrum/index.html",revision:"4a9a03ee4dcda506e8b819a2127014e2"},{url:"contents/gnuradio/Synaptic/index.html",revision:"470e0c644b5c1727041da28946b7918b"},{url:"contents/grbasic/index.html",revision:"b5bad8cd4080b465f10b57bce68811ef"},{url:"contents/index.html",revision:"1dc47ec69c5c1d2b1882e0b74d4cb30a"},{url:"contents/preface/index.html",revision:"de57f2de5d247e765fb2689e0042a3e5"},{url:"contents/sampling/Basic/index.html",revision:"de757af77f5e072f7e142f5df3b71c52"},{url:"contents/sampling/DTMF/index.html",revision:"c23a9cac3b70a6d21185aed36c3c95be"},{url:"contents/sampling/Euler/index.html",revision:"830e19cb0e012f9555a1ed05b803c613"},{url:"contents/sampling/index.html",revision:"bd92ec5484c9e9dcc670c28ed7ab02c7"},{url:"contents/sampling/Octave/index.html",revision:"bfe6c3eb2635bd9ad963a0eb2f05fc0b"},{url:"contents/sampling/Rcos/index.html",revision:"fbac949c22ead37c28f22de54216621a"},{url:"contents/sampling/Recovery/index.html",revision:"38531b33a53e4d56752a73e2608dd542"},{url:"contents/sampling/SampleFreq/index.html",revision:"9ff38395d3eee5706355eafbc800b116"},{url:"contents/sampling/Series/index.html",revision:"2c7d9ade02b4f068ec06724b44366200"},{url:"contents/sampling/SimuAnswer/index.html",revision:"468b51452cd78e46345f79618389b78c"},{url:"contents/sampling/Theory/index.html",revision:"d07f3a180258a300d11253100787d6e2"},{url:"contents/sampling/TimeAndFreq/index.html",revision:"26b97de36cb463223144e8585416f2ed"},{url:"contents/sampling/Transform/index.html",revision:"5eac8e9a236e26831173c5a2733f38a7"},{url:"contents/sdrintro/index.html",revision:"1e15209f4cdf8e235670edadefea35ea"},{url:"contents/something/index.html",revision:"d80375e27fa8511fc0def3e6409151bd"},{url:"contents/tonetrans/byHackRF/index.html",revision:"88e403f8f663d5886045b47f2ee9874d"},{url:"contents/tonetrans/byHackRFRec/index.html",revision:"cf559931c080f7d6c0a6f7bfe95a1d11"},{url:"contents/tonetrans/byHackRFTx/index.html",revision:"4fc625e9d072958e5306aa2ec87a4dd1"},{url:"contents/tonetrans/byNet/index.html",revision:"11f61d2ceb2cbd9953df9f8a14e3a7d1"},{url:"contents/tonetrans/index.html",revision:"62f0437436de6065fda86e51256eb76e"},{url:"contents/ToPython/amDec/index.html",revision:"756c55d6270b45dcabff44fdbdb5e3d2"},{url:"contents/ToPython/amDec2/index.html",revision:"040470e9eb351bafcab8f607234bf727"},{url:"contents/ToPython/amDecPy/index.html",revision:"9c5b68d7a155ab8391c7ed4f83d1e6a5"},{url:"contents/ToPython/freqShift/index.html",revision:"2a6a6af46d7b6a5095bff44d5b1aec8d"},{url:"contents/ToPython/index.html",revision:"8490955e7b8eeafc9a8a997a47c42f8c"},{url:"encrypt/index.html",revision:"07d4ba07b8b1a014d583d1148a548165"},{url:"index.html",revision:"41f2d0156b98522e56b56b5809717c62"},{url:"slide/index.html",revision:"f33671e9a818b47c2aee828f8f27e3f8"},{url:"star/index.html",revision:"d29b3e844a74c46506b4078aab7cf98a"},{url:"tag/comm/index.html",revision:"d454f760aa4fe97efc8adada738b8bb7"},{url:"tag/comm/page/2/index.html",revision:"163178160665a40c4947cdebe86b1984"},{url:"tag/comm/page/3/index.html",revision:"5e60dcb21b646e87a5544d69f0076b11"},{url:"tag/comm/page/4/index.html",revision:"397bcf1e9f6ae1277028b7f0d6f3837e"},{url:"tag/comm/page/5/index.html",revision:"21e9ccc098e939c6017822e2bc82e085"},{url:"tag/index.html",revision:"1ff40441a3d176212e618e6695f49e73"},{url:"timeline/index.html",revision:"114b7e7920d32a9226d2b56837cf032e"}],{}),e.cleanupOutdatedCaches()}));
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
