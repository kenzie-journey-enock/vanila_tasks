/**
Task: Items for camping.
 */
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