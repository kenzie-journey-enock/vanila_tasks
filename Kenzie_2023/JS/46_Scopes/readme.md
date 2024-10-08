# Scopes

## Introduction
In JavaScript, scope refers to the area in which a particular resource can be accessed within the code. There are three types of scope: Global Scope, Function Scope, and Block Scope.

## Global Scope
A variable declared in the global scope can be accessed from anywhere in the code, including inside functions.

```javascript
let myVariable = 'I am in the global scope';

function firstFunction() {
  console.log(myVariable);
  function secondFunction() {
    console.log(myVariable);
  }
  secondFunction(); // Output: I am in the global scope
}

firstFunction(); // Output: I am in the global scope
```

In this example, the `secondFunction` can access the `myVariable` because it was declared in the global scope, making it accessible throughout the entire code.

## Function Scope
When a variable or function is declared inside another function, it is accessible only within that function, meaning it has function scope.

```javascript
function myFunction() {
  let myVariable = 'I am in the function scope';
  function anotherFunction() {
    console.log(myVariable);
  }
  anotherFunction(); // Output: I am in the function scope
  console.log(myVariable);
}

myFunction(); 
// Output: I am in the function scope
console.log(myVariable); 
// Output: ReferenceError: myVariable is not defined
```

In the code above, the last `console.log` results in an error because `myVariable` was declared within the scope of `myFunction`, making it inaccessible outside of that function. However, `anotherFunction` can access it since it’s declared inside the same function.

## Block Scope
Block scope works similarly to function scope but applies to code blocks enclosed in `{}`. Variables declared with `let` and `const` inside a block can only be accessed within that block.

```javascript
const age = 18;
const hasLicense = true;

if (age >= 18) {
  let canDrive = true;
  if (hasLicense) {
    console.log(canDrive); // Output: true
  }
}

console.log(canDrive);
// Output: ReferenceError: canDrive is not defined
```

In this example, `canDrive` is declared inside the `if` block and cannot be accessed outside of it. However, within the nested `if (hasLicense)` block, it can still be accessed because it is part of the parent block's scope.

## Conclusion
Understanding JavaScript scopes is essential for writing efficient code and avoiding variable and function conflicts. Think of scopes like departments in a company, each with its own variables and functions. These departments (scopes) can operate independently, preventing interference with others.

Inside each department, there may be functions that manage specific tasks, and within those functions, there may be blocks handling detailed operations. Every scope acts like a nested box with its own set of rules and restrictions.

When coding in JavaScript, it’s important to carefully consider where each variable and function should be defined to ensure they are accessible only when needed and to avoid conflicts with other parts of the code.