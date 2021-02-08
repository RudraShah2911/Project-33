class Divisions {
    constructor(x, y, width, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, h, options);
        this.width = width;
        this.height = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
};