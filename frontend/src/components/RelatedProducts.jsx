import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let filtered = products
        .filter((item) => item.category === category)
        .filter((item) => item.subCategory === subCategory);
      setRelated(filtered.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24 px-4 sm:px-10 md:px-16 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          You may also like these hand-picked items from similar collections.
        </p>
      </div>

      {/* Products Grid */}
      {related.length > 0 ? (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {related.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center text-gray-500 mt-12">
          <p>No related products found for this category.</p>
        </div>
      )}

      {/* Gradient Decorative Divider */}
      <div className="mt-16 w-2/3 sm:w-1/3 mx-auto h-[3px] rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400"></div>
    </div>
  );
};

export default RelatedProducts;
