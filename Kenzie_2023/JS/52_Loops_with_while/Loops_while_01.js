let escolha = parseInt(prompt("Digite o código do produto ou 0 para sair"))
let valorTotalDoPedido = 0
let quantidade = 0
while(escolha != 0){
    if(escolha == 100){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.20
    }else if(escolha == 101){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.30
    }else if(escolha == 102){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.50

    }else if(escolha == 103){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.20

    }else if(escolha == 104){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.30
    }else{
        alert('Produto indisponível')
    }
    escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"))
}
alert(`Seu pedido ficou em ${valorTotalDoPedido}`)