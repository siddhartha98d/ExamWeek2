import { addToCart, removeFromCart, updateQuantity } from './cart.js';
import { fetchProducts } from './products.js';
import { initializeUI, renderProducts, updateCartUI } from './ui.js';

// Expose functions to global scope for HTML event handlers
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

(async function initApp() {
    initializeUI();
    
    const products = await fetchProducts();
    renderProducts(products);

    window.addEventListener('cartUpdated', () => {
        updateCartUI(cart);
    });
})();