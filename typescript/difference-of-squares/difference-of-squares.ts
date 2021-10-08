/* QuadradoDaSoma => (1 + 2 + ... + N)² = 55² = 3025.
   SomadosQuadrados => 1² + 2² + ... + N² = 385.
   Solução = QuadradoDaSoma - somaDosQuadrados
*/

export class Squares {
  arrayN: number[]; // criando uma array para armazenar os números

  constructor(n: number) { // n = último/maior número
    this.arrayN = [];

    for (let item = 0; item <= n; item++) {
      this.arrayN.push(item); // armazenando os números até n nessa array 
      // ex.: arrayN = [1, 2, 3, 4, 5...n]
    }
  }

  get sumOfSquares(): number {
    /* para fazer a soma, usaremos reduce; ele executa uma callback para cada elemento do array, 
    resultando num único valor de retorno começando do 0 (padrão) ou do némero que você fornecer
    */
    return this.arrayN.reduce((soma, valor) => soma + valor ** 2); // soma dos valores ao quadrado
  }

  get squareOfSum(): number {
    // novamente, usando reduce para somar:
    return this.arrayN.reduce((soma, valor) => soma + valor) ** 2; // quadrado da soma toda
  }

  get difference(): number {
    // agora é só fazer a diferença:
    return this.squareOfSum - this.sumOfSquares;
  }
}
