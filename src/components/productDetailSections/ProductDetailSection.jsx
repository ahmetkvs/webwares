import {
  ChevronRight,
  ChevronLeft,
  Star,
  Heart,
  ShoppingCart,
  Eye,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import DefaultButton from "../buttons/DefaultButton";
import { useDispatch } from "react-redux";
import {
  setCart,
  setFavorites,
} from "../../redux/shoppingCart/shoppingCartActions";

function ProductDetailSection({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");
  const images = product.images?.map((img) => img.url) || [
    `https://picsum.photos/id/${product?.id + 10}/800/800`,
  ];
  const totalImages = images.length;

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % totalImages;
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    setCurrentImageIndex(prevIndex);
  };

  const openImageModal = () => {
    setModalImageUrl(images[currentImageIndex]);
    setIsModalOpen((prevState) => !prevState);
  };

  const closeImageModal = () => {
    setIsModalOpen((prevState) => !prevState);
    setModalImageUrl("");
  };

  const handleAddToCart = () => {
    dispatch(setCart(product));
    console.log("Added to Cart", product);
  };

  const handleAddToFavorites = () => {
    const currentUrl = window.location.pathname;
    dispatch(setFavorites({ product, url: currentUrl }));
    console.log("Added to Favorites", { product, url: currentUrl });
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  //Test colors array
  const colorsArray = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];

  const ratingValue = product.rating || 0;
  const roundedRating = Math.round(ratingValue);

  let discountedPrice = null;
  if (
    typeof product.originalPrice === "number" &&
    product.discountPercantage > 0
  ) {
    discountedPrice =
      product.originalPrice -
      (product.discountPercantage * product.originalPrice) / 100;
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <section className="w-full">
      <div className="py-8 bg-[#FAFAFA]">
        <div className="w-4/5 mx-auto flex gap-2">
          <button onClick={handleGoBack}>
            <span className="flex gap-4">
              <ChevronLeft size={24} />
              Go Back
            </span>
          </button>
        </div>
        <div className="w-4/5 mx-auto flex lg:flex-row flex-col my-8">
          <div className="lg:w-1/2 w-full h-[500px]">
            <div className="h-[400px] relative mb-[10px] bg-gray-200 overflow-hidden">
              <img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={handlePreviousImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white"
                disabled={totalImages <= 1}
              >
                <ChevronLeft size={60} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
                disabled={totalImages <= 1}
              >
                <ChevronRight size={60} />
              </button>
            </div>
            <div className="w-full h-[90px] flex justify-between">
              {product?.images?.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className={`w-1/5 bg-gray-300 cursor-pointer ${
                    currentImageIndex === index
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  style={{
                    backgroundImage: `url(${img.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                ></div>
              ))}
              {product?.images?.length > 4 && (
                <div className="w-1/5 bg-gray-200 flex items-center justify-center text-gray-500">
                  +{product.images.length - 4}
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-[500px]">
            <div className="w-4/5 mx-auto my-4 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <div className="flex items-center my-3">
                {[1, 2, 3, 4, 5].map((starPosition) => (
                  <Star
                    key={starPosition}
                    size={20}
                    className={`inline-block ${
                      roundedRating >= starPosition
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill={
                      roundedRating >= starPosition ? "currentColor" : "none"
                    }
                  />
                ))}
                <span className="ml-2 text-sm text-gray-800">
                  ({product.sell_count || 0} Sold)
                </span>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <span
                  className={` ${
                    product.discountPercantage > 0
                      ? "line-through text-gray-400"
                      : "text-gray-400"
                  }`}
                >
                  {formatPrice(product.price)}
                </span>
                {discountedPrice !== null && (
                  <span className="text-black font-bold">
                    {formatPrice(discountedPrice)}
                  </span>
                )}
              </div>
              <span className="flex items-center gap-2">
                <p className="text-gray-600 font-semibold">Availability:</p>
                {product.stock > 0 ? (
                  <p className="text-teal-600 font-bold">
                    In Stock ({product.stock})
                  </p>
                ) : (
                  <p className="text-red-700 font-bold">Out of Stock</p>
                )}
              </span>
              <p className="my-3 text-gray-600 font-semibold text-sm">
                {product.description}
              </p>
              <hr className="w-full mx-auto my-8 border-b border-gray-400" />
              <div className="flex gap-1.5 my-4">
                {colorsArray.map((color, index) => (
                  <div
                    className="w-8 h-8 rounded-full border border-gray-200"
                    key={index}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-sky-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-sky-600 hover:text-black transition-colors duration-200"
                >
                  <p className="text-sm">Add to Cart</p>
                </button>
                <div className="flex items-center gap-3 text-gray-800">
                  <div
                    onClick={handleAddToFavorites}
                    className="bg-white p-2 rounded-full cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-200 shadow"
                  >
                    <Heart size={24} />
                  </div>
                  <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-colors duration-200 shadow">
                    <ShoppingCart size={24} />
                  </div>
                  <div
                    onClick={openImageModal}
                    className="bg-white p-2 rounded-full cursor-pointer hover:bg-slate-800 hover:text-white transition-colors duration-200 shadow"
                  >
                    <Eye size={24} />
                  </div>
                  {isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-white rounded-md p-4 relative">
                        <button
                          onClick={closeImageModal}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                          <X />
                        </button>
                        <img
                          src={modalImageUrl}
                          alt="Product Preview"
                          className="max-w-full max-h-[80vh] object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailSection;
