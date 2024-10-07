# Inputs

## Introduction
In this lesson, I learned about the structure and behavior of the `<input>` tag in HTML, which, like the `<img>` tag, doesn't have closing tags and only uses attributes. The most important attribute for an input is `type`, which defines the kind of input field, and this directly influences how the browser interprets and handles it.

## Working with Input Types and Attributes
We covered several common input types and their attributes, starting with the basic `text` input. Alongside this, I learned to use attributes like `placeholder`, `maxlength` (to limit character count), and `required` (to ensure a field must be filled before submission). For example:

```html
<input type="text" placeholder="Enter your name..." maxlength="10" required />
```

The `required` attribute was particularly interesting because, when used in a form with a submit button, it prevents submission until the required fields are filled, as shown here:

```html
<form>
  <input type="text" placeholder="Enter your name..." required />
  <button type="submit">Submit</button>
</form>
```

## Other Input Types
- **Password Input**: When I set `type="password"`, it masks the entered characters, improving security for sensitive fields like passwords.
  
```html
<input type="password" placeholder="Enter your password..." required />
```

- **Number Input**: To restrict input to numerical values, I used `type="number"`, ensuring that only numbers can be entered.

```html
<input type="number" placeholder="Enter a number..." required />
```

## Working with Labels
Labels (`<label>`) are important for accessibility and usability. I learned how to pair a `<label>` with an `<input>` using the `for` attribute in the label and the `id` attribute in the input. This way, clicking the label focuses the associated input.

```html
<label for="name">Name</label>
<input id="name" type="text" placeholder="Enter your name..." required />
```

## The Name Attribute
The `name` attribute in inputs is crucial when submitting a form, as it helps organize the submitted data into variables. For instance, a form submission would pass the input with `name="name"` as a URL parameter.

```html
<input type="text" name="name" id="name" placeholder="Enter your name..." required />
```

## Conclusion
This lesson gave me a solid understanding of how to create and customize form inputs in HTML using various attributes. Although we focused on a few key attributes, I now know there are many more available, making HTML forms highly flexible and customizable. Now it's time to practice!

[MDN | Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)