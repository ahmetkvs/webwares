import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

function PrevOrdersPage() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPreviousOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/order", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setOrders(response.data);
      } catch (err) {
        console.error("Error fetching previous orders:", err);
        setError("Failed to load previous orders.");
        toast.error("Failed to load previous orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchPreviousOrders();
  }, []);

  function handleShopRoute() {
    history.push("/shop");
  }

  if (loading) {
    return (
      <div className="w-full py-16 flex justify-center items-center">
        <Loader2 className="animate-spin w-10 h-10 text-blue-500" />
        <span className="ml-2 text-lg text-gray-600">
          Loading previous orders...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16 flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="w-full py-16 flex flex-col justify-center items-center">
        <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
        <button
          onClick={handleShopRoute}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <section className="w-full py-8">
      <div className="w-4/5 mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Previous Orders
        </h2>
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow rounded-md p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Order ID: {order.id}
              </h3>
              <p className="text-gray-600 mb-2">
                Order Date: {new Date(order.order_date).toLocaleDateString()} -{" "}
                {new Date(order.order_date).toLocaleTimeString()}
              </p>
              <p className="text-gray-600 mb-3">Total Price: ${order.price}</p>
              <h4 className="text-md font-semibold text-gray-700 mb-2">
                Products:
              </h4>
              <ul>
                {order.products.map((product) => (
                  <li key={product.id} className="flex items-center mb-2">
                    {product.images && product.images.length > 0 && (
                      <img
                        src={product.images[0].url}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                    )}
                    <div>
                      <p className="text-gray-600 font-semibold">
                        {product.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {product.description}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Quantity: {product.count} - Price: ${product.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrevOrdersPage;
