# S7 JS DOM Classlist

ClassList step by step.

## Task - Turns on and off

Let's develop a switch.
The room lamp is off, we should be able to turn it on, but make it possible to turn it off again.

In our html we will create a div with a class name off. We also need to define an id for this div.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css" type="text/css">
  <title>Lamp 💡</title>
</head>
<body>
  <div id="space_lamp" class="off"></div>
  <script src="script.js"></script>
</body>
</html>
```
In our css file, we will put a background color on our body.
Let's also add some properties so that our image is in the center horizontally.
```css
body {
display: flex;
align-items: center;
justify-content: center;
background-color: #303e73;
}
```
Now we need to add some properties to our div where the lamp will be displayed.
```css
#space_lamp {
width: 400px;
height: 500px;
background-repeat: no-repeat;
}
```
We leave the dimensions of our div like this, and as we will use background-image and by default it is repeat, we set the no-repeat property.
Still in the CSS, we will edit the classes that will be toggled, defining a state for when the lamp is off and a state for when the lamp is on. In other words, let's switch the image that is being displayed.
```css
.off {
    background-image: url("./img/lamp-off.svg");
  }
.on {
    background-image: url("./img/lamp-on.svg");
  }
```
Running this page in the browser, we have our structure ready, but now we need to create the erase effect with the mouse click.


In our js file, we will use the following code:
```js
document.addEventListener("click", (event) => {
const space_lamp = document.getElementById("space_lamp");
const id = event.target.id;

if (id == space_lamp.id) {
  if (space_lamp.classList.contains("off")) {
    space_lamp.classList.add("on");
    space_lamp.classList.remove("off");
  } else {
    space_lamp.classList.add("off");
    space_lamp.classList.remove("on");
  }
}
});
```

Here we are listening to the click event, after triggering the event, we check if this click is occurring on the lamp, if so, the id will be the same as that of our div that has the lamp.

We then check whether the lamp is off, if the class is off, it is off. We alternated our classes, removing the image of the off lamp, manipulating the class through classlist, and adding the on lamp.

Now reproduce this code using an alternative form of toggle.
```js
const space_lamp = document.getElementById("space_lamp");

function turnOn() {
  space_lamp.classList.add("on")
  space_lamp.classList.remove("off")
}
function turnOff() {
  space_lamp.classList.add("off")
  space_lamp.classList.remove("on")
}

document.addEventListener("click", (event) => {
  const lamp_id = space_lamp.id
  const id = event.target.id;  
  id == lamp_id ? 
  space_lamp.classList.contains("off") ? 
  turnOn() : turnOff()
  : 0
});
```