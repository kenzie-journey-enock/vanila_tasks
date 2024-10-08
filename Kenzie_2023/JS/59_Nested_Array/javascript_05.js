// Challenge - JavaScript: Question Management

// Model of the slenzie object:
const slenzie = {
  name: "",
  questions: [],
};

// Model of the question object:
const question = {
  user: "",
  userQuestion: "",
  vote: 0,
  answered: false,
};

// Function to create an event
function createEvent(objEvent, eventName) {
  // Checks if the name is a string and at least 5 characters long
  if (typeof eventName === "string" && eventName.length >= 5) {
    // Sets the event name in the object
    objEvent.name = eventName;
    return objEvent;
  }

  return "The input value is invalid";
}

// Function to add a question to an event
function addQuestion(objEvent, objQuestion) {
  console.log(objEvent);
  console.log(objQuestion);
  // Checks if the objects are null or undefined
  if (typeof objQuestion === "undefined" || typeof objEvent === "undefined") {
    return "The user or question cannot be undefined";
  }

  // Adds the question to the event's questions array
  objEvent.questions.push(objQuestion);
  // Returns the updated object
  return objEvent;
}

// Function to add a vote to a question
function addVoteToQuestion(objEvent, questionIndex) {
  const lengthQuestions = objEvent.questions.length;

  // Checks if the question index is valid
  if (questionIndex < 0 || questionIndex > lengthQuestions - 1) {
    return "Question not found.";
  }

  // Increments the vote count of the question at the specified position
  objEvent.questions[questionIndex].vote++;

  return "Vote registered successfully";
}

// Function to mark a question as answered
function answerQuestion(objEvent, questionIndex) {
  const lengthQuestions = objEvent.questions.length;

  // Checks if the question index is valid
  if (questionIndex < 0 || questionIndex > lengthQuestions - 1) {
    return "Question not found";
  }

  // Sets the "answered" property of the question at the specified position to true
  objEvent.questions[questionIndex].answered = true;
  // Returns the updated object
  return objEvent;
}

// Function to get unanswered questions in an event
function unansweredQuestions(objEvent) {
  const output = [];

  const questions = objEvent.questions;

  // Loops through all questions in the event
  for (let i = 0; i < questions.length; i++) {
    // Checks if the question has not been answered
    if (questions[i].answered !== true) {
      output.push(questions[i]);
    }
  }

  return output;
}

console.log(createEvent(slenzie, "First Event"));
// Output: {name: 'First Event', questions: Array(0)} / or {name: 'First Event', questions: []}
console.log(createEvent(slenzie, "abc"));
// Output: The input value is invalid

const slenzie2 = {
  name: "Second Event",
  questions: [],
};

const question2 = {
  user: "User 1",
  userQuestion: "Question 1",
  vote: 0,
  answered: false,
};
console.log(addQuestion(slenzie2, question2));
// Output: {name: 'Second Event', questions: [{user: 'User 1', userQuestion: 'Question 1', vote: 0, answered: false}]}
console.log(addQuestion());
// Output: The user or question cannot be undefined

console.log(addVoteToQuestion(slenzie2, 0));
// Output: Vote registered successfully
console.log(question2);
// Output: {user: 'User 1', userQuestion: 'Question 1', vote: 1, answered: false}
console.log(addVoteToQuestion(slenzie2, 1000));
// Output: Question not found

const slenzie3 = {
  name: "Third Event",
  questions: [],
};

const question3 = {
  user: "User 3",
  userQuestion: "Question 3",
  vote: 0,
  answered: false,
};

const question4 = {
  user: "User 4",
  userQuestion: "Question 4",
  vote: 0,
  answered: false,
};

const question5 = {
  user: "User 5",
  userQuestion: "Question 5",
  vote: 0,
  answered: false,
};

// Adding the questions
addQuestion(slenzie3, question3);
addQuestion(slenzie3, question4);
addQuestion(slenzie3, question5);
// Answering only the question at index 1.
console.log(answerQuestion(slenzie3, 1));
/*
Output:
{
  name: "Third Event",
  questions: [
    { user: "User 3", userQuestion: "Question 3", vote: 0, answered: false },
    { user: "User 4", userQuestion: "Question 4", vote: 0, answered: true },
    { user: "User 5", userQuestion: "Question 5", vote: 0, answered: false },
  ],
};
*/

console.log(answerQuestion(slenzie3, 10000));
// Output: Question not found

console.log(unansweredQuestions(slenzie3));
/*
Output:
[
  { user: "User 3", userQuestion: "Question 3", vote: 0, answered: false },
  { user: "User 5", userQuestion: "Question 5", vote: 0, answered: false },
]
*/
