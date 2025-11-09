import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-700 mt-32 pt-16 pb-8 px-6 sm:px-12 md:px-20">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-10">
        {/* Logo + About */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src={assets.logo4}
            alt="Trendora Logo"
            className="w-44 sm:w-52 mb-5 object-contain drop-shadow-md hover:drop-shadow-xl transition-transform duration-500 hover:scale-110"
          />

          {/* About Text */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md">
            <span className="font-semibold text-gray-900">Trendora</span> is
            your trusted fashion destination — bringing you the latest styles,
            top-quality materials, and timeless collections that express your
            unique personality.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 tracking-wide">
            COMPANY
          </h2>
          <ul className="flex flex-col gap-2 text-gray-600 transition-all">
            {["Home", "About Us", "Delivery", "Privacy Policy"].map(
              (item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-black hover:translate-x-1 transition-all duration-300"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 tracking-wide">
            GET IN TOUCH
          </h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm sm:text-base">
            <li className="hover:text-black transition-all flex items-center gap-2">
              <span className="text-lg">📞</span> +91 9905707561
            </li>
            <li className="hover:text-black transition-all flex items-center gap-2">
              <span className="text-lg">📧</span> neeteshlodhi9555@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-700">Trendora</span> — Crafted
        with ❤️ by Neetesh Lodhi.
      </p>
    </footer>
  );
};

export default Footer;
