const modal = document.querySelector('dialog')
const buttonMenu = document.querySelector('#btn_menu')
const buttonMenu2 = document.querySelector('#btn_menu_2')
const buttonMenu3 = document.querySelector('#btn_menu_3')
const buttonDialog = document.querySelector('#btn_dialog')
const buttonDialog2 = document.querySelector('#btn_dialog_2')

function handleModal() {
  modal.style.display == 'none' ? modal.style.display = 'flex' : modal.style.display = 'none'
}

buttonMenu.addEventListener('click', () => {
  handleModal()
})
buttonMenu2.addEventListener('click', () => {
  handleModal()
})
buttonMenu3.addEventListener('click', () => {
  handleModal()
})

buttonDialog.addEventListener('click', () => {
  handleModal()
})
buttonDialog2.addEventListener('click', () => {
  handleModal()
})