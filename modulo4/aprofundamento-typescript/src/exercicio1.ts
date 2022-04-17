// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//Apresenta erro pois um número não pode ser atribuído a uma variável do tipo string
// const minhaString: string = 9

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
const meuNumero: number | string = "219743"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

const pessoa: { nome: string, idade: number, corFavorita: string } = {
  nome: "Claudia",
  idade: 31,
  corFavorita: "roxo"
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
type pessoas = {
  nome: string,
  idade: number,
  corFavorita: string
}

enum CoresFavoritas {
  VERMELHA = "vermelha",
  LARANJA = "laranja",
  AMARELA = "amarela",
  VERDE = "verde",
  AZUL = "azul",
  AZULESCURO = "azul-escuro",
  VIOLETA = "violeta"
}

const pessoa1: pessoas = {
  nome: "Adriano",
  idade: 33,
  corFavorita: CoresFavoritas.AZUL
}

const pessoa2: pessoas = {
  nome: "Gabriel",
  idade: 2,
  corFavorita: CoresFavoritas.AMARELA
}

const pessoa3: pessoas = {
  nome: 'Isabela',
  idade: 2,
  corFavorita: CoresFavoritas.VERMELHA
}
// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
