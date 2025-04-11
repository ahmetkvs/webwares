import DefaultButton from "../buttons/DefaultButton";

function HeroSection() {
  const heroImageUrl = "/assets/hero/girl.png";

  return (
    <section className="w-full my-16">
      <div className="flex flex-col lg:flex-row w-5/6 mx-auto bg-gradient-to-r rounded-3xl from-cyan-300  to-green-200">
        {/*Left Col*/}
        <div className="px-6 py-10 lg:pl-16 lg:py-16 lg:pr-0 text-center lg:text-left w-full flex flex-col lg:w-1/2 gap-6 font-inter">
          <h2 className="text-row4sec font-semibold text-sm">SUMMER 2025</h2>
          <h1 className="font-semibold text-row1third text-4xl lg:text-5xl">
            NEW COLLECTION
          </h1>
          <p className="text-slate-600 font-semibold">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <span>
            <DefaultButton size="lg">SHOP NOW</DefaultButton>
          </span>
        </div>
        {/*Right Col */}
        <div className="w-full lg:w-1/2 relative min-h-96">
          {/*Small White Circle */}
          <div
            className="bg-white absolute rounded-full w-8 h-8 bottom-56 
          lg:w-16 lg:h-16 lg:left-auto lg:bottom-auto lg:top-0 lg:right-80 z-0"
          ></div>
          {/*Large White Circle*/}
          <div
            className="absolute z-0 bg-white rounded-full w-64 h-64 bottom-4 left-1/2 -translate-x-1/2
          lg:top-0 lg:right-0 lg:left-auto lg:bottom-auto lg:translate-x-0 lg:w-80 lg:h-80"
          ></div>
          <img
            className="absolute z-10 max-w-lg max-h-full lg:object-contain bottom-0 left-1/2 -translate-x-1/2
             overflow-hidden lg:overflow-visible lg:left-auto lg:-right-28 lg:translate-x-0 lg:max-w-none"
            src={heroImageUrl}
            alt="Hero Image"
          />
          <div className="lg:w-3 lg:h-3 w-2 h-2 absolute bottom-72 right-12  bg-violet-500 rounded-full lg:-right-16 lg:top-16"></div>
          <div className="lg:w-6 lg:h-6 w-3 h-3 absolute bottom-60 -right-6 bg-white rounded-full lg:-right-12 lg:bottom-60 z-20"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
