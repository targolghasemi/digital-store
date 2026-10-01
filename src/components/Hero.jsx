import { Link } from "react-router-dom";
const Hero = ()=>{

    return(

        <section className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row  items-center justify-between gap-6 rounded-2xl bg-[#8a668de2] px-4 py-6 md:px-10 md:py-8 ">

            {/* text */}

            <div className="flex flex-col items-center md:items-start text-center md:translate-x-8">

            <h1 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 ">Welcome to Digital Store</h1>

            <span className="mt-3 text-gray-800">Get the best digital products at the best prices</span>

            <Link to="/products" className="mt-5 rounded-lg bg-[#8b2594e1] px-6 py-3 text-white transition hover:bg-[#851a8fe1]">View Products</Link>

        </div>

            <div className="w-full md:w-1/2 ">

               <img

                   src="/images/heropic.png"

                   alt="Digital products"

                   className="h-40 w-full md:h-48 md:w-96 object-contain"

             />

        </div>

        </section>

    )

}

export default Hero;