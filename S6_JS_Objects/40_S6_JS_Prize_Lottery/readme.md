# S6 JS Prize Lottery

In this activity we will train our knowledge of syntax and logic with Javascript.

## Task 1
### Awarded Person

You are working on the federal lottery and a client approaches you and says he has won.

The winner's data is already in the system and you now only have to compare whether the information provided by the supposed winner is really true. 
Get the necessary documents and make the appointment.

Winner Data:
```js
let winner = {
     name: 'Adamastor',
     birth: '09/16/1986',
     cpf: '123.321.789-98',
     marital_status: 'Married'
}
```

Remember that this is an object structure and not an array. 
Therefore, to access some property you must use `.`.
- Create a function that will receive the name and CPF of the supposed winner.
- Within the function you must compare the data received with the existing data.
- The function must return a string: "It's a winner!" or "Not a winner!".
- Develop a logic so that the name always has the first letter capitalized and the rest lowercase.

```js
function isWinner(name, cpf){
  if (name === winner.name && cpf === winner.cpf){
    return "It's a winner!"
  }
  return "Not a winner!"
}
```

## Task 2
### Who came for the prize?

O gerente da loteria, pediu para que você guarde as informações das pessoas que vieram atrás do prêmio.

Antes você recebia o objeto e fazia a comparação. Agora você precisa armazená-lo em uma variável e inseri-lo em uma lista, mediante a uma condição.

A lista deverá ter o nome que achar mais conveniente.
- Crie uma variável para guardar o objeto recebido.
- Com base no exercício anterior, insira todos que não ganharam o prêmio em um array.
- Crie uma função que recebe um objeto.
- Crie um array e insira o objeto passado.
- Retorne uma string contendo o número de pessoas que vieram atrás do prêmio, mas não eram ganhadores.

```js
let who_came = [
  {
     name: 'Cleitompson',
     birth: '09/16/1986',
     cpf: '123.421.789-78',
     marital_status: 'Married'
  },
  {
     name: 'Burilio',
     birth: '09/16/1966',
     cpf: '113.422.779-78',
     marital_status: 'Married'
  },
]

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

function setWhoCame(who_came){
  let list = []
  for (let i = 0; i < who_came.length; i++){
    list.push(who_came[i].name)
  }
  return list.toString()
}
```
