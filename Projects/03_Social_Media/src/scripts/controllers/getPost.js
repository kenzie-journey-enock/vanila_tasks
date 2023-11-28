import { posts } from "../database.js"

export default function getPost(){
  const modal = document.getElementById('modal')
  const btnsOpenModal = document.getElementsByClassName('open-post')
  const closeModal = document.createElement('button')
  closeModal.id = 'close_post'
  closeModal.className = 'close-modal'
  closeModal.innerText = 'X'
  for (let i in posts){
    btnsOpenModal[i].addEventListener('click', () => {
      modal.innerHTML = ''
      modal.appendChild(closeModal)
      modal.appendChild(modalInfo(posts[i]))
      modal.open = true
    })
  }
  closeModal.addEventListener('click', () => {
    modal.open = false
  })
}

function modalInfo(data){
  const articlePost = document.createElement('div')
  articlePost.id = `post-${data.id}`
  articlePost.className = 'post-open'
  articlePost.innerHTML = `
    <div class="user-info">
      <img src="${data.img}" alt="${data.user}" />
      <div class="info">
        <h2>${data.user}</h2>
        <p>${data.stack}</p>
      </div>
    </div>
    <h2 class="title-modal">
      ${data.title}
    </h2>
    <p class="text-modal">
      ${data.text}
    </p>
  `
  return articlePost
}
