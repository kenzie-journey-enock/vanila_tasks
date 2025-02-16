/**
Task 1
 */
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

/**
Task 2
 */
let arrT2 = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]

function findInArrayByIndex(index, arr) {
  let ret
  index < arr.length ? ret = arr[index] : ret = 'Value not found'
  return ret
}

console.log(findInArrayByIndex(0, arrT2))
console.log(findInArrayByIndex(1, arrT2))
console.log(findInArrayByIndex(4, arrT2))

/**
Task 3
*/
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

/**
Task 4
 */
let namesT4 = ["Pedro", "Rafael", "José"]

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

console.log(longestName(namesT4))

/**
Task 5
 */
let numbersT5 = [1,4,6,9,11,8]
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

console.log(verifySumMultipleOfTwo(numbersT5))
console.log(verifySumMultipleOfTwo(numbers2))

/**
Task 6
 */
let names = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]

function findName(name, position) {
  let ret = ''
  names[position] === name ? ret = 'I got it right.' : ret = "It's not who I thought"
  return ret
}

console.log(findName('José', 2))
console.log(findName('José', 3))

/**
Task 7
 */
let numbers = [1,2,3,4,5,6,10,7]
let otherNumbers = [5,7,9,4,2,3,9]

function largestList(list1, list2) {
  let largest = list1.length > list2.length ? list1 : list2

  return `The largest list is the list whose last number is: ${largest[largest.length - 1]} | The list is: ${largest}`
}

console.log(largestList(numbers, otherNumbers))