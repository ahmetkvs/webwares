import DefaultButton from "../buttons/DefaultButton";

function AboutHeroSection() {
  return (
    <section className="w-full my-16">
      <div className="w-4/5 mx-auto flex flex-col gap-16 lg:flex-row lg:h-[500px] h-[700px]">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center justify-center  font-inter">
          <div className="flex flex-col gap-8 lg:items-start items-center">
            <h2 className="font-bold xl:text-lg text-sm text-black">
              ABOUT COMPANY
            </h2>
            <h1 className="font-bold text-5xl xl:text-6xl font-montserrat text-black">
              ABOUT US
            </h1>
            <p className="font-semibold font-montserrat xl:text-lg text-gray-500">
              We know how large objects will act, <br /> but things on a small
              scale
            </p>
            <DefaultButton size="lg">Get Quote Now</DefaultButton>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex h-full flex-col justify-center items-center">
          <div className="bg-rose-200 w-96 h-96 lg:w-[400px] lg:h-[400px] rounded-full relative">
            <div className="bg-rose-200 w-12 h-12 rounded-full"></div>
            <img
              className="absolute -bottom-10 h-[500px] object-cover"
              src="/assets/hero/aboutHeroImg.png"
              alt="About Page Hero Img"
            />
            <div className="w-8 h-8 bg-rose-200 rounded-full absolute -right-10 bottom-1/2 translate-y-1/2"></div>
            <div className="w-4 h-4 bg-violet-400 rounded-full absolute right-0"></div>
            <div className="w-4 h-4 bg-violet-400 rounded-full absolute left-0 bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
