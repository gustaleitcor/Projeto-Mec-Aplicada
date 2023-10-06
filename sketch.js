function setup() {
  createCanvas(400, 400);
  boxText = createInput();
}

function draw() {
  background(220);
  triangle(0, height, width, height, width, height / 2);
}
