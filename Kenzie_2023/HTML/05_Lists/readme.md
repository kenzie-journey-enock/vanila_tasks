#

## Introduction
When learning about HTML lists, I discovered that there are two main types: ordered lists and unordered lists, represented by the tags `<ol>` (ordered list) and `<ul>` (unordered list). Regardless of the type, the primary purpose of a list is organization.

## Ordered Lists
I learned that an ordered list indicates that the sequence of items is important for completing a task. For example, if I wanted to fill a cup with water, the steps must be followed in a specific order:

1. Pick up the cup.
2. Place the cup on the counter.
3. Get the bottle.
4. Open the bottle.
5. Pour the water from the bottle into the cup.

If I change the order of these steps, the action wouldn't make sense, highlighting the necessity for order.

### How to Use
To create an ordered list, I start with the `<ol>` tag. Within it, each item is defined using the `<li>` tag, which stands for "list item." This tag is used in both ordered and unordered lists. For example, writing a recipe could look like this:

```html
<ol>
  <li>3 eggs.</li>
  <li>2 cups of milk.</li>
  <li>1 tablespoon of margarine.</li>
</ol>
```

The output would be:

- 3 eggs.
- 2 cups of milk.
- 1 tablespoon of margarine.

Each `<li>` represents an item, and `<ol>` signifies the type of list.

## Unordered Lists
I also learned about unordered lists, which are structured similarly to ordered lists, but the sequence of items does not matter. Using the same recipe example, I can create an unordered list like this:

```html
<ul>
  <li>3 eggs.</li>
  <li>2 cups of milk.</li>
  <li>1 tablespoon of margarine.</li>
</ul>
```

The result remains the same:

- 3 eggs.
- 2 cups of milk.
- 1 tablespoon of margarine.

## Conclusion
Through this learning experience, I found that list structures are widely used in HTML and will become common in my daily coding practice. I plan to practice extensively and explore the documentation to discover different types of markers and numerators that these structures offer.

## Support materials

[MDN | Unordered Lists](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/ul)
[MDN | Ordered Lists](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/ol)
[MDN | List of Items](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li)