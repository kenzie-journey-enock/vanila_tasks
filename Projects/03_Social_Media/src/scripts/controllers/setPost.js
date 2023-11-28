import Posts from "../components/posts.js";
import { users, posts } from "../database.js";
import getPost from "./getPost.js";
import setLike from "./setLike.js";

export default function setPost(){
  let dataInput = {}
  const postForm = document.getElementById('post_form')
  const postedPosts = document.getElementById('posted_posts')
  postForm.addEventListener('submit', (e) => {
    e.preventDefault()
    dataInput = {
      id: posts.length + 1,
      title: e.target[0].value,
      text: e.target[1].value,
      user: users[0].user,
      stack: users[0].stack,
      img: users[0].img,
      likes: 42
    }
    posts.push(dataInput)
    postedPosts.innerHTML = ''
    postedPosts.appendChild(Posts())
    e.target[0].value = ''
    e.target[1].value = ''
    getPost()
    setLike()
  })
}