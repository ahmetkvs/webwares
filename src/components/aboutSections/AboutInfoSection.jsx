const stats = [
  {
    number: "1.5M",
    title: "Happy Customers",
  },
  {
    number: "150K",
    title: "Monthly Visitors",
  },
  {
    number: "15",
    title: "Countries Worldwide",
  },
  {
    number: "100+",
    title: "Retail Partners",
  },
];

function AboutInfoSection() {
  return (
    <section className="w-full my-16">
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row mb-16">
        <div className="lg:w-1/2 w-full">
          <h3 className="text-red-500 font-bold">
            Excepteur sint occaecat cupidatat
          </h3>
          <h2 className="w-2/3 mt-4 font-bold font-montserrat text-xl">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
          </h2>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <p>
            Problems trying to resolve the conflict between the two major realms
            of <br />
            Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="mt-32 w-4/5 mx-auto flex flex-col lg:flex-row justify-between gap-y-8">
        {stats.map((stat) => {
          return (
            <div className="flex flex-col gap-4 justify-center items-center text-black">
              <h2 className="text-5xl font-bold">{stat.number}</h2>
              <h3 className="font-semibold text-gray-500">{stat.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutInfoSection;
