// Exercise 1
// Create a program that concatenates two names and returns a greeting phrase.
// Input: firstName = "John", lastName = "Smith"
// Output: "Hello John Smith!"

// Declare a variable called firstName and assign it the value "John".
let firstName = 'John';

// Declare a variable called lastName and assign it the value "Smith".
let lastName = 'Smith';

// Create a new variable called greeting and assign it the concatenation of the strings "Hello, ", firstName, " " and lastName, forming the complete greeting.
let greeting = 'Hello, ' + firstName + ' ' + lastName + '!';

// Print the greeting variable in the console.
console.log('Greeting message:', greeting);

// Exercise 2
// Create a program that adds one string to the end of another string and returns the resulting string.
// Input: string1 = "hello", string2 = "world"
// Output: "helloworld"

// Declare a variable called string1 and assign it the string "hello".
let string1 = 'hello';

// Declare a variable called string2 and assign it the string "world".
let string2 = 'world';

// Concatenate (add) the two strings and assign the result to a variable called combinedString.
let combinedString = string1 + string2;

// Print the resulting string in the console.
console.log('Combined string:', combinedString);

// Exercise 3
// Create a program that receives a string in decimal number format and returns the equivalent integer.
// Input: "12.5"
// Output: 12

// Declare a variable called decimalNumber and assign it a string representing a decimal number, for example, "12.5".
let decimalNumber = '12.5';

// Use the parseInt() function to convert the string to an integer and assign the result to the variable integerNumber.
let integerNumber = parseInt(decimalNumber);

// Print the value of the integerNumber variable in the console.
console.log('Converted integer from decimal string:', integerNumber);

// Exercise 4
// Create a program that converts a string in integer format to an integer number.
// Input: "12" Output: 12

// Create a variable called integerString and assign it the string "12".
let integerString = '12';

// Use the parseInt() function to convert the string to an integer.
// The parseInt() function parses the string and returns an integer.
// The converted value is then printed in the console using console.log().
console.log('Converted integer from string:', parseInt(integerString));

// Exercise 5
// Create a program that converts two strings in integer format to integers, sums those numbers, and presents the result.
// Input 1: "12" Input 2: "3"
// Output: 15

// Create a variable called number1 and assign it the string "12".
let number1 = '12';

// Create a variable called number2 and assign it the string "3".
let number2 = '3';

// Use the parseInt() function to convert the string number1 into an integer.
let convertedNumber1 = parseInt(number1);

// Use the parseInt() function to convert the string number2 into an integer.
let convertedNumber2 = parseInt(number2);

// Sum the two converted integer numbers and print the result in the console.
// The sum is performed using the addition operator (+).
console.log('Sum of the two integers:', convertedNumber1 + convertedNumber2);
