# Pseudo-element selectors

## Introduction
During my learning journey, I explored pseudo-element selectors, which allow us to style and manipulate specific parts of an element. These selectors are essential for adding content or styles to elements that don't directly exist in the HTML structure.

## Key Learnings
I became familiar with several pseudo-elements, including:

- `::before`: Adds content before the specified element.
- `::after`: Adds content after the specified element.
- `::first-letter`: Styles the first letter of a specified element.
- `::first-line`: Styles the first line of a specified element.
- `::selection`: Styles the text selected by the user.

## Practical Application
I applied these pseudo-elements in practice. For example, using `::before`, I learned how to insert and style text before a given element. In the example below, a `<div>` element with the class "box" is given the pseudo-element `::before` to add the word "Before" in red color, right before the original content:

```html
<div class="box">Content</div>

.box::before {
    content: "Before";
    color: red;
}
```

## Reflection
This hands-on experience helped me understand how pseudo-elements enhance the visual appearance and functionality of web elements, giving me more creative control over page styling.

[MDN | Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)