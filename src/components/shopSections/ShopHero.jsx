import { ChevronRight } from "lucide-react";

function ShopHero() {
  const categories = [
    { name: "CLOTHS", items: 5, bg: "bg-gray-300" },
    { name: "CLOTHS", items: 5, bg: "bg-blue-300" },
    { name: "CLOTHS", items: 5, bg: "bg-pink-300" },
    { name: "CLOTHS", items: 5, bg: "bg-teal-300" },
    { name: "CLOTHS", items: 5, bg: "bg-purple-300" },
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative ${category.bg} aspect-square overflow-hidden`}
            >
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 text-center text-white">
                <h3 className="font-bold text-xl">{category.name}</h3>
                <p className="text-sm mt-1">{category.items} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopHero;
