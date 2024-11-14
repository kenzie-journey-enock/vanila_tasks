// Array to store to-do list items
let todoList = [];

// Function to add a new to-do
function addNewTodo() {
  const input = document.getElementById('newTodo');
  const newTodo = input.value.trim();

  if (newTodo) {
    // Add task to the array
    todoList.push(newTodo);

    // Update localStorage
    updateLocalStorage();

    // Render the updated list
    renderTodos();

    // Clear input field
    input.value = '';
  }
}

// Function to remove a to-do by index
function removeTodo(index) {
  // Remove item from the array by index
  todoList.splice(index, 1);

  // Update localStorage
  updateLocalStorage();

  // Render the updated list
  renderTodos();
}

// Function to update localStorage
function updateLocalStorage() {
  const listJSON = JSON.stringify(todoList);
  localStorage.setItem('todoList', listJSON);
}

// Function to load data from localStorage on page load
function getDataFromLocalStorage() {
  const localStorageDataJSON = localStorage.getItem('todoList');

  if (localStorageDataJSON) {
    todoList = JSON.parse(localStorageDataJSON);
  }

  // Render the loaded list
  renderTodos();
}

// Function to render the list on the screen
function renderTodos() {
  const ul = document.getElementById('todoList');
  ul.innerHTML = '';

  todoList.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const removeButton = document.createElement('button');
    removeButton.className = 'btn_remove'
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeTodo(index);

    li.appendChild(removeButton);
    ul.appendChild(li);
  })
}

// Call function to load data from localStorage on page load
getDataFromLocalStorage();