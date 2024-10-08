# Methods of an Object

## Introduction
In JavaScript, most data is represented as objects, meaning I will frequently manipulate this data type. Through various activities, I recognized that certain processes are merely routines, such as finding, updating, and inserting data.

It would be beneficial to define standard processes within our objects, and we can do this using methods.

## Methods
A method is a property of an object that is specifically a function. In summary, an object has its own functions, making it incredibly useful for managing an object's routines.

## Routine
What can be defined as a routine? A routine is a sequence of customary procedures that occur regularly. It's a consistent way of performing tasks. For example, I learned how to model a person object:

```javascript
const person = {
  name: 'Marlena',
  age: 22,
  city: 'Juiz de Fora'
}
```

By considering common actions a person might perform, I could identify methods for our person object. I asked myself, "What does a person do?" Common actions might include walking, speaking, or celebrating a birthday. 

## Manipulating Methods
I updated the person object to include some of these common actions as methods:

```javascript
const person = {
  name: "Marlena",
  age: 22,
  city: "Juiz de Fora",
  walk: function () {
    console.log("Walked");
  },
  speak: function() {
    console.log("I am speaking");
  },
  celebrateBirthday: function() {
    this.age++;
    console.log(`I am turning ${this.age} years old!`);
  }
}
```

Now, I can test these methods and see the results in the console:

```javascript
person.walk(); // Output: Walked
person.speak(); // Output: I am speaking
person.celebrateBirthday(); // Output: I am turning 23 years old!
```

## Calculator
Next, I modeled a calculator object, which consists of routines based on mathematical operations. Here's a simplified version of the object:

```javascript
const calculator = {
  add: function(valueA, valueB) {
    return valueA + valueB;
  },
  subtract: function(valueA, valueB) {
    return valueA > valueB ? valueA - valueB : valueB - valueA;
  },
  multiply: function(valueA, valueB) {
    return valueA * valueB;
  }
}
```

Testing the methods confirmed their functionality:

```javascript
calculator.multiply(2,3); // Output: 6
calculator.subtract(9,10); // Output: 1
calculator.add(5,5); // Output: 10
```

I realized I could create routines and methods by asking specific questions about what an object has and what it does.

## Functions or Methods
At this point, I began to ponder the distinction between functions and methods. Both are types of functions, but they serve different purposes.

### Functions
Functions are independent structures that do not rely on any specific factor to operate. Their purpose is to delegate responsibilities and be reusable across different scenarios. For example, a function designed to return odd numbers from a list is created to work with any list, not just a specific one.

### Methods
Conversely, a method is a structure that is called by its object name and method name using dot notation. Methods implicitly pass information about their object and define functionalities or routines, such as those found in calculators, TVs, or cars.

## Functions vs. Methods
| Functions | Methods |
|-----------|---------|
| Independent | Dependent on their object |
| Called directly by name | Called via the object that contains them |
| Data is passed explicitly | Data is passed implicitly through the object |

## Conclusion
This topic is incredibly important. I challenge myself to practice and create my own scenarios, such as modeling vehicles and banking operations.