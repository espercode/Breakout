var Walls = function() {
	var wallWidth = 10;
    this.left = new boundingBox(0, 0, wallWidth, canvas_height, false);
	this.top = new boundingBox(0, 0, canvas_width, 10, false);
    this.right = new boundingBox(canvas_width - wallWidth, 0, wallWidth, canvas_height, false);
};

Walls.prototype.drawWalls = function(walls) {
    this.left.drawBox(this.left.x, this.left.y, this.left.width, this.left.height);
    this.top.drawBox(this.top.x, this.top.y, this.top.width, this.top.height);
    this.right.drawBox(this.right.x, this.right.y, this.right.width, this.right.height);
}

