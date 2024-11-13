# map Method

## Introduction  
I learned about the `map()` method in ES6, which is used to create a new array by applying a function to each element of the original array. This method is ideal for transforming each element and producing a new array.

## Syntax of map() Method  
The `map()` method has two syntax styles: with and without an arrow function. For example:
```javascript
// Without arrow function
array.map(function(element, index, array) {
  return newElement;
});

// With arrow function
array.map((element, index, array) => {
  return newElement;
});
```
The `map()` method accepts three parameters: the current element, the index, and the entire array. Unlike `forEach()`, which only iterates through elements, `map()` returns a new array with transformed values.

## Examples  
In a basic example, I used `map()` to double each number in an array:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubleNumbers); // [2, 4, 6, 8, 10]
```
In a more complex example, I used `map()` to add unique `id`s to objects in an array:
```javascript
const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
  { name: 'Alice', age: 35 }
];
const personsWithId = persons.map((person, index) => {
  person.id = index + 1;
  return person;
});
console.log(personsWithId);
```
This produced an array with each person assigned a unique `id`:
```javascript
[
  { name: 'John', age: 30, id: 1 },
  { name: 'Jane', age: 25, id: 2 },
  { name: 'Bob', age: 40, id: 3 },
  { name: 'Alice', age: 35, id: 4 }
]
```

## Conclusion  
This lesson taught me how to use `map()` to iterate over an array and transform its elements, making it useful when we need a new array based on the original array’s elements.