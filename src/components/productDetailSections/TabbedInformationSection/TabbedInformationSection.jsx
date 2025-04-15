import { useState } from "react";
import ProductDescriptionTab from "./ProductDescriptionTab";
import AdditionalInformationTab from "./AdditionalInformationTab";
import ReviewsTab from "./ReviewsTab";

function TabbedInformationSection({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  console.log(activeTab);
  return (
    <section className="w-full my-8">
      <div className="w-4/5 mx-auto">
        <div className="flex items-center my-4 justify-center gap-8 text-lg pb-8 border-b">
          <button
            className={`py-2 px-1 transition-colors duration-200 ${
              activeTab === "description"
                ? "font-bold text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black hover:font-bold"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`py-2 px-1 transition-colors duration-200 ${
              activeTab === "additional"
                ? "font-bold text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black hover:font-bold"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`py-2 px-1 transition-colors duration-200 ${
              activeTab === "reviews"
                ? "font-bold text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black hover:font-bold"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            <span className="flex gap-1">
              <p>Reviews</p>
              <p className="text-teal-600">({product.reviewCount || 0})</p>
            </span>
          </button>
        </div>
        {activeTab === "description" ? (
          <ProductDescriptionTab />
        ) : activeTab === "additional" ? (
          <AdditionalInformationTab />
        ) : (
          <ReviewsTab />
        )}
      </div>
    </section>
  );
}

export default TabbedInformationSection;
