function createSearch(){
  const formSearch = document.createElement('form')
  formSearch.className = 'form-search'


  const inputSearch = document.createElement('input')
  inputSearch.type = 'text'
  inputSearch.placeholder = 'Digite aqui sua pesquisa'
  inputSearch.name = 'search'
  inputSearch.id = 'search'
  inputSearch.onkeyup = filterItens
  
  const btnSearch = document.createElement('button')
  btnSearch.type = 'submit'
  btnSearch.innerText = 'Pesquisar'

  formSearch.appendChild(inputSearch)
  formSearch.appendChild(btnSearch)

  return formSearch
}
const formSearch = createSearch()

