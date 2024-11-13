// Importing products data
import { data } from "./data.js";

const root = document.querySelector('.root');
root.classList.add('container');
root.classList.add('main');

// Render all products (as in the original setup)
const renderAllProducts = (products) => {
  root.innerHTML = ''; // Clear previous content
  products.map((elem) => {
    root.insertAdjacentHTML(
      `beforeend`,
      `
      <div data-product="${elem.id}" class="product">
        <img src=${elem.image} alt=${elem.name}>
        <h2>${elem.name}</h2>
        <p>R$ ${elem.price}</p>
      </div>
      `,
    );
  });
};

// Render single product view
const renderProduct = (product) => {
  root.innerHTML = ''; // Clear previous content
  root.insertAdjacentHTML(
    'beforeend',
    `
    <div class="currentProduct">
      <div>
        <img src="${product.image}">
      </div>
      <div class="currentProduct__info">
        <h2>${product.name}</h2>
        <p>R$ ${product.price}</p>
        <p class='text_prod'>${product.description}</p>
        <button class="btn" type="button">Comprar</button>
      </div>
    </div>
    `,
  );
};

// Event handler for menu clicks
const handleMenuClick = (productName) => {
  const product = data.find((item) => item.name.includes(productName));
  if (product) renderProduct(product);
};

// Set up event listeners for menu items
const setupMenuListeners = () => {
  const menuItems = document.querySelectorAll("header ul li");
  menuItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      handleMenuClick(e.target.textContent);
    })
  );
};

// Go back to all products when clicking the logo
const goToHomePage = () => {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    renderAllProducts(data);
    setupMenuListeners();
  });
};

// Initial setup
renderAllProducts(data);
setupMenuListeners();
goToHomePage();
