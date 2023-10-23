/**
Task 1

Person
 */
const person = {
  name: 'Borboletinha',
  birth_year: 1998,
  city: 'BH'
}

function createPerson({name, birth_year, city}){
  if (typeof name != 'string' || typeof birth_year != 'number' || typeof city != 'string') {
    return 'Invalid Params.'
  }
  return {
    name,
    birth_year,
    city
  }
}
const person2 = createPerson({'Enock', 1999, 'BH'})

function show({name, birth_year, city}){
  return `${name} is ${birth_year} years old and is currently living in ${city}`
}

// console.log(show(person2))

/**
Task 2

Elevator
 */
const elevator = {
  current_floor: 0,
  total_floor: 5,
  capacity: 4,
  occupation: 2
}

function enterIn(elevator) {
  if (!elevator.current_floor || !elevator.total_floor || !elevator.capacity || !elevator.occupation) {
    return 'Invalid Elevator'
  }
  elevator.occupation++
  if (elevator.occupation > elevator.capacity) {
    return 'Elevator full'
  }
  return `Current occupation at: ${elevator.occupation}`
}

function exitOut(elevator) {
  if (!elevator.current_floor || !elevator.total_floor || !elevator.capacity || !elevator.occupation) {
    return 'Invalid Elevator'
  }
  if (elevator.occupation > 0){
    elevator.occupation--
  }
  return `Current occupation at: ${elevator.occupation}`
}

function climb(elevator){
  if (!elevator.current_floor || !elevator.total_floor || !elevator.capacity || !elevator.occupation) {
    return 'Invalid Elevator'
  }
  elevator.current_floor++
  if (elevator.current_floor < elevator.total_floor) {
    return `We are on the floor: ${elevator.current_floor}`
  }
  return `The elevator is already on the top floor. Floor: ${elevator.total_floor}`
}

function down(elevator){
  if (!elevator.current_floor || !elevator.total_floor || !elevator.capacity || !elevator.occupation) {
    return 'Invalid Elevator'
  }
  if (elevator.current_floor > 0) {
    elevator.current_floor--
    return `We are on the floor: ${elevator.current_floor}`
  }
  return `The elevator is already on the ground floor.`
}

console.log('Elevator - Before functions: ', elevator)
let T2L1 = enterIn(elevator)
let T2L2 = exitOut(elevator)
let T2L3 = climb(elevator)
let T2L4 = down(elevator)
console.log('Elevator - Past functions: ', elevator)
// console.log(T2L1)
// console.log(T2L2)
// console.log(T2L3)
// console.log(T2L4)

/**
Task 3

Television
*/
const tv = {
  current_channel: 42,
  volume: 0
}

function increaseVolume(tv){
  if (!tv.current_channel || !tv.volume){
    return 'Invalid TV'
  }
  if (tv.volume < 10){
    tv.volume++
    return `Volume is at: ${tv.volume}`
  }
  return 'Volume at maximum'
}

function decreaseVolume(tv){
  if (!tv.current_channel || !tv.volume){
    return 'Invalid TV'
  }
  if (tv.volume > 0){
    tv.volume--
    return `Volume is at: ${tv.volume}`
  }
  return 'Volume at minimum'
}

function changeChannelUp(tv){
  if (!tv.current_channel || !tv.volume){
    return 'Invalid TV'
  }
  if (tv.current_channel < 100){
    tv.current_channel++
    return `The current channel is: ${tv.current_channel}`
  }
  return 'This is already the last channel.'
}

function changeChannelDown(tv){
  if (!tv.current_channel || !tv.volume){
    return 'Invalid TV'
  }
  if (tv.current_channel > 0){
    tv.current_channel--
    return `The current channel is: ${tv.current_channel}`
  }
  return 'This is the first channel.'
}

function queryChannel(tv){
  if (!tv.current_channel || !tv.volume){
    return 'Invalid TV'
  }
  return tv.current_channel
}

function queryVolume(tv){
  if (!tv.current_channel || !tv.volume){
    return 'Invalid TV'
  }
  return tv.volume
}

console.log('TV - Before functions: ', tv)
let T3L1 = increaseVolume(tv)
let T3L2 = decreaseVolume(tv)
let T3L3 = changeChannelUp(tv)
let T3L4 = changeChannelDown(tv)
console.log('TV - Past functions: ', tv)
// console.log(T3L1)
// console.log(T3L2)
// console.log(T3L3)
// console.log(T3L4)