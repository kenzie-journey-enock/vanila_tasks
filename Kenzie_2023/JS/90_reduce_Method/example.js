// Array of items in the shopping cart
const cart = [
  { name: 'Apple', quantity: 2, price: 1.5 }, // Total: 3.0
  { name: 'Banana', quantity: 3, price: 1.0 }, // Total: 3.0
  { name: 'Orange', quantity: 1, price: 2.0 }, // Total: 2.0
  { name: 'Milk', quantity: 1, price: 3.5 }    // Total: 3.5
];

// Using reduce() to calculate the total price
const totalPrice = cart.reduce((accumulator, item) => {
  return accumulator + (item.quantity * item.price);
}, 0);

// Outputting the total price
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
