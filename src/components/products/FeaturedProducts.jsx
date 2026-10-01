import { useContext } from "react";
import ProductCard from "./ProductCard";
import { StatusContext } from "../../context/StatusContext";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { getTopRatedProducts } from "../../utils/getTopRatedProducts";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    const { products, loading, error } = useContext(StatusContext);


    useFetchProducts();

    const topRatedProducts = getTopRatedProducts(products,4)

  return (

    <section className="mx-auto max-w-7xl px-6 py-12">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">

            Featured Products

          </h2>

          <p className="mt-2 text-sm text-gray-500">

            A selection of the best products in our store

          </p>

        </div>

        <Link
            to="/products?sort=top-rated"
            className="text-sm font-medium text-purple-600 transition hover:text-purple-800">

          View All

        </Link>

      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {topRatedProducts.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}

      </div>

    </section>

  );

};

export default FeaturedProducts;