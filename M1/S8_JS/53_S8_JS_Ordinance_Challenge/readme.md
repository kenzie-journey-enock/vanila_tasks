# S8 JS Ordinance Challenge

## Task

This activity is a challenge, you will have to think about each step of the solution.
In this activity you will use the concepts of variables and conditionals.

Develop an algorithm for an event house. Your algorithm should ask the user to enter; name, age and check if you are accompanied.

Your algorithm must be able to check whether access is allowed or not allowed, some characteristics must be respected.

Create three variables name, age and isAccompanied

Assign values to these variables using the prompt.

isAccompanied is a boolean variable, but the user will not type true or false but rather "s" or "n".

If the user types "n" the variable isAccompanied receives false, otherwise it receives true.

Test if the age is equal to or over 18, if not, it should alert:
- entry is not permitted for names: Minors,
- Otherwise, you should check if you are accompanied, if so, you should alert:
   - Entry allowed for name: Grant discount
- If you are not accompanied, you must alert:
   - Entry allowed for name: Full value.

```js
function promptAge(){
  while(true){
    let age = parseFloat(prompt('Enter your age: '))
    if (!isNaN(age)) return age
    alert('Try a number')
  }
}
function promptIsAccompanied(){
  let answer = prompt('Is Accompanied? ("s" or "n") : ')

  while(answer != 's' && answer != 'n'){
    alert('Invalid enter. Try "s" or "n". ')
    answer = prompt('Is Accompanied? ("s" or "n") : ')
  }
  if (answer == 's') return true
  return false
}
let name = prompt('Enter your name: ')
let age = promptAge()
let isAccompanied = promptIsAccompanied()
const user = {
  name,
  age,
  isAccompanied
}
if (user.age < 18){
  alert(`Entry is not permitted for ${name}: Minors`)
}
else if (user.isAccompanied){
  alert(`Entry allowed for ${name}: Grant discount`)
}
else {
  alert(`Entry allowed for ${name}: Full value`)
}
alert(`|| Client: ${name} | Age: ${age} | Accompanied: ${isAccompanied ? 'Yes' : 'No'} ||`)

```