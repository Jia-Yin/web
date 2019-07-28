var value;
var buttonA;
var buttonB;
var mpu9250;
var matrix;
var range;
var mx;
var my;
var nowx;
var nowy;
var column;
var row;
var shootbut = false;

function Quantize(value) {
    value = Math.round(1 + 4.0 * (value + range) / (2 * range));
    if (value > 5) value = 5;
    if (value < 1) value = 1;
    return value;
}

boardReady({ board: 'Bit', device: 'bit77730e', transport: 'mqtt', multi: true }, async function (board) {
    board.samplingInterval = 100;
    buttonA = getPullupButton(board, 35);
    buttonB = getPullupButton(board, 27);
    mpu9250 = getMPU9250(board);
    matrix = getMatrix(board, 4, 25);
    mx = 0;
    my = 180;
    nowx = 0;
    nowy = 180;
    range = 30;
    buttonA.on('pressed', async function () {
        await delay(0.1);
        mx = nowx;
        my = nowy;
    });
    buttonB.on('pressed', async function () {
        if (life>0) shoot();
        else reset();
    });
    mpu9250.on(webduino.module.MPU9250Event.ANGLE_MESSAGE, async function () {
        nowx = Math.round(mpu9250.angVals[1]);
        nowy = Math.round(mpu9250.angVals[0]);
        if (nowy < -90) nowy = nowy + 360;
        var dx = nowx - mx;
        var dy = nowy - my;
        var flag = 0;
        column = Quantize(dx);
        row = Quantize(dy);
        matrix.off();
        matrix.setColor((((row - 1) * 5 + column) - 1), '#ff0000');
        if (!shooting && angle + column - 3 < 86 && angle + column - 3 > 14) {
            angle += column - 3;
            canontube.rotation(-angle);
            flag = 1;
        }
        if (!shooting && row != 3) { speed += row - 3; flag = 1; }
        if (flag) {
            updatePara();
            baselayer.draw();
        }
    });
});

