let tasks = ["Review PR", "Write report", "Team meeting", "Code refactoring"];

// 1. Adding tasks at the end of the array
tasks.splice(tasks.length, 0, "Client call", "Update documentation");
console.log("After adding tasks:", tasks);
// Output: ["Review PR", "Write report", "Team meeting", "Code refactoring", "Client call", "Update documentation"]

// 2. Removing a task from the middle
let removedTask = tasks.splice(1, 1);
console.log("After removing a task:", tasks);
console.log("Removed task:", removedTask);
// Output: After removing a task: ["Review PR", "Team meeting", "Code refactoring", "Client call", "Update documentation"]
// Removed task: ["Write report"]

// 3. Replacing a task
tasks.splice(0, 1, "Check emails");
console.log("After replacing a task:", tasks);
// Output: ["Check emails", "Team meeting", "Code refactoring", "Client call", "Update documentation"]
