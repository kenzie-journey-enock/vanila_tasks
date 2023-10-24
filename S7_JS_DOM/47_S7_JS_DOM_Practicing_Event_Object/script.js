let product = {
  name: 'Notebook',
  value: 3000.00,
  settlement: true,
  distributor: 'kenzie.com.br'
}

const container = document.getElementById('root')

const title = document.createElement('h1')
title.innerText = product.name
title.className = 'title'
container.appendChild(title)

const price = document.createElement('h2')
price.innerText = `$${product.value},00`
price.className = 'price'
container.appendChild(price)

const containerSale = document.createElement('div')
containerSale.className = 'container-sale'

const saleOff = document.createElement('h2')
saleOff.innerText = product.settlement ? 'On Sale' : 'Not on sale'
saleOff.className = 'sale'
containerSale.appendChild(saleOff)

const salePrice = document.createElement('span')
salePrice.innerText = `Today for just: $${ product.value - product.value * 0.3 },00`
salePrice.className = 'sale-price'

containerSale.appendChild(salePrice)

saleOff.onclick = () => {
  salePrice.className == 'sale-price' ? 
  salePrice.className = 'sale-price-hide' 
  : 
  salePrice.className = 'sale-price'
}

container.appendChild(containerSale)

const link = document.createElement('a')
link.innerText = product.distributor
link.href = `https://${product.distributor}`
link.target='_blank'

const shop = document.createElement('span')
shop.innerText = `Manufacturer: `
shop.className = 'shop'
shop.appendChild(link)
container.appendChild(shop)

document.querySelector('body').appendChild(container)
