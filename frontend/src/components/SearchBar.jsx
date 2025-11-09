import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  if (!showSearch || !visible) return null;

  return (
    <div className="border-t border-b bg-gradient-to-r from-white via-gray-50 to-white text-center shadow-sm backdrop-blur-sm">
      <div className="relative flex items-center justify-center my-6">
        <div className="flex items-center border border-gray-300 hover:border-pink-400 transition-all duration-300 rounded-full px-5 py-3 w-[85%] sm:w-[60%] md:w-[45%] bg-white shadow-md hover:shadow-lg">
          <img
            src={assets.search_icon}
            alt="search"
            className="w-5 opacity-60 mr-3 transition-transform duration-300 hover:scale-110"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products, collections, or brands..."
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm sm:text-base placeholder:text-gray-400"
          />
        </div>

        <img
          src={assets.cross_icon}
          alt="close"
          onClick={() => setShowSearch(false)}
          className="absolute right-[10%] sm:right-[22%] md:right-[28%] w-4 sm:w-5 cursor-pointer opacity-60 hover:opacity-100 transition-transform duration-300 hover:rotate-90"
        />
      </div>
    </div>
  );
};

export default SearchBar;
