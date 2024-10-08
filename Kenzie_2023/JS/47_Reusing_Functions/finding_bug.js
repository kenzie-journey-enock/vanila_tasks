//Exercise 1
function calculateBMI(weight, height) {
  const heightSquared = height * height;
  const bmi = weight / heightSquared;
  return bmi;
}

//Exercise 2
function calculateAge(name, birthYear, futureYear) {
  const age = futureYear - birthYear;
  return `In ${futureYear}, ${name} will be ${age} years old`;
}

//Exercise 3
function digitsInANumber(n) {
  const str = `${n}`;
  let count = str.length;

  // If the number is not an integer, subtract one to ignore the decimal point
  if (n != parseInt(n)) {
    count = count - 1;
  }

  return count;
}

//Exercise 4
function dayOfTheWeek(n) {
  let result = '';

  if (n == 1) {
    result = 'Sunday';
  } else if (n == 2) {
    result = 'Monday';
  } else if (n == 3) {
    result = 'Tuesday';
  } else if (n == 4) {
    result = 'Wednesday';
  } else if (n == 5) {
    result = 'Thursday';
  } else if (n == 6) {
    result = 'Friday';
  } else if (n == 7) {
    result = 'Saturday';
  } else {
    result = 'Invalid Value';
  }

  return result;
}
