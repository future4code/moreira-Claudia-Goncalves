// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior

const operacoes = (num1: number, num2: number): void => {
  const soma: number = num1 + num2;
  console.log(`A soma de ${num1} + ${num2} = ${soma} `)

  const subtracao: number = num1 - num2;
  console.log(`A subtracao de ${num1} - ${num2} = ${subtracao} `)

  const multiplicacao: number = num1 * num2;
  console.log(`A multiplicacao de ${num1} * ${num2} = ${multiplicacao} `)

  const divisao: number = num1 / num2;
  console.log(`A divisao de ${num1} / ${num2} = ${divisao} `)
}

(operacoes(10, 2)) 