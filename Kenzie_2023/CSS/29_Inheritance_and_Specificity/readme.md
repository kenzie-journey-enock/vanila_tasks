# Inheritance and Specificity

## Introduction
In this course, I learned about the fundamental concepts of inheritance and specificity in CSS, which are essential for understanding how styles are applied to HTML elements.

## Understanding the Need
I grasped the importance of specificity when it comes to styling elements. For example, if I set the background color of all paragraph tags to blue while someone previously set the text color to blue, the text would be invisible. This taught me the necessity of specifying styles correctly to avoid such conflicts.

## Priority
I learned about selector types and their priority levels:
- **ID**: Highest priority
- **Class**: Intermediate priority
- **Tag**: Lowest priority

Through practical examples, I understood how the CSS rules are applied based on these priorities. For instance, if I set a `div` to have a red background and white text, the text within that `div` would appear white, illustrating how inheritance works.

## Conceptualizing Inheritance
I delved deeper into how elements relate to one another in terms of inheritance. For example, if a `div` contains a `p` element, the `div` is the parent and the `p` is the child. This relationship means that the child inherits the styles from the parent. I recognized that elements can have properties defined at various levels, impacting how styles are inherited.

## Specificity
The course clarified how to override inherited styles using specificity. By altering the code to include IDs and classes, I learned that I could target individual elements without affecting others. For example, using the selector `#container > p` allowed me to change the text color specifically for that paragraph, even if the parent had a different color.

## Conclusion
Finally, I explored the relationships between elements, understanding that elements can have parents and siblings. I learned that the specificity hierarchy affects style adoption, with classes being more prioritized than tags, and IDs holding the highest priority. I now appreciate that changes to a parent element's style can cascade down to its children, reinforcing the importance of structuring CSS effectively.

[MDN | Cascade, specificity and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)