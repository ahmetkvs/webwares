import { useHistory } from "react-router-dom";
import OrderSummary from "../components/Cards/OrderSummary";
import { useSelector } from "react-redux";
import AddressTab from "../components/orderSections/AddressesTab";
import PaymentTab from "../components/orderSections/PaymentTab";
import { useState } from "react";

function OrderPage() {
  const history = useHistory();
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const [activeTab, setActiveTab] = useState("addresses");

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

  function handleShopRoute() {
    history.push("/shop");
  }

  return (
    <section className="w-full">
      <div className="w-4/5 my-16 mx-auto flex justify-between">
        <div className="lg:w-8/12 w-full">
          <div className="flex border-b">
            <button
              className={`py-2 px-4 ${
                activeTab === "addresses" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("addresses")}
            >
              Addresses
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "payment" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("payment")}
            >
              Payment
            </button>
          </div>

          {activeTab === "addresses" && <AddressTab />}
          {activeTab === "payment" && <PaymentTab />}
        </div>
        <div className="lg:w-3/12 w-full">
          <OrderSummary
            totalPrice={calculateTotalPrice()}
            onKeepShopping={handleShopRoute}
          />
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
