# Hyperlinks

## Introduction
During my learning journey, I discovered that links, or hyperlinks, are represented by the anchor tag `<a>`. A hyperlink can point to an entire document or a specific element within one.

## Basic Anatomy of the Anchor Tag
I learned that a hyperlink can take users to other web pages, locations within the same page, files, email addresses, or any URL. The clickable part of the link is the text or element placed between the `<a></a>` tags. There are several attributes associated with the anchor tag, and I focused on some of the most common ones.

### href
This attribute is the URL or destination where the hyperlink points.

### target
The target attribute indicates where to display the link's URL. I found two commonly used values:
- `_self`: Loads the URL in the same current browser window, which is the default behavior if the target attribute is not specified.
- `_blank`: Loads the URL in a new window or tab based on the current browser settings.

### Examples
I practiced with various examples:
- To open a link in a new window or tab:  
  `<a href="https://www.google.com" target="_blank">google.com</a>`
  
- To open a link in the same window:  
  `<a href="https://www.google.com">google.com</a>`
  
- To open the user's default email client:  
  `<a href="mailto:user@example.com">Email User</a>`
  
- To link to another local file on the same site:  
  `<a href="#page-section">Link to page section</a>`
  
- To use an image instead of text for an external link that opens in a new window or tab:  
  ```html
  <a href="https://developer.mozilla.org/pt-BR/" target="_blank">
    <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png" />
  </a>
  ```

## Conclusion
I concluded that understanding the anatomy of the tags I use is crucial, and consulting documentation is the best way to find usability examples and complete explanations about the elements I’m searching for. This exploration has significantly enhanced my understanding of hyperlinks and their functionality.

## Support materials

[MDN | The anchor element](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a)
[W3Schools | Tag anchor](https://w3schools.com/tags/tag_a.asp)