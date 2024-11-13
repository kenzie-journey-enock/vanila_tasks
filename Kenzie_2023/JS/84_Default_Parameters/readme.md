# Default Parameters

## Introduction
I learned about Default Parameters, a feature introduced in ECMAScript 6 (ES6), that lets functions have predefined default values for parameters. If an argument isn’t provided when calling the function, it automatically uses the default value for that parameter.

## Syntax
The syntax is simple: assign a value to the parameter in the function declaration. Here’s an example:
```javascript
const greet = (name = "World") => {
  console.log(`Hello, ${name}!`);
};

greet(); // Output: "Hello, World!"
greet("John"); // Output: "Hello, John!"
```
In this example, I defined a function `greet` with the parameter `name`, which defaults to "World." If I don’t pass a value for `name`, it automatically defaults to "World." However, if I do pass a value, like "John," it overrides the default.

## Using Expressions as Default Parameters
I also learned that I can use expressions as default values, which can be useful for setting dynamic values. Here’s an example:
```javascript
const calculateArea = (width, height = width * 2) => {
  console.log(width * height);
};

calculateArea(2); // Output: 8
calculateArea(2, 4); // Output: 8
```
In this case, I defined the function `calculateArea` with parameters `width` and `height`, where `height` defaults to twice the value of `width`. This means if I don’t pass a value for `height`, it automatically becomes double the `width` value.

## Conclusion
Default Parameters in JavaScript ES6 make it easy to set default values for function parameters, enhancing code readability and reducing the need for null or undefined checks.