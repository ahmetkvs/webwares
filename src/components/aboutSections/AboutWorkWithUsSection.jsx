function AboutWorkWithUsSection() {
  return (
    <section className="w-full">
      <div className="w-full h-[600px] bg-row3sec flex lg:flex-row flex-col">
        <div className="lg:w-3/5 w-full flex flex-col justify-center items-center">
          <div className="w-2/3 mx-auto mt-32 lg:mt-0 text-white">
            <h3 className="font-semibold">WORK WITH US</h3>
            <h2 className="text-4xl font-bold my-6">Now Let's grow Yours</h2>
            <p className="text-sm mb-4">
              The gradual accumulation of information about atomic and <br />
              small-scale behavior during the first quarter of the 20th century
            </p>
            <button className="border px-8 py-3 rounded-md cursor-pointer hover:bg-white hover:text-row3sec transition-colors duration-200">
              Button
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 w-full h-full hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src="/assets/about/workwithUs.jpeg"
            alt="Work With Us Image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutWorkWithUsSection;
