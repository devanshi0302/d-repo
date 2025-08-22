// Sample Products
const products = [
  { id: 1, name: "iPhone 15", price: 1200, img: "images/iphone15.jpg" },
  { id: 2, name: "Samsung Galaxy S24", price: 1100, img: "images/s24.jpg" },
  { id: 3, name: "OnePlus 12", price: 900, img: "images/oneplus12.jpg" },
  { id: 4, name: "Google Pixel 9", price: 950, img: "images/pixel9.jpg" }
];

const productList = document.getElementById("product-list");
const cartModal = document.getElementById("cart-modal");
const cartBtn = document.getElementById("cart-btn");
const closeBtn = document.querySelector(".close");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

let cart = [];

// Display products
products.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update cart
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

// Show cart
cartBtn.onclick = () => {
  cartModal.style.display = "block";
};

// Close cart
closeBtn.onclick = () => {
  cartModal.style.display = "none";
};

// Close when clicking outside
window.onclick = (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
};
