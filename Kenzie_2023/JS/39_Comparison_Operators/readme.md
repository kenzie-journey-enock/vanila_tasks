# Comparison Operators

## Introduction
In my recent learning experience, I discovered the importance of comparison operators in JavaScript. These operators are essential for comparing values and determining their equality or difference, which is fundamental for making logical decisions in my code.

## Comparison Operators
I learned that comparison operators in JavaScript are used to compare values and determine whether the comparison results in true or false. Here are some key examples:

| Operator | Name                    | Action                                                                    | Example        | Return |
|----------|-------------------------|---------------------------------------------------------------------------|----------------|--------|
| ==       | Equal                   | Returns true if the operands are equal.                                  | 4 == 4         | true   |
| !=       | Not Equal               | Returns true if the operands are not equal.                              | 4 != 5         | true   |
| ===      | Strictly Equal          | Returns true if the operands are equal and of the same type.            | 4 === 4        | true   |
| !==      | Strictly Not Equal      | Returns true if the operands are not equal and/or not of the same type. | 4 !== '4'      | true   |
| >        | Greater than            | Returns true if the left operand is greater than the right.             | 5 > 4          | true   |
| >=       | Greater than or equal   | Returns true if the left operand is greater than or equal to the right. | 5 >= 5         | true   |
| <        | Less than               | Returns true if the left operand is less than the right.                | 5 < 4          | false  |
| <=       | Less than or equal      | Returns true if the left operand is less than or equal to the right.    | 5 <= 5         | true   |

I also engaged in practical examples of comparisons:

```javascript
const a = 10;
const b = 5;
console.log(a > b);  // Output: true
console.log(a < b);  // Output: false

const c = 5;
const d = 5;
console.log(c >= d); // Output: true
console.log(c <= d); // Output: true
console.log(a <= c); // Output: false
console.log(a >= c); // Output: true
```

Furthermore, I delved into the differences between equality comparisons. The difference between the equality operator `==` and the strict equality operator `===` is crucial: `==` allows type conversion, while `===` does not.

For example:

```javascript
console.log(1 == "1");  // Output: true
console.log(1 === "1"); // Output: false
```

The same applies to the not equal operators `!=` and the strictly not equal operator `!==`:

```javascript
console.log(1 != "1");  // Output: false
console.log(1 !== "1"); // Output: true
```

In general, I learned that it's recommended to use the strict equality operator `===` and the strictly not equal operator `!==` when comparing values in JavaScript to avoid unexpected behaviors.

## Conclusion
Overall, my exploration of comparison operators has shown me their fundamental role in implementing programming logic and performing common tasks in software development. They are key components for building robust and reliable applications.

[MDN | Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)