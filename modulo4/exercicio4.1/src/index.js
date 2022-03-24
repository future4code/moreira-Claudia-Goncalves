//Exercício 4

// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node ?
//   node src / index.js[variavel]

// b)
const nome = (process.argv[2]).required()
const idade = Number(process.argv[3])
const mensagem = (`Olá, ${nome}! Você tem ${idade} anos`)
console.log(mensagem)