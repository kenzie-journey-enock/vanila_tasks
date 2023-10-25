# S8 JS Puzzle

You work in intelligence for a police team. The exchange of messages between two Cracker's groups was identified.

The police chief believes they are planning something. Other members of the police have already managed to identify the pattern of some letters but have not yet been able to identify where the words separate, generating disconnected and imprecise translations.

Make a program to automate the calculation and count how many words there are in the typed text.

The program must receive a text with up to 250 characters and must output the number of words N (Number) that the text contains.

You discovered that in writing space is not used even to separate words, instead you noticed that any character that is not a lowercase letter between a and z will be considered a word separator.

Input:⁠sss.aasd.sss
Output: 3

Input: sssaasdsSs
Output: 2

Input: sssa1asdss
Output: 2

```js
function countWords(msg){
  let words = msg.split(/[^a-z]/)
  let count = 0

  for (i in words){
    if (words[i] !== '') {
      count++
    }
  }
  return count
}

console.log(countWords('sss.aasd.sss'))
console.log(countWords('sssaasdsSs'))
console.log(countWords('sssa1asdss'))
```