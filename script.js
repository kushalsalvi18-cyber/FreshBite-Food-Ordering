// =============================================
// FreshBite - Food Ordering (Simple Vanilla JavaScript)
// Minimal frontend tech: HTML5, CSS3, JavaScript
// No database - all data stored in arrays/objects
// =============================================

// --- Food Data (stored in JavaScript array) ---
const restaurants = [
  {
    id: 1, name: 'Healthy Bites', category: 'Healthy Food', rating: 4.8, delivery: '30 mins',
    description: '.',
    menu: [
      { id: '1-1', name: 'Avocado Salad', price: 259, veg: true, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', details: 'Crisp greens with avocado and nuts.', ingredients: 'Lettuce, Avocado, Tomatoes, Nuts', nutrition: '220 kcal' },
      { id: '1-2', name: 'Grilled Chicken Wrap', price: 189, veg: false, image: 'https://images.unsplash.com/photo-1528736235302-5292df1472db?w=400', details: 'Warm wrap with grilled chicken.', ingredients: 'Chicken, Tortilla, Veggies', nutrition: '380 kcal' },
      { id: '1-3', name: 'Mango Smoothie', price: 129, veg: true, image: 'https://images.unsplash.com/photo-1505252587541-329873f835fc?w=400', details: 'Fresh mango blended with yogurt.', ingredients: 'Mango, Yogurt, Honey', nutrition: '150 kcal' },
    ]
  },
  {
    id: 2, name: 'Italian Pizza House', category: 'Italian', rating: 4.7, delivery: '25 mins',
    description: 'Classic and gourmet pizzas.',
    menu: [
      { id: '2-1', name: 'Margherita Pizza', price: 299, veg: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', details: 'Tomato, mozzarella, and basil.', ingredients: 'Tomato, Mozzarella, Basil', nutrition: '450 kcal' },
      { id: '2-2', name: 'Pepperoni Deluxe', price: 349, veg: false, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400', details: 'Spicy pepperoni with cheese.', ingredients: 'Pepperoni, Cheese, Sauce', nutrition: '520 kcal' },
      { id: '2-3', name: 'Garlic Bread', price: 99, veg: true, image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400', details: 'Crispy bread with garlic butter.', ingredients: 'Bread, Garlic, Butter', nutrition: '180 kcal' },
    ]
  },
  {
    id: 3, name: 'Sushi Station', category: 'Japanese', rating: 4.9, delivery: '35 mins',
    description: 'Fresh sushi rolls and bowls.',
    menu: [
      { id: '3-1', name: 'California Roll', price: 259, veg: false, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400', details: 'Crab, avocado, and cucumber.', ingredients: 'Crab, Avocado, Rice', nutrition: '300 kcal' },
      { id: '3-2', name: 'Dragon Roll', price: 339, veg: false, image: 'https://images.unsplash.com/photo-1617195737492-5c1731a5f89e?w=400', details: 'Eel and avocado roll.', ingredients: 'Eel, Avocado, Rice', nutrition: '350 kcal' },
      { id: '3-3', name: 'Miso Soup', price: 89, veg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea8662f2a51?w=400', details: 'Savory broth with tofu.', ingredients: 'Tofu, Seaweed, Miso', nutrition: '80 kcal' },
    ]
  },
  {
    id: 4, name: 'Spice Route', category: 'Indian', rating: 4.6, delivery: '28 mins',
    description: 'Curries, biryanis, and tandoori.',
    menu: [
      { id: '4-1', name: 'Butter Chicken', price: 329, veg: false, image: 'https://images.unsplash.com/photo-1603894584375-5e8e2fbb9a2f?w=400', details: 'Creamy tomato curry with chicken.', ingredients: 'Chicken, Tomato, Cream', nutrition: '480 kcal' },
      { id: '4-2', name: 'Paneer Tikka', price: 299, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', details: 'Grilled paneer in spiced gravy.', ingredients: 'Paneer, Spices, Tomato', nutrition: '350 kcal' },
      { id: '4-3', name: 'Garlic Naan', price: 59, veg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568fa7098?w=400', details: 'Soft flatbread with garlic.', ingredients: 'Flour, Garlic, Butter', nutrition: '200 kcal' },
    ]
  },
  {
    id: 5, name: 'Dessert Haven', category: 'Desserts', rating: 4.5, delivery: '20 mins',
    description: 'Sweet treats and chilled desserts.',
    menu: [
      { id: '5-1', name: 'Chocolate Brownie', price: 149, veg: true, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476e?w=400', details: 'Rich fudgy chocolate brownie.', ingredients: 'Chocolate, Flour, Butter', nutrition: '320 kcal' },
      { id: '5-2', name: 'Strawberry Cheesecake', price: 199, veg: true, image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400', details: 'Creamy cheesecake with berries.', ingredients: 'Cream Cheese, Strawberries', nutrition: '400 kcal' },
      { id: '5-3', name: 'Cold Coffee', price: 119, veg: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400', details: 'Iced coffee with cream.', ingredients: 'Coffee, Milk, Ice', nutrition: '120 kcal' },
    ]
  }
];

// --- App State ---
let currentRestaurant = restaurants[0];
let cart = [];
let orderHistory = [];
let currentUser = null;
let currentStep = 1;
let dietFilter = 'all';
let categoryFilter = 'All';

// --- Render Restaurants ---
function renderRestaurants() {
  let list = restaurants;
  if (categoryFilter !== 'All') list = list.filter(r => r.category === categoryFilter);
  const minRating = parseFloat(document.getElementById('ratingFilter')?.value || 'all');
  if (minRating !== 'all' && !isNaN(minRating)) list = list.filter(r => r.rating >= minRating);

  document.getElementById('restaurantList').innerHTML = list.map(r => `
    <div class="card">
      <h3>${r.name}</h3>
      <p class="meta">${r.category} · ⭐ ${r.rating} · ${r.delivery}</p>
      <p>${r.description}</p>
      <button class="btn" onclick="selectRestaurant(${r.id})">View Menu</button>
    </div>
  `).join('');
}

// --- Render Menu ---
function renderMenu() {
  document.getElementById('menuRestaurantName').textContent = currentRestaurant.name;
  let items = currentRestaurant.menu;
  if (dietFilter === 'veg') items = items.filter(i => i.veg);
  if (dietFilter === 'nonveg') items = items.filter(i => !i.veg);

  document.getElementById('menuGrid').innerHTML = items.map(item => `
    <div class="card" onclick="showProduct('${item.id}')" style="cursor:pointer">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <span class="tag ${item.veg ? 'tag-veg' : 'tag-nonveg'}">${item.veg ? '🟢 Veg' : '🔴 Non-Veg'}</span>
      <p class="meta">${item.details}</p>
      <p class="price">₹${item.price}</p>
      <button class="btn" onclick="event.stopPropagation(); addToCart('${item.id}')">Add to Cart</button>
    </div>
  `).join('');
}

// --- Product Detail Modal ---
function showProduct(id) {
  const item = currentRestaurant.menu.find(i => i.id === id);
  if (!item) return;
  document.getElementById('modalImage').src = item.image;
  document.getElementById('modalName').textContent = item.name;
  document.getElementById('modalDetails').textContent = item.details;
  document.getElementById('modalIngredients').textContent = 'Ingredients: ' + item.ingredients;
  document.getElementById('modalNutrition').textContent = 'Nutrition: ' + item.nutrition;
  document.getElementById('modalPrice').textContent = '₹' + item.price;
  document.getElementById('modalAddBtn').onclick = () => { addToCart(id); closeModal(); };
  document.getElementById('productModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('productModal').classList.add('hidden');
}

// --- Cart Functions ---
function addToCart(id) {
  const item = currentRestaurant.menu.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  if (!cart.length) {
    document.getElementById('cartItems').innerHTML = '<p>Your cart is empty.</p>';
    document.getElementById('cartTotal').innerHTML = '';
    document.getElementById('orderSummary').innerHTML = '';
    return;
  }

  document.getElementById('cartItems').innerHTML = cart.map(item => `
    <div class="cart-item">
      <span>${item.name} - ₹${item.price} × ${item.qty}</span>
      <div>
        <button onclick="changeQty('${item.id}', -1)">-</button>
        <button onclick="changeQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal >= 499 ? 0 : 49;
  const total = subtotal + delivery;

  document.getElementById('cartTotal').innerHTML = `
    <p>Subtotal: ₹${subtotal}</p>
    <p>Delivery: ₹${delivery}</p>
    <p>Total: ₹${total}</p>
  `;
  document.getElementById('orderSummary').innerHTML = `
    <p><strong>Order Summary</strong></p>
    <p>Items: ${count} | Total: ₹${total}</p>
    <p>Restaurant: ${currentRestaurant.name}</p>
  `;
}

// --- Select Restaurant ---
function selectRestaurant(id) {
  currentRestaurant = restaurants.find(r => r.id === id);
  renderMenu();
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// --- Filters ---
function filterCategory(cat) {
  categoryFilter = cat;
  renderRestaurants();
  document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
}

function filterDiet(type) {
  dietFilter = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu();
}

function applyFilters() { renderRestaurants(); }

// --- Order Tracking ---
function updateTracking(step) {
  currentStep = step;
  document.querySelectorAll('.step').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.step) <= step);
  });
}

function simulateTracking() {
  updateTracking(1);
  setTimeout(() => updateTracking(2), 2000);
  setTimeout(() => updateTracking(3), 4000);
  setTimeout(() => updateTracking(4), 6000);
}

// --- Checkout ---
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (!cart.length) { document.getElementById('orderMsg').textContent = 'Cart is empty!'; return; }

  const name = document.getElementById('custName').value;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0) + 39;
  const payment = document.getElementById('paymentMethod').value;
  const time = document.getElementById('deliveryTime').value;
  const notes = document.getElementById('orderNotes').value;

  document.getElementById('orderMsg').textContent =
  `Order placed! Thanks ${name}. Payment: ${payment}. Delivery in ${time}. Total: ₹${total}. Notes: ${notes || 'None'}`;

  orderHistory.push({ name, total, restaurant: currentRestaurant.name, date: new Date().toLocaleString() });
  if (currentUser) renderAccount();

  simulateTracking();
  cart = [];
  renderCart();
  this.reset();
});

// --- Login / Register (Simulated) ---
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  currentUser = { name: 'User', email: document.getElementById('loginEmail').value };
  showAccount();
  alert('Login successful! (Simulated)');
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  currentUser = { name: document.getElementById('regName').value, email: document.getElementById('regEmail').value };
  showAccount();
  alert('Registration successful! (Simulated)');
});

function showAccount() {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('account').classList.remove('hidden');
  document.getElementById('loginLink').style.display = 'none';
  renderAccount();
}

function renderAccount() {
  if (!currentUser) return;
  document.getElementById('accountInfo').innerHTML = `
    <p><strong>Name:</strong> ${currentUser.name}</p>
    <p><strong>Email:</strong> ${currentUser.email}</p>
  `;
  document.getElementById('orderHistory').innerHTML = orderHistory.length
    ? orderHistory.map(o => `<div class="card"><p>${o.restaurant} - ₹${o.total} - ${o.date}</p></div>`).join('')
    : '<p>No orders yet.</p>';
}

function logout() {
  currentUser = null;
  document.getElementById('account').classList.add('hidden');
  document.getElementById('login').classList.remove('hidden');
  document.getElementById('loginLink').style.display = 'inline';
}

// --- Contact Form ---
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! (Simulated)');
  this.reset();
});

// --- Mobile Menu ---
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// --- Start App ---
renderRestaurants();
renderMenu();
renderCart();
function openPhoto() {
  document.getElementById("photoModal").style.display = "flex";
}

function closePhoto() {
  document.getElementById("photoModal").style.display = "none";
}