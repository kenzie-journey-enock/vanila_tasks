/**
Task 1

Develop a function with just one parameter.
The function must return the character value P if the parameter is positive,
and N if the parameter is zero or negative.
 */
function oneParameter(p) {
  return p ? 'P' : 'N';
}

console.log(oneParameter());
console.log(oneParameter(42));

/**
Task 2

Develop a function that reports the number of digits in a given integer informed by parameter.
 */
function numberOfDigits(number) {
  if (typeof number === "number"){
    return number.toString().length
  }
  return 'Not number'
}
console.log(numberOfDigits(4242))

/**
Task 3

Develop a function that sum two numbers passed as a parameter.
The sum should only happen if the first number passed by parameter is greater than the second.
Otherwise you must return the following sentence: "The first number is not greater than the second."
*/
function greaterThan(n1, n2) {
  if (n1 > n2){
    return `Sum is ${n1 + n2}`
  }
  return `The first number (${n1}) is not greater than the second (${n2}).`
}

console.log(greaterThan(42, 24))

/**
Task 4

Develop a function with 2 parameters.
The first must be called a word, and the second must be called a letter.
If the word passed in the first parameter begins with the letter passed as the second parameter, return true.
If the word passed in the first parameter does not begin with the letter passed in the second parameter, return false.
 */
function firstLetter(word, letter) {
  if (letter.length == 1 && word.length > 1 && word[0] == letter) {
    return true
  }
  return false
}

console.log(firstLetter('word', 'letter'))

/**
Task 5

Develop a function with the parameter timeService to find out if the time corresponds to the operation of /question.
If the start time is greater than or equal to 11 and less than or equal to 23, return = "The /question is in opening hours."
Otherwise return = "/question is not in opening hours."
 */
function barQuestion(timeService){
  if (timeService >= 11 && timeService <= 23) {
    return 'The /question is in opening hours.'
  }
  return '/question is not in opening hours.'
}

console.log(barQuestion(10))
console.log(barQuestion(11))
console.log(barQuestion(12))
console.log(barQuestion(24))
console.log(barQuestion(23))
console.log(barQuestion(22))


