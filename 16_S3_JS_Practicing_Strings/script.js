/**
Task 1

Create a program that concatenates two names and returns a greeting phrase.
- Input: 
  - name1 = 'João'
  - name2 = 'Silva'
- Output: 'Hello João Silva!'
 */
let name1 = 'João'
let name2 = 'Silva'
let output = `Hello ${name1 + ' ' + name2}!`

console.log(output)

/**
Task 2

Create a program that adds a string to the end of another string and returns the resulting string.
- Input:
  - string1 = 'hello'
  - string2 = 'world'
- Output = 'helloword'
 */
let string1 = 'hello'
let string2 = 'world'
let output2 = string1 + string2

console.log(output2)

/**
Task 3

Create a program that receives a string in decimal number format and returns the equivalent integer.
- Input: "12.5" 
- Output: 12
*/
let stringDecimal = '12.5'
let number = parseInt(stringDecimal)

console.log(number)

/**
Task 4

Create a program that converts a string in integer format to an integer.
- Input: "12" 
- Output: 12
 */
let stringNumber = '12'
let number2 = parseInt(stringNumber)

console.log(number2)

/**
Task 5

Create a program that converts two strings in integer format to an integer, sums these numbers and displays the result
- Input 1: "12" 
- Input 2: "3" 
- Output: 15
 */
let input1 = '12'
let input2 = '3'
let n1 = parseInt(input1)
let n2 = parseInt(input2)

console.log(n1 + n2)

