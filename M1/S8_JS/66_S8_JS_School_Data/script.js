const studentCourse = {
  name: "John",
  age: 31,
  course: "FullStack",
  institution: "Kenzie Br",
  materials: ["Html", "Css", "JavaScript", "Python"],
  situationRegistration: true,
};

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
  while(response - response != 0 || response < 1 || response > 4){
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

// Feature 1 - Course

function getTheCourse(student){
  if(verifyStudent(student)){
    alert(`Course: ${student.course}`)
    return student.course
  }
  return student.course
}

// Feature 2 - Subject

function getTheSubjects(student){
  if(verifyStudent(student)){
    alert(`Subjects: ${student.materials}`)
    return student.materials
  }
  return student.materials
}

// Feature 3 - Enrollment Status

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

// Feature 4 - Generate Portfolio

function generateStudentCard(student){
  let cardInformation = 'X'
  if(verifyStudent(student)){
    cardInformation = `Name: "${student.name}", Age: "${student.age}", Course: "${student.course}", Institution: "${student.institution}".`
  }
  return cardInformation
}

system()