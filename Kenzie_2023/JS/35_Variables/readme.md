# Variables

## Introduction
I learned that a variable in programming is essentially a symbolic representation of some value or information. It's like a virtual container that holds data, which could be numbers, text, or other types of information. In JavaScript (JS), a variable can be declared like this:

```js
let variableName = 5;
```

In this example, the variable `variableName` holds the value `5`, which can then be accessed throughout the code using its name.

## Data Types
JavaScript has six basic data types:
- **Number**: Represents integers or decimals (e.g., 42 or 3.14).
- **String**: Represents sequences of characters (e.g., "Hello, world!").
- **Boolean**: Represents logical values (either `true` or `false`).
- **Null**: Represents an intentional absence of value.
- **Undefined**: Represents an unassigned variable.
- **Object**: Represents collections of data (e.g., arrays or objects like `[1, 2, 3]`).

JavaScript automatically determines the data type of a variable when a value is assigned to it using the `=` sign.

## What is Scope?
I learned about the concept of scope, which refers to where a variable can be accessed in the code. There are two main types of scope:
- **Global**: A variable declared outside any code block is available throughout the entire program.
- **Local**: A variable declared inside a block is available only within that block.

## Declaring Variables
In JavaScript, there are three ways to declare a variable:
1. **var**: Declares a variable that can be globally or function-scoped. Variables declared with `var` can be reassigned.
   ```js
   var name = "John";
   ```

2. **let**: Declares a block-scoped variable that can only be accessed within the block it was declared in. It can also be reassigned.
   ```js
   let age = 30;
   ```

3. **const**: Declares a constant whose value cannot be changed once assigned. It must be initialized when declared.
   ```js
   const birthYear = 1990;
   ```

Using `let` and `const` is recommended over `var` as they offer better control over variable scope, reducing bugs.

## Identifying Variable Types
I learned how to identify a variable’s type using the `typeof` operator. This command returns a string indicating the variable’s data type. For example:
```js
const num = 42;
console.log(typeof num); // "number"
```

## Naming Rules and Best Practices
When naming variables, there are a few rules and best practices to follow:
- Variable names can contain letters, numbers, and underscores but cannot start with a number.
- Variable names should be descriptive, using camelCase where subsequent words start with a capital letter (e.g., `firstName`).
- Avoid using reserved words like `if`, `for`, or `while` as variable names.

## Conclusion
In this lesson, I learned that variables are fundamental to programming in JavaScript. They allow me to store and manipulate data efficiently. I now understand how to declare variables using `var`, `let`, and `const`, as well as how to follow naming conventions and scope rules to write cleaner, more maintainable code. Understanding data types and how to check them with `typeof` also gave me a solid foundation for managing variables effectively in JS projects.

[MDN | Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)


```js

/* 
Exercise 1
Create a program that displays a decimal, an integer, and a string using console.log(). 
*/

// A constant variable called "decimal" is created to store the value 3.14.
const decimal = 3.14;

// A constant variable called "integer" is created to store the value 5.
const integer = 5;

// A constant variable called "text" is created to store the string "Hello, world!".
const text = 'Hello, world!';

// Note: "const" is used because there is no intention to change the value of the variables throughout the script. If the variable needed to be changed, "let" would be used.

// Display the value of the "decimal" variable in the console with a descriptive message.
console.log('Decimal value:', decimal);

// Display the value of the "integer" variable in the console with a descriptive message.
console.log('Integer value:', integer);

// Display the value of the "text" variable in the console with a descriptive message.
console.log('String value:', text);

/*
Exercise 2
Declare a variable, assign a number, use the typeof method to display the word "number".
*/

// A constant variable called "num" is created and assigned the value 10.
const num = 10;

// Using console.log() to display the type of the variable "num".
console.log('The type of the variable "num" is:', typeof num);

/*
Exercise 3
Declare a variable, assign a boolean value, use the typeof method to display the word "boolean".
*/

// A constant variable called "bool" is created and assigned the boolean value true.
const bool = true;

// Using console.log() to display the type of the variable "bool".
console.log('The type of the variable "bool" is:', typeof bool);

/*
Exercise 4
Declare a variable, assign a string, use the typeof method to display the word "string".
*/

// A constant variable called "str" is created and assigned the string "This is a string".
const str = 'This is a string';

// Using console.log() to display the type of the variable "str".
console.log('The type of the variable "str" is:', typeof str);

/*
Exercise 5
Create a program that displays two variables, one assigned with true and another with false.
*/

// A constant variable called "varTrue" is created and assigned the boolean value true.
const varTrue = true;

// A constant variable called "varFalse" is created and assigned the boolean value false.
const varFalse = false;

// Using console.log() to display the values of the "varTrue" and "varFalse" variables in the console.
console.log('Value of varTrue:', varTrue, '| Value of varFalse:', varFalse);

// Note: By using a comma, it is possible to display multiple values as separate arguments within console.log(). In this case, the values of "varTrue" and "varFalse" are displayed in the console.

/*
Exercise 6
Using a variable and console.log(), display the value 'null' in the console.
*/

// A constant variable called "nullValue" is created and assigned the value null.
const nullValue = null;

// Using console.log() to display the value of the "nullValue" variable in the console.
console.log('The value of the variable "nullValue" is:', nullValue);

// Note: The value null represents the intentional absence of a value or indicates that the variable is empty. console.log() is used to display this value in the console for debugging or information purposes.

/*
Exercise 7
Using a variable and console.log(), display the value 'undefined' in the console.
*/

// A mutable variable called "undefinedValue" is created without assigning a value to it.
let undefinedValue;

// Note: A mutable "let" variable is used instead of a constant "const" because a constant variable requires an initial value in its declaration, and that value cannot be changed later. In this case, since we want the variable to have the value "undefined", it would not be possible using a constant variable.

// Using console.log() to display the value of the "undefinedValue" variable in the console.
console.log('The value of the variable "undefinedValue" is:', undefinedValue);

```