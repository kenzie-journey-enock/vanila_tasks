import CardUser from "./cardUser.js"
import PostForm from "./postForm.js"
import Posts from "./posts.js"
import Sugestions from "./sugestions.js"

export default function Page() {
  const main = document.createElement('main')
  const pageSection = document.createElement('section')
  const topPageSection = document.createElement('section')
  topPageSection.className = 'top-page'
  const createPostSection = document.createElement('section')
  createPostSection.className = 'create-post'
  const sugestionsSection = document.createElement('section')
  sugestionsSection.className = 'container-sugest'
  const postsSection = document.createElement('section')
  postsSection.id = 'posted_posts'

  createPostSection.appendChild(CardUser())
  createPostSection.appendChild(PostForm())
  topPageSection.appendChild(createPostSection)

  sugestionsSection.appendChild(Sugestions())
  topPageSection.appendChild(sugestionsSection)

  postsSection.appendChild(Posts())

  pageSection.appendChild(topPageSection)
  pageSection.appendChild(postsSection)


  main.appendChild(pageSection)

  return main
}