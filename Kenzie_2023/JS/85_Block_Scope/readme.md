# Block Scope

## Introduction
I learned about Block Scope, a new feature introduced in ECMAScript 6 (ES6). This concept allows variables declared with `let` and `const` to have a scope limited to the block in which they are declared, as opposed to `var`, which is limited to function scope.

## Declaring Variables with let and const
I discovered that `let` and `const` are declarations that replace `var`. `let` is for variables that can be reassigned, while `const` is for variables that cannot be reassigned. For example, I can declare a variable using `let` like this: `let myVariable = "Hello";`, and change its value later. In contrast, with `const`, I declare a variable like `const myConstant = 42;`, which I cannot change afterward.

## Scope of Variables with let and const
The main takeaway here was how `let` and `const` handle variable scope differently from `var`. Variables declared with `var` have function or global scope, while `let` and `const` have block scope. This means that a variable declared within a block can only be accessed inside that block. I saw this in action with an example where two variables with the same name were declared in different scopes.

## Using const with Objects and Arrays
I learned that while `const` prevents reassignment of a variable, it doesn’t stop me from modifying the structure of an object or array. For instance, I can add elements to an array declared with `const`, but I cannot reassign the variable itself.

## Using let and const in Loops
Using `let` and `const` in loops was another important lesson. When I declare a variable with `var` in a loop, it has function or global scope. However, with `let` or `const`, a new instance of the variable is created for each iteration, which means they do not interfere with each other. I practiced this with examples showing how `let` allows me to use a variable with a different instance for each loop iteration.

## Conclusion
Overall, I found `let` and `const` to be significant features in ECMAScript 6, offering better control over variable scope and security in my code. They are particularly useful when working with loops, allowing for cleaner and more predictable variable handling.