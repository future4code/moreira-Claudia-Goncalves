const readline = require('readline');
let cor1 = "";
let cor2 = "";
let cor3 = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe a primeira cor:', function (resposta1: string): any {
  let cor1: string = resposta1;
  rl.close();
});

rl.question('Informe a segunda cor:', function (resposta2: string): any {
  let cor2: string = resposta2;
  rl.close();
});

rl.question('Informe a terceira cor:', function (resposta3: string): any {
  let cor3: string = resposta3;
  rl.close();
});

function imprimeTresCoresFavoritas(resposta1: string, resposta2: string, resposta3: string): any {
  const arrayDeCores: Array<string> = []

  arrayDeCores.push(cor1, cor2, cor3)

  return (arrayDeCores)
}

console.log(imprimeTresCoresFavoritas(cor1, cor2, cor3))
