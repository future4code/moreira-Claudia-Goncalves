//Exercício 1

//a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// node src/index.js [variavel]

//b)
// const nome = (process.argv[2])
// const idade = Number(process.argv[3])
// const mensagem = (`Olá, ${nome}! Você tem ${idade} anos`)
// console.log(mensagem)

//c)
// const novaIdade = (idade + 7)
// const mensagem = (`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)
// console.log(mensagem)

//---------------------------------------------------

//Exercício 2

// const operacao = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// const operacoes = () => {
//   switch (operacao) {
//     case "soma":
//       return `A soma de ${num1} + ${num2} = ${num1 + num2}`;
//       break;
//     case "subtracao":
//       return `A subtracao de ${num1} - ${num2} = ${num1 - num2}`;
//       break;
//     case "multiplicacao":
//       return `A multiplicacao de ${num1} * ${num2} = ${num1 * num2}`;
//       break;
//     case "divisao":
//       return `A divisao de ${num1} / ${num2} = ${num1 / num2}`;
//       break;
//   }
// }
// console.log(operacoes())

//---------------------------------------------------

//Exercício 2

const listaDeTarefas = ['arrumar a casa', 'colocar ração para os gatos']
const listaDeTarefasAtualizada = listaDeTarefas.push(process.argv[2])

console.log(listaDeTarefasAtualizada)

