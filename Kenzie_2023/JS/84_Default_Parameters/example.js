const sendGreeting = (name = "Friend", message = "Welcome!") => {
  console.log(`${message}, ${name}!`);
};

// Calling the function without any arguments
sendGreeting(); // Output: "Welcome!, Friend!"

// Calling the function with one argument
sendGreeting("Carol"); // Output: "Welcome!, Carol!"

// Calling the function with both arguments
sendGreeting("Carol", "Hello"); // Output: "Hello, Carol!"
