import { suggestUsers } from "../database.js"

const userSugestions = suggestUsers.map((user) => {
  const liUser = document.createElement('li')
  const containerUser = document.createElement('div')
  const buttonFollow = document.createElement('button')
  buttonFollow.innerText = 'Seguir'
  containerUser.className = "user-info"
  containerUser.innerHTML = `
    <img src="${user.img}" alt="${user.user}" />
    <div class="info">
      <h2>${user.user}</h2>
      <p>${user.stack}</p>
    </div>
  `
  liUser.appendChild(containerUser)
  liUser.appendChild(buttonFollow)

  return liUser
})

export default function Sugestions() {
  const sugestionsContainer = document.createElement('section')
  sugestionsContainer.className = 'sugestions'
  const titleSugestions = document.createElement('h2')
  titleSugestions.className = "title-sugestions"
  titleSugestions.innerText = "Sugestões para você seguir"
  const listSugestions = document.createElement('ul')
  for (let i in userSugestions){
    listSugestions.appendChild(userSugestions[i])
  }
  sugestionsContainer.appendChild(titleSugestions)
  sugestionsContainer.appendChild(listSugestions)
  
  return sugestionsContainer
}