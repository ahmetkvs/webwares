import { CirclePlay, Facebook, Instagram, Twitter } from "lucide-react";
import EmailSubscribe from "../inputs/EmailSubsribe";

function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[#fafafa] text-gray-700 pt-8 pb-8">
      {/* First row: Logo and social icons */}
      <div className="w-4/5 mx-auto flex flex-wrap justify-between items-center gap-4 mb-8">
        {/* Logo */}
        <h1 className="font-oswald font-bold text-2xl text-gray-800">
          WebWares
        </h1>
        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <Twitter size={24} />
          </a>
        </div>
      </div>

      {/* Second row: Links and contact */}
      <div className="w-full bg-white py-10 border-t border-b border-gray-200">
        <div className="w-4/5 mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-6">
          <div className="flex flex-col gap-3">
            {" "}
            <h2 className="font-bold text-base mb-2 text-gray-800">
              Company Info
            </h2>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Career
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              We are hiring
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Blog
            </a>
          </div>
          {/* Legal Column */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-base mb-2 text-gray-800">Legal</h2>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Refund Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Cookie Policy
            </a>
          </div>
          {/* Features Column */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-base mb-2 text-gray-800">Features</h2>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Business Marketing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              User Analytic
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Live Chat
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Unlimited Support
            </a>
          </div>
          {/* Resources Column */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-base mb-2 text-gray-800">
              Resources
            </h2>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              IOS & Android
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Watch a Demo
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm font-semibold"
            >
              API
            </a>
          </div>
          {/* Get In Touch Column */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-base mb-2 text-gray-800">
              Get In Touch
            </h2>
            {/* Input Group */}
            <EmailSubscribe />
          </div>
        </div>
      </div>

      {/* Third row: Copyright */}
      <div className="w-4/5 mx-auto mt-8 text-center md:text-left">
        <p className="text-sm text-gray-500 font-semibold">
          © {new Date().getFullYear()} WebWares by Ahmet Kavas. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
