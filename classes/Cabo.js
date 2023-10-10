class Cabo{
    constructor(){
        this.angle = 0;
        this.start = new p5.Vector(0,0);
        this.end = new p5.Vector(0,0);
    }

    show(carro){
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }

    update(rampa, carro){
        this.start = new p5.Vector(carro.pos.x -25 * rampa.normal.x, carro.pos.y -25 * rampa.normal.y);

        let length = width - this.start.x;
        let h = tan(this.angle + rampa.angle) * length;

        line(this.start.x, this.start.y, width, this.start.y);
        
        this.end = new p5.Vector(width, h);
    }
}