import { useState , useRef } from "react";
import { useNavigate  } from "react-router-dom";
import { debounce } from "lodash";
import { useContext } from "react";
import { StatusContext } from "../context/StatusContext";

const SearchBox = () => {
  const {products}=useContext(StatusContext)
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const searchHandler = (event)=>{
    let searchInput = event.target.value;
    setInput(searchInput)
    updateSuggestions(searchInput)
  }

  const goToSearch = ()=>{
    navigate(`/products?search=${input}`)
  }

  const updateSuggestions = debounce((value)=>{
    if (value.trim()==="") {
      setSuggestions([]);
      return;
    }

    const matches = products.filter((product)=>
    product.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(matches.slice(0,5))
  },1000)

  return (

    <div className="w-80 flex" >

      <input
        ref={inputRef}
        onChange={searchHandler}
        onKeyDown={(event)=>{
          if (event.key === "Enter") {
            goToSearch()
          }
        }}
        value={input}
        placeholder="Search products ..."
        className= " flex-1 w-full rounded-lg border border-gray-400 px-4 py-2 outline-none  text-sm text-gray-800 transition focus:border-purple-500 bg-white focus:ring-2 focus:ring-purple-100"

      />

      {suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 w-full rounded-lg border border-purple-200 bg-purple-50/60 backdrop-blur-md shadow-lg z-20">
          {suggestions.map((product)=>(
            <li
            className="px-4 py-2 text-sm text-purple-900 hover:bg-purple-200/50 cursor-pointer transition"
              key={product.id}
              onClick={()=>{
                setInput(product.title);
                setSuggestions([]);
                navigate(`/products?search=${product.title}`)
                
              }
              }
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={goToSearch}
        className="ml-2 rounded-lg bg-purple-700 px-4 text-sm font-medium text-white transition hover:bg-purple-800 "
        >
        search
      </button>

    </div>

  );

};

export default SearchBox;