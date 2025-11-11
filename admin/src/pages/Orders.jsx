import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const currency = "₹";

  // ✅ Fetch all orders
  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ✅ Handle order status change
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Status updated!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6 md:p-10">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        🛍️ Orders Management
      </h3>

      <div className="space-y-6">
        {orders.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <img
              src={assets.parcel_icon}
              alt="No Orders"
              className="w-20 mx-auto opacity-60 mb-3"
            />
            <p>No orders found yet!</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100 p-6 grid grid-cols-1 sm:grid-cols-[0.6fr_2fr_1fr_1fr] gap-6 items-start"
            >
              {/* Left Icon */}
              <div className="flex items-center justify-center">
                <img
                  className="w-16 sm:w-20"
                  src={assets.parcel_icon}
                  alt="parcel"
                />
              </div>

              {/* Order Details */}
              <div className="text-gray-700">
                <div className="font-medium text-gray-800 mb-2">
                  {order.items.map((item, idx) => (
                    <p key={idx}>
                      {item.name} × {item.quantity}{" "}
                      <span className="text-xs text-gray-500">
                        ({item.size})
                      </span>
                    </p>
                  ))}
                </div>

                <div className="mt-3 space-y-1 text-sm">
                  <p className="font-semibold text-gray-800">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p>
                    {order.address.street}, {order.address.city},{" "}
                    {order.address.state}
                  </p>
                  <p>
                    {order.address.country} - {order.address.zipcode}
                  </p>
                  <p className="text-gray-600">📞 {order.address.phone}</p>
                </div>
              </div>

              {/* Payment Info */}
              <div className="text-sm space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Items:</span>{" "}
                  {order.items.length}
                </p>
                <p>
                  <span className="font-semibold">Method:</span>{" "}
                  {order.paymentMethod}
                </p>
                <p>
                  <span className="font-semibold">Payment:</span>{" "}
                  {order.payment ? (
                    <span className="text-green-600 font-medium">Done ✅</span>
                  ) : (
                    <span className="text-red-500 font-medium">Pending ⏳</span>
                  )}
                </p>
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>

              {/* Amount & Status */}
              <div className="text-sm sm:text-[15px] font-semibold text-gray-800">
                <p className="mb-3">
                  {currency}
                  {order.amount}
                </p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="bg-gray-100 text-gray-700 rounded-lg px-3 py-2 border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
