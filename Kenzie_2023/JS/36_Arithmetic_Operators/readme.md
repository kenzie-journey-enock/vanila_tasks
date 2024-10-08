# Arithmetic_Operators

## Introduction
In this learning session, I explored the arithmetic operators in JavaScript, which are symbols used to perform mathematical operations on numerical values.

## Primary Arithmetic Operators
I learned about several primary arithmetic operators in JavaScript:

- **Addition (+)**: Used to add two numbers.
- **Subtraction (-)**: Used to subtract one number from another.
- **Division (/)**: Used to divide one number by another.
- **Multiplication (*)**: Used to multiply two numbers.
- **Modulo (%)**: Used to find the remainder of a division.
- **Exponentiation (**)**: Used to raise a number to the power of another number.

For example, I practiced using these operators with sample code, such as:

```javascript
const a = 10;
const b = 20;
const sum = a + b; // Output: 30
```

## Assignment Operators
I also learned about assignment operators, which are used to assign values to variables. The equal sign (`=`) serves as the assignment symbol. I discovered how to combine assignment with arithmetic operations using operators like `+=` and `-=`. For instance:

```javascript
let x = 5;
x += 3; // Equivalent to x = x + 3; Output: 8
```

## Combining Operators
The combined operators allow for more efficient code. I practiced using `+=`, `-=`, `*=`, `/=`, `%=` and `**=` to perform operations and assign the result back to the variable, making my code cleaner and easier to read.

```javascript
let z = 2;
z *= 10; // Output: 20
```

## Conclusion
Overall, I found that understanding arithmetic and assignment operators is essential for writing efficient and functional JavaScript code. These operators enable me to perform calculations, manipulate variable values, concatenate strings, simplify my code, and implement programming logic effectively. 

This knowledge enhances my skills in coding and makes me more proficient in JavaScript!

[MDN | Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)

```javascript

// Exercise 1
// Declare a variable called num1 and assign the value 5 to it.
let num1 = 5;

// Declare a variable called num2 and assign the value 10 to it.
let num2 = 10;

// Declare a variable called result1 and assign to it the sum of num1 and num2.
let result1 = num1 + num2;

// Use console.log() to display the value of result1 in the console.
console.log(`The sum of num1 (${num1}) and num2 (${num2}) is: ${result1}.`);

// Exercise 2
// Declare a variable called pi and assign the value 3.14 to it.
let pi = 3.14;

// Declare a variable called radius and assign the value 5 to it.
let radius = 5;

// Calculate the circumference based on the radius.
// To calculate the circumference, multiply the radius by the value of pi and by two.
let circumference = 2 * pi * radius;

// Print the result of the circumference calculation to the console.
console.log(`The circumference of a circle with radius ${radius} is: ${circumference}.`);

// Exercise 3
// Declare a variable called temperature and assign the value 30 to it.
let temperature = 30;

// Declare a variable called fahrenheit and assign to it the result of converting the temperature to Fahrenheit.
// To convert the temperature from Celsius to Fahrenheit, multiply the temperature by 9, divide the result by 5, and add 32.
let fahrenheit = (temperature * 9) / 5 + 32;

// Print the result of the conversion to Fahrenheit in the console.
console.log(`${temperature} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);

// Exercise 4
// Declare a variable called grade1 and assign the value 7 to it.
let grade1 = 7;

// Declare a variable called grade2 and assign the value 9 to it.
let grade2 = 9;

// Calculate the average of the grades by adding the two grades and dividing the result by 2.
// We divide by 2 to calculate the average of the two grades.
let average = (grade1 + grade2) / 2;

// Print the result of the average in the console.
console.log(`The average of grade1 (${grade1}) and grade2 (${grade2}) is: ${average}.`);

// Exercise 5
// Declare a variable called width and assign the value 10 to it.
let width = 10;

// Declare a variable called length and assign the value 20 to it.
let length = 20;

// Calculate the area by multiplying the width by the length.
let area = width * length;

// Print the result of the area in the console.
console.log(`The area of a rectangle with width ${width} and length ${length} is: ${area}.`);

// Exercise 6
// Declare a variable called grossSalary and assign the value 5000 to it.
let grossSalary = 5000;

// Declare a variable called discount and assign to it the result of the discount calculation.
// The discount is calculated by multiplying the gross salary by 0.1, which represents 10%.
let discount = grossSalary * 0.1;

// Calculate the net salary by subtracting the discount from the gross salary.
let netSalary = grossSalary - discount;

// Print the result of the net salary in the console.
console.log(`The net salary after a discount of ${discount} from the gross salary of ${grossSalary} is: ${netSalary}.`);

// Exercise 7
// Declare a variable called hoursWorked and assign the value 40 to it.
let hoursWorked = 40;

// Declare a variable called hourlyRate and assign the value 50 to it.
let hourlyRate = 50;

// Calculate the gross salary by multiplying the hours worked by the hourly rate.
let grossSalaryFromHours = hoursWorked * hourlyRate;

// Print the result of the gross salary in the console.
console.log(`The gross salary for working ${hoursWorked} hours at a rate of ${hourlyRate} per hour is: ${grossSalaryFromHours}.`);


```
