import React from "react";
import { motion } from "framer-motion";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-6 text-center">
      {/* Title Text */}
      <motion.h2
        className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gray-500">{text1}</span>{" "}
        <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          {text2}
        </span>
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        className="w-12 sm:w-16 h-[3px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        transition={{ duration: 0.6 }}
      ></motion.div>
    </div>
  );
};

export default Title;
