var startX = null;
var x = null;
var y = null;

var Paddle = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
	this.middle = (this.width/2) + this.x;
};

Paddle.prototype.drawPaddle_start = function() {
    var x = this.x;
    var y = this.y;
    var width = this.width;
    var height = this.height;
    ctx.fillRect(x, y, width, height);
};

Paddle.prototype.movingPaddle = function() {
	if(x > game1.walls.left.width && x < canvas.width - game1.paddle.width - game1.walls.right.width) {
    event.preventDefault();
    event.stopPropagation();

    startX = this.x;

    var dx = x - startX;

    this.x += dx;
	
	game1.paddle.middle = (this.width/2) + this.x;
 
    //redraw the new scene with new box position
    game1.paddle.reDraw();

    //reset the starting mouse position for next mouse move
    startX = x;
	}
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