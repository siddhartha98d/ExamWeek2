
let cartSidebarVisible = false;

export function initializeUI() {
    document.getElementById('viewCartBtn').addEventListener('click', toggleCart);
    document.getElementById('closeCartBtn').addEventListener('click', toggleCart);
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
}

export function renderProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

export function updateCartUI(cart) {
    document.getElementById('cartCount').textContent = cart.reduce((count, item) => count + item.quantity, 0);
    
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-controls">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" min="1" 
                       onchange="updateQuantity(${item.id}, parseInt(this.value))">
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    document.getElementById('cartTotal').textContent = getCartTotal().toFixed(2);
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    cartSidebarVisible = !cartSidebarVisible;
    sidebar.classList.toggle('hidden', !cartSidebarVisible);
}

function checkout() {
    alert(`Checkout complete! Total: $${getCartTotal().toFixed(2)}`);
    clearCart();
    toggleCart();
}