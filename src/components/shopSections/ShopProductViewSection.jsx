import { useEffect, useState } from "react";
import {
  LayoutGrid,
  List,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  OctagonAlert,
  FunnelX,
  FunnelPlusIcon,
} from "lucide-react";
import ProductCard from "../Cards/ClothingProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product/productActions";
import { GridLoader, ScaleLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const ITEMS_PER_PAGE = 12;

function ShopProductViewSection() {
  const { categoryId } = useParams();
  //console.log(gender, categoryName, categoryId);
  const dispatch = useDispatch();

  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [viewType, setViewType] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ input: "", text: "" });

  const fetchState = useSelector((state) => state.product.fetchState || []);
  const productList = useSelector((state) => state.product.productList || []);
  const total = useSelector((state) => state.product.total || []);

  const sortOptions = [
    { label: "Price: Low to High", value: "price:asc" },
    { label: "Price: High to Low", value: "price:desc" },
    { label: "Rating: Low to High", value: "rating:asc" },
    { label: "Rating: High to Low", value: "rating:desc" },
  ];

  function getLabelByValue(value) {
    for (const item of sortOptions) {
      if (item.value === value) {
        return item.label;
      }
    }
    return "Please Choose";
  }

  const totalProducts = total;
  const totalPages = Math.ceil(productList.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = productList.slice(startIndex, endIndex);

  const handleSortSelect = (optionValue) => {
    setSelectedSortOption(optionValue);
    setIsSortDropdownOpen(false);
  };

  const handleFilterSubmit = () => {
    setFilter((prevFilter) => ({ ...prevFilter, text: prevFilter.input }));
  };

  const handleFilterReset = () => {
    setFilter({ input: "", text: "" });
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const params = {};

    if (categoryId) params.category = categoryId;
    if (filter.text) params.filter = filter.text;
    if (selectedSortOption) params.sort = selectedSortOption;

    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, filter.text, selectedSortOption]);

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
          {/*Sort DropDown */}
          <div className="relative">
            <button
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center justify-between w-56 px-4 py-2 text-sm bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" // Style as per screenshot
            >
              <span>{getLabelByValue(selectedSortOption)}</span>
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
                  {sortOptions.map(({ label, value }) => (
                    <li key={value}>
                      <button
                        onClick={() => handleSortSelect(value)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <input
            type="text"
            value={filter.input}
            onChange={(e) => setFilter({ ...filter, input: e.target.value })}
            placeholder="Filter products"
            className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {filter.text ? (
            <div className="flex rounded-md shadow-sm">
              <button
                onClick={handleFilterSubmit}
                className="bg-sky-500 text-white font-bold font-inter px-4 py-2 rounded-l-md cursor-pointer hover:bg-sky-900 transition-colors duration-300 flex items-center gap-1"
              >
                <FunnelPlusIcon size={16} />
              </button>
              <button
                onClick={handleFilterReset}
                className="bg-gray-300 text-gray-700 font-bold font-inter px-4 py-2 rounded-r-md cursor-pointer hover:bg-gray-400 transition-colors duration-300 flex items-center gap-1 border-l border-gray-400"
              >
                <FunnelX size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleFilterSubmit}
              className="bg-sky-500 text-white font-bold font-inter px-6 py-2 rounded-2xl cursor-pointer hover:bg-sky-900 transition-colors duration-300"
            >
              Filter
            </button>
          )}
        </div>
      </div>
      {/*Top Controls Bar End*/}
      <div className="my-16">
        {fetchState === "FETCHED" && (
          <div className={viewType === "grid" ? gridViewClass : listViewClass}>
            {currentProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  images={product.images}
                  category_id={product.category_id}
                  name={product.name}
                  price={product.price}
                  discountPercantage={product.discountPercantage}
                  variant={viewType}
                />
              );
            })}
          </div>
        )}
        {fetchState === "NOT_FETCHED" && (
          <div className="w-full flex justify-center items-center h-48">
            <p className="text-gray-500">Loading products...</p>
          </div>
        )}
        {fetchState === "FETCHING" && (
          <div className="w-full flex justify-center items-center h-48">
            {viewType === "grid" ? (
              <GridLoader color="#3b82f6" size={20} />
            ) : (
              <ScaleLoader
                color="#3b82f6"
                height={40}
                width={5}
                radius={2}
                margin={2}
              />
            )}
          </div>
        )}
        {fetchState === "FAILED" && (
          <div className="w-full flex flex-col justify-center items-center h-48 text-red-500">
            <OctagonAlert size={64} />
            <p className="text-lg">Failed to load products.</p>
          </div>
        )}
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
