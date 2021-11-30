const bool1 = true;
const bool2 = false;
const bool3 = !bool2; // true

let resultado = bool1 && bool2;
console.log('a. ', resultado); // false

resultado = bool1 && bool2 && bool3;
console.log('b. ', resultado); // false

resultado = !resultado && (bool1 || bool2);
console.log('c. ', resultado); // true

console.log('d. ', typeof resultado); // boolean

//******************************** */

let primeiroNumero = Number(prompt('Digite um numero!'));
let segundoNumero = Number(prompt('Digite outro numero!'));

const soma = primeiroNumero + segundoNumero;

console.log(soma);

//Resposta: O amigo não converteu para Number, está sendo feita a concatenação de Strings

//******************************** */

const idadeUser = Number(prompt('Informe sua idade: '));
const idadeAmigo = Number(prompt('Informe a idade do seu melhor amigo: '));

const usuarioMaisVelho = idadeUser > idadeAmigo;
console.log(
  'Sua idade é maior do que a do seu melhor amigo?',
  usuarioMaisVelho
);

const quemEhMaisVelho = idadeUser - idadeAmigo;
console.log(
  'A diferença de idade entre você e seu amigo é de:',
  quemEhMaisVelho,
  ' anos.'
);

//******************************** */

const numeroPar = Number(prompt('Informe um numero par:'));

const ehParMesmo = numeroPar % 2;

console.log('O resto da divisão de', numeroPar, 'é ', ehParMesmo);
//O resto do número par por 2 é 0 e quando é digitado um número ímpar, retorna resto 1.
//******************************** */

const idadeUsuario = Number(prompt('Informe sua idade: '));
const ano = 12;
const dias = 30;
const horas = 24;
const idadeEmMeses = idadeUsuario * ano;
const idadeEmDias = idadeUsuario * ano * dias;
const idadeEmHoras = idadeUsuario * ano * dias * horas;

console.log('Idade em meses: ', idadeEmMeses);
console.log('Idade em dias: ', idadeEmDias);
console.log('Idade em horas: ', idadeEmHoras);

//******************************** */

const numeroUsuario1 = Number(prompt('Informe um número: '));
const numeroUsuario2 = Number(prompt('Informe outro número: '));

const primeiroMaiorQueSegundo = numeroUsuario1 > numeroUsuario2;
console.log('O primeiro numero é maior que segundo?', primeiroMaiorQueSegundo);

const primeiroIgualSegundo = numeroUsuario1 === numeroUsuario2;
console.log('O primeiro numero é igual ao segundo?', primeiroIgualSegundo);

const primeiroDivisivelSegundo = numeroUsuario1 % numeroUsuario2 === 0;
console.log(
  'O primeiro numero é divisível pelo segundo?',
  primeiroDivisivelSegundo
);

const segundoDivisivelPrimeiro = numeroUsuario2 % numeroUsuario1 === 0;
console.log(
  'O segundo numero é divisível pelo primeiro?',
  segundoDivisivelPrimeiro
);
