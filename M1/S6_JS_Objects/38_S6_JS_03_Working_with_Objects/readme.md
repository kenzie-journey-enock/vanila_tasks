# S6 JS 03 Working with Objects

Practicing Objects

## Tasks

### Task 1

Person - Model an object to represent a person, with the following attributes:
- name
- year of birth
- city

Then create the following functions:
- CreatePerson function.
   - This function will be responsible for creating a person-type object from the parameters received.
   - The function will receive three parameters:
     - name - a string value
     - Birthyear - a value of type number
     - city - a string value
   - Return the person object modeled with the information passed.
- Present function.
   - This function will be responsible for returning all of a person's data in string,
   - with the following message:
       - "{person's name} is {person's age} years old and is currently living in {person's city}."

```js
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

console.log(show(person2))
```

### Task 2

Elevator - Model an Elevator object to store information about an elevator within a building. An Elevator must have the following attributes:
- current_floor - Current floor, where the ground floor will be floor number 0.
- total_floor - Total floors in the building (ignoring the ground floor).
-capacity - Elevator capacity, in number of people.
- Current occupation - Total number of people present in it. It is a property of type number, it will always be an integer.

Then create the following functions:
- Enter function.
   - This function aims to increase the number of occupants inside the elevator. It receives an elevator-type object as a parameter.
     - Access the currentoccupancy property of the elevator object.
     - Always increase the property by 1.
     - Check that when increasing the elevator it has not reached its maximum capacity.
       - If yes, return: "Elevator full".
       - If not, return: "Current occupation at: {occupacaoAtual}".
- Exit function.
   - This function aims to reduce the number of occupants inside the elevator. It receives an elevator-type object as a parameter.
     - Access the currentoccupancy property of the elevator object.
     - Always decrease the property by minus 1.
       - Return: "Current occupation at: {occupacaoAtual}"
- Climb function.
   - This function aims to change the floor in a unit. It receives an elevator-type object as a parameter.
     - Access the Currentfloor property of the elevator object.
     - Always increase the property by 1.
     - Check that when increasing, the elevator has not reached the limit.
       - If yes, return: "The elevator is already on the top floor."
       - If not, return: "We are on the floor: {currentfloor}".
- Down function.
   - This function aims to change the floor in a unit. It receives an elevator-type object as a parameter.
     - Access the Currentfloor property of the elevator object.
     - Always decrease the property by minus 1.
     - Check that when descending, the elevator has not reached the ground floor.
       - If yes, return: "The elevator is already on the ground floor."
       - If not, return: "We are on the floor: {currentfloor}"

```js
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
```

### Task 3

Television - Model a Television object. This object will have the following attributes:
- current_channel - A property of type number.
- volume - A property of type number.

```js
const tv = {
  current_channel: 42,
  volume: 0
}
```

Then create the following functions:

- 1. Develop a function called increaseVolume.
   - This function receives a television-type object as a parameter.
   - Whenever this function is called it must be able to update the volume of the received television object.
     - Access the value property of the television object.
     - Increment the volume by 1.
       - Maximum volume is 10.
         - If the volume is already at maximum or reaches maximum, return: "Volume at maximum".
         - If not, repeat: "Volume is at: {volume}".

```js
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
```

- 2. Develop a function called decreaseVolume.
   - This function receives a television-type object as a parameter.
   - Whenever this function is called it must be able to update the volume of the received television object.
     - Access the value property of the television object.
     - Increment the volume by 1.
       - The minimum volume is 0.
         - If the volume is already at minimum or reaches minimum, return: "Volume at minimum".
         - If not, repeat: "Volume is at: {volume}".

```js
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
```

- 3. Develop a function called changeChannelUp.
   - This function receives a television-type object as a parameter.
   - Whenever this function is called it must be able to update the channel of the received television object.
     - Access the channel property of the television object.
     - Increment the channel by 1.
       - The maximum channel is 100.
         - If the channel is already at maximum or reaches maximum, return: "This is already the last channel".
         - If not, repeat: "The current channel is: {channel}".

```js
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
```

- 4. Develop a function called changeCanalParaBaixo.
   - This function receives a television-type object as a parameter.
   - Whenever this function is called it must be able to update the channel of the received television object.
     - Access the channel property of the television object.
     - Decrease the channel by 1.
       - The minimum channel is 0.
         - If the channel is already at minimum or reaches minimum, return: "This is the first channel".
         - If not, repeat: "The current channel is: {channel}".

```js
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
```

- 5. Develop a function called queryCanal.
   - This function receives a television-type object as a parameter.
   - Return the channel property.

```js
function queryChannel(tv){
  if (!tv.current_channel || !tv.volume){
    return 'Invalid TV'
  }
  return tv.current_channel
}
```

- 6. Develop a function called consultVolume.
   - This function receives a television-type object as a parameter.
   - Return the volume property.

```js
function queryVolume(tv){
  if (!tv.current_channel || !tv.volume){
    return 'Invalid TV'
  }
  return tv.volume
}
```