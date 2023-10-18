# S5 JS 01 Loops While

Practicing loops while

## Task 1

The menu for a snack bar is as follows:

| Specification | Code | Price |
| ------- | ------- | ------- |
| Hot Dog | 101 | $1.20 |
| Simple Bauru | 102 | $1.30 |
| Bauru with egg | 103 | $1.50 |
| Burger | 104 | $1.20 |

Calculate and alert the total to be paid. Consider that the customer must enter the number 0 when the order is closed.

When the customer enters an invalid value, an alert will appear with the message: "Order unavailable" or "Order not found".


```js
let choice = parseInt(prompt("Enter product code or 0 to exit"))
let totalOrderValue = 0
let quantity = 0
while(choice != 0){
    if(choice == 100){
        quantity = parseInt(prompt("How much is this item?"))
        totalOrderValue += quantity * 1.20
    }else if(choice == 101){
        quantity = parseInt(prompt("How much is this item?"))
        totalOrderValue += quantity * 1.30
    }else if(choice == 102){
        quantity = parseInt(prompt("How much is this item?"))
        totalOrderValue += quantity * 1.50

    }else if(choice == 103){
        quantity = parseInt(prompt("How much is this item?"))
        totalOrderValue += quantity * 1.20

    }else if(choice == 104){
        quantity = parseInt(prompt("How much is this item?"))
        totalOrderValue += quantity * 1.30
    }else{
        alert('Product unavailable')
    }
    choice = parseInt(prompt("Enter the product code or 0 to complete the order"))
}
alert(`Your order was at ${totalOrderValue}`)
```

## Task 2

Write a program that asks for a value between zero and ten. 
Show a message if the value is invalid and continue asking until the user enters a valid value.

```js
  let choice = parseFloat(prompt("Enter value between 0 and 10!"))

  while(choice < 0 || choice > 10) {
    alert(`${choice} is invalid...`)
    choice = parseFloat(prompt("Enter value between 0 and 10!"))
  }
  alert(`${choice} is valid!`)
```


## Task 3

Write a program that reads a username and password and does not accept the password that is the same as the username, showing an error message and asking for the information again.

```js
let username = prompt('Enter your username:')
let password = prompt('Enter yout password:')

while(username == password) {
    alert('Username or password must be different!')
    username = prompt('Enter your username:')
    password = prompt('Enter yout password:')
}
alert('Come in! Welcome!')
```


## Task 4

Write a program that as long as the input is positive integers, less than 10, continues adding. 
When a negative value or greater than 10 is entered, stop execution, alert the sum and average.

```js

let value = parseFloat(prompt("Enter value between 0 and 10!"))
let sum = 0
let count = 0

while(value >= 0 && value <= 10) {
    sum += value
    count++
    alert(`Added value! Sum is ${sum}`)
    alert(`Count numbers: ${count}`)

    value = parseFloat(prompt("Enter value between 0 and 10!"))
}
alert('Stop!')

let average = sum / count
alert(`The final sum is: ${sum}`)
alert(`The average is: ${average}`)
```


## Task 5

Make a program that records votes. In a student government election there are only 3 candidates, candidate a, candidate b and candidate c.

Ask the user to enter the letter corresponding to a candidate and increase the number of votes for the candidate by +1. ⁠If the user enters a value that does not correspond to a candidate, alert: "Candidate not found".

At the end of each vote, the message: "Vote registered successfully" will appear.

To close the vote, you must enter a stop flag (control variable): use x to do this.

When the x value is entered, alert the number of votes each candidate had.

```js
  const candidate_a = {
      votes: 0
  }
  const candidate_b = {
      votes: 0
  }
  const candidate_c = {
      votes: 0
  }
  let code = prompt('Vote for student government: (a, b or c) (Press "x" for exit.)')
  while(code != 'x' || code == 'a' || code == 'b' || code == 'c') {
    while(code != 'a' && code != 'b' && code != 'c' || code == 'x') {
      if (code == 'x') {
        break
      }
      alert(`Candidate ${code}, not found. Try 'a', 'b' or 'c'.`) 
      code = prompt('Vote for student government: (a, b or c) (Press "x" for exit.)')
    }
    if (code == 'x') {
        break
    }
    if (code == 'a'){
        candidate_a.votes++
    }
    if (code == 'b'){
        candidate_b.votes++
    }
    if (code == 'c'){
        candidate_c.votes++
    }
    alert(`Vote in candidate ${code}, registered successfully!`)
    code = prompt('Vote for student government: (a, b or c) (Press "x" for exit.)')
  }
  if (candidate_a.votes > candidate_b.votes && candidate_a.votes > candidate_c.votes) {
      alert(`Candidate a, win!`)
  }
  if (candidate_b.votes > candidate_a.votes && candidate_b.votes > candidate_c.votes) {
      alert(`Candidate b, win!`)
  }
  if (candidate_c.votes > candidate_b.votes && candidate_c.votes > candidate_a.votes) {
      alert(`Candidate c, win!`)
  }
  alert(`Votes -> a = ${candidate_a.votes} | b = ${candidate_b.votes} | c = ${candidate_c.votes}`)
  alert(`End.`)
```