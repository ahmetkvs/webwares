import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ClothingProductCard";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product/productActions";
import { GridLoader } from "react-spinners";

function BestSellersSection() {
  const dispatch = useDispatch();
  const bestsellerProducts = useSelector(
    (state) => state.product.productList || []
  );
  const fetchState = useSelector((state) => state.product.fetchState);
  const total = useSelector((state) => state.product.total || 0);
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchProducts({
        limit: limit,
        offset: (currentPage - 1) * limit,
      })
    );
  }, [dispatch, currentPage, limit]);

  const totalPages = Math.ceil(total / limit);
  const hasMore = currentPage < totalPages;
  const hasLess = currentPage > 1;

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleCollapse = () => {
    setCurrentPage(1);
  };

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
        {fetchState === "FETCHING" && currentPage === 1 ? (
          <div className="col-span-full flex justify-center py-10">
            <GridLoader color="#3b82f6" size={20} />
          </div>
        ) : fetchState === "FAILED" ? (
          <div className="col-span-full text-center py-10 text-red-500">
            Failed to load bestseller products.
          </div>
        ) : (
          bestsellerProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              images={product.images}
              category_id={product.category_id}
              name={product.name}
              price={product.price}
              discountPercantage={product.discountPercantage}
            />
          ))
        )}
        {fetchState === "FETCHING" && currentPage > 1 && (
          <div className="col-span-full flex justify-center py-4">
            <GridLoader color="#3b82f6" size={15} />
          </div>
        )}
      </div>

      {/* Load/Collapse Buttons */}
      <div className="text-center mt-16 flex justify-center gap-4">
        {hasMore && (
          <button
            className="flex border border-row1third text-row1third px-8 py-2 font-bold rounded hover:bg-row1third hover:text-white transition-colors duration-200"
            onClick={handleLoadMore}
          >
            Next <ChevronDown />
          </button>
        )}
        {hasLess && (
          <button
            className="flex border border-row1third text-row1third px-8 py-2 font-bold rounded hover:bg-row1third hover:text-white transition-colors duration-200"
            onClick={handleCollapse}
          >
            Previous <ChevronUp />
          </button>
        )}
      </div>
    </section>
  );
}

export default BestSellersSection;
