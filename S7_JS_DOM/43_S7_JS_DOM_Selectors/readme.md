# S7 JS DOM Selectors

## Simple

Create an h1 tag and insert text
```html
<h1>Learning DOM</h1>
```
Create a script tag at the end of the body tag
```html
<body>
   <h1>Learning DOM</h1>
   <script></script>
</body>
```
Inside the script tag access the window element
```html
<body>
   <h1>Learning DOM</h1>
   <script>
     window
   </script>
</body>
```
Now, access the document element
```html
<body>
   <h1>Learning DOM</h1>
   <script>
     window.document
   </script>
</body>
```
To finish, select the first h1 element on your page
```html
<body>
   <h1>Learning DOM</h1>
   <script>
    window.document.querySelector('h1')
   </script>
</body>
```
The expected result will be:
```html
<h1>Learning DOM</h1>
```

## Intermadiary
### Logic
Let's think about the following situation: we need to access an element by id.
```html
<body>
   <h1 id="title">Learning DOM</h1>
</body>
```
Create code that accesses the tag with id title and prints the result to the console.

The result should be:
```html
<h1 id="title">Learning DOM</h1>
```

## Advanced
### Logic
We need to access the first element on the page that contains the .title class.
```html
<body>
   <h1 class="title">Learning DOM</h1>
   <h3 class="title">Learning DOM</h3>
</body>
```
NOTE: The console should only render the h1 element with the class title

The result should be:
```html
<h1 class="title">Learning DOM</h1>
```