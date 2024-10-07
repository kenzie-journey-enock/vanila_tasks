# Introduction to Flexbox

## Introduction
In this learning module, I gained an understanding of how to use the **Flexbox** layout model to manage the arrangement of elements on a web page. Flexbox is a one-dimensional layout method that allows for positioning items either in rows or columns. These items adapt based on the size of the container they reside in, offering much more flexibility than older methods like `float` and `position`.

## Flexbox and Its Terminology
Before diving into practical examples, I learned key terminology. When an element uses `display: flex` or `display: inline-flex`, it becomes a **flex container** and the items inside it become **flex items**. The flex container operates on two axes: the **main axis**, which defaults to horizontal, and the **cross axis**, which defaults to vertical.

## Flexbox Properties

### Display Flex
This property turns an element into a flex container, making its children flexible and aligning them either horizontally or vertically.

### Flex Direction
This property controls the direction of the flex items inside the container. By default, they align in a row, but I can change this to a column for a mobile-friendly layout, ensuring content stacks vertically.

### Flex Wrap
Flex items do not break into a new line by default, but with `flex-wrap: wrap`, items will flow onto the next line once they exceed the container's width.

### Flex Flow
A shorthand property that combines `flex-direction` and `flex-wrap`, allowing for quicker, cleaner CSS code.

### Justify Content
This property aligns flex items along the main axis. Depending on how much space is available, I can align items to the start, end, center, or even distribute them with equal spacing.

### Align Items
This property aligns items along the cross axis. It’s particularly useful for centering items vertically, which was previously tricky in web design.

### Align Content
This is used when there are multiple rows of flex items. It helps align these rows relative to the container’s height when there is extra vertical space.

## Conclusion
This module has empowered me with the skills to utilize Flexbox properties effectively, allowing me to control the positioning, alignment, and responsiveness of elements on a webpage. Now, it’s time to put this into practice and experiment with these flexible layout techniques.

[Flexbox - Guia Completo](https://origamid.com/projetos/flexbox-guia-completo/)
[MDN | Flexbox](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox)