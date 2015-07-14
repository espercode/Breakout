var boundingBox = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

boundingBox.prototype.drawBox = function(boundingBox) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
};