# S6 JS Manipulating Objects

In this list of activities we will practice manipulating objects. 
You will access, edit, validate and create object properties.

## Task 1
### Checking approvals

Given the following list of students:
```js
let listStudents = [
   {
     name: 'John',
     course: 'Computer Science',
     shift: 'night',
     averageCut: 7,
     matters: [
       {
         name: 'Calculus I',
         assessments: [6, 8, 10, 8]
       },
       {
         name: 'Computational Thinking',
         assessments: [6, 8, 6, 8]
       },
       {
         name: 'Object Oriented Language',
         assessments: [7, 8, 9, 10]
       },
       {
         name: 'Computer Organization Architecture',
         assessments: [6, 8, 7, 8]
       }
     ]
   }
]
```

Each student is represented by an object, containing the following attributes:
- name;
- course;
- shift;
- averageCut;
- matters: a list of matters, where each matter is represented by an object,containing:
  - name;
  - assessments: a list of the grades obtained by the student in each assessment carried out during the semester.

Your task is to determine how many matters the student passed.
If the student obtained a grade greater than or equal to 6, they are approved.

```js
function howManyMattersPassed(student){
  const { name, course, shift, averageCut, matters } = student
  if (
    !name ||
    !course || 
    !shift || 
    !averageCut || 
    !matters
  ) return 'Invalid Student'

  let matterPassed = 0
  let listMattersPassed = []
  for(let i = 0; i < matters.length; i++){
    for(let j = 0; j < matters[i].assessments.length; j++){
        if (matters[i].assessments[j] < 6){
          break
        }   
    }
    matterPassed++
    listMattersPassed.push(matters[i].name)
  }
  return `Student ${name}, passed on ${matterPassed} matters. Matters passed: ${listMattersPassed}`
}
```

## Task 2
### Checking approvals in the semester

Your task is to check whether the student passed the current semester and can proceed to the next. 
Create a function called calcAverage to find out the student's total average, based on the grades they obtained in the semester's assessments.

```js
function calcAverage(student){
  const { name, course, shift, averageCut, matters } = student
  if (
    !name ||
    !course || 
    !shift || 
    !averageCut || 
    !matters
  ) return 'Invalid Student'

  let average = 0
  for(let i = 0; i < matters.length; i++){
    for(let j = 0; j < matters[i].assessments.length; j++){
        if (matters[i].assessments[j] < 6){
          break
        } 
        average += matters[i].assessments[j]  
    }
    average = average / matters[i].assessments.length
    if (average < averageCut){
      return `Student dont pass on ${matters[i].name}.`
    }
    average = 0
  }
  return `Student passed the current semester!`
}
```

## Task 3
### Checking passenger destination

Given the following bus object:
```js
const bus = {
   capacity: 40,
   origin: 'Curitiba-PR',
   destination: 'Rio de Janeiro-RJ',
   stops: [
     'Sao Paulo-SP',
     'Campinas, sp',
     'São José dos Campos-SP',
     'Volta Redonda-RJ'
   ],
   passengers: [
     {
       name: 'Luis da Silva',
       rg: '1234567890',
       ticket: {
         origin: 'Curitiba-PR',
         destination: 'São José dos Campos-SP',
         armchair: 15,
       }
     },
     {
       name: 'João da Silva',
       rg: '1234567891',
       ticket: {
         origin: 'São Paulo-SP',
         destination: 'Rio de Janeiro-RJ',
         armchair: 16,
       }
     }
   ]
}
```
A bus has the following properties:
- capacity: an integer with the total number of seats on the bus;
- origin;
- destination;
- stops: a list of all the cities the bus passes through, between the origin and the destination;
- passengers: a list of all passengers present on the bus, where each passenger is represented by an object, containing:
   - name;
   - rg;
   - ticket: also represented by an object, containing details about the passenger's trip:
   - origin;
   - destination;
   - armchair.
Your task is to determine which passengers will get off the bus at a given stop.

Develop a method that receives the current stop as a parameter and checks if it is equal to the stop value of the bus object. This method should check for which passengers the destination is the same as the current bus stop.

Then, it must return an array with all passengers that will get off at the current stop.

```js
function willGetOff(currentStop){
  for(let i = 0; i < bus.stops.length; i++){
    if(bus.stops[i] === currentStop){
      for(let j = 0; j < bus.passengers.length; j++){
        if(bus.passengers[j].ticket.destination === currentStop){
          return `Passenger ${bus.passengers[j].name} get off here in ${currentStop}`
        }
      }
      return 'No passengers get off at this stop' + `Stop: ${currentStop}`
    }
  }
  return `Stop - ${currentStop} - not part of the bus stops`
}
```