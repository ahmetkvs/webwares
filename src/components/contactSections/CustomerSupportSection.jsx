import { Phone, MessageSquare, HelpCircle, ChevronsDown } from "lucide-react"; // Swapped icons for better fit
import DefaultButton from "../buttons/DefaultButton";

function CustomerSupportSection() {
  return (
    <section className="w-full my-16 lg:my-24">
      <div className="w-11/12 md:w-10/12 lg:w-4/5 mx-auto">
        <div className="text-slate-800 font-bold flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <p className="font-inter text-sm mb-2 text-gray-500">
            YOUR CLOSET CONUNDRUMS SOLVED
          </p>
          <h2 className="text-3xl md:text-4xl">Where Do Your Socks Go?</h2>{" "}
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-y-4">
          <div className="w-full lg:w-1/3 flex flex-col justify-start items-center text-center p-8 md:p-10 gap-4">
            <Phone size={50} className="text-sky-600 mb-2" strokeWidth={1.5} />
            <div className="text-sm text-gray-600 min-h-[40px]">
              <p>Lost a button? Call the experts.</p>
              <p>We also translate cat meows.</p>
            </div>
            <p className="font-semibold text-lg mt-2 text-slate-800">
              Sock Sorting Hotline
            </p>
            <button className="mt-4 text-sky-600 border border-sky-600 py-2.5 px-8 rounded-3xl hover:bg-sky-600 hover:text-white transition-colors duration-200 font-semibold text-sm">
              Dial-a-Style
            </button>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-start items-center text-center p-8 md:p-10 gap-4 bg-slate-800 text-white">
            <MessageSquare
              size={50}
              className="text-sky-400 mb-2"
              strokeWidth={1.5}
            />
            <div className="text-sm text-gray-300 min-h-[40px]">
              <p>Ask our Style Sloth for advice.</p>
              <p>We reply faster than a stain sets.</p>
            </div>
            <p className="font-semibold text-lg mt-2 text-white">
              Fashion Confessional
            </p>
            <button className="mt-4 text-white bg-sky-600 border border-sky-600 py-2.5 px-8 rounded-3xl hover:bg-sky-700 transition-colors duration-200 font-semibold text-sm">
              Confess Here
            </button>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-start items-center text-center p-8 md:p-10 gap-4">
            <HelpCircle
              size={50}
              className="text-sky-600 mb-2"
              strokeWidth={1.5}
            />
            <div className="text-sm text-gray-600 min-h-[40px]">
              <p>Why ARE pockets sometimes fake?</p>
              <p>Consult the Oracle of Outfits.</p>
            </div>
            <p className="font-semibold text-lg mt-2 text-slate-800">
              Existential Style FAQs
            </p>
            <button className="mt-4 text-sky-600 border border-sky-600 py-2.5 px-8 rounded-3xl hover:bg-sky-600 hover:text-white transition-colors duration-200 font-semibold text-sm">
              Seek Wisdom
            </button>
          </div>
        </div>
        <div className="mt-16 lg:mt-24 flex flex-col items-center text-center text-slate-800">
          <ChevronsDown
            size={30}
            className="text-sky-500 mb-4 animate-bounce"
          />
          <p className="font-inter text-sm mb-2 text-gray-500 font-semibold">
            YOUR WARDROBE IS CALLING (PROBABLY)
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Dress Up!
          </h3>
          <DefaultButton>Try it now!</DefaultButton>
        </div>
      </div>
    </section>
  );
}

export default CustomerSupportSection;
