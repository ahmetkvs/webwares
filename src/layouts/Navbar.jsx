import { useState } from "react";
import { User, Search, ShoppingCart, Heart, Menu, X } from "lucide-react";

function Navbar({ isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const homeNavbarClass =
    "max-w-full flex justify-between items-center my-4 mx-4";
  const otherNavbarClass =
    "lg:w-4/5 flex justify-between items-center my-4 lg:mx-auto mx-4 text-sm";

  let iconSize = isHome ? 30 : 24;

  return (
    <>
      {/* --- Navbar --- */}
      <nav className={isHome ? homeNavbarClass : otherNavbarClass}>
        {/* --- Left Section (Logo & Desktop Links) --- */}
        <div className="flex items-center">
          {/* Logo */}
          <h1 className="font-oswald text-row1third font-semibold text-2xl mr-8">
            WebWares
          </h1>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="hover:text-black">
              Home
            </a>
            <a href="#" className="hover:text-black">
              Shop
            </a>
            <a href="#" className="hover:text-black">
              About
            </a>
            <a href="#" className="hover:text-black">
              Blog
            </a>
            <a href="#" className="hover:text-black">
              Contact
            </a>
            <a href="#" className="hover:text-black">
              Pages
            </a>
          </div>
        </div>

        {/* --- Right Section (Icons & Mobile Hamburger) --- */}
        <div className="flex items-center gap-4 lg:gap-5">
          <span className="flex items-center gap-2 cursor-pointer">
            <User size={iconSize} />
            <p className="text-sm hidden lg:block">Login / Register</p>
          </span>
          <span className="flex items-center cursor-pointer">
            <Search size={iconSize} />
          </span>
          <span className="flex items-center gap-2 cursor-pointer">
            <ShoppingCart size={iconSize} />
            <p className="text-xs hidden lg:block">1</p>
          </span>
          <span className="flex items-center gap-2 cursor-pointer">
            <Heart size={iconSize} />
            <p className="hidden lg:block text-xs">1</p>
          </span>

          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="ml-2 block lg:hidden">
            {isMenuOpen ? <X size={iconSize} /> : <Menu size={iconSize} />}
          </button>
        </div>
      </nav>
      {/*Mobile Menu*/}
      <div
        className={`
          ${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden mx-4 mb-4 bg-white p-6 flex flex-col gap-4 items-center text-2xl font-semibold                       
        `}
      >
        <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
          Home
        </a>
        <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
          Shop
        </a>
        <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
          About
        </a>
        <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
          Blog
        </a>
        <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
          Contact
        </a>
        <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
          Pages
        </a>
      </div>
    </>
  );
}

export default Navbar;
