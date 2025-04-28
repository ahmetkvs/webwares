import React, { useEffect } from "react";
import ProductCard from "../Cards/ClothingProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product/productActions";
import { GridLoader } from "react-spinners";

function BestsellerProductsSection() {
  const dispatch = useDispatch();
  const bestsellerProducts = useSelector(
    (state) => state.product.productList || []
  );
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="w-full my-32">
      <div className="w-4/5 mx-auto">
        <h2 className="text-2xl font-bold text-black">BESTSELLER PRODUCTS</h2>
        <hr className="border-b mt-8" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 my-8">
          {fetchState === "FETCHING" ? (
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
        </div>
      </div>
    </section>
  );
}

export default BestsellerProductsSection;
