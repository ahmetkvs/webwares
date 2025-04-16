import { Check } from "lucide-react";

function ProductDescriptionTab() {
  const placeholderImageUrl = "https://picsum.photos/id/1012/600/400";
  const placeholderText1 =
    "Behold! This marvel of modern engineering (or possibly just clever gluing) is guaranteed to solve at least 1.5 of your daily problems. Side effects may include sudden bursts of interpretive dance and an uncanny ability to find lost socks.";
  const placeholderText2 =
    "Crafted under the light of a full moon by artisanal squirrels, this item boasts features so advanced, we barely understand them ourselves. Use responsibly, or don't. We're not your supervisor.";

  const features1 = [
    "Surprisingly aerodynamic",
    "Approved by 3 out of 4 dentists who moonlight as stunt doubles",
    "Whisper quiet (unless it's Tuesday)",
  ];
  const features2 = [
    "Slightly hydrophobic",
    "May contain traces of existential wonder",
    "100% chance of being an object",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-1">
        <img
          src={placeholderImageUrl}
          alt="A surprisingly relevant placeholder"
          className="w-full h-auto object-cover rounded shadow"
        />
      </div>

      <div className="md:col-span-2 space-y-4">
        <h3 className="text-xl font-semibold">
          The Unfolding Saga of This Thingamajig
        </h3>
        <p className="text-gray-600">{placeholderText1}</p>
        <p className="text-gray-600">{placeholderText2}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">
              Why It's Probably Awesome
            </h4>
            <ul className="list-none space-y-1 text-gray-600">
              {features1.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    size={18}
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Technical Gibberish</h4>
            <ul className="list-none space-y-1 text-gray-600">
              {features2.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    size={18}
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionTab;
