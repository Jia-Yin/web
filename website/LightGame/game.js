var myGamePiece;
var myObstacles = [];
var myScore;
var timeInterval;
var gpause = false;
var loadg = false;

var thecanvas = document.createElement("canvas");
thecanvas.width = 640;
thecanvas.height = 480;

var myGameArea = {
  start: function() {
    this.context = thecanvas.getContext("2d");
    document.getElementById("gscr").appendChild(thecanvas);
    this.frameNo = 0;
    timeInterval = 20;
    clearInterval(this.interval);
    this.interval = setInterval(updateGameArea, timeInterval);
  },
  clear: function() {
    this.context.clearRect(0, 0, thecanvas.width, thecanvas.height);
  },
  uplevel: function() {
    clearInterval(this.interval);
    timeInterval--;
    this.interval = setInterval(updateGameArea, timeInterval);
  }
};

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  myGamePiece.gravity = 0.05;
  myScore = new component("30px", "Consolas", "blue", 320, 40, "text");
  myObstacles = [];
  gpause = false;
  myGameArea.start();
}

function component(width, height, color, x, y, type) {
  this.type = type;
  this.score = 0;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.update = function() {
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function() {
    if (gpause) return;
    //this.gravitySpeed += this.gravity;
    this.gravitySpeed = this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    if (this.y >= 440) this.y -= 440;
    if (this.y < 0) this.y += 440;
    console.log(this.y);
    //this.hitBottom();
  };
  this.hitBottom = function() {
    var rockbottom = thecanvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = 0;
    }
  };
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };
}

function updateGameArea() {
  if (gpause) return;
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      return;
    }
  }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(200)) {
    x = thecanvas.width;
    minHeight = 50;
    maxHeight = 200;
    height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    minGap = 100;
    maxGap = 140;
    gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new component(10, height, "green", x, 0));
    myObstacles.push(
      new component(10, x - height - gap, "green", x, height + gap)
    );
  }
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
  myScore.text = "SCORE: " + myGameArea.frameNo;
  if (myGameArea.frameNo % 1000 == 0) myGameArea.uplevel();
  myScore.update();
  myGamePiece.newPos();
  myGamePiece.update();
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}

function accelerate(n) {
  console.log(n);
  myGamePiece.gravity = n;
}
