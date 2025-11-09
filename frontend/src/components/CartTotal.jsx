import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full bg-white shadow-md rounded-2xl p-6 border border-gray-200 transition-all hover:shadow-xl hover:border-gray-300 duration-300">
      {/* Title */}
      <div className="text-center mb-5">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      {/* Pricing Details */}
      <div className="flex flex-col gap-4 text-gray-700 text-sm sm:text-base">
        <div className="flex justify-between items-center">
          <p className="font-medium">Subtotal</p>
          <p className="text-gray-900 font-semibold">
            {currency}
            {subtotal}.00
          </p>
        </div>
        <hr className="border-gray-300" />

        <div className="flex justify-between items-center">
          <p className="font-medium">Shipping Fee</p>
          <p className="text-gray-900 font-semibold">
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <hr className="border-gray-300" />

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-gray-800">Total</p>
          <p className="text-xl font-bold text-gray-900 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            {currency}
            {total}.00
          </p>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6">
        <button
          disabled={subtotal === 0}
          className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 ${
            subtotal === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-lg hover:scale-[1.02]"
          }`}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
