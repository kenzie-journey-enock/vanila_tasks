// Challenge - JavaScript: Guess the Number

// Function to generate a random number between 1 and 20
function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

// Function to check the user's guess against the random number
function checkGuess(randomNumber, guess) {
  let attempt = 1;

  // While the random number is different from the user's guess, keep asking for more guesses
  while (randomNumber !== guess) {
    alert("Try again");
    guess = parseInt(prompt("Enter your guess (a number between 1 and 20):"));
    attempt++;
  }

  alert(`You guessed it on attempt ${attempt}.`);
}

// Generate a random number
const randomNumber = generateRandomNumber();

// Prompt the user to enter a guess
const guess = parseInt(prompt("Enter your guess (a number between 1 and 20):"));

// Call the checkGuess function, passing the random number and the user's guess as arguments
checkGuess(randomNumber, guess);
