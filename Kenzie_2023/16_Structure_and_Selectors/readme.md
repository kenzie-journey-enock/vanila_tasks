# Structure and Selectors

## Introduction
I learned that a CSS selector is a pattern used to select HTML elements that I want to style. There is a wide variety of CSS selectors available, allowing for refined precision in selecting the elements to be styled.

## Types of Selectors
I discovered several different groups of selectors, and understanding which type of selector I need is essential for effective styling.

### Element Selector
This selector selects all HTML elements of the specified type. For example, using the selector `h2 { color: blue; }` applies blue color to all `<h2>` elements.

### Class Selector
The class selector is represented by a dot followed by the class name (.className) and targets all elements containing the specified class. For instance, `.fruit { color: green; }` changes the color of all elements with the class "fruit" to green.

### ID Selector
To use the ID selector, I need to prefix the ID name with a hash (#). For example, `#fruit__list { background-color: black; }` styles the element with the ID "fruit__list" with a black background. I learned that IDs must be unique and cannot be assigned to multiple HTML elements.

### Universal Selector
The universal selector, represented by an asterisk (*), selects all HTML elements. While it looks convenient, it is not recommended because it disrupts inheritance among other elements and may require me to write additional CSS rules to compensate.

## Additional Resources
I found supplementary materials, including an article on using CSS selectors, a video for learning selectors through play, and a game called CSS Diner.

## Conclusion
In today's lesson, I learned about the different types of selectors and how to use them. I realized that depending on the situation, one selector may be more useful than another.

[MDN | CSS Selectors](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Selectors)
[CSS Selectors](https://ayltoninacio.com.br/blog/como-usar-os-seletores-css-um-guia-completo)
[GAME -> CSS Diner](https://flukeout.github.io/)