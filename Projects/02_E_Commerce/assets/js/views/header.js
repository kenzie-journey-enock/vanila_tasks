const header = document.getElementById('nav')

function createLogo(){
  const containerLogo = document.createElement('div')
  containerLogo.className = 'container-logo'
  const logoH1 = document.createElement('h1')
  if (shop.logo_img.length > 0){
    const logoIMG = document.createElement('img')
    logoIMG.src = shop.logo_img
    containerLogo.appendChild(logoIMG)
    return containerLogo
  }
  logoH1.innerText = shop.name
  containerLogo.appendChild(logoH1)
  return containerLogo
}

function createNav(){
  const containerNav = document.createElement('div')
  containerNav.className = 'container-nav'

  const nav = document.createElement('ul')
  nav.className = 'nav'

  for (i in shop.nav){
    const item = document.createElement('li')
    item.className = 'item'
    item.innerText = shop.nav[i]
    item.addEventListener('click', filterItensByCategory)
    nav.appendChild(item)
  }
  containerNav.appendChild(nav)
  return containerNav
}

header.appendChild(createLogo())
header.appendChild(createNav())