import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const productId in cartItems) {
        const sizes = cartItems[productId];
        for (const size in sizes) {
          if (sizes[size] > 0) {
            const product = products.find((p) => p._id === productId);
            if (product) {
              orderItems.push({
                ...product,
                size,
                quantity: sizes[size],
              });
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      if (method === "stripe") {
        const res = await fetch(`${backendUrl}/api/order/stripe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
          body: JSON.stringify(orderData),
        });
        const data = await res.json();
        if (data.success) window.location.replace(data.session_url);
        else alert("❌ Stripe order failed: " + data.message);
      } else if (method === "cod") {
        const res = await fetch(`${backendUrl}/api/order/place`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
          body: JSON.stringify(orderData),
        });
        const data = await res.json();
        if (data.success) {
          alert("✅ Order placed successfully!");
          setCartItems({});
          navigate("/orders");
        } else alert("❌ " + data.message);
      } else if (method === "razorpay") {
        alert("🛠 Razorpay integration coming soon!");
      }
    } catch (error) {
      console.error("Order placement failed:", error);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 pt-8 sm:pt-16 px-5 sm:px-10 min-h-[85vh]"
    >
      {/* ---------- LEFT: DELIVERY INFORMATION ---------- */}
      <div className="flex-1 bg-white shadow-md rounded-2xl p-6 sm:p-10 border border-gray-100">
        <Title text1="DELIVERY" text2="INFORMATION" />
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="border border-gray-300 rounded-md py-2 px-4 w-full"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              className="border border-gray-300 rounded-md py-2 px-4 w-full"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            type="email"
            placeholder="Email Address"
          />

          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            type="text"
            placeholder="Street Address"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              className="border border-gray-300 rounded-md py-2 px-4 w-full"
              type="text"
              placeholder="City"
            />
            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              className="border border-gray-300 rounded-md py-2 px-4 w-full"
              type="text"
              placeholder="State"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              className="border border-gray-300 rounded-md py-2 px-4 w-full"
              type="number"
              placeholder="Zipcode"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              className="border border-gray-300 rounded-md py-2 px-4 w-full"
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            type="number"
            placeholder="Phone Number"
          />
        </div>
      </div>

      {/* ---------- RIGHT: CART & PAYMENT ---------- */}
      <div className="flex-1 flex flex-col gap-10">
        <div className="bg-white shadow-md border border-gray-100 rounded-2xl p-6 sm:p-8">
          <CartTotal />
        </div>

        <div className="bg-white shadow-md border border-gray-100 rounded-2xl p-6 sm:p-8">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            {/* Stripe */}
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 border rounded-md p-3 px-4 cursor-pointer transition ${
                method === "stripe" ? "border-green-400 bg-green-50" : ""
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></div>
              <img className="h-5" src={assets.stripe_logo} alt="Stripe" />
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setMethod("razorpay")}
              className={`flex items-center gap-3 border rounded-md p-3 px-4 cursor-pointer transition ${
                method === "razorpay" ? "border-green-400 bg-green-50" : ""
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></div>
              <img className="h-5" src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            {/* COD */}
            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 border rounded-md p-3 px-4 cursor-pointer transition ${
                method === "cod" ? "border-green-400 bg-green-50" : ""
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></div>
              <p className="text-gray-600 font-medium">Cash on Delivery</p>
            </div>
          </div>

          <div className="w-full text-end mt-10">
            <button
              type="submit"
              className="bg-black text-white font-semibold px-12 py-3 rounded-md hover:bg-gray-800 transition"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
