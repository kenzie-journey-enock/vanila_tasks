// Challenge - JavaScript: Enigma

function countWords(word) {
  let count = 0;

  // Check if the first letter of the word is not uppercase
  // If it is not, consider that the word starts with a new word
  if (word[0] != word[0].toUpperCase()) {
    count = 1;
  }

  let flag = false;

  // Loop through each letter of the word
  for (let i = 0; i < word.length; i++) {
    // Check if the current letter is uppercase
    if (word[i] == word[i].toUpperCase()) {
      flag = true;
    }
    // Check if the current letter is not uppercase and the flag is set
    // This indicates that a new word has started
    else if (word[i] != word[i].toUpperCase() && flag) {
      flag = false;
      count++;
    }
  }

  // Return the number of counted words
  return count;
}

console.log(countWords("sss.aasd.sss")); // Output will depend on the logic
console.log(countWords("sssaasdsSs")); // Output will depend on the logic
console.log(countWords("sssa1asdss")); // Output will depend on the logic
