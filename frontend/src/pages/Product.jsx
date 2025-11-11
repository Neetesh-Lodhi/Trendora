import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import AIRecommendations from "../components/AIRecommendations";






const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

 


  // Fetch product details
  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t pt-10 px-4 sm:px-8 lg:px-16 transition-opacity ease-in duration-500 opacity-100 bg-gray-50">
      {/* ---------- Product Section ---------- */}
      <div className="flex flex-col lg:flex-row gap-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm">
        {/* ---------- Image Gallery ---------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18%] w-full gap-3 sm:gap-0">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={productData.name}
                className={`w-[24%] sm:w-full sm:mb-3 rounded-lg cursor-pointer border ${
                  item === image ? "border-black" : "border-transparent"
                } transition`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          <div className="w-full sm:w-[82%]">
            <img
              className="w-full h-auto rounded-xl border border-gray-200"
              src={image}
              alt={productData.name}
            />
          </div>
        </div>

        {/* ---------- Product Info ---------- */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-semibold text-2xl md:text-3xl mb-3 text-gray-900">
            {productData.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-4" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-4" />
            <p className="pl-2 text-gray-600 text-sm">(122 reviews)</p>
          </div>

          {/* Price */}
          <p className="text-3xl font-medium text-gray-800">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            {productData.description}
          </p>

          {/* Size Selection */}
          <div className="flex flex-col gap-3 mt-8">
            <p className="font-medium text-gray-700">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded-md text-sm font-medium transition ${
                    item === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="mt-8 bg-black text-white px-10 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 active:scale-95 transition"
          >
            ADD TO CART
          </button>

          {/* Additional Info */}
          <hr className="mt-8 mb-5 sm:w-4/5 border-gray-300" />
          <div className="text-sm text-gray-600 flex flex-col gap-1">
            <div className="space-y-3 mt-4">
              <p className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
                  alt="original"
                  className="w-6 h-6"
                />
                <span className="text-gray-800 font-medium">
                  100% Original Product
                </span>
              </p>

              <p className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2331/2331942.png"
                  alt="cash on delivery"
                  className="w-6 h-6"
                />
                <span>Cash on Delivery Available</span>
              </p>

              <p className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992703.png"
                  alt="return policy"
                  className="w-6 h-6"
                />
                <span>Easy Return & Exchange Policy within 7 Days</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Description & Reviews ---------- */}
      <div className="mt-20 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b bg-gray-50">
          <button
            onClick={() => setActiveTab("description")}
            className={`flex-1 text-center py-3 text-base font-semibold transition ${
              activeTab === "description"
                ? "text-gray-900 border-b-2 border-black bg-white"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`flex-1 text-center py-3 text-base font-semibold transition ${
              activeTab === "reviews"
                ? "text-gray-900 border-b-2 border-black bg-white"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
          >
            Reviews (122)
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-8 text-gray-700 text-[15px] leading-relaxed space-y-3">
          {activeTab === "description" ? (
            <>
              <p>
                <span className="font-medium text-gray-900">Trendora</span>{" "}
                brings you a premium shopping experience with carefully curated
                fashion pieces for men, women, and kids. Each product is crafted
                with high-quality materials to match your comfort and style.
              </p>
              <p>
                From casual wear to party outfits — our latest collection
                ensures you stay trendy every season. Explore, express, and
                enjoy fashion made just for you.
              </p>
              <p className="pt-2 text-sm text-gray-500 border-t mt-4">
                Need help? Visit our{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Contact Page
                </span>{" "}
                or check out our{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  FAQs
                </span>
                .
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-gray-900">Customer Reviews</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4"
                  />
                ))}
                <img src={assets.star_dull_icon} alt="star" className="w-4" />
                <p className="pl-2 text-gray-600 text-sm">(4.2 / 5 average)</p>
              </div>
              <p className="text-gray-600">
                “Loved the quality and the fit! Delivery was fast and packaging
                was neat.”
              </p>
              <p className="text-gray-600">
                “Great product for the price. Would definitely recommend to
                friends.”
              </p>
            </>
          )}
        </div>
      </div>

      {/* ---------- Related Products ---------- */}
      <div className="mt-20">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>

      {/* ---------- AI Recommendations ---------- */}
      <div className="mt-20">
        <AIRecommendations currentProduct={productData} />
      </div>
    </div>
  );
};

export default Product;
