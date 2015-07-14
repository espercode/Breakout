//have this.velocity andgame.speed
//if statement fix
//relate paddle direction with drawscreen

var JC = JC ? JC : {};
JC.breakout = JC.breakout ? JC.breakout :  {};

(function(game) {

	game.changeSpeed = function (newSpeed) {
		game.speed = newSpeed;
	}

	game.speed = null; // refactor speed so that it is part of the Ball class and all references to speed are updated (likely change game.speed to this.speed)
		
	game.Ball = function(center, radius, startAngle, endAngle, counterclockwise) {
	    this.center = new Vector(300, 100);
	    this.radius = radius;
	    this.startAngle = startAngle;
	    this.endAngle = endAngle;
	    this.counterclockwise = counterclockwise;
	    this.velocity = null;
	    this.velocity2 = null;
		this.direction = null;
	};

	game.Ball.prototype.drawBall_start = function(ball1) {
	    ctx.beginPath();
	    ctx.arc(this.center.x, this.center.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise);
	    ctx.fillStyle = 'black';
	    ctx.fill();
	    ctx.closePath();
	};



	game.Ball.prototype.drawScreen = function() {
	    //loop before ball has hit the paddle
	    this.direction = new Vector(5, 180);

	    game.speed = 1;

	    this.velocity = getVelocity(this);

	    var unitsPerFrameX = this.velocity.x * 0.2;
	    var unitsPerFrameY = this.velocity.y * 0.2;

	    ctx.clearRect(0, 0, 600, 300);

	    this.center.x += unitsPerFrameX;
	    this.center.y += unitsPerFrameY;

	    boundingCircle.x += unitsPerFrameX;
	    boundingCircle.y += unitsPerFrameY;

	    walls1.drawWalls(walls1);
	    ball1.drawBall_start(ball1);
	    paddle1.draw();
	};

	var getVelocity = function (ball) {
		return new Vector(ball.direction.x *game.speed, ball.direction.y *game.speed);
	}

	game.Ball.prototype.drawScreen2 = function() {
	    //loop for when ball hits the paddle

	    var unitsPerFrameX = this.velocity2.x * 0.2;
	    var unitsPerFrameY = this.velocity2.y * 0.2;

	    ctx.clearRect(0, 0, 1600, 900);

	    this.center.x += unitsPerFrameX;
	    this.center.y += unitsPerFrameY;

	    boundingCircle.x += unitsPerFrameX;
	    boundingCircle.y += unitsPerFrameY;

	    walls1.drawWalls(walls1);
	    ball1.drawBall_start(ball1);
	    paddle1.draw();
	};

	game.Ball.prototype.drawScreen3 = function() {

	    var unitsPerFrameX = this.velocity2.x * 0.2;
	    var unitsPerFrameY = this.velocity2.y * 0.2;

	    ctx.clearRect(0, 0, 1600, 1000);

	    this.center.x += unitsPerFrameX;
	    this.center.y += unitsPerFrameY;

	    boundingCircle.x += unitsPerFrameX;
	    boundingCircle.y += unitsPerFrameY;

	    walls1.drawWalls(walls1);
	    ball1.drawBall_start(ball1);
	    paddle1.draw();
	};

	game.Ball.prototype.gameLoop = function() {
		var paddleMiddle,
			distance,
			rotationFactor;
	    //detects when the ball hits the paddle
	    if (boundingCircle.x < paddle1.x + paddle1.width &&
	        boundingCircle.x + boundingCircle.width > paddle1.x &&
	        boundingCircle.y < paddle1.y + paddle1.height &&
	        boundingCircle.y + boundingCircle.height > paddle1.y) {

	        //direction = new Vector (50,180);

	        //speed = 1.5;

	        this.velocity = new Vector(this.direction.x *game.speed, this.direction.y *game.speed * -1);

	        paddleMiddle = paddle1.width / 2 + paddle1.x;
	        distance;

	        if (ball1.center.x > paddleMiddle) {
	            distance = ball1.center.x - paddleMiddle;
	            rotationFactor = distance / (paddle1.width / 2);
	            this.velocity2 = this.velocity.rotate(rotationFactor * 50);
	        }

	        if (ball1.center.x < paddleMiddle) {
	            distance = paddleMiddle - ball1.center.x;
	            rotationFactor = distance / (paddle1.width / 2);
	            this.velocity2 = this.velocity.rotate(rotationFactor * 50);
	            //rotate vector counter clockwise
	            this.velocity2.x = this.velocity2.x * -1;
	        }
	        //loop for if ball hits the paddle
	        window.setTimeout(ball1.gameLoop2, 20);
	    } else {
	        //ball has not hit the paddle
	        window.setTimeout(ball1.gameLoop, 20);
	        ball1.drawScreen();


	    }
	};

	game.Ball.prototype.gameLoop2 = function() {
	    if (boundingCircle.x < walls1.wall_top.x + walls1.wall_top.width &&
	        boundingCircle.x + boundingCircle.width > walls1.wall_top.x &&
	        boundingCircle.y < walls1.wall_top.y + walls1.wall_top.height &&
	        boundingCircle.y + boundingCircle.height > walls1.wall_top.y) {

	        //direction = new Vector (50,180);

	        //speed = 1.5;

	        this.velocity2.y = this.velocity2.y * -1;

	        window.setTimeout(ball1.gameLoop3, 20);
	        ball1.drawScreen3();
	    } else if (boundingCircle.x < walls1.wall_left.x + walls1.wall_left.width &&
	        boundingCircle.x + boundingCircle.width > walls1.wall_left.x &&
	        boundingCircle.y < walls1.wall_left.y + walls1.wall_left.height &&
	        boundingCircle.y + boundingCircle.height > walls1.wall_left.y) {
	        this.velocity2.x = this.velocity2.x * -1;
	        //this.velocity = new Vector(direction.x*game.speed*-1, direction.y*game.speed);

	        window.setTimeout(ball1.gameLoop3, 20);
	    } else if (boundingCircle.x < walls1.wall_right.x + walls1.wall_right.width &&
	        boundingCircle.x + boundingCircle.width > walls1.wall_right.x &&
	        boundingCircle.y < walls1.wall_right.y + walls1.wall_right.height &&
	        boundingCircle.y + boundingCircle.height > walls1.wall_right.y) {
	        this.velocity2.x = this.velocity2.x * -1;
	        //this.velocity = new Vector(direction.x*game.speed*-1, direction.y*game.speed);

	        window.setTimeout(ball1.gameLoop3, 20);


	    } else {
	        window.setTimeout(ball1.gameLoop2, 20);
	        ball1.drawScreen2();
	    }
	};

	game.Ball.prototype.gameLoop3 = function() {
	    var x = boundingCircle.x < paddle1.x + paddle1.width &&
	        boundingCircle.x + boundingCircle.width > paddle1.x &&
	        boundingCircle.y < paddle1.y + paddle1.height &&
	        boundingCircle.y + boundingCircle.height > paddle1.y;
	    if (boundingCircle.x < paddle1.x + paddle1.width &&
	        boundingCircle.x + boundingCircle.width > paddle1.x &&
	        boundingCircle.y < paddle1.y + paddle1.height &&
	        boundingCircle.y + boundingCircle.height > paddle1.y) {

	        window.setTimeout(ball1.gameLoop, 20);
	    }

	    if (boundingCircle.x < walls1.wall_top.x + walls1.wall_top.width &&
	        boundingCircle.x + boundingCircle.width > walls1.wall_top.x &&
	        boundingCircle.y < walls1.wall_top.y + walls1.wall_top.height &&
	        boundingCircle.y + boundingCircle.height > walls1.wall_top.y) {

	        //direction = new Vector (50,180);

	        //speed = 1.5;

	        this.velocity2.y = this.velocity2.y * -1;

	        window.setTimeout(ball1.gameLoop3, 20);
	        ball1.drawScreen3();
	    } else {

	        window.setTimeout(ball1.gameLoop3, 20);
	        ball1.drawScreen3();
	    }
	};

	game.test3 = function (event) {
	    if (event.keyCode == 'B'.charCodeAt()) {
	        ball1 = new Ball(this.center, 10, 0, 2 * Math.PI, false);
	        ball1.drawBall_start(ball1);
	        boundingCircle = new boundingBox(ball1.center.x - ball1.radius, ball1.center.y - ball1.radius, ball1.radius * 2, ball1.radius * 2);
	    }

	    if (event.keyCode == 'S'.charCodeAt()) {

	        ball1.gameLoop();
	    }
	};
})(JC.breakout);
