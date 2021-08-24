//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// com objeto:

 const cores = {
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

export const colorCode = (cor) => {
  return cores[cor];
};

export const COLORS = Object.keys(cores); // Object.keys(obj) transforma meu objeto em array, = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

/* com array:

export const colorCode = (cor) => {
  return COLORS.findIndex(c => c === cor);
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]; 

*/
