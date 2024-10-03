# S6 JS 01 Working with Objects

Practicing Objects

## Part 1: Modeling

Given the properties:
- Name
- Year of birth
- CPF
- City
- State
- Complement
Create the person object containing all the properties mentioned.
```js
const person = {
  name: '',
  birth: '',
  cpf: '',
  city: '',
  state: '',
  complement: ''
}
```

Given the properties:
- Name
- CNPJ
- Occupation area
- City
- State
- Complement
- Course
Create the school object containing all the properties mentioned.
```js
const school = {
  name: '',
  cnpj: '',
  occupation: '',
  city: '',
  state: '',
  complement: '',
  course: '',
}
```

Given the properties:
- Name
- Duration in years
- Class
- Modules
Create the course object containing all the properties mentioned.
```js
const course = {
  name: '',
  duration: '',
  class: '',
  modules: ''
}
```

Given the properties:
- City
- State
- Complement
- Zip code
Create the address object containing all the properties mentioned.
```js
const address = {
  city: '',
  state: '',
  complement: '',
  zip: ''
}
```

## Part 2: Handling - Parking

Given the car object that represents a parked car, perform the following tasks:

```js
const car = {
   plate: "ABC123",
   classes: ["sedan"],
   luxury: true,
   power: 200,
   parked: true
}
```

### Task 1

Write a function called getPlate:

- The function, when called, must return the license plate of the car.
   - Example of function call: getPlaca()
   - Output: "ABC123"

```js
function getPlate(){
  return car.plate
}
```

### Task 2

Write a function called checkClasses:

- The function, when called, must return the class(es) of the car.
   - Note that the property is an array
     - when the array has only one element, return only the value of the element
     - when the array has more than one element, return the entire array.
   - Example of function call: verifyClasses()
   - Output: "sedan"

```js
function checkClasses(){
  return car.classes.toString()
}
```

### Task 3

Write a function called potentialReal:

- The function, when called, must return the real power of the car.
   - If the car has the luxury property set to true, the value of the power property is squared.
   - Return the value of the car's power.
     - Example of function call: potenciaReal()
     - Output: 40000

```js
function potentialReal() {
  if (car.luxury) return car.power ** 2
  return car.power
}
```

### Task 4

Create a function called addNewClass that takes a string as a parameter:

- Check if the number of car classes is greater than or equal to 3.

- If the number of classes is greater than or equal to 3
   - return: "This car cannot have any more classes."

- If the number of classes is less than 3
   - check if the received class is among the
     - permitted classes: 'sedan', 'hatchback', 'suv', 'crossover' and 'coupe'.

- If the class received is not among the allowed classes
   - return: "Invalid class. Allowed classes are: sedan, hatchback, SUV, crossover and coupe."

- If the received class is among the allowed classes
   - check if it is already present in the car object.

- If the class is already present
   - return: "The car already has class x", where x is the value of the class.

- If the class is not present
   - add it to the car class list and
   - return: "Class x added successfully", where x is the value of the class.

- Example of function call: addNewClass('coupe')
- Output: "Coupe class added successfully"

```js
function addNewClass(newClass) {
  let permitClasses = ['sedan', 'hatchback', 'suv', 'crossover', 'coupe']
  if (car.classes.length >= 3) {
    return "This car cannot have any more classes."
  }
  for (i in car.classes) {
    for (j in permitClasses) {
      if (newClass === permitClasses[j]) {
        if (car.classes[i] === newClass) {
          return `The car already has class ${car.classes[i]}`
        }
        car.classes.push(newClass)
        return `Class ${newClass} added successfully`
      }
    }
  }
  return "Invalid class. Allowed classes are: sedan, hatchback, SUV, crossover and coupe."
}
```

### Task 5

⁠Write a function called noMoreLuxury:

- Make sure the car is parked.
   - If the car is not parked,
     - return: "The car {license plate} is not parked."
- Check if the car's "luxury" attribute is true.
   - If the "luxury" attribute is not true,
     -return: "The car {license plate} is not luxurious."
   - If both attributes are correct (parked car and true luxury),
     - change the "luxury" attribute to false.

- Return: "The car {license plate} is no longer considered a luxury car",.

Note: Replace "{license plate}" with the license plate of the car in question.

- Example of function call: noMoreLuxury()
- Output: "The ABC123 car is no longer considered a luxury car"

```js
function noMoreLuxury() {
  if (!car.parked) {
    return `The car ${car.plate} is not parked.`
  }
  if (!car.luxury) {
    return `The car ${car.plate} is not luxurious.`
  }
  car.luxury = false
  return `The car ${car.plate} is no longer considered a luxury car`
}
```
