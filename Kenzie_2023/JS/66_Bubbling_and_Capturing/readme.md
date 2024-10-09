# Bubbling and Capturing

## Introduction
During this learning session, I explored how events are handled in a web environment. I discovered that an event does not always trigger immediately upon being activated. Instead, there are two crucial phases that dictate when an event will be processed: capturing and bubbling.

## Capturing
In the capturing phase, the browser checks for any event handlers starting from the root of the page, specifically the `<html>` element. It systematically evaluates each immediate child element until it reaches the element where the event occurred. This phase emphasizes the top-down approach in event handling.

## Bubbling
Conversely, the bubbling phase takes the opposite approach. Here, the browser begins with the element that triggered the event and "bubbles up" to check each parent element until it reaches the root of the page, again the `<html>` element. This highlights the bottom-up strategy in event propagation.

Overall, this learning experience enhanced my understanding of how events are processed in the browser and the significance of both capturing and bubbling phases in web development.