//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(numero) {
    this.numero = numero;
  }

  get sumOfSquares() {
    let n = 0; // iniciando contador
    var soma = 0; // iniciando soma a partir de 0

  while (n <= this.numero) {
    soma += Math.pow(n, 2); // soma dos quadrados
    n++;
  }
  return soma;
  }

  get squareOfSum() {
    let n = 0; 
    var quadrado = 0; 

  while (n <= this.numero) {
    quadrado += n;
    n++;
  }
  var quadradoSoma = Math.pow(quadrado, 2); // quadrado da soma
  return quadradoSoma;
  }

  get difference() {
  var soma = this.sumOfSquares;
  var quadradoSoma = this.squareOfSum; 

  var diferenca = quadradoSoma - soma // diferença entre quadrado da soma e soma dos quadrados
  return diferenca;
  }
}
