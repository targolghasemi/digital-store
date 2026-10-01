import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#241b27] text-white">
      <div className="mx-auto grid w-[95%] grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-12">

        {/* About Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold">
            About Us
          </h3>

          <p className="text-sm leading-7 text-gray-300">
            Our online store aims to provide the best digital products
            with high quality and reasonable prices.
          </p>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="mb-4 text-lg font-bold">
            Quick Access
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/" className="block cursor-pointer">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="block cursor-pointer">
                Products
              </Link>
            </li>

            <li>
              <Link to="/aboutus" className="block cursor-pointer">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contactus" className="block cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-lg font-bold">
            Categories
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link
                to="/products?category=smartphones"
                className="cursor-pointer"
              >
                Mobiles
              </Link>
            </li>

            <li>
              <Link
                to="/products?category=laptops"
                className="cursor-pointer"
              >
                Laptops
              </Link>
            </li>

            <li>
              <Link
                to="/products?category=keyboards"
                className="cursor-pointer"
              >
                Keyboards
              </Link>
            </li>

            <li>
              <Link
                to="/products?category=headphones"
                className="cursor-pointer"
              >
                Headphones
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-lg font-bold">
            Newsletter
          </h3>

          <p className="text-sm leading-7 text-gray-300">
            Enter your email to stay updated about the latest products and discounts.
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg px-3 py-2 text-sm text-black outline-none"
            />

            <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm transition hover:bg-purple-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
        © All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;