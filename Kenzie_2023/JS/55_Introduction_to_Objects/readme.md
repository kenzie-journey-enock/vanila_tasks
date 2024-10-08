# Introduction to Objects

Here’s a summary of what I learned, presented in the first person and structured with headings:

## Introduction
In this lesson, I was introduced to the concept of Objects in JavaScript. I learned what an object is, how to declare a literal object, and how to access its properties and methods. This foundational knowledge sets the stage for deeper exploration in the next module.

## What is an Object?
I discovered that objects are data structures that organize information using named keys, unlike Arrays. For instance, when tasked with creating a data structure for a specific book, I found that using an Array made the data complex and less readable. The example of storing book information in an Array showed how confusing it could be, with indices representing different types of data:

```javascript
const livroArr = [
  "Harry Potter",
  "Harry Potter and the Philosopher's Stone",
  208,
  15648977,
  "J.K. Rowling"
];
```

In contrast, when I used an object, the data was much clearer:

```javascript
const livroObj = {
  saga: "Harry Potter",
  volume: "Harry Potter and the Philosopher's Stone",
  pages: 208,
  code: 15648977,
}
```

I learned that while Arrays are suitable for storing multiple items of the same type and facilitating iteration, objects are more appropriate for modeling related data and enhancing organization.

## Accessing, Creating, or Modifying Object Attributes
I learned how to access and modify attributes of an object using dot notation. For example, I could retrieve the saga and pages of the book:

```javascript
console.log(livroObj.saga);      // Returns "Harry Potter"
console.log(livroObj.pages);     // Returns 208
```

I also practiced altering existing attributes and creating new ones:

```javascript
livroObj.code = 65487565;
livroObj.author = "J.K. Rowling";
console.log(livroObj);
```

## Computed Attributes
I discovered that objects can have computed attributes, where the key can be a computed expression enclosed in brackets. For instance:

```javascript
livroObj["chapter 1"] = "The Boy Who Lived";
console.log(livroObj);
```

I noted that while it’s possible to create attributes with compound names, it's not considered a good practice.

## Arrays in Objects
I also learned how to include Arrays within objects. For example, I could create a list of chapters for my book object:

```javascript
livroObj.chapters = [
  "The Boy Who Lived",
  "The Vanishing Glass",
  "The Letters from No One",
  "The Keeper of the Keys",
  "Diagon Alley"
];
```

## Conclusion
Overall, I realized that objects are a fast and effective way to organize data and will be used extensively in my future coding endeavors.