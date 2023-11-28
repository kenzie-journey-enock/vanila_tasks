import { posts } from "../database.js"

export default function Posts() {
  const postsContainer = document.createElement('section')
  postsContainer.className = 'posts'

  const titlePost = document.createElement('h2')
  titlePost.innerText = 'Posts'

  postsContainer.appendChild(titlePost)

  for (let post of posts) {
    postsContainer.appendChild(Article(post))
  }
  return postsContainer
}

function Article(post) {
  const articlePost = document.createElement('article')
  articlePost.id = `post-${post.id}`
  articlePost.className = 'element-post'
  articlePost.innerHTML = `
    <div class="user-info">
      <img src="${post.img}" alt="${post.user}" />
      <div class="info">
        <h2>${post.user}</h2>
        <p>${post.stack}</p>
      </div>
    </div>
    <h2 class="title-post">
      ${post.title}
    </h2>
    <p class="text-post">
      ${post.text}
    </p>
    <div class="features-post">
      <button class="open-post ${post.id}" id="open_post">Abrir Post</button>
      <div class="btn-like" id="${post.id}">
        <img
          src="./src/assets/img/gray-heart.svg"
          alt="Empty Heart(Post not liked)"
        />
        <small>${post.likes}</small>
      </div>
    </div>
  `
  return articlePost
}