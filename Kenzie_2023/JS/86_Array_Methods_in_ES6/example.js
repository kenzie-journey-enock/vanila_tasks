const scores = [65, 82, 47, 93, 56, 38, 75, 92, 44, 85];

// Step 1: Filter out scores below 50 (failing scores)
const passingScores = scores.filter(score => score >= 50);

// Step 2: Apply a 10% bonus to each passing score
const adjustedScores = passingScores.map(score => score * 1.10);

// Step 3: Sort the scores in descending order
adjustedScores.sort((a, b) => b - a);

// Step 4: Calculate the average of the adjusted scores
const averageScore = adjustedScores.reduce((acc, score) => acc + score, 0) / adjustedScores.length;

console.log("Passing Scores:", passingScores);
console.log("Adjusted Scores:", adjustedScores);
console.log("Average Adjusted Score:", averageScore.toFixed(2));
