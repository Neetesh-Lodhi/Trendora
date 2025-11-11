import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 
     ${
       isActive
         ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md scale-[1.03]"
         : "text-gray-700 hover:bg-gray-100 hover:scale-[1.02]"
     }`;

  return (
    <aside
      className="
        fixed left-0 top-0 h-screen w-56 
        bg-gradient-to-b from-gray-50 via-white to-gray-100 
        border-r shadow-md flex flex-col items-start pt-8 
        transition-all duration-300 z-40
        md:static md:h-auto
      "
    >
      {/* Sidebar Header */}
      <h2 className="text-lg font-semibold mb-6 text-gray-800 tracking-wide pl-6">
        Admin Menu
      </h2>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 w-full text-[15px] px-4">
        <NavLink to="/add" className={linkClasses}>
          <img className="w-5 h-5 opacity-80" src={assets.add_icon} alt="add" />
          <p className="hidden md:block">Add Product</p>
        </NavLink>

        <NavLink to="/list" className={linkClasses}>
          <img
            className="w-5 h-5 opacity-80"
            src={assets.order_icon}
            alt="list"
          />
          <p className="hidden md:block">Product List</p>
        </NavLink>

        <NavLink to="/orders" className={linkClasses}>
          <img
            className="w-5 h-5 opacity-80"
            src={assets.order_icon}
            alt="orders"
          />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </nav>

      {/* Decorative Glow Footer */}
      <div className="mt-auto mb-8 w-[80%] h-1 rounded-full bg-gradient-to-r from-pink-400 to-indigo-500 opacity-60 animate-pulse"></div>
    </aside>
  );
};

export default Sidebar;
