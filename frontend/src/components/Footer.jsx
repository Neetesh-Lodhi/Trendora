import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-pink-50/30 to-gray-50 text-gray-700 pt-20 pb-10 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-gray-200">
      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/40 via-purple-100/30 to-indigo-100/40 blur-3xl"></div>

      {/* Main Footer Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-16 mb-12 z-10">
        {/* Logo + About */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <img
            src={assets.logo4}
            alt="Trendora Logo"
            className="w-44 sm:w-52 mb-5 object-contain drop-shadow-md hover:drop-shadow-lg transition-transform duration-500 hover:scale-110"
          />
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md">
            <span className="font-semibold text-gray-900">Trendora</span> is
            your go-to fashion brand — blending style, comfort, and creativity
            to help you look your best every day.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            {[
              {
                src: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
                color: "hover:bg-blue-100",
                link: "https://facebook.com",
              },
              {
                src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                color: "hover:bg-pink-100",
                link: "https://instagram.com",
              },
              {
                src: "https://cdn-icons-png.flaticon.com/512/1384/1384017.png",
                color: "hover:bg-sky-100",
                link: "https://twitter.com",
              },
              {
                src: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
                color: "hover:bg-blue-50",
                link: "https://linkedin.com",
              },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-white shadow-sm ${icon.color} transition-all duration-300 hover:scale-110`}
              >
                <img
                  src={icon.src}
                  alt="social"
                  className="w-6 h-6 opacity-80 hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-5 text-gray-800 tracking-wide">
            COMPANY
          </h2>
          <ul className="flex flex-col gap-3 text-gray-600">
            {["Home", "About Us", "Delivery", "Privacy Policy"].map(
              (item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-pink-500 transition-all duration-300 hover:translate-x-1"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-5 text-gray-800 tracking-wide">
            GET IN TOUCH
          </h2>
          <ul className="flex flex-col gap-3 text-gray-600 text-sm sm:text-base">
            <li className="flex items-center gap-3 hover:text-pink-500 transition-all">
              <img
                src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                alt="phone"
                className="w-5 h-5"
              />
              +91 9905707561
            </li>
            <li className="flex items-center gap-3 hover:text-pink-500 transition-all">
              <img
                src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
                alt="email"
                className="w-5 h-5"
              />
              neeteshlodhi9555@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:text-pink-500 transition-all">
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                alt="location"
                className="w-5 h-5"
              />
              Bhopal, Madhya Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-gray-200 my-6 z-10"></div>

      {/* Copyright */}
      <p className="relative text-center text-sm text-gray-500 z-10">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800">Trendora</span> — Crafted
        with 💖 by <span className="text-pink-500">Neetesh Lodhi</span>.
      </p>
    </footer>
  );
};

export default Footer;
