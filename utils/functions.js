function calculaPeso(massa) {
  const peso = massa * g;
  return peso;
}

function calculaPesoX(peso, rampaAng) {
  const pesox = peso * sin(rampaAng);
  return pesox;
}

function calculaPesoY(peso, rampaAng) {
  const pesoy = peso * cos(rampaAng);
  return pesoy;
}

function calculaTracao(peso, rampaAng, caboAng) {
  const tracao = (peso * sin(rampaAng)) / cos(caboAng);
  return tracao;
}

function calculaTracaoX(tracao, caboAng) {
  const tracaox = tracao * cos(caboAng);
  return tracaox;
}

function calculaTracaoY(tracao, caboAng) {
  const tracaoy = tracao * sin(caboAng);
  return tracaoy;
}

function myLerpFunction(n, target, speed) {
  if (abs(target - n) < speed) {
    return target;
  }
  return lerp(n, target, speed);
}
