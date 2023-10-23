# S6 JS Web Barbershop

Here we will put into practice all our knowledge of manipulating objects through the use of functions.

## Web Barbershop
One of his clients is a barber, his beauty shop offers haircuts and, of course, beards.

With the high demand, he is unable to serve all customers.

With great difficulty in meeting all customer demands, he hired you to develop a system where the customer can carry out a series of actions, such as:

```js
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
```

### Search Cut.
- searchCutById().
- This function receives an id as a parameter which, when found, returns a cut object.
- If the id does not exist in the list of cuts, return ⁠Cut not found.

Note that to access the list you first need to access the barbershop object and then traverse the list of cuts to look for the id passed as a parameter.
If you find the id, return the object (cut).

```js
function searchCutById(id) {

}
```

### Search Beard.
- searchBeardById().
- This function receives an id as a parameter which, when found, returns a beard object.
- If the id does not exist in the list of cuts, return ⁠Beard not found.

Note that to access the list you first need to access the barbershop object and then traverse the list of beards to look for the id passed as a parameter. If you find the id, return the object (beard).

```js
function searchBeardById(id) {

}
```

### Check whether the barbershop is open or closed.
- verifiesStatusBarbearia().
- This function will not receive parameters, it will check whether the barbershop's estaOpen property is true or false.
- If true, return: ⁠"We are open" and if false, return: "We are closed".

```js
function verifiesStatusBarbearia() {
  return barbershop.isOpen ? 'We are open.' : 'We are closed.'
}
```

### Search for all the cuts that the barbershop offers.
- returnsAllCuts().
- This function will not receive parameters, it will return the list of cuts that the barbershop offers. ⁠- - Access the cuts property of the barbershop object and return it.

```js
function returnsAllCuts() {

}
```

### Search for all the beards that the barbershop offers.
- returnsAllBeards().
- This function will not receive parameters, it will return the list of beards that the barbershop offers.
- ⁠Access the beards property of the barbershop object and return it.

```js
function returnsAllBeards() {

}
```

### Quote an order.
- createOrder().
- This function receives three parameters: the customer's name, the ID of the cut to be performed and the ID of the beard to be made.

Before creating the order, you must check whether the ids received by the function belong to any of the objects in the lists (cuts and beards). To do this, use the already created functions searchCutPorId() and searchBeardPorId() and store the return of each of them in a variable (one for each function).
⁠
Create a request object, which has the following properties:
- name -> Stores the customer name variable received as a parameter.
- requestCut -> Stores the type of cut requested.
- requestedCutPrice -> Stores the value of the cut.
- requestBeard -> Stores the type of beard in the request.
- requestBeardPrice -> Stores the value of the beard.

Return the requested object.

```js
function createOrder(nameCustomer, cutId, beardId) {

return {
  name: '',
  requestCut: '',
  requestedCutPrice: 0,
  requestBeard: '',
  requestBeardPrice: 0
}
}
```

### Calculate the total amount.
- calculateTotal().
- This function takes a request as a parameter.
- Access the requestedCutPrice and requestedBeardPrice properties, add the value of the two and return the sum.

The client also requested a functionality to update prices and types of services offered.

```js
function calculateTotal(order) {
  
}
```

### Update service.
- updateOrder().
- This function receives a list (cuts or beards), the id of the item to be updated, the new type and/or the new value.
If the item is not found or if at least 1 of the new values is null, return: "Invalid value entry". Empty values are not allowed.

Access the list index and update it. Return: "Item updated successfully."

```js
function updateOrder(list, id, value, type) {
  
}
```