# S3 Conditionals in Practice

This activity will serve to practice the use of variables, conditionals and logical operators.

## Task 1

Make an algorithm declaring the variables `A`, `B`, `C` starting them with the respective values `10`, `20` and `30`, and print on the screen if the sum of `A + B is less than C`.


```js
let A = 10
let B = 20
let C = 30
let sum = A + B

console.log(sum < C)
```

## Task 2

Create an algorithm declaring a variable with any numerical value and inform on the screen whether this number is even or odd.

```js
const number = 42

console.log(number % 2 == 0 ? 'Even' : 'Odd')
```

## Task 3

Declare two variables that store Boolean (logical) values and then determine whether they are both TRUE or FALSE.

```js
let bool1 = true
let bool2 = true

console.log(bool1 == bool2)
```

## Task 4

Declare three variables that store different integer numeric values and display them in descending order.

```js
let n1 = 10
let n2 = 20
let n3 = 30


let first = 0
let second = 0
let third = 0
let result = ''

if (n1 > n2 && n1 > n3) {
  first = n1
}
if (n2 > n1 && n2 > n3) {
  first = n2
}
if (n3 > n1 && n3 > n2) {
  first = n3
}
if (first == n1 && n2 < first && n2 > n3) {
  second = n2
  third = n3
}
if (first == n1 && n3 < first && n3 > n2) {
  second = n3
  third = n2
}
if (first == n2 && n1 < first && n1 > n3) {
  second = n1
  third = n3
}
if (first == n2 && n3 < first && n3 > n1) {
  second = n3
  third = n1
}
if (first == n3 && n1 < first && n1 > n2) {
  second = n1
  third = n2
}
if (first == n3 && n2 < first && n2 > n1) {
  second = n2
  third = n1
}
result = first + ', ' + second + ', ' + third

console.log(result)
```

## Task 5

Write an algorithm that takes two numbers. 
⁠On-screen alert of the highest amount received.

```js
let num1 = 4
let num2 = 2

if (num1 > num2) {
  console.log(num1)
} else {
  console.log(num2)
}
```
