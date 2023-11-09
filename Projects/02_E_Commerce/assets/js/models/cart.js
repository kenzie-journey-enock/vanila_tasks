function createCart(){
  const containerCart = document.createElement('div')
  containerCart.className = 'container-cart'

  const cartTop = document.createElement('div')
  cartTop.className = 'top-cart'
  const cartTitle = document.createElement('h3')
  cartTitle.innerText = 'Carrinho de compras'
  cartTop.appendChild(cartTitle)

  const cartBody = document.createElement('div')
  cartBody.id = 'cart'
  cartBody.className = 'body-cart'
  if(listCart.length == 0){
    const warning = document.createElement('h2')
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

  containerCart.appendChild(cartTop)
  containerCart.appendChild(cartBody)

  return containerCart
}


function createCardProductInCart(product){
  const cardProductInCart = document.createElement('div')
  cardProductInCart.className = 'cart-product'
  cardProductInCart.id = `cart-product-${product.id}`

  const cardImg = document.createElement('div')
  cardImg.className = 'card-img-cart'
  cardImg.id = `cart-product-${product.id}`
  const imgProductCart = document.createElement('img')
  imgProductCart.src = product.img
  imgProductCart.alt = product.nameItem
  imgProductCart.id = `cart-product-${product.id}`
  cardImg.appendChild(imgProductCart)

  const cardInfo = document.createElement('div')
  cardInfo.className = 'card-info-cart'
  cardInfo.id = `cart-product-${product.id}`
  const titleProductCart = document.createElement('h2')
  titleProductCart.className = 'title-cart-product'
  titleProductCart.innerText = product.nameItem
  titleProductCart.id = `cart-product-${product.id}`
  const priceProductCart = document.createElement('span')
  priceProductCart.className = 'price-cart-product'
  priceProductCart.innerText = `$${product.value},00`
  priceProductCart.id = `cart-product-${product.id}`
  const btnRemove = document.createElement('button')
  btnRemove.className = 'btn-remove'
  btnRemove.innerText = 'Remover produto'
  btnRemove.id = `cart-product-${product.id}`
  btnRemove.addEventListener('click', eventListenerSideShop)
  cardInfo.appendChild(titleProductCart)
  cardInfo.appendChild(priceProductCart)
  cardInfo.appendChild(btnRemove)

  cardProductInCart.appendChild(cardImg)
  cardProductInCart.appendChild(cardInfo)

  return cardProductInCart
}

function eventListenerSideShop(evt){

  const target = evt.target
  const targetId = parseInt(target.getAttribute("id").split('-')[2])
  removeFromCart(targetId)
}
