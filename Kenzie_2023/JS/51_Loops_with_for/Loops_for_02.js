// Exercise 1: Write a function that displays the squares of all integers within the range of 15 to 200.

// Define a function called squaresOfIntegers.
function squaresOfIntegers() {
  // Start a loop where the variable 'i' begins at 15 and continues while 'i' is less than or equal to 200.
  for (let i = 15; i <= 200; i++) {
    // Print the result of multiplying 'i' by itself, i.e., the square of 'i'.
    console.log(i * i);
  }
}

// squaresOfIntegers();

// Exercise 2: Write a function that presents the sum of the first one hundred natural numbers.

// Define a function called sumFirstHundred.
function sumFirstHundred() {
  // Declare and initialize the variable totalSum with the value 0.
  let totalSum = 0;

  // Start a loop where the variable 'i' begins at 1 and continues while 'i' is less than or equal to 100.
  for (let i = 1; i <= 100; i++) {
    // Add the value of 'i' to the totalSum variable, accumulating the sum of the numbers from 1 to 100.
    totalSum = totalSum + i;
  }

  // Return the final value of totalSum after the loop is completed.
  return totalSum;
}

// console.log(sumFirstHundred()); // Outputs: 5050

// Exercise 3: Write a function that displays all numerical values less than 200 that are divisible by 4.

// Define a function called divisibleBy4.
function divisibleBy4() {
  // Start a loop where the variable 'i' begins at 0 and continues while 'i' is less than 200.
  for (let i = 0; i < 200; i++) {
    // Check if 'i' is divisible by 4 (i.e., if the remainder of the division by 4 is equal to 0).
    if (i % 4 === 0) {
      // If the condition is true, print the value of 'i'.
      console.log(i);
    }
  }
}

// divisibleBy4();

// Exercise 4: Write a function that calculates the sum and the arithmetic mean of the even values within the numerical range from 50 to 70.

function sumAndAverageOfEvens() {
  // Declare and initialize the variable sum with the value 0, which will be used to accumulate the sum of even numbers.
  let sum = 0;
  // Declare and initialize the variable evenNumbersCount with the value 0, which will be used to count the number of even numbers.
  let evenNumbersCount = 0;

  // Start a loop where the variable 'i' begins at 50 and continues while 'i' is less than or equal to 70.
  for (let i = 50; i <= 70; i++) {
    // Check if 'i' is an even number (i.e., if the remainder of the division by 2 is equal to 0).
    if (i % 2 === 0) {
      // If the condition is true, add the value of 'i' to the sum variable and increment evenNumbersCount.
      sum = sum + i;
      evenNumbersCount++;
    }
  }

  // Calculate the arithmetic mean of the even numbers by dividing the sum by the total number of even numbers.
  const arithmeticMean = sum / evenNumbersCount;

  // Return a string containing the calculated sum and the mean.
  return `The sum is ${sum} and the average is ${arithmeticMean}.`;
}

// console.log(sumAndAverageOfEvens()); // Outputs: The sum is 660 and the average is 60.
