// Example of Destructuring in JavaScript

// Step 1: Destructuring an Array
const fruits = ['apple', 'banana', 'orange', 'grape'];

// Using destructuring to assign array elements to variables
const [firstFruit, secondFruit, ...remainingFruits] = fruits;

console.log(`First fruit: ${firstFruit}`); // Output: apple
console.log(`Second fruit: ${secondFruit}`); // Output: banana
console.log(`Remaining fruits: ${remainingFruits}`); // Output: ['orange', 'grape']

// Step 2: Destructuring an Object
const person = {
  name: 'Alice',
  age: 28,
  city: 'New York'
};

// Using destructuring to extract properties into variables
const { name, age, city } = person;

console.log(`Name: ${name}`); // Output: Alice
console.log(`Age: ${age}`); // Output: 28
console.log(`City: ${city}`); // Output: New York

// Step 3: Destructuring with Default Values
const personWithDefault = {
  name: 'Bob',
  age: 35
};

// Assigning a default value for 'city' if it doesn't exist in the object
const { name: personName, age: personAge, city: personCity = 'Unknown' } = personWithDefault;

console.log(`Name: ${personName}`); // Output: Bob
console.log(`Age: ${personAge}`); // Output: 35
console.log(`City: ${personCity}`); // Output: Unknown

// Step 4: Nested Destructuring
const user = {
  username: 'charlie',
  details: {
    age: 30,
    location: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
};

// Destructuring nested objects
const {
  username,
  details: {
    age: userAge,
    location: { city: userCity, state: userState }
  }
} = user;

console.log(`Username: ${username}`); // Output: charlie
console.log(`Age: ${userAge}`); // Output: 30
console.log(`City: ${userCity}`); // Output: Los Angeles
console.log(`State: ${userState}`); // Output: CA

// Step 5: Function Parameters with Destructuring
function displayUserInfo({ username, details: { age, location: { city } } }) {
  console.log(`User: ${username}, Age: ${age}, City: ${city}`);
}

// Passing the user object to the function
displayUserInfo(user); // Output: User: charlie, Age: 30, City: Los Angeles
