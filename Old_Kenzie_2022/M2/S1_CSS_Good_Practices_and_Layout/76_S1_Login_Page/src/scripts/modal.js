const registerBtn = document.getElementById('btn-cadastrar')

const modal = document.getElementById('modal')

const closeBtn = document.getElementById('btn-close')

registerBtn.addEventListener('click', () => {
  modal.open = true
})

closeBtn.addEventListener('click', () => {
  modal.open = false
})