//fix wall parameters

var Walls = function(wall_left, wall_top, wall_right) {
    this.wall_left = new boundingBox(0, 0, 10, 300);
    this.wall_top = new boundingBox(10, 0, 580, 10);
    this.wall_right = new boundingBox(580, 0, 10, 300);
};

Walls.prototype.drawWalls = function(walls) {
    // this.wall_left.drawBox(this.wall_left.x, this.wall_left.y, this.wall_left.width, this.wall_left.height);
    // this.wall_top.drawBox(this.wall_top.x, this.wall_top.y, this.wall_top.width, this.wall_top.height);
    // this.wall_right.drawBox(this.wall_right.x, this.wall_right.y, this.wall_right.width, this.wall_right.height);

    var path = new Path2D();
    path.moveTo(50,25);
    path.quadraticCurveTo(25,25,25,62.5);
    path.quadraticCurveTo(25,100,50,100);

    path.quadraticCurveTo(50,120,30,125);
    
    path.quadraticCurveTo(60,120,65,100);
    path.lineTo(100, 100);
    path.quadraticCurveTo(125,100,125,62.5);
    path.quadraticCurveTo(125,25,100,25);
    path.lineTo(50,25);
    ctx.stroke(path);

}

function test2(event) {
    if (event.keyCode == 'W'.charCodeAt()) {
        walls1 = new Walls(this.wall_left, this.wall_top, this.wall_right);
        walls1.drawWalls(walls1);
    }
};