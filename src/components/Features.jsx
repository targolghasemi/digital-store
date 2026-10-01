import { Truck, ShieldCheck, Headphones, RotateCcw } from "lucide-react";

const Features = () => {
  return (
    <div className="mx-auto mb-6 grid w-[95%] grid-cols-1 divide-y divide-gray-400 rounded-xl bg-[#f6d4f4ea] shadow-md sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">

      <div className="flex items-center justify-center gap-3 p-4 sm:p-5">
        <Truck className="h-8 w-8 shrink-0 text-purple-600" />

        <div>
          <h3 className="font-bold">Fast Delivery</h3>
          <p className="text-xs text-gray-500">Delivery nationwide</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 p-4 sm:p-5">
        <ShieldCheck className="h-8 w-8 shrink-0 text-purple-600" />

        <div>
          <h3 className="font-bold">Authenticity Guarantee</h3>
          <p className="text-xs text-gray-500">
            Original products with warranty
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 p-4 sm:p-5">
        <Headphones className="h-8 w-8 shrink-0 text-purple-600" />

        <div>
          <h3 className="font-bold">24/7 Support</h3>
          <p className="text-xs text-gray-500">Online support</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 p-4 sm:p-5">
        <RotateCcw className="h-8 w-8 shrink-0 text-purple-600" />

        <div>
          <h3 className="font-bold">Easy Returns</h3>
          <p className="text-xs text-gray-500">7-day return guarantee</p>
        </div>
      </div>

    </div>
  );
};

export default Features;