# S8 JS Approved or disapproved

You were hired to develop an algorithm that can identify whether or not a student passed.

For the student to be approved, the total grade average must be above 8 and attendance must be above 6.

Develop an algorithm that reads:
subject, name, grade and the presence of a student.

The grades for each subject range from 0 to 10. Store each information in a variable, name and presence will only be requested once.

Grade and subject will be requested from the user more than once, so you must receive these values in different variables, that is, one variable for each subject and one variable for each grade.

Example:
- subjectGeography
- noteGeography

Add up all grades and assign them to a variable sumNote.

Take the average of the grades and assign the variable an averageNote. Check if the average is above or below 8.

Grade and attendance cannot be 0

Name must have at least 5 characters

## Task
- If the entry is a number below 0 or above 10, for grade or attendance, alert that the value is invalid
- If name has less than 5 characters, warn that the name is invalid
- If the student's grade average is equal to or above 8 and attendance equal to or above 6 should alert:
   - The student's name is average grade and his/her attendance: Proven student!
   - Otherwise:
     - The student's name grade is averageNote and his attendance: Student failed!

| Matter | Note |
|------|--------|
| Mathematics | 10 |
| Portuguese | 8 |
| Computer Science | 10 |
| Geography | 10 |
| English | 9 |
| History | 9 |
| Philosophy | 10 |
| Sociology | 8 |
| Literature | 10 |
| Physical Education | 7 |

Using the table above as a basis for testing, reproducing this student's grades, we should have the following output.

Student Kenzie's grade is 9.1 and her presence is 9: Proven student!

Remembering that the name and presence were entered by the user.

```js
  function promptInt(msg){
      while(true){
        let value = parseFloat(prompt(msg))
        if (!isNaN(value)) return value
        alert('Try a number')
      }
    }

    function setStudentName() {
      let studentName = prompt('Student, enter your name: ')
      while (studentName.length < 5){
        alert('Invalid Name.')
        studentName = prompt('Student, enter your name: ')
      }
      alert(`Hello ${studentName}!`)
      return studentName
    }

    function setStudentGrade() {
      let sum = 0
      for (i in subjects){
        alert(`Subject ${subjects[i].name}`)
        let grade = promptInt(`Enter your grade on ${subjects[i].name}`)
        while(grade < 0 || grade > 10) {
          alert(`Grade ${grade} is invalid.`)
          grade = promptInt(`Enter your grade on ${subjects[i].name}`)
        }
        let presence = promptInt(`Enter your presence on ${subjects[i].name}`)
        while(presence < 0 || presence > 10){  
          alert(`Presence ${presence} is invalid.`)
          presence = promptInt(`Enter your presence on ${subjects[i].name}`)
        }
        subjects[i].grade = grade
        subjects[i].presence = presence

        sum += grade
      }
      return sum
    }

    function verifyProven(student){
      student.subjects.push(subjects)
      if (student.average < 8){
        student.proven = false
        return alert(`Student's ${student.name}'s' grade is ${student.average}: Student failed!`)
      }
      if (student.proven){
        for (i in student.subjects){
          if (student.subjects[i].presence < 6) {
            return alert(`Student's ${student.name}'s' grade is ${student.average} and her/his presence in ${student.subjects[i].name} is ${student.subjects[i].presence}: Student failed!`)
          }
        }
        return alert(`Student ${student.name}'s grade is ${student.average} and her/his presence is OK: Proven student!`)
      }
    }

    let stdName = setStudentName()
    let sumGrade = setStudentGrade()
    let std = {
      name: stdName,
      subjects: [],
      average: sumGrade / subjects.length,
      proven: true
    }
    verifyProven(std)
```