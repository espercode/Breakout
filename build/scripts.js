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
/* vectors.js
 * Implements the classic Vector class
 * Author: Judy Chern and spencer
 */

 var JC = JC ? JC : {};
JC.breakout = JC.breakout ? JC.breakout :  {};

(function(game) {

//check for integer/null in constructor
var scaler = null;

var Vector = function(x, y) {
    if (x !== null & y !== null) {
        this.x = x;
        this.y = y;
    } else {
        console.log("Enter a number!");
        return;
    };
};

Vector.prototype.getX = function() {
    return this.x;
};

Vector.prototype.getY = function() {
    return this.y;
};


Vector.prototype.add = function(vector2) {

    var addedX = this.x + vector2.x;
    var addedY = this.y + vector2.y;
    //if x or y === undefined do something	


    return new Vector(addedX, addedY);

};

Vector.prototype.subtract = function(vector2) {

    var subtractX = this.x - vector2.x;
    var subtractY = this.y - vector2.y;

    return new Vector(subtractX, subtractY);
}

//var vector1 = new Vector(parseInt(prompt("Input x value")), parseInt(prompt("Input y value")));
//var vector2 = new Vector(parseInt(prompt("Input x value")), parseInt(prompt("Input y value")));
//vector1.add(vector2);
//vector1.subtract(vector2);

Vector.prototype.getMagnitude = function() {
    var x = this.x;
    var y = this.y;
    var magnitude = Math.sqrt(x * x + y * y);
    return magnitude;
}

Vector.prototype.scale = function(scaler) {
    var magnitude = this.getMagnitude();
    var scaleX = this.x / magnitude;
    var scaleY = this.y / magnitude;

    var newX = scaleX * scaler;
    var newY = scaleY * scaler;

    return new Vector(newX, newY);
};

Vector.prototype.scale_arguement = function(scaler) {
    var magnitude = this.getMagnitude();
    var scaleX = this.x / magnitude;
    var scaleY = this.y / magnitude;

    var newX = scaleX * scaler;
    var newY = scaleY * scaler;

    return new Vector(newX, newY);
};

Vector.prototype.unitVector = function() {
    var unitScale = this.getMagnitude();
    var unitVectorX = this.x / unitScale;
    var unitVectorY = this.y / unitScale;
    return new Vector(unitVectorX, unitVectorY);
};

Vector.prototype.rotate = function(angleToRotate) {
    var x = this.x;
    var y = this.y;
    var lineAngle = Math.atan2(y, x);
    var angle = angleToRotate;
    angle = (angle * Math.PI / 180);

    rotatedX = Math.cos(angle) * (x) - Math.sin(angle) * (y);
    rotatedY = Math.cos(angle) * (y) + Math.sin(angle) * (x);
    return new Vector(rotatedX, rotatedY);
};

Vector.prototype.getDotProduct = function(vector2) {
    var dotProduct = this.x * vector2.x + this.y * vector2.y;
    return (dotProduct);
};

Vector.prototype.normal = function() {

    scaledVector = this.scale(1);

    var normalX = scaledVector.y * -1;
    var normalY = scaledVector.x;
    return new Vector(normalX, normalY);
};

Vector.prototype.getMidpoint = function(vector2) {
    var midpointX = (vector2.x) / 2;
    var midpointY = (vector2.y) / 2;
    return new Vector(this.x + midpointX, this.y + midpointY);
};

Vector.prototype.getTheta = function(vector2) {
    var theta = Math.acos((this.x * vector2.x) + (this.y * vector2.y));
    return theta;
};



Vector.prototype.projection = function(incomingvelocity, planeNormal) {
    //vector2 is the direction of the incoming ball







};


//Vector.prototype.getPoint = function(event){
//	var x = event.x ;
//var y = event.y;
//return new Vector(x,y);
//}
//vector1.normal();

//vector1.rotate();
//vector1.scale();
//vector1.getMagnitude();


})(JC.breakout);

(function(game) {
	game.functionThatWeWantOtherPeopleToHave = function () {
		console.log('yay');
	};

	var functionTheWeDontWantOtherPeopleToHave = function () {

	}
})(JC.breakout);
//fix wall parameters

var Walls = function(wall_left, wall_top, wall_right) {
    this.wall_left = new boundingBox(0, 0, 10, 300);
    this.wall_top = new boundingBox(10, 0, 580, 10);
    this.wall_right = new boundingBox(580, 0, 10, 300);
};

Walls.prototype.drawWalls = function(walls) {
    this.wall_left.drawBox(this.wall_left.x, this.wall_left.y, this.wall_left.width, this.wall_left.height);
    this.wall_top.drawBox(this.wall_top.x, this.wall_top.y, this.wall_top.width, this.wall_top.height);
    this.wall_right.drawBox(this.wall_right.x, this.wall_right.y, this.wall_right.width, this.wall_right.height);

    // var path = new Path2D();
    // path.moveTo(50,25); 
    // path.quadraticCurveTo(25,25,25,62.5);
    // path.quadraticCurveTo(25,100,50,100);

    // path.quadraticCurveTo(50,120,30,125);
    
    // path.quadraticCurveTo(60,120,65,100);
    // path.lineTo(100, 100);
    // path.quadraticCurveTo(125,100,125,62.5);
    // path.quadraticCurveTo(125,25,100,25);
    // path.lineTo(50,25);
    // ctx.stroke(path);

}

function test2(event) {
    if (event.keyCode == 'W'.charCodeAt()) {
        walls1 = new Walls(this.wall_left, this.wall_top, this.wall_right);
        walls1.drawWalls(walls1);
    }
};
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

var boundingBox = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

boundingBox.prototype.drawBox = function(boundingBox) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
};