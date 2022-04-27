class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number,
    // balance: number,
    // transactions: Transaction[]

  ) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
    // this.balance = balance;
    // this.transactions = transactions

  }

  getName() {
    return (this.name);
  }

  getCpf() {
    return (this.cpf)
  }

  getAge() {
    return (this.age)
  }

  // getBalance() {
  //   return (this.balance)
  // }

  // getTransactions() {
  //   return (this.transactions)
  //}
}

// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
//Serve para habilitar a utilização das propriedades
//Para utilizar devo chamar this.nome_da_propriedade

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
// 1 vez
const chamandoAClasse = new UserAccount("132-969-132-09", "Gabriel", 32)

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
//criando um método GET
//console.log(chamandoAClasse.getName())


// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(
    date: string,
    value: number,
    description: string,
  ) {
    this.date = date;
    this.value = value;
    this.description = description;
  }

  getDate(): string {
    return (this.date);
  }

  getValue(): number {
    return (this.value);
  }

  getDescription(): string {
    return (this.description);
  }
}

const transactions = new Transaction("30/08", 1500, "boa tarde")
console.log(transactions.getValue())


class Bank {
  private accounts: UserAccount[];

  constructor(
    accounts: UserAccount[],
  ) {
    this.accounts = accounts
  }
}
