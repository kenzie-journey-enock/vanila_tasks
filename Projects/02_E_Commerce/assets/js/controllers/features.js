function addToCart(productId){
  const filterProduct = dataProducts.find((product) => product.id == productId)
  const cart = document.getElementById('cart')
  if(filterProduct.stock > 0){
    listCart.push(filterProduct)
    listProducts(cart, 'body-cart', listCart, createProductInCart)
  } else {
    console.log('stock empty')
  }
}

function removeFromCart(productId){
  const filterProduct = listCart.find((product) => product.id == productId)
  const index = listCart.indexOf(filterProduct)
  listCart.splice(index, 1)
  listProducts(cart, 'body-cart', listCart, createProductInCart)
  if(listCart.length == 0){
    createBodyCart()
  }
}

function listProducts(element, cla, products, callCreateProduct){
  element.innerHTML = ''
  element.className = cla
  for (p of products){
    const cardProduct = callCreateProduct(p) 
    element.appendChild(cardProduct)
  }
}

function countItensAndTotal(list){
  let total = 0
  for (i in list){
    total += list[i].value
  }
  return {
    quantity: list.length,
    total: total
  }
}

function filterItens(){
  let product
  let txtValue
  let search = document.getElementById('search')
  let filter = search.value.toUpperCase()
  let showcaseF = document.getElementById('showcase')
  let itens = showcaseF.getElementsByClassName('card-product')
  for(i = 0; i < itens.length; i++){
    product = itens[i].getElementsByClassName('title')[0]
    txtValue = product.innerText || product.textContent
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      itens[i].style.display = "";
    } else {
        itens[i].style.display = "none";
    }
  }
}

function filterItensByCategory(evt){
  const showcase = document.getElementById('showcase')
  if (evt.target.innerText.toUpperCase() == 'ALL'){
    const list = dataProducts

    listProducts(showcase, 'showcase', list, createProduct)
  } else {
    const productsByTag = dataProducts.filter((product)=>product.tag[0].toUpperCase() === evt.target.innerText.toUpperCase())
  
    listProducts(showcase, 'showcase', productsByTag, createProduct)
  }
}

