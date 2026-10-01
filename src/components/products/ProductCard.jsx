import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { addToCart } from "../../utils/addToCart";

import { CartContext } from "../../context/CartContext";


const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const {cartItems, setCartItems} = useContext(CartContext)


  return (
    <div className="overflow-hidden rounded-xl bg-white p-4 shadow-[0_4px_15px_rgba(0,0,0,0.15)] border border-gray-400 transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
      <div className="flex h-48 items-center justify-center bg-gray-50 rounded-lg mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 w-full object-contain"
        />
      </div>

      <h3 className="font-semibold text-gray-800 line-clamp-1">
        {product.title}
      </h3>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-gray-500 flex items-center gap-1">
          ⭐ {product.rating}
        </span>
        <span className="font-bold text-purple-700">
          ${product.price}
        </span>
      </div>

      <button onClick={()=> addToCart(cartItems, setCartItems, product)} className="mt-4 w-full rounded-lg px-4 py-2 text-sm font-medium text-white bg-[#650e83cd] hover:bg-[#763e89cd] ">
        Add to Cart
      </button>

      <button 
        onClick={()=>navigate(`/products/${product.id}`)}
        className="mt-4 w-full rounded-lg px-4 py-2 text-sm font-medium text-white bg-[#650e83cd] hover:bg-[#763e89cd]">
            See Details
      </button>
    </div>
  );
};

export default ProductCard;