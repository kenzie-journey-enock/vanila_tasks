# S8 JS School Data

You were hired to develop a solution for queries regarding student data.

Based on a student's data, you must develop the logic to consult the course, subjects, enrollment status and generate the student card.

Given the object:
```js
const studentCourse = {
   name: "John",
   age: 31,
   course: "FullStack",
   institution: "Kenzie Br",
   materials: ["Html", "Css", "JavaScript", "Python"],
   situationRegistration: true,
};
```

Develop an algorithm that receives via prompt the type of query that the system should perform.
The entry must be the option number, in the following order:
- 1 - Course
- 2 - Subject
- 3 - Enrollment Status
- 4 - Generate Portfolio
The input value must be a number from 1 to 4.
```js
function verifyStudent(student){
  const {name, age, course, institution, materials} = student
  if (
      typeof name != 'string' ||
      typeof age != 'number' ||
      typeof course != 'string' ||
      typeof institution != 'string' ||
      typeof materials != 'object'
    ){
      alert('Invalid Student')
      return false
  }
  alert('Valid Student')
  return true
}

function setTypeFeature() {
  let response = parseFloat(prompt('1:Course | 2:Subject | 3:Enrollment Status | 4:Generate Portfolio: '))
  while(response - response != 0 || response < 1 && response > 4){
      alert('The input value must be a number from 1 to 4.')
      response = parseFloat(prompt('1:Course | 2:Subject | 3:Enrollment Status | 4:Generate Portfolio: '))
  }
  return response
}

function system() {
  let typeFeature = setTypeFeature()

  if (typeFeature == 1){
    let course = getTheCourse(studentCourse)
    alert(`Course: ${course}`)
  }
  if (typeFeature == 2){
    let subjects = getTheSubjects(studentCourse)
    alert(`Subjects: ${subjects}`)
  }
  if (typeFeature == 3){
    let status = resgistrationStatus(studentCourse)
    alert(`Status: ${status}`)
  }
  if (typeFeature == 4){
    let card = generateStudentCard(studentCourse)
    alert(`Card Information: ${card}`)
  }
  return
}
```

## Structuring the features

### Feature 1 - Course

Develop a function called getTheCurse. 
This function receives as a parameter an object of type student, must access the course property and return via an alert which course the student is enrolled in.

#### For example

- Validate data entry to determine the value received. If it is 1:
- Call the getTheCurse Function passing the StudentCurse object.
   - When receiving a student object as a parameter, access the course property and return its value in an alert
```js
function getTheCourse(student){
  if(verifyStudent(student)){
    alert(`Course: ${student.course}`)
    return student.course
  }
  return student.course
}
```

### Feature 2 - Subject

Develop a function called getTheSubjects .
This function receives as a parameter an object of type student, must access the materials property and return the student's list of materials through an alert.

#### For example

- Validate data entry to determine the value received. If it is 2:
- Call the getTheSubjects function passing an object of type student as a parameter.
   - When receiving the student object as a parameter, access the materials property and return its value in an alert.
```js
function getTheSubjects(student){
  if(verifyStudent(student)){
    alert(`Subjects: ${student.materials}`)
    return student.materials
  }
  return student.materials
}
```

### Feature 3 - Enrollment Status
Develop a function called resgistrationStatus.
This function receives an object of type student as a parameter.
You must access the situationRegistration property, treating the contained value, with true = Active and false = inactive.
Returns the value treated in an alert.

#### For example

- Validate data entry to determine the value received. If it is 3:
- Call the resgistrationStatus function passing an object of type student as a parameter.
   - Access the situationRegistration property.
   - If the value of situationRegistration is equal to true.
     - Return in an "Active" alert
   - If the situationRegistration property is equal to false.
     - Return to an "Inactive" alert
```js
function resgistrationStatus(student){
  if(verifyStudent(student)){
    if (student.situationRegistration){
      student.situationRegistration = 'Active'
      alert(`Situation: ${student.situationRegistration}`)
      return student.situationRegistration
    }
    student.situationRegistration = 'Inactive'
    alert(`Situation: ${student.situationRegistration}`)
    return student.situationRegistration
  }
  return student.situationRegistration
}
```

### Feature 4 - Generate Portfolio

Desenvolva uma função chamada generateStudentCard. 
Esta função recebe como parâmetro um objeto do tipo aluno. 
A função deve retornar uma string, contendo as propriedades: nome, idade, curso e instituição.

#### Exemplificando

- Valide a entrada de dados para determinar o valor recebido. Se for 4:
- Chame a função generateStudentCard passando como parâmetro um objeto do tipo aluno.
- Crie uma variável cardInformation
- Armazene nesta variável uma string com o seguinte formato:
  - name: "Joe", idade: "31", curso: "FullStack", instituição: "Kenzie Br"
- Lembre-se de substituir os valores fixados pelas propriedades do objeto, para quando o objeto diferir, sua função ainda continue funcionando.
- Retorne a variável cardInformation dentro de um alert
```js
function generateStudentCard(student){
  let cardInformation = 'X'
  if(verifyStudent(student)){
    cardInformation = `Name: "${student.name}", Age: "${student.age}", Course: "${student.course}", Institution: "${student.institution}".`
  }
  return cardInformation
}
```