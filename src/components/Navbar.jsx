import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import {
  Home,
  Package,
  ShoppingCart,
  User,
  LogOut
} from "lucide-react";
import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

import {toast} from "react-toastify"

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true);
  const lastScrolY = useRef(0);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const {cartItems} = useContext(CartContext)

  const totalItems = cartItems.reduce((total,item)=>total+item.quantity,0)

  const logoutHandler = () => {
    setCurrentUser(null);
    toast.success("Log out was successful")
  };

  useEffect(()=>{
    const handleScroll = ()=>{
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrolY.current || currentScrollY < 80);
      lastScrolY.current = currentScrollY
    }

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll", handleScroll)
  },[])


  return (
    <nav
       className={`w-full h-20 flex items-center justify-between px-4 sm:px-6 bg-white border-b border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] fixed top-0 left-0 z-50 transition-transform duration-300 ${
         isVisible ? "translate-y-0" : "-translate-y-full"
     }`}
>


      <div className="flex items-center gap-1 text-lg sm:text-xl font-bold">
        <span className="text-[#86048fe3]">Digital</span>
        <span className="text-[#87558be3]">Store</span>
      </div>


      <div className="search-sec hidden md:block">
      <SearchBox />
      </div>

      <div className="flex gap-3 sm:gap-6 items-center">


      <NavLink
          to="/shoppingcart"
          className="relative text-gray-700 no-underline transition duration-300 hover:text-purple-600"
          title="shopping Cart"
      >
         <ShoppingCart size={20} className="sm:w-[22px] sm:h-[22px]"/>
         {totalItems > 0 && (
           <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-purple-700 text-[10px] font-bold text-white">
              {totalItems}
           </span>
         )}
      </NavLink>

        <NavLink
            to="/products"
            className="text-gray-700 no-underline transition duration-300 hover:text-purple-600"
            title="Products"
        >
          <Package size={20} className="sm:w-[22px] sm:h-[22px]"/>

        </NavLink>

        {currentUser ? (
          <>
            <NavLink
                to="/profile"
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-700 text-white text-xs sm:text-sm font-semibold no-underline"
                title="My Account"
            >
              {currentUser.username.charAt(0).toUpperCase()}
            </NavLink>

            <button
                onClick={logoutHandler}
                className="text-gray-700 transition duration-300 hover:text-purple-600"
                title="Log out"
            >
              <LogOut size={20} className="sm:w-[22px] sm:h-[22px]"/>
            </button>
          </>
        ) : (
          <NavLink
              to="/login"
              className="text-gray-700 no-underline transition duration-300 hover:text-purple-600"
              title="User Account"
          >
            <User size={20} className="sm:w-[22px] sm:h-[22px]"/>
          </NavLink>
        )}

        <NavLink
            to="/"
            className="text-gray-700 no-underline transition duration-300 hover:text-purple-600"
            title="Home"
        >
          <Home size={20} className="sm:w-[22px] sm:h-[22px]"/>

        </NavLink>


      </div>
    </nav>
  );
};

export default Navbar;