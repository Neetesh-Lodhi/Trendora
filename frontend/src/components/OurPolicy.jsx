import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      img: assets.exchange_icon,
      title: "Easy Exchange Policy",
      desc: "We offer a smooth and free exchange process.",
    },
    {
      img: assets.quality_icon,
      title: "7 Days Return Policy",
      desc: "Enjoy 7 days of hassle-free returns on your orders.",
    },
    {
      img: assets.support_img,
      title: "24/7 Customer Support",
      desc: "Our friendly support team is always here to help you.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14 text-gray-800">
        Our <span className="text-pink-600">Policies</span>
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-8">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-64 p-6 text-center border border-gray-100 hover:border-pink-200 hover:-translate-y-2"
          >
            <div className="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5 group-hover:bg-pink-100 transition-all duration-300">
              <img src={policy.img} alt={policy.title} className="w-8" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">
              {policy.title}
            </h3>
            <p className="text-gray-500 text-sm">{policy.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;
