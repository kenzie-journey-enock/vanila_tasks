// --------- First Part ------------

// Exercise 1
const person = {
  name: '',
  birthYear: '',
  cpf: '',
  city: '',
  state: '',
  street: ''
}

// Exercise 2
const school = {
  name: '',
  cnpj: '',
  areaOfExpertise: '',
  city: '',
  state: '',
  street: '',
  course: ''
}

// Exercise 3
const course = {
  name: '',
  duration: '',
  class: '',
  modules: ''
}

// Exercise 4
const address = {
  city: '',
  state: '',
  street: '',
  zipCode: ''
}

// --------- Second Part ------------

const car = {  
  plate: "ABC123",   
  classes: ["sedan"],  
  luxury: true,
  power: 200, 
  parked: true 
}


function getPlate(){
    return car.plate;
}

const result1 = getPlate();
console.log(result1);

function checkClasses(){
    if (car.classes.length === 1){
        return car.classes[0];
    } else {
        return car.classes;
    }
}

const result2 = checkClasses();
console.log(result2);

function realPower(){
    // Check if the car is luxury
    if (car.luxury){
        // Calculate the square of the car's current power
        car.power = car.power ** 2;
    } 

    // Return the power of the car
    return car.power;
}

const result3 = realPower();
console.log(result3);

function addNewClass(newClass){
    // Array of allowed classes
    const allowedClasses = ["sedan", "hatchback", "suv", "crossover", "coupe"];

    // Check if the car already has 3 classes
    if (car.classes.length >= 3) {
        return "This car cannot have more classes.";
    }

    // Check if the new class is among the allowed ones
    if (allowedClasses.includes(newClass.toLowerCase())) {
        // Check if the car already has the new class
        if (car.classes.includes(newClass)) {
            return `The car already has the class ${newClass}.`;
        }

        // Add the new class to the car's classes array
        car.classes.push(newClass.toLowerCase());
        return `Class ${newClass} added successfully.`;
    }

    // If the new class is not allowed
    return "Invalid class. The allowed classes are: sedan, hatchback, suv, crossover, and coupe.";
}

const result4 = addNewClass('coupe');
console.log(result4);

function noLongerLuxury(){
    if (!car.parked){
        return `The car ${car.plate} is not parked.`;
    } else if(!car.luxury){
        return `The car ${car.plate} is not luxurious.`;
    }
    car.luxury = false;
    return `The car ${car.plate} is no longer considered a luxury car.`;
}

const result5 = noLongerLuxury();
console.log(result5);
