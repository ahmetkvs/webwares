import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  Download,
  Clock,
  ChartArea,
  Pickaxe,
  StepForward,
} from "lucide-react";
import formatPrice from "../../helper/formatPrice";

function PostCard({ post }) {
  const {
    imgSrc,
    title,
    category,
    desc,
    downloadCount,
    rating,
    colorsArray = [],
    hours,
    lessonsCount,
    difficulty,
    learnMoreLink = "#",
    originalPrice,
    discountPercantage = 0,
  } = post;

  let calculatedDiscountPrice = null;
  if (typeof originalPrice === "number" && discountPercantage > 0) {
    calculatedDiscountPrice = originalPrice * (1 - discountPercantage / 100);
  }

  return (
    <div className="flex flex-col lg:flex-row lg:w-1/2 rounded-lg overflow-hidden bg-white mb-6">
      {/* Image Container */}
      <div className="relative w-full lg:w-[209px] lg:flex-shrink-0 h-64 sm:h-72 md:h-80 lg:h-[404px]">
        <img
          className="object-cover w-full h-full"
          src={imgSrc}
          alt={title + " " + category}
        />
        {discountPercantage > 0 && (
          <div className="absolute top-4 left-4 bg-red-400 px-3 text-sm py-1 font-semibold text-white rounded-md z-10">
            Sale
          </div>
        )}
        <div className="flex items-center gap-3 absolute bottom-4 left-8 z-10">
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-200 shadow">
            <Heart size={20} />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-colors duration-200 shadow">
            <ShoppingCart size={20} />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-slate-800 hover:text-white transition-colors duration-200 shadow">
            <Eye size={20} />
          </div>
        </div>
      </div>

      {/* Text Content Container*/}
      <div className="w-full flex flex-col gap-3 p-4">
        {/* Category and Rating */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#23a6f0] font-bold">{category}</span>
          <div className="flex justify-center items-center gap-1 bg-slate-800 rounded-xl px-2 py-0.5">
            <Star size={12} color="#ffce31" fill="#ffce31" />
            <span className="text-xs text-white">{rating}</span>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-black font-semibold text-lg">{title}</h3>
        {/* Description */}
        <p className="text-sm text-gray-600">{desc}</p>
        {/* Download Row */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Download size={16} />
          <span>{downloadCount} Sales</span>
        </div>
        {/* Price Row */}
        <div className="flex gap-2 font-semibold items-baseline">
          <span
            className={`text-gray-500 ${
              discountPercantage > 0 ? "line-through text-sm" : "text-base"
            }`}
          >
            {formatPrice(originalPrice)}
          </span>
          {calculatedDiscountPrice !== null && (
            <span className="text-green-700 text-base">
              {formatPrice(calculatedDiscountPrice)}
            </span>
          )}
        </div>
        {/* Colors Row */}
        <div className="flex gap-1.5">
          {colorsArray.map((color, index) => (
            <div
              className="w-4 h-4 rounded-full border border-gray-200"
              key={index}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        {/* Meta Row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
          <div className="flex gap-1 items-center">
            <Clock size={16} color="#4cb7f3" />
            <span>{hours} hrs</span>
          </div>
          <div className="flex gap-1 items-center">
            <ChartArea size={16} color="#e98c58" />
            <span>{lessonsCount} Lessons</span>
          </div>
          <div className="flex gap-1 items-center">
            <Pickaxe size={16} color="#23856d" />
            <span>{difficulty}</span>
          </div>
        </div>
        {/* Learn More*/}
        <a
          className="w-full sm:w-auto self-start flex gap-2 font-bold text-[#23a6f0] px-4 py-2 border 
                       border-[#23a6f0] rounded-3xl justify-center items-center
                       hover:bg-[#23a6f0] hover:text-white transition-colors duration-200"
          href={learnMoreLink}
        >
          Learn More
          <StepForward size={18} />
        </a>
      </div>
    </div>
  );
}

export default PostCard;
