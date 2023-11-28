export default function Modal(){
  const modal = document.createElement('dialog')
  modal.id = 'modal'
  modal.className = `post-modal`
  return modal
}