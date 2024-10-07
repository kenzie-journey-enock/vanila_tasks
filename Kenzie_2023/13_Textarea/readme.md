# Textarea

## Introduction
I learned about the `<textarea>` tag, which is specifically designed for entering longer texts, in contrast to the `<input>` tag that is used for shorter inputs. I discovered that `<textarea>` can accept dimension attributes that define the visible size of the text area.

## Structure of `<textarea>`
The basic structure of a `<textarea>` is as follows:

```html
<textarea></textarea>
```

## Placeholder
To add a descriptive text inside the `<textarea>`, I can use the same `placeholder` attribute found in `<input>`:

```html
<textarea placeholder="Type your message here..."></textarea>
```

## Dimensions
I learned how to set the size of the text area using the following properties:

- `rows`: Refers to the height of the text area (lines).
- `cols`: Refers to the width of the text area (columns).

For example:

```html
<textarea placeholder="Type your message here..." cols="30" rows="10"></textarea>
```

Additionally, I can include text between the opening and closing `<textarea>` tags if I want the user to complete the text. For instance:

```html
<textarea placeholder="Type your message here..." cols="30" rows="10">
    My name is
</textarea>
```

## Attributes
I also learned about some key attributes:

- `required`: This attribute makes the text area mandatory.
  
```html
<textarea placeholder="Type your message here..." required="true" cols="30" rows="10"></textarea>
```

- `id`: This attribute identifies which label the text area belongs to.
  
```html
<label for="message">Message</label>
<textarea id="message" placeholder="Type your message here..." required="true" cols="30" rows="10"></textarea>
```

- `name`: This attribute gives a name to the value that will be submitted from the text area.
  
```html
<label for="message">Message</label>
<textarea id="message" name="message" placeholder="Type your message here..." required="true" cols="30" rows="10"></textarea>
```

## Conclusion
I am excited to put this knowledge into practice! I learned the importance of referring to official documentation for more details on using the `<textarea>` tag effectively.

[Text Area | MDN Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea)