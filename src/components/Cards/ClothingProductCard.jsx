import formatPrice from "../../utils/formatPrice";

function ProductCard({
  imgSrc,
  category,
  title,
  originalPrice, // Should be a number
  discountPercantage = 0,
  variant = "grid", //grid or list
}) {
  let discountedPrice = null;
  if (typeof originalPrice === "number" && discountPercantage > 0) {
    discountedPrice =
      originalPrice - (discountPercantage * originalPrice) / 100;
  }

  //Test colors array
  const colorsArray = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];

  const isList = variant === "list";

  return (
    <div
      className={`${
        isList
          ? "flex flex-col sm:flex-row items-center gap-6 text-left p-4 border rounded-lg shadow-sm"
          : "flex flex-col text-center gap-4"
      }`}
    >
      {/* Image*/}
      <img
        className={`object-cover ${
          isList
            ? "w-[183px] h-[238px] sm:w-[150px] sm:h-[200px]"
            : "lg:w-[183px] lg:h-[238px] w-full h-auto mx-auto"
        }`}
        src={imgSrc}
        alt={`${title} - ${category}`}
      />
      {/* Text Content */}
      <div
        className={`flex flex-col gap-2 ${
          isList ? "items-start" : "items-center"
        }`}
      >
        <h3 className="text font-bold">{title}</h3>
        <p className="text text-gray-600">{category}</p>

        {/* Price Area */}
        <div className="flex items-center gap-2">
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

        <div className="flex gap-1.5">
          {colorsArray.map((color, index) => (
            <div
              className="w-4 h-4 rounded-full border border-gray-200"
              key={index}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
