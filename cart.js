let cart = [];

export function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push({ ...product, quantity: 1 });
        }
    }
    updateCart();
}

export function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
    }
    updateCart();
}

export function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

export function clearCart() {
    cart = [];
    updateCart();
}

export function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCart() {
    // This will be implemented in UI module
    window.dispatchEvent(new Event('cartUpdated'));
}