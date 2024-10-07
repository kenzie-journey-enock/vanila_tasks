# Select

## Introduction

During this lesson, I learned about the `<select>` tag, which is a compound HTML element. It consists of the main `<select>` tag and the `<option>` tag. The primary purpose of this tag is to provide users with a list of options to choose from, as shown in the example:

```html
<label for="plans">Plans</label>
<select id="plans">
    <option>Select a plan</option>
    <option>Free</option>
    <option>Premium</option>
    <option>Pro</option>
</select>
```

Similar to other types of inputs, we can associate a `<label>` with our `<select>` by using an `id`, as demonstrated in the code.

## Options: Value

One key aspect I learned is that the `<option></option>` tag must contain a `value` attribute that represents the value sent to the server. For instance:

```html
<option value="free">Free</option>
```

The visual representation of the option ("Free") can be different from the `value` attribute that will be submitted. The value assigned to the `<select>` tag and sent to the server is determined by the `value=""` of the selected `<option>`. To ensure this behavior works, the `<select>` tag must include the `name=""` attribute.

## Form Submission

To test this behavior, the code should be wrapped in a `<form>` tag, and a `<button>` with `type="submit"` must be added to submit the form, like so:

```html
<form>
    <label for="plans">Plans</label>
    <select id="plans" name="plan">
        <option value="">Select a plan</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="pro">Pro</option>
    </select>
    <button type="submit">Submit</button>
</form>
```

## Required Attribute

I also learned that it is possible to make the selection mandatory by using the `required` attribute. If the value submitted is empty (i.e., `value=""`) and the `<select>` tag has the `required` attribute, the browser will display an alert asking the user to select an option. Here's an example:

```html
<form>
    <label for="plans">Plans</label>
    <select id="plans" name="plan" required="true">
        <option value="">Select a plan</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="pro">Pro</option>
    </select>
    <button type="submit">Submit</button>
</form>
```

## Conclusion

At the end of this lesson, I understood the importance of practice to absorb the content fully. Now that I know how to develop options in forms and use the correct attributes, it's time to put my knowledge into action!

[option tag | W3 Schools](https://www.w3schools.com/tags/tag_option.asp)
[A tag Option | ⁠MDN Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/option)