class Carro{
  constructor(){
    this.angle = 45;
    this.pos = new p5.Vector();
  }

  show(){
    push();
    angleMode(DEGREES);
    translate(this.pos.x, this.pos.y);
    rotate(-this.angle-180);
    rect(0, 0, 100, 50);
    pop();
  }

  update(rampa){
    this.angle = rampa.angle;
    this.pos.x = cos(rampa.angle) * 250 + width/4;
    this.pos.y = sin(rampa.angle) * -250 + height;
  }
}