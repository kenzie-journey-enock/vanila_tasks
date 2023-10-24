/**
Task 1
 */
function verticalTextWhile(text) {
  let i = 0
  while(i < text.length) {
    console.log(text[i])
    i++
  }
}

function verticalTextFor(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i])
  }
}

verticalTextWhile('LoopWhile')
verticalTextWhile('LoopFor')

/**
Task 2
 */
function incrementText(text) {
  let print = ''

  for (let i = 0; i < text.length; i++){
    print += text[i]
    console.log(print)
  }
}

incrementText("Backend")

/**
Task 3
*/
function incrementTextBackwards(text) {
  let print = ''

  for (let i = text.length - 1; i >= 0 ; i--){
    print = text[i] + print
    console.log(print)
  }
}

incrementTextBackwards("Fullstack");

/**
Task 4
 */
function padEnd(word, amount, character) {
  let print = word
  for (let i = 0; i < amount; i++){
    print += character
  }
  console.log(print)
}

padEnd("Kenzie", 5, "foo");
padEnd("Kata", 8, "*");

/**
Task 5
 */
function subString(word, start, end) {
  let print = ''

  for (let i = 0; i < word.length; i++){
    if (i > start && i < end) {
      print += word[i]
    }
    if (i == end) {
      break
    }
  }

  console.log(print)
}

subString("Mozilla", 0, 4)
subString("Chrome", 3, 5)

/**
Task 6
 */
function stringRepeater(text, amount) {
  let print = ''
  for (let i = 0; i < amount; i++) {
    print += `${text} `
  }

  console.log(print)
}

stringRepeater("Because I'm happy. ", 3);

/**
Task 7
 */
function stringCentralizer(word, amount, character) {
  let space = ''
  for (let i = 0; i < amount; i++) {
    space += character
  }

  let print = `${space} ${word} ${space}`

  console.log(print)
}

stringCentralizer("JavaScript", 8, "=");

