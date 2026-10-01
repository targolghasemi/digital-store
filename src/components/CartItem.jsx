import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const increaseQuantity = () => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
    setCartItems(updatedCart);
  };

  const decreaseQuantity = () => {
    const clickedItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (clickedItem.quantity <= 1) {
      const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updatedCart);
    } else {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
      setCartItems(updatedCart);
    }
  };

  const removeItem = () => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="flex items-center gap-4 border-b border-gray-100 py-4 last:border-b-0">
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-16 w-16 object-contain"
        />
      </div>

      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-800">
          {item.title}
        </h4>
        <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
          ⭐ {item.rating}
        </span>
        <p className="mt-1 font-bold text-purple-700">${item.price}</p>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-2 py-1">
        <button
          onClick={decreaseQuantity}
          className="text-gray-500 hover:text-purple-700">
             <Minus size={16} />
        </button>
        <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
        <button
           onClick={increaseQuantity}
           className="text-gray-500 hover:text-purple-700">
              <Plus size={16} />
        </button>
      </div>

      <button
        onClick={removeItem}
        className="text-red-500 hover:text-red-700">
           <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartItem;