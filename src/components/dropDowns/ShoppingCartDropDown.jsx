import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/shoppingCart/shoppingCartActions";
import formatPrice from "../../utils/formatPrice";
import { X } from "lucide-react";

function ShoppingCartDropdown({ onClose }) {
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.count * item.product.price,
      0
    );
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
      {cartItems.length === 0 ? (
        <div className="px-4 py-2 text-gray-600">Your cart is empty.</div>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.product.id}
                className="px-4 py-2 flex items-center justify-between hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  {item.product.images && item.product.images[0]?.url ? (
                    <img
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      No Image
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold">{item.product.name}</p>
                    <p className="text-xs text-gray-600">
                      {formatPrice(item.product.price)} x {item.count}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.product.id)}
                  className="text-gray-500 hover:text-red-600"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
          <div className="px-4 py-2 mt-2 border-t border-gray-200">
            <div className="flex justify-between font-semibold text-gray-700">
              <span>Total:</span>
              <span>{formatPrice(calculateTotalPrice())}</span>
            </div>
            <Link
              to="/cart"
              onClick={onClose}
              className="block mt-2 text-center bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition-colors duration-200"
            >
              View Cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCartDropdown;
