# S5 JS Supply Box

Train my knowledge in nested Arrays.

## Task: Items for camping.

You and your friends decided to go camping. 
First of all, they made a list, where each friend must buy 5 items to take with them on the trip.

Each friend was responsible for a section of items. 
The sections are: Hygiene, Food, Pharmacy and Leisure. 
Your friends must bring exactly five items from each section. 
All items will be placed together in the supply box.

Each friend represents an array and the supply box is the composition of these arrays. 
You must place the items inside the box in an organized way, separating the sections, after all, we don't want our marshmallows to taste like disinfectant.

### Conditions

- Friends cannot buy more or less than five items, that is, it has to be exactly five items.

- If someone buys more items or fewer items, you must return a message.

### Thinking about the solution:

- 1. Create a list-type variable called suppliesBox.
- 2. Create a variable for each section: hygiene, food, pharmacy, leisure. They must all be of the list type.
- 3. Within each of these variables, insert items relevant to the section. Example:
```js
food = ['Bread', 'Salt Bread', 'Sausage', 'Water', 'Tomato Sauce']
```
- 4. Insert all sections into the Suppliesbox variable.
- 5. Make sure the supply box is size 4 (4 sections).
   - If yes, access the sections and check that each one has size 5 (5 items each).
     - If yes, return: "We can go camping."
     - If the size is greater than 5, return: "There are too many items, we don't need that many."
     - If the size is less than 5, return: "We need more items from this section."
   - If the Supplybox size is less than 4, return: "Some friend hasn't returned with the items yet."
   - If the Supplybox size is greater than 4, return: "I think we have an intruder."

```js
  let suppliesBox = []

  let hygiene = ['Toothpaste', 'Soap', 'Shampoo', 'Toothbrush', 'Dental Floss']
  let food = ['Bread', 'Salt Bread', 'Sausage', 'Water', 'Tomato Sauce']
  let pharmacy = ['Dorflex', 'Xarelto', 'Selozok', 'Canabis', 'Buscopan']
  let leisure = ['Dishes', 'Ball', 'Slackline', 'Cloth', 'Cups']

  let intruder = ['item1', 'item2', 'item3', 'item4', 'item5']
  let lowItens = ['Just', 'it']
  let manyItens = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']

function addSectionInSuppliesBox(suppliesBox, section) {
  suppliesBox.push(section)
}

function itemsCamping(suppliesBox){
  if (suppliesBox.length == 4){
    for (i in suppliesBox) {
      if (suppliesBox[i].length > 5){
        return "There are too many items, we don't need that many."
      }
      if (suppliesBox[i].length < 5){
        return "We need more items from this section."
      }
    }
    return 'We can go camping.'
  }
  if (suppliesBox.length > 4) {
    return "I think we have an intruder."
  }
  return "Some friend hasn't returned with the items yet."
}

function testSuccess() {
  addSectionInSuppliesBox(suppliesBox, hygiene)
  addSectionInSuppliesBox(suppliesBox, food)
  addSectionInSuppliesBox(suppliesBox, pharmacy)
  addSectionInSuppliesBox(suppliesBox, leisure)

  console.log(itemsCamping(suppliesBox))
}
testSuccess() // We can go camping.

suppliesBox = []
function testIntruder() {
  addSectionInSuppliesBox(suppliesBox, hygiene)
  addSectionInSuppliesBox(suppliesBox, food)
  addSectionInSuppliesBox(suppliesBox, pharmacy)
  addSectionInSuppliesBox(suppliesBox, leisure)
  addSectionInSuppliesBox(suppliesBox, intruder)

  console.log(itemsCamping(suppliesBox))
}
testIntruder() // I think we have an intruder.

suppliesBox = []
function testManyItems() {
  addSectionInSuppliesBox(suppliesBox, hygiene)
  addSectionInSuppliesBox(suppliesBox, food)
  addSectionInSuppliesBox(suppliesBox, pharmacy)
  addSectionInSuppliesBox(suppliesBox, manyItens)

  console.log(itemsCamping(suppliesBox))
}
testManyItems() // There are too many items, we don't need that many.

suppliesBox = []
function testLowItems() {
  addSectionInSuppliesBox(suppliesBox, hygiene)
  addSectionInSuppliesBox(suppliesBox, food)
  addSectionInSuppliesBox(suppliesBox, pharmacy)
  addSectionInSuppliesBox(suppliesBox, lowItens)

  console.log(itemsCamping(suppliesBox))
}
testLowItems() // We need more items from this section.

suppliesBox = []
function testMissFriend() {
  addSectionInSuppliesBox(suppliesBox, hygiene)
  addSectionInSuppliesBox(suppliesBox, food)
  addSectionInSuppliesBox(suppliesBox, pharmacy)

  console.log(itemsCamping(suppliesBox))
}
testMissFriend() // Some friend hasn't returned with the items yet.
```
