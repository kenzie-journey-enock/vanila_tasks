# Advanced Selectors

## Introduction
In this course, I learned about advanced CSS selectors, which are powerful tools that allow me to select specific elements on a webpage based on more complex criteria.

## Attribute Selector
I discovered that most HTML tags have attributes that can be used as selectors for styling. For example, I can style an input element like this:

```css
input[type] {  
    background-color: blue;
}
```

I also learned that attribute selectors have advantages. For instance, I can select all links that end with ".com.br" using the following selector:

```css
a[href$=".com.br"] {  
    color: red;
}
```

Furthermore, I can select all input elements of type number like this:

```css
input[type='number'] {  
    background-color: blue;
}
```

## Descendant Selectors
The course introduced me to descendant selectors, which allow me to select specific elements based on their hierarchical relationship with other elements in the HTML structure. For example, to select `<li>` tags within a `<ul>`, I can use direct descendant selectors:

```css
ul > li {
    color: blue;
}
```

In this case, only the `<li>` tags inside the `<ul>` will receive the style `color: blue`.

I learned about four types of descendant selectors:

1. **Simple Descendant Selectors**: They select "child" elements that are descendants of "parent" elements.
   - **Syntax**: parent child
   - **Example**: `ul li` selects all `<li>` elements that are descendants of a `<ul>`.

2. **Direct Descendant Selectors**: They select "child" elements that are direct children of "parent" elements.
   - **Syntax**: parent > child
   - **Example**: `div > p` selects all `<p>` elements that are direct children of a `<div>`.

3. **Adjacent Sibling Selectors**: They select the next "sibling1" element that is immediately adjacent to another "sibling2" element.
   - **Syntax**: sibling1 + sibling2
   - **Example**: `h2 + p` selects the `<p>` element that is immediately after an `<h2>`.

4. **General Sibling Selectors**: They select all "sibling1" elements that follow another "sibling2" element.
   - **Syntax**: sibling1 ~ sibling2
   - **Example**: `p ~ span` selects all `<span>` elements that are siblings and follow a `<p>`.

This training enhanced my understanding of CSS selectors and will help me apply these concepts in my web development projects effectively.

[MDN | CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
