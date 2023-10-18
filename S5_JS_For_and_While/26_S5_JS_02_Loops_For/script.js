/**
Task 1
 */
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

/**
Task 2
 */
function sumNaturalNumbers(){
  let num = 100
  let sum = 0

  for (i = 0; i <= num; i++){
    sum += i
  }

  return sum
}

console.log(sumNaturalNumbers())

/**
Task 3
*/
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

/**
Task 4
 */
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
