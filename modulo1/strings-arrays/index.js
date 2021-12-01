// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i + 1] = 19
// console.log('e. ', array)

// const valor = array[i + 6]
// console.log('f. ', valor)

//RESPOSTAS
// a.undefined
// b.null
// c. 11
// d.3
// e.
// f.9

//----------------------------------------------------------------
// const frase = prompt("Digite uma frase")
//"Subi num ônibus em Marrocos"
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI EM UM ONIBUS EM MIRROCOS

//----------------------------------------------------------------

// const email = prompt("Email:")
// const nomeUsuario = prompt("Nome: ")

// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)

//----------------------------------------------------------------

const comidasFavoritas = ["brigadeiro", "Lasanha", "strogonoff", "sorvete", "bolinha de queijo"]

console.log(comidasFavoritas)
console.log("Essas sao minhas comidas favoritas: ", comidasFavoritas)

const comidaFavoritaUsuario = prompt("Insira sua comida favorita")
console.log(comidasFavoritas.replaceAll(comidasFavoritas[1], comidaFavoritaUsuario))

//----------------------------------------------------------------