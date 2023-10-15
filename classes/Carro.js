class Carro {
  constructor() {
    this.angle = PI / 4;
    this.pos = new p5.Vector();
    this.mass = 500;
  }

  show(rampa) {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(-this.angle - PI);
    rect(0, 0, 100, 50);
    pop();

    push();
    translate(this.pos.x, this.pos.y);
    rotate(-rampa.angle);
    text(this.mass + "kg", -54 - 2 * int(log(this.mass + 0.1)), -25);
    pop();
  }

  update(rampa) {
    const DISTANCE_FROM_ORIGIN = 200;
    this.angle = rampa.angle;
    this.pos.x = cos(rampa.angle) * DISTANCE_FROM_ORIGIN + width / 4;
    this.pos.y = sin(rampa.angle) * -DISTANCE_FROM_ORIGIN + height;
  }
}
