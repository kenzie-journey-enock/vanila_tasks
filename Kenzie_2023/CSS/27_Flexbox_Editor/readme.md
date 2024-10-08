# Flexbox Editor

## Introduction
In this lesson, I explored a powerful tool for styling my web pages: the Flexbox Editor within DevTools. DevTools allows me to inspect HTML and CSS elements on my page and modify properties without needing to save my code. I can access it using the F12 shortcut or by right-clicking anywhere on the page and selecting "Inspect."

## Using the Flexbox Editor
For these examples, I used Google Chrome, but the shortcut might differ in other browsers. I noticed a sidebar opened where I would work with the Flexbox Editor. My page contained three colored boxes within a parent "container." 

In the DevTools menu, I found the styling options for my elements and a checkbox next to "display: flex." Clicking this opened a menu where I could adjust various flex properties like "flex-direction," "flex-wrap," "align-content," "justify-content," and "align-items." I could click on these properties to see how they affected my layout. 

I also received a suggestion to practice using some sample HTML and CSS code, which helped me better understand the concepts:

**HTML:**
```html
<body>
    <div class="container">
      <div class="box" id="box1">
        <p>Box 1</p>
      </div>
      <div id="box2" class="box">
        <p>Box 2</p>
      </div>
      <div class="box" id="box3">
        <p>Box 3</p>
      </div>
    </div>
</body>
```

**CSS:**
```css
#box1 {
  color: #e3e3e3;
  background-color: blue;
  width: 200px;
  height: 200px;
  text-align: center;
}

#box2 {
  color: #e3e3e3;
  background-color: purple;
  width: 200px;
  height: 200px;
  text-align: center;
}

#box3 {
  color: #e3e3e3;
  background-color: red;
  width: 200px;
  height: 200px;
  text-align: center;
}

.container {
  display: flex;
  border: 1px solid black;
  height: 400px;
}
```

## Conclusion
The DevTools with the Flexbox Editor assist me in positioning the elements on my page. I can visualize my desired layout and then transfer the flex properties into my code to save the changes. I plan to continue practicing these flex properties to improve my understanding of them.
