export class Gigasecond {
  private readonly dateInMiliseconds: number;
  // não quer que ngm acesse essa variável pq ela é uma propriedade interna da classe, já o readonly vai garantir que ngm mexa mais depois que for para o construtor

  public constructor(initialDate: Date) {
    // construtor é como se fosse uma função molde, nesse caso pegando o parâmetro que foi dado de data inicial
    this.dateInMiliseconds = initialDate.getTime(); 
    // o método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal
  }

  public date(): Date {
    return new Date(this.dateInMiliseconds + 1e12); // tem que transformar em milisegundos
  }
}

/* outra possibilidade:

export class Gigasecond {
  private readonly dateInMiliSeconds: number;
  private correctDate: Date = new Date();

  public constructor(initialDate: Date) {
    this.dateInMiliSeconds = initialDate.getTime();
  }

  private calculeDate(): void { // quando a função não retorna nada, usamos void (vazio)
    this.correctDate = new Date(this.dateInMiliSeconds + 1e12);
  }
  
  public date(): Date {
    this.calculeDate();
    return this.correctDate;
  }
}

*/