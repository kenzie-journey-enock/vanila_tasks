// Exercise 1

function checkNumber(num) {
  let str = ''; // initializing an empty string variable

  if (num % 2 == 0) {
    // checking if the remainder of dividing the parameter by 2 is 0 - in the case of -12, this is true
    str = 'even'; // since it's true, assign the string 'even' to the variable str. Now str is 'even'
  } else {
    str = 'odd';
  }

  str += ', '; // concatenate a comma and a space to the variable str. Now str is 'even, '

  if (num > 0) {
    // checking if the number passed as a parameter is greater than zero, meaning it's positive - in the case of -12, this is false
    str += 'positive';
  } else {
    // since it's false, concatenate the string 'negative' to the variable str. Now str is 'even, negative'
    str += 'negative';
  }

  str += ' and '; // concatenate a space, the word 'and', and another space to the variable str. Now str is 'even, negative and '

  if (num === parseInt(num)) {
    // checking if the number passed as a parameter is an integer - in the case of -12, this is true
    str += 'has no decimal places'; // concatenate the text 'has no decimal places' to the variable str. Now str is 'even, negative and has no decimal places'
  } else {
    str += 'has decimal places';
  }

  str = 'The number ' + num + ' is ' + str; // updating the value of the variable str. Now it is 'The number -12 is even, negative and has no decimal places'

  return str; // returning the updated variable str
}

console.log(checkNumber(-12)); // calling the function with -12 as the argument, which replaces 'num' in the function

// Exercise 2

const value = 18;
let result = value / 2; // declaring result as 18/2, which equals 9
console.log(result); // it will print 9

result = result / 3; // result is now 9/3, which equals 3
console.log(result); // it will print 3

let isPair = result == 3; // checking if result (which equals 3) is equal to 3
console.log(isPair); // it will print true

if (isPair) {
  // if isPair holds a truthy value (true) - equivalent to if(isPair == true)
  result = result * 6; // result is now 3 * 6 = 18
} else {
  result = result * 12;
}

console.log(result); // it will print 18

// Exercise 3

function digitsInNumber(n) {
  const str = `${n}`; // converting the number into a string (3.141517 -> "3.141517")
  let count = str.length; // storing the length of the string (8)
  console.log(count); // it will print 8, because the string "3.141517" has 8 characters

  if (n != parseInt(n)) {
    // if the number is different from its integer conversion, meaning it's a decimal
    console.log('Entered here'); // it will print "Entered here"
    count = count - 1; // count is now 8 - 1 = 7
  }

  console.log(count); // it will print 7

  return count; // it will return 7
}

digitsInNumber(3.141517);
