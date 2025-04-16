import { useParams } from "react-router-dom";
import { mockProducts } from "../data/data";
import ProductDetailSection from "../components/productDetailSections/ProductDetailSection";
import TabbedInformationSection from "../components/productDetailSections/TabbedInformationSection/TabbedInformationSection";
import BestsellerProductsSection from "../components/productDetailSections/BestsellerProductsSection";
import BrandLogosSection from "../components/homeSections/BrandLogosSection/BrandLogosSection";

function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  const product = mockProducts.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return (
      <div className="text-center py-10">
        Product with ID {productId} not found!
      </div>
    );
  }

  return (
    <>
      <ProductDetailSection product={product} />
      <TabbedInformationSection product={product} />
      <BestsellerProductsSection />
      <BrandLogosSection />
    </>
  );
}

export default ProductDetailPage;
