import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function OrderSummary({ totalPrice = "0.00", onKeepShopping }) {
  const history = useHistory();

  const handleOrderPageRouting = () => {
    history.push("/order");
  };

  return (
    <div className="shadow-md rounded-md border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">
        Order Summary
      </h2>
      <div className="mb-4">
        <div className="flex justify-between py-2 border-b">
          <span>Subtotal</span>
          <span>${totalPrice}</span>
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
          <span>${totalPrice}</span>
        </div>
        <button
          onClick={handleOrderPageRouting}
          className="bg-sky-500 hover:bg-sky-700 w-full text-white font-semibold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Proceed to Order
        </button>
        <button
          onClick={onKeepShopping}
          className="bg-row3sec mt-4 hover:bg-row1third w-full text-white font-semibold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Keep Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
