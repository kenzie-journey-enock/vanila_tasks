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
