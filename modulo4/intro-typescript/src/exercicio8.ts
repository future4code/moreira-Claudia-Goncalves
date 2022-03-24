// Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .


let entrada = "abcd";
let entradaInvertida = entrada.split("").reverse().join("");
console.log(entradaInvertida);