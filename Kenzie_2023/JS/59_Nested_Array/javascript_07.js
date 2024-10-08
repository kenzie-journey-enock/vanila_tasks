const studentCourse = {
  name: "João",
  age: 31,
  course: "FullStack",
  institution: "Kenzie Br",
  subjects: ["Html", "Css", "JavaScript", "Python"],
  enrollmentStatus: true,
};

// Asks the user for the query option
const queryType = prompt('Enter the query option. (1 - Course | 2 - Subject | 3 - Enrollment status | 4 - Generate student card')

// Function to get the student's course
function getTheCourse(student){
    alert(student.course)
}

// Function to get the student's subjects
function getTheSubjects(student){
    alert(student.subjects)
}

// Function to get the student's enrollment status
function registrationStatus(student){
    if (student.enrollmentStatus){
        student.enrollmentStatus = 'Active'
    } else {
        student.enrollmentStatus = 'Inactive'
    }

    alert(student.enrollmentStatus)
}

// Function to generate the student's card
function generateStudentCard(student){
    const cardInformation = `Name: ${student.name}, Age: ${student.age}, Course: ${student.course}, Institution: ${student.institution}`

    alert(cardInformation)
}

// Checks the query option chosen by the user
if (queryType == 1){
    getTheCourse(studentCourse)
} else if (queryType == 2){
    getTheSubjects(studentCourse)
} else if (queryType == 3){
    registrationStatus(studentCourse)
} else if (queryType == 4){
    generateStudentCard(studentCourse)
} else {
    alert('Enter a number between 1 and 4')
}
