# S8 JS List Debug 01

## Introduction

This is a debugging activity, the codes are partially created, or completely created, but working incorrectly.

Investigate the code, test and fix what you think is necessary.

A market asked you for a system to help organize sections and their respective items, as well as some administrative features, such as login and point services.

The previous IT team started developing, but it wasn't working very well. Your job is to make the system work.
```js
let sectionsMarket = {}
let hortifruti = []
let butcher = []
let bakery = []
let wineryDrinks = []
let dairyAndColdCuts = []
```

## Functions.

According to the previous team, the functions below have already been developed, however, none of them work the way they should.

### addSectionToMarket()

- This function receives a section (list of items) as a parameter.
- This function must have the functionality to insert a new section of items into the market.
- Errors: There is an error in the construction of the structure.
```js
function addSectionToMarket(section){
    sectionsMarket.push(section)
    return sectionsMarket
}
```

### addItemToSection()

- This function receives an item (string) as a parameter and the section (list) for insertion.
- This function must have the functionality to insert new items into the items section.
- Errors: There is an error in the way the element is inserted.
```js
function addItemToSection(newItem, section){
    section[0] = newItem

    return section;
}
```

### returnSectionItem()

- This function takes one parameter, the name of a list item.
- This function must have the functionality to search for an item by name in the list.
- Errors: There is a syntax error, check the method function.
```js
function returnSectionItem(section){
    ultimoItem = section[section.length]

    return ultimoItem
}
```

### returnsLastItemOfSection()

- This function takes one parameter, the section (list)
- This function must have the functionality to return the last item in the list, regardless of the size of the list.
- Errors: There is a logic error in capturing the last element.
- **⁠Use case:**
  - Entry: section
  - Output: undefined
  - Expected output: the last item in the list
```js
function returnsLastItemOfSection(nameItem, section){
     position = section.splice(nameItem)
  
     itemSearch = section[position]
  
     return itemSearch;
}
```

### queryMarketSections()

- This function receives the list of market sections as a parameter.
- This function must have the functionality to print all sections in the console.
- Errors: There are logic errors in the comparison and return.
- **⁠Use case:**
  - Entry: sectionsMarket
  - Output: only the element at index 0
  - Expected output: All elements in the list.
```js
function queryMarketSections(sectionsMarket){
    for(let i = 0; i <= sectionsMarket.length; i+1){
        return sectionsMarket[i]
    }
}
```

### sumItems()

- This function takes two values as parameters.
- This function must have the functionality to return the sum of the two values.
- Errors: There is a logic error.
- **⁠Use case:**
  - Input: "1", "1"
  - Departure: 11
  - Expected output: 2
```js
function sumItems(totalA, totalB){
    if(totalB != 0 && totalB != 0){

        return totalA + totalB
    }
}
```

### hitPoint()

- This function takes the name of an employee as a parameter.
- This function must have the functionality to record the point, if the employee is registered.
- Errors: There is a logic error.
- **⁠Use case:**
  - Entry: "sonia", 0
  - Output: Employee not registered
  - Expected output: Shift processed.
```js
function hitPoint(name, token){
    const employees = ["Sonia", "Cage", "Alex", "Liu Ken"]
    if(name == employees[token]){
        return "Shift processed"
    }else{
        return "Unregistered employee"
    }
}
```

### loginSystem()

- This function receives a username and password as parameters.
- This function has the functionality to log in to an employee.
- Errors: There are syntax and logic errors, correct the syntax errors first
- **Use case:**
  - Entry: "luffy123", 326541
  - Output: Access released.
  - Expected output: Access denied.
```js
function loginSystem(nameUser, passwordUser){
    
    const listUsers = ["luffy123", "acer321", "nami"]

    
        if(nameUser == luffy123){
            if(passwordUser == "326541"){
                return "Access released"
            }
        }if(nameUser == "acer321"){
            if(passwordUser == "741258"){
                return "Access released"
            }
        }if(nameUser == nami){
            if(passwordUser == "963258"){
                return "Access released"
            }
        }

     return listUsers
}
```

## So far they have debugged solution:

```js
function addSectionToMarket(section, sections){
	sections[section] = []
	return sections
}

function addItemToSection(newItem, section){
	section.push(newItem) 
	return section
}

function returnSectionItem(section){
  ultimoItem = section[section.length - 1]
  return ultimoItem
}

function returnsLastItemOfSection(nameItem, section){
	position = section.splice(nameItem)
	itemSearch = section[position]
	return itemSearch;
}

function queryMarketSections(sectionsMarket){
	let output = {}
	for(let i = 0; i < Object.keys(sectionsMarket).length; i++){
			output[Object.keys(sectionsMarket)[i]] = sectionsMarket[Object.keys(sectionsMarket)[i]]
	}
	return output
}

function sumItems(totalA, totalB){
	let a = parseFloat(totalA)
	let b = parseFloat(totalB)
	if (a%2 >= 0 && b%2 >= 0 || a%2 <= 0 && b%2 <= 0){ 
		return a + b
	}
	return 'Invalid Enter'
}

function hitPoint(name, token){
	const employees = ["Sonia", "Cage", "Alex", "Liu Ken"]
	if(name.toUpperCase() == employees[token].toUpperCase()){
			return "Shift processed"
	}
	return "Unregistered employee"
}

function loginSystem(nameUser, passwordUser){
	const listUsers = [
		{
			username: "luffy123",
			password: "326541"
		}, 
		{
			username: "acer321",
			password: "741258"
		},
		{
			username: "nami",
			password: "963258"
		}
	]
	for (user of listUsers){
		if (nameUser === user.username && passwordUser === user.password){
			return "Access released"
		}
	}
	return 'Access denied'
}
```