import { useContext } from "react"
import { StatusContext } from "../context/StatusContext"
import { CartContext } from "../context/CartContext"
import { useParams } from "react-router-dom"

import { addToCart } from "../utils/addToCart"

const ProductDetails = ()=>{
  const {products}= useContext(StatusContext)
  const {cartItems, setCartItems} = useContext(CartContext)
  const {id} = useParams()

  let productDetails = products.find((product) => product.id.toString() === id);

  if (!productDetails) {
    return null
  }
  return(
      <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4 py-6">
          <div className="w-full max-w-[1000px] rounded-lg bg-white p-4 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">

              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                  <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-50 md:h-[400px] md:w-1/2">
                      <img
                        src={productDetails.thumbnail}
                        alt={productDetails.title}
                        className="h-48 md:h-[300px]"
                      />
                  </div>

                  <div className="flex w-full flex-col justify-center py-2 md:w-1/2">
                      <h2 className="font-semibold text-lg text-gray-800 line-clamp-2 ">{productDetails.title}</h2>
                      <span className="text-sm text-gray-600">{productDetails.brand}</span>
                      <span className="text-sm text-gray-400 mt-[10px]">{productDetails.rating} rating</span>

                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-xl font-bold text-purple-700">
                          ${productDetails.price}
                        </span>
                        {productDetails.discountPercentage > 0 && (
                          <span className="text-sm text-gray-400 line-through">
                            ${(productDetails.price / (1 - productDetails.discountPercentage / 100)).toFixed(2)}
                          </span>
                        )}
                      </div>

                      <span className="mt-2 text-sm text-green-600">
                        In Stock ({productDetails.stock} available)
                      </span>

                      <button 
                         onClick={()=>addToCart(cartItems, setCartItems, productDetails)}
                         className="w-full sm:w-64 rounded-lg py-2 mt-4 bg-purple-600 text-white hover:bg-purple-700">
                          Add to cart
                      </button>
                  </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {productDetails.description}
                </p>
              </div>

          </div>
      </div>
  )
}

export default ProductDetails