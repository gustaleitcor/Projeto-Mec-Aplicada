class Tabela {
  constructor() {
    this.title = "Tabela de valores";
    this.vals = { P: "", Px: "", Py: "", T: "", Tx: "", Ty: "" };
  }
  show() {
    push();
    fill(color(125));
    rect(0, 0, width / 4, 20);
    fill(color(0));
    textAlign(CENTER, CENTER);
    text(this.title, 0, 0, width / 4, 20);
    pop();

    const entries = Object.entries(this.vals);

    for (let i = 0; i < entries.length; i++) {
      push();
      textAlign(CENTER, CENTER);
      rect(0, 20 + 30 * i, width / 16, 30);
      text(entries[i][0], 0, 20 + 30 * i, width / 16, 30);

      rect(width / 16, 20 + 30 * i, (width * 3) / 16, 30);
      text(entries[i][1], width / 16, 20 + 30 * i, (width * 3) / 16, 30);
      pop();
    }
  }

  update(rampa, carro, cabo) {
    //const T = round(calculaTensao(carro.mass, rampa.angle, cabo.angle), 4);
    //this.vals.P = round(calculaPeso(carro.mass))
    //this.vals.Px = round(calculaPesoX(carro.mass, rampa.angle), 4) + "N";
    //this.vals.Py = round(calculaPesoY(carro.mass, rampa.angle), 4) + "N";
    //this.vals.T = T + "Pa";
    //this.vals.Tx = round(calculaTensaoX(T, cabo.angle), 4) + "Pa";
    //this.vals.Ty = round(calculaTensaoY(T, cabo.angle), 4);
  }
}
