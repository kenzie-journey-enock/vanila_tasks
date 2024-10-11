# Responsive Menus

## Introduction
In this lesson, I learned about responsive menus, which are crucial for ensuring that users can navigate a website effectively on any screen size. Responsive menus help create a consistent user experience across various devices.

## What are Responsive Menus?
Responsive menus adapt to the screen size of the device, making them easily accessible regardless of the display size. They are typically designed with different layouts for mobile devices, tablets, and desktops. On smaller screens, menus may be hidden or minimized to prioritize the website's content.

## How Responsive Menus Work
I discovered various techniques for creating responsive menus, with collapsible navigation menus being one of the most popular methods. These menus hide when the screen is too small and reappear when a menu button is clicked. To implement a collapsible menu, I learned to combine HTML, CSS, and JavaScript.

Here’s a simple example of the HTML structure I explored:

```html
<header class="header__container">
  <h1 class="header__logo">Logo</h1>
  <nav class="header__menu">
      <button class="menu__button">Menu</button>
      <ul class="menu__list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
  </nav>
</header>
```

I learned to use CSS to define styles for different screen sizes. For smaller devices, I would use `display: none` to hide the menu, while for larger devices, I would set it to `display: block` or `flex`.

```css
/* Smaller screens */
@media (max-width: 768px) {
  .menu__list {
    display: none;
  }
  .menu__button {
    display: block;
  }
}

/* Larger screens */
@media (min-width: 769px) {
  .menu__list {
    display: flex;
  }
  .menu__button {
    display: none;
  }
}
```

Using JavaScript, I added interactivity to the navigation menu, including smooth transition animations and touch support for mobile devices. I also learned about frameworks like Bootstrap, which offer pre-designed responsive menus.

Here's how I implemented the JavaScript functionality:

```javascript
const menuButton = document.querySelector(".menu__button");
const menu = document.querySelector(".menu__list");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("show");
  menuButton.innerText = menuButton.innerText === "Menu" ? "X" : "Menu";
});
```

## Examples of Responsive Menus in Use
I explored various examples of responsive menus commonly found on the web, such as:
- Collapsible navigation menus that hide and show when a menu button is clicked.
- Hamburger menus that reveal navigation options when clicked.
- Overlay menus that display navigation in a full-screen overlay when activated.

## Conclusion
Responsive menus are essential for ensuring that a website is user-friendly across all screen sizes. By utilizing techniques such as collapsible menus, hamburger menus, and overlays, I can create a responsive navigation system tailored to my projects. I also learned the importance of testing menus on different screen sizes and devices to ensure they function correctly and provide a great user experience.