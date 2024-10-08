// Exercise 1
// Create an algorithm that reads the values A, B, C and prints to the screen if the sum of A + B is less
// than C.

// Declare a variable called A and assign it the value 10.
let A = 10;

// Declare a variable called B and assign it the value 20.
let B = 20;

// Declare a variable called C and assign it the value 30.
let C = 30;

// Check if the sum of A and B is less than C.
if (A + B < C) {
  // If the condition is true, display an alert indicating that the sum of A + B is less than C.
  alert('The sum of A + B is less than C');
}

// Exercise 2
// Create an algorithm to receive any number and inform on the screen if it is even or odd.

// Declare a variable called number and assign it the value 30.
let number = 30;

// Check if the number is even or odd using a conditional structure.
// The operator % (modulus) returns the remainder of the division between the number and 2.
// If the remainder is equal to zero, it means that the number is even.
if (number % 2 == 0) {
  // If the number is even, display an alert informing that the number is even.
  alert('The number is even, as the remainder of the division by 2 is zero');
} else {
  // Otherwise, if the number is odd, display an alert informing that the number is odd.
  alert('The number is odd, as the remainder of the division by 2 is not zero');
}

// Exercise 3
// Write an algorithm that reads two boolean values and then determines if both are TRUE or FALSE.

// Create a variable called boolean1 and assign it the value true.
let boolean1 = true;

// Create a variable called boolean2 and assign it the value false.
let boolean2 = false;

// Check if both boolean1 and boolean2 are true using the logical operator && (AND).
// If both are true, display an alert saying "Both are true".
if (boolean1 && boolean2) {
  alert('Both are true');
}
// Otherwise, check if both boolean1 and boolean2 are false using the logical operator ! (NOT) and the operator && (AND).
// If both are false, display an alert saying "Both are false".
else if (!boolean1 && !boolean2) {
  alert('Both are false');
}

// Exercise 4
// Write an algorithm that reads three different integer values and shows them in descending order.

// Declare three different integer variables and assign values to them.
let integer1 = 3;
let integer2 = 5;
let integer3 = 8;

// Use a conditional structure to check the possible combinations and show the values in descending order.
if (integer1 > integer2 && integer2 > integer3) {
  alert(integer1 + ' -> ' + integer2 + ' -> ' + integer3);
} else if (integer1 > integer3 && integer3 > integer2) {
  alert(integer1 + ' -> ' + integer3 + ' -> ' + integer2);
} else if (integer2 > integer1 && integer1 > integer3) {
  alert(integer2 + ' -> ' + integer1 + ' -> ' + integer3);
} else if (integer2 > integer3 && integer3 > integer1) {
  alert(integer2 + ' -> ' + integer3 + ' -> ' + integer1);
} else if (integer3 > integer1 && integer1 > integer2) {
  alert(integer3 + ' -> ' + integer1 + ' -> ' + integer2);
} else {
  alert(integer3 + ' -> ' + integer2 + ' -> ' + integer1);
}

// Exercise 4 - Another way to solve

// Declare three different integer variables and assign values to them.
let integer01 = 3;
let integer02 = 5;
let integer03 = 8;

// Check the largest among the three variables
let largest = integer1;

if (integer2 > largest) {
  largest = integer2;
}

if (integer3 > largest) {
  largest = integer3;
}

// Check the smallest among the three variables
let smallest = integer1;

if (integer2 < smallest) {
  smallest = integer2;
}

if (integer3 < smallest) {
  smallest = integer3;
}

// Calculate the intermediate value by adding the three numbers and subtracting the largest and the smallest.
let intermediate = integer1 + integer2 + integer3 - largest - smallest;

// Display the values in descending order
alert(largest + ' -> ' + intermediate + ' -> ' + smallest);

// Exercise 5
// Write an algorithm that receives two numbers. Alert on screen which is the largest value received.

// Declaration of variables num1 and num2 and assignment of values
let num1 = 10;
let num2 = 20;

// Check if num1 is greater than num2
if (num1 > num2) {
  // If num1 is greater, display a message alerting that the largest number is num1
  alert('The largest number is ' + num1);
} else {
  // Otherwise, display a message alerting that the largest number is num2
  alert('The largest number is ' + num2);
}
