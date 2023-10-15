function calculaPesoX(peso, alpha) {
  angleMode(DEGREES);
  let pesox = peso * 9.8 * sin(alpha);
  return pesox;
}

function calculaPesoY(peso, alpha) {
  angleMode(DEGREES);
  let pesoy = peso * 9.8 * cos(alpha);
  return pesoy;
}

function calculaTensaoX(tensao, beta) {
  angleMode(DEGREES);
  let tensaox = tensao * 9.8 * cos(beta);
  return tensaox;
}

function calculaTensaoY(tensao, beta) {
  angleMode(DEGREES);
  let tensaoy = tensao * 9.8 * sin(beta);
  return tensaoy;
}

function calculaTensao(peso, alpha, beta) {
  anglemode(DEGREES);
  let tensao = (peso * 9.8 * sin(alpha)) / cos(beta);
  return tensao;
}

function calculaPeso(tensao, alpha, beta) {
  anglemode(DEGREES);
  let peso = (tensao * cos(beta)) / sin(alpha);
  return (peso / 9) * 8;
}

function calculaAlpha(tensao, peso, beta) {
  anglemode(DEGREES);
  let alpha = arcsin(((tensao * cos(beta)) / peso) * 9.8);
  return alpha;
}

function calculaBeta(tensao, peso, alpha) {
  anglemode(DEGREES);
  let beta = arccos((peso * 9.8 * sin(alpha)) / tensao);
  return beta;
}

function myLerpFunction(n, target, speed) {
  if (abs(target - n) < speed) {
    return target;
  }
  return lerp(n, target, speed);
}
