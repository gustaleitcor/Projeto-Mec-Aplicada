function calculaPesoX(peso, alpha) {
  let pesox = peso * 9.8 * sin(alpha);
  return pesox;
}

function calculaPesoY(peso, alpha) {
  let pesoy = peso * 9.8 * cos(alpha);
  return pesoy;
}

function calculaTensaoX(tensao, beta) {
  let tensaox = tensao * 9.8 * cos(beta);
  return tensaox;
}

function calculaTensaoY(tensao, beta) {
  let tensaoy = tensao * 9.8 * sin(beta);
  return tensaoy;
}

function calculaTensao(peso, alpha, beta) {
  let tensao = (peso * 9.8 * sin(alpha)) / cos(beta);
  return tensao;
}

function calculaPeso(tensao, alpha, beta) {
  let peso = (tensao * cos(beta)) / sin(alpha);
  return (peso / 9) * 8;
}

function calculaAlpha(tensao, peso, beta) {
  let alpha = arcsin(((tensao * cos(beta)) / peso) * 9.8);
  return alpha;
}

function calculaBeta(tensao, peso, alpha) {
  let beta = arccos((peso * 9.8 * sin(alpha)) / tensao);
  return beta;
}

function myLerpFunction(n, target, speed) {
  if (abs(target - n) < speed) {
    return target;
  }
  return lerp(n, target, speed);
}
