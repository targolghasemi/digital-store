import {useState, useContext , useEffect, useRef , useMemo} from "react";
import { debounce } from "lodash";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import { StatusContext } from "../context/StatusContext";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { categories } from "../constants/categories";
import { filterProductsByCategory } from "../utils/filterProductsByCategory";
import { getTopRatedProducts } from "../utils/getTopRatedProducts";
import { getSortedByPrice } from "../utils/getSortedByPrice";
import Spinner from "../components/Spinner";

const sortOptions = [
  {label:"Default", value:""},
  {label:"Top Rated", value:"top-rated"},
  {label:"Price: Low to High", value:"price-asc"},
  {label:"Price: High to Low", value:"price-desc"},
]

const Products = () => {
  
  const { products, loading, error } = useContext(StatusContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get("category") || "all";
  const selectedCategory = categories.find((cat) => cat.slug === selectedSlug) || categories[0];
  const filteredProducts = filterProductsByCategory(products, selectedCategory);
  const sortParam = searchParams.get("sort")

  const searchQuery = searchParams.get("search") || ""
  const [visibleCount, setVisibleCount] = useState(8)
  const observerTarget = useRef(null)

  let finalProducts = filteredProducts;

  if (sortParam === "top-rated") {
    finalProducts = getTopRatedProducts(filteredProducts, filteredProducts.length)
  } else if (sortParam === "price-asc") {
    finalProducts = getSortedByPrice(filteredProducts, "asc")
  }else if (sortParam === "price-desc") {
    finalProducts = getSortedByPrice(filteredProducts, "desc")
  }

  const searchedProducts = finalProducts.filter((product)=>
    product.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  )


  

  useFetchProducts();

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      if (entries[0].isIntersecting && visibleCount < searchedProducts.length) {
        setVisibleCount((prev)=>prev + 8)
      }
    })

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return()=>{
      observer.disconnect()
    }
  },[products, visibleCount])

  const updateParams = (updates)=>{
    const newParams = Object.fromEntries(searchParams);
    Object.assign(newParams, updates)
    setSearchParams(newParams)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">All Products</h1>

      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => updateParams({ category: cat.slug })}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
              selectedSlug === cat.slug
                ? "bg-purple-700 text-white border-purple-700"
                : "bg-white text-gray-700 border-gray-300 hover:border-purple-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <select
          value={sortParam || ""}
          onChange={(event)=>updateParams({sort:event.target.value})}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 outline-none focus:border-purple-500"
        >
          {sortOptions.map((option)=>(
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {loading&&(
        <div className="flex justify-center py-20">
          <Spinner size={60}/>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {searchedProducts.slice(0,visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div ref={observerTarget}></div>
    </div>
  );
};

export default Products;