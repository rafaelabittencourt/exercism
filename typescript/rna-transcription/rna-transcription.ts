enum dnaBasis { // criei o tipo dnaBasis
  G = 'C',
  C = 'G',
  T = 'A',
  A = 'U',
}

type keyDna = keyof typeof dnaBasis; // criei o tipo keyDna, cujas possibilidades são 'G', 'C', 'T', 'A'

export function toRna(dna:string): string {
  // temos: 'ACGTGGTCTTAA'

  const dnaArray: string[] = dna.split('');
  // agora temos: ['A', 'C', 'G', 'T', 'G', 'G', 'T', 'T', 'A', 'A']
  
  const traducaoArray: string[] = dnaArray.map((key: string) => dnaBasis[<keyDna>key]); /* conversão de tipo: para fazer a tradução (ex.: A => 'U') preciso converter a chave 'A' que temos
                                                                                         para A (v. dnaBasis), portanto, vou transformar do tipo string para o tipo keyDna que criamos acima */
  // agora temos: ['U', 'G', 'C', ...]

  const traducao: string = traducaoArray.join('');
  // agora temos: 'UGC...'

  if (traducao.length !== dna.length) throw new Error('Invalid input DNA.');

  return traducao;
} 

// outra possibilidade seria, ao invés de usar split e map, usar for e if
