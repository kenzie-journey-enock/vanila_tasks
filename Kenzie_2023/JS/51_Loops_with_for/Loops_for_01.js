// Exercise 1

function renderUpToTwenty() {
  //Declares the function renderUpToTwenty()
  for (let i = 0; i <= 20; i++) {
    //Uses the for loop to iterate from 0 to 20, incrementing the index by 1
    console.log("Current index value:", i); //Prints the current value of the index to the console
  }
}
renderUpToTwenty(); //Executes the function renderUpToTwenty()

// Exercise 2

function tenInTenToAHundred() {
  //Declares the function tenInTenToAHundred()
  for (let i = 1; i <= 100; i++) {
    //Uses the for loop to iterate from 1 to 100, incrementing the index by 1
    if (i % 10 === 0) {
      //If the remainder of the division of the index by 10 equals 0
      console.log("Current index value divisible by 10:", i); //Prints the current value of the index to the console
    }
  }
}
tenInTenToAHundred(); //Executes the function tenInTenToAHundred()

// Exercise 3

function oddUpToTwenty() {
  //Declares the function oddUpToTwenty()
  for (let i = 0; i <= 20; i++) {
    //Uses the for loop to iterate from 0 to 20, incrementing the index by 1
    if (i % 2 !== 0) {
      //If the remainder of the division of the index by 2 is not equal to 0 (odd number check)
      console.log("Current odd index value:", i); //Prints the current odd value of the index to the console
    }
  }
}
oddUpToTwenty(); //Executes the function oddUpToTwenty()

// Exercise 4

function evenUpToTwenty() {
  //Declares the function evenUpToTwenty()
  for (let i = 0; i <= 20; i++) {
    //Uses the for loop to iterate from 0 to 20, incrementing the index by 1
    if (i % 2 === 0) {
      //If the remainder of the division of the index by 2 equals 0 (even number check)
      console.log("Current even index value:", i); //Prints the current even value of the index to the console
    }
  }
}
evenUpToTwenty(); //Executes the function evenUpToTwenty()

// Exercise 5

function fromNegativeToPositive() {
  //Declares the function fromNegativeToPositive()
  for (let i = -10; i <= 0; i++) {
    //Uses the for loop to iterate from -10 to 0, incrementing the index by 1
    console.log("Current index value from negative to positive:", i); //Prints the current value of the index to the console
  }
}
fromNegativeToPositive(); //Executes the function fromNegativeToPositive()

// Exercise 6

function inDescendingDirection() {
  //Declares the function inDescendingDirection()
  for (let i = 10; i >= 0; i--) {
    //Uses the for loop to iterate from 10 to 0, decrementing the index by 1
    console.log("Current index value in descending order:", i); //Prints the current value of the index to the console
  }
}
inDescendingDirection(); //Executes the function inDescendingDirection()

// Exercise 7

function toSquare() {
  //Declares the function toSquare()
  for (let i = 1; i <= 10; i++) {
    //Uses the for loop to iterate from 1 to 10, incrementing the index by 1
    console.log("Current square of index value:", i * i); //Prints the current value of the index squared (i² == i*i) to the console
  }
}
toSquare(); //Executes the function toSquare()

