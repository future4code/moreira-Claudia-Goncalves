// const filme = {
//   nome: "Auto da Compadecida",
//   ano: 2000,
//   elenco: [
//     "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
//     "Virginia Cavendish"
//   ],
//   transmissoesHoje: [
//     { canal: "Telecine", horario: "21h" },
//     { canal: "Canal Brasil", horario: "19h" },
//     { canal: "Globo", horario: "14h" }
//   ]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//RESPOSTA: 
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h

// ------------------------------------------------

// const cachorro = {
//   nome: "Juca",
//   idade: 3,
//   raca: "SRD"
// }

// const gato = { ...cachorro, nome: "Juba" }

// const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//RESPOSTA: 
// console.log(cachorro)
// nome: "Juca", 
// idade: 3, 
// raca: "SRD"

//console.log(gato)
//Jubo

// console.log(tartaruga)
// nome: "Juca",
//   idade: 3,
// raca: "SRD"
// Jubo


// ------------------------------------------------

const pessoa = {
  nome: "Claudia",
  apelido: ["Dinha", "Cacau", "Ursinha"]
};

function dadosPessoa(pessoa) {
  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]}, ${pessoa.apelido[2]}`)
}

dadosPessoa(pessoa)

// ------------------------------------------------



// ------------------------------------------------



// ------------------------------------------------



// ------------------------------------------------