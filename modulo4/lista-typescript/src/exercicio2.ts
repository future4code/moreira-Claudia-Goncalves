// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

const recebendoParametro = (dado: any): void => {
  console.log(typeof dado)
}

recebendoParametro("Claudia")
recebendoParametro(1990)
recebendoParametro(true)
