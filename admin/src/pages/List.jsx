import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Tag, ShoppingBag, Layers } from "lucide-react";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch product list");
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Product removed successfully");
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove product");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <ShoppingBag className="text-indigo-600" /> All Products
      </h2>

      {loading ? (
        <p className="text-gray-500 text-center py-10">Loading products...</p>
      ) : list.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No products available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {list.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-5 relative group"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="h-40 w-40 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
                  {item.name}
                </h3>

                <div className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                  <Layers size={16} className="text-indigo-500" />{" "}
                  <span>{item.category}</span>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <p className="font-semibold text-gray-900">
                    <Tag size={16} className="inline mr-1 text-green-500" />
                    {currency}
                    {item.price}
                  </p>

                  <button
                    onClick={() => removeProduct(item._id)}
                    className="bg-red-100 text-red-600 hover:bg-red-200 p-2 rounded-lg transition-all duration-300"
                    title="Remove product"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default List;
