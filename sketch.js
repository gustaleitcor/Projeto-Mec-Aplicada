function setup() {
  createCanvas(windowWidth/2, 400);
  rampa = new Rampa(width*3/4);
  carro = new Carro();
  cabo = new Cabo();
  rampAngle = createSlider(0, 89.9999999999999, 30, 1);
  cableAngle = createSlider(0, 89.9999999999999, 0, 1);
}

function draw() {
  background(220);
  rampa.angle = rampAngle.value();
  cabo.angle = cableAngle.value();



  carro.update(rampa);
  cabo.update(rampa, carro);
  rampa.update();
  
  cabo.show(carro);
  carro.show();
  rampa.show();
}

