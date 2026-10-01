import { createContext } from "react";

export const StatusContext = createContext({
    loading:false,
    setLoading:()=>{},
    error:null,
    setError:()=>{},
    products:[],
    setProducts:()=>{}
})