# Callback Functions

## Introduction
I learned about a fundamental concept in JavaScript: callbacks.

## What is a Callback?
A callback is a function passed as an argument to another function. The purpose of a callback is to execute an action within the external function, either to manipulate or complete a routine with the data present inside the external function or to execute some logic within the external function's scope.

## Example of Use
For example, I encountered a function called `printResult` that takes a message and a callback function as parameters:

```javascript
function printResult(mensagem, callback) {
  console.log(mensagem);
  callback();
}
```

When I execute this function with the message "Hello, world!" and a callback function that prints "Callback executed!", the code looks like this:

```javascript
printResult("Hello, world!", function() {
  console.log("Callback executed!");
});
```

The output in the console would be:

```
Hello, world!
Callback executed!
```

In this example, the `printResult` function prints the message passed as a parameter and then executes the callback function, which prints "Callback executed!" in the console.

## Conclusion
I found that callbacks are very useful and practical, especially when dealing with a collection of data or elements where I need to execute a specific function for each item in that collection.