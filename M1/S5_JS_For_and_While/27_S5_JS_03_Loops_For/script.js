/**
Task 1
 */
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

/**
Task 2
 */
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
