class Rampa{
    constructor(length){
        this.angle = 45;
        this.length = length;
        this.h = sin(this.angle) * (this.length / cos(this.angle));
    }

    show(){
        angleMode(DEGREES);

        let a = this.length / cos(this.angle);
        let h = sin(this.angle) * a;

        triangle(width-this.length, height, width, height, width, height - h);
    }
}