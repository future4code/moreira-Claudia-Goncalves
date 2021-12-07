// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//RESPOSTA
//a) Explique o que o código faz. Qual o teste que ele realiza? 
//ele testa se o numero digitado pelo usuário possui ou não resto da divisão por 2 = 0
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//numeros pares
//c) Para que tipos de números a mensagem é "Não passou no teste"? 
//numeros impares

//----------------------------------------------------------------

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//RESPOSTA
//a) Para que serve o código acima?
//serve para selecionar uma determinada fruta e exibir seu nome e preço
//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//O preço da fruta Maçã é R$ 2.25
//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//Pêra passaria a ter o valor default

//----------------------------------------------------------------

// const numero = Number(prompt("Digite o primeiro número."))

// if (numero > 0) {
//   console.log("Esse número passou no teste")
//   let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//RESPOSTA
//a) O que a primeira linha está fazendo?
//Está pedindo ao usuário que digite um número
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//10 = Esse número passou no teste / -10 = erro pois não há condicional para numero negativo.
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//haverá erro pois a variavel mensagem foi declarada dentro da condicional

//----------------------------------------------------------------

// const idadeUsuario = Number(prompt("Informe a sua idade: "))

// if (idadeUsuario >= 18) {
//   console.log("Você pode dirigir")
// } else {
//   console.log("Você não pode dirigir")
// }

//----------------------------------------------------------------

//const turnoAluno = prompt("Informe o turno que você estuda:[M] [V] [N]")

// if (turnoAluno === "M") {
//   console.log("Bom dia")
// } else if (turnoAluno === "V") {
//   console.log("Boa tarde")
// } else {
//   console.log("Boa noite")
// }

// 


//----------------------------------------------------------------

// const generoFilme = prompt("Informe o gênero do filme:")
// const valorIngresso = Number(prompt("Informe o valor do ingresso"))

// if ((generoFilme === "Fantasia") && (valorIngresso < 15)) {
//   const lanchinho = (prompt("Informe um lanchinho"))
//   console.log(`Bom Filme! E aproveite o seu ${lanchinho}`)
// } else {
//   console.log("Escolha outro filme :(")
// }

//----------------------------------------------------------------
const nomeCompleto = prompt("Informe seu nome completo")
const tipoJogo = prompt("Informe o tipo de jogo: [IN] Internacional / [DO] doméstico")
const etapaJogo = prompt("Informe a etapa do jogo: [SF}")
//----------------------------------------------------------------

//----------------------------------------------------------------