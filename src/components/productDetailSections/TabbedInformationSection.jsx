import { useState } from "react";

function TabbedInformationSection({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  console.log(activeTab);
  return (
    <section className="w-full my-8">
      <div className="w-4/5 mx-auto">
        <div className="flex items-center my-4 justify-center gap-8">
          <button onClick={() => setActiveTab("description")}>
            Description
          </button>
          <button onClick={() => setActiveTab("additional")}>
            Additional Information
          </button>
          <button onClick={() => setActiveTab("reviews")}>
            Reviews ({product.reviewCount})
          </button>
        </div>
      </div>
    </section>
  );
}

export default TabbedInformationSection;
