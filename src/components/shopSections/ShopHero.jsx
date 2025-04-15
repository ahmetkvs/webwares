import { ChevronRight } from "lucide-react";

function ShopHero() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="w-4/5 mx-auto">
        <div className="flex justify-between py-8 mx-8">
          <h2 className="text-row1third font-semibold text-2xl">Shop</h2>
          <div className="flex gap-2">
            <p className="font-bold text-black">Home</p>
            <ChevronRight className="text-gray-400" />
            <p className="text-gray-400">Shop</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-6 gap-y-10 text-white">
          <div className="w-[205px] h-[223px] bg-orange-300 flex flex-col justify-center items-center">
            <h3 className="font-bold">CLOTHS</h3>
            <p className="text-sm">5 items</p>
          </div>
          <div className="w-[205px] h-[223px] bg-orange-400 flex flex-col justify-center items-center">
            <h3 className="font-bold">CLOTHS</h3>
            <p className="text-sm">5 items</p>
          </div>
          <div className="w-[205px] h-[223px] bg-orange-500 flex flex-col justify-center items-center">
            <h3 className="font-bold">CLOTHS</h3>
            <p className="text-sm">5 items</p>
          </div>
          <div className="w-[205px] h-[223px] bg-orange-600 flex flex-col justify-center items-center">
            <h3 className="font-bold">CLOTHS</h3>
            <p className="text-sm">5 items</p>
          </div>
          <div className="w-[205px] h-[223px] bg-orange-700 flex flex-col justify-center items-center">
            <h3 className="font-bold">CLOTHS</h3>
            <p className="text-sm">5 items</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopHero;
