import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTopRatedCategories } from "../../utils/formatCategories";
import slugify from "../../utils/slugify.js";

function ShopHero() {
  const originalCategories = useSelector(
    (state) => state.product.categories || []
  );
  const categories = getTopRatedCategories(originalCategories);

  return (
    <section className="bg-[#FAFAFA]">
      <div className="w-4/5 mx-auto">
        <div className="flex justify-between py-8 mx-8">
          <h2 className="text-row1third font-semibold text-2xl">Shop</h2>
          <div className="flex gap-2">
            <Link to="/" className="font-bold text-black">
              Home
            </Link>
            <ChevronRight className="text-gray-400" />
            <p className="text-gray-400">Shop</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${slugify(category.gender)}/${slugify(
                category.name
              )}/${slugify(category.id)}`}
              className={`relative aspect-square overflow-hidden`}
            >
              <img
                src={category.bg}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute z-10 inset-0 flex flex-col justify-center items-center p-4 text-center text-white bg-black bg-opacity-25">
                <h3 className="font-bold text-xl">{category.gender}</h3>
                <h3 className="font-bold text-xl">{category.name}</h3>
                <p className="text-sm mt-1">{category.items} items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopHero;
