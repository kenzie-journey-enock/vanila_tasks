# Event Object Properties

## Introduction
In this lesson, I explored the Event Object, which has various properties, focusing on the most common ones I’ll frequently use.

## target
I learned that the **target** property holds the element that triggered the event, such as where a click occurred. Essentially, it indicates where the event originated.

## currentTarget
On the other hand, the **currentTarget** property holds the element that has the event listener attached to it. This means it represents the element to which I called the `addEventListener` method.

I found it important to note that I can only see the value of `event.currentTarget` while the event is being intercepted. If I inspect the Event Object in the console, its value will always be null. To check the actual `currentTarget`, I need to use `console.log(event.currentTarget)`.

## Practical Example
To practice, I modified some JavaScript code by adding a variable and selecting the body element. I then changed my `addEventListener` to attach it to the body instead of a button:

```javascript
const body = document.querySelector('body');
body.addEventListener('click', function(event) {
    console.log(event);
});
```

I noticed that clicking on the button still produced the same result due to **bubbling**, a concept I had learned earlier.

To better understand the values of `currentTarget` and `target`, I added more `console.log` commands to clarify what I was observing:

```javascript
body.addEventListener('click', function(event) {
    console.log('event: ', event);
    console.log('current target: ', event.currentTarget);
    console.log('target: ', event.target);
});
```

After running this code, I tested by clicking the button and then other areas of the body. I observed that the value of `target` changed depending on where I clicked, while the `currentTarget` remained consistent as the body element.

This hands-on experience helped me solidify my understanding of event properties and their differences.