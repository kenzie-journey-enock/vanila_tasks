## Concept of breakpoints with media query

- Change the code so that the background color of the body and texts changes as the screen is resized. Then resize the screen to observe in practice.
- Change the body background color to salmon (#AF5A5A) and the text color to white (#FFFFFF) from 768px resolution;
- Change the background color of the body back to light blue (#5A73AF);
- Change the body color again, now to aqua green (#5AAF9C);
- From 480px change the body background color to #8A2BE2, change the font color to #fff and increase the font
- From 767px change the body background color to #FF7F50 and the font color to #A9A9A9
- Between 768px and 979px change the body background color to #000 and the font color to #7FFF00
- Set the title to Large size (30px).
- For large desktops with a minimum size of 1200px, assign the background color #E0FFFF to the body and #000 to the font color

## Bonuses

- Add more breakpoints and change colors a few more times
- Use breakpoints to change the font size too.

## Notes

```css
/* MEDIA QUERY */
@media (orientation: landscape) {
   /* styles for landscape mode devices here */
}
@media (min-resolution: 300dpi) {
   /* styles for high-resolution devices here */
}
/* Styles for devices with width less than 320px */
@media (max-width: 320px) {
   /* style rules here */
}

/* Styles for devices with a width between 321px and 480px */
@media (min-width: 321px) and (max-width: 480px) {
   /* style rules here */
}

/* Styles for devices with width between 481px and 768px */
@media (min-width: 481px) and (max-width: 768px) {
   /* style rules here */
}

/* Styles for devices with a width between 769px and 1024px */
@media (min-width: 769px) and (max-width: 1024px) {
   /* style rules here */
}
```