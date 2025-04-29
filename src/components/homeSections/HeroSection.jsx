import { Link } from "react-router-dom";
import DefaultButton from "../buttons/DefaultButton";

function HeroSection() {
  const heroImageUrl = "/assets/hero/girl.png";

  return (
    <section className="w-full my-16">
      <div className="w-5/6 mx-auto  bg-gradient-to-r rounded-3xl from-cyan-300  to-green-200 flex flex-col gap-16 lg:flex-row lg:h-[500px] h-[800px]">
        <div className="w-full lg:w-1/2 pt-8 flex flex-col gap-8 items-center justify-center  font-inter">
          <div className="flex flex-col gap-8 lg:items-start items-center">
            <h2 className="font-bold xl:text-lg text-sm text-black">
              SHOP HERE
            </h2>
            <h1 className="font-bold text-5xl xl:text-6xl font-montserrat text-black">
              WEBWARES
            </h1>
            <p className="font-semibold font-montserrat xl:text-lg text-gray-500">
              We know how large objects will act, <br /> but things on a small
              scale
            </p>
            <DefaultButton size="lg">
              <Link to="/shop">Shop Now</Link>
            </DefaultButton>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex h-full flex-col  items-center">
          <div className="bg-white w-96 h-96 lg:w-[400px] lg:h-[400px] rounded-full relative">
            <div className="bg-white w-12 h-12 rounded-full"></div>
            <img
              className="absolute lg:-bottom-24 -bottom-16 h-[400px] overflow-visible object-cover"
              src={heroImageUrl}
              alt="About Page Hero Img"
            />
            <div className="w-8 h-8 bg-white rounded-full absolute -right-10 bottom-1/2 translate-y-1/2"></div>
            <div className="w-4 h-4 bg-violet-400 rounded-full absolute right-0"></div>
            <div className="w-4 h-4 bg-violet-400 rounded-full absolute left-0 bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
