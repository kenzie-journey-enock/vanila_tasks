# Loops with for

## Introduction

I learned about the **for loop** in JavaScript, a control structure that allows a block of code to be executed multiple times as long as a specific condition remains true. This loop is particularly useful when we know exactly how many times we want to run the code, and it makes repetitive tasks much more manageable and efficient.

## Syntax

The syntax of a `for` loop follows a clear structure:

```javascript
for (initialization; condition; increment) {
  // code block to be executed
}
```

- **Initialization**: This is where I declare and initialize a control variable, typically with `let`. For example: `let i = 0;`.
- **Condition**: Here, I test the control variable against a condition. The loop will run as long as the condition is true, for instance: `i < 10;`.
- **Increment**: This is where I update the control variable after each iteration. Usually, it's incremented by 1 using `i++`, but other increments or decrements can be applied depending on the need.

The loop continues running until the stopping condition is met.

## Practical Application

I learned how to create a practical use case for this loop structure. For example, if I wanted to print "Hello M1" ten times, I could use the `for` loop to avoid writing repetitive code. Instead of writing multiple `console.log` statements, I can use:

```javascript
for (let counter = 0; counter < 10; counter++) {
  console.log("Hello M1");
}
```

This saves time and makes the code more readable.

## Increasing Complexity

The `for` loop can be combined with other structures, like **conditional statements** and **functions**, making it highly versatile. In one exercise, I used a `for` loop to print messages only for even numbers between 10 and 19. Here's an example:

```javascript
for (let counter = 10; counter < 20; counter++) {
  if (counter % 2 === 0) {
    console.log(`The number ${counter} is even!`);
  }
}
```

I also encapsulated this logic in a function, which I could call anytime:

```javascript
function evenNumbersFromTenToNineteen() {
  for (let counter = 10; counter < 20; counter++) {
    if (counter % 2 === 0) {
      console.log(`The number ${counter} is even!`);
    }
  }
  console.log("We exited the loop!");
}
```

This example highlighted how the loop runs until the condition (`counter < 20`) is false, and specific code inside the loop only executes if the number is even.

## Conclusion

The **for loop** is an essential tool for keeping code clean and organized. It reduces redundancy and enhances code readability, making it a fundamental structure I’ll be using frequently in my future projects. With customization options, it can be tailored to fit various needs, making programming tasks more efficient and intuitive.