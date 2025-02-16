# S5 JS 01 Loops For

In this list of tasks you will develop your skills using the concepts you learned about the for repetition structure.

## Task 1

Write a function called renderUpToTwenty. 
When the function is called, the numbers 0 to 20 should be printed to the console.

- Function call: renderUpToTwenty()
- output: 0,1,2,3,4,5...20.

```js
function renderUpToTwenty(){
  let num = 20
  let print = ''

  for (i = 0; i <= num; i++){
    if (i >= 5){
      print += `${i}`
      break
    }
    print += `${i},`
  }
  print += `...${num}.`

  return print
}

console.log(renderUpToTwenty())
```

## Task 2

Write a function called tenInTenToAHundred(). 
When the function is called, the numbers from 10 to 100, counting by 10, must be printed on the console.

- Function call: ⁠tenInTenToAHundred()
- Output: 10,20,30,40,50... 100

```js
function tenInTenToAHundred(){
  let num = 100
  let print = ''

  for (i = 0; i <= num; i += 10){
    if (i >= 50){
      print += `${i}`
      break
    }
    print += `${i},`
  }
  print += `...${num}.`

  return print
}

console.log(tenInTenToAHundred())
```

## Task 3

Write a function called oddUpToTwenty(). 
When the function is called, present values between 0 and 20 that are odd to the console.

- Function call: oddUpToTwenty()
- Output: 1,3,5,7,9...19

```js
function oddUpToTwenty(){
  let num = 20
  let print = ''

  for (i = 0; i <= num; i++){
    if (i%2 != 0){
      if (i == num - 1) {
        print += `${i}.`
      }
      if (i < num - 1){
        print += `${i},`
      }
    }
  }

  return print
}

console.log(oddUpToTwenty())
```

## Task 4

Write a function called evenUpToTwenty(). 
When the function is called, present values between 0 and 20 that are even in the console.

- Function call: evenUpToTwenty()
- Output: 0,2,4,6,8...20

```js
function evenUpToTwenty(){
  let num = 20
  let print = ''

  for (i = 0; i <= num; i++){
    if (i%2 == 0){
      if (i == num) {
        print += `${i}.`
      }
      if (i < num){
        print += `${i},`
      }
    }
  }

  return print
}

console.log(evenUpToTwenty())
```

## Task 5

Write a function called fromNegativeToPositive(). 
When the function is called, present values from -10 to 0.

- Function call: fromNegativeToPositive()
- Output: -10,-9,-8,-7...0


```js
function fromNegativeToPositive(){
  let num = -10
  let print = ''

  for (i = num; i <= 0; i++){
    if (i == 0){
      print += `${i}.`
      break
    }
    print += `${i},`
  }

  return print
}

console.log(fromNegativeToPositive())
```

## Task 6

Write a function called inDescendingDirection. 
When the function is called, present values from 10 to 0 in the console.

- Function call: inDescendingDirection()
- Output: 10,9,8,7...0

```js
function inDescendingDirection(){
  let num = 10
  let print = ''

  for (i = num; i >= 0; i--){
    if (i == 0){
      print += `${i}.`
      break
    }
    print += `${i},`
  }

  return print
}

console.log(inDescendingDirection())
```

## Task 7

Write a function called toSquare(). 
When the function is called, present the square of the values in the sequence from 1 to 10.

- Function call: toSquare()
- Output: 1,4,9,16...100

```js
function toSquare(){
  let num = 10
  let print = ''

  for (i = 1; i <= num; i++){
    if (i == num){
      print += `${i * i}.`
      break
    }
    print += `${i * i},`
  }

  return print
}

console.log(toSquare())
```