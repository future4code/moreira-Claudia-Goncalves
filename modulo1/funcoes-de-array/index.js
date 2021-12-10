// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//   console.log(item, index, array)
// })

//RESPOSTA
//a) O que vai ser impresso no console?
//{ nome: "Amanda Rangel", apelido: "Mandi" },0 
// { nome: "Laís Petra", apelido: "Laura" },1
// { nome: "Letícia Chijo", apelido: "Chijo", 2

// -------------------------------
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//   return item.nome
// })

// console.log(novoArrayB)

//RESPOSTA
//a) O que vai ser impresso no console?
// [Amanda Rangel , Laís Petra, Letícia Chijo]


// -------------------------------

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//   return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

//RESPOSTA
//a) O que vai ser impresso no console?
//  { nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" },


// -------------------------------

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
]

// const nomeDoguinhos = pets.map((item) => {
//   return item.nome
// })
// console.log(nomeDoguinhos)


// const dogSalsicha = pets.filter((item) => {
//   return item.raca === "Salsicha"
// })
// console.log(dogSalsicha)

const descontoPoodle = pets.filter((item) => {
  return item.raca === "Poodle"

  const nomeDesconto = pets.map((item) => {
    return item.nome
  })
  // console.log("Você ganhou um cupom de desconto de 10% para tosar o  " + item.nome)
})
console.log(descontoPoodle)



// -------------------------------


// -------------------------------


// -------------------------------