import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between px-6 sm:px-12 py-3 bg-white shadow-md sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          className="w-12 sm:w-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
          src={assets.logo4}
          alt="App Logo"
        />
        <h1 className="text-lg sm:text-xl font-semibold text-gray-700">
          Admin Dashboard
        </h1>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center gap-4">
      

        <button
          onClick={() => setToken("")}
          className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
