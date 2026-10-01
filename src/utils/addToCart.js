import {toast} from "react-toastify"

export function addToCart(cartItems, setCartItems, product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }

    toast.success("Added to cart")
  }