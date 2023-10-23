# S6 JS 02 Working with Objects

## Run Tasks

```shell
node ./script.js
```


## Intro

Your boss needs data from the dealership and some registration changes for your vehicles.

Given the list of vehicles:
```js
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
```

## Task 1
### How many vehicles do we have in stock?

Create a function that takes the list of cars as a parameter and returns the total number of vehicles.

```js
function totalcount(list_of_cars) {
  return `Total of vehicles is ${list_of_cars.length}`
}
```


## Task 2
### How much is my entire vehicle inventory worth?

Create a function that takes the list of cars as a parameter and returns the sum of the vehicles' prices.
- Return a string with the following format: 
  - 'The sum of the price of all vehicles is R$ 00000000.00'

```js
function priceTotal(list_of_cars) {
  let sum = 0
  for (i in list_of_cars) {
    sum += list_of_cars[i].price
  }
  return `The sum of the price of all vehicles is R$${sum}`
}
```


## Task 3
### Searching for a vehicle by brand

Create a function that receives the list of cars and the brand sought as parameters, filters and returns all vehicles of the brand.

```js
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
```

## Task 4
### Searching for a vehicle by accessory

Create a function that receives the list of cars and the accessory sought as a parameter, filters and returns all vehicles that have the accessory.

```js
function filterByAccessory(list_of_cars, accessory) {
   let vehicles_have_accessory = {
    accessory: accessory,
    vehicles: []
  }
  for (i in list_of_cars) {
    if (list_of_cars[i].accessory === accessory) {
      vehicles_have_accessory.vehicles.push(list_of_cars[i])
    }
  }
  return vehicles_have_accessory
}
```


## Task 5
### Finding complete vehicles

Create a function that receives the list of cars as a parameter, filters and returns all vehicles that are complete.

```js
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
```

## Task 6
### Adding another car to the dealership

Create a function to add new cars to the list. Return updated car list.

```js
function addCar(list_of_cars, car) {
  return list_of_cars.push(car)
}
```

## Task 7
### Removing a car from the dealership's car list

Create a function that receives as parameters the list of cars and the index of a vehicle.

Remove the element referring to the index and return the updated list.

Remember to treat when the position is invalid.

```js
function deleteCar(list_of_cars, position) {
  if (list_of_cars[position]) {
    list_of_cars.splice(position, 1)
    return list_of_cars
  }
  return 'Car not found.'
}
```

## Task 8
### Looking for all new cars

Create a function that takes the list of cars as a parameter.

Return the number of cars less than 10 years old.

```js
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
```

## Task 9
### Who are the owners?

Your boss noticed that he failed to include an important field in the objects, the 'owners' field.

All cars at the dealership are second-hand.

With this, develop a function that receives as parameters the list of cars, an index of the list and a person object. The person object must contain the name of the owner and a contact telephone number.

We know that this property does not exist, so the owners property must be created.

Return the updated list.

```js
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
```