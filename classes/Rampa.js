class Rampa{
    constructor(length){
        this.angle = 45;
        this.length = length;
        this.h = sin(this.angle) * (this.length / cos(this.angle));
        this.vertex = [new p5.Vector(width-this.length, height), new p5.Vector(width, height), new p5.Vector(width, height - h)];
        this.normal = new p5.Vector(0,0);
    }

    show(){
        triangle(this.vertex[0].x, this.vertex[0].y, this.vertex[1].x, this.vertex[1].y, this.vertex[2].x, this.vertex[2].y);
    }

    update(){
        angleMode(DEGREES);

        let a = this.length / cos(this.angle);
        let h = sin(this.angle) * a;

        this.vertex[0] = new p5.Vector(width-this.length, height);
        this.vertex[1] = new p5.Vector(width, height);
        this.vertex[2] = new p5.Vector(width, height - h);
    }
}