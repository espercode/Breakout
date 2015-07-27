var Walls = function() {
	var wallWidth = Math.ceil(canvas_width*(10/600));
    this.left = new boundingBox(0, 0, wallWidth, canvas_height);
	this.top = new boundingBox(0, 0, canvas_width, Math.ceil(canvas_height*(10/300)));
    this.right = new boundingBox(canvas_width - wallWidth, 0, wallWidth, canvas_height);
};

Walls.prototype.drawWalls = function(walls) {
    this.left.drawBox(this.left.x, this.left.y, this.left.width, this.left.height);
    this.top.drawBox(this.top.x, this.top.y, this.top.width, this.top.height);
    this.right.drawBox(this.right.x, this.right.y, this.right.width, this.right.height);
}

