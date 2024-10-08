# Reusing Functions

## Introduction
In this lesson, I deepened my understanding of **functions** in Javascript. Functions are fundamental building blocks for structuring algorithms and are widely used in application development. Today, I learned how functions can be applied in different contexts.

## Usability
Functions can be used within various scopes, such as **variables**, **conditional structures**, **loops**, and even inside other functions. They help improve code readability by organizing tasks into specific responsibilities. Functions are dynamic and versatile but should usually serve a single purpose.

I also discovered that many of the built-in **methods** in Javascript are, in fact, pre-defined functions available for us to use. This makes functions a powerful tool for writing reusable and modular code.

## Functions as Variables
I learned that functions can be stored in **variables** and then executed as needed. Here's a basic example:

```javascript
function sum(a, b) {
  return a + b;
}

const myVariable = sum;

console.log(myVariable(4, 2));
// Output: 6
```

This flexibility allows me to assign functions to variables and reuse them as required.

## Functions and Conditional Structures
I also saw how functions can be integrated into **conditional structures**. For instance, a function can check if a number is even or odd:

```javascript
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(2));
// Output: true
```

Moreover, functions can be reused in different scenarios. For example, if I had a store and needed to assign labels to products, I could reuse the `isEven` function to decide whether to use a green or red label based on the product name length:

```javascript
function labelColor(name) {
  if (isEven(name.length)) {
    return "Green";
  }
  return "Red";
}

console.log(labelColor("Soap"));
// Output: "Green"
```

This example taught me how to **reuse functions** in different contexts, increasing code efficiency.

## Conclusion
I now have a deeper understanding of functions in Javascript and how they can be applied in a variety of contexts. The next step for me is to practice more to solidify this knowledge and explore even more ways to apply functions in my projects.