import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import { assets } from "../assets/assets";
import { Upload, Star } from "lucide-react";

const Add = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const handleImageChange = (index, file) => {
    const updated = [...images];
    updated[index] = file;
    setImages(updated);
  };

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      images.forEach((img, i) => img && formData.append(`image${i + 1}`, img));
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success("Product added successfully 🎉");
        setName("");
        setDescription("");
        setPrice("");
        setImages([null, null, null, null]);
        setSizes([]);
        setBestseller(false);
      } else toast.error(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const inputStyle =
    "w-full max-w-[500px] px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition";

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5 w-full max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        🛍️ Add New Product
      </h2>

      {/* Image Upload Section */}
      <div>
        <p className="font-medium mb-2">Upload Images</p>
        <div className="flex flex-wrap gap-3">
          {images.map((img, index) => (
            <label
              key={index}
              htmlFor={`image${index}`}
              className="relative w-24 h-24 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-indigo-400 hover:bg-indigo-50 transition cursor-pointer group"
            >
              {img ? (
                <img
                  src={URL.createObjectURL(img)}
                  alt={`preview-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-gray-400 flex flex-col items-center gap-1">
                  <Upload size={20} className="group-hover:text-indigo-500" />
                  <span className="text-xs">Upload</span>
                </div>
              )}
              <input
                onChange={(e) => handleImageChange(index, e.target.files[0])}
                type="file"
                id={`image${index}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Name & Description */}
      <div>
        <p className="font-medium mb-1">Product Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputStyle}
          placeholder="Enter product name"
          required
        />
      </div>

      <div>
        <p className="font-medium mb-1">Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${inputStyle} h-24`}
          placeholder="Write product description"
          required
        />
      </div>

      {/* Dropdowns */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <p className="font-medium mb-1">Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className={inputStyle}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="flex-1">
          <p className="font-medium mb-1">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className={inputStyle}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
      </div>

      {/* Price */}
      <div className="flex-1">
        <p className="font-medium mb-1">Price (₹)</p>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={inputStyle}
          placeholder="Eg: 499"
          required
        />
      </div>

      {/* Sizes */}
      <div>
        <p className="font-medium mb-2">Available Sizes</p>
        <div className="flex gap-3 flex-wrap">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <motion.button
              key={size}
              type="button"
              onClick={() => toggleSize(size)}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-1 rounded-lg text-sm font-medium ${
                sizes.includes(size)
                  ? "bg-indigo-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700"
              } transition`}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
          className="accent-indigo-500 cursor-pointer"
        />
        <label htmlFor="bestseller" className="cursor-pointer text-gray-700">
          <Star
            size={16}
            className={`inline mr-1 ${
              bestseller ? "text-yellow-500" : "text-gray-400"
            }`}
          />
          Mark as Bestseller
        </label>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="mt-4 w-full sm:w-40 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
      >
        ➕ Add Product
      </motion.button>
    </motion.form>
  );
};

export default Add;
