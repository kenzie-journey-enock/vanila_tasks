// Original array of product prices in dollars
const prices = [100, 200, 300, 400, 500];

// Applying a 20% discount to each price
const discountedPrices = prices.map(price => price * 0.8);

console.log(discountedPrices); // [80, 160, 240, 320, 400]
