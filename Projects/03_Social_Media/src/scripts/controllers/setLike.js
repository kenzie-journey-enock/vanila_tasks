import { posts } from "../database.js";

export default function setLike(){
  const likeBtn = document.getElementsByClassName('btn-like')
  let likes = 0
  for (let i in posts){
    likeBtn[i].addEventListener('click', () => {
      let indexPost = parseInt(likeBtn[i].id) - 1
      if (likes == 0 || likes == posts[indexPost].likes){
        likes = posts[indexPost].likes
        likes++
        likeBtn[indexPost].innerHTML = `
        <img
            src="./src/assets/img/red-heart.svg"
            alt="Empty Heart(Post not liked)"
          />
          <small>${likes}</small>
        `
      } else if (likes != posts[indexPost].likes){
        likes = posts[indexPost].likes
        likeBtn[indexPost].innerHTML = `
        <img
            src="./src/assets/img/gray-heart.svg"
            alt="Empty Heart(Post not liked)"
          />
          <small>${likes}</small>
        `
        likes = 0
      }
    })
    likes = 0
  }
}
