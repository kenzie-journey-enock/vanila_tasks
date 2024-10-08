// Challenge - JavaScript: Approved or Disapproved

function checkApproval(numSubjects) {
  // Asks the user to enter the student's name
  const name = prompt("Enter the student's name:");

  // Checks if the length of the name is less than 5 characters
  if (name.length < 5) {
    return "Invalid name";
  } else {
    // Asks the user to enter the number of attendances of the student
    const attendance = parseInt(
      prompt("Enter the number of attendances of the student:")
    );

    // Checks if the attendance value is less than 0 or greater than 10
    if (attendance < 0 || attendance > 10) {
      return "Invalid attendance value";
    } else {
      let totalGrade = 0;

      // Loop that iterates over the number of subjects provided
      for (let i = 1; i <= numSubjects; i++) {
        // Asks the user to enter the name of the current subject
        const subject = prompt("Enter the name of subject " + i + ":");
        // Asks the user to enter the grade of the current subject
        const grade = parseInt(
          prompt("Enter the grade of the subject " + subject + ":")
        );

        // Checks if the grade value is less than 0 or greater than 10
        if (grade < 0 || grade > 10) {
          return "Invalid grade value";
        } else {
          totalGrade += grade;
        }
      }

      // Calculates the average of the grades
      const averageGrade = totalGrade / numSubjects;

      // Checks if the average grade is greater than or equal to 8 and the attendance is greater than or equal to 6
      if (averageGrade >= 8 && attendance >= 6) {
        return (
          "The student's grade " +
          name +
          " is " +
          averageGrade +
          " and their attendance is " +
          attendance +
          ": Student approved!"
        );
      } else {
        return (
          "The student's grade " +
          name +
          " is " +
          averageGrade +
          " and their attendance is " +
          attendance +
          ": Student disapproved!"
        );
      }
    }
  }
}

// Calls the function checkApproval passing 10 as an argument for the numSubjects parameter and prints the result in the console
console.log(checkApproval(10));
