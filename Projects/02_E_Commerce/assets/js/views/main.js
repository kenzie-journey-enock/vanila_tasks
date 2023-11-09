const main = document.getElementById('root')

function createShowcase(){
  const showcase = document.createElement('div')
  showcase.className = 'showcase'
  for (i in data){
    const cardProduct = createProduct(data[i]) 
    showcase.appendChild(cardProduct)
  }
  return showcase
}

const showcaseMain = createShowcase()

function createSideShop(){
  const sideShop = document.createElement('div')
  sideShop.className = 'side-shop'

  sideShop.appendChild(createSearch())
  sideShop.appendChild(createCart())
  
  return sideShop

}

const sideShopMain = createSideShop()

main.appendChild(showcaseMain)
main.appendChild(sideShopMain)


showcaseMain.addEventListener("click", eventListenerShowcase)
function eventListenerShowcase(evt){
  const target = evt.target
  const targetId = parseInt(target.getAttribute("id").split('-')[1])

  addToCart(targetId)
}
