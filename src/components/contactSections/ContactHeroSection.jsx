import { CirclePlay, Facebook, Instagram, Twitter } from "lucide-react";

function ContactHeroSection() {
  const imgSrc = "/assets/hero/contactHeroFull.png";
  return (
    <section className="w-full">
      <div className="w-4/5 mx-auto flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <div className="flex flex-col lg:justify-start justify-center lg:text-start text-center text-slate-800 font-bold gap-6">
            <h2 className="font-inter text-sm">CONTACT US</h2>
            <h1 className="text-5xl">
              Get in touch <br /> today!
            </h1>
            <p className="text-gray-500 font-semibold text-sm">
              We know how large objects will act, <br /> but things on a small
              scale
            </p>
            <p>Phone ; +451 215 215</p>
            <p>Fax : +451 215 215</p>
            <div className="flex gap-4 items-center justify-center lg:justify-start">
              <a href="#">
                <Instagram size={28} />
              </a>
              <a href="#">
                <CirclePlay size={28} />
              </a>
              <a href="#">
                <Facebook size={28} />
              </a>
              <a href="#">
                <Twitter size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <div>
            <img className="w-full h-auto object-contain" src={imgSrc} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeroSection;
