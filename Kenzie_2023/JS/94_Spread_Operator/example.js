// Basic user information
const basicInfo = {
  name: "Alice",
  age: 28,
  location: "New York"
};

// Additional user details
const additionalInfo = {
  profession: "Software Engineer",
  hobbies: ["Reading", "Traveling"]
};

// Merging both objects into a complete user profile
const userProfile = {
  ...basicInfo,
  ...additionalInfo,
  // Adding a new property for the user's bio
  bio: "A passionate coder who loves exploring new places."
};

console.log(userProfile);

/*
Output:
{
  name: "Alice",
  age: 28,
  location: "New York",
  profession: "Software Engineer",
  hobbies: ["Reading", "Traveling"],
  bio: "A passionate coder who loves exploring new places."
}
*/

// Using the Spread Operator to add hobbies to the hobbies array
const moreHobbies = ["Cooking", "Photography"];
const updatedHobbies = [...additionalInfo.hobbies, ...moreHobbies];

console.log(updatedHobbies); // Output: ["Reading", "Traveling", "Cooking", "Photography"]

// Using the Spread Operator to convert a string to an array of characters
const username = "Alice123";
const usernameArray = [...username];

console.log(usernameArray); // Output: ["A", "l", "i", "c", "e", "1", "2", "3"]
