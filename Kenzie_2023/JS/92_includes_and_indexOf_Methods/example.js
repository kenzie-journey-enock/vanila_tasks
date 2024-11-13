// Creating a to-do list as an array of strings
const todoList = ["Buy groceries", "Walk the dog", "Read a book", "Exercise"];

// Using includes() to check if a task is in the list
const hasReadBook = todoList.includes("Read a book");
console.log(`Does the to-do list include "Read a book"? ${hasReadBook}`); // Output: true

const hasCookDinner = todoList.includes("Cook dinner");
console.log(`Does the to-do list include "Cook dinner"? ${hasCookDinner}`); // Output: false

// Creating a more detailed to-do list as an array of objects
const detailedTodoList = [
  { task: "Buy groceries", completed: false },
  { task: "Walk the dog", completed: true },
  { task: "Read a book", completed: false },
  { task: "Exercise", completed: false }
];

// Using indexOf() to find the index of a task in the string array
const indexOfExercise = todoList.indexOf("Exercise");
console.log(`Index of "Exercise" in the to-do list: ${indexOfExercise}`); // Output: 3

// Using findIndex() to find the index of an object in the detailed to-do list
const indexOfWalkDog = detailedTodoList.findIndex(item => item.task === "Walk the dog");
console.log(`Index of "Walk the dog" in the detailed to-do list: ${indexOfWalkDog}`); // Output: 1

// Using includes() on the detailed list will not work as expected
const hasWalkDog = detailedTodoList.includes({ task: "Walk the dog", completed: true });
console.log(`Does the detailed to-do list include { task: "Walk the dog", completed: true }? ${hasWalkDog}`); // Output: false

// To check for existence of an object, we need to compare properties
const hasCompletedWalkDog = detailedTodoList.some(item => item.task === "Walk the dog" && item.completed === true);
console.log(`Is "Walk the dog" completed? ${hasCompletedWalkDog}`); // Output: false
