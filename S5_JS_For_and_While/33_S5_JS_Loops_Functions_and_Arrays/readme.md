# S5 JS Loops Functions and Arrays

Practicing Loops, Functions and Arrays.

## Task 1

Write a function that can insert new elements into a list. 
The list can store a maximum of 10 elements. 
⁠String elements longer than 7 characters are not allowed.

If successful, return: "Element inserted successfully, list is now: x"
where x is the updated list.

In case of failure, return: "Unable to enter this value"

```js
function insertElements(list, element) {
  let countStr = 0
  list.push(element)
  if (list.length > 10){
    return 'Unable to enter this value. The list can store a maximum of 10 elements.'
  }
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] == 'string') {
      countStr++
    }
    if (countStr > 7) {
      return '⁠Unable to enter this value. String elements longer than 7 characters are not allowed.'
    }
  }
  return `Element (${element}) inserted successfully, list is now: ${list}`
}
let list1 = [1, 2, 'x', '42', 42] // Element (${element}) inserted successfully, list is now: ${list}
console.log(insertElements(list1, 42))

let list2 = [ 2, 'x1', '42', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7'] // String elements longer than 7 characters are not allowed.
console.log(insertElements(list2, 42))

let list3 = [ 2, 'x1', '42', 42, 'x2', 'x3', 'x4', 'x5', 'x6', 'x7'] // The list can store a maximum of 10 elements.
console.log(insertElements(list3, 42))
```

## Task 2

Write a function that takes a list as a parameter. 
List a must have exactly 15 integer elements. 
⁠Also create a list b of the same type, observing the following formation law:

"Every element of matrix b must be the square of the corresponding element of matrix a."

Return the resulting list b.

```js
function verifyLists(listA, listB) {
  for (let i = 0; i < 15; i++) {
    if (typeof listA[i] != 'number' || listA.length > 15) {
      return 'List A must have exactly 15 integer elements.'
    }
    if (typeof listB[i] != 'number' || listB.length > 15) {
      return 'List B must have exactly 15 integer elements.'
    }
  }
  return 'OK'
}

function squareOfList(listA, listB) {
  for (let i = 0; i < listA.length; i++) { 
    listB[i] = listA[i] * listA[i]
  }
  let ret = verifyLists(listA, listB)
  if (ret === 'OK') {
    ret = listB 
  }
  return ret
}

let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
let list4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'x', '15']

console.log(squareOfList(list1, []))
console.log(squareOfList(list2, []))
console.log(squareOfList(list3, []))
console.log(squareOfList(list4, []))
```
