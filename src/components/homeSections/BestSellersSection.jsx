import { useState } from "react";
import ProductCard from "../Cards/ClothingProductCard";
import { ChevronUp } from "lucide-react";
import { mockProducts } from "../../data/data.js";

function BestSellersSection() {
  const [tabsVisible, setTabsVisible] = useState(1);

  function loadMoreItems() {
    setTabsVisible((prevCount) => prevCount + 1);
  }
  function resetTabs() {
    setTabsVisible(1);
  }

  return (
    <section className="my-32">
      <div className="text-center mb-16">
        <h3 className="text-lg text-gray-600 mb-2">Featured Products</h3>
        <h2 className="text-2xl font-bold mb-2">BESTSELLER PRODUCTS</h2>
        <p className="text-sm text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>
      {/* Product Cards */}
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
        {mockProducts.slice(0, tabsVisible * 10).map((product, index) => {
          return (
            <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              category={product.category}
              title={product.title}
              originalPrice={product.originalPrice}
              discountPercantage={product.discountPercantage}
            />
          );
        })}
      </div>

      {/* Load/Collapse Buttons */}
      <div className="text-center mt-16 flex justify-center gap-4">
        <button
          className="border border-row1third text-row1third px-8 py-2 font-bold rounded hover:bg-row1third hover:text-white transition-colors duration-200"
          onClick={loadMoreItems}
        >
          Load More Products
        </button>
        {tabsVisible > 1 && (
          <button
            className="flex border border-row1third text-row1third px-8 py-2 font-bold rounded hover:bg-row1third hover:text-white transition-colors duration-200"
            onClick={resetTabs}
          >
            Collapse <ChevronUp />
          </button>
        )}
      </div>
    </section>
  );
}

export default BestSellersSection;
