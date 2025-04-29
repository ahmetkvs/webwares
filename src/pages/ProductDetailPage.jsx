// pages/ProductDetailPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../redux/product/productActions";
import { GridLoader } from "react-spinners";
import ProductDetailSection from "../components/productDetailSections/ProductDetailSection";
import TabbedInformationSection from "../components/productDetailSections/TabbedInformationSection/TabbedInformationSection";
import BestsellerProductsSection from "../components/productDetailSections/BestsellerProductsSection";
import BrandLogosSection from "../components/homeSections/BrandLogosSection/BrandLogosSection";

function ProductDetailPage() {
  const { productId, categoryId, gender } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const params = {};
    if (categoryId) params.category = categoryId;
    if (gender) params.gender = gender;

    dispatch(fetchProducts(params))
      .then(() => setLoading(false))
      .catch((err) => {
        setError("Failed to load product details.");
        setLoading(false);
        console.error("Error fetching products:", err);
      });
  }, [dispatch, productId, categoryId, gender]);

  const product = productList.find((p) => p.id === parseInt(productId));
  const productListCopy = [...productList];

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <GridLoader color="#3b82f6" size={30} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
        <Link to="/shop" className="ml-2 text-blue-500 hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        Product with ID {productId} not found!
        <Link to="/shop" className="ml-2 text-blue-500 hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <>
      <ProductDetailSection product={product} />
      <TabbedInformationSection product={product} />
      <BestsellerProductsSection productList={productListCopy} />
      <BrandLogosSection />
    </>
  );
}

export default ProductDetailPage;
