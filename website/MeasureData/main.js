var Name;
var photocell;
var Did;
var Url;
var Tab;
var Interval;
var myData;
var sending = false;
var myboard = null;

start = function () {
    // 取值
    Name = $("#iname").val();
    Did = $("#idid").val();
    Url = $("#url").val();
    Tab = $("#tab").val();
    Interval = parseFloat($("#interval").val());
    // 設值
    $("#name").text(Name);
    $("#did").text(Did);
    $("#sinterval").text(Interval);
  	$("#myinput").css('display', 'none');
  	$("#myoutput").css('display', 'block');
  	RunBoard();
};

sendSwitch = function () {
    if (Url==="" || Tab==="") {
        alert("URL 或 Tab 未正確設定！");
        return;
    }
  	sending = !sending;
  	if (sending) $("#bsend").text("暫停傳送");
  	else $("#bsend").text("繼續傳送");
};

sendData = function () {
    if (myboard && sending) {
        var myData= {};
        myData.sheetUrl = Url;
        myData.sheetName = Tab;
        myData.column0 = new Date();
        myData.column1 = Name;
        myData.column2 = photocell.detectedVal;
        writeSheetData(myData);
    }
};

boardTask = function(board) {
    console.log("boardTask Called!");
    board.samplingInterval = 200;
    photocell = getPhotocell(board, 0);
    photocell.measure(function (val) {
        photocell.detectedVal = val;
        $('#lightvalue').text(val);
    });
    console.log(Interval);
    dataTimer = setInterval(sendData, Interval*1000);
    board.on('error', function (err) {
        console.log("board Error Called!");
        board.error = err;
        myboard = null;
        clearInterval(dataTimer);
        $('#lightvalue').text("ERROR，請重啟設備！");
        RunBoard();
    });
}

RunBoard = function () {
    console.log("myboard, DEVICE = ", myboard, Did);
    myboard = new webduino.WebArduino({board: 'Smart', device: Did, transport: 'mqtt', multi: true});
    myboard.once(webduino.BoardEvent.READY, boardTask);
}



