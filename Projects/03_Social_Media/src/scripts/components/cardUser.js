import { users } from "../database.js"

export default function CardUser() {
  const cardUser = document.createElement('div')
  cardUser.className = 'card-user'
  cardUser.innerHTML = `
    <div class="user-info">
      <img src="${users[0].img}" alt="${users[0].user}" />
      <div class="info">
        <h2>${users[0].user}</h2>
        <p>${users[0].stack}</p>
      </div>
    </div>
  `
  return cardUser
}