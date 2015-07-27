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

Vector.prototype.planeNormal = function() {

    scaledVector = this.scale(1);

    var normalX = scaledVector.y;
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



Vector.prototype.project = function(plane) {
    //plane is the surface the ball bounces off
	//Vector is the incoming velocity of the ball
	var planeNormal = plane.planeNormal();
	

	this.scale(1);
	
	var dotProduct = this.getDotProduct(planeNormal);
	
	var projectionLength = dotProduct;
	
	return projectionLength;
};

Vector.prototype.reflect = function(projectionLength,planeNormal,ballPosition){
	//position of ball at beginning of frame - projection = vector between the projection and incoming velocity
	//which vector should be instance of Vector called? 
	
	var projectionTop = game1.ball.center.add(planeNormal.scale(projectionLength));
	
	
	var vector_between = ballPosition.subtract(projectionTop);
	
	var reflectionPoint = projectionTop.subtract(vector_between);	
	
	return new Vector(reflectionPoint.x, reflectionPoint.y);
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
