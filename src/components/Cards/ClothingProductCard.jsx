import { useSelector } from "react-redux";
import formatPrice from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import { findCategoryById } from "../../utils/formatCategories";
import slugify from "../../utils/slugify";

function ProductCard({
  id,
  images,
  name,
  price,
  category_id,
  discountPercantage = 0,
  variant = "grid", //grid or list
}) {
  const categories = useSelector((state) => state.product.categories || []);

  const category = findCategoryById(categories, category_id);
  console.log(category);

  let discountedPrice = null;
  if (typeof price === "number" && discountPercantage > 0) {
    discountedPrice = price - (discountPercantage * price) / 100;
  }

  //Test colors array
  const colorsArray = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];

  const isList = variant === "list";

  const imgSrc = images?.[0]?.url || "https://picsum.photos/183/238?random=1";
  console.log(
    `/shop/${slugify(category.gender)}/${slugify(category.title)}/${slugify(
      category.id
    )}/${slugify(name)}/${slugify(id)}`
  );

  return (
    <Link
      to={`/shop/${slugify(category.gender)}/${slugify(
        category.title
      )}/${slugify(category.id)}/${slugify(name)}/${slugify(id)}`}
      className="hover:bg-slate-100 transition-colors duration-700"
    >
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
          alt={name}
        />
        {/* Text Content */}
        <div
          className={`flex flex-col gap-2 ${
            isList ? "items-start" : "items-center"
          }`}
        >
          <h3 className="text font-bold">{name}</h3>
          <p className="text text-gray-600">{category.title}</p>

          {/* Price Area */}
          <div className="flex items-center gap-2">
            <span
              className={` ${
                discountPercantage > 0
                  ? "line-through text-gray-400"
                  : "text-gray-400"
              }`}
            >
              {formatPrice(price)}
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
    </Link>
  );
}

export default ProductCard;
