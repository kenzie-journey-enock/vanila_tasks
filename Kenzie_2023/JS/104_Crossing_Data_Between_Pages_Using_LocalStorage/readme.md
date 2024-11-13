# Crossing Data Between Pages Using LocalStorage

## Introduction

I learned how to use LocalStorage in a practical web development project to save data on non-sensitive items for display on the page when needed. The lesson focused on dynamically rendering content with a single `index.html` file by capturing LocalStorage data and using it to adjust elements on the page based on user interactions.

## Hands-On

We worked with a static array of products stored in a `data.js` file, containing details like ID, name, price, description, and image for each product. This data was exported to the main `index.js` script for rendering on the page. A straightforward file structure was created with folders for `styles` and `scripts`, alongside `index.html` as the primary file. The HTML included a header for navigation, a logo, and a root div for inserting dynamic content.

The main script rendered products dynamically by looping through the array and inserting HTML for each product into the root div. I learned about the `querySelector` method to select HTML elements and the `map` method to iterate over data arrays. CSS styling was applied to enhance layout and interactivity, including hover effects.

## Product Interaction and LocalStorage

A major focus was on adding product-specific page views when clicking on items. We achieved this by capturing each product’s ID from its HTML attribute (`data-product`) and passing it to the `findProduct` function, which searches the array for the selected item. The product is then stored in LocalStorage as a string, and a function retrieves it, converts it back to an object, and renders it in a detailed view. This approach reinforced the concept of storing and retrieving data across different user actions in a single-page application.

## Navigation and Final Touches

To improve usability, we added a function to return to the home page by clicking the logo. The `goToHomePage` function clears the product-specific view and reloads all products on the page. This seamless transition between views demonstrated how to manage content dynamically and provided a smoother user experience.

## Conclusion

This project taught me to utilize LocalStorage to store and retrieve data, dynamically render elements, and interact with page elements through event listeners in JavaScript. These foundational skills in manipulating data on the front end are crucial for advancing in JavaScript and building interactive web applications.