# Working with JSON in JS

## Introduction
I learned that JSON exists as a text string and is very useful for transmitting data over a network. To access and manipulate JSON, it needs to be converted into a JavaScript literal object. JavaScript provides methods for converting between the two formats. This lesson focused on how to use JSON with JavaScript to create, manipulate, and access data.

## Transforming JSON Data into JavaScript
I discovered that I can transform JSON data into JavaScript objects using the `JSON.parse()` method. This method parses a JSON string and converts it into a JavaScript literal object. For example:

```javascript
const data = '{"name": "João", "age": 25, "city": "São Paulo"}';
const object = JSON.parse(data);
console.log(object); // { name: "João", age: 25, city: "São Paulo" }
```

## Transforming JavaScript Objects into JSON
I also learned how to transform JavaScript objects into JSON strings using the `JSON.stringify()` method. For example:

```javascript
const object = { name: "João", age: 25, city: "São Paulo" };
const data = JSON.stringify(object);
console.log(data); // '{"name": "João", "age": 25, "city": "São Paulo"}'
```

## Error in JSON Conversion
The lesson highlighted potential errors during conversion. If I try to parse a string that doesn't conform to valid JSON, I will encounter an error. For instance:

```javascript
const data = '{name: "João", age: 25, city: "São Paulo"}';
const object = JSON.parse(data);
// Uncaught SyntaxError: Expected property name or '}' in JSON at position 1
```

When using `JSON.stringify()`, if part of the object cannot be converted, no error will occur, but the invalid values will be excluded from the resulting JSON string:

```javascript
const object = {
  name: "Cláudio",
  age: undefined,
  function: () => {
    console.log("This is a function");
  },
};
const data = JSON.stringify(object);
console.log(data); // '{"name":"Cláudio"}'
```

## Creating and Accessing JSON Objects in JavaScript
In JavaScript, I learned that I can create simple JSON objects using object literal syntax and convert them into JSON strings using `JSON.stringify()`. For example:

```javascript
const person = { name: "Maria", age: 31, city: "Rio de Janeiro" };
const data = JSON.stringify(person);
```

I can access values from a JSON object using the dot notation after converting it with `JSON.parse()`:

```javascript
const data = '{"name": "Maria", "age": 31, "city": "Rio de Janeiro"}';
const person = JSON.parse(data);

console.log(person.name); // "Maria"
console.log(person.age); // 31
console.log(person.city); // "Rio de Janeiro"
```

I also learned to use brackets to access values:

```javascript
console.log(person['name']); // "Maria"
console.log(person['age']); // 31
console.log(person['city']); // "Rio de Janeiro"
```

## Manipulating JSON Objects in JavaScript
Once JSON data is converted to JavaScript objects, I can manipulate them easily. For example, I can add a new key-value pair:

```javascript
person.profession = "programmer";
console.log(person); // { name: "Maria", age: 31, city: "Rio de Janeiro", profession: "programmer" }
```

I can also remove a key-value pair using the delete operator:

```javascript
delete person.city;
console.log(person); // { name: "Maria", age: 31, profession: "programmer" }
```

## Conclusion
In conclusion, I learned that JSON is a useful and widely used data format in web applications. With JavaScript, I can create, manipulate, and access JSON data easily. In the next lesson, I will explore how to validate JSON syntax and handle common errors when parsing JSON data.