import { useState } from "react";
import ProductCard from "../Cards/ClothingProductCard";
import { ChevronUp } from "lucide-react";

const mockProducts = [
  {
    imgSrc: "https://picsum.photos/183/238?random=1",
    category: "T-Shirts",
    title: "Black T-shirt",
    originalPrice: 16.48,
    discountPercantage: 60,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=2",
    category: "Jackets",
    title: "Black Jacket",
    originalPrice: 62.99,
    discountPercantage: 0,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=3",
    category: "Jeans",
    title: "Blue Slim Jeans",
    originalPrice: 45.0,
    discountPercantage: 20,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=4",
    category: "Shoes",
    title: "Running Shoes",
    originalPrice: 89.99,
    discountPercantage: 15,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=5",
    category: "Sweaters",
    title: "Wool Sweater",
    originalPrice: 39.5,
    discountPercantage: 35,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=6",
    category: "T-Shirts",
    title: "White Graphic Tee",
    originalPrice: 22.99,
    discountPercantage: 10,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=7",
    category: "Accessories",
    title: "Leather Belt",
    originalPrice: 18.75,
    discountPercantage: 5,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=8",
    category: "Dresses",
    title: "Summer Floral Dress",
    originalPrice: 54.9,
    discountPercantage: 50,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=9",
    category: "Shoes",
    title: "Formal Leather Shoes",
    originalPrice: 120.0,
    discountPercantage: 25,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=10",
    category: "Jackets",
    title: "Denim Jacket",
    originalPrice: 75.0,
    discountPercantage: 0,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=11",
    category: "Jeans",
    title: "Ripped Jeans",
    originalPrice: 49.99,
    discountPercantage: 30,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=12",
    category: "Hoodies",
    title: "Oversized Hoodie",
    originalPrice: 35.0,
    discountPercantage: 40,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=13",
    category: "T-Shirts",
    title: "Striped T-shirt",
    originalPrice: 19.99,
    discountPercantage: 15,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=14",
    category: "Accessories",
    title: "Beanie Hat",
    originalPrice: 12.0,
    discountPercantage: 0,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=15",
    category: "Shoes",
    title: "Canvas Sneakers",
    originalPrice: 48.5,
    discountPercantage: 20,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=16",
    category: "Dresses",
    title: "Cocktail Dress",
    originalPrice: 79.99,
    discountPercantage: 45,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=17",
    category: "Sweaters",
    title: "Knitted Pullover",
    originalPrice: 42.3,
    discountPercantage: 10,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=18",
    category: "Jackets",
    title: "Puffer Jacket",
    originalPrice: 99.9,
    discountPercantage: 55,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=19",
    category: "Hoodies",
    title: "Zip Hoodie",
    originalPrice: 29.99,
    discountPercantage: 0,
  },
  {
    imgSrc: "https://picsum.photos/183/238?random=20",
    category: "Accessories",
    title: "Canvas Tote Bag",
    originalPrice: 14.99,
    discountPercantage: 25,
  },
];

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
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
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
