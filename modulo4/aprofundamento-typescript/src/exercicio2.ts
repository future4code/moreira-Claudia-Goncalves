// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
function obterEstatisticas(numeros: number): number {

  const numerosOrdenados: number = numeros.sort(
    (a: number, b: number) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }
  {
    return estatisticas
  }

}