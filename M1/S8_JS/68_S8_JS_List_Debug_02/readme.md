# S8 JS List Debug 02

## Introduction
This is a debugging activity, the codes are partially created, or completely created, but working incorrectly.

Investigate the code, test and fix what you think is necessary.

You are a developer at a company.

A team of developers began developing a solution for calculating budgets for a client in the agricultural and agricultural services area.

The problem is that most of the features developed do not do exactly what is being proposed, if not at all.

## insertProduct()
The insertProduct() function does not perform the insertion as it should be done.
In addition to always changing the product it was in before, the list always has an empty item.
```js
//Function⁠
function insertProduct(product){
     const productQuote = []
     productQuote[1] = product

     return productsQuote
}
⁠
//Function call
insertProduct({
     price: 100,
     quantity: 10,
     name: "Soya 25kg"
})
```

It was expected that the product would be inserted in the last position of the list, but at the moment it is returned like this: [empty, {…}]

## createProduct()
The function to createProduct() is not working, the created product does not return and gives an error.

```js
//Function⁠
function createProduct(price, quantity, name){
     let product = {
         price = price,
         quantity = quantity,
         name = name
     }

     return product
}

// function call
createProduct(200, 150, "Beans 25kg")
```

It was expected that the product would be returned, but at the moment an error occurs.

## renderProducts()
The function renderProducts() which is to display prices in the console for testing, is not working as it should.

The product is printed in the console, but with the name object.

You should print the price.

```js
//function⁠
function renderProducts(allProducts){
     for (let i = 0; i <= allProducts.length; i++){
         console.log(allProducts[i])
     }
}
// function call
let allProducts = insertProduct(product)

renderProducts(allProducts)
```

The expectation is that the price of each of the products on the list would be printed on the console.

## registerServices()
The registerServices() function does not update the list correctly, with the new registered element. Whenever a developer tries to store the updated list after an insertion, the variable ends up with the value undefined, not the updated value of the list.

```js
//function⁠
function registerServices(service){
      console.log(listService.push(service))
}
// function call
registerServices({service: "Pulverization", type: "Locusts", value: 50})
```

The expectation is that with each insertion of a service object, the list of services would be returned in an updated form.

## calculateServiceValue()
The function calculateServiceValue() does not work, it receives a list of services, but the amount to be charged is never exactly the amount to be charged, it is almost always lower, except if the customer has only performed one service.

```js
//function⁠
function calculateServiceValue(clienteServices){
    let serviceValue = clienteServices.services[0].price * clienteServices.services[0].qty

     return ServiceValue
}

//Function call
calculateServiceValue({client: "Rafael", service:[
     spray = {
        price: 50,
        quantity: 10
     },
     weeding = {
         price: 5,
         quantity: 10
     },
     plowing = {
         price: 200,
         quantity: 10
     }

]})
```

What is expected here is that the value returned would be: $2550.00. 
At the time of the error and when it was working, it only returned $500.00, in this case.

## Solution:
```js
let listProducts = []
let newProduct = {}
let listServices = []

function insertProduct(product){
	listProducts.push(product)
	return listProducts
}

insertProduct({
	price: 100,
	quantity: 10,
	name: "Soya 25kg"
})

console.log('insertProduct =>', listProducts) // [{	price: 100,	quantity: 10,	name: "Soya 25kg" }]

function createProduct(price, quantity, name){
	let product = {
			price,
			quantity,
			name
	}
	return product
}

newProduct = createProduct(200, 150, "Beans 25kg")

console.log('createProduct =>', newProduct) // {	price: 200,	quantity: 150,	name: "Beans 25kg" }

function renderProducts(allProducts){
	for (let i = 0; i < allProducts.length; i++){
			console.log(allProducts[i].price)
	}
}

let allProducts = insertProduct(newProduct)

console.log('renderProducts =>') 
renderProducts(allProducts) // 100 | 200

function registerServices(service){
	listServices.push(service)
	console.log(listServices[listServices.length - 1])
}

registerServices({service: "Pulverization", type: "Locusts", value: 50}) // {service: "Pulverization", type: "Locusts", value: 50}

function calculateServiceValue(clienteServices){
	let serviceValue = 0
	for (service of clienteServices.services){
		serviceValue += service.price * service.quantity
	}
	return serviceValue
}

let totalServicePrice = calculateServiceValue({client: "Rafael", services:[
	 spray = {
			price: 50,
			quantity: 10
	 },
	 weeding = {
			 price: 5,
			 quantity: 10
	 },
	 plowing = {
			 price: 200,
			 quantity: 10
	 }
]})

console.log(totalServicePrice) // 2550
```