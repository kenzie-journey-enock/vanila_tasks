const barbershop = {
  cuts: [
    { id: 1, type: "Military", value: 20.0 },
    { id: 2, type: "Samurai", value: 35.0 },
    { id: 3, type: "Pompadour", value: 20 },
    { id: 4, type: "Mohawk", value: 0 },
    { id: 5, type: "Razor part", value: 0 },
  ],

  beards: [
    { id: 1, type: "Captain Jack", value: 20.0 },
    { id: 2, type: "Van Dyke", value: 20.0 },
    { id: 3, type: "Medium Beard", value: 20.0 },
    { id: 4, type: "Low Beard", value: 20.0 },
    { id: 5, type: "Beard Zero", value: 15.0 },
  ],
  isOpen: true,
};

console.log('barbershop before => ', barbershop)

function searchCutById(id) {
  for (i in barbershop.cuts){
    if (id === barbershop.cuts[i].id){
      return barbershop.cuts[i]
    }
  }
}

console.log('searchCutById(id) =>', searchCutById(1))

function searchBeardById(id) {
  for (i in barbershop.beards){
    if (id === barbershop.beards[i].id){
      return barbershop.beards[i]
    }
  }
}

console.log('searchBeardById(id) =>', searchBeardById(1))

function verifiesStatusBarbearia() {
  return barbershop.isOpen ? 'We are open.' : 'We are closed.'
}

console.log('verifiesStatusBarbearia() =>', verifiesStatusBarbearia())

function returnsAllCuts() {
  return barbershop.cuts
}

console.log('returnsAllCuts() =>', returnsAllCuts())

function returnsAllBeards() {
  return barbershop.beards
}

console.log('returnsAllBeards() =>', returnsAllBeards())

function createOrder(nameCustomer, cutId, beardId) {
  const cut = searchCutById(cutId)
  const beard = searchBeardById(beardId)
  return {
    name: nameCustomer,
    requestCut: cut.type,
    requestedCutPrice: cut.value,
    requestBeard: beard.type,
    requestBeardPrice: beard.value
  }
}

const newOrder = createOrder('Joe', 1, 1)

console.log('createOrder =>', newOrder)

function calculateTotal(order) {
  const { 
    name, 
    requestCut, 
    requestedCutPrice, 
    requestBeard, 
    requestBeardPrice
  } = order
  if (
    !name || 
    !requestCut || 
    !requestedCutPrice || 
    !requestBeard || 
    !requestBeardPrice
  ) return 'Invalid order.'
  return requestedCutPrice + requestBeardPrice
}

console.log('calculateTotal(order) =>', calculateTotal(newOrder))

function updateOrder(list, id, value, type) {
  if (!value || !type || value < 1) return 'Invalid value entry'
  for (i in list){
    if (list[i].id === id){
      list[i].value = value
      list[i].type = type
      return 'Item updated successfully.'
    }
  }
  return 'Invalid value entry'
}

console.log('updateOrder => ', updateOrder(barbershop.cuts, 1, 15.0, 'Alternative'))

console.log('barbershop after => ', barbershop)