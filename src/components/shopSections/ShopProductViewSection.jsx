import { useState } from "react";
import {
  LayoutGrid,
  List,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import DefaultButton from "../buttons/DefaultButton";
import { mockProducts } from "../../data/data";
import ProductCard from "../Cards/ClothingProductCard";

const ITEMS_PER_PAGE = 12;

function ShopProductViewSection() {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Popularity");
  const [viewType, setViewType] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const sortOptions = [
    //Subject to change
    "Popularity",
    "Average rating",
    "Newness",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const totalProducts = mockProducts.length;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = mockProducts.slice(startIndex, endIndex);

  const handleSortSelect = (option) => {
    setSelectedSortOption(option);
    setIsSortDropdownOpen(false); //close after selection

    //Implement actual sorting logic
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const gridViewClass =
    "w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-16";
  const listViewClass = "w-4/5 mx-auto grid grid-cols-1 gap-y-4";

  function getPageNumbers() {
    const pages = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    return pages;
  }

  const pageNumbersToDisplay = getPageNumbers();

  return (
    <section className="w-full my-16">
      {/*Top Controls Bar Start*/}
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-y-8">
        <p className="text-sm text-gray-600">
          Showing {Math.min(startIndex + 1, totalProducts)} -
          {Math.min(endIndex, totalProducts)} of {totalProducts} results
        </p>
        <div className="flex gap-2 items-center">
          <p>Views:</p>
          <span
            onClick={() => setViewType("grid")}
            className="p-2 border border-slate-950 rounded cursor-pointer hover:bg-slate-400 transition-colors duration-200"
          >
            <LayoutGrid fill="" size={18} />
          </span>
          <span
            onClick={() => setViewType("list")}
            className="p-2 border border-slate-950 rounded cursor-pointer hover:bg-slate-400 transition-colors duration-200"
          >
            <List size={18} />
          </span>
        </div>
        <div className="flex gap-2">
          {/*Sort DropDown (Default Popularity) */}
          <div className="relative">
            <button
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center justify-between w-36 px-4 py-2 text-sm bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" // Style as per screenshot
            >
              <span>{selectedSortOption}</span>
              <ChevronDown
                size={16}
                className={`ml-2 transition-transform duration-200 ${
                  isSortDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isSortDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  {sortOptions.map((option) => (
                    <li key={option}>
                      <button
                        onClick={() => handleSortSelect(option)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <DefaultButton size="md">Filter</DefaultButton>
          {/*filter Does nothing for now */}
        </div>
      </div>
      {/*Top Controls Bar End*/}
      <div className="my-16">
        <div className={viewType === "grid" ? gridViewClass : listViewClass}>
          {currentProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                imgSrc={product.imgSrc}
                category={product.category}
                title={product.title}
                originalPrice={product.originalPrice}
                discountPercantage={product.discountPercantage}
                variant={viewType}
              />
            );
          })}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="w-4/5 mx-auto flex justify-center items-center gap-2 mt-12 mb-8">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-3 border rounded text-sm flex items-center gap-1 ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed bg-gray-100 border-gray-300"
                : "text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
          >
            <ChevronLeft size={16} />
            Prev
          </button>

          {pageNumbersToDisplay.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
              className={`px-3 py-3 border rounded text-sm ${
                pageNumber === currentPage
                  ? "bg-blue-500 text-white border-blue-500 cursor-default"
                  : "text-gray-700 hover:bg-gray-100 border-gray-300"
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-3 border rounded text-sm flex items-center gap-1 ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed bg-gray-100 border-gray-300"
                : "text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}

export default ShopProductViewSection;
