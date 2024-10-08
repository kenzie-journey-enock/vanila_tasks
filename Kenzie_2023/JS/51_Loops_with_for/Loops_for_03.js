//EXERCISE 1

// Function to generate the Fibonacci sequence without using an array
function fibonacciWithoutArray() {
  // Initialization of variables for the first and second terms of the sequence
  let previous = 0; // The first term is 0
  let current = 1; // The second term is 1
  let next; // Temporary variable to store the next term

  let result = ''; // String to store the Fibonacci sequence

  // Loop to generate the Fibonacci sequence up to the 15th term
  for (let i = 1; i <= 15; i++) {
    // Generate the next term in the sequence
    next = previous + current; // The next term is the sum of the two previous terms
    previous = current; // Update the previous term to the current one
    current = next; // Update the current term to the next one

    if (i === 15) {
      // If it's the last term, only add the value of the current term to the result string
      result += `${previous}`;
    } else {
      // Otherwise, add the value of the current term followed by a comma to the result string
      result += `${previous}, `;
    }
  }

  return result; // Return the Fibonacci sequence as a string
}

console.log(fibonacciWithoutArray()); // Call the fibonacciWithoutArray() function and display the result in the console

// Function to generate the Fibonacci sequence using an array
function fibonacci() {
  let previous = 0; // Initialize the first term of the sequence as 0
  let current = 1; // Initialize the second term of the sequence as 1
  let next; // Temporary variable to store the next term

  let result = []; // Array to store the Fibonacci sequence

  // Loop to generate the Fibonacci sequence up to the 15th term
  for (let i = 1; i <= 15; i++) {
    result.push(previous); // Add the value of the previous term to the result array

    next = previous + current; // Calculate the next term as the sum of the two previous terms
    previous = current; // Update the previous term to the current one
    current = next; // Update the current term to the next one
  }

  return result.join(', '); // Return the Fibonacci sequence as a string, with terms separated by commas
}

console.log(fibonacci()); // Call the fibonacci() function and display the result in the console

//EXERCISE 2

// Function that calculates the total number of grains of wheat
function totalGrains() {
  let sum = 0; // Initialize the variable to store the total sum
  let grains = 1; // Initialize the variable to store the number of grains on each square

  // Loop to iterate through the 64 squares of the chessboard
  for (let i = 1; i <= 64; i++) {
    sum += grains; // Add the number of grains to the sum
    grains *= 2; // Double the number of grains for the next square
  }

  return sum; // Return the total sum
}

console.log(totalGrains()); // Call the function and print the result
