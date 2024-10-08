# Functions with and without Return

## Introduction

In JavaScript, a function is a block of code that performs a specific task. Functions can either return a value or not. To return a value, we use the reserved keyword `return`.

To practice with examples, I created a `script.js` file in a study directory. I then tested the code by importing `script.js` into an `index.html` and using the browser's devTools, particularly the console tab, to track the logs of my application.

## No Return

A function without a return does not return any value. Instead, it executes a set of instructions and may have side effects, such as displaying information or modifying global variables. For instance:

```js
function displayMessage() {
  console.log('Hello, world!');
}

displayMessage(); 
// Output: "Hello, world!"
```

In this example, the `displayMessage` function doesn't return a value but logs the message "Hello, world!" to the console.

## With Return

A function with a return is one that returns a value, which can be of any data type, such as numbers, strings, objects, or even other functions.

### Return

In JavaScript, the `return` keyword indicates the value a function should return when called. This is fundamental because it allows functions to perform a task and return a result that can be used elsewhere in the code. When the function is called, the code inside it runs, and when `return` is encountered, the function terminates, returning the specified value as the result.

For example, calculating the area of a circle with a radius of 4, using the formula:

```js
function calculateCircleArea() {
  const pi = 3.14;
  const area = pi * 4 * 4;

  return area;
}

calculateCircleArea();
```

Initially, when I executed the code, nothing was returned in the terminal. The function ran normally, but I wasn’t storing or displaying the returned result in the console. To fix this:

```js
function calculateCircleArea() {
  const pi = 3.14;
  const area = pi * 4 * 4;

  return area;
}

const result = calculateCircleArea();
console.log(result); 
// Output: 50.24
```

## Undefined Return

What happens if we try to store and display the return value of a function that doesn’t have a defined return?

```js
function noReturnFunction() {
  console.log("Hello, I am a function without a return T_T");
}

const result = noReturnFunction();
console.log(result);
```

In this case, functions without a return in JavaScript return `undefined`, which is the default value when a function doesn’t explicitly return anything. Here, the function only logs a message ("Hello, I am a function without a return T_T"), and when we assign it to the `result` variable, `undefined` is logged.

However, `undefined` in JavaScript is not an error or invalid value. Instead, it indicates the absence of a value. So, when a function doesn't return a specific value, `undefined` is returned to signal that the function ran but didn’t return a useful result.

## Conclusion

Functions with returns are useful when you need the returned value for further operations, whereas functions without returns are beneficial when you want to execute a set of instructions without needing the result.