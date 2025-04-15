function FeaturedProductsSection() {
  return (
    <section className="my-16 w-full">
      <div className="w-4/5 mx-auto flex flex-col-reverse gap-y-16 lg:flex-row">
        {/* Imgs, Left */}
        <div className="w-full lg:w-1/2 flex gap-4 h-[500px]">
          <img
            className="w-2/5 object-cover rounded-sm"
            src="/assets/featuredPosts/featuredPostsImg1.jpeg"
            alt="Featured Post Img 1"
          />
          <img
            className="w-3/5 object-cover rounded-sm"
            src="/assets/featuredPosts/FeaturedPostsImage2.jpeg"
            alt="Featured Post Img 2"
          />
        </div>
        {/* Text, Right */}
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <div className="flex flex-col lg:text-left gap-4 max-w-md lg:mx-24">
            <h3 className="text-[#23a6f0] font-bold text-lg">
              Featured Products
            </h3>
            <h2 className="text-4xl font-bold text-black">Stuff We Liked</h2>
            <p>
              Built to be enjoyed. We had fun making it, hope you have fun using
              it!
            </p>
            <p>
              Combining great finds with a smooth experience. Less hassle, more
              "add to cart" happiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProductsSection;
