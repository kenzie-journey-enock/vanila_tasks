# S6 JS Manipulating Objects and Arrays

Manipulating Objects and Arrays

## Intro

The following exercises are intended to encourage your logical and technical reasoning. Here you will further develop your skills in functions, arrays, conditionals, loops and objects.

Before we begin activities, we will declare a list of departments. These departments are part of a company and their objective is to create a system that can facilitate the manipulation of departmental data.

```js
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
```

## Task 1

Develop a function called howManyDepartments that returns the number of departments in the list.

```js
function howManyDepartments() {
  return departmentList.length
}
```

## Task 2

Develop a function called changeDepartmentName that must receive two parameters: 
  - the current name of the department and a new name to be assigned to it. 
  - This function must return the object corresponding to the department with the name already updated. 
    - If the department name is not found, the function should return: "Department not found."

```js
function changeDepartmentName(department, new_department) {
  for (let i = 0; i < departmentList.length; i++) {
    if (department === departmentList[i].departmentName) {
      departmentList[i].departmentName = new_department
      return departmentList[i]
    }
  }
  return 'Department not found.'
}
```

## Task 3

Develop a function called giveTheDepartmentABreak that changes the value of the working variable whenever called. 
In short, if working is true, it should change to false, and vice versa. 
The function must return the already updated property.

```js
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
```

## Task 4

Develop a function called howManyEmployeesInDepartment that takes the department name as a parameter and checks how many employees are in that department. 
If the department is not found, return: "Department not found".

```js
function howManyEmployeesInDepartment(department){
  for (let i = 0; i < departmentList.length; i++) {
    if (department === departmentList[i].departmentName) {
      return departmentList[i].employees.length
    }
  }
  return 'Department not found.'
}
```

## Task 5

Develop a function called insertNewEmployeeInDepartment that can add a new employee to the department.
The function must receive the name of the department as a parameter and a person object with:
- name, a variable of type string
- age, a variable of type number
- responsibility, a string type variable
- salary, a variable of type number

```js
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
```