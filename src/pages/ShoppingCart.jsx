import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import CartItem from "../components/CartItem";

import {
  ArrowRight,
  ShoppingCart as ShoppingCartIcon,
} from "lucide-react";

const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-200 px-4 py-8 sm:px-6 sm:py-10">

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Shopping Cart
        </h1>

        <span className="text-sm text-gray-500">
          Review your items and complete your purchase
        </span>
      </div>

      {cartItems.length === 0 ? (

        <div className="flex flex-col items-center justify-center rounded-lg bg-white px-4 py-20 text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-50">
            <ShoppingCartIcon
              size={36}
              className="text-purple-700"
            />
          </div>

          <h2 className="mt-6 text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-6 flex items-center gap-2 rounded-lg bg-purple-700 px-5 py-2 text-sm font-medium text-white hover:bg-purple-800"
          >
            Continue Shopping
            <ArrowRight size={16} />
          </button>

        </div>

      ) : (

        <div className="flex flex-col gap-6 lg:flex-row">

          <div className="min-w-0 flex-1 rounded-lg bg-white p-3 sm:p-4">

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

          </div>

          <div className="h-[300px] w-full rounded-lg bg-white p-4 sm:p-5 lg:w-80">

            <h2 className="mb-4 font-semibold text-gray-800">
              Order Summary
            </h2>

            <div className="flex justify-between">
              <span className="text-[15px] text-gray-500">
                Subtotal ({totalItems} items)
              </span>

              <span className="text-[15px] text-gray-600">
                {totalPrice} $
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <span className="text-[15px] text-gray-500">
                Shipping
              </span>

              <span className="text-[15px] text-green-700">
                Free
              </span>
            </div>

            <div className="mt-4 flex justify-between border-t pt-4">
              <span className="text-[20px] font-bold text-gray-900">
                Total
              </span>

              <span className="text-[20px] font-bold text-purple-900">
                {totalPrice} $
              </span>
            </div>

            <div className="mt-12 flex items-center justify-center">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-4 py-2 text-sm text-white hover:bg-purple-800">
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ShoppingCart;