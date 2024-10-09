function printResult(result) {
  console.log("The result of the sum is: " + result);
}

function add(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}

add(2, 3, printResult);