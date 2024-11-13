# includes and indexOf Methods

## Introduction
Today, I learned about the `includes()` and `indexOf()` methods in ES6, which are used to check for the existence of an element in an array. These methods are incredibly useful when I need to determine if an element is present in an array.

## Syntax of the includes() Method
The syntax for the `includes()` method is:

```javascript
array.includes(element, startIndex);
```

The first parameter is the element I’m checking for in the array, while the second parameter is optional and indicates the index at which to start the search.

The `includes()` method returns `true` if the element exists in the array, and `false` otherwise.

## Example of Using includes()
I explored a simple example of using `includes()`:

```javascript
const numbers = [1, 2, 3, 4, 5];
const includesThree = numbers.includes(3);
console.log(includesThree);
```

In this case, I created an array called `numbers` and used `includes()` to check if the number 3 is present in it, which returned `true`.

I also looked at a more complex example:

```javascript
const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
  { name: 'Alice', age: 35 }
];
const includesAlice = persons.includes({ name: 'Alice', age: 35 });
console.log(includesAlice);
```

Here, I created an array of objects called `persons` and checked if an object with the name 'Alice' and age 35 was present. This returned `false` because, despite having the same properties, each object has a different memory reference.

## Syntax of the indexOf() Method
The syntax for the `indexOf()` method is:

```javascript
array.indexOf(element, startIndex);
```

The first parameter is the element I’m looking for in the array, and the second parameter is optional, specifying the index from which to start the search.

The `indexOf()` method returns the index of the first occurrence of the element found in the array or `-1` if the element is not found.

## Example of Using indexOf()
I reviewed a simple example using `indexOf()`:

```javascript
const numbers = [1, 2, 3, 4, 5];
const indexThree = numbers.indexOf(3);
console.log(indexThree);
```

In this case, I created the `numbers` array and used `indexOf()` to find the index of the number 3, which returned `2`.

I also examined a more complex example:

```javascript
const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
  { name: 'Alice', age: 35 }
];
const indexAlice = persons.findIndex(person => person.name === 'Alice');
console.log(indexAlice);
```

In this example, I used `findIndex()` to locate the index of the first object with the name 'Alice', which returned `3`.

## Conclusion
In this lesson, I learned how to use the `includes()` and `indexOf()` methods in ES6 to verify the existence of an element in an array. These methods are vital and should be used whenever necessary to make my code more efficient and readable.

I also noted that when using `includes()` or `indexOf()` with complex objects, it's essential to compare specific properties of the object rather than just the memory reference, as that could lead to incorrect results.

I hope this lesson helped me gain a better understanding of how to use the `includes()` and `indexOf()` methods. Until next time!