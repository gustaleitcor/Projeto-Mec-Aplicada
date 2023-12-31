class Rampa {
  constructor(length) {
    this.angle = 0;
    this.length = length;
    this.hOffSet = 0;
    this.h = sin(this.angle) * (this.length / cos(this.angle));
    this.vertex = [
      new p5.Vector(width - this.length, height),
      new p5.Vector(width, height),
      new p5.Vector(width, height - this.h),
    ];
    this.normal = p5.Vector.sub(this.vertex[2], this.vertex[0]);
  }

  show() {
    if (this.angle < HALF_PI - 0.001) {
      triangle(
        this.vertex[0].x,
        this.vertex[0].y,
        this.vertex[1].x,
        this.vertex[1].y,
        this.vertex[2].x,
        this.vertex[2].y
      );
    } else {
      rect(
        this.vertex[0].x,
        this.vertex[0].y,
        width - this.vertex[0].x,
        -height
      );
    }

    arc(this.vertex[0].x, this.vertex[0].y, 150, 150, -round(this.angle, 3), 0);
    line(
      this.vertex[0].x,
      this.vertex[0].y,
      this.vertex[0].x + 75,
      this.vertex[0].y
    );
    push();
    text(rampAngle.value() + "°", this.vertex[0].x + 10, this.vertex[0].y - 10);
    pop();
  }

  update() {
    let h = tan(this.angle) * this.length + this.hOffSet;

    this.vertex[0] = new p5.Vector(width - this.length, height - this.hOffSet);
    this.vertex[1] = new p5.Vector(width, height - this.hOffSet);
    this.vertex[2] = new p5.Vector(width, height - h);

    this.normal = p5.Vector.sub(this.vertex[2], this.vertex[0])
      .rotate(HALF_PI)
      .normalize();
  }
}
