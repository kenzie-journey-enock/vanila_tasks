const main = document.getElementById('root')

const showcase = document.createElement('div')
showcase.id = 'showcase'

listProducts(showcase, 'showcase', dataProducts, createProduct)

function createSideShop(search, cart){
  const sideShop = document.createElement('div')
  sideShop.className = 'side-shop'

  sideShop.appendChild(search)
  sideShop.appendChild(cart)
  
  return sideShop
}

const sideShopMain = createSideShop(formSearch, containerCart)

main.appendChild(showcase)
main.appendChild(sideShopMain)


showcase.addEventListener("click", eventListenerShowcase)
function eventListenerShowcase(evt){
  const target = evt.target
  const targetId = parseInt(target.getAttribute("id").split('-')[1])
  addToCart(targetId)
  createControlCart()
}


function eventListenerSideShop(evt){

  const target = evt.target
  if(target.tagName === 'BUTTON'){
    const targetId = parseInt(target.getAttribute("id").split('-')[2])
    removeFromCart(targetId)
    createControlCart()
  }
}