# Importing Files into CSS

## Introduction
I learned about the `@import` rule in CSS, which is used to import styles from other CSS files into an HTML document. This is especially helpful when you have multiple CSS files in a project and want to break down the code into smaller, more manageable files.

## Importing CSS Files
The basic syntax of the `@import` rule is as follows:

```css
@import url("file_name.css");
```

Each part of this rule serves a purpose:

- `@import`: The rule itself.
- `url`: A function that points to the CSS file you want to import.
- `file_name.css`: The name of the CSS file you're importing (make sure to include the `.css` extension).

To use the `@import` rule in your own project, you should:
1. Create a separate CSS file with the styles you want to import.
2. Add the `@import` rule at the beginning of the CSS file containing your styles.
3. Save the file and open the HTML document you want to style.
4. Add a `<link>` tag in the HTML `<head>` to link to the CSS file that contains the `@import` rule.

For example:

- The `globalStyles.css` file imports styles from `botao.css` using the `@import` rule. It also includes additional styles for headers and paragraphs.
- The HTML file links to `globalStyles.css`, making all imported styles available.

## Importing Font Styles
I also learned how to import font styles into a CSS file using the `@import` rule. Instead of using a `<link>` tag in the HTML file, the `@import` rule from Google Fonts can be copied directly into the CSS file. This helps keep the HTML file more organized and improves rendering performance since the page continues to load even if the fonts aren't fully downloaded yet.

## Conclusion
The CSS `@import` rule is a powerful tool for importing styles from one CSS file into another. It's especially useful when you have styles that are common across multiple pages, allowing you to write them once and import them wherever needed. This rule helps keep code more organized and maintainable, making web development more efficient.