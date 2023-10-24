# S7 JS DOM Creating Elements


## Simple
Let's create a p tag using createElement.
```js
document.createElement('p')
```
Let's store the tag creation in a variable.
```js
const tag = document.createElement('p')
```
Now we can print the tag variable to the console.
```js
console.log(tag)
```
Expected outcome:
```html
<p></p>
```
Now that we've checked that everything is working, let's insert text into the p tag.
```js
tag.innerText = "Hello, I am a tag created by JS"
```
p tag created and with its content, now we can say in which tag our paragraph will be rendered.
```js
document.querySelector('body').appendChild(tag)
```

## Intermadiary
Let's start by creating an input tag using createElement and storing it in a variable.
```js
const tagInput = document.createElement('input')
```
Now let's insert a placeholder.
```js
tagInput.placeholder = "Enter your text here"
```
Let's go back to the HTML and create a form tag.
```html
<form></form>
```
Now we have an element to insert our input. Let's access it and insert it into a variable.
```js
const form = document.querySelector('form')
```
To finish, we will insert the input created previously into the form.
```js
form.appendChild(tagInput)
```

## Advanced
### Logic
Transcribe the following HTML code to Javascript using the element creation methods.
```html
<article>
     <h1>Post Title</h1>
     <p>Post Description</p>
     <a>See full post</a>
</article>
```