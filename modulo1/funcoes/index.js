// function minhaFuncao(variavel) {
//   return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a) O que vai ser impresso no console?
//10
//50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//não apareceria nada

//----------------------------------//

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function (texto) {
//   return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//essa função pede uma frase ao usuario e coloca o texto em letras minusculas e localiza na string se tem a palavra "cenoura"

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   Eu gosto de cenoura // true
// ii.  CENOURA é bom pra vista // true
// iii. Cenouras crescem na terra // true

//----------------------------------//
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// function meusDados() {
//   const nome = "Claudia"
//   const idade = 31
//   const cidade = "Rio de Janeiro"
//   const profissao = "estudante"
//   console.log(`Eu sou a ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
// }

// const meusDados = () => {
//   const nome = "Claudia"
//   const idade = 31
//   const cidade = "Rio de Janeiro"
//   const profissao = "estudante"
//   return(`Eu sou a ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
// }

// console.log (meusDados())


// const meusDados = (nome, idade, cidade, profissao) => {
//   console.log(`Eu sou a ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
//   return
// }
// meusDados("Claudia", 31, "Rio de Janeiro", "estudante")



//----------------------------------//

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// const soma = (num1, num2) => {
//   return (num1 + num2)
// }
// console.log(soma(7, 7))


// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// const soma1 = (numero1, numero2) => {
//   return numero1 >= numero2 || numero1 === numero2
// }
// console.log(soma1(5, 7))


// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// const ehPar = (numero) => {
//   return numero % 2 === 0
// }
// console.log(ehPar(5))


// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// const frase = (mensagem) => {
//   console.log(mensagem.toUpperCase())
//   console.log(mensagem.length)
// }
// (frase("Claudia"))


//----------------------------------//

// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// const num1 = Number(prompt("Informe o 1º número: "))
// const num2 = Number(prompt("Informe o 2º número: "))

// const adicao = (num1, num2) => {
//   console.log(num1 + num2)
// }
// adicao(num1, num2)


// const subtracao = (num1, num2) => {
//   console.log(num1 - num2)
// }
// subtracao(num1, num2)


// const multiplicacao = (num1, num2) => {
//   console.log(num1 * num2)
// }
// multiplicacao(num1, num2)


// const divisao = (num1, num2) => {
//   console.log(num1 / num2)
// }
// divisao(num1, num2)

//----------------------------------//

// 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

//     a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

const meuNumero = (numero) => {
  console.log(numero)
}
meuNumero(33)

//     b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

const soma = (num1, num2) => {
  console.log(num1 + num2)

}
soma(10, 5)


//----------------------------------//
// Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 

const pitagoras = (cat1, cat2) => {
  const hipotenusa = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2))
  return hipotenusa
}

console.log(pitagoras(100, 50))