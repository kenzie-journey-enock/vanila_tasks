const button = document.querySelector("button");
const p = document.querySelector("p");

let count = 0;

button.addEventListener("click", function () {
  console.log("hello world");

  count++;

  p.innerHTML = count;
});