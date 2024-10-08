// Activity - JavaScript: Reception Challenge

// Asks the user to enter their name
const name = prompt('Enter your name')

// Asks the user to enter their age and converts it to a number
const age = Number(prompt('Enter your age'))

// Asks the user to indicate if they are accompanied ('y' for yes, 'n' for no)
const isAccompanied = prompt('Are you accompanied? Type "y" for yes and "n" for no')

// Converts the user's response to lowercase and checks if it's 'y' (indicating yes)
// If it is, assigns true to isAccompanied; otherwise, assigns false
if (isAccompanied.toLowerCase() == 'y') {
    isAccompanied = true
} else if (isAccompanied.toLowerCase() == 'n') {
    isAccompanied = false
}

// Checks if the age is less than 18
if (age < 18) {
    // Displays an alert informing that entry is not allowed due to being underage
    alert(`Entry not allowed for ${name}: Underage`)
} 
// Checks if the age is 18 or older and if the user is accompanied
else if (age >= 18 && isAccompanied) {
    // Displays an alert informing that entry is allowed with a discount
    alert(`Entry allowed for ${name}: Grant discount`)
} 
// If none of the previous conditions are met, it means the user is 18 or older and is not accompanied
else {
    // Displays an alert informing that entry is allowed at full price
    alert(`Entry allowed for ${name}: Full price`)
}
