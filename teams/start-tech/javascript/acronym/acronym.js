//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (frase) => {
  // retirar caracteres especiais da frase:
  const tiraCaracteresEspeciais = frase.replace('_', '');
  
  // separar palavras da frase:
  var separaPalavras = tiraCaracteresEspeciais.split(" ").filter(w => w).filter(w => w !== '-');

  // criar array vazio para guardar as primeiras letras:
  var primeirasLetras = '';

  // para cada palavra do array...
  for (let palavra of separaPalavras) { 
    // ...separar subpalavra com hífen (caso do "metal-oxide"):
    palavra.split('-').forEach(subpalavra => { 
      // ...e deixar a primeira letra de cada maiúscula:
      primeirasLetras += subpalavra.charAt(0).toUpperCase();
    })

    }  
    return primeirasLetras;
};
