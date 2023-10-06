/**
Task 1
 */
function sumReusable(a, b) {
  return a + b
}
let result = 0
result = sumReusable(10, 10) * 5

console.log(result)

/**
Task 2
 */
function initialLetter(name, surname){
  return `-${name[0].toUpperCase()}--${surname[0].toUpperCase()}-`
}

function fullName(){
  return `The initial letters of my full name are ${initialLetter('bernardo', 'enock')}`
}

console.log(fullName())

/**
Task 3
*/
function even(n){
  if (typeof n == 'number'){
    if (n % 2 == 0){
      return true
    }
    return false
  }
  return 'Just numbers works'
}

function odd(n){
  if (typeof n == 'number'){
    if (n % 2 != 0){
      return true
    }
    return false
  }
  return 'Just numbers works'
}

function lettersProduct(product){
  if (typeof product == 'string'){
    let lengthLetters = product.length
    if (even(lengthLetters)) return 'The number of letters in this product is even'
    if (odd(lengthLetters)) return 'The number of letters in this product is odd'
  }

  return 'Just strings works'
}


console.log(lettersProduct('carro'))
console.log(lettersProduct('uvas'))
console.log(lettersProduct(null))
console.log(lettersProduct(0))
