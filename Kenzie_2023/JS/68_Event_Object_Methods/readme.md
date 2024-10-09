# Event Object Methods

## Introduction
In this learning session, I delved into the methods associated with the Event Object, particularly focusing on `preventDefault()` and `stopPropagation()`.

## preventDefault()
To understand how `preventDefault()` works and its usefulness, I first explored the concept of Default Actions of the Browser. Events are actions occurring on a webpage that trigger some responses. By default, browsers intercept many of these events and execute specific actions, known as Default Actions. For instance, clicking a link navigates to a new URL, submitting a form sends data to the server, and dragging over text selects it.

However, there are instances where I need to execute a different action than the browser’s default behavior. In these cases, I use the `preventDefault()` method, which essentially means "prevent the default behavior." I practiced this by wrapping a button in a form tag and realized that clicking it caused the page to reload because of the empty action attribute. To prevent this, I added `event.preventDefault()` in my JavaScript code, ensuring the function executed without the page refreshing.

## stopPropagation()
Next, I learned about `stopPropagation()`, which halts the event’s propagation to other elements. Unlike `preventDefault()`, this method does not stop the default actions of the browser. It is particularly useful when I want to intercept the same event in parent and child elements while executing different functions for each.

In my practical example, I set up click event listeners on both a button and the body element. Without `stopPropagation()`, both alerts would trigger when clicking the button due to the bubbling effect. To resolve this, I included `event.stopPropagation()` in the button's event listener, ensuring that only the button's alert was executed upon clicking it. To see the alert for the body, I had to click elsewhere on the body.

## Conclusion
This learning experience enriched my understanding of event handling in JavaScript, specifically how to control default behaviors and manage event propagation effectively. I am eager to explore more advanced topics in event handling and look forward to applying these concepts in future projects.