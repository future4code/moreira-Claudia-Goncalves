enum Setor {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro"
}

type colaboradores = {
  nome: string,
  salario: number,
  setor: string,
  presencial: boolean
}

const funcionarios = [
  { nome: "Marcos", salario: 2500, setor: Setor.MARKETING, presencial: true },
  { nome: "Maria", salario: 1500, setor: Setor.VENDAS, presencial: false },
  { nome: "Salete", salario: 2200, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: Setor.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: Setor.VENDAS, presencial: true },
]

const funcionariosMarketing = funcionarios.filter((item) => {
  return item.setor === Setor.MARKETING
})

console.log(funcionariosMarketing)
// Considerando o array acima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este array como parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 