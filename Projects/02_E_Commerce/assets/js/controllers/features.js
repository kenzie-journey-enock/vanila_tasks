let listCart = []

function addToCart(productId){
  const filterProduct = data.find((product) => product.id == productId)
  const cart = document.getElementById('cart')

  if(filterProduct.stock > 0){
    listCart.push(filterProduct)
    cart.innerHTML = ''

    listCart.forEach(function(prod){
      const addedProduct = createCardProductInCart(prod)
      cart.appendChild(addedProduct)
    })
  }
}

function removeFromCart(productId){
  const filterProduct = listCart.find((product) => product.id == productId)
  const index = listCart.indexOf(filterProduct)

  const cart = document.getElementById('cart')
  listCart.slice(index, 1)

  console.log(filterProduct)
  cart.innerHTML = ''

  listCart.forEach(function(prod){
    const addedProduct = createCardProductInCart(prod)
    cart.appendChild(addedProduct)
  })
  
}