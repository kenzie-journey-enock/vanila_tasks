// Exercise 1

function reusableSum(a, b) {
  // we created a function that takes two parameters, we named these parameters as a and b. Keep in mind that the parameter name can be anything.
  return a + b; // here we define that the return of our function will be the sum of the parameters, so we use the return a + b notation.
}

// BELOW WE WILL TEST OUR FUNCTION:

let result = 0; // In this line, we created a variable that will store the sum later, we set its initial value as zero, but this value will change in the next lines.
result = reusableSum(10, 10) * 5; // in this line, we use our function to sum and then multiply this result by 5. In this example, the notation we simulated would be (10 + 10) * 5. Note that the calculation (10 + 10) was performed by our function.

console.log(`The result of the sum is: ${result}`); // here we just display the result of our operation in the console, keep in mind that we stored the result in the variable 'result'.

// Exercise 2

function initialLetter(firstName, lastName) {
  // in this line, we created our function passing two parameters, for best practices we defined them as firstName and lastName, but the parameters can be declared with any name.
  const firstLetterFirstName = firstName[0].toUpperCase(); // at this point, we use square brackets [] to access the desired letter, in this case, we need the first letter, so we use firstName[0]. Finally, this value is stored in the created variable "firstLetterFirstName".
  const firstLetterLastName = lastName[0].toUpperCase(); // same logic as before, but now with the last name.
  return `${firstLetterFirstName} and ${firstLetterLastName}`; // finally, we define that the function's return will be a string containing the values of the variables we created earlier. For that, we use the template string notation ${}.
}

function fullName() {
  // At this point, we created a second function that will check a name. Note that in this case, we don't use parameters.
  const initials = initialLetter('john', 'doe'); // in this line, we use the previous function to return the initials and store this result in the 'initials' variable.
  return `The initials of my full name are ${initials}`; // finally, we return a standardized string added to the initials of our name, for correct formatting we use template strings once again.
}

console.log(fullName()); // here we print to the console all the return from the previously created functions.

// Exercise 3

function isEven(n) {
  // in this function, we will check if a number is even, and the return should be a boolean.
  if (n % 2 === 0) {
    // in this conditional, we check if the parameter n divided by 2 has a remainder of 0, this is a way of checking if the number is even. Any number that has a remainder of zero when divided by 2 is even.
    return true; // if our conditional is true, it means we have an even number, so we should return the boolean true.
  }

  return false; // if the conditional is false, it means the number is not even, so we return false.
}

function isOdd(n) {
  // in this function, we will do the opposite of the previous one, checking if a number n is odd.
  if (n % 2 !== 0) {
    // we know that when a number is not even, it is odd, so we use the same check as before but now using the not equal (!==), so we know that if the remainder of the division is not zero, we have an odd number.
    return true; // if the condition is true, the division by two DOES NOT have a remainder of zero, we can infer that the number is odd and return true.
  }

  return false; // if the previous check is false, the first return won't happen, so we must return the second case, which is false.
}

function productLetters(product) {
  // in this function, we will test if the parameter product (String) has an even or odd number of letters (length).
  let result = '';

  if (isEven(product.length)) {
    // in this check, we use the isEven() function to test if the length of the word in the product (product.length) is an even or odd number. Since we know that the isEven() function returns a boolean value (true/false), we can use this same return to validate with the if statement, so if the function returns true, the if will be true.
    result = 'even'; // once true, we can return the string that represents the length of our product word, in this case, "even".
  } else if (isOdd(product.length)) {
    // in this validation, we use the same logic as before, but this time using the isOdd() function, so if the number is odd, our if statement will be true.
    result = 'odd'; // finally, if the length of the product word is odd, we return the string "odd".
  }

  return `The length of the product name is ${result}`; // here we return a formatted message that includes whether the product name has an even or odd length.
}

console.log(productLetters('Notebook')); // we print to the console the result of checking the length of the word 'Notebook'.
