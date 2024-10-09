# Manipulating CSS classes

## Introduction
In the previous lessons, I learned how to create styles through the DOM, but I noticed that my JavaScript was taking on the responsibility of styling. To maintain better organization, I decided to create my styles in CSS and access them through the DOM without embedding them directly in my JavaScript code. This approach allows my project to be more organized, with CSS handling the styling while JavaScript retrieves the predefined styles.

## Example
I explored how to insert styles into a paragraph using a function. In the HTML, I had a simple paragraph element:

```html
<body>
   <p>Manipulating CSS classes</p>
</body>
```

In my CSS file, I defined a class for the desired styling:

```css
.paragraph-black {
    background-color: #000000;
    color: #ffffff;
}
```

Then, in my JavaScript file, I captured the paragraph element and created a function to add the class:

```javascript
function addClassToParagraph() {
   const paragraph = document.querySelector("p");
   paragraph.classList.add("paragraph-black");
}
```

By accessing the paragraph and storing it in a variable, I used the `classList` property to add the class. When the function `addClassToParagraph` is called, the class `paragraph-black` gets added to the paragraph.

## Logic for Toggling Classes
Next, I implemented a logic to toggle the style on and off. If the class already exists on the paragraph, I remove it; if it doesn’t, I add it. I achieved this using the `add()`, `remove()`, and `contains()` methods:

```javascript
function addClassToParagraph() {
   const paragraph = document.querySelector("p");
   if (paragraph.classList.contains("paragraph-black")) {
       paragraph.classList.remove("paragraph-black");
   } else {
       paragraph.classList.add("paragraph-black");
   }
}
```

To enhance the code, I stored the class name in a variable to avoid changes in multiple places if the class name was altered:

```javascript
const classStyle = "paragraph-black";
```

## Using the `toggle()` Method
I discovered the `toggle()` method of the `classList` property, which simplifies adding or removing a class within a function. This method alternates the class state with each function call:

```javascript
function addClassToParagraph() {
   const paragraph = document.querySelector("p");
   paragraph.classList.toggle(classStyle);
}
```

The `toggle()` method returns a boolean based on whether the class exists on the element, enabling me to modify button text according to the toggle result:

```javascript
function addClassToParagraph() {
   const paragraph = document.querySelector("p");
   const classResult = paragraph.classList.toggle(classStyle);
   if (classResult) {
       paragraph.innerText = "Class Added";
   } else {
       paragraph.innerText = "Class Removed";
   }
}
```

## Conclusion
It was time to practice! I tested the function multiple times and observed the results with each call. I felt encouraged to ask for help if I faced any difficulties.

This experience taught me the importance of keeping my styling organized and using JavaScript effectively to manipulate CSS classes! 😊

[W3S | Toggle](https://www.w3schools.com/howto/howto_js_toggle_class.asp)
[W3S | ClassList](https://www.w3schools.com/jsref/prop_element_classlist.asp)