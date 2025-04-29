import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCartItemCount,
  removeFromCart,
  setCartItemChecked,
} from "../redux/shoppingCart/shoppingCartActions";
import { XCircle } from "lucide-react";

function ShoppingCartPage() {
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
      dispatch(updateCartItemCount(productId, parsedQuantity));
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckboxChange = (productId, isChecked) => {
    dispatch(setCartItemChecked(productId, isChecked));
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        if (item.checked) {
          return total + item.count * item.product.price;
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-6 flex h-96 justify-center items-center">
        <p className="font-inter font-semibold text-xl">Your cart is empty</p>
      </div>
    );
  }

  return (
    <section className="w-full py-8 sm:py-16">
      <div className="w-11/12 sm:w-10/12 mx-auto flex lg:flex-row flex-col gap-y-8 lg:gap-x-8">
        {/* Left Side: Cart Items List */}
        <div className="lg:w-7/12 w-full">
          <h2 className="text-xl font-semibold py-4 px-4 bg-gray-100 border-b border-gray-200 rounded-t-md">
            Shopping Cart Items
          </h2>
          <div className="shadow-md rounded-b-md border-b border-l border-r border-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row items-center py-4 px-4 border-b last:border-b-0"
              >
                {/* Checkbox */}
                <div className="mr-4 self-start sm:self-center">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) =>
                      handleCheckboxChange(item.product.id, e.target.checked)
                    }
                    className="form-checkbox h-5 w-5 text-sky-500 transition duration-150 ease-in-out"
                  />
                </div>

                {/* Image */}
                {item.product.images && item.product.images[0] && (
                  <div className="w-24 h-24 mr-4 rounded overflow-hidden shadow-sm self-start">
                    <img
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="flex-grow mb-2 sm:mb-0">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  {item.product.description && (
                    <p className="text-gray-600 text-sm">
                      {item.product.description.substring(0, 50)}...
                    </p>
                  )}
                  {item.product.size && (
                    <p className="text-gray-500 text-xs">
                      Size: {item.product.size}
                    </p>
                  )}
                  {item.product.color && (
                    <p className="text-gray-500 text-xs">
                      Color: {item.product.color}
                    </p>
                  )}
                </div>

                {/* Quantity and Price (Side-by-Side on Mobile) */}
                <div className="flex items-center justify-between sm:flex-col w-full sm:w-auto">
                  <div className="flex items-center space-x-2 mr-4">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.product.id, item.count - 1)
                      }
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded disabled:opacity-50 text-sm"
                      disabled={item.count <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.count}
                      onChange={(e) =>
                        handleQuantityChange(item.product.id, e.target.value)
                      }
                      className="w-12 text-center border border-gray-300 rounded text-sm"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.product.id, item.count + 1)
                      }
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded text-sm"
                    >
                      +
                    </button>
                  </div>
                  <div className="font-semibold text-lg ml-4 sm:ml-0 mt-2 sm:mt-0 w-20 text-right">
                    ${(item.count * item.product.price).toFixed(2)}
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none ml-4 self-start sm:self-center"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Order Summary (Full Width on Mobile) */}
        <div className="lg:w-5/12 w-full shadow-md rounded-md border border-gray-200 p-6 lg:self-start">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>
          <div className="mb-4">
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span>${calculateTotalPrice()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="mt-4">
              <label
                htmlFor="coupon"
                className="block text-sm font-medium text-gray-700"
              >
                Have a coupon?
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  className="flex-1 focus:ring-sky-500 focus:border-sky-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                  placeholder="Enter coupon code"
                  disabled
                />
                <button
                  className="ml-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md focus:outline-none disabled:opacity-50 text-sm"
                  disabled
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold text-lg py-2">
              <span>Total</span>
              <span>${calculateTotalPrice()}</span>
            </div>
            <button className="bg-sky-500 hover:bg-sky-700 w-full text-white font-semibold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              Proceed to Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCartPage;
