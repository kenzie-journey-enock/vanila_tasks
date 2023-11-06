const slenzieObj = {
  nameEvent: '',
  questions: []
}
const slenzieObj2 = {
  nameEvent: '',
  questions: []
}

const questionObj = {
  user: '',
  userQuestion: '',
  vote: 0
}

//  Task 1
function createEvent(slenzie, str){
  if(typeof str != 'string' || str.length < 5 ) return 'The input value is invalid'
  slenzie.nameEvent = str
  return slenzie
}

// Task 2
function addQuestion(slenzie, question){
  const {user, userQuestion } = question
  if (user.length == 0 ) return "The user can't be null."
  if (userQuestion.length == 0 ) return "The question can't be null."
  slenzie.questions.push(question)
  return slenzie
}

// Task 3
function addVoteToQuestion(value, slenzie){
  if (value > slenzie.questions.length) return 'Question not found.'
  if (value <= 0 || typeof value != 'number' ) return 'The value is not allowed.'
  slenzie.questions[value - 1].vote++
  return `Vote registered successfully in this question: ${slenzie.questions[value - 1].userQuestion}`
}

// Task 4
function questionAnswered(value, slenzie){
  if (value > slenzie.questions.length) return 'Question not found.'
  if (value <= 0 || typeof value != 'number' ) return 'The value is not allowed.'
  slenzie.questions[value - 1].answered = true
  return slenzie
}

// Task 5
function unansweredQuestions(slenzie){
  let output = []
  for (i in slenzie.questions){
    if (!slenzie.questions[i].answered){
      output.push(slenzie.questions[i])
    }
  }
  return output
}

// Tests

let slenzieCase1 = createEvent(slenzieObj, '')
let slenzieCase2 = createEvent(slenzieObj, 0)
let slenzieCase3 = createEvent(slenzieObj, 'Ixi')
let slenzieCase4 = createEvent(slenzieObj, 'Event')
let slenzieCase5 = createEvent(slenzieObj2, 'NEWvent')

console.log('Task 1 |', slenzieCase1, '||||| The input value is invalid ')
console.log('Task 1 |', slenzieCase2, '||||| The input value is invalid ')
console.log('Task 1 |', slenzieCase3, '||||| The input value is invalid ')
console.log('Task 1 |', slenzieCase4, "||||| {  nameEvent: 'Event',  questions: [] } ")

const testAddQ1 = addQuestion(slenzieCase4, {
  user: '',
  userQuestion: 'Question1?',
  vote: 0
})
const testAddQ2 = addQuestion(slenzieCase4, {
  user: 'Enock',
  userQuestion: '',
  vote: 0
})
const testAddQ3 = addQuestion(slenzieCase4, {
  user: 'Enock',
  userQuestion: 'Question1?',
  vote: 0
})
const testAddQ4 = addQuestion(slenzieCase5, {
  user: 'Enock',
  userQuestion: 'Question answer?',
  vote: 0
})

console.log('Task 2 |', testAddQ1, "||||| The user can't be null. ")
console.log('Task 2 |', testAddQ2, "||||| The question can't be null. ")
console.log('Task 2 |', testAddQ3.questions.length, "||||| 1 ")

slenzieCase4 = {...testAddQ3}

const testAddVote1 = addVoteToQuestion(1, slenzieCase4)
const testAddVote2 = addVoteToQuestion(2, slenzieCase4)
const testAddVote3 = addVoteToQuestion(-3, slenzieCase4)
const testAddVote4 = addVoteToQuestion('4g', slenzieCase4)

console.log('Task 3 |', testAddVote1, "||||| Vote registered successfully in this question: Question1? ")
console.log('Task 3 |', testAddVote2, "||||| Question not found.")
console.log('Task 3 |', testAddVote3, "||||| The value is not allowed.")
console.log('Task 3 |', testAddVote4, "||||| The value is not allowed.")

const testQuestAnsw1 = questionAnswered(1, slenzieCase5)
const testQuestAnsw2 = questionAnswered(2, slenzieCase4)
const testQuestAnsw3 = questionAnswered(-3, slenzieCase4)
const testQuestAnsw4 = questionAnswered('4g', slenzieCase4)

console.log('Task 4 |', testQuestAnsw1.questions[0].answered, "||||| true ")
console.log('Task 4 |', testQuestAnsw2, "||||| Question not found.")
console.log('Task 4 |', testQuestAnsw3, "||||| The value is not allowed.")
console.log('Task 4 |', testQuestAnsw4, "||||| The value is not allowed.")

const testUnansw1 = slenzieCase5
const testUnansw2 = addQuestion(slenzieCase4, {
  user: 'Enock',
  userQuestion: 'Question2?',
  vote: 0
})

console.log('Task 5 |', unansweredQuestions(testUnansw1).length, "||||| 0")
console.log('Task 5 |', unansweredQuestions(testUnansw2).length, "||||| 2")
