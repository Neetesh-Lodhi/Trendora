import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="min-h-screen border-t pt-14 px-4 sm:px-10 bg-gradient-to-b from-white via-pink-50/20 to-gray-50">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl mb-6 text-center"
      >
        <Title text1={"YOUR"} text2={"CART"} />
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Review your items before proceeding to checkout ✨
        </p>
      </motion.div>

      {/* Cart Items */}
      <div className="space-y-6">
        <AnimatePresence>
          {cartData.length > 0 ? (
            cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative group py-5 px-4 sm:px-6 border border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                >
                  {/* Product Info */}
                  <div className="flex items-start gap-6">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={productData.image[0]}
                      alt={productData.name}
                      className="w-16 sm:w-20 rounded-lg shadow-sm"
                    />
                    <div>
                      <p className="text-sm sm:text-lg font-medium text-gray-800">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-gray-600">
                        <p className="text-sm">
                          {currency}
                          {productData.price}
                        </p>
                        <p className="px-3 py-1 border border-pink-100 bg-pink-50 text-xs rounded-md">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Input */}
                  <motion.input
                    whileFocus={{ scale: 1.05 }}
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="border w-12 sm:w-20 px-2 py-1 text-center rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none transition-all"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />

                  {/* Delete Icon */}
                  <motion.img
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200"
                    src={assets.bin_icon}
                    alt="Remove"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-100/0 via-pink-50/20 to-pink-100/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-500 text-lg"
            >
              Your cart is empty 🛍️
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cart Total & Checkout */}
      {cartData.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-end my-16"
        >
          <div className="w-full sm:w-[450px] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <CartTotal />
            <div className="w-full text-end mt-6">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(to right, #ec4899, #db2777, #be185d)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/place-order")}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300"
              >
                PROCEED TO CHECKOUT →
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
