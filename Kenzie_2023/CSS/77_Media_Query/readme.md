# Media Query

## Introduction
In this course, I learned about Media Queries, a powerful feature in CSS that allows me to apply different styles to a document based on specific characteristics of the device or browser. This capability enables me to create layouts that adapt to various screen sizes, enhancing the visual presentation of my website across different devices.

## Syntax
I discovered the basic syntax for a Media Query:

```css
@media (condition) {
  /* styles to be applied here */
}
```

Here, the condition refers to the characteristic I want to check, and the enclosed styles are those that will apply if the condition is met.

## Types of Media Queries
The course covered three main types of Media Queries:

### Media Queries for Device Width
I learned how to use Media Queries based on the width of the device to apply different styles for mobile, tablet, or desktop screens. For instance, a Media Query can target screens smaller than 600 pixels:

```css
@media (max-width: 600px) {
  /* styles for mobile devices here */
}
```

### Media Queries for Device Orientation
I explored how to use Media Queries to adapt styles based on device orientation, such as landscape or portrait mode. An example includes applying specific styles when the device is in landscape mode:

```css
@media (orientation: landscape) {
  /* styles for devices in landscape mode here */
}
```

### Media Queries for Device Resolution
I learned to differentiate styles based on the device's resolution. For example, I can apply different styles for devices with a resolution greater than 300dpi:

```css
@media (min-resolution: 300dpi) {
  /* styles for high-resolution devices here */
}
```

## Practical Example
The course provided a practical example of a Media Query applied to a webpage layout. I worked with an HTML structure and corresponding CSS, where I defined styles for both desktops and mobile devices. Here’s a brief overview:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Media Query Example</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<header>
		<nav class="menu">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
		<h1>Media Query Example</h1>
	</header>
	<main>
		<p>Content goes here...</p>
	</main>
</body>
</html>
```

In the CSS, I defined styles for desktop and mobile views. For mobile devices (with a max-width of 600 pixels), I changed the header's background color and font size and hid the menu.

## Conclusion
I concluded that Media Queries are essential tools for creating responsive designs that adapt to various devices and display conditions. By leveraging them, I can ensure a consistent and user-friendly experience across all platforms, enhancing usability and accessibility. Additionally, using Media Queries wisely can optimize bandwidth and loading times by preventing unnecessary content from loading on devices where it won't be displayed.

With a solid understanding of Media Queries, I feel empowered to create flexible and responsive layouts that elevate the user experience and give my website a more professional look.