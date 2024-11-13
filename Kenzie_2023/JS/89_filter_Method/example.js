// Filtering Products in Stock Under $20
const products = [
  { name: 'Notebook', price: 15, inStock: true },
  { name: 'Pen', price: 5, inStock: true },
  { name: 'Bag', price: 45, inStock: false },
  { name: 'Marker', price: 8, inStock: true },
  { name: 'Backpack', price: 50, inStock: true },
  { name: 'Stapler', price: 12, inStock: true }
];

// Using filter() to create a new array of affordable, in-stock products
const affordableInStock = products.filter(product => product.inStock && product.price < 20);

console.log(affordableInStock);
