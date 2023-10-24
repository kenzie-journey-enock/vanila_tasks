const nav = window.document.createElement('nav')

const logo = window.document.createElement('div')
logo.className = 'logo'
const logoImg = window.document.createElement('img')
logoImg.src = 'assets/logo.svg'
logoImg.alt = 'Logo vida fruta'
logo.appendChild(logoImg)

const list = window.document.createElement('ul')
list.className = 'list'
const numberItens = 4
let itens = []
let listNames = ['Banana', 'Strawberry', 'Guava', 'Peach']
for (let i = 0; i < numberItens; i++){
  let item = window.document.createElement('li')
  itens.push(item)
}
for (let i = 0; i < itens.length; i++){
  itens[i].className = 'item'
  itens[i].innerText = listNames[i]
  list.appendChild(itens[i])
}

nav.appendChild(logo)
nav.appendChild(list)
window.document.querySelector('body').appendChild(nav)