import { BrickWall, TrendingUp, BookOpenText } from "lucide-react";
import Service from "./Service";

function BestServices() {
  return (
    <section className="my-32 w-full">
      <div className="text-center mb-16">
        <h3 className="text-lg text-gray-600 mb-2">Our Top-Secret Stash</h3>
        <h2 className="text-2xl font-bold mb-2">THE BEST SERVICES</h2>
        <p className="text-sm text-gray-500">
          We resolved the conflict between 'awesome stuff' and 'finding awesome
          stuff'. You're welcome.
        </p>
      </div>
      <div className="w-3/5 mx-auto flex flex-col lg:flex-row gap-16">
        <Service
          header={"Zero Learning Curve"}
          desc={
            "So intuitive, you'll think you've used it in a past life. Effortless Browse, guaranteed."
          }
        >
          <BookOpenText size={80} color="#23a6f0" />
        </Service>
        <Service
          header={"Fort Knox Checkout"}
          desc={
            "Your data's locked down tighter than a pickle jar. Shop securely, worry less."
          }
        >
          <BrickWall size={80} color="#23a6f0" />
        </Service>
        <Service
          header={"To The Moon!"}
          desc={
            " Watch your satisfaction levels skyrocket. We aim high, just like your expectations."
          }
        >
          <TrendingUp size={80} color="#23a6f0" />
        </Service>
      </div>
    </section>
  );
}

export default BestServices;
