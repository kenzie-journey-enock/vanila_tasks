// Using const and let in an array
const fruits = ['Apple', 'Banana', 'Cherry'];

// Trying to reassign fruits will throw an error
// fruits = ['Orange', 'Grape']; // Uncommenting this will cause an error

// Using let in a loop
for (let i = 0; i < fruits.length; i++) {
    // Using let creates a new scope for each iteration
    let fruit = fruits[i];  // fruit is scoped to this iteration
    console.log(`Fruit at index ${i}: ${fruit}`);
}

// Demonstrating const with an object
const person = {
    name: 'Alice',
    age: 30
};

// Modifying the properties of the const object is allowed
person.age = 31;  // This works
console.log(`Updated age: ${person.age}`);

// Trying to reassign the const object will throw an error
// person = { name: 'Bob', age: 25 }; // Uncommenting this will cause an error

// Using const with an array to show mutability
const numbers = [1, 2, 3];

// Adding an element to the array
numbers.push(4);  // This works
console.log(`Updated numbers: ${numbers}`);

// The following line would throw an error if uncommented
// numbers = [5, 6, 7]; // Uncommenting this will cause an error
