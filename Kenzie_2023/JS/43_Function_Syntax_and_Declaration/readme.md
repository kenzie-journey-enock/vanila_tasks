# Function Syntax and Declaration

## Introduction
In this lesson, I learned how to declare a function in JavaScript. A function is created using the reserved keyword `function`, followed by the desired function name, like this:

```javascript
function functionName() {
  // function code block
}
```

Here's a breakdown:
- `function`: This keyword tells JavaScript that a function is being defined.
- `functionName`: The name of the function. It must be meaningful and follow JavaScript's naming rules (no spaces, accents, or hyphens).
- `()`: Parentheses are required in the function declaration.
- Code block: This is where the logic of the function resides, and it gets executed whenever the function is called.

## Examples
I practiced creating some simple functions to understand how they work.

### Sum Two Numbers:
```javascript
function sum() {
  const number1 = 3;
  const number2 = 5;
  console.log(number1 + number2);
}
```
This function adds two numbers and logs the result to the console.

### Check Legal Age:
```javascript
function checkLegalAge() {
  const age = 18;

  if (age >= 18) {
    console.log('Of legal age');
  } else {
    console.log('Underage');
  }
}
```
This function checks if a person is of legal age (18 or older) and logs the appropriate message.

## Function Calls
After defining a function, I learned that it must be called to execute its logic. The call is simple—just use the function name followed by parentheses:

```javascript
sum(); // Calls the sum function and logs the sum of 3 + 5
```

By calling the function multiple times, I can reuse the code:

```javascript
sum();
sum();
sum();
```
This will print the sum of 3 + 5 three times.

## Conclusion
In this lesson, I learned how to create and use functions in JavaScript. I understood the syntax and how functions help to abstract and reuse code. We explored examples like summing numbers and checking legal age, and I now know how to call functions to run the logic inside them. This makes our code more efficient and organized. In the upcoming lessons, we'll learn how to make these functions more dynamic!