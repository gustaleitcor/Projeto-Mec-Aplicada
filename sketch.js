function setup() {
  createCanvas(960, 600);

  rampa = new Rampa((width * 3) / 4);
  carro = new Carro();
  cabo = new Cabo();
  tabela = new Tabela();

  kwid_img = loadImage("kwid.png");

  createSpan("Ângulo da rampa (°): ").addClass("rampa-text");
  rampAngle = createSlider(0, 90, 30, 0.0001)
    .addClass("rampa-slider")
    .changed(() => {
      rampAngleValue.value(rampAngle.value());
    });
  rampAngleValue = createInput()
    .addClass("rampa-value")
    .attribute("placeholder", "Ex: 30°")
    .changed(() => {
      rampAngle.value(rampAngleValue.value().replace(",", "."));
    });
  rampAngleValue.value(30);

  createP();

  createSpan("Ângulo da cabo (°): ").addClass("cabo-text");
  cableAngle = createSlider(0, 90, 15, 0.0001)
    .addClass("cabo-slider")
    .changed(() => {
      cableAngleValue.value(cableAngle.value());
    });
  cableAngleValue = createInput()
    .addClass("cabo-value")
    .attribute("placeholder", "Ex: 45°")
    .changed(() => {
      cableAngle.value(cableAngleValue.value().replace(",", "."));
    });
  cableAngleValue.value(15);

  createP();

  createSpan("Massa do carro (kg): ").addClass("car-text");
  carMass = createSlider(0, 10000, 8000, 10)
    .addClass("car-slider")
    .changed(() => {
      carMassValue.value(carMass.value());
    });
  carMassValue = createInput()
    .addClass("car-value")
    .attribute("placeholder", "Ex: 800kg")
    .changed(() => {
      carMass.value(carMassValue.value().replace(",", "."));
    });
  carMassValue.value(8000);
}

function draw() {
  background(220);

  rampa.angle = radians(
    constrain(
      myLerpFunction(degrees(rampa.angle), rampAngle.value(), 0.15),
      0,
      90
    )
  );

  cabo.angle = radians(
    constrain(
      myLerpFunction(degrees(cabo.angle), cableAngle.value(), 0.15),
      0,
      90
    )
  );

  carro.mass = constrain(carMassValue.value(), 0, Infinity);

  carro.update(rampa);
  cabo.update(rampa, carro);
  rampa.update();
  tabela.update(rampa, carro, cabo);

  rampa.show();
  carro.show(rampa);
  cabo.show(rampa, carro);
  tabela.show();
}
