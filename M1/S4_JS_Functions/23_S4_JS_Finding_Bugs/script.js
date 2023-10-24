/**
Task 1
 */
function calculateBMI(weight, height) {
  let heightSquared = height * height;
  let imc = weight / heightSquared;

  return imc
}

console.log(calculateBMI(80, 1.80))
// When receiving 80 for weight and 1.80 for height, the function should return 24.691358024691358

/**
Task 2
 */
function calculateAge(name, futureyear, birthyear) {
  let age = birthyear - futureyear;
  return `In ${futureyear} ${name} will be ${age} years old`;
}

//When receiving the parameters: ("Pedro", 2002, 2030) the function must return "In 2030 Pedro will be 28 years old".
console.log(calculateAge("Pedro", 2002, 2030))

/**
Task 3
*/
function digitsInNumber(n) {
  let str = `${n}`;
  let count = str.length;

  if (n != parseInt(n)) {
    count = count - 1;
  }

  return count;
}

//When receiving 3.14159265 the function should return 9.

console.log(digitsInNumber(3.14159265))

/**
Task 4
 */
function dayOfWeek(n) {
  let result = "";
  n = `${n}`

  if (n === '1') {
    result = 'Sunday';
  } else if(n === '2' ) {
    result = 'Monday';
  } else if(n === '3') {
    result = 'Tuesday';
  } else if(n === '4') {
    result = 'Wednesday';
  } else if(n === '5') {
    result = 'Thursday';
  } else if(n === '6') {
    result = 'Friday';
  } else if (n === '7') {
    result = 'Saturday';
  } else {
    result = 'Invalid Value';
  }

  return result;
}

//When receiving '1' the function must return 'Sunday'
//When receiving 3, the function must return 'Tuesday'
//When receiving 0, the function must return 'Invalid Value'

console.log(dayOfWeek('1'))
console.log(dayOfWeek(3))
console.log(dayOfWeek(0))


