# Using CSS in HTML

## Introduction
In this lesson, I learned about the importance of using an External Style Sheet to improve code organization and CSS reusability in systems with multiple HTML pages. This approach allows me to change the appearance of an entire website by altering just one file.

External style sheets are created in separate documents with a .css extension. There's no limit to how many external style sheets a single HTML page can use, and these .css files are dedicated solely to styling, without any HTML tags.

To link external style sheets, the HTML document must use the `<link>` tag, which must be included in the `<head>` section of the document.

## Example
I saw a practical example:

```html
<head>
    <meta charset="UTF-8" />
    <title>Static Template</title>
    <link rel="stylesheet" href="./style.css" />
</head>
```

The CSS rules provided were:
```css
h1 {
   color: blue;
}
p {
   color: red;
   font-size: 24px;
}
```

## `<link>`
I learned about the `<link>` tag, which has two required attributes:

- **rel**: This attribute defines the relationship between the current document and the linked document, which will be "stylesheet" for style sheets.
- **href**: This attribute specifies the location of the file I want to reference. It’s crucial to correctly identify the directory where the style file is located to specify the path accurately.

## Conclusion
In this lesson, I gained insights into the most commonly used CSS method: the External Style Sheet. This technique allows me to separate CSS from HTML code and reuse styles by linking them in other HTML files. 

I found this approach incredibly valuable for streamlining my web development process! 🌟

[W3Schools | CSS Documentation](https://www.w3schools.com/css/css_howto.asp)