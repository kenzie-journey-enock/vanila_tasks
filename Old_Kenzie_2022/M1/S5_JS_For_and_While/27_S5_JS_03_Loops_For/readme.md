# S5 JS 03 Loops For

In this list of exercises you will develop your skills using the concepts you learned about the for repetition structure.

## Task 1

Write a function called fibonacciNumbers(). 
The function when called must present the values of the Fibonacci numerical sequence up to the fifteenth term.
The Fibonacci sequence is formed by:
- ⁠O, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.
- Obtaining the next term from the sum of the current term with the previous term, and so on.
- Use the variables for this exercise:
  - CURRENT -> Represents the current value of the loop counter.
  - PREVIOUS -> Represents the previous value of the counter.
  - NEXT -> Represents the next counter value.
- Fn = fn-1 + Fn-2

```js
function fibonacciNumbers(){
  let start = 0
  let end = 15
  let fibonacci = 0
  let pre = 1
  let next = 0
  let print = ``

 for (let i = start; i <= end; i++){  
    next = fibonacci                 
    
    i == end ?
    print += `${fibonacci}.`
    : print += `${fibonacci}, `
      
    fibonacci = pre + fibonacci  
    pre = next                     
} 
  return print
}

console.log(fibonacciNumbers())
```

## Task 2

Write a program that calculates and displays the sum of the number of grains of wheat that can be obtained on a chessboard, obeying the following rule:

- Place a grain of wheat in the first frame and in the following frames twice as much as the previous frame.

- In other words, in the first frame one grain is placed, in the second frame two grains are placed (at this moment, there are three grains), in the third frame four grains are placed (currently having seven grains), in the fourth frame eight grains are placed (thereby having 15 grains) up to the limit of spaces, which is 64. 
- The quantity of grains added is always double the previous quantity.
- Expected result: 18,446,744,073,709,552,000 grains on the board.

```js
function numberOfGrains(){
  let grains = 1
  let frames = 64
  let board = 0
  let print = ''

/*
frame 1 = +1 grain board = 1
frame 2 = +2 grain board = 3
frame 3 = +4 grain board = 7
frame 4 = +8 grain board = 15
*/

for (let i = 1; i <= frames; i++) {
  board += grains 
  grains += grains
}

return board + ' grains on the board.'
}

console.log(numberOfGrains())
```

