var startX = null;
var x = null;
var y = null;

var Paddle = function(x, y, width, height) {
    boundingBox.call(this, x, y, width, height);
    this.middle = (this.width / 2) + this.x;
};

Paddle.prototype = new boundingBox();


Paddle.prototype.drawPaddle_start = function() {
    var x = this.x;
    var y = this.y;
    var width = this.width;
    var height = this.height;
    ctx.fillRect(x, y, width, height);
};

Paddle.prototype.movingPaddle = function(e) {
    var x = e.offsetX;
    startX = this.x;

    if (x < game1.walls.left.width + game1.paddle.width / 2) {
        this.x = game1.walls.left.width;
    } else if (x > canvas.width - game1.paddle.width / 2 - game1.walls.right.width) {
        this.x = canvas.width - game1.walls.right.width - game1.paddle.width;
    } else {
        this.x = x - this.width / 2;
    }

    game1.paddle.middle = x;

    //redraw the new scene with new box position
    game1.paddle.reDraw();
};

//clears paddle drawing
Paddle.prototype.clear = function() {
    ctx.clearRect(startX, this.y, this.width, this.height);
};

Paddle.prototype.reDraw = function() {

    this.clear();

    this.draw();

};

Paddle.prototype.draw = function() {

    ctx.fillRect(this.x, this.y, this.width, this.height);

};