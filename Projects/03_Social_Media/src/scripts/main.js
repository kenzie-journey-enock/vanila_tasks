import Header from "./components/header.js";
import Modal from "./components/modal.js";
import Page from "./components/page.js";
import getPost from "./controllers/getPost.js";
import setLike from "./controllers/setLike.js";
import setPost from "./controllers/setPost.js";

const root = document.querySelector('#root')

export function renderRoot() {
  loadApp()

  setLike()
  setPost()
  getPost()
}

function loadApp(){
  root.appendChild(Header())
  root.appendChild(Page())
  root.appendChild(Modal())
}

