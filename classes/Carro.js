class Carro {
  constructor() {
    this.angle = 0;
    this.pos = new p5.Vector();
    this.mass = 500;
  }

  show(rampa) {
    const scale = 20;

    push();
    translate(this.pos.x, this.pos.y);
    rotate(-this.angle - PI);
    image(kwid_img, -23, -13, 8 * scale, 5 * scale);
    //rect(0, 0, 100, 50);
    pop();

    push();
    translate(this.pos.x, this.pos.y);
    rotate(-rampa.angle);
    text(this.mass + "kg", -65 - 2 * int(log(this.mass + 0.1)), -20);
    pop();
  }

  update(rampa) {
    const DISTANCE_FROM_ORIGIN = 200;
    this.angle = rampa.angle;
    this.pos.x = cos(rampa.angle) * DISTANCE_FROM_ORIGIN + rampa.vertex[0].x;
    this.pos.y =
      sin(rampa.angle) * -DISTANCE_FROM_ORIGIN + height - rampa.hOffSet;
  }
}
