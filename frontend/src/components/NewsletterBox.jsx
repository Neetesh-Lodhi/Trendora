import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [showJobs, setShowJobs] = useState(false);

  const handleExploreJobs = () => {
    setShowJobs(true);
  };

  const closeJobsModal = () => {
    setShowJobs(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* ---------- Title Section ---------- */}
      <div className="text-center pt-16 border-t pb-4">
        <Title text1={"CONTACT"} text2={"US"} />
        <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question about our
          products, need assistance, or just want to share feedback — our team
          is here to help.
        </p>
      </div>

      {/* ---------- Contact Section ---------- */}
      <div className="my-20 flex flex-col md:flex-row justify-center items-center gap-20 px-6 sm:px-12 lg:px-20">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={assets.contact_img}
            alt="Contact"
            className="w-full md:max-w-[480px] rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-700"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 bg-white rounded-2xl shadow-md border border-gray-100 p-10 md:p-12 space-y-8"
        >
          {/* Store Info */}
          <div>
            <h3 className="font-bold text-2xl text-gray-800 mb-2">Our Store</h3>
            <p className="text-gray-600 leading-relaxed">
              4709 Willms Drive <br />
              Port Hueneme, CA 93041
            </p>
            <div className="mt-4 text-gray-600">
              <p>
                <span className="font-semibold">Tel:</span> (123) 456-789
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                contact@trendora.com
              </p>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Careers Info */}
          <div>
            <h3 className="font-bold text-2xl text-gray-800 mb-2">
              Careers at Trendora
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Looking to grow your career with a team that values creativity,
              innovation, and collaboration? Join our vibrant Trendora family.
            </p>

            <button
              onClick={handleExploreJobs}
              className="relative border border-black px-8 py-3 text-sm font-medium overflow-hidden rounded-lg group"
            >
              <span className="absolute inset-0 bg-black transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative text-black group-hover:text-white transition-colors duration-500">
                Explore Jobs
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* ---------- Jobs Modal ---------- */}
      <AnimatePresence>
        {showJobs && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, y: -30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-lg w-[90%] relative"
            >
              {/* Close Button */}
              <button
                onClick={closeJobsModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                🚀 Join Our Team
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Explore exciting roles in design, marketing, development, and
                customer success. Grow your skills in a fast-paced, innovative
                environment!
              </p>

              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer transition">
                  <h4 className="font-semibold text-gray-800">
                    🌟 Frontend Developer
                  </h4>
                  <p className="text-sm text-gray-500">
                    React, TailwindCSS, and Animation Enthusiast
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer transition">
                  <h4 className="font-semibold text-gray-800">
                    🎨 UI/UX Designer
                  </h4>
                  <p className="text-sm text-gray-500">
                    Create beautiful, intuitive digital experiences.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer transition">
                  <h4 className="font-semibold text-gray-800">
                    🛍️ Marketing Intern
                  </h4>
                  <p className="text-sm text-gray-500">
                    Learn and grow with hands-on campaign experience.
                  </p>
                </div>
              </div>

              <button
                onClick={closeJobsModal}
                className="mt-6 w-full bg-rose-500 text-white font-semibold py-3 rounded-lg hover:bg-rose-600 transition-all duration-300"
              >
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- Newsletter Section ---------- */}
      <div className="mt-28">
        <NewsletterBox />
      </div>

      {/* ---------- Footer ---------- */}
      <p className="text-center text-gray-500 mt-16 text-sm pb-10 tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium">Trendora</span> — Crafted with ❤️ and
        passion for our customers.
      </p>
    </div>
  );
};

export default Contact;
