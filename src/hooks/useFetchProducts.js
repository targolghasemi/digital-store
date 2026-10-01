import { useEffect, useContext } from "react";
import api from "../services/api";
import { StatusContext } from "../context/StatusContext";
import { shuffleArray } from "../utils/shuffleArray";
import { mockProducts } from "../constants/mockProducts";


export function useFetchProducts() {
  const { products, setProducts, setLoading, setError } = useContext(StatusContext);

  useEffect(() => {
    if (products.length > 0) {
      return;
    }

    const getProducts = async () => {
      setLoading(true);
      try {
        const [smartphones, laptops, tablets, accessories] = await Promise.all([
          api.get("/products/category/smartphones"),
          api.get("/products/category/laptops"),
          api.get("/products/category/tablets"),
          api.get("/products/category/mobile-accessories"),
        ]);

        const allProducts = [
          ...smartphones.data.products,
          ...laptops.data.products,
          ...tablets.data.products,
          ...accessories.data.products,
          ...mockProducts,
        ];
        console.log(allProducts.filter((p) => p.category === "mobile-accessories").map((p) => p.title));
        setProducts(shuffleArray(allProducts));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);
}