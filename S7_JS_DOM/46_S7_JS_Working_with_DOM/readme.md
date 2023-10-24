# S7 JS Working with DOM

DOM is a cake recipe. 
Next, we will repeat the DOM practice in JavaScript as much as we can. 
I'll help you at first, but as you progress, you'll go it alone ;)

## Intro

To get started, use the basic structure of HTML and place a main tag of id="root" in the body of your HTML. 
Don't forget to link your script right away.

### Task 1

Store in a variable (const container = document.getElementById("root"))

Give the console.log() of this variable (console.log(container)) and see what appears in the console for you

```js
const container = document.getElementById("root")
console.log(container)
```

### Task 2

Give the text "repeat" to the tag you selected (container.innerText = "repeat") and see what appears on the screen for you.

```js
container.innerText = "repeat"
```

### Task 3

Give the text "repeat more" to the tag you selected and see what appears on the screen for you

```js
container.innerText = "repeat more"
```

### Task 4

In JavaScript, create a span tag (document.createElement("span"))

Store in a variable (const repeat = document.createElement("span"))

Give your variable console.log() and analyze what appears in the console.

Also take a look at DevTools' "Elements" and notice that you created the span, stored it in the variable, but it does not appear in the HTML tree.

```js
const repeat = document.createElement("span")
console.log(repeat)
```

### Task 5

In JavaScript, create a span tag

Store in a variable

Give the text "Need to repeat" to your variable containing the span tag

Give console.log() your variable and see what appears in the console. Review Elements too.

```js
const repeat = document.createElement("span")
repeat.innerText = 'Need to repeat'
console.log(repeat)
```

### Task 6

In JavaScript, create a span tag

Store in a variable

Select your main tag

Store in a variable

Text the text "Repeat and repeat..." to your span tag

Time to train your documentation search: Now add your span tag as a child of your main tag

See what appears on your screen, and analyze the structure of Elements in your console.

```js
const container = document.getElementById("root")
const repeat = document.createElement("span")
repeat.innerText = 'Repeat and repeat...'
container.appendChild(repeat)
```

### Task 7

In JavaScript, create a ul tag

Store in a variable

In JavaScript, create a li tag

Store in a variable

Give the text "Repeat more and more" to your variable that has the li tag

Put your li tag as a child of your ul tag

Select your main tag

Store in a variable

Place your ul tag as a child of your main tag

```js
const container = document.getElementById("root")
const list = document.createElement('ul')
const item = document.createElement('li')
item.innerText = 'Repeat more and more'
list.appendChild(item)
container.appendChild(list)
```
