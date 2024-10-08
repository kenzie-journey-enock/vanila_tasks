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
