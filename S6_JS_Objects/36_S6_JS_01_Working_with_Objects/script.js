const car = {
  plate: "ABC123",
  classes: ["sedan"],
  luxury: true,
  power: 200,
  parked: true
}

/**
Task 1
 */
function getPlate(){
  return car.plate
}
/**
Task 2
 */
function checkClasses(){
  return car.classes.toString()
}
/**
Task 3
*/
function potentialReal() {
  if (car.luxury) return car.power ** 2
  return car.power
}
/**
Task 4
 */
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
/**
Task 5
 */
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
