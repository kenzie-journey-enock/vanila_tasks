# Styling Modal with Dialog

## Introduction
In this lesson, I learned how to style a modal using the `<dialog>` tag. I discovered that the default behaviors of this tag can be influenced by certain CSS properties, so I needed to approach its styling carefully.

## Default Behavior of the Tag
As mentioned in the previous lesson, the `<dialog>` tag comes with default CSS properties, such as borders and a dark background behind the modal. Adding certain attributes directly to it can disrupt its default behavior. For example, setting `display: flex` on the `<dialog>` would make the modal remain visible on the page even when it’s supposed to be closed.

## How to Style Optimally
Having learned the limitations of using the `display` property, I modified the ID of the `<dialog>` tag in the HTML from `modalContainer` to `modalController`. I also updated the corresponding JavaScript file to reflect this change.

## Starting the Styling
To begin styling in the `src/styles/index.css` file, I inserted a small reset for some CSS elements, including the `body`, `h1`, `button`, and `div`. Next, I enhanced the HTML content of the modal by adding a `<div>` with the class `modal__container`, which, although visually unchanged, would assist significantly in the styling process. I then defined specific styles for the `<dialog>` tag to give it a fixed width and height, along with a border.

By adding the `.modal__container`, I was able to apply `display: flex` properties without affecting the default behavior of the `<dialog>`. This way, I could style the modal normally.

## Further Styling
I learned that I could also style the backdrop of the modal, a pseudo-element of the `<dialog>`. By modifying the `dialog::backdrop` property, I was able to create a darker background for the modal.

## Conclusion
In this lesson, I discovered how to style modals without altering their default behaviors. I can now apply normal styling concepts, such as margins and spacings, to elements within the `<dialog>` tag. My takeaway is to practice these concepts in my projects by identifying opportunities to create modals and applying the styling techniques I've learned.
