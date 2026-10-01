import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section>
      <div className="mx-auto mt-4 grid w-[95%] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

        <Link
          to="/products?category=headphones"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition hover:-translate-y-2 sm:p-4"
        >
          <div>
            <img
              src="/images/headphone2.png"
              alt="Digital products"
              className="h-20 w-full object-contain"
            />
          </div>

          <p className="mt-2">Headphones</p>
        </Link>

        <Link
          to="/products?category=laptops"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition hover:-translate-y-2 sm:p-4"
        >
          <div>
            <img
              src="/images/laptop.png"
              alt="Digital products"
              className="h-20 w-full object-contain"
            />
          </div>

          <p className="mt-2">Laptops</p>
        </Link>

        <Link
          to="/products?category=smartphones"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition hover:-translate-y-2 sm:p-4"
        >
          <div>
            <img
              src="/images/mobile.png"
              alt="Digital products"
              className="h-20 w-full object-contain"
            />
          </div>

          <p className="mt-2">Mobile</p>
        </Link>

        <Link
          to="/products?category=keyboards"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition hover:-translate-y-2 sm:p-4"
        >
          <div>
            <img
              src="/images/keyboard.png"
              alt="Digital products"
              className="h-20 w-full object-contain"
            />
          </div>

          <p className="mt-2">Keyboards</p>
        </Link>

        <Link
          to="/products?category=mouse"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition hover:-translate-y-2 sm:p-4"
        >
          <div>
            <img
              src="/images/mouse.png"
              alt="Digital products"
              className="h-20 w-full object-contain"
            />
          </div>

          <p className="mt-2">Mouse</p>
        </Link>

        <Link
          to="/products?category=cables"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition hover:-translate-y-2 sm:p-4"
        >
          <div>
            <img
              src="/images/kabl.png"
              alt="Digital products"
              className="h-20 w-full object-contain"
            />
          </div>

          <p className="mt-2">Cables</p>
        </Link>

      </div>
    </section>
  );
};

export default Categories;