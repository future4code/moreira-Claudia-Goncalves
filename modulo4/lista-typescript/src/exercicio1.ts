// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
//"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const frase = (nome: string, dataNascimento: string): string => {
  const dataFormatada = dataNascimento.split("/")
  const dia = dataFormatada[0]
  const mes = dataFormatada[1]
  const ano = dataFormatada[2]
  return (`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
}
console.log(frase("Claudia", "30/08/1990"))