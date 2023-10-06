# S3 Finding Bugs

In this activity the codes contain some bugs that can be solved. 
Practicing in this way you will develop your skills in analyzing logic, debugging and correcting errors.

## Task 1

You have been hired by a software company to fix some bugs. 
The company has several products and needs your help to analyze and correct some functions.

The calculateBMI function must receive two parameters, weight in kilograms and height in meters. 
It is necessary to return the user's body mass index.

Tip: Formula for the calculation is: BMI = weight / height²

### Bug
```js
function calculateBMI(weight, height) {
   let heightAoQuadrado = height * height;
   let imc = weight / height;
}

//When receiving 80 for weight and 1.80 for height, the function should return 24.691358024691358
```
### Debug
```js
function calculateBMI(weight, height) {
   let heightSquared = height * height;
   let imc = weight / heightSquared;

   return imc
}

console.log(calculateBMI(80, 1.80))
// When receiving 80 for weight and 1.80 for height, the function should return 24.691358024691358
```

## Task 2

The calculateAge function must receive three parameters: a name, yearFuture, which represents a year in the future, and yearBirth, which represents the year of birth. 
The purpose of this function is to calculate a person's future age based on the year of birth and the future year.

### Bug
```js
function calculateAge(name, futureyear, birthyear) {
   let age = birthyear + futureyear;
   return "In ${futureyear} $(name) will be $(age) years old";
}

//When receiving the parameters: ("Pedro", 2002, 2030) the function must return "In 2030 Pedro will be 28 years old".
```
### Debug
```js
function calculateAge(name, futureyear, birthyear) {
   let age = birthyear - futureyear;
   return `In ${futureyear} ${name} will be ${age} years old`;
}

//When receiving the parameters: ("Pedro", 2002, 2030) the function must return "In 2030 Pedro will be 28 years old".
console.log(calculateAge("Pedro", 2002, 2030))
```

## Task 3

The function digitsInNumber must receive as a parameter an integer or a decimal number and must return the number of digits that make up this number.

It is worth remembering that when converting a number to a text, the point that divides the integer part from the decimal part is converted together, therefore, it is necessary to deal with if the number has a floating point.

### Bug
```js
function digitsInNumber(n) {
   let str = `$(n)`;
   let count = str.length;

   if (n != parseInt(n)) {
     count = count + 1;
   }

   return n;
}

//When receiving 3.14159265 the function should return 9.
```
### Debug
```js
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
```


## Task 4

The dayOfWeek function must receive as a parameter a value in number or text format, and return in text the day of the week it represents, following the list below:
- Sunday
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
- Saturday
If the number received by parameter is invalid, you must return the text: 'Invalid Value'.

### Bug
```js
function dayOfWeek(n) {
   let result = "";

   if (n === 1 && n === '1') {
     result = 'Sunday';
   } else if(n == 2 ) {
     result = 'Monday';
   } else if(n == '3') {
     result = 'Tuesday';
   } else if(n === 4 || n === '4') {
     result = 'Wednesday';
   } else if(n = 5) {
     result = 'Thursday';
   } else if(n = '6') {
     result = 'Friday';
   } else(n == 7) {
     result = 'Saturday';
   } else if() {
     result = 'Invalid Value';
   }

   return result;
}

//When receiving '1' the function must return 'Sunday'
//When receiving 3, the function must return 'Tuesday'
//When receiving 0, the function must return 'Invalid Value'
```

### Debug
```js
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
```