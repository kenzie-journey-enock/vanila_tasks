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