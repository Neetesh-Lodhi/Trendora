import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between py-4 px-5 sm:px-10 max-w-7xl mx-auto font-medium text-gray-800">
        {/* ---------- Logo ---------- */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={assets.logo4}
            alt="Trendora Logo"
            className="w-32 sm:w-36 drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* ---------- Navigation Links ---------- */}
        <ul className="hidden sm:flex gap-8 text-sm tracking-wide">
          {["home", "collection", "about", "contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              className={({ isActive }) =>
                `relative pb-1 uppercase transition duration-200 ${
                  isActive ? "text-black font-semibold" : "text-gray-600"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300`
              }
            >
              {item}
            </NavLink>
          ))}
        </ul>

        {/* ---------- Right Icons ---------- */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
          />

          {/* Profile */}
          <div className="relative group">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              alt="Profile"
              className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
            />

            {/* Dropdown */}
            {token && (
              <div className="absolute right-0 mt-3 hidden group-hover:block bg-white shadow-lg border border-gray-100 rounded-lg py-3 w-40 transition-all duration-300">
                <p className="px-5 py-2 text-gray-600 hover:bg-gray-50 cursor-pointer">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="px-5 py-2 text-gray-600 hover:bg-gray-50 cursor-pointer"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="px-5 py-2 text-gray-600 hover:bg-gray-50 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
            />
            <span className="absolute -right-2 -bottom-2 w-4 h-4 bg-black text-white text-[10px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile Menu */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="Menu"
            className="w-6 cursor-pointer sm:hidden hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>

      {/* ---------- Mobile Sidebar ---------- */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "translate-x-full"
        } w-3/4 sm:hidden`}
      >
        <div className="flex flex-col h-full text-gray-700">
          <div className="flex items-center gap-3 p-4 border-b">
            <img
              onClick={() => setVisible(false)}
              src={assets.dropdown_icon}
              alt="Back"
              className="h-4 rotate-180 cursor-pointer"
            />
            <p className="font-medium">Back</p>
          </div>

          {["Home", "Collection", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setVisible(false)}
              className="py-3 pl-6 border-b hover:bg-gray-50 transition-colors"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
