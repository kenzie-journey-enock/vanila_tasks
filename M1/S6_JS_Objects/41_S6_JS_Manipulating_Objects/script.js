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
        assessments: [6, 8, 9, 10]
      },
      {
        name: 'Computer Organization Architecture',
        assessments: [6, 8, 7, 8]
      }
    ]
  }
]

// Task 1

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

console.log('Task 1: |', howManyMattersPassed(listStudents[0]))

// Task 2

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
  let listRecovery = []
  for(let i = 0; i < matters.length; i++){
    for(let j = 0; j < matters[i].assessments.length; j++){
        if (matters[i].assessments[j] < 6){
          break
        } 
        average += matters[i].assessments[j]  
    }
    average = average / matters[i].assessments.length
    if (average < averageCut){
      listRecovery.push(matters[i].name)
    }
    average = 0
  }
  if (listRecovery.length > 0){
    return `Student dont pass on ${listRecovery}.`
  }
  return `Student passed the current semester!`
}

console.log('Task 2: |', calcAverage(listStudents[0]))

// Task 3
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
        destination: 'Volta Redonda-RJ',
        armchair: 16,
      }
    }
  ]
}

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

console.log('Task 3: |', willGetOff('São José dos Campos-SP'))