class Tabela {
  constructor() {
    this.title = "Tabela de valores";
    this.vals = {
      P: new Element("Peso"),
      Px: new Element("Peso em X"),
      Py: new Element("Peso em Y"),
      T: new Element("Tração"),
      Tx: new Element("Tração em X"),
      Ty: new Element("Tração em Y"),
    };
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
      text(
        entries[i][1].value + " N",
        width / 16,
        20 + 30 * i,
        (width * 3) / 16,
        30
      );
      pop();
    }

    for (let i = 0; i < entries.length; i++) {
      if (isMouseOver(0, 20 + 30 * i, width / 16, 30 + 20 + 30 * i)) {
        rect(mouseX, mouseY, 100, 20);

        push();
        textAlign(CENTER);
        text(entries[i][1].name, mouseX, mouseY + 5, 100, mouseY);
        pop();
      }
    }
  }

  update(rampa, carro, cabo) {
    const P = round(calculaPeso(carro.mass, rampa.angle, cabo.angle), 4);
    const T = round(calculaTracao(P, rampa.angle, cabo.angle), 4);

    this.vals.P.value = P;
    this.vals.Px.value = round(calculaPesoX(P, rampa.angle), 4);
    this.vals.Py.value = round(calculaPesoY(P, rampa.angle), 4);
    this.vals.T.value = T;
    this.vals.Tx.value = round(calculaTracaoX(T, cabo.angle), 4);
    this.vals.Ty.value = round(calculaTracaoY(T, cabo.angle), 4);
  }
}

class Element {
  constructor(name) {
    this.value = 0;
    this.name = name;
  }
}

function isMouseOver(x1, y1, x2, y2) {
  if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
    return true;
  }
  return false;
}
