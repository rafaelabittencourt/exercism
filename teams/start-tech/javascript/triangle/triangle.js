//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { loadOptions } from "@babel/core"

export class Triangle {
  constructor(a, b, c) { // triângulo com lados a, b e c
    this.a = a;
    this.b = b;
    this.c = c;

    const regraExistencia = (this.a > 0) && (this.b > 0) && (this.c > 0); // lados tem que ser maior que 0
    this.trianguloExiste = regraExistencia;
  }

  get isEquilateral() {
    if (!this.trianguloExiste) return false;

    if (this.a === this.b && this.a === this.c) { // todos os lados são iguais
      return true;
    } else {
      return false;
    }
  }

  get isIsosceles() {
    if (!this.trianguloExiste) return false;

    if (this.a === this.b || this.a === this.c || this.c === this.b) { // pelo menos dois lados são iguais
      if (this.b + this.c < this.a || this.a + this.c < this.b || this.b + this.a < this.c) { // garantindo a desigualdade de triângulos
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  get isScalene() {
    if (!this.trianguloExiste) return false;

    if (this.a !== this.b && this.b !== this.c && this.a !== this.c) { // todos os lados são diferentes
      if (this.b + this.c < this.a || this.a + this.c < this.b || this.b + this.a < this.c) { // garantindo a desigualdade de triângulos
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
};
