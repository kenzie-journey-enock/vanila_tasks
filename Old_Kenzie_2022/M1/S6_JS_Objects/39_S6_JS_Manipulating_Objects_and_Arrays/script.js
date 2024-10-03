const departmentList = [
  {
    departmentName: 'Financial',
    employees:
    [
      {
        name: 'Rose',
        age: 26,
        responsibility: 'Financial director',
        salary: 5600
      },
      {
        name: 'Stevem',
        age: 32,
        responsibility: 'Financial manager',
        salary: 4200
      },
      {
        name: 'Beca',
        age: 26,
        responsibility: 'Financial analyst',
        salary: 2800
      }
    ],
    working: true
  },
  {
    departmentName: 'Expedition',
    employees:
    [
      {
        name: 'Rooper',
        age: 35,
        responsibility: 'Expedition director',
        salary: 5600
      },
      {
        name: 'Maggie',
        age: 22,
        responsibility: 'Expedition manager',
        salary: 4200
      },
      {
        name: 'Thompson',
        age: 41,
        responsibility: 'Expedition analyst',
        salary: 2800
      }
    ],
    working: true
  },
  {
    departmentName: 'Capitation',
    employees:
    [
      {
        name: 'Saory',
        age: 35,
        responsibility: 'Capitation director',
        salary: 5600
      },
      {
        name: 'Silvia',
        age: 22,
        responsibility: 'Capitation manager',
        salary: 4200
      },
      {
        name: 'Sonem',
        age: 41,
        responsibility: 'Capitation analyst',
        salary: 2800
      },
      {
        name: 'Havi',
        age: 41,
        responsibility: 'Trainee Capitation manager',
        salary: 1500
      },
      {
        name: 'Margie',
        age: 25,
        responsibility: 'Capitation analyst',
        salary: 2800
      },
      {
        name: 'Victoria',
        age: 18,
        responsibility: 'Trainee Capitation analyst',
        salary: 1500
      }
    ],
    working: true
  },
]

// Task 1

function howManyDepartments() {
  return departmentList.length
}

console.log('Task 1: |', howManyDepartments(), '| Ex: 3')

// Task 2

function changeDepartmentName(department, new_department) {
  for (let i = 0; i < departmentList.length; i++) {
    if (department === departmentList[i].departmentName) {
      departmentList[i].departmentName = new_department
      return departmentList[i]
    }
  }
  return 'Department not found.'
}

changeDepartmentName('Capitation', 'Capitations')

console.log('Task 2: |', departmentList[2].departmentName, '| Ex: "Capitations"')

// Task 3

function giveTheDepartmentABreak(department) {
  for (let i = 0; i < departmentList.length; i++) {
    if (department === departmentList[i].departmentName) {
      if (departmentList[i].working) {
        departmentList[i].working = false
        return departmentList[i]
      } 
      departmentList[i].working = true
      return departmentList[i]
    }
  }
  return 'Department not found.'
}

giveTheDepartmentABreak('Capitations')

console.log('Task 3: |', departmentList[2].working, '| Ex: false')

// Task 4

function howManyEmployeesInDepartment(department){
  for (let i = 0; i < departmentList.length; i++) {
    if (department === departmentList[i].departmentName) {
      return departmentList[i].employees.length
    }
  }
  return 'Department not found.'
}

console.log('Task 4: |', howManyEmployeesInDepartment('Capitations'), `| Ex: ${departmentList[2].employees.length}`)

// Task 5

function insertNewEmployeeInDepartment(department, {name, age, responsibility, salary}){
  if (typeof name != 'string' || typeof age != 'number' || typeof responsibility != 'string' || typeof salary != 'number') return 'Invalid New Employee.'
  const new_employee = {
    name: name, 
    age: age, 
    responsibility: responsibility, 
    salary: salary
  }
  for (let i = 0; i < departmentList.length; i++) {
    if (department === departmentList[i].departmentName) {
      departmentList[i].employees.push(new_employee)
      return departmentList[i].employees[departmentList[i].employees.length - 1]
    }
  }
  return 'Department not found.'
}

const me = insertNewEmployeeInDepartment('Capitations', {
  name: 'Enock', 
  age: 24, 
  responsibility: 'Dev Capitation', 
  salary: 3000
})

console.log('Me: ', me)

console.log('Task 5: |', departmentList[2].employees.length, '| Ex: 7')
