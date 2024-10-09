# Selectors in DOM

## Introduction
During this learning process, I delved into **DOM selectors**, which are patterns used in JavaScript to select specific HTML elements within the DOM (Document Object Model). These selectors are quite similar to the ones we use in CSS for applying styles to HTML elements, but in JavaScript, they allow us to interact directly with the webpage structure and content.

I explored various methods available in the DOM for selecting elements that belong to its tree. These methods belong to the `document` object, and five key selectors stood out: `getElementById`, `getElementByClassName`, `getElementByTagName`, `querySelector`, and `querySelectorAll`.

## Individual Selectors
Individual DOM selectors are methods that enable us to select a single HTML element, which we can then manipulate using JavaScript. A notable feature of these selectors is that they return just one element.

### Examples:
- **getElementById**: Returns a specific element with a matching ID.
  ```js
  const myElement = document.getElementById("myId");
  ```

- **querySelector**: Returns the first element that matches a CSS selector.
  ```js
  const firstDiv = document.querySelector("div");
  const firstParagraph = document.querySelector("p");
  const firstElementWithClass = document.querySelector(".myClass");
  ```

## Multiple Selectors
Multiple DOM selectors, on the other hand, allow us to select and manipulate several elements at once. They return a collection of elements rather than just one. These selectors can be used to query elements by tag name, class name, attribute name, or CSS selector.

### Examples:
- **getElementsByClassName**: Selects all elements with a matching class name.
  ```js
  const allElements = document.getElementsByClassName("myClass");
  ```

- **getElementsByTagName**: Selects all elements of a certain tag.
  ```js
  const allParagraphs = document.getElementsByTagName("p");
  ```

- **querySelectorAll**: Selects all elements that match a CSS selector.
  ```js
  const allElements = document.querySelectorAll("#myId .myClass");
  ```

## Hands-On Practice
In practice, I applied these concepts using a simple HTML page with three `div` elements, each with a unique ID and a shared class. First, I changed the background color of the first `div` to black using `getElementById`. Then, using `querySelectorAll`, I selected all `div` elements and iterated through them with a loop to change their background color to red.

```js
const allDivs = document.querySelectorAll(".box");

for (let i = 0; i < allDivs.length; i++) {
  allDivs[i].style.backgroundColor = "red";
}
```

This real-time application allowed me to observe how the DOM was dynamically manipulated, giving immediate feedback in the browser.

## Conclusion
Learning DOM selectors has been essential for understanding how to efficiently manipulate HTML elements in web applications. Whether selecting a single element or a group of them, these selectors offer a powerful way to make webpages dynamic and interactive. Mastering these techniques is a fundamental step in creating more engaging web experiences.