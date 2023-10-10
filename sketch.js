function setup() {
  createCanvas(windowWidth/2, 400);
  rampa = new Rampa(width*3/4);
  carro = new Carro();
  cabo = new Cabo();
  rampAngle = createSlider(0, HALF_PI, PI/6, 0.01);
  cableAngle = createSlider(0, HALF_PI, 0, 0.01);
}

function draw() {
  background(220);

  rampa.angle = rampAngle.value();
  cabo.angle = cableAngle.value();

  text(rampAngle.value(), 20, 20);
  text(cableAngle.value(), 20, 40);
  text(rampAngle.value() + cableAngle.value(), 20, 60);

  carro.update(rampa);
  cabo.update(rampa, carro);
  rampa.update();

  cabo.show(carro);
  carro.show(rampa);
  rampa.show();
}

