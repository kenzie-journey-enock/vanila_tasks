# S5 JS 02 Loops For

In this list of exercises you will develop your skills using the concepts you learned about the for repetition structure.
You must develop a function for each exercise. Name the functions according to their functionality.

## Task 1

Write a function that returns the squares of integers in the range of values from 15 to 200.

- Function call: name_of_your_function()
- Output: 225, 256, 289...40000

```js
function squareIntRange(){
  let start = 15
  let end = 200
  let print = ''

  for (i = start; i <= end; i++){
    if (i == end) {
      print += `${i * i}.`
      break
    }
    print += `${i * i},`
  }

  return print
}

console.log(squareIntRange())
```

## Task 2

Write a function that displays the sum of the first hundred natural numbers.
(1+2+3+...+98+99+100).

- Function call: name_of_your_function()
- Output: 5.050

```js
function sumNaturalNumbers(){
  let num = 100
  let sum = 0

  for (i = 0; i <= num; i++){
    sum += i
  }

  return sum
}

console.log(sumNaturalNumbers())
```


## Task 3

Write a function that returns all numeric values less than 200 that are divisible by 4.

- Function call: name_of_your_function()
- Output: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40...196

```js
function valuesLess200DivisibleBy4(){
  let num = 200
  let divisible = 4
  let print = ''

  for (i = 0; i < num; i++){
    if (i%divisible == 0) {
      if (i == 196) {
        print += `${i}.`
        break
      }
       print += `${i},`
      
    }
   
  }

  return print
}

console.log(valuesLess200DivisibleBy4())
```


## Task 4

Write a function that calculates the result of the sum and arithmetic mean of even values located in the numerical range from 50 to 70.

- sum = 50+52+54...+70
- arithmetic_average = sum / qty_even_numbers_in_interval⁠⁠ Example:
- Function call: funcao_o_nome_da_sua_funcao()
- Output: The sum is 660 and the mean is 60.

```js
function sumArithmetic(){
  let start = 50
  let end = 70
  let sum_even = 0
  let count = 0
  for (i = start; i <= end; i++){
    if (i%2 == 0){
      count++
      sum_even += i
    }
  }
  let mean = sum_even / count
  
  return `The sum is ${sum_even} and the mean is ${mean}.`
}  

console.log(sumArithmetic())
```