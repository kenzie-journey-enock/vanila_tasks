# - no-else-return

## Introduction
I recently learned about a coding technique called "no-else-return," which aims to make code more readable by eliminating unnecessary "else" statements. The idea is to streamline code execution by taking advantage of how the `return` statement works in functions.

## Context
In programming, the `return` statement is used to return a result to the context where a function is called. For instance, consider the following code:

```javascript
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPositive(2)); // Output: true
```

In this example, the function checks whether the number two is positive and returns `true` if so. The key point is that once a `return` statement is executed, the function stops, and no further code in that scope is run. 

For example:
```javascript
function isPositive(number) {
  if (number > 0) {
    return true;
    console.log('This will never be shown');
  } else {
    return false;
    console.log('This will never be shown');
  }

  console.log('This will never be shown');
}
```
Here, none of the `console.log` statements will execute because the function ends when the `return` statement is called. 

The "no-else-return" technique leverages this feature of `return`. Instead of using `else`, we simply allow the function to proceed naturally if the first condition isn’t met. The code becomes more concise and readable:

```javascript
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
```

Now, if the `if` condition isn't met, the function will automatically return `false` without needing an explicit `else`.

## Conclusion
This technique can be applied in various contexts to improve code clarity. However, it doesn’t mean we should never use `else`; there are situations where it makes sense. The main goal is always to choose the structure that makes the code easier to understand and maintain.