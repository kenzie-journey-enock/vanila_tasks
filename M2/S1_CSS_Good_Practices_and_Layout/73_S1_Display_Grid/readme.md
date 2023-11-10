# S1 Display Grid

For this project, we will create a simple page layout using the Display Grid. The layout will consist of a header, a navigation menu, a main content section, and a footer.

## Basic HTML Structure

We start by creating a basic HTML structure for our page layout:

```html
<head>
     <title>Example of using Grid display</title>
     <link rel="stylesheet" href="style.css" />
   </head>
   <body>
     <header>
       <h1>My Website</h1>
     </header>
     <nav>
       <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">About Us</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </nav>
     <main>
       <h2>Welcome to My Site</h2>
       <p>
         This is an example of how to use Display Grid in a website project.
         Here is the main content of the page.
       </p>
     </main>
     <footer>
       <p>Copyright © 2023 My Site</p>
     </footer>
   </body>
</html>
```

## Styling with CSS Grid

Next, let's add the CSS to create the layout using the display Grid. Let's start by creating a grid with two columns and two rows, and then we'll define where each layout element should be.

```css
body {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header"
    "nav main"
    "footer footer";
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
```

Explaining the CSS code above:

- We set the display property to grid, to indicate that we are creating a layout grid.
- We set the grid-template-columns property to 200px 1fr, which creates two columns - the first 200 pixels wide, and the second the rest of the available space.
- We set the grid-template-rows property to auto 1fr auto, which creates two rows - the first and third with automatic height, and the second with the remaining available space.
- We set the grid-template-areas property to indicate where each element should go on the layout grid. Each value represents a cell in the grid, and the values in quotes represent the areas we are defining. In this case, we are defining one area for the header, one for the navigation menu, one for the main content, and one for the footer.
- For each layout element (header, nav, main and footer), we define the grid-area property with the name of the corresponding area.

Now, with the code above, we will have the following arrangement of elements on the page:
```txt
+------------+-------------------------+
|   header   |                         |
+------------+          main           |
|    nav     |                         |
+------------+-------------------------+
| footer     |                         |
+------------+-------------------------+
```

![result1](guide/result_1.png)

## Styling the elements

Now, let's add some styles to make the layout elements more presentable:
```css
body {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header"
    "nav main"
    "footer footer";
  height: 100vh;
  margin: 0;
}

header {
  grid-area: header;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

nav {
  grid-area: nav;
  background-color: #555;
  color: #fff;
  padding: 20px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
}

main {
  grid-area: main;
  padding: 20px;
}

footer {
  grid-area: footer;
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
```
Explaining the code above:

- We've added a background color, text color, and padding for the header, navigation menu, and footer.
- We set the list-style property to none to remove bullets from the list in the navigation menu, and the margin and padding property to 0 to remove spacing.
- We set the display property to inline-block for each menu item in the navigation menu, and added a right margin of 10 pixels.
- We set the text color to white and removed the underlined link decoration for the navigation menu menu items.
- We added a 20 pixel padding to the main section.

With these style additions, our page is now visually more complete and structured.

## Final result

Okay, now we have a basic page layout using the Grid display. Here is the end result:

![img](guide/grid_layout.png)
