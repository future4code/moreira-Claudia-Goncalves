
export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User")
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }
  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  public introduceYourself(): string {
    return (`Olá, sou ${this.name}. Bom dia!`)
  }
}


export class Customer extends User {
  private creditCard: string;
  public purchaseTotal: number = 0;
  constructor(id: string, email: string, name: string, password: string, creditCard: string) {
    super(id, email, name, password)
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }
  public getCreditCard(): string {
    return this.creditCard;
  }
}

const user = new User("157", "carlinhos@email.com", "Carlos", "1325678")
console.log(user)

const customer = new Customer("5875", "cliente@email.com", "Juliana", "6565", "444-555-666-777")
console.log(customer)

//----------HERANÇA------------------
// ---------EXERCICIO1---------------
// a) Seria possível imprimir a senha (password) atrelada a essa instância?
//não, pois senha é um atributo private sem metodo de acesso
// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// 1 vez

// ---------EXERCICIO2---------------
// a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*
//1
// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
// 2, pq foi chamado tanto na classe user como customer

// ---------EXERCICIO3---------------
// Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).
console.log(customer.getId())
console.log(customer.getEmail())
console.log(customer.getName())
console.log(customer.getCreditCard())

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?
// não. pois nao tem método associado

// ---------EXERCICIO4---------------
// Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método
console.log(user.introduceYourself())
console.log(customer.introduceYourself())




//----------POLIMORFISMO------------------
// ---------EXERCICIO1---------------
export interface Client {
  name: string;
  // Refere-se ao nome do cliente
  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id
  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês
  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Jorge",
  registrationNumber: 546,
  consumedEnergy: 100,
  calculateBill: () => {
    return 2
  }
}

// ---------EXERCICIO1---------------
// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

// ---------EXERCICIO2---------------
export abstract class Place {
  constructor(protected cep: string) { }

  public getCep(): string {
    return this.cep;
  }
}

// a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
// Não é possível criar uma instancia de uma classe abstrata
// const place = new Place

// b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
// precisariamos que ela deixasse de ser uma classe abstrata ou criar uma classe filha e instanciar a partir dela

// ---------EXERCICIO3---------------
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa
    cep: string
  ) {
    super(cep);
  }

  getResidentes = () => { return this.residentsQuantity }
}
// 1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
const place = new Residence(3, "26566-140")
console.log(place)
console.log("cep residencia " + place.getCep())
console.log(place.getResidentes())
// 2) *Por que a `Place` não é uma interface?*
// pq é uma classe abstrata, criada para servir de base para classes herdeiras

// 3) *Por que a classe `Place` é uma Classe Abstrata?*
// pq ele ser apenas de "molde", nao pode ser instanciada


export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
}

const commerce = new Commerce(3, "36356-180")
console.log("cep comercio " + commerce.getCep())

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local 

    cep: string
  ) {
    super(cep);
  }
}

const industry = new Industry(2, "80560-180")
console.log("cep industria " + industry.getCep())
// ---------EXERCICIO4---------------

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string) {
    super(residentsQuantity, cep)
  }
  public getCpf = (): string => this.cpf

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}


class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string) {
    super(floorsQuantity, cep)
  }
  public getCpf = (): string => this.cnpj

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

// export interface Client {
//   name: string;
//   // Refere-se ao nome do cliente
//   registrationNumber: number;
//   // Refere-se ao número de cadastro do cliente na concessionária
//   // como se fosse um id
//   consumedEnergy: number;
//   // Refere-se à energia consumida pelo cliente no mês
//   calculateBill(): number;
//   // Retorna o valor da conta em reais
// }
// ---------EXERCICIO5---------------


// ---------EXERCICIO5---------------




















// class Animal {
//   private nome: string;
//   private idade: number;
//   private raca: string;
//   private tipo: string;

//   constructor(nome: string, idade: number, raca: string, tipo: string) {
//     this.nome = nome;
//     this.idade = idade;
//     this.raca = raca;
//     this.tipo = tipo;
//   }

//   som(tipo: string) {
//     if (tipo === "cachorro") {
//       console.log("au au")
//     } else {
//       console.log("miau")
//     }
//   }

//   idadeAnimal(idade: number) {
//     if (idade < 4) {
//       console.log("animal filhote")
//     }
//   }

//   getNome() {
//     return this.nome;
//   }

//   setNome(nome: string) {
//     return this.nome = nome;
//   }
// }


// export class Cachorro extends Animal {
//   constructor(nome: string, idade: number, raca: string, tipo: string) {
//     super(nome, idade, raca, tipo)
//   }
// }


// const animal = new Animal("Bolota", 5, "pastor alemao", "cachorro")
// animal.som("gato")
// animal.idadeAnimal(2)
// //
// // console.log(animal.nome)
// console.log(animal.getNome())

// // console.log(animal.nome)

// console.log(animal.setNome("Olivia"))

// console.log("verificando nome " + animal.getNome())