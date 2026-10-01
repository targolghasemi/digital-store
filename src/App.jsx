import {Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ShoppingCart from "./pages/ShoppingCart";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductsDetails";

import { StatusContext } from "./context/StatusContext";
import { AuthContext } from "./context/AuthContext";
import { CartContext } from "./context/CartContext";

import { useState , useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Spinner from "./components/Spinner";

import { getCart, saveCart } from "./utils/localCarts";




const App = () => {

  const[loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(()=>{
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null
  })
  const [cartItems, setCartItems]=useState([])

  useEffect(()=>{
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
    } else{
      localStorage.removeItem("currentUser")
    }
  },[currentUser])

  useEffect(()=>{
    if (currentUser) {
      const savedCart = getCart(currentUser.username);
      setCartItems(savedCart)
    } else{
      setCartItems([])
    }
  },[currentUser])

  useEffect(()=>{
    if (currentUser) {
      saveCart(currentUser.username, cartItems)
    }
  },[cartItems])

  if (loading) {
    return(
      <div className="flex min-h-screen items-center justify-center bg-gray-200">
        <Spinner size={100}/>
      </div>
    )
  }

  return(
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      <StatusContext.Provider value={{
      loading,
      setLoading,
      error,
      setError,
      products,
      setProducts
    }}>
      <CartContext.Provider value={{cartItems, setCartItems}}>
      <Navbar/>
      <div className="pt-20">
        <ScrollToTop/>
        <ToastContainer position="top-center" autoClose={3000}/>

         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/shoppingcart" element={<ShoppingCart/>}/>
         </Routes>
     </div>
     <Footer/>
      </CartContext.Provider>
      </StatusContext.Provider>
    </AuthContext.Provider>
  ) 
};

export default App;