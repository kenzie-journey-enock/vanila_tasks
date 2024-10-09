# Introduction to DOM

## Introduction
In this learning process, I dove into understanding the **Document Object Model (DOM)**. The DOM is a programming interface that represents the structure of an HTML document as a tree of objects, enabling developers to access and dynamically modify content, structure, and style using JavaScript. Essentially, it's the bridge between HTML and JavaScript, giving us the power to interact with web pages in real-time.

## How It Works
When a browser loads a webpage, it constructs a representation of the HTML document in the form of a **DOM tree**, where each HTML element (such as `<html>`, `<body>`, `<div>`, etc.) is represented as an object with properties and methods. Through JavaScript, I can manipulate these objects to modify the page's appearance and behavior.

## DOM Tree
The DOM organizes elements hierarchically, much like a family tree. For instance, the `<body>` element is a child of the `<html>` element, and each element inside `<body>` is a child of `<body>`. This organization is key to navigating and manipulating web pages efficiently.

## Manipulation Examples
I explored the practical manipulation of the DOM through various examples:
1. **Accessing the URL**: I used `window.location.href` to fetch the current page's URL dynamically, allowing me to interact with browser properties via JavaScript.
2. **Changing Page Background**: By accessing the `<body>` element, I used `document.body.style` to change the page’s background color to light green. This was a temporary change, resetting after a page reload, but it demonstrated the power of live DOM manipulation.
3. **Modifying Page Title**: Using `document.title`, I altered the page’s title, which again highlighted how easy it is to tweak core aspects of a webpage through the DOM.

## JavaScript and the DOM
In addition to experimenting with commands in the browser console, I learned how to implement DOM manipulations via a custom JavaScript file. By linking this script to an HTML file, I could change the page’s background color or interact with the user through a prompt that asked for input and adjusted the page based on the user's response.

## Conclusion
This journey taught me how the DOM is essential for building dynamic and interactive websites. By leveraging JavaScript, I can modify HTML elements, styles, and even respond to user events in real time, enhancing the overall user experience.