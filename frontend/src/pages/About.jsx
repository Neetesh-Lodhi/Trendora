import React from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  const features = [
    {
      title: "Quality Assurance",
      desc: "We provide 7-day free return & exchange policies and 24/7 customer support for hassle-free shopping.",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      bgColor: "bg-green-100",
    },
    {
      title: "Fast & Easy Shopping",
      desc: "Our platform ensures a smooth, fast, and user-friendly experience — from browsing to checkout.",
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Secure Payment",
      desc: "Shop confidently with multiple secure payment options and encryption-based data protection.",
      icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
      bgColor: "bg-blue-100",
    },
    {
      title: "24/7 Support",
      desc: "Our customer support is always available to assist you, anytime and anywhere.",
      icon: "https://cdn-icons-png.flaticon.com/512/3059/3059997.png",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/40 to-gray-50 text-gray-800 overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl text-center pt-10 border-t border-gray-200"
      >
        <Title text1={"ABOUT"} text2={"US"} />
      </motion.div>

      {/* About Content */}
      <div className="my-16 flex flex-col md:flex-row gap-12 items-center justify-center px-6 md:px-16">
        {/* Animated Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full md:max-w-[420px] rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          src={assets.about_img}
          alt="About Us"
        />

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-relaxed"
        >
          <p className="text-lg">
            We are a passionate team dedicated to building products that make
            life simpler and smarter. Our journey began with a mission to
            deliver <span className="font-semibold text-pink-500">quality</span>
            ,<span className="font-semibold text-pink-500"> trust</span>, and
            <span className="font-semibold text-pink-500"> innovation</span> —
            and we’ve stayed true to it ever since.
          </p>

          <p className="text-lg">
            From intuitive design to robust functionality, we ensure every
            experience feels personal and meaningful. Our goal is to bridge the
            gap between technology and everyday needs.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">
              Our Mission 
            </h3>
            <p>
              To empower individuals and businesses by providing seamless
              digital experiences built on reliability, performance, and
              creativity. We strive to redefine convenience through modern
              solutions that truly matter.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center py-10 bg-gradient-to-r from-gray-100 to-white border-t border-gray-200">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          What makes us stand out from the rest.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8 px-6 md:px-16 my-12">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.4 }}
            className={`p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-4 w-full md:w-[45%] lg:w-[22%] border border-gray-200 bg-white cursor-pointer`}
          >
            <div
              className={`w-20 h-20 ${item.bgColor} rounded-full flex items-center justify-center shadow-md`}
            >
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>
            <b className="text-lg text-gray-800">{item.title}</b>
            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-20 mb-10"
      >
        <NewsletterBox />
      </motion.div>
    </div>
  );
};

export default About;
