const cars = [
  {
      model: "Ka",
      brand: "Ford",
      year: "2000",
      color: "White",
      full: false,
      accessories: ['Electric Glass'],
      price: 6799.33
  },
  {
      model: "Goal",
      brand: "VW",
      year: "1996",
      color: "Black",
      full: false,
      accessories: ['Lock'],
      price: 12199.13
  },
  {
      model: "Palio",
      brand: "Fiat",
      year: "1995",
      color: "Green",
      full: false,
      accessories: [],
      price: 11099.1
  },
  {
      model: "Monza",
      brand: "Chevrolet",
      year: "1993",
      color: "Wine",
      full: false,
      accessories: [],
      price: 14578.25
  },
  {
      model: "Saveiro",
      brand: "VW",
      year: "2013",
      color: "Silver",
      full: false,
      accessories: [],
      price: 28399.13
  },
  {
      model: "Goal",
      brand: "VW",
      year: "1996",
      color: "Black",
      full: true,
      accessories: ['Alarm', 'Lock', 'Air', 'Electric Window'],
      price: 14350.45
  },
  {
      model: "Goal",
      brand: "VW",
      year: "2013",
      color: "Black",
      full: true,
      accessories: ['Alarm', 'Lock', 'Air', 'Electric Window'],
      price: 22109.21
  },
  {
      model: "Montana",
      brand: "Chevrolet",
      year: "2011",
      color: "Blue",
      full: false,
      accessories: [],
      price: 15999.13
  },
  {
      model: "Stilo",
      brand: "Fiat",
      year: "2000",
      color: "Black",
      full: false,
      accessories: [],
      price: 17251.36
  }
]

/**
Task 1
 */
function totalcount(list_of_cars) {
  return `Total of vehicles is ${list_of_cars.length}`
}

console.log("Task 1: |", totalcount(cars), "| Expect: Total of vehicles is 9")
/**
Task 2
 */
function priceTotal(list_of_cars) {
  let sum = 0
  for (i in list_of_cars) {
    sum += list_of_cars[i].price
  }
  return `The sum of the price of all vehicles is R$${sum.toFixed(2)}`
}

console.log("Task 2: |", priceTotal(cars), "| Expect: The sum of the price of all vehicles is R$142785,09")

/**
Task 3
*/
function filterByBrand(list_of_cars, brand) {
  let vehicles_of_the_brand = {
   brand: brand,
   vehicles: []
 }
 for (i in list_of_cars) {
   if (list_of_cars[i].brand === brand) {
     vehicles_of_the_brand.vehicles.push(list_of_cars[i])
   }
 }
 return vehicles_of_the_brand
}

console.log("Task 3: |", filterByBrand(cars, 'VW').vehicles.length, `| Expect: 4`)

/**
Task 4
 */
function filterByAccessory(list_of_cars, accessory) {
  let vehicles_have_accessory = {
   accessory: accessory,
   vehicles: []
 }
 for (i in list_of_cars) {
  if (list_of_cars[i].accessories.length > 0){
    for (j in list_of_cars[i].accessories) {
      if (list_of_cars[i].accessories[j] === accessory) {
        vehicles_have_accessory.vehicles.push(list_of_cars[i])
      }
    }
  }
 }
 return vehicles_have_accessory
}

const filtered = filterByAccessory(cars, 'Alarm')

console.log("Task 4: |", filtered.vehicles.length, `| Expect: 2`)

/**
Task 5
 */
function filterByFull(list_of_cars) {
  let vehicles_full = {
   key: 'full-cars',
   vehicles: []
 }
 for (i in list_of_cars) {
   if (list_of_cars[i].full) {
     vehicles_full.vehicles.push(list_of_cars[i])
   }
 }
 return vehicles_full
}

console.log("Task 5: |", filterByFull(cars).vehicles.length, `| Expect: 2`)

/**
Task 6
 */
let newCar = {
  model: "Montana 2",
  brand: "Chevrolet",
  year: "2011",
  color: "Blue",
  full: false,
  accessories: [],
  price: 15999.13
}


function addCar(list_of_cars, car) {
  return list_of_cars.push(car)
}

addCar(cars, newCar)

console.log("Task 6: |", cars.length, `| Expect: 10`)

/**
Task 7
 */
function deleteCar(list_of_cars, position) {
  if (list_of_cars[position]) {
    list_of_cars.splice(position, 1)
    return list_of_cars
  }
  return 'Car not found.'
}

deleteCar(cars, 9)

console.log("Task 7: |", cars.length, `| Expect: 9`)

/**
Task 8
 */
function newCars(list_of_cars) {
  let currentYear = 2022
  let count = 0
  for (i in list_of_cars) {
    if (currentYear - parseInt(list_of_cars[i].year) < 10 ) {
      count++
    }
  }
  return `${count} cars less than 10 years old`
}

console.log("Task 8: |", newCars(cars), `| Expect: 2 cars less than 10 years old`)

/**
Task 9
 */
const person = {
  name: 'Enock',
  contact: '(31) 9 8765-4321'
}

function setOwner(list_of_cars, position, { name, contact }) {
  list_of_cars[position].owner = {
    name,
    contact
  }
  return list_of_cars
}

console.log("Task 9: |", setOwner(cars, 8, person)[8].owner.name, `| Expect: Enock`)
