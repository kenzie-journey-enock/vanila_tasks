# S8 JS Counting Houses

Get the number right.

## Task

You were invited to develop an application that consists of generating a random number and each participant trying to guess it.

You must develop the functionalities of this application by following a few steps.

Develop a function called generateRandomNumber(). This function takes no parameters.

The function must return a random number when called.

To generate a random value use Math.random(). The generated value must be a positive integer up to 20.

Attention: remember that Math.random() generates floating numbers, which will make testing difficult, if not treated. Use some method to round to the nearest integer.

Develop a function called verifyGuess(). This function will receive a random number and the given value as a guess.

In the verifyGuess() function, you must create a tentative variable starting at 1.

Define a while loop that must check whether the Random number is equal to the guess value. For each iteration in the scope of the loop, the attempt variable must be increased by +1.

While the guess is incorrect, alert: "Try again".

If the guess is right, warn: "You got it right on try x."

Develop a variable called randomnumber to store the return of the generateRandomNumber() function.

Develop a variable to store the user's guess. Use the prompt as usual, taking only positive integers.

Call the function verifyGuess() passing the Random number and the guess.
```js
    function promptInt(msg){
      while(true){
        let value = parseFloat(prompt(msg))
        if (!isNaN(value)) return value
        alert('Try a number')
      }
    }
    function generateRandomNumber(){
      return Math.floor(Math.random() * (20 - 0 + 1) + 0)
    }
    function veryGuess(number, guess){
      let tentative = 1
      while(number != guess){
        tentative++
        alert('Try again')
        guess = promptInt('Enter your guess: ')
      }
      alert(`You got it right on try ${tentative}.`)
    }
    let randomNumber = generateRandomNumber()
    let guess = promptInt('Enter your guess: ')
    veryGuess(randomNumber, guess)
```