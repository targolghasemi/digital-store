const CART_STORAGE_KEY = "digitalStoreCarts";

export function getCart(username) {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    const allCarts = raw ? JSON.parse(raw) : {};
    return allCarts[username] || [];
}

export function saveCart(username, cartItems) {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    const allCarts = raw ? JSON.parse(raw) : {};
    allCarts[username] = cartItems;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(allCarts));
}