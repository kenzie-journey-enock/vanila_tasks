export default function PostForm() {
  const postForm = document.createElement('form')
  postForm.id = 'post_form'
  postForm.className = 'post-form'
  postForm.method = 'POST'

  postForm.innerHTML = `
    <input
      type="text"
      placeholder="Digite o título do post"
      required=""
    />
    <textarea
      placeholder="Digite a descrição do post"
      name=""
      id=""
      cols="30"
      rows="10"
      required=""
    ></textarea>
    <button type="submit">Postar</button>
  `
  return postForm
}