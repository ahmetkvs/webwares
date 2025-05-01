import { useHistory } from "react-router-dom";
import OrderSummary from "../components/Cards/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import AddressTab from "../components/orderSections/AddressesTab";
import PaymentTab from "../components/orderSections/PaymentTab";
import { useState, useEffect } from "react";
import getFormattedDate from "../utils/getOrderDateFormatted";
import api from "../services/api";
import { toast } from "react-toastify";
import { clearCart } from "../redux/product/productActions";

function OrderPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const [activeTab, setActiveTab] = useState("addresses");

  const addressList = useSelector((state) => state.shoppingCart.address);
  const paymentList = useSelector((state) => state.shoppingCart.payment);

  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  useEffect(() => {
    if (addressList?.length > 0) {
      setSelectedAddressId(addressList[0].id);
    }
  }, [addressList]);

  useEffect(() => {
    if (paymentList?.length > 0) {
      setSelectedPaymentId(paymentList[0].id);
    }
  }, [paymentList]);

  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const handlePaymentSelect = (paymentId) => {
    setSelectedPaymentId(paymentId);
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
  console.log("hello");
  function handleShopRoute() {
    history.push("/shop");
  }

  function onProceedToOrder() {
    const selectedPayment = paymentList?.find(
      (payment) => payment.id === selectedPaymentId
    );
    //console.log(selectedAddress);
    //console.log(selectedPayment);
    const orderData = {
      address_id: selectedAddressId,
      order_date: getFormattedDate(),
      card_no: selectedPayment.card_no,
      card_name: selectedPayment.name_on_card,
      card_expire_month: selectedPayment.expire_month,
      card_expire_year: selectedPayment.expire_year,
      card_ccv: 321,
      price: calculateTotalPrice(),
      products: cartItems.map((cartItem) => {
        return {
          product_id: cartItem.product.id,
          count: cartItem.count,
          detail: cartItem.product.name,
        };
      }),
    };
    console.log("Order Data:", orderData);
    api
      .post("/order", orderData, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((resp) => {
        console.log(resp);
        toast.success("Your order is complete");
        dispatch(clearCart());
        history.push("/prev-orders");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err, "Something wrong with your order");
      });
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

          {activeTab === "addresses" && (
            <AddressTab onAddressSelect={handleAddressSelect} />
          )}
          {activeTab === "payment" && (
            <PaymentTab onPaymentSelect={handlePaymentSelect} />
          )}
        </div>
        <div className="lg:w-3/12 w-full">
          <OrderSummary
            totalPrice={calculateTotalPrice()}
            onKeepShopping={handleShopRoute}
            onProceedToOrder={onProceedToOrder}
          />
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
