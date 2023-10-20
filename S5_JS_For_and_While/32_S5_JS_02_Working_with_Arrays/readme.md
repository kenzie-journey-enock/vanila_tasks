# S5 JS Working with Arrays 2

Use of arrays.

## Task 1

Write a function that receives a list of dimension 30 composed only of integers. 
The function must return the number of even and odd values ​​existing in the received list.

Examples of output: ⁠The received list has x even elements and y odd elements.

```js
function getInt(min, max) {
  return parseInt(Math.random() * (max - min) + min)
}
let listA = new Array()
for (let i = 0; i < 30; i++){
  listA.push(getInt(0, 100))
}

function verifyEvenAndOdd(list) {
  if (list.length < 30 || list.length > 30){
    return 'The list must have 30 composed only of integers.'
  }
  let countEven = 0
  let countOdd = 0
  for (let i = 0; i < list.length; i++){
    if (list[i]%2 == 0){
      countEven++
    }
    if (list[i]%2 != 0){
      countOdd++
    }
  }
  return `⁠The received list has ${countEven} even elements and ${countOdd} odd elements`
}
```

## Task 2

Write a function that takes a list b of size 10, made up of integers.⁠
Return the total number of odd elements in the array and also the percentage of the total value of odd numbers in relation to the total number of elements stored in the array.

Return the following text: "The total of odd values is x and corresponds to y% of the list"

```js
function verifyOddPercentage(list) {
  if (list.length < 10 || list.length > 10){
    return 'The list must have 10 composed only of integers.'
  }
  let countOdd = 0
  for (let i = 0; i < list.length; i++){
    if (list[i]%2 != 0){
      countOdd++
    }
  }
  let percentage = countOdd * 10
  return `The total of odd values is ${countOdd} and corresponds to ${percentage}% of the list`
}
```

## Task 3

Write a function that takes as parameters two lists a and b, each with ten elements. 
⁠The function must perform list size validation. 
If they are greater or less than 10, return: "List outside the required standards".

List a must be composed of values divisible by 2 and 3, while list b must only be composed of values that are multiples of 5. 
⁠The composition of the lists must be validated by the function. 
If the composition is not correct, return: "Disallowed values found".

```js
function listSizeValidation(listA, listB) {
  if (listA.length < 10 || listA.length > 10 && listB.length < 10 || listB.length > 10){
    return 'List outside the required standards'
  }
  for (let i = 0; i < 10; i++){
    if (listA[i]%2 != 0 && listA[i]%3 != 0 || listB[i]%5 != 0){
      return 'Disallowed values found'
    }
  }
  return 'List validated successfully!'
}
```