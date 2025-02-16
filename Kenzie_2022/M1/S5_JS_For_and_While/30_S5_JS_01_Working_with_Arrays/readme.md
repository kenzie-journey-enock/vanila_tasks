# S5 JS Working with Arrays

Use of arrays.

## Task 1

Write a function that receives a string value with at least 5 characters. Insert the received value into an array and return the generated array.

```js
function stringsArray(text) {
  if (text.length < 5 || typeof text != 'string')  {
    return 'Parameter is not a string or has few letters, enter a string of 5 characters.'
  }
  return new Array(text)
}

console.log(stringsArray('text'))
console.log(stringsArray('texti'))
console.log(stringsArray('textii'))
console.log(stringsArray(1))
```

## Task 2

Write a function that takes a value of type number. Use the received value to access a position in the following array:

`let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠`

If the position exists, return the name found in it. ⁠If no position with the received value is accessed, ⁠alert: "Value not found".

```js
let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]

function findInArrayByIndex(index, arr) {
  let ret
  index < arr.length ? ret = arr[index] : ret = 'Value not found'
  return ret
}

console.log(findInArrayByIndex(0, arr))
console.log(findInArrayByIndex(1, arr))
console.log(findInArrayByIndex(4, arr))
```

## Task 3

Create an array of numbers, containing values ​​from 1 to 10. Create a function that takes an integer.

Access the position of the number array using the received value. Test whether the value contained in the position is even or odd.

If it is even, return: "The value found in this position is even",
If it is odd, return: "The value found in this position is odd".

```js
let arr = new Array()
for (let i = 1; i <= 10; i++) {
  arr.push(i)
}

function findAndVerify(index, arr) {
  if (typeof index != 'number' || index < 0) {
    return 'The parameter must be an integer.'
  }
   if (typeof arr != 'object') {
    return 'The parameter must be an array.'
  }
  if (arr[index]) {
    if (arr[index]% 2 == 0){
      return `The value (${arr[index]}) found in this position (${index}) is even.`
    } else {
       return `The value (${arr[index]}) found in this position (${index}) is odd.`
    }
  }
  if (!arr[index]) {
    return 'Value not found.'
  }
}

for (let j = 0; j < arr.length; j++) {
  console.log(findAndVerify(j, arr))
}
console.log(findAndVerify(10, arr))
console.log(findAndVerify('10', arr))
```

## Task 4

Given the array of names:
`⁠let names = ["Pedro", "Rafael", "José"]⁠`

Create a function that takes the list of names as a parameter. 
The function must check which of the names in the list has the greatest number of characters and return the name.

Test each position using repeating structure unless the list has only one value entered.

Use this format: "Name x is the longest in the list";

```js
let names = ["Pedro", "Rafael", "José"]

function longestName(list) {
  let longest = ''
  for (let i = 0; i < list.length; i++) {
    if (i == 0) {
      longest = list[i]
    }
    if (list[i].length > longest.length) {
      longest = list[i]
    }
  }

  return `Name ${longest} is the longest in the list.`
}

console.log(longestName(names))
```

## Task 5

Given the array of numbers as an example:
`⁠numbers = [1,4,6,9,11,8]`

Write a function that takes the list of numbers as a parameter. 
The function must sum the values ​​of the last two positions in the list and store the sum value in a variable.

Use the variable to test whether the sum value is a multiple of 2.

If yes, return: "The sum is a multiple of 2."
Otherwise: "The sum is not a multiple of 2"


```js
let numbers = [1,4,6,9,11,8]
let numbers2 = [11,9]

function verifySumMultipleOfTwo(list) {
  let last = list[list.length -1]
  let penultimate = list[list.length -2]
  let sum = last + penultimate
  let ret = ''

  sum%2 == 0 ? ret =`The sum of ${last} and ${penultimate} is a multiple of 2 | Sum = ${sum}` : 
  ret =`The sum of ${last} and ${penultimate} is not a multiple of 2 | Sum = ${sum}`

  return ret
}

console.log(verifySumMultipleOfTwo(numbers))
console.log(verifySumMultipleOfTwo(numbers2))
```

## Task 6

Given the name array as an example:
`⁠let names = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠`

Write a function that takes as parameters the list of names, a name (string) and an integer value (number) to represent the position.

Access the list at the position that corresponds to the integer value received and store the value contained in the position in a variable.

Test whether the name received by the function as a parameter is the same as that stored in the variable.

Remember to normalize the data before testing.

If the values ​​are the same, return: "I got it right".
If not, say: "It's not who I thought"

```js
let names = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]

function findName(name, position) {
  let ret = ''
  names[position] === name ? ret = 'I got it right.' : ret = "It's not who I thought"
  return ret
}

console.log(findName('José', 2))
console.log(findName('José', 3))
```

## Task 7

Given two numeric arrays as an example.
`⁠let numbers = [1,2,3,4,5,6,10,7]`
`⁠let otherNumbers = [5,7,9,4,2,3,9]`

Write a function that takes the two lists of numbers as parameters. The function must be able to identify which of the two arrays is the largest.

After identifying the largest array, return the last element of the array.

Use this format: "The largest list is the list whose last number is: x"


```js
let numbers = [1,2,3,4,5,6,10,7]
let otherNumbers = [5,7,9,4,2,3,9]

function largestList(list1, list2) {
  let largest = list1.length > list2.length ? list1 : list2

  return `The largest list is the list whose last number is: ${largest[largest.length - 1]} | The list is: ${largest}`
}

console.log(largestList(numbers, otherNumbers))
```
