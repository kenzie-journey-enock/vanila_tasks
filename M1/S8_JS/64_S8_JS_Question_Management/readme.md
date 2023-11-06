# S8 JS Question Management

You were hired to develop an application for digital event questions called Slenzie. 
The tool will be responsible for storing the questions received.

## Intro

Create an object called slenzie. This object must have the following properties:

- nameEvent - This property is of type string and will be used to store the name of the event in which the tool will be used.
- questions - This property receives a list-type value, to store each question asked.
The other necessary object is the question. It must have the following properties:

- user - This is a string property and will store the name of the user who asked the question.
- userQuestion - This is a string property and will store the question asked by the user.
- vote - This is a property of type number and must store a positive integer. Initially its value is zero.
```js
const slenzie = {
  nameEvent: '',
  questions: []
}
const question = {
  user: '',
  userQuestion: '',
  vote: 0
}
```

## Task 1: Develop a function called createEvent

This function receives as parameters an object of type slenzie and a string. Access the nameEvent property of the slenzie object and assign it the value of the received string.

- What should be checked
   - Check if the value received is actually a string.
   - Check that the value received as a parameter has at least 5 characters.
     - If the tests are successful, return the updated slenzie object.
     - If not, return: "The input value is invalid".
```js
function createEvent(slenzie, str){
  if(typeof str != 'string' || str.length < 5 ) return 'The input value is invalid'
  slenzie.nameEvent = str
  return slenzie
}
```

## Task 2: Develop a function called addQuestion

This function receives an object of type slenzie and an object of type question as parameters.

The question must be stored in the slenzie object's list of questions.

- What should be checked
  - Check that the question type object does not have empty properties; It is mandatory that properties have value.
    - If the user property is empty, return: "The user can't be empty".
    - If the userQuestion property is empty, return: "The question can't be null".
```js
function addQuestion(slenzie, question){
  const {user, userQuestion } = question
  if (user.length == 0 ) return "The user can't be null."
  if (userQuestion.length == 0 ) return "The question can't be null."
  slenzie.questions.push(question)
  return slenzie
}
```

## Task 3: Develop a function called addVoteToQuestion

This function must receive an integer value as a parameter and the slenzie object. 
Access the list of questions from the slenzie object and increase the vote property of the list element in the position received as a parameter.

- What should be checked
  - Check if the value passed is within the list size limits
    - If the value is not within the list limits, return: "Question not found."
  - Check whether the passed value is neutral or a positive integer.
    - If the values are not within the standards, return: "The value is not allowed"
  - If everything is within the standards verified in the previous steps, 
    - return: "Vote registered successfully" .
```js
function addVoteToQuestion(value, slenzie){
  if (value > slenzie.questions.length) return 'Question not found.'
  if (value <= 0 || typeof value != 'number' ) return 'The value is not allowed.'
  slenzie.questions[value - 1].vote++
  return `Vote registered successfully in this question: ${slenzie.questions[value - 1].userQuestion}`
}
```

## Task 4: Develop a function called questionAnswered

This function must receive an integer value and the slenzie object as a parameter.

Access the list of questions and add the answered property to the question referring to the position of the integer received as a parameter.

Set the value true for the answered property.

- What should be checked
  - Check if the value passed is within the list size limits
    - If the value is not within the list limits, 
      - return: "Question not found."
  - Check whether the passed value is neutral or a positive integer.
    - If the values are not within the standards, 
      - return: "The value is not allowed"
```js
function questionAnswered(value, slenzie){
  if (value > slenzie.questions.length) return 'Question not found.'
  if (value <= 0 || typeof value != 'number' ) return 'The value is not allowed.'
  slenzie.questions[value - 1].answered = true
  return slenzie
}
```

## Task 5: Develop a function called unansweredQuestions

This function takes the slenzie object as a parameter and returns all questions that have not yet been answered.

- Create a variable called output. This variable must be initialized to an empty list.
- Scroll through the list of questions. Questions that do not have the answered property set to true must be inserted into this list.
- Return the output list.
```js
function unansweredQuestions(slenzie){
  let output = []
  for (i in slenzie.questions){
    if (!slenzie.questions[i].answered){
      output.push(slenzie.questions[i])
    }
  }
  return output
}
```