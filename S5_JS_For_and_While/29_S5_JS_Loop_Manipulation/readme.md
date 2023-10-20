# S5 JS Loop Manipulation

Practicing...

## Task 1

Develop a function called verticalText, which will take a string as a parameter. The function should print the word vertically using console.log.

```js
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
```

## Task 2

Develop a function called incrementText, which will take a string as a parameter. 
The function must print the word using console.log so that it is incremented, starting only with the first letter, then the first and second and so on as per the example.

```js
function incrementText(text) {
  let print = ''

  for (let i = 0; i < text.length; i++){
    print += text[i]
    console.log(print)
  }
}

incrementText("Backend")
```

## Task 3

Develop a function called incrementTextBackwards, which will take a string as a parameter. 
The function must print the word using console.log so that it is incremented in reverse, starting only with the last letter, then the last and the penultimate and so on as per the example.

```js
function incrementTextBackwards(text) {
  let print = ''

  for (let i = text.length - 1; i >= 0 ; i--){
    print = text[i] + print
    console.log(print)
  }
}

incrementTextBackwards("Fullstack");
```

## Task 4

​Develop a function called padEnd, which will receive three parameters: a word (string), the amount of repetition of the character (number) and the repetition character (string).

Your function must return the string filled with the character according to the length passed by parameter.

```js
function padEnd(word, amount, character) {
  let print = word
  for (let i = 0; i < amount; i++){
    print += character
  }
  console.log(print)
}

padEnd("Kenzie", 5, "foo");
padEnd("Kata", 8, "*");
```

## Task 5

Develop a function called subString, which will receive three parameters: a word (string), the starting position (number) and the ending position (number). 
Your function must return the part of the string **between** the beginning and end of the indexes passed by parameter (not including the characters of the indexes themselves).


```js
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
```

## Task 6

Develop a function called stringRepeater, which will receive two parameters: a word or phrase (string) and the amount of repetition (number). 

Your function must return a new string that contains the specified number of concatenated copies of the word passed by parameter.

```js
function stringRepeater(text, amount) {
  let print = ''
  for (let i = 0; i < amount; i++) {
    print += `${text} `
  }

  console.log(print)
}

stringRepeater("Because I'm happy. ", 3);
```

## Task 7

Develop a function called stringCentralizer, which will receive three parameters:​ a word (string), the amount of repetition of the element (number) and the repeating element (string).

Your function must return a new string that contains the word passed by parameter centered between the repeating elements with a blank space on the sides and the exact quantity passed by parameter.

```js
function stringCentralizer(word, amount, character) {
  let space = ''
  for (let i = 0; i < amount; i++) {
    space += character
  }

  let print = `${space} ${word} ${space}`

  console.log(print)
}

stringCentralizer("JavaScript", 8, "=");
```