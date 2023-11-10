function createImgProduct(id, img, nameItem){
  let cardImgProduct = document.createElement('div')
  cardImgProduct.className = 'card-img'
  cardImgProduct.id = `product-${id}`
  const imgProduct = document.createElement('img')
  imgProduct.src = img
  imgProduct.alt = nameItem
  imgProduct.role = 'image'
  imgProduct.id = `product-${id}`
  cardImgProduct.appendChild(imgProduct)
  return cardImgProduct
}

function createInfoProduct(id, tag, nameItem, description, value, addCart){
  let cardInfoProduct = document.createElement('div')
  cardInfoProduct.className = 'card-info'
  cardInfoProduct.id = `product-${id}`
  const tagProduct = document.createElement('span')
  tagProduct.className = 'tag'
  tagProduct.innerText = tag
  tagProduct.id = `product-${id}`
  const titleProduct = document.createElement('h2')
  titleProduct.className = 'title'
  titleProduct.innerText = nameItem
  titleProduct.id = `product-${id}`
  const descriptionProduct = document.createElement('p')
  descriptionProduct.className = 'description'
  descriptionProduct.innerText = description
  descriptionProduct.id = `product-${id}`
  const cardValueProduct = document.createElement('div')
  cardValueProduct.className = 'card-value'
  cardValueProduct.id = `product-${id}`
  const valueProduct = document.createElement('span')
  valueProduct.className = 'value'
  valueProduct.innerText = `$${value},00`
  valueProduct.id = `product-${id}`
  cardValueProduct.appendChild(valueProduct)
  const btnAddCart = document.createElement('button')
  btnAddCart.className = 'btn-add-cart'
  btnAddCart.innerText = addCart
  btnAddCart.id = `product-${id}`

  cardInfoProduct.appendChild(tagProduct)
  cardInfoProduct.appendChild(titleProduct)
  cardInfoProduct.appendChild(descriptionProduct)
  cardInfoProduct.appendChild(cardValueProduct)
  cardInfoProduct.appendChild(btnAddCart)

  return cardInfoProduct
}

function createProduct(product){
  const { id, img, nameItem, description, value, addCart, tag} = product
  const cardProduct = document.createElement('div')
  cardProduct.className = 'card-product'
  cardProduct.id = `product-${id}`

  cardProduct.appendChild(createImgProduct(id, img, nameItem))
  cardProduct.appendChild(createInfoProduct(id, tag, nameItem, description, value, addCart))

  return cardProduct
}

function createProductInCart(product){
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



