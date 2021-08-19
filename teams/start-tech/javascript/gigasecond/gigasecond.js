//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = function(dataReferencia) 
{
  var dataEmMilisegundos = dataReferencia.getTime(); // pegando n. de milisegundos da dataReferencia desde 1970
  var dataEmGigasegundos = dataEmMilisegundos + 1e9 * 1000; // somando 1 gigasegundo (10^9 segundos) * 1000 (pra transformar em milisegundos)
  return new Date(dataEmGigasegundos); // transformando n. de milisegundos (dataEmGigaSegundos) em um objeto Date
};
