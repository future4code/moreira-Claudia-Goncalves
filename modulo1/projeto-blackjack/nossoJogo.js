
console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   let somaCartasUsuario;
   let somaCartasComputador;

   const usuario = () => {
      let carta1 = comprarCarta();
      let carta2 = comprarCarta();
      somaCartasUsuario = carta1.valor + carta2.valor
      console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${somaCartasUsuario}`)
   }
   usuario()

   const computador = () => {
      let carta1 = comprarCarta();
      let carta2 = comprarCarta();

      somaCartasComputador = carta1.valor + carta2.valor
      console.log(`Computador - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${somaCartasComputador}`)
   }
   computador()

   const ganhador = () => {
      if (somaCartasUsuario > somaCartasComputador) {
         console.log(`O usuário ganhou!`)
      } else if (somaCartasUsuario < somaCartasComputador) {
         console.log(`O computador ganhou`)
      } else {
         console.log(`Empate!`)
      }
   }
   ganhador()
} else {
   console.log(`O jogo acabou!`)
}









/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *
 *
 *
 */