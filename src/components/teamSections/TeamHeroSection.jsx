import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function TeamHeroSection() {
  return (
    <section className="w-full pb-16">
      <div className="text-center px-4">
        <h3 className="mt-16 text-sm font-semibold font-inter text-gray-600">
          WHAT WE DO
        </h3>
        <h1 className="my-3 text-4xl lg:text-5xl text-slate-800 font-bold">
          Innovation tailored for you
        </h1>
      </div>
      <div className="w-full flex gap-1.5 justify-center items-center my-8 text-sm">
        <Link
          to="/"
          className="font-semibold text-slate-700 hover:text-sky-600"
        >
          Home
        </Link>
        <ChevronRight className="text-gray-400" size={16} strokeWidth={2} />
        <span className="text-gray-500">Team</span>
      </div>
      <div className="w-full">
        <div className="flex lg:flex-row flex-col gap-2">
          <div className="w-full lg:w-1/2">
            <div className="bg-red-500 w-full aspect-[3/4] lg:aspect-auto lg:h-full"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full flex gap-2">
              <div className="w-1/2 flex flex-col gap-2">
                <div className="w-full bg-gray-300 aspect-square"></div>
                <div className="w-full bg-gray-400 aspect-square"></div>
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <div className="w-full bg-gray-500 aspect-square"></div>
                <div className="w-full bg-gray-600 aspect-square"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamHeroSection;
