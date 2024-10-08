// EXERCISE 1 - Develop a function with only one parameter. The function should return the character 'P' if the parameter is positive,
// and 'N' if the parameter is zero or negative.

function testNumber(number) {
  // function declaration with one parameter 'number'

  // To check the parameter, we need to create a conditional "if"
  // The task's rule is that we return "P" when the number is greater than zero, which we can check with `if (number > 0)`.
  // Since the parameter 'number' has only two options (greater than zero or not), we can use else for the second case and return "N".

  if (number > 0) {
    // checks if the parameter is greater than zero
    return 'P'; // if the parameter is greater than zero, returns "P"
  } else {
    // If the first validation is false, we execute the second option, returning "N"
    return 'N';
  }
}

// EXERCISE 2 - Develop a function that informs the number of digits in a given integer passed as a parameter.

function testNumberLength(number) {
  // function declaration with one parameter 'number'
  // A simple way to know the number of digits is by using the ".length" property, which gives the "length" of an element.
  // However, the Number type does not have this property, and using '.length' on a number variable would return 'undefined'.
  // To work around this, we use the toString() method combined with .length (.toString().length) to convert the number to a string before obtaining its length.
  /*
  EXAMPLE

  const x = 120;  // here we have the number 120, which does not have the .length property
  const xString = x.toString();  // now the variable 'xString' has the value "120", a string of numeric characters.
  const lengthOfX = xString.length;  // since 'xString' has the .length property, we can capture its value and say it is the length of our initial number x (120)
  */
  return number.toString().length; // here is a way to do all the steps mentioned above in one line, combining the toString() method with the .length property
}

// EXERCISE 3 - Develop a function that adds two numbers passed as parameters. The sum should only happen if the first number is greater than the second.
// Otherwise, you should return the following message: "The first number is not greater than the second."

function sumNumbers(numA, numB) {
  // Function declaration with two parameters to be compared.

  // We need to use a conditional to check the first rule of the exercise (the first number passed as a parameter must be greater than the second).
  // If the first condition is true, we should return the sum of numA + numB.
  // According to the exercise, if the first condition is false, we should return the string "The first number is not greater than the second."

  if (numA > numB) {
    // we check if numA is greater than numB, using the comparison operator ">"
    return numA + numB; // if the comparison is true, return the sum of the parameters.
  } else {
    // if the comparison (numA > numB) is false, we only have one option, which is to return the requested phrase. That's why we use else, and not another check.
    return 'The first number is not greater than the second.'; // if the if was false and we fell into the else, we return the phrase.
  }
}

// EXERCISE 4

/* Develop a function with 2 parameters. The first should be called 'word', and the second should be called 'letter'. If the word passed in the first parameter starts with the letter passed in the second parameter, return true. If the word passed in the first parameter does not start with the letter passed in the second parameter, return false. */

function verifyFirstLetter(word, letter) {
  // function creation with two parameters.

  /* To solve this exercise, we need to access the first letter of the parameter 'word'. We can do this by accessing a string's position using the notation:
  word[i], where 'i' is the index (position) we want to access. For the first letter, it would be index 0, so we will use word[0].*/

  /*
  Another problem we might face is with uppercase and lowercase letters, for example:

  Does the word "Duck" start with the letter "d"?
  If we just want to check the letter and ignore the difference between "d" and "D", the answer is yes.
  However, if we compare "D" == "d", the result would be false.
  To solve this problem, we can convert both letters to uppercase or lowercase regardless of how they are. This ensures we always compare "standardized" letters.
  */

  if (word[0].toLowerCase() == letter.toLowerCase()) {
    // Checks if the first letter of the word, transformed to lowercase, is equal to the letter also in lowercase.
    return true; // If they are the same, return true
  } else {
    return false; // if they are different (false condition), return false
  }
}

// EXERCISE 5

/*

Develop a function with two parameters to check if the time matches the opening hours of a service. The first parameter should be called 'start', and the second should be called 'end'. If the start time is greater than or equal to 11 and less than or equal to 19, return "The service is open." Otherwise, return "The service is closed."

*/

function verifyServiceHours(startTime) {
  // we create a function that will receive the time the service is requested. In this case, we don't need to worry about minutes.
  if (startTime >= 11 && startTime <= 19) {
    // we perform both checks in this if, to verify if the parameter is between 11 and 19.
    return 'The service is open.'; // if the condition is true, return the corresponding phrase
  } else {
    return 'The service is closed.'; // if the condition is false, return the corresponding phrase.
  }
}
