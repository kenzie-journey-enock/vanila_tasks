# Form Event

## Introduction
In this lesson, I learned how to manipulate the form event called submit.

## Event
Starting from our initial template, the first step to capture the values from a form's inputs was to add an event listener to the form itself or to the button that triggers this event. I began by capturing the `<form>` element using the `querySelector` method to select it by its class:

```javascript
// script.js
const form = document.querySelector(".form__container");
console.log(form);
```

Next, I added a submit event to the captured form:

```javascript
// script.js
form.addEventListener("submit", function (event) {
  console.log('event triggered');
});
```

When I clicked the button, the submit event was triggered with its default behavior. To prevent the page from reloading, I needed to stop this default behavior using `event.preventDefault()`. This allowed me to see my `console.log` statement in the browser:

```javascript
// script.js
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log('event triggered');
});
```

## Capturing Input Values
Finally, I needed to capture the input values from the form. The first step was to get the elements using the DOM and then access their `value` properties:

```javascript
// script.js
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputName = document.querySelector(".input__box--text");
  const selectPet = document.querySelector(".input__box--select");

  console.log(inputName.value);
  console.log(selectPet.value);
});
```

In this way, I had access to the values to use in any logic I wanted! 🎉