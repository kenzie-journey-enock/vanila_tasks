/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2){
  if(player1 == player2){
    return "Empate!"
  }
  if(player1 == 'Pedra'){
    return player2 == 'Papel' ? "Jogador 2 venceu!" : "Jogador 1 venceu!"
  }
  if(player1 == 'Tesoura'){
    return player2 == 'Papel' ? "Jogador 1 venceu!" : "Jogador 2 venceu!"
  }
  return player1 == 'Papel' && player2 == 'Pedra' ? "Jogador 1 venceu!" : "Jogador 2 venceu!"
}