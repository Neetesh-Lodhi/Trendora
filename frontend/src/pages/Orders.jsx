import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      setLoading(true);
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load orders!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-400";
      case "shipped":
        return "bg-blue-400";
      case "delivered":
        return "bg-green-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="border-t pt-16 px-4 sm:px-8">
      <div className="text-2xl mb-8">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {loading ? (
        <div className="space-y-4 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-28 bg-gray-100 rounded-lg shadow-sm"
            ></div>
          ))}
        </div>
      ) : orderData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          🛍️ You haven’t placed any orders yet.
        </p>
      ) : (
        <div className="space-y-6">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="py-5 px-4 sm:px-6 border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              {/* Product Info */}
              <div className="flex items-start gap-5 text-sm sm:text-base">
                <img
                  className="w-16 sm:w-20 rounded-lg border"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <div className="flex items-center flex-wrap gap-3 mt-1 text-gray-600">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                    <p>Qty: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-1 text-gray-500 text-sm">
                    Date:{" "}
                    <span className="text-gray-700">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  <p className="mt-1 text-gray-500 text-sm">
                    Payment:{" "}
                    <span className="text-gray-700">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              {/* Status and Track */}
              <div className="md:w-1/3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${getStatusColor(
                      item.status
                    )}`}
                  ></span>
                  <p className="text-sm md:text-base capitalize">
                    {item.status}
                  </p>
                </div>

                <button
                  onClick={loadOrderData}
                  className="border border-gray-300 hover:bg-black hover:text-white px-4 py-2 text-sm rounded-lg transition-all duration-300"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
