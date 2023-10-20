/**
Task 1
 */
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
  return `The received list has ${countEven} even elements and ${countOdd} odd elements`
}

/**
Task 2
 */
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

/**
Task 3
*/
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
