import { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

const mockReviews = [
  {
    id: 1,
    author: "Alice M.",
    rating: 5,
    date: "2025-04-15",
    text: "Absolutely fantastic! Fits perfectly and looks great. Highly recommend.",
  },
  {
    id: 2,
    author: "Bob K.",
    rating: 4,
    date: "2025-04-14",
    text: "Really nice quality for the price. Shipping was fast too.",
  },
  {
    id: 3,
    author: "Charlie P.",
    rating: 5,
    date: "2025-04-12",
    text: "Exceeded my expectations! Will buy again.",
  },
  {
    id: 4,
    author: "Diana L.",
    rating: 3,
    date: "2025-04-11",
    text: "It's okay. The color was a bit different than pictured, but it fits alright.",
  },
  {
    id: 5,
    author: "Ethan R.",
    rating: 5,
    date: "2025-04-10",
    text: "Love it! So comfortable and stylish.",
  },
  {
    id: 6,
    author: "Fiona G.",
    rating: 4,
    date: "2025-04-09",
    text: "Good value. Seems durable so far.",
  },
  {
    id: 7,
    author: "George H.",
    rating: 2,
    date: "2025-04-08",
    text: "Didn't fit well, had to return it. Material felt a bit cheap.",
  },
  {
    id: 8,
    author: "Hannah S.",
    rating: 5,
    date: "2025-04-07",
    text: "Perfect! Exactly what I was looking for.",
  },
];
const totalReviews = mockReviews.length;
const REVIEWS_TO_SHOW_INCREMENT = 2;
const INITIAL_REVIEWS_COUNT = 2;

function ReviewsTab() {
  const [visibleReviewCount, setVisibleReviewCount] = useState(
    INITIAL_REVIEWS_COUNT
  );

  const handleLoadMore = () => {
    setVisibleReviewCount((prevCount) => {
      const newCount = prevCount + REVIEWS_TO_SHOW_INCREMENT;
      return Math.min(newCount, totalReviews);
    });
  };

  const handleCollapse = () => {
    setVisibleReviewCount(INITIAL_REVIEWS_COUNT);
  };
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">
        Customer Reviews ({totalReviews})
      </h3>
      <div className="space-y-6">
        {mockReviews.slice(0, visibleReviewCount).map((review) => {
          const roundedRating = Math.round(review.rating || 0);
          return (
            <div
              key={review.id}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <div className="flex items-center mb-1">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((starPosition) => (
                    <Star
                      key={starPosition}
                      size={16}
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
                </div>
                <span className="ml-auto text-xs text-gray-500">
                  {review.date}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                {review.author}
              </p>
              <p className="text-sm text-gray-600">{review.text}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center gap-4">
        {visibleReviewCount < totalReviews && (
          <button
            onClick={handleLoadMore}
            className="border border-blue-600 text-blue-600 px-6 py-2 text-sm font-semibold rounded hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            Load More <ChevronDown size={16} /> {/* Added Icon */}
          </button>
        )}
        {visibleReviewCount > INITIAL_REVIEWS_COUNT && (
          <button
            onClick={handleCollapse}
            className="border border-gray-500 text-gray-500 px-6 py-2 text-sm font-semibold rounded hover:bg-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            Collapse <ChevronUp size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ReviewsTab;
