class Cabo{
    constructor(){
        this.angle = 0;
        this.start = new p5.Vector(0,0);
        this.end = new p5.Vector(0,0);
    }

    show(carro){
        push();
        translate(carro.pos.x, carro.pos.y);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
        pop();
    }

    update(rampa, carro){
        angleMode(DEGREES);
        push();
        translate(carro.pos.x, carro.pos.y);
        let a = (width - carro.pos.x) / cos(this.angle + rampa.angle);
        let b = a * sin(this.angle + rampa.angle);
        this.end = new p5.Vector(width, b);
        pop();
    }
}