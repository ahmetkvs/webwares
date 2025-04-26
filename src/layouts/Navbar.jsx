import { useState } from "react";
import { User, Search, ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Gravatar from "react-gravatar";
import { useSelector } from "react-redux";

function Navbar({ isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector((state) => state.client.user);
  const isLoggedIn = user.token ? true : false;

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navbarContainerClass = ` w-full flex justify-between items-center my-4 px-4 text-sm
    ${isHome ? "" : "lg:w-4/5 lg:mx-auto lg:px-0"}
  `;

  let iconSize = isHome ? 30 : 24;
  const mobileMenuIconSize = 24;

  const conditionalIconVisibility = isHome ? "flex" : "hidden lg:flex";

  return (
    <>
      {/* --- Navbar --- */}
      <nav className={navbarContainerClass}>
        {/* --- Left Section--- */}
        <div className="flex items-center">
          {/* Logo */}
          <h1 className="font-oswald text-row1third font-semibold text-2xl mr-4 sm:mr-8">
            WebWares
          </h1>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <Link to="/shop" className="hover:text-black">
              Shop
            </Link>
            <Link to="/about" className="hover:text-black">
              About
            </Link>
            <Link to="/blog" className="hover:text-black">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-black">
              Contact
            </Link>
            <a href="#" className="hover:text-black">
              Pages
            </a>
          </div>
        </div>

        {/* --- Right Section --- */}
        <div className="flex items-center gap-4 lg:gap-5">
          <span
            className={`flex items-center gap-2 cursor-pointer ${conditionalIconVisibility}`}
          >
            {isLoggedIn ? (
              <>
                <Gravatar
                  email={user.email}
                  size={iconSize}
                  className="rounded-full border border-gray-300 shadow-sm"
                />
                <p className="text-sm hidden lg:block">{user.name}</p>
              </>
            ) : (
              <>
                <User size={iconSize} />
                <p className="text-sm hidden lg:block">Login / Register</p>
              </>
            )}
          </span>

          <span
            className={`items-center cursor-pointer ${conditionalIconVisibility}`}
          >
            <Search size={iconSize} />
          </span>
          <span
            className={`items-center gap-1 sm:gap-2 cursor-pointer ${conditionalIconVisibility}`}
          >
            <ShoppingCart size={iconSize} />
            <p className="text-xs hidden lg:block">1</p>
          </span>
          <span
            className={`items-center gap-1 sm:gap-2 cursor-pointer ${conditionalIconVisibility}`}
          >
            <Heart size={iconSize} />
            <p className="hidden lg:block text-xs">1</p>
          </span>

          <button onClick={toggleMenu} className="ml-1 sm:ml-2 block lg:hidden">
            {isMenuOpen ? <X size={iconSize} /> : <Menu size={iconSize} />}
          </button>
        </div>
      </nav>
      {/*Mobile Menu*/}
      <div
        className={`
          ${isMenuOpen ? "block" : "hidden"}
           lg:hidden mx-4 mb-4 bg-white rounded-md p-6 flex flex-col gap-4 items-center text-lg sm:text-xl font-semibold                       
        `}
      >
        <Link
          to="/"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
        >
          About
        </Link>
        <Link
          to="/blog"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
        >
          Contact
        </Link>
        <Link
          to="#"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
        >
          Pages
        </Link>
        {!isHome && (
          <div className="flex items-center justify-center gap-5 sm:gap-6 mt-4 border-t border-gray-200 pt-4 w-full">
            <a
              href="#"
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600"
            >
              <User size={mobileMenuIconSize} />
            </a>
            <a
              href="#"
              className="flex items-center cursor-pointer hover:text-gray-600"
            >
              <Search size={mobileMenuIconSize} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600"
            >
              <ShoppingCart size={mobileMenuIconSize} />
              <p className="text-xs">1</p>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600"
            >
              <Heart size={mobileMenuIconSize} />
              <p className="text-xs">1</p>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
