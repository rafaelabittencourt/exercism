//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna = '') => {
  // tradução do rna
  let translation = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };

  // regex para dividir cada terceira letra
  if (rna !== '') {
    let rnaArray = rna.match(/.{1,3}/g);
    let transArray = []; // esse array vai guardar a proteina traduzida

    // .every testa se todos os elementos do array passam pelo teste implementado pela função fornecida - interromper ao atingir um codon determinado 
    rnaArray.every((rna) => {
      if (translation[rna] === 'STOP') {
        return false;
      } else if (translation[rna] === undefined) {
        // erro se o codon não é um RNA válido 
        throw new Error('Invalid codon');
      } else {
        // .push adiciona no final do array
        transArray.push(translation[rna]);
        return true;
      }
    });

    // retorna a lista de proteinas traduzidas
    return transArray;
  } else {
    // se não tiver RNA listado entao não tem proteínas 
    return [];
  }
};


