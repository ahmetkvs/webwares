import PostCard from "../Cards/PostCard";

function FeaturedPostsSection() {
  const samplePost = {
    imgSrc: "https://picsum.photos/209/404?random=25",
    title: "Advanced Cloud Yelling",
    category: "Meteorological Motivation",
    desc: "Techniques to effectively voice your opinions at unresponsive cumulonimbus formations. Results may vary.",
    downloadCount: 1024,
    rating: 4.9,
    colorsArray: ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"],
    hours: "16h",
    lessonsCount: 5,
    difficulty: "Intermediate",
    learnMoreLink: "#",
    originalPrice: 59.99,
    discountPercantage: 30,
  };
  return (
    <section className="w-full my-16">
      <div className="w-4/5 mx-auto flex flex-col items-center">
        {/* Headers */}
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-[#23a6f0] font-bold text-sm">Practice Advice</h3>
          <h2 className="text-3xl font-bold text-black">Featured Posts</h2>
        </div>
        {/* PostCards */}
        <div className="flex my-16 gap-8 flex-col lg:flex-row">
          <PostCard post={samplePost} />
          <PostCard post={samplePost} />
        </div>
      </div>
    </section>
  );
}

export default FeaturedPostsSection;
