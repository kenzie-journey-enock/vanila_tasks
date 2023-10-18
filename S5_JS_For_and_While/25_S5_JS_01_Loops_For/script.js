/**
Task 1
 */
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

/**
Task 2
 */
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

/**
Task 3
*/
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

/**
Task 4
 */
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

/**
Task 5
 */
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

/**
Task 6
 */
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

/**
Task 7
 */
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