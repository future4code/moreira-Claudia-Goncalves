// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Informe um valor para altura'))
  const largura = Number(prompt('Informe um valor para largura'))
  const calculaAreaRetangulo = altura * largura
  console.log(calculaAreaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Informe o ano atual'))
  const anoNascimento = Number(prompt('Informe o seu ano de nascimento'))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt('Informe seu nome')
  const idadeUsuario = Number(prompt('Informe sua idade'))
  const emailUser = prompt('Informe seu email')
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUser}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Infome cor 1')
  const cor2 = prompt('Infome cor 2')
  const cor3 = prompt('Infome cor 3')
  const cores = [cor1, cor2, cor3]
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const letraMaiuscula = string.toUpperCase();
  return letraMaiuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const semPrejuizo = custo / valorIngresso
  return semPrejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const checaTamanho = string1.length === string2.length
  return checaTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElementoArray = array[0]
  return primeiroElementoArray
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElementoArray = array
  const ultimoElemento = ultimoElementoArray[ultimoElementoArray.length - 1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let array = array.push(array[0])
  array = array.splice(0, 1)
  arrayo = array.unshift(array[array.length - 2])
  array = array.splice(array.length - 2, 1)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const saoIguais = string1.toLowerCase()
    === string2.toLowerCase()

  return saoIguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Informe o ano atual:'))
  const anoNascimento = Number(prompt('Informe seu ano de nascimento'))
  const anoEmissaoRg = Number(prompt('Informe o ano de emissao do seu RG'))
  const idade = anoAtual - anoNascimento
  const tempoEmissaoRg = anoAtual - anoEmissaoRg
  const pessoas20anos = idade <= 20 && tempoEmissaoRg >= 5
  const pessoas20e50anos = (idade >= 21 && idade <= 50) && tempoEmissaoRg >= 10
  const pessoas50ouMais = (idade >= 51) && tempoEmissaoRg >= 15

  console.log(pessoas20anos)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = (ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)
  return bissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}