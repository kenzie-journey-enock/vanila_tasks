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

function testAddSectionToMarket(){
	let sectionsMarket = {}
  sectionsMarket = addSectionToMarket('hortifruti', sectionsMarket)
  sectionsMarket = addSectionToMarket('butcher', sectionsMarket)
  sectionsMarket = addSectionToMarket('bakery', sectionsMarket)
  sectionsMarket = addSectionToMarket('wineryDrinks', sectionsMarket)
  sectionsMarket = addSectionToMarket('dairyAndColdCuts', sectionsMarket)
  return sectionsMarket
}

function testAddItemToSection(){
	sectionsMarket = testAddSectionToMarket()
	sectionsMarket.hortifruti = addItemToSection('apple', sectionsMarket.hortifruti)
	sectionsMarket.butcher = addItemToSection('meat', sectionsMarket.butcher)
	sectionsMarket.bakery = addItemToSection('bread', sectionsMarket.bakery)
	sectionsMarket.wineryDrinks = addItemToSection('caipirinha', sectionsMarket.wineryDrinks)
	sectionsMarket.dairyAndColdCuts = addItemToSection('apple', sectionsMarket.dairyAndColdCuts)
	return sectionsMarket
}

function testReturnSectionItem(){
	sectionsMarket = testAddItemToSection()
	let item_hortifruti = returnSectionItem(sectionsMarket.hortifruti)
	let item_butcher = returnSectionItem(sectionsMarket.butcher)
	let item_bakery = returnSectionItem(sectionsMarket.bakery)
	let item_wineryDrinks = returnSectionItem(sectionsMarket.wineryDrinks)
	let item_dairyAndColdCuts = returnSectionItem(sectionsMarket.dairyAndColdCuts)
	return [
		item_hortifruti,
		item_butcher,
		item_bakery,
		item_wineryDrinks,
		item_dairyAndColdCuts
	]
}

function testQueryMarketSections(){
	sectionsMarket = testAddItemToSection()
	return queryMarketSections(sectionsMarket)
}

function testSumItems(){
	let cases = []
	cases.push(sumItems('1', '1'))
	cases.push(sumItems(1,1))
	cases.push(sumItems(-1,-1))
	cases.push(sumItems(1,'ops'))
	cases.push(sumItems('OPS','ops'))
	return cases
}

function testHitPoint(){
	let cases = []
	cases.push(hitPoint('sonia', 0))
	cases.push(hitPoint('cage', 1))
	cases.push(hitPoint('aLex', 2))
	cases.push(hitPoint('liu ken', 3))
	cases.push(hitPoint('42', 3))
	return cases
}

function testLoginSystem(){
	let cases = []
	cases.push(loginSystem("luffy123", 326541))
	cases.push(loginSystem("luffy123", '326541'))
	return cases
}

// console.log('testAddSectionToMarket =>', testAddSectionToMarket())
// console.log('testAddItemToSection =>', testAddItemToSection())
// console.log('testReturnSectionItem =>', testReturnSectionItem())
// console.log('testQueryMarketSections =>', testQueryMarketSections())
// console.log('testSumItems =>', testSumItems())
// console.log('testHitPoint =>', testHitPoint())
// console.log('testLoginSystem =>', testLoginSystem())