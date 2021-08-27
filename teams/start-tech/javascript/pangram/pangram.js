//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (frase) => {
  if (frase === '') {
    return false
  }

  const minusculas = frase.toLowerCase();
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // poderia usar RegEx também
  const caracteres = minusculas.split("");

  for (let letra of alfabeto) {
    if (!caracteres.includes(letra)) {
      return false;
    }
  }
  return true;
};
