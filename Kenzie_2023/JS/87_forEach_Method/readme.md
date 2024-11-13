# forEach Methods

## Introduction
Today, I learned about the `forEach()` method in ES6, which allows me to iterate over an array and execute a function on each element. This method is especially useful when I need to perform an operation on each element of an array, whether it’s printing, calculating, or modifying values.

## Syntax of forEach()
The `forEach()` syntax can vary slightly depending on whether I use a traditional function or an arrow function. Here’s the basic structure:

- **Without arrow function**:
  ```javascript
  array.forEach(function(element, index, array) {
    // code to execute on each element
  });
  ```

- **With arrow function**:
  ```javascript
  array.forEach((element, index, array) => {
    // code to execute on each element
  });
  ```

The first parameter represents the current element, the second is the element's index, and the third is the entire array. If I only need the element, I can use just the first parameter.

## Examples
**Basic Example**  
I started with a simple example using `forEach()` to print each number in an array:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
```

**Output**:
```
1
2
3
4
5
```

**Complex Example**  
Next, I worked on a more detailed example with objects, creating an array of people and printing each person's name and age:

```javascript
const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
  { name: 'Alice', age: 35 }
];

persons.forEach(function(person) {
  console.log(person.name + ' has ' + person.age + ' years old.');
});
```

**Output**:
```
John has 30 years old.
Jane has 25 years old.
Bob has 40 years old.
Alice has 35 years old.
```

## Conclusion
Through these examples, I realized that `forEach()` is a straightforward and effective way to iterate over an array and perform tasks on each item. It’s a valuable tool for array manipulation in JavaScript. Next up, I’ll be exploring the `map()` method! 😊