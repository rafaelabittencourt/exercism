//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (texto) => {
  // 1o colocar em letra minúscula + encontrar palavras nas condições da RegEx
  const palavras =  texto.toLowerCase().match(/(\w+)('\w+)*/g) // RegEx = tudo que for palavra, com e sem '

  let resultado = {};
  for (let index = 0; index < palavras.length; index++) { 
      resultado[palavras[index]] ??= 0; //  se o que estiver à esq. for null ou undefined, = 0, senão, não faça nada
      resultado[palavras[index]] += 1;
  }
  return resultado;
};
