import { Dog } from './dog.js';

// Array to hold dogs
let dogs = [];

// Function to add a dog to the list
const addDog = (name, age) => {
  const newDog = new Dog(name, age);
  dogs.push(newDog);
  console.log(`${newDog.name} added to the list!`);
};

// Function to list all dogs
const listDogs = () => {
  dogs.forEach(dog => {
    const { name, age } = dog; // Destructuring
    console.log(`Name: ${name}, Age: ${age}`);
  });
};

// Function to simulate fetching dogs asynchronously
const fetchDogs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      addDog('Toby', 3);
      addDog('Rex', 5);
      resolve();
    }, 2000);
  });
};

// Main execution
const main = async () => {
  console.log('Fetching dogs...');
  await fetchDogs(); // Using the promise
  listDogs(); // List dogs after fetching
};

// Run the application
main();
