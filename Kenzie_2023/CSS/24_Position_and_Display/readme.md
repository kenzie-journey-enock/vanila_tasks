# Position and Display

## Introduction

In this lesson, we dive deeper into the concept of CSS positioning, building on the previous introduction to inline and block elements. The main focus here is on the **display** property and how it governs the behavior of elements in a webpage.

## Display

Every element on a web page is essentially a rectangular box. The CSS **display** property determines how this box behaves, and there are several commonly used values that dictate this.

### Inline

Think of elements like `<span>`, `<em>`, or `<b>`, which wrap around text without breaking the natural flow of the content. For example, if I apply a red border to an `<em>` element within a paragraph, the text remains inline and unbroken. This is key to understanding how inline elements behave—they accept **margin** and **padding**, but only horizontally. Importantly, **height** and **width** properties won’t affect them.

### Inline-block

This is similar to the inline element but with an important difference: I can set both **width** and **height**. Elements remain in line with the text but can now have dimensions that inline elements don't support.

### Block

Many elements, such as `<div>`, `<section>`, or `<ul>`, are block-level elements by default. These don't stay inline with the surrounding content. Instead, they take up the full width of the page (unless a width is set), pushing other elements down.

## Conclusion

Understanding the **display** property is essential for mastering more advanced CSS concepts, such as **flexbox**. Practice is crucial, and don’t hesitate to ask for help if you need it!

[MDN | Display](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)