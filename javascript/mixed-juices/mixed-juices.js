export function timeToMixJuice(name) {
  let tempo;
  switch (name) {
    case 'Energizer':
    case 'Green Garden':
      tempo = 1.5; 
    break;
    case 'Pure Strawberry Joy':
      tempo = 0.5;
    break;
    case 'Tropical Island':
      tempo = 3;
    break;
    case 'All or Nothing':
      tempo = 5;
    break;
    default:
      tempo = 2.5;  
  }
  return tempo;
}

export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let contador = 0;
  let n = 0;
  while (wedges < wedgesNeeded && contador < limes.length) {
    switch (limes[contador]) {
      case 'small':
        n = 6;
      break;
      case 'medium':
        n = 8;
      break;
      case 'large':
        n = 10;
      break;
    }
    contador++;
    wedges += n;
  }
  return contador;
}

export function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(orders.shift());
  }
  while (timeLeft > 0 && orders.length > 0);
  return orders;
}
