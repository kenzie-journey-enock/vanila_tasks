/*
  1. Select the element with id "ingredients" and assign it to a constant.
     Display only the selected element in the console.
*/
const ingredientsList = document.getElementById("ingredients");
console.log(ingredientsList);
// Or:
// const ingredientsList = document.querySelector("#ingredients");
// console.log(ingredientsList);

/*
  2. Select the <h1> element and assign it to a constant.
     Display only the selected element in the console.
*/
const title = document.getElementsByTagName("h1")[0];
console.log(title);
// Or:
// const title = document.querySelector("h1");
// console.log(title);

/*
  3. Select the element with the class "recipe" and assign it to a constant.
     Display only the selected element in the console.
*/
const recipe = document.getElementsByClassName("recipe")[0];
console.log(recipe);
// Or:
// const recipe = document.querySelector(".recipe");
// console.log(recipe);

/*
  Challenge 1: Select all <h2> elements on the page and change the text color of
     all of them to blue.
*/
const subtitles = document.getElementsByTagName("h2");
// Or:
// const subtitles = document.querySelectorAll("h2");
for (let i = 0; i < subtitles.length; i++) {
  subtitles[i].style.color = "blue";
}

/* 
  Challenge 2: Select all <input> elements on the page and change the border color of
     all of them to red.
*/
const inputs = document.querySelectorAll("input");
// Or:
// const inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].style.borderColor = "red";
}
