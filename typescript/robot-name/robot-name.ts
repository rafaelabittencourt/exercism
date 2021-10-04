export class Robot {
  // criando lista privada com o alfabeto (para prevenir de criar a lista toda vez que chamar a função, ja deixa ela declarada aqui):
  private readonly alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  // não precisa criar uma lista para os números pq o Math.random já vai gerar números aleatórios (mas se quisesse criar, poderia)

  // *essa lista abaixo foi criada depois para o passo do "resetName", usando um Set ao invés de array para já de antemão evitar repetições;
  // para esta lista vazia serão enviados os nomes gerados pela função generateName:
  private static nomes = new Set<string>();
  // **static => essa mesma lista serve para todos os robots, ou seja, todos de uma classe, então, lá embaixo, ao invés de usar this.nomes, vamos usar Robot.nomes

  private nome: string = '';
  constructor() { // criou um contrutor pq cada vez que for acionado vai criar um novo nome
    this.resetName();
  }
  
  private generateName(): string {
    let duasLetras = '';
    let tresNumeros = '';
    // loop for pra selecionar 2 letras da lista do alfabeto aleatórias:
    for (let i = 0; i < 2; i++) { // i < 2 pq tá contando a partir do 0 (quero 2: 0, 1)
      duasLetras += this.alfabeto[Math.floor(Math.random() * 26)]; // 26 pq o math random gera n. de [0,1] onde o 1 nunca cai, então como são 25 (0-25) posições do array, coloca um a mais 
    }
    // outro loop for para selecionar 3 números aleatórios:
    for (let i = 0; i < 3; i++) { // i < 3 pq tá contando a partir do 0 (quero 3: 0, 1, 2)
      tresNumeros += Math.floor(Math.random() * 10);
    }
    return duasLetras + tresNumeros; // pronto, foi gerado o nome!
  }

  public get name(): string { // usando get name aqui pq no teste ele usa Robot.name (classe.propriedade) pra acessar o nome
    return this.nome;
  }

  public resetName(): void {
    let newName = this.generateName();
    while (Robot.nomes.has(newName)) {
      newName = this.generateName();
    }
    Robot.nomes.add(newName);
    this.nome = newName;
  }

  public static releaseNames(): void {
    Robot.nomes.clear();
  }
}
