# Input Radio

## Introduction
In this lesson, I learned about the `<input>` element of type "radio," which allows the selection of a single item from a group of options. While it follows the same structure as a standard `<input>`, the difference lies in the `type` attribute being set to `"radio"`.

```html
<input type="radio">
```

By default, a radio input is created as selected until another radio input with the same `name` attribute is introduced.

## Creating Inputs Without Name Attribute
Initially, I created two radio inputs without the `name` attribute, which allowed both to be selected simultaneously. This wasn’t the desired behavior, so I learned the importance of adding the same `name` attribute to group them together:

```html
<input type="radio" name="inputExample">
<input type="radio" name="inputExample">
```

This ensures that only one of the inputs can be selected at a time.

## Adding Labels
Next, I learned how to associate labels with radio inputs by using the `<label>` tag and linking it to the `<input>` via the `for` and `id` attributes. This is useful for better accessibility and usability.

```html
<p>Select your preferred contact method:</p>
<label for="phone">Phone</label>
<input type="radio" name="inputExample" id="phone">

<label for="email">Email</label>
<input type="radio" name="inputExample" id="email">
```

## Assigning Values
To ensure that a value is sent when a radio button is selected, I assigned a `value` attribute to each `<input>`. This value gets submitted with the form data.

```html
<p>Select your preferred contact method:</p>
<label for="phone">Phone</label>
<input type="radio" value="phone" name="inputExample" id="phone">

<label for="email">Email</label>
<input type="radio" value="email" name="inputExample" id="email">
```

Finally, I enclosed the inputs within a `<form>` and added a submit button:

```html
<form>
  <p>Select your preferred contact method:</p>

  <label for="phone">Phone</label>
  <input type="radio" value="phone" name="inputExample" id="phone">

  <label for="email">Email</label>
  <input type="radio" value="email" name="inputExample" id="email">

  <button type="submit">Submit</button>
</form>
```

## Conclusion
This lesson provided a hands-on experience with creating and managing radio inputs, assigning values, and properly using labels. Now it’s time to practice and implement these concepts!