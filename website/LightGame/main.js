var photocell;

function BoardRun(board) {
  app.running = true;
  board.samplingInterval = 500;
  photocell = getPhotocell(board, 0);
  photocell.measure(function(val) {
    photocell.detectedVal = val;
    app.message = val;
    //app.updateData(val);
    accelerate((0.4-val)*3);
    //if (val<0.4) accelerate(0.01);
    //else accelerate(-0.01);
  });
}

var app = new Vue({
  el: "#vueapp",
  data: {
    board: null,
    checking: false,
    running: false,
    online: false,
    autorun: false,
    curx: 300,
    cury: 300,
    runDID: "",
    deviceID: "EjVbk",
    message: "Waiting"
  },
  mounted: function() {
    if (localStorage.boardName) {
      this.deviceID = localStorage.boardName;
    }
    this.checkOnline();
  },
  computed: {
    status: function() {
      ans = "DID=" + this.runDID + ", ";
      if (this.checking) ans += ", Checking...";
      else {
        if (this.online) ans += "Online, ";
        else ans += "Offline, ";
        if (this.running) ans += "Running";
        else ans += "Paused";
      }
      return ans;
    },
    rbntext: function() {
      if (this.online && this.running) return "Pause";
      return "Start";
    }
  },
  methods: {
    restart: function() {
      if (this.running) {
        startGame();
      }
    },
    changeDevice: function() {
      this.runDID = this.deviceID;
      localStorage.boardName = this.deviceID;
      if (this.running) {
        this.autorun = true;
        this.toggleStart();
      }
    },
    toggleStart: function() {
      if (this.running) {
        this.running = false; gpause = true;        
        this.board.disconnect(function() {
          this.online = false;
          app.checkOnline();
        });
      } else if (this.online) {
        BoardRun(this.board); 
        gpause = false;
        if (!loadg) startGame();
      }
    },
    checkOnline: function() {
      if (this.checking) return;
      this.checking = true;
      console.log("Check Online ?");
      if (this.board) delete this.board;
      this.runDID = this.deviceID;
      var board = new webduino.WebArduino({
        board: "smart",
        device: this.runDID,
        multi: true
      });
      board.on("ready", function() {
        board.systemReset();
        app.board = board;
        app.checking = false;
        app.online = true;
        //device.icon.setAttribute('class', 'check board-online icon-power');
        board.once(webduino.BoardEvent.DISCONNECT, function(e) {
          app.online = false;
          app.running = false;
          if (app.board != null) delete app.board;
          app.checkOnline();
        });
        board.once(webduino.BoardEvent.ERROR, function(err) {
          console.log(err);
        });
        if (app.autorun) {
          app.autorun = false;
          BoardRun(board);
        }
      });
    },
    updateData: function(val) {
      //console.log(val);
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, 800, 100);

      // Create gradient
      var grd = ctx.createLinearGradient(0, 0, 800, 0);
      grd.addColorStop(0, "black");
      grd.addColorStop(1, "yellow");
      // Fill with gradient
      ctx.fillStyle = grd;
      ctx.fillRect(10, 10, 10 + 750 * val, 80);
    }
  }
});
