class Carro{
  constructor(){
    this.angle = PI/4;
    this.pos = new p5.Vector();
  }

  show(rampa){
    push();
    translate(this.pos.x, this.pos.y);
    rotate(-this.angle-PI);
    rect(0, 0, 100, 50);
    pop();

    push();
    translate(this.pos.x, this.pos.y);
    pop();
  }

  update(rampa){
    this.angle = rampa.angle;
    this.pos.x = cos(rampa.angle) * 250 + width/4;
    this.pos.y = sin(rampa.angle) * -250 + height;
  }
}