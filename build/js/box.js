var boundingBox = function(x, y, width, height, destroyable) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.planeLeft = new Vector(0, canvas_height * -1);
    this.planeRight = new Vector(0, canvas_height);
    this.planeTop = new Vector(canvas_width * -1, 0);
    this.planeBottom = new Vector(canvas_width, 0);
    this.destroyable = destroyable ? destroyable : false;
};

boundingBox.prototype.drawBox = function(boundingBox) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
};