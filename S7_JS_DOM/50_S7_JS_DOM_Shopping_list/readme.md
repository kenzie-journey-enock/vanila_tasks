# S7 JS DOM Shopping list

Shopping list with DOM

## Task

- 1. Create your index.html.
- 2. Create your main.js.
- 3. Create the base structure for your html by typing html:5 in your vscode.
- 4. In your html file add the elements:
   - ul with id = "list".
   - input with id = "input"
   - button with id = "add"
   - button with id = "reset"
- 5. Now add your script to the page.

Now that we have everything prepared, let's get to the activity.

## Step by Step

1. First, let's take the html elements and create an array.
```js

const shoppingList = document.getElementById("list");
const input = document.getElementById("input");
const addButton = document.getElementById("add");
const resetButton = document.getElementById("reset");

let list = [];
```

2. Let's create a function that clears the shoppingList element and then traverses the arraylist, setting the id with the index value and adding all the elements in the shoppingList.
```js
function reloadList() {
       shoppingList.innerHTML = ""; // Cleans our HTML Element
       for (let index = 0; index < list.length; index++) {
         let currentElement = list[index];
         currentElement.id = index;
         shoppingList.appendChild(currentElement);
       }
     }
```

3. Now let's create a function that creates a remove button, adds an event listener to it and returns it.
```js
function createRemoveButton() {
       const removeButton = document.createElement("button"); // We create a button
       removeButton.innerText = "Remove";
       removeButton.addEventListener("click", (e) => { // We add an event to it.

         list = list.filter((_, index) => index !== Number(e.composedPath()[1].id));
         reloadList(); // We call the function to reload the list.
       });
       return removeButton;
       }
```

4. Now we need to add a click event to the addButton.
```js
function onClickFunction() {
       let newItem = document.createElement("li"); //Creating a "li" html element
       let paragraph = document.createElement("p"); //Creating a "p" html element
       let removeButton = createRemoveButton();
              
       if (input.value) {
       paragraph.innerText = input.value; // We add the input value to our "p"
    
       newItem.appendChild(paragraph); // We place our paragraph inside our li
       newItem.appendChild(removeButton);// We place our button inside our li
    
       input.value = ""; // We clean our input
       list.push(newItem);
    
       reloadList();
       }
     }
     addButton.addEventListener("click", onClickFunction);
```
5. Finally, let's add a listener to the reset button.
```js
function onClickResetFunction() {
       shoppingList.innerHTML = "";
       list = [];
     }
     resetButton.addEventListener("click", onClickResetFunction);
```