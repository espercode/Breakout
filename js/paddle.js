//cover what happens when you click screen before paddle exists

//test test

var canvas = null;
var ctx = null;
var startX = null;
var startY = null;
var moveok = null;
var dx = null;
var dy = null;
var paddle1 = null;
var x = null;
var y = null;

$(document).ready(function() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    Focusable = "True";
    window.addEventListener("keydown", test, false);
    //canvas.addEventListener("mouseover", movePaddle_temp, false);
    canvas.addEventListener("mousemove", movingPaddle_temp, false);
    window.addEventListener("keydown", test2, false);
    window.addEventListener("keydown", JC.breakout.test3, false);

});
//put event listener function inside another function to call
//set x and y coordinates and height and width of paddle
var Paddle = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

Paddle.prototype.drawPaddle_start = function() {
    var x = this.x;
    var y = this.y;
    var width = this.width;
    var height = this.height;
    ctx.fillRect(x, y, width, height);
};

//Paddle.prototype.movePaddle = function(){

//event.preventDefault();
//event.stopPropagation();



//var paddle = paddle1.paddle_boundingBox();
//if (x > this.x && 
//x < this.x + this.width && 
//y > this.y && 
//y < this.y + this.height){
//moveok = true;
//originalPointX = b.x;
//originalPointY = b.y;
//}

//startX = x;
//	startY = y;
//};

Paddle.prototype.movingPaddle = function() {
    event.preventDefault();
    event.stopPropagation();
    //if (x > this.x && 
    //x < this.x + this.width && 
    //y > this.y && 
    //y < this.y + this.height){
    //	moveok = true;
    //	}

    startX = this.x;
    //startY = this.y;



    //	if(moveok) {

    dx = x - startX;
    //dy = y - startY;


    this.x += dx;
    //this.y += dy;
    //}

    //redraw the new scene with new box position
    paddle1.reDraw();

    //reset the starting mouse position for next mouse move
    startX = x;
    //startY = y;

};

//clears paddle drawing
Paddle.prototype.clear = function() {
    ctx.clearRect(startX, this.y, this.width, this.height);
};

Paddle.prototype.reDraw = function() {

    this.clear();

    ctx.fillRect(this.x, this.y, this.width, this.height);

};

Paddle.prototype.draw = function() {

    ctx.fillRect(this.x, this.y, this.width, this.height);

};




function test(event) {
    if (event.keyCode == 'P'.charCodeAt()) {

        paddle1 = new Paddle(300, 290, 100, 10);
        paddle1.drawPaddle_start();
    }
};

function movingPaddle_temp(event) {
    x = parseInt(event.x);
    y = parseInt(event.y);
    if (paddle1 != null) {
        paddle1.movingPaddle();
    }
};