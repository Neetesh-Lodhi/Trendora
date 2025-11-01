import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Top Title */}
      <div className="text-center text-3xl pt-12 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          We’d love to hear from you! Get in touch with our team anytime.
        </p>
      </div>

      {/* Contact Section */}
      <div className="my-16 flex flex-col justify-center md:flex-row gap-16 items-center px-6 sm:px-12">
        {/* Left Image with Animation */}
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:max-w-[420px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          src={assets.contact_img}
          alt="Contact"
        />

        {/* Right Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-start gap-6 bg-white p-8 rounded-2xl shadow-md border border-gray-100 md:w-[55%]"
        >
          <h3 className="font-bold text-2xl text-gray-800">Our Store</h3>
          <p className="text-gray-600 leading-relaxed">
            S4709 Willms Drive <br /> Port Hueneme, CA 93041
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Tel:</span> (123) 456-789 <br />
            <span className="font-semibold">Email:</span> admin@example.com
          </p>

          <hr className="w-full border-gray-200" />

          <h3 className="font-bold text-2xl text-gray-800">
            Careers at Trendora
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Want to grow your career with a team that values creativity and
            innovation? Join our family at Trendora.
          </p>
          <button className="relative border border-black px-8 py-3 text-sm font-medium overflow-hidden rounded-lg group">
            <span className="absolute inset-0 bg-black transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative text-black group-hover:text-white transition-colors duration-500">
              Explore Jobs
            </span>
          </button>
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-20">
        <NewsletterBox />
      </div>

      {/* Footer Message */}
      <p className="text-center text-gray-500 mt-12 text-sm pb-10">
        © {new Date().getFullYear()} Trendora — Crafted with ❤️ for our
        customers.
      </p>
    </div>
  );
};

export default Contact;
