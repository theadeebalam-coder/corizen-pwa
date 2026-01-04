/* =====================================================
   Corizen PWA - Main JavaScript
   Author: Corizen
   Purpose: UI interactions & cart logic (frontend only)
===================================================== */

/* --------------------
   GLOBAL STATE
-------------------- */
let cart = {
  items: [],
  total: 0
};

/* --------------------
   UTIL FUNCTIONS
-------------------- */
function updateCartCount() {
  const cartIcon = document.querySelector(".bottom-nav a:last-child span");
  if (!cartIcon) return;

  const count = cart.items.length;
  cartIcon.textContent = count > 0 ? `Cart (${count})` : "Cart";
}

/* --------------------
   ADD TO CART
-------------------- */
function addToCart(name, price) {
  cart.items.push({ name, price });
  calculateTotal();
  updateCartCount();

  console.log("Added to cart:", name);
}

/* --------------------
   REMOVE FROM CART
-------------------- */
function removeFromCart(index) {
  cart.items.splice(index, 1);
  calculateTotal();
  updateCartCount();
}

/* --------------------
   TOTAL CALCULATION
-------------------- */
function calculateTotal() {
  let sum = 0;
  cart.items.forEach(item => {
    sum += item.price;
  });
  cart.total = sum;
}

/* --------------------
   DUMMY PRODUCTS
-------------------- */
const products = [
  {
    id: 1,
    name: "Notebook",
    price: 99
  },
  {
    id: 2,
    name: "Blue Gel Pens",
    price: 149
  }
];

/* --------------------
   INIT
-------------------- */
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  console.log("Corizen app initialized");
});

/* --------------------
   FUTURE READY NOTES
-------------------- */
/*
  - Backend API integration
  - Auth system
  - Persistent cart (localStorage)
  - Payment gateway
  - Admin dashboard sync
*/
