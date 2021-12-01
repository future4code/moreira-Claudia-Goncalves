// const bool1 = true;
// const bool2 = false;
// const bool3 = !bool2; // true

// let resultado = bool1 && bool2;
// console.log('a. ', resultado); // false

// resultado = bool1 && bool2 && bool3;
// console.log('b. ', resultado); // false

// resultado = !resultado && (bool1 || bool2);
// console.log('c. ', resultado); // true

// console.log('d. ', typeof resultado); // boolean

// //******************************** */

// let primeiroNumero = Number(prompt('Digite um numero!'));
// let segundoNumero = Number(prompt('Digite outro numero!'));

// const soma = primeiroNumero + segundoNumero;

// console.log(soma);

// //Resposta: O amigo não converteu para Number, está sendo feita a concatenação de Strings

// //******************************** */

// const idadeUser = Number(prompt('Informe sua idade: '));
// const idadeAmigo = Number(prompt('Informe a idade do seu melhor amigo: '));

// const usuarioMaisVelho = idadeUser > idadeAmigo;
// console.log(
//   'Sua idade é maior do que a do seu melhor amigo?',
//   usuarioMaisVelho
// );

// const quemEhMaisVelho = idadeUser - idadeAmigo;
// console.log(
//   'A diferença de idade entre você e seu amigo é de:',
//   quemEhMaisVelho,
//   ' anos.'
// );

// //******************************** */

// const numeroPar = Number(prompt('Informe um numero par:'));

// const ehParMesmo = numeroPar % 2;

// console.log('O resto da divisão de', numeroPar, 'é ', ehParMesmo);
// //O resto do número par por 2 é 0 e quando é digitado um número ímpar, retorna resto 1.
// //******************************** */

// const idadeUsuario = Number(prompt('Informe sua idade: '));
// const ano = 12;
// const dias = 30;
// const horas = 24;
// const idadeEmMeses = idadeUsuario * ano;
// const idadeEmDias = idadeUsuario * ano * dias;
// const idadeEmHoras = idadeUsuario * ano * dias * horas;

// console.log('Idade em meses: ', idadeEmMeses);
// console.log('Idade em dias: ', idadeEmDias);
// console.log('Idade em horas: ', idadeEmHoras);

// //******************************** */

// const numeroUsuario1 = Number(prompt('Informe um número: '));
// const numeroUsuario2 = Number(prompt('Informe outro número: '));

// const primeiroMaiorQueSegundo = numeroUsuario1 > numeroUsuario2;
// console.log('O primeiro numero é maior que segundo?', primeiroMaiorQueSegundo);

// const primeiroIgualSegundo = numeroUsuario1 === numeroUsuario2;
// console.log('O primeiro numero é igual ao segundo?', primeiroIgualSegundo);

// const primeiroDivisivelSegundo = numeroUsuario1 % numeroUsuario2 === 0;
// console.log(
//   'O primeiro numero é divisível pelo segundo?',
//   primeiroDivisivelSegundo
// );

// const segundoDivisivelPrimeiro = numeroUsuario2 % numeroUsuario1 === 0;
// console.log(
//   'O segundo numero é divisível pelo primeiro?',
//   segundoDivisivelPrimeiro
// );

//=================================================//
//=============== D E S A F I O S =================//
//=================================================//

// const fahrenheit = 77;
// const kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
// console.log('77ºF em Kelvin = ', kelvin);

// const celsius = 80;
// const fahrenheit = celsius * (9 / 5) + 32;
// console.log('80ºC em fahrenheit = ', fahrenheit);

const celsius = 30;
const fahrenheit = celsius * (9 / 5) + 32;
const kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;

console.log('30ºC em Fahrenheit =', fahrenheit, 'º', '  e em Kelvin = ', kelvin, 'º');

const celsiusUsuario = Number(prompt('Informe uma temperatura para conversão:'));
console.log("temperatura:", celsiusUsuario, 'ºC em Fahrenheit =', fahrenheit, 'º', '  e em Kelvin = ', kelvin, 'º');

//******************************** */
const quilowat = 280
const quilowattHora = 0.05
const desconto = (15 / 100)
const valorTotalQuilowatt = quilowat * quilowattHora
const valorDescontoQuilowatt = (valorTotalQuilowatt * desconto)
const valorTotalQuilowattComDesconto = valorTotalQuilowatt - valorDescontoQuilowatt

console.log("Quilowatts residência: 280, valor a ser pago: R$", valorTotalQuilowatt)
console.log("valor a ser pago com desconto de 15%: R$", valorTotalQuilowattComDesconto)

//******************************** */
const libra = 20
const libraParaQuilograma = libra * 0.453592
console.log("20 libras equivalem a: ", libraParaQuilograma, "kg")

const onca = 10.5
const oncaParaQuilograma = (onca * 0.0283495)
console.log("10.5oz equivalem a: ", oncaParaQuilograma, "kg")

const milha = 100
const milhaParaMetro = (milha * 1609.34)
console.log("100 milhas equivalem a: ", milhaParaMetro, "metros")

const pes = 50
const pesParaMetro = (pes * 0.3048)
console.log("50 pés equivalem a : ", pesParaMetro, "metros")

const galao = 103.56
const galaoParaLitro = (galao * 3.78541)
console.log("103.56 gal equivalem a : ", galaoParaLitro, "litros")

const xicara = 450
const xicaraParaLitro = (xicara * 0.284131)
console.log("450 xícaras equivalem a: ", xicaraParaLitro, "litros")

const xicaraUsuario = Number(prompt('Informe um valor para quantidade de xícaras: '))
const xicaraParaLitroUsuario = (xicaraUsuario * 0.284131)
console.log("Olá, ", xicaraUsuario, " xícaras equivalem a: ", xicaraParaLitroUsuario, "litros")