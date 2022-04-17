enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror"
}

const filmes = (nomeFilme: string, anoLancamento: number, GENERO: string, pontuacao?: number) => {
  return {
    nome: nomeFilme,
    anoLancamento: anoLancamento,
    genero: GENERO,
    pontuacao: pontuacao
  }
}

console.log(filmes("Titanic", 1996, GENERO.ROMANCE))
console.log(filmes("Avatar", 2005, GENERO.DRAMA, 9.1))
