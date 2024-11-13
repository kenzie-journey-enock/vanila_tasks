// Function to display the welcome message
function displayWelcomeMessage() {
  const welcomeMessageElement = document.getElementById("welcome-message");
  const name = localStorage.getItem("name");
  if (name) {
      welcomeMessageElement.textContent = `Welcome back, ${name}!`;
  } else {
      welcomeMessageElement.textContent = "Welcome! Please enter your name.";
  }
}

// Event listener for the save button
document.getElementById("save-button").addEventListener("click", () => {
  const nameInput = document.getElementById("name-input").value;
  if (nameInput) {
      localStorage.setItem("name", nameInput);
      displayWelcomeMessage();
  } else {
      alert("Please enter a name.");
  }
});

// Event listener for the clear button
document.getElementById("clear-button").addEventListener("click", () => {
  localStorage.removeItem("name");
  displayWelcomeMessage();
});

// Display the welcome message when the page loads
displayWelcomeMessage();
