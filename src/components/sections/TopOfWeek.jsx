function TopOfWeek() {
  return (
    <section className="w-full my-32">
      <div className="w-4/5 lg:h-[700px] flex mx-auto flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 relative overflow-hidden rounded-sm">
          <img
            className="w-full h-full object-cover"
            src="/assets/tpotw/TOPTWLarge.png"
            alt="Left Image (For Mobile First), Top Product Of The Week"
          />
          <div
            className="font-bold font-inter  absolute flex flex-col justify-center items-center gap-4 w-full lg:w-2/3 h-1/2 lg:h-1/3 
          bg-opacity-85 bottom-0 left-0  bg-row1third p-4 rounded-sm text-white"
          >
            <h2 className="text-xl">
              Top Product Of <br />
              The Week
            </h2>
            <a className="border px-4 py-2 rounded-lg border-white hover:bg-white hover:text-row1third transition-all duration-200 cursor-pointer">
              Explore Items
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-8">
          <div className="relative overflow-hidden rounded-sm flex-1">
            <img
              className="w-full h-full object-cover"
              src="/assets/tpotw/TOPTWSmall1.png"
              alt="Right Top Image (For Mobile Second), Top Product Of The Week"
            />
            <div
              className="font-bold font-inter absolute flex flex-col justify-center items-center gap-4 w-full lg:w-2/3 h-1/2 
          bg-opacity-85 bottom-0 left-0 bg-row1third p-4 rounded-sm text-white"
            >
              <h2 className="text-xl">
                Top Product Of <br />
                The Week
              </h2>
              <a className="border px-4 py-2 rounded-lg border-white hover:bg-white hover:text-row1third transition-all duration-200 cursor-pointer">
                Explore Items
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm flex-1">
            <img
              className="w-full h-full object-cover"
              src="/assets/tpotw/TOPTWSmall2.png"
              alt="Right Bottom Image (For Mobile Third), Top Product Of The Week"
            />
            <div
              className="font-bold font-inter absolute flex flex-col justify-center items-center gap-4 w-full lg:w-2/3 h-1/2 
          bg-opacity-85 bottom-0 left-0 bg-row1third p-4 rounded-sm text-white"
            >
              <h2 className="text-xl">
                Top Product Of <br />
                The Week
              </h2>
              <a className="border px-4 py-2 rounded-lg border-white hover:bg-white hover:text-row1third transition-all duration-200 cursor-pointer">
                Explore Items
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopOfWeek;
