// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using arrow functions to filter, map, and return the even numbers doubled
const doubleEvens = numbers
  .filter(num => num % 2 === 0) // Keep only even numbers
  .map(num => num * 2);         // Double each even number

console.log(doubleEvens); // Output: [4, 8, 12, 16, 20]
