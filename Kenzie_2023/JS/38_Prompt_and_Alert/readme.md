# Prompt and Alert

## Introduction
With JavaScript, I learned how to create interactivity on web pages. One of the ways programmers can interact with users is through the prompt() and alert() functions. These functions allow me to display messages and collect information from users using simple dialog boxes.

## What is prompt?
I discovered that the prompt function acts like a question. It opens a small window similar to alert, but it also has a space for the user to input something. I can ask a question to the site user and then use their response to do something fun!

For example:
```javascript
let name = prompt("What is your name?");
alert("Welcome, " + name + "!");
```

## What is alert?
I learned that the alert function is used to display important messages. It’s like showing a pop-up with my message on a website.

For example:
```javascript
alert("Hi! Welcome to Kenzie Academy Brasil!");
```

## Using alert and prompt Together
I imagined creating a guessing game where I could use prompt to ask the user for a number and then use alert to tell them if they guessed right or wrong.

For example:
```javascript
let correctNumber = 7;
let guess = prompt("Guess the number I am thinking of, between 1 and 10!");

if (guess == correctNumber) {
    alert("Congratulations! You guessed the number!");
} else {
    alert("Oops, that's not the number. Try again!");
}
```

## Conclusion
I realized that the alert() and prompt() functions are powerful tools for interacting with users in my JavaScript applications. They enable me to display important messages and gather user information simply. However, I must use these resources wisely, considering usability and security in my applications. I understand that practice is essential to solidify my knowledge, so I will continue exploring these functions in my own projects and experiment with different scenarios to become more comfortable with their implementation.


[W3Schools | Window prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp)
[W3Schools | Window alert()](https://www.w3schools.com/jsref/met_win_alert.asp)