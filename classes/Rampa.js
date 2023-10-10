class Rampa{
    constructor(length){
        this.angle = PI/4;
        this.length = length;
        this.h = sin(this.angle) * (this.length / cos(this.angle));
        this.vertex = [new p5.Vector(width-this.length, height), new p5.Vector(width, height), new p5.Vector(width, height - this.h)];
        this.normal = p5.Vector.sub(this.vertex[2], this.vertex[0]);
    }

    show(){
        triangle(this.vertex[0].x, this.vertex[0].y, this.vertex[1].x, this.vertex[1].y, this.vertex[2].x, this.vertex[2].y);
    }

    update(){
        let h = tan(this.angle) * this.length;

        

        this.vertex[0] = new p5.Vector(width-this.length, height);
        this.vertex[1] = new p5.Vector(width, height);
        this.vertex[2] = new p5.Vector(width, height - h);

        this.normal = p5.Vector.sub(this.vertex[2], this.vertex[0]).rotate(HALF_PI).normalize();
    }
}