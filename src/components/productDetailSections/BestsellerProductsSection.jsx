import { mockProducts } from "../../data/data";
import ProductCard from "../Cards/ClothingProductCard";

function BestsellerProductsSection() {
  //Extract the bestsellers,
  const bestSellerProds = mockProducts.slice(0, 8);

  return (
    <section className="w-full my-32">
      <div className="w-4/5 mx-auto">
        <h2 className="text-2xl font-bold text-black">BESTSELLER PRODUCTS</h2>
        <hr className="border-b mt-8" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 my-8">
          {bestSellerProds.map((product, index) => {
            return (
              <ProductCard
                key={index}
                id={product.id}
                imgSrc={product.imgSrc}
                category={product.category}
                title={product.title}
                originalPrice={product.originalPrice}
                discountPercantage={product.discountPercantage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BestsellerProductsSection;
