# Height and Width

## Introduction
In this lesson, I explored the concepts of height, width, max-height, max-width, min-height, and min-width. These properties are fundamental for defining the dimensions and limits of visual elements in web projects. I learned how to specify the height and width of elements, establish maximum and minimum limits, and how to apply these concepts in HTML and CSS. Diving into these topics helped me understand their importance in creating responsive and flexible layouts.

## Height and Width
I discovered that height and width are properties that specify the height and width of an element, respectively. For instance, I practiced defining the dimensions of a box in CSS with:

```css
.box {
  height: 200px;
  width: 300px;
  background-color: blue;
}
```

## Max-height and Max-width
Next, I learned about max-height and max-width, which set the maximum allowed height and width for an element. If an element exceeds these dimensions, it will resize to fit. I implemented these properties with code like:

```css
.box {
  max-height: 200px;
  max-width: 300px;
  background-color: blue;
}
```

## Min-height and Min-width
I also explored min-height and min-width, which define the minimum allowed dimensions for an element. If an element's dimensions are below these values, it will resize to meet the minimum requirements. An example code snippet for this was:

```css
.box {
  min-height: 200px;
  min-width: 300px;
  background-color: blue;
}
```

I realized that defining only min-width allows the element to expand beyond the maximum screen width unless other restrictions are applied. 

## Conclusion
In this lesson, I delved into the essential properties of height, width, max-height, max-width, min-height, and min-width. Understanding these concepts is crucial for defining the dimensions and limits of visual elements in web design, which ultimately helps in creating effective and responsive layouts.

[MDN | Heigth](https://developer.mozilla.org/pt-BR/docs/Web/CSS/height)
[max-heigth](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
[min-heigth](https://developer.mozilla.org/pt-BR/docs/Web/CSS/min-height)

[MDN | Width](https://developer.mozilla.org/pt-BR/docs/Web/CSS/width)
[max-width](https://developer.mozilla.org/pt-BR/docs/Web/CSS/max-width)
[min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)