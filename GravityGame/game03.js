var width = 800;
var height = 470;
var speed;
var angle;
var shooting = false;
var angleadd = 0;
var speedadd = 0;
var targetr = 30;
var ballr = 10;
var baser = 80;
var gravity = 9.8;
var life = 3;
var basecenter = { x: 30, y: 480 };
var tubedim = { len: 40, r: 10 };
var trace = 1;
var shooting = false;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var baselayer = new Konva.Layer();
var tracelayer = new Konva.Layer();

var showtext = new Konva.Text({
    x: 30,
    y: 30,
    lineHeight: 1.28,
    fontSize: 22,
    fontFamily: 'Calibri',
    fill: 'blue'
});

var result = new Konva.Text({
    text: '',
    fontSize: 60,
    fontFamily: 'Calibri',
    fill: 'red',
    align: 'center'
});

var hintHText = new Konva.Text({
    text: '',
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: 'gray',
    align: 'center'
});

var hintVText = new Konva.Text({
    text: '',
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: 'gray'
});

var target = new Konva.Circle({
    x: 700,
    y: 200,
    radius: targetr,
    stroke: 'red'
});

var canonbase = new Konva.Wedge({
    x: basecenter.x,
    y: basecenter.y,
    radius: baser,
    angle: 180,
    fill: 'darkgreen',
    rotation: 180
});

var canontube = new Konva.Rect({
    x: basecenter.x,
    y: basecenter.y,
    width: tubedim.len,
    height: 2 * tubedim.r,
    fill: 'brown',
    offset: { x: -(baser - 5), y: tubedim.r },
    rotation: -angle
});

var ball = new Konva.Circle({
    radius: ballr,
    fill: 'orange',
});

var hintline = new Konva.Line({
    points: [],
    stroke: '#cccccc',
    dash: [5, 5]
});

var ballpos;


baselayer.add(result);
baselayer.add(hintHText);
baselayer.add(hintVText);
baselayer.add(hintline);
baselayer.add(showtext);
baselayer.add(ball);
baselayer.add(target);
baselayer.add(canonbase);
baselayer.add(canontube);
stage.add(baselayer);
if (trace > 0) stage.add(tracelayer);
reset();

function distance2(p1, p2) {
    return (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
}

function updateBall(frame) {
    var t = frame.time / 200;
    var rad = Math.PI * angle / 180;
    var speedx = speed * Math.cos(rad);
    var speedy = speed * Math.sin(rad);
    var dx = speedx * t;
    var dy = speedy * t - 0.5 * gravity * t * t;
    ball.x(ballpos.x + dx);
    ball.y(ballpos.y - dy);
    if (trace > 0) {
        var tball = new Konva.Circle({
            x: ball.x(),
            y: ball.y(),
            radius: 1,
            fill: '#dddddd',
        });
        tracelayer.add(tball);
        tracelayer.draw();
    }
    if (distance2(ball.position(), target.position()) < (targetr - ballr) * (targetr - ballr) - 40) {
        result.text('You Win!');
        result.position({ x: Math.round(width / 2) - 120, y: Math.round(height / 2) - 50 });
        result.show();
        baselayer.draw();
        ballanim.stop();
        shooting = false;
    }
    if (ballpos.x + dx > target.position().x + 30) {
        life--;
        if (life <= 0) {
            result.text('You Lose!');
            result.position({ x: Math.round(width / 2) - 120, y: Math.round(height / 2) - 50 });
            result.show();
        }
        updatePara();
        baselayer.draw();
        ballanim.stop();
        shooting = false;
    }
}

var addinterval = 4;
var intervaln = 0;

function updateAngleAndSpeed(frame) {
    intervaln++;
    if (intervaln % addinterval != 0) return;
    if (angle > 84 && angleadd > 0) return;
    if (angle < 16 && angleadd < 0) return;
    angle += angleadd;
    speed += speedadd;
    canontube.rotation(-angle);
    updatePara();
    baselayer.draw();
}

var ballanim;
var angleanim;

function updatePara() {
    bx = Math.round(basecenter.x + (baser + tubedim.len - 5) * Math.cos(Math.PI * angle / 180));
    by = Math.round(basecenter.y - (baser + tubedim.len - 5) * Math.sin(Math.PI * angle / 180));
    ball.position({ x: bx, y: by });
    hintline.points([ball.x(), ball.y(), target.x(), ball.y(), target.x(), target.y()]);
    hintHText.position({ x: (ball.x() + target.x()) / 2, y: ball.y() + 10 });
    hintHText.text(`${Math.round(target.x() - ball.x())} m`);
    hintVText.position({ x: target.x() + 10, y: Math.round((ball.y() + target.y()) / 2) });
    hintVText.text(`${Math.round(ball.y() - target.y())} m`);
    showtext.text(`Lives: ${life}\nGravity: ${gravity} N/kg\nSpeed: ${speed} m/s\nAngle: ${angle} degrees`);
}

function setAngleAndSpeed() {
    angleadd = 0;
    speedadd = 0;
    angleanim.stop();
}

function adjustAngleAndSpeed(m, n) {
    if (shooting) return;
    angleadd = m;
    speedadd = n;
    angleanim = new Konva.Animation(updateAngleAndSpeed, baselayer);
    angleanim.start();
}

function shoot() {
    if (life <= 0 || shooting) return;    
    ball.show();
    ballpos = ball.position();
    shooting = true;
    ballanim = new Konva.Animation(updateBall, baselayer);
    ballanim.start();
}

function reset() {
    var nx = 580 + Math.floor(Math.random() * 150);
    var ny = 80 + Math.floor(Math.random() * 150);
    target.position({ x: nx, y: ny });
    angle = 60;
    speed = 100;
    canontube.rotation(-angle);
    nx = basecenter.x + (baser + tubedim.len - 5) * Math.cos(Math.PI * angle / 180);
    ny = basecenter.y - (baser + tubedim.len - 5) * Math.sin(Math.PI * angle / 180);
    ball.position({ x: nx, y: ny });
    life = 3;
    updatePara();
    result.hide();
    baselayer.draw();
    if (trace > 0) {
        tracelayer.destroyChildren();
        tracelayer.draw();
    }
}
