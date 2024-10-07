# Reset CSS

## Introduction
In this lesson, I learned about the **CSS reset**, an essential technique in web development. Its main goal is to create a consistent starting point for styling HTML elements across different browsers. Each browser applies its own default styles, leading to variations in how a webpage is displayed. By using a CSS reset, I can eliminate these differences and ensure a uniform appearance, which saves time and effort when creating custom styles from scratch.

## Without Reset CSS vs. With Reset CSS
I saw a clear difference between having no CSS reset and applying one. Without it, browsers use their default settings, causing inconsistencies. However, with a CSS reset, these defaults are neutralized, allowing me to start styling on a clean slate.

## How to Use Reset CSS
There are multiple versions of CSS resets available, but in this lesson, I worked with **Eric Meyer's Reset CSS 2.0**, one of the most popular and widely used versions. This reset offers a solid foundation to build custom styles, maintaining both usability and accessibility.

## Creating reset.css
I learned to create a `reset.css` file and added the following code:

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
 v2.0 | 20110126
 License: none (public domain) */
html, body, div, span, applet, object, iframe,
...
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```
This code neutralizes margins, padding, and borders, ensuring all elements start with the same basic style.

## Using reset.css in an HTML File
I then linked the `reset.css` file in an HTML document, ensuring it was called before my custom `styles.css` file. Here’s how the code looked:

```html
<head>
  <meta charset="utf-8"/>
  <title>Reset CSS</title>
  <link rel="stylesheet" href="./reset.css" media="screen" />
  <link rel="stylesheet" href="./styles.css" media="screen" />
</head>
```

## Conclusion
By the end of the lesson, I understood the importance of using a **CSS reset**. It helps prevent styling issues across browsers and devices, giving me a predictable and consistent base to work with when building websites. This practice not only simplifies my workflow but also ensures a professional, polished appearance for my web projects.

[Reset CSS - Meyer Web](https://meyerweb.com/eric/tools/css/reset/)
[CSS Resets - Yahoo](https://cssdeck.com/blog/scripts/yahoo-css-reset-yui-3/)
[Normalize.css](https://necolas.github.io/normalize.css/8.0.1/normalize.css)

