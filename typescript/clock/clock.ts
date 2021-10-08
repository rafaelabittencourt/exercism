export class Clock {
  horas: number;
  minutos: number;

  constructor(hour: number, minute: number = 0) { // ou minute?: number
    this.horas = this.ajustarHora(hour, minute??= 0); // quando minute for undefined, atribui valor 0
    this.minutos = this.ajustarMinutos(minute??= 0);
  }

  ajustarMinutos(minute: number): number {
    let minutos: number;
    minutos = minute % 60; // retorna o resto da divisão de minutos por 60

    if (minutos < 0) {
      minutos = minutos + 60;
    }
    
    return minutos;
  }

  ajustarHora(hour: number, minute: number): number {
    let horas: number = hour;
    horas += Math.trunc(minute / 60); // Math.trunc retorna a parte inteira descartando as casas decimais

    // se o resto da divisão de minutos por 60 for negativo, deve subtrair uma hora:  
    if (minute % 60 < 0) { 
      horas --;
    }

    horas = horas % 24;

    if (horas < 0) {
      horas = 24 + horas;
    }

    return horas;
  }

  public toString(): string {
    return `${this.horas.toString().padStart(2, '0')}:${this.minutos.toString().padStart(2, '0')}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.horas, this.minutos + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.horas, this.minutos - minutes);
  }

  public equals(other: Clock): boolean {
    return (this.horas == other.horas && this.minutos == other.minutos);
  }
}
