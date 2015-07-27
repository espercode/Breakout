//have this.velocity and speed
//if statement fix
//relate paddle this.direction with drawscreen
//paddleMiddle is part of paddle
//make game.js file and run everything there

var Ball = function(radius, startAngle, endAngle, counterclockwise) {
    this.center = new Vector(canvas_width / 2, canvas_height / 2);
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.counterclockwise = counterclockwise;
	
	this.speed = 1;
	this.direction = new Vector(0, 40);
    this.velocity = new Vector(this.direction.x*this.speed, this.direction.y*this.speed);
	this.boundingCircle = new boundingBox(this.center.x - this.radius, this.center.y - this.radius, this.radius * 2, this.radius * 2, false);
};

Ball.prototype.drawBall_start = function(ball1) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
};