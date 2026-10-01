import { Link } from "react-router-dom";
import { Truck, ShieldCheck, Headphones, Tag } from "lucide-react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto mt-6 flex max-w-7xl items-center justify-between gap-10 rounded-2xl bg-[#8a668d] px-10 py-8">

        {/* Text */}
        <div className="flex w-1/2 flex-col items-start">
          <h1 className="mb-4 text-3xl font-bold">
            About Digital Store
          </h1>

          <p className="mb-6 text-gray-800">
            We bring you quality digital products at great prices,
            all in one place.
          </p>

          <Link
            to="/products"
            className="rounded-lg bg-[#8b2594] px-6 py-3 text-white transition hover:bg-[#851a8f]"
          >
            Explore Products
          </Link>
        </div>

        {/* Image */}
        <div className="flex w-1/2 justify-center">
          <img
            src="/images/aboutpic.png"
            alt="Digital products"
            className="h-60 w-100 object-contain"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto mt-16 max-w-4xl px-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Digital Store started with a simple idea: buying tech accessories
          shouldn't be complicated or expensive. We handpick every product
          in our catalog, from headphones to laptops, to make sure you get
          reliable quality without the guesswork. Whether you're upgrading
          your setup or just replacing a worn-out cable, we've got you covered.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-800">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <Truck className="mx-auto mb-3 text-purple-700" size={32} />
            <h3 className="mb-2 font-semibold text-gray-800">Fast Shipping</h3>
            <p className="text-sm text-gray-500">
              Get your order delivered quickly, right to your door.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <ShieldCheck className="mx-auto mb-3 text-purple-700" size={32} />
            <h3 className="mb-2 font-semibold text-gray-800">Secure Payment</h3>
            <p className="text-sm text-gray-500">
              Shop with confidence using safe and encrypted checkout.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <Headphones className="mx-auto mb-3 text-purple-700" size={32} />
            <h3 className="mb-2 font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-sm text-gray-500">
              Our team is always here to help with any questions.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <Tag className="mx-auto mb-3 text-purple-700" size={32} />
            <h3 className="mb-2 font-semibold text-gray-800">Best Prices</h3>
            <p className="text-sm text-gray-500">
              Quality products at prices that won't break the bank.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 mb-16 max-w-7xl rounded-2xl bg-[#8a668d] px-10 py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Ready to find your next favorite gadget?
        </h2>
        <p className="mb-6 text-gray-100">
          Browse our full catalog and discover deals on top tech accessories.
        </p>
        <Link
          to="/products"
          className="inline-block rounded-lg bg-[#8b2594] px-6 py-3 text-white transition hover:bg-[#851a8f]"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;