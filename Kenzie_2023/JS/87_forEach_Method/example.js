const students = [
  { name: 'Alice', scores: [85, 90, 88] },
  { name: 'Bob', scores: [78, 81, 80] },
  { name: 'Charlie', scores: [92, 95, 89] }
];

// Calculate and print each student's total score
students.forEach(student => {
  const totalScore = student.scores.reduce((acc, score) => acc + score, 0);
  console.log(`${student.name} has a total score of ${totalScore}.`);
});
