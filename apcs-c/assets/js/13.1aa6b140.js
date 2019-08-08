(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{314:function(s,t,a){"use strict";a.r(t);var n=a(40),r=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"附錄四：排序函式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附錄四：排序函式","aria-hidden":"true"}},[s._v("#")]),s._v(" 附錄四：排序函式")]),s._v(" "),a("p",[s._v("在第八章，已經介紹過氣泡排序法及合併排序法，也略微談到一些複雜度的問題。基本上，當要處理的資料量很大的時候，這兩個排序方法的速度會差很多。在 APCS 的實作題中，有一些問題要處理的數據可能高達一二十萬筆，這個時候使用氣泡排序法就太慢了，會有超時的問題。那麼使用合併排序法的話，雖然可以有很快的效率，但實際作答的時候，在有限的時間內，要把合併排序法整個自己撰寫一次，其實也是蠻花時間的。有沒有更好的辦法呢？")]),s._v(" "),a("p",[s._v("實際上，在 C 語言的標準函式庫裡面，有一個快速排序法函式，我們可以直接呼叫該函式來進行資料的排序，這樣一來，既可以省下許多時間，而且也可以達到很高的效率。以下就來介紹這個快速排序法的函式 qsort。")]),s._v(" "),a("h2",{attrs:{id:"函式宣告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函式宣告","aria-hidden":"true"}},[s._v("#")]),s._v(" 函式宣告")]),s._v(" "),a("p",[s._v("qsort 函式的宣告如下：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" qsort "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" size_t num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" size_t width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("compar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("看起來有點複雜對吧？這也是為什麼會把它放在附錄的緣故了。這邊先對函式的參數做一些說明，之後會進一步說明如何使用這個函式來進行排序。")]),s._v(" "),a("p",[s._v("這個函式有四個參數，而且沒有返回值。以下分別對四個參數進行說明：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("void *base")]),s._v(" : 這個參數代表要排序的陣列的地址。前面提過，*base 表示 base 是一個指標，也就是存放地址的型態，而前面的 void，表示這個地址所存放的資料為空型態，什麼是空型態呢？也就是沒有特定型態的型態。為什麼要用空型態呢？因為實際要用來排序的資料，可能是整數、浮點數、字元，甚至是結構等各種可能的型態。如果我們把它宣告成某一種型態的話，那原則上就是特別針對這種型態的資料來進行處理，其它型態的資料就沒辦法使用了，為了可以適應各種可能的型態，所以把它宣告成空型態。基本上任意型態的指標都可以轉型成空型態的指標，但是空型態沒有特別指明數據的存放格式，實際上也沒有辦法做進一步的處理，所以在排序之前，一般都會先把它轉型為要處理的資料型態。")]),s._v(" "),a("li",[a("code",[s._v("size_t num")]),s._v(" : 這裡 size_t 可以看成是非負整數的別名，也就是說，num 是一個非負的整數，實際上代表的意義，就是有多少筆資料要進行排序。例如有 10 筆資料要進行排序的話，這個參數就放 10。")]),s._v(" "),a("li",[a("code",[s._v("size_t width")]),s._v(" : 這個參數的意義，是說明每一筆要排序的資料所佔的位元組 (byte) 數。因為 qsort 函式要排序的資料型態可能是各種任意的型態，而且它的陣列地址是用空型態的形式傳進來的，這樣一來，就不清楚每一筆資料會佔用多少的位元組空間，所以需要用到這個參數。以整數為例，因為整數佔用 4 個位元組，所以這個參數可以放 4。一般來說，我們通常不直接填寫數字，而是使用 sizeof 這個巨集來取得資料的所佔用的大小，以整數為例，佔用的位元組數就是 "),a("code",[s._v("sizeof(int)")]),s._v("。這種方式可以適用更一般的情況，例如針對結構來說，通常我們不會自己去計算一個結構佔用多少位元組，而是使用 sizeof 這個巨集來進行計算。")]),s._v(" "),a("li",[a("code",[s._v("int (*compare) (const void *, const void*)")]),s._v(" : 這是第 4 個參數，可能也是初學者最難理解的東西，以下大概分幾點來解說一下：\n"),a("ol",{attrs:{type:"a"}},[a("li",[a("code",[s._v("*compare")]),s._v(" 表示 compare 是一個指標。")]),s._v(" "),a("li",[a("code",[s._v("(const void *, const void*)")]),s._v(" 表示 compare 指標取值之後是一個函式，而這個函式有兩個輸入參數，都是 "),a("code",[s._v("const void *")]),s._v("。"),a("code",[s._v("void *")]),s._v(" 的部份上面說過，它是指向空型態的指標。前面的 const 則代表常數的意思。合起來就是說，這個指標可以指向任意型態的值，但這個值必須是常數，或者說，這個值是不能被更動的。一般來說，如果只會讀取資料，而不會更動資料的值，可以加上這個常數宣告，以保護資料不小心被改寫的情況發生。")]),s._v(" "),a("li",[s._v("最前面的 "),a("code",[s._v("int")]),s._v(" 代表的是函式的返回值為整數。也就是說，compare 這個函式指標，所指向的函式，其返回值為整數。")]),s._v(" "),a("li",[s._v("最後合起來，就是說，compare 是一個指向函式的指標，所指向的函式有兩個輸入參數，都是 "),a("code",[s._v("const void *")]),s._v("，而回傳值則為整數。")]),s._v(" "),a("li",[s._v("實際上第 4 個參數所代表的意義，就是一個比較函式。這個函式主要就是負責比較兩筆資料的大小。因為我們要排序的資料，可能是各種型態，那要怎麼去比較任兩筆資料的大小呢？就交給使用者自己去定義吧！這裡用兩個空型態的指標指向所要比較的資料地址，比較之後，如果回傳值小於 0，表示前面的資料比較小；如果回傳值大於 0，表示前面的資料比較大；那如果等於 0，表示兩筆資料一樣大。使用者必須先撰寫一個符合型態的比較函式，然後把它的地址當做參數放在 qsort 函式的第 4 個參數，這樣一來，qsort 函式在排序的過程中，就知道如何比較資料的大小了。")])])])]),s._v(" "),a("h2",{attrs:{id:"整數範例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整數範例","aria-hidden":"true"}},[s._v("#")]),s._v(" 整數範例")]),s._v(" "),a("p",[s._v("了解 qsort 函式的宣告之後，我們先用一個例子來說明 qsort 的使用方式。這裡假設要排序的資料是整數，程式碼如示：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdlib.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" N 10")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("xx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("yy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("xx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("yy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("qsort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" compare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("執行結果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" 41 6334 11478 15724 18467 19169 24464 26500 26962 29358\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("說明如下：")]),s._v(" "),a("ol",[a("li",[s._v("第 2 行引入標準函式庫檔頭 stdlib.h，因為使用到 qsort 函式，所以這一行不可省略。")]),s._v(" "),a("li",[s._v("第 4 行定義巨集變數 N 等於 10，以下凡出現 N 這個變數，一律代換為 10。")]),s._v(" "),a("li",[s._v("第 6 行：compare 為一個比較函式，兩個輸入參數皆為 "),a("code",[s._v("const void *")]),s._v(" 型態，返回值為整數。compare 本身是函式，實際上也代表函式所在的地址，所以可以當做 qsort 函式所需要的第 4 個參數。初學者可能會覺得應該使用 &compare 才對，因為 compare 是函式，\n&compare 才是它的地址，其實這樣使用也是 OK 的。前面提過，陣列名稱本身就是陣列所在的開始地址，所以陣列名稱也是指標型態。同樣的，函式名稱本身就是函式所在的開始地址，也是一種指標型態，所以可以直接使用。但是在函式名稱前面加上 & 取地址的話也沒有問題，讀者可以實際測試看看。另外，const 省略的話，編譯會產生警告，但仍然可以產生正確的執行檔，執行結果也沒有問題。如果不想看到警告訊息，就記得加上 const。")]),s._v(" "),a("li",[s._v("第 8~9 行：比較函式的資料地址沒有型態，先把它轉型成整數指標型態，也就是說，實際存效在地址中要用來比較的資料，都是整數。")]),s._v(" "),a("li",[s._v("第 10 行，轉成整數指標之後，"),a("code",[s._v("*xx")]),s._v(" 為間接取值，也就是取得前面資料的值，相同的，"),a("code",[s._v("*yy")]),s._v(" 為後面資料的值。回傳值為前面的值減掉後面的值，當前面大的時候，回傳值為正；當前面小的時候，回傳值為負；當兩者相同的時候，回傳值為 0。這是我們定義的比較函式，可以用來比較兩個整數地址存放的整數的大小。")]),s._v(" "),a("li",[s._v("第 15 行，宣告整數陣列 a，有 N 個元素。")]),s._v(" "),a("li",[s._v("第 16 行，使用 rand 函式產生隨機整數，並把值放到 a 陣列中。")]),s._v(" "),a("li",[s._v("第 17 行，使用 qsort 函式進行快速排序，陣列開始地址為 a，有 N 筆資料，每筆資料大小為 sizeof(int)，比較的函式為 compare。")]),s._v(" "),a("li",[s._v("第 18 行，把排序之後的陣列值印出來。")]),s._v(" "),a("li",[s._v("從執行結果可以知道，預設的排序結果為從小到大。那如果要從大排到小怎麼辧呢？改寫比較函式，把回傳值改成 "),a("code",[s._v("*yy - *xx")]),s._v(" 就好了。這等於重新定義兩個整數的大小順序，和一般所習慣的大小順序相反，因此排出的結果，就會是我們想要的結果。")])]),s._v(" "),a("h2",{attrs:{id:"其他資料型態"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他資料型態","aria-hidden":"true"}},[s._v("#")]),s._v(" 其他資料型態")]),s._v(" "),a("p",[s._v("了解上面整數的排序範例之後，要進行其他型態的資料排序，基本上也沒有什麼問題。如果要排序的資料型態為字元、浮點數等基本資料型態，就把第 8~9 行轉換成相應的型態就可以了。那如果是比較複雜的型態，例如結構，那除了第 8~9 行轉成相應的型態之外，可能第 10 行回傳值的部份，也必須加以改寫才行。")]),s._v(" "),a("p",[s._v("舉例說明：假設要比較的資料型態為結構 EndPoint，其定義如下：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EndPoint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("這個結構型態，我們在第九章處理線段覆蓋長度那個問題時曾經用過，那時用來排序的方式，是自己寫的合併排序法，現在試著改用 qsort 函式來做排序。假設要排序的依據是結構中 pos 的大小，從小到大進行排序，則比較函式可以改寫如下：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EndPoint")]),s._v(" EP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    EP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("xx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    EP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("yy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" xx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" yy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("這邊第 1 行宣告 EP 為結構的別名，這樣使用結構時，就不用特別加上 struct 這個關鍵字了。第 4~5 行把空型態指標轉成 EP 結構指標，第 6 行取得結構的 pos 欄位並進行比較，返回結果就是兩個結構的 pos 欄位大小的比較結果。")]),s._v(" "),a("p",[s._v("呼叫 qsort 排序時，呼叫的方式應該像這樣：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("qsort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" compare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("這樣就可以針對結構 EP 的陣列 a 進行排序，排序方式主要依結構中的 pos 欄位，由小到大進行排序。")]),s._v(" "),a("p",[s._v("除了以上提到的基本資料型態，以及簡單的結構型態，實際上只要適當的改寫比較函式，再複雜的資料型態，都可以使用 qsort 函式來進行排序。程式碼不會太複雜，而且可以得到很好的執行效率。")])])},[],!1,null,null,null);t.default=r.exports}}]);