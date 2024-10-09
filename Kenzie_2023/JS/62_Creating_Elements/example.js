const products = [
  {
    name: "T-shirt",
    price: 29.99,
  },
  {
    name: "Jeans",
    price: 59.99,
  },
  {
    name: "Shoes",
    price: 59.99,
  },
  {
    name: "Dress",
    price: 89.99,
  },
  {
    name: "Hat",
    price: 19.99,
  },
];

const productsList = document.querySelector('ul');

for (let i = 0; i < products.length; i++) {
   const listItem = document.createElement('li');

   const productName = document.createElement('h3');
   const productPrice = document.createElement('p');
   const addToCartButton = document.createElement('button');

   productName.innerText = products[i].name;
   productPrice.innerText = products[i].price;
   addToCartButton.innerText = "Add to Cart";

   listItem.appendChild(productName);
   listItem.appendChild(productPrice);
   listItem.appendChild(addToCartButton);

   productsList.appendChild(listItem);
}
