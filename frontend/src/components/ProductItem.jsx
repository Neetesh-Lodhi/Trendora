import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-gray-300"
    >
      {/* Image Section */}
      <div className="relative w-full overflow-hidden bg-gray-50">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Info Section */}
      <div className="p-3 sm:p-4">
        <p className="text-gray-800 font-medium text-base sm:text-lg truncate group-hover:text-indigo-600 transition-colors duration-300">
          {name}
        </p>
        <p className="text-gray-600 text-sm mt-1">
          {currency}
          <span className="font-semibold text-gray-900 text-base">{price}</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
