// Exercise 1

function replaceWord(sentence, oldWord, newWord) {
  // Replaces all occurrences of the old word with the new one using the replaceAll() method of the string
  const newSentence = sentence.replaceAll(oldWord, newWord);

  // Returns the new sentence
  return newSentence;
}

// Exercise 2

function calculateAverage(grade1, grade2, grade3) {
  // Calculates the arithmetic average of the grades and rounds to one decimal place using the toFixed() method of the number
  const average = ((grade1 + grade2 + grade3) / 3).toFixed(1);

  // Returns a message with the student's average
  return `The student's average is ${average}.`;
}

// Exercise 3

function calculateTotalValue(unitPrice, quantity) {
  let totalValue; // declaring the variable for the total value

  if (quantity >= 10) {
    // checks if the purchased quantity is greater than or equal to 10
    totalValue = (unitPrice * quantity * 0.8).toFixed(2); // applies a 20% discount on the unit price and calculates the total value with two decimal places using toFixed
  } else if (quantity >= 5) {
    // checks if the purchased quantity is greater than or equal to 5
    totalValue = (unitPrice * quantity * 0.9).toFixed(2); // applies a 10% discount on the unit price and calculates the total value with two decimal places using toFixed
  } else {
    // if the purchased quantity is less than 5, there is no discount
    totalValue = (unitPrice * quantity).toFixed(2); // calculates the total value with two decimal places using toFixed
  }

  totalValue = totalValue.replace('.', ','); // replaces the dot with a comma in the total value string

  return `The total value of the purchase is R$ ${totalValue}.`; // returns a message with the total purchase value
}
