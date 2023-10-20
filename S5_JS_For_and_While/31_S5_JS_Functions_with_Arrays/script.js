// All of the following exercises are based on the following list:
const listOfElements = [1,5,7,9,3, "10", "11", "15"]
/**
Task 1

Write a function called returnAllElements that takes no parameters. 
Whenever called, the function should alert the listOfElements list on screen.
 */
function returnAllElements() {
  alert(listOfElements)
}
/**
Task 2

Write a function called returnSpecificValue. The function must receive an integer value as a parameter. 
Use the received value to access the position in the list and return the value contained in the position.

This way:
⁠"The value contained in this position is: x".
 */
function returnSpecificValue(position) {
  return `The value contained in this position (${position}) is: ${listOfElements[position]}`
}
/**
Task 3

Write a function called returnElementType. The function must receive an integer value as a parameter.

Use the received value to access the position in the list. Alert the type of the element contained in the position (use typeof for this).

If it is text type, alert: "Element x is a text type element",
If it is a number, alert: "The element x is an element of type number"
*/
function returnElementType(position) {
  if (typeof position != 'number') {
    alert('The position must be integer.')
  }
  if (typeof listOfElements[position] == 'string') {
    alert('Element x is a text type element')
  }
  if (typeof listOfElements[position] == 'number') {
    alert('The element x is an element of type number')
  }
}
/**
Task 4

Write a function removeLastElementString. The function takes no parameters.
When called, the function should remove the last element from the list, but only if it is a string.

If the removal is carried out, return: "Element deleted successfully".
Otherwise: "Failed to remove element from list."
 */
function removeLastElementString() {
  let last = listOfElements.length - 1
  if (typeof listOfElements[last] == 'string') {
    listOfElements.pop()
    alert('Element deleted successfully.')
  }
  alert('Failed to remove element from list.')
}
/**
Task 5

Write a function called queryPosition. 
The function must receive a value as a parameter. 
Identify the position of the element in the list.

If you can identify the element in the list: "The value sought is in position: x ".
⁠If not: "Value not found".
 */
function queryPosition(value) {
  for (let position = 0; position < listOfElements.length; position++){
    if (value === listOfElements[position]){
      alert(`The value (${value}) sought is in position: x ${position}`)
    }
  }
  alert('Value not found')
}
/**
Task 6

Write a function called removeSpecificElement. 
The function must receive a value as a parameter.

The value received represents the element to be deleted. 
⁠Find the position of the element in the list.
(use indexOf()). 
Use the position found to perform the removal.

If the removal is carried out, return: "Element x deleted successfully".
Otherwise, return: "Element not found".
 */
function removeSpecificElement(value) {
  let position = listOfElements.indexOf(value)
  if (listOfElements[position]) {
    delete listOfElements[position]
    alert(`Element ${value} deleted successfully`)
  }
  alert(`Element ${value} not found`)
}
/**
Task 7

Write a function called insertInCorrectPosition. 
The function can receive a value from 0 to 10 or a string.

If the value received is of type number, the function must be able to insert the element in the first position of the list, if it is text, the insertion must be done in the last position.

Return: "List updated successfully".
 */
function insertInCorrectPosition(value) {
  let oldList = new Array(listOfElements)
  if (typeof value == 'number' && value >= 0 && value <= 10) {
    listOfElements.unshift(value)
  }
  if (typeof value == 'string') {
    listOfElements.push(value)
  }
  if (oldList.length < listOfElements.length) {
    alert(`List updated successfully! Add ${value} to list.`)
  }
  alert(`Value invalid.`)
}
