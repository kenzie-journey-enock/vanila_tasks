const header = document.createElement('header')
// header.innerText = 'TODO header'

const containerLogo = document.createElement('div')
containerLogo.className = 'logo'

const logo = document.createElement('h1')
logo.innerText = "My Task's"
containerLogo.appendChild(logo)

const formSearch = document.createElement('form')
formSearch.className = 'search'

const iconSearch = document.createElement('i')
iconSearch.className = 'fa fa-search icon'
formSearch.appendChild(iconSearch)

const inputSearch = document.createElement('input')
inputSearch.placeholder = 'Search task'
inputSearch.type = 'text'
formSearch.appendChild(inputSearch)

header.appendChild(containerLogo)
header.appendChild(formSearch)