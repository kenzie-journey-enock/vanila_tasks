let winner = {
  name: 'Adamastor',
  birth: '09/16/1986',
  cpf: '123.321.789-98',
  marital_status: 'Married'
}

let person1 = {
     name: 'Cleitompson',
     birth: '09/16/1986',
     cpf: '123.421.789-78',
     marital_status: 'Married'
  }
let person2 = {
     name: 'Burilio',
     birth: '09/16/1966',
     cpf: '113.422.779-78',
     marital_status: 'Married'
  }

let who_came = []

function isWinner(person){
  if (person.name === winner.name && person.cpf === winner.cpf){
    return {
      lottery: "It's a winner!",
      ...person
    }
  }
  who_came.push(person)
  return {
      lottery: "Not a winner!",
      ...person
    }
}

const day1 = isWinner(person1)
console.log('Day 1: ', day1)
// console.log(('Who Came D1: ', who_came))
const day2 = isWinner(person2)
console.log('Day 2: ', day2)
// console.log(('Who Came D2: ', who_came))
const day3 = isWinner(winner)
console.log('Day 3: ', day3)
// console.log(('Who Came D3: ', who_came))

function getWhoCame(who_came){
  let list = []
  for (let i = 0; i < who_came.length; i++){
    list.push(who_came[i].name)
  }
  return list.toString()
}

console.log('Who came list: ', getWhoCame(who_came))
console.log('Who came: ', who_came)