const containerCart = document.createElement('div')
containerCart.className = 'container-cart'

const cartBody = document.createElement('div')
cartBody.id = 'cart'
cartBody.className = 'body-cart'

const cartTop = document.createElement('div')
cartTop.className = 'top-cart'

const cartTitle = document.createElement('h3')
cartTitle.innerText = 'Carrinho de compras'

const controlPainel = document.createElement('div')
controlPainel.className = 'control-painel'

cartTop.appendChild(cartTitle)
if(listCart.length == 0){
  createBodyCart()
}
containerCart.appendChild(cartTop)
containerCart.appendChild(cartBody)



function createBodyCart(){
    const warning = document.createElement('h2')
    warning.className = 'empty'
    warning.innerText = 'Carrinho vazio'

    const span = document.createElement('p')
    span.innerText = 'Adicione itens'

    const emptyCart = {
      warning,
      span
    }

    cartBody.appendChild(emptyCart.warning)
    cartBody.appendChild(emptyCart.span)
}



function createControlCart(){
  controlPainel.innerHTML = ''

  if(listCart.length == 0) return controlPainel.innerHTML = ''

  const control = countItensAndTotal(listCart)

  const quantityPainel = document.createElement('div')
  quantityPainel.className = 'quantity-painel'

  const titleQuantity = document.createElement('p')
  titleQuantity.className = 'title-quantity'
  titleQuantity.innerText = 'Quantidade:'

  const valueQuantity = document.createElement('p')
  valueQuantity.className = 'value-quantity'
  valueQuantity.innerText = control.quantity

  quantityPainel.appendChild(titleQuantity)
  quantityPainel.appendChild(valueQuantity)

  const totalPainel = document.createElement('div')
  totalPainel.className = 'total-painel'

  const titleTotal = document.createElement('p')
  titleTotal.className = 'title-total'
  titleTotal.innerText = 'Total:'

  const valueTotal = document.createElement('p')
  valueTotal.className = 'value-total'
  valueTotal.innerText = `$${control.total},00`

  totalPainel.appendChild(titleTotal)
  totalPainel.appendChild(valueTotal)

  controlPainel.appendChild(totalPainel)
  controlPainel.appendChild(quantityPainel)

  containerCart.appendChild(controlPainel)
}