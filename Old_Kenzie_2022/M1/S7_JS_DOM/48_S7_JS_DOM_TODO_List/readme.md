# S7 JS DOM TODO List

## Project End

[TODO APP](link deploy)
[Code](01_TODO_List)

## Intro

Household tasks are becoming more difficult to organize every day. You then decided to make an application to have more control.

Develop an application that displays an array of objects on the screen.

To organize the idea, you decided to create a layout. You are already thinking about the growth of the application and decided to create something more complete, for future functionalities.

![image](assets/interface.svg)

**This activity is used as a reference at other times of the week. All buttons used in the proposed layout will be implemented. For now, just do what the activity asks.**

## Thinking about execution
You must create an array of tasks.
- A task has a title and type.

Title is basically what should be done, and type is defined as: urgent, priority or normal.

**Attention to urgent tasks, they will always be rendered at the top of the list.**

Following the order from greatest to least importance.

Your application must have the functionality to render only the title, the type will be used to organize the list elements.

By default, the list that is displayed is the list with all tasks organized from most urgent to least urgent

## Your to-do list
```js
let tasks = [
   {
    title: "Buying food for the cat",
    type: "Urgent"
  },
  {
    title: "Clean the room",
    type: "urgent"
  },
  {
    title: "Fix Computer",
    type: "priority"
  },
  {
    title: "Save lunch money",
    type: "Urgent"
  },
  {
    title: "Drink water",
    type: "priority"
  }
]
```
