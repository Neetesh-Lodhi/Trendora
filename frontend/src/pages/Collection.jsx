import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // ✅ Toggle Category Filter
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // ✅ Toggle SubCategory Filter
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // ✅ Apply Filters
  const applyFilters = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  // ✅ Sort Products
  const sortProduct = () => {
    let sortedProducts = [...filterProducts];
    switch (sortType) {
      case "low-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilters();
        return;
    }
    setFilterProducts(sortedProducts);
  };

  // ✅ Run filters when dependencies change
  useEffect(() => {
    applyFilters();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t transition-all duration-300 ease-in-out">
      {/* FILTER SECTION */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold text-gray-800 hover:text-blue-700 transition-colors"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 rounded-lg shadow-sm bg-white transition-all ${
            showFilter ? "block" : "hidden sm:block"
          }`}
        >
          <p className="mb-3 text-sm font-semibold text-gray-800">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  className="accent-blue-600"
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 rounded-lg shadow-sm bg-white transition-all ${
            showFilter ? "block" : "hidden sm:block"
          }`}
        >
          <p className="mb-3 text-sm font-semibold text-gray-800">TYPE</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  className="accent-blue-600"
                  type="checkbox"
                  value={type}
                  onChange={toggleSubCategory}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 items-center">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-3 py-1 rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition-all"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        {filterProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-lg animate-pulse">
            No products match your filters 😕
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
