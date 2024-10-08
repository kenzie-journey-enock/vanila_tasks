# Conditional Structures

## Introduction
I learned that conditional structures are control flow constructs in JavaScript that enable the execution of different code segments based on specific conditions.

## if / else
The if-else statement in JavaScript allows different pieces of code to be executed based on a logical condition. The basic syntax is:

```javascript
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
```

I realized that the use of curly braces ({}) after both the if and else statements creates a scope block. The condition is evaluated as either true or false. If true, the code in the if block executes; if false, the code in the else block executes.

To illustrate, I considered an example where José goes to the market with $8.50 to buy a dozen eggs. If the price is $10.20, he cannot buy them. In code:

```javascript
const joseMoney = 8.50;
const priceOfDozenEggs = 10.20;

if (priceOfDozenEggs <= joseMoney) {
  console.log('José can buy a dozen eggs!!');
} else {
  console.log('José has to go home to get more money!!');
}
```

Running this code outputs that José has to go home for more money since the condition is false.

I then changed José's money to $12:

```javascript
const joseMoney = 12;
const priceOfDozenEggs = 10.20;

if (priceOfDozenEggs <= joseMoney) {
  console.log('José can buy a dozen eggs!!');
} else {
  console.log('José has to go home to get more money!!');
}
```

Now the output confirms that José can buy the eggs since the condition is true.

## else if
The else if clause allows me to specify multiple conditions for testing and executing different blocks of code based on the results. This is useful for chaining multiple if statements without needing several independent if commands.

The basic syntax is:

```javascript
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition1 is false and condition2 is true
} else {
  // Code to execute if both condition1 and condition2 are false
}
```

For example, I used:

```javascript
let num = 15;

if (num > 10) {
  console.log("The number is greater than 10");
} else if (num < 10) {
  console.log("The number is less than 10");
} else {
  console.log("The number is equal to 10");
}
```

In this case, the first condition checks if `num` is greater than 10. If true, the corresponding message is printed; otherwise, it checks the next condition. This method ensures that only one block of code executes based on the evaluated conditions.

## Conclusion
I concluded that conditional structures are vital in JavaScript as they allow my code to make decisions based on specific conditions. This capability means I can perform different actions depending on variable values or prevent code from executing if a condition isn’t met. Without these structures, writing dynamic and adaptable code would be challenging.

[MDN | if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)