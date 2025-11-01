import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="text-3xl sm:text-4xl text-center pt-10 border-t border-gray-200">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About Content */}
      <div className="my-16 flex flex-col md:flex-row gap-12 items-center justify-center px-6 md:px-16">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:max-w-[420px] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          src={assets.about_img}
          alt="About Us"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-relaxed"
        >
          <p className="text-lg">
            We are a passionate team dedicated to building products that make
            life simpler and smarter. Our journey began with a mission to
            deliver quality, trust, and innovation — and we’ve stayed true to it
            ever since.
          </p>
          <p className="text-lg">
            From intuitive design to robust functionality, we ensure every
            experience feels personal and meaningful. Our goal is to bridge the
            gap between technology and everyday needs.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">
              Our Mission 🎯
            </h3>
            <p>
              To empower individuals and businesses by providing seamless
              digital experiences built on reliability, performance, and
              creativity. We strive to redefine convenience through modern
              solutions that truly matter.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center py-8 bg-gray-100 mt-10">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          What makes us stand out from the rest.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 md:px-16 my-12">
        {[
          {
            title: "Quality Assurance",
            desc: "We provide 7-day free return & exchange policies and 24/7 customer support for hassle-free shopping.",
            icon: "✅",
          },
          {
            title: "Convenience",
            desc: "Our user-friendly interface helps you find what you need quickly and make secure orders effortlessly.",
            icon: "⚡",
          },
          {
            title: "Exceptional Support",
            desc: "Our dedicated team is always ready to assist you — ensuring a smooth and delightful experience.",
            icon: "💬",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center gap-3 w-full md:w-1/3"
          >
            <div className="text-4xl">{item.icon}</div>
            <b className="text-lg text-gray-800">{item.title}</b>
            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-20 mb-10">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
