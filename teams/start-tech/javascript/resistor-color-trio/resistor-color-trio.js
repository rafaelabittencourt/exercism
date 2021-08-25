//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColorTrio {
  // armazenar as cores no this
  constructor(...cor) {
    this.cor = cor[0]; 
  };

  get label() { 
    var listaDeCores = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9
    };

    // 1o passo) juntar as 2 primeiras cores gerando a primeira parte do número:
    var valores = +('' + listaDeCores[this.cor[0]] + listaDeCores[this.cor[1]]); 
    // 2o passo) multiplicar as 2 cores pela 3a, que deve ser convertida em potência de 10 (= n. de 0 do número):
    var resultado = valores*(10**(listaDeCores[this.cor[2]])); 
    // erro: se o resultado for NaN, diz que a cor é inválida
    if (Number.isNaN(resultado)) throw new Error('invalid color'); 
    // 3o passo) juntar tudo, observando a questão dos ohms e kiloohms
    var menosDeMil = "Resistor value: " + resultado + " ohms"; // se for menor que mil, usa ohms
    var maisDeMil = "Resistor value: " + (resultado/1000) + " kiloohms"; // se for maior que mil, usa kiloohms

    if(0 < resultado && resultado <= 999){
      return menosDeMil;
    }
    else if(resultado > 999){
      return maisDeMil;
    };
  };
};
