# S4 Functions without Parameters

In this activity we will practice declaring functions and logic.

## Task 1

Develop a function that displays the phrase "Hello World!" on the console.

```js
function displayPhrase() {
  console.log('Hello World');
}

displayPhrase()
```

## Task 2

Develop a function to find out if the student has the metrics to become a monitor.
- Requirements:
   - 100 Deliveries
   - 100 of Technical Interviews
   - 100 Attendance

- If the requirements are met, show in the console "Possible monitor."
- If the requirements are not met, display in the console "Select another student."

```js
function isMonitor() {
  const deliveries = 100
  const interviews = 100
  const attendance = 100

  let result = 'Select another student.'
  if (deliveries + interviews + attendance == 300){
    result = 'Possible monitor.'
  }
  console.log(result)
}

isMonitor()
```

## Task 3

Develop a function that receives three variables with numerical values and identifies which one is the largest.

```js
const v1 = 1;
const v2 = 2;
const v3 = 3;

function largestNumber(n1, n2, n3) {
  let sum = n1 + n2 + n3
  let result = '404 Not number';
  if (typeof sum === 'number') {
    if (n1 > n2 && n1 > n3) {
      result = `${n1} is largest`;
    } else if (n2 > n1 && n1 > n3) {
      result = `${n2} is largest`;
    } else {
      result = `${n3} is largest`;
    }
  }
  console.log(result);
}

largestNumber(v1,v2,v3)
```

## Task 4

Develop a function to display the following sentence in the console:
- "My name is `name` and `surname`, and I am `age` years old."
- Declare the following variables within the function:
   - name
   - surname
   - age

```js
function sentence() {
  let name = 'Enock'
  let surname = 'Bernardo'
  let age = '24'

  console.log(`My name is ${name} and ${surname}, and I am ${age} years old.`)
}

sentence()
```