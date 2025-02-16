let products = [];

export async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}