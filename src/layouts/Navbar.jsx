import { useState, useEffect } from "react";
import {
  User,
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Gravatar from "react-gravatar";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/client/clientActions";
import { fetchCategories } from "../redux/product/productActions";
import { formatCategories } from "../utils/formatCategories";
import ShoppingCartDropdown from "../components/dropDowns/ShoppingCartDropDown";
import FavoritesDropdown from "../components/dropDowns/FavoritesDropDown";

function Navbar({ isHome }) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isUSerDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isFavoritesDropdownOpen, setIsFavoritesDropdownOpen] = useState(false);
  const [isShoppingCartDropdownOpen, setIsShoppingCartDropdownOpen] =
    useState(false);

  const favoritesCount = useSelector(
    (state) => state.shoppingCart.favorites.length
  );
  const cartItemCount = useSelector((state) =>
    state.shoppingCart.cart.reduce((sum, item) => sum + item.count, 0)
  );

  const closeAllDropdowns = () => {
    setIsShopDropdownOpen(false);
    setIsUserDropdownOpen(false);
    setIsFavoritesDropdownOpen(false);
    setIsShoppingCartDropdownOpen(false);
    setIsMenuOpen(false);
  };

  function toggleShopDropdown() {
    if (isShopDropdownOpen) {
      setIsShopDropdownOpen(false);
    } else {
      closeAllDropdowns();
      setIsShopDropdownOpen(true);
    }
  }
  function toggleUserDropdown() {
    if (isUSerDropdownOpen) {
      setIsUserDropdownOpen(false);
    } else {
      closeAllDropdowns();
      setIsUserDropdownOpen(true);
    }
  }
  function toggleFavoritesDropdown() {
    if (isFavoritesDropdownOpen) {
      setIsFavoritesDropdownOpen(false);
    } else {
      closeAllDropdowns();
      setIsFavoritesDropdownOpen(true);
    }
  }
  function toggleShoppingCartDropdown() {
    if (isShoppingCartDropdownOpen) {
      setIsShoppingCartDropdownOpen(false);
    } else {
      closeAllDropdowns();
      setIsShoppingCartDropdownOpen(true);
    }
  }

  function handleLogout() {
    dispatch(logoutUser());
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.product.categories || []);
  const splitCategories = formatCategories(categories);

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
          <Link to="/" onClick={closeAllDropdowns}>
            <h1 className="font-oswald text-row1third font-semibold text-2xl mr-4 sm:mr-8">
              WebWares
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-black"
              onClick={closeAllDropdowns}
            >
              Home
            </Link>
            <div className="relative">
              <div className="flex items-center gap-2">
                <Link to="/shop" onClick={closeAllDropdowns}>
                  <span className="hover:text-black">Shop</span>
                </Link>
                <button
                  onClick={toggleShopDropdown}
                  className="flex items-center gap-1 hover:text-black"
                >
                  <ChevronDown
                    size={iconSize / 1.5}
                    className={`ml-2 transition-transform duration-200 ${
                      isShopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {isShopDropdownOpen && (
                <div className="absolute left-0 mt-2 lg:w-96 bg-white rounded-md shadow-lg py-2 z-50">
                  <div className="flex mx-2 my-2 font-inter text-lg font-semibold text-gray-500">
                    <div className="w-1/2 flex flex-col gap-2">
                      <h4 className="font-bold text-black mb-4">Female</h4>
                      {splitCategories.female.map((category) => (
                        <Link
                          key={category.id}
                          to={category.link}
                          onClick={closeAllDropdowns}
                        >
                          <p className="hover:text-black hover:font-bold transition-colors duration-200">
                            {category.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                      <h4 className="font-bold text-black mb-4">Male</h4>
                      {splitCategories.male.map((category) => (
                        <Link
                          key={category.id}
                          to={category.link}
                          onClick={closeAllDropdowns}
                        >
                          <p className="hover:text-black hover:font-bold transition-colors duration-200">
                            {category.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="hover:text-black"
              onClick={closeAllDropdowns}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="hover:text-black"
              onClick={closeAllDropdowns}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-black"
              onClick={closeAllDropdowns}
            >
              Contact
            </Link>
            <Link
              to="#"
              className="hover:text-black"
              onClick={closeAllDropdowns}
            >
              Pages
            </Link>
          </div>
        </div>

        {/* --- Right Section --- */}
        <div className="flex items-center gap-4 lg:gap-5">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={toggleUserDropdown}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Gravatar
                  email={user.email}
                  size={iconSize}
                  className="rounded-full border border-gray-300 shadow-sm"
                />
                <p className="text-sm hidden lg:block">{user.name}</p>
              </button>

              {isUSerDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllDropdowns}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeAllDropdowns();
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" onClick={closeAllDropdowns}>
              <span className="flex items-center gap-2">
                <User size={iconSize} />
                <p className="text-sm hidden lg:block">Login / Register</p>
              </span>
            </Link>
          )}

          <div className="relative">
            <span
              className={`items-center cursor-pointer ${conditionalIconVisibility} relative`}
              onClick={toggleShoppingCartDropdown}
            >
              <ShoppingCart size={iconSize} />
              {cartItemCount > 0 && (
                <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                  {cartItemCount}
                </span>
              )}
            </span>
            {isShoppingCartDropdownOpen && (
              <ShoppingCartDropdown onClose={toggleShoppingCartDropdown} />
            )}
          </div>

          <div className="relative">
            <span
              className={`items-center gap-1 sm:gap-2 cursor-pointer ${conditionalIconVisibility} relative`}
              onClick={toggleFavoritesDropdown}
            >
              <Heart size={iconSize} />
              {favoritesCount > 0 && (
                <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                  {favoritesCount}
                </span>
              )}
            </span>
            {isFavoritesDropdownOpen && (
              <FavoritesDropdown onClose={toggleFavoritesDropdown} />
            )}
          </div>

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
          onClick={closeAllDropdowns}
        >
          Home
        </Link>
        <div className="flex items-center gap-4 relative">
          <Link
            to="/shop"
            className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
            onClick={closeAllDropdowns}
          >
            Shop
          </Link>
          <button onClick={toggleShopDropdown}>
            <ChevronDown
              size={iconSize}
              className={`ml-2 transition-transform duration-200 ${
                isShopDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isShopDropdownOpen && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-md shadow-lg py-2 z-50">
              <div className="flex mx-2 my-2 font-inter text-lg font-semibold text-gray-500">
                <div className="w-1/2 flex flex-col gap-2">
                  <h4 className="font-bold text-black mb-4">Female</h4>
                  {splitCategories.female.map((category) => (
                    <Link
                      key={category.id}
                      to={category.link}
                      onClick={closeAllDropdowns}
                    >
                      <p className="hover:text-black hover:font-bold transition-colors duration-200">
                        {category.title}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <h4 className="font-bold text-black mb-4">Male</h4>
                  {splitCategories.male.map((category) => (
                    <Link
                      key={category.id}
                      to={category.link}
                      onClick={closeAllDropdowns}
                    >
                      <p className="hover:text-black hover:font-bold transition-colors duration-200">
                        {category.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <Link
          to="/about"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
          onClick={closeAllDropdowns}
        >
          About
        </Link>
        <Link
          to="/blog"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
          onClick={closeAllDropdowns}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
          onClick={closeAllDropdowns}
        >
          Contact
        </Link>
        <Link
          to="#"
          className="block px-2 py-1 hover:bg-gray-100 rounded w-full text-center"
          onClick={closeAllDropdowns}
        >
          Pages
        </Link>
        {!isHome && (
          <div className="flex items-center justify-center gap-5 sm:gap-6 mt-4 border-t border-gray-200 pt-4 w-full">
            <a
              href="#"
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600"
              onClick={closeAllDropdowns}
            >
              <User size={mobileMenuIconSize} />
            </a>
            <a
              href="#"
              className="flex items-center cursor-pointer hover:text-gray-600"
              onClick={closeAllDropdowns}
            >
              <Search size={mobileMenuIconSize} />
            </a>
            <div className="relative">
              <span
                className="flex items-center gap-1 cursor-pointer hover:text-gray-600"
                onClick={toggleShoppingCartDropdown}
              >
                <ShoppingCart size={mobileMenuIconSize} />
                {cartItemCount > 0 && (
                  <p className="text-xs">{cartItemCount}</p>
                )}
              </span>
              {isShoppingCartDropdownOpen && (
                <ShoppingCartDropdown onClose={toggleShoppingCartDropdown} />
              )}
            </div>
            <div className="relative">
              <span
                className="flex items-center gap-1 cursor-pointer hover:text-gray-600"
                onClick={toggleFavoritesDropdown}
              >
                <Heart size={mobileMenuIconSize} />
                {favoritesCount > 0 && (
                  <p className="text-xs">{favoritesCount}</p>
                )}
              </span>
              {isFavoritesDropdownOpen && (
                <FavoritesDropdown onClose={toggleFavoritesDropdown} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
