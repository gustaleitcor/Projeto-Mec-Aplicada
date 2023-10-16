class Cabo {
  constructor() {
    this.angle = 0;
    this.start = new p5.Vector(0, 0);
    this.end = new p5.Vector(0, 0);
  }

  show(rampa, carro) {
    line(this.start.x, this.start.y, this.end.x, this.end.y);
    push();
    noFill();
    arc(
      this.start.x,
      this.start.y,
      150,
      150,
      -(this.angle + rampa.angle),
      -rampa.angle
    );

    drawingContext.setLineDash([5, 5]);
    line(
      this.start.x,
      this.start.y,
      this.start.x + 75 * cos(rampa.angle),
      this.start.y - 75 * sin(rampa.angle)
    );
    pop();

    push();
    translate(this.start.x, this.start.y);
    rotate(-rampa.angle);
    text(cableAngle.value() + "°", 10, -10);
    pop();
  }

  update(rampa, carro) {
    const h = 9;
    this.start = new p5.Vector(
      carro.pos.x - h * rampa.normal.x,
      carro.pos.y - h * rampa.normal.y
    );

    if (this.angle + rampa.angle > HALF_PI) {
      let length = this.start.x;
      let h = -tan(PI - (this.angle + rampa.angle)) * length + this.start.y;
      this.end = new p5.Vector(0, h);
    } else {
      let length = width - this.start.x;
      let h = -tan(this.angle + rampa.angle) * length + this.start.y;
      this.end = new p5.Vector(width, h);
    }
  }
}
