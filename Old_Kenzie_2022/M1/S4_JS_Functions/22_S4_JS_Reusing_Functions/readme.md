# S3 Reusing Functions

This activity will help you practice the concepts of function reuse in other contexts and scopes.

## Task 1

It is necessary to perform the sum with a function and then reuse this function to perform another mathematical operation. 
Follow the following topics:

- Declare a sumReusable function that will receive two parameters a and b.
- Develop the logic of this algorithm to obtain the result of the sum of the two parameters.
- After that and outside the function, declare a result variable and assign a value of 0 to it.
- Using the sumReusable function, you must perform the operation 10 + 10 and multiply by 5, storing the total value in the result variable.
- Show the value of the result variable through the console.

```js
function sumReusable(a, b) {
  return a + b
}
let result = 0
result = sumReusable(10, 10) * 5

console.log(result)
```

## Task 2

It is necessary to obtain a user's full name and then select only the initial letters of the first and last name, and for this it is possible to develop three functions for the task to be completed.
Follow the following topics:

- Declare a function initialLetter that will receive two parameters name and surname and will return only the first capital letter of the name and the first capital letter of the surname.
- Declare a fullName function that will not receive parameters and will return a sentence containing the initials of the first and last name. 
  - It is necessary to reuse the initial letter function to return the following sentence: "The initial letters of my full name are -initial letter of the name- -initial letter of the surname-"
- Show the sentence through the console.

```js
function initialLetter(name, surname){
  return `-${name[0].toUpperCase()}--${surname[0].toUpperCase()}-`
}

function fullName(){
  return `The initial letters of my full name are ${initialLetter('bernardo', 'enock')}`
}

console.log(fullName())
```

## Task 3

The objective of this exercise is to develop three functions to obtain a final result. 
It is necessary to obtain the number of letters in a product and check whether the total number of characters is odd or even. 
Follow the following topics:

- Declare an even function that will take a parameter n, and this parameter represents a number. 
  - Develop the logic to return true if the number was even or false if it was not even.
- Declare an odd function that will receive a parameter n, and this parameter represents a number.
  - Develop the logic to return true if the number was odd or false if it was not odd.
- Declare a lettersProduct function that will receive a product parameter, and this product will represent a string. 
  - You must obtain the number of characters, that is, the size of the word product and by reusing the even and odd functions you must check whether the size is even or odd.
- Return "The number of letters in this product is even" if the length of the word product is even or "The number of letters in this product is odd" if the length of the word product is odd.

```js
function even(n){
  if (typeof n == 'number'){
    if (n % 2 == 0){
      return true
    }
    return false
  }
  return 'Just numbers works'
}

function odd(n){
  if (typeof n == 'number'){
    if (n % 2 != 0){
      return true
    }
    return false
  }
  return 'Just numbers works'
}

function lettersProduct(product){
  if (typeof product == 'string'){
    let lengthLetters = product.length
    if (even(lengthLetters)) return 'The number of letters in this product is even'
    if (odd(lengthLetters)) return 'The number of letters in this product is odd'
  }

  return 'Just strings works'
}


console.log(lettersProduct('carro'))
console.log(lettersProduct('uvas'))
console.log(lettersProduct(null))
console.log(lettersProduct(0))
```
