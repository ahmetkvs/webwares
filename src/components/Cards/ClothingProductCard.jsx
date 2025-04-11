import formatPrice from "../../helper/formatPrice";

function ProductCard({
  imgSrc,
  category,
  title,
  originalPrice, // Should be a number
  discountPercantage = 0,
}) {
  let discountedPrice = null;
  if (typeof originalPrice === "number" && discountPercantage > 0) {
    discountedPrice =
      originalPrice - (discountPercantage * originalPrice) / 100;
  }

  return (
    <div className="flex flex-col text-center gap-4">
      {/* Image*/}
      <img
        className="lg:w-[183px] lg:h-[238px] w-full h-auto object-cover mx-auto"
        src={imgSrc}
        alt={`${title} - ${category}`}
      />
      {/* Text Content */}
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text font-bold">{title}</h3>
        <p className="text text-gray-600">{category}</p>

        {/* Price Area */}
        <div className="flex justify-center items-center gap-2">
          <span
            className={` ${
              discountPercantage > 0
                ? "line-through text-gray-400"
                : "text-gray-400"
            }`}
          >
            {formatPrice(originalPrice)}
          </span>
          {discountedPrice !== null && (
            <span className="text-teal-700 font-bold">
              {formatPrice(discountedPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
