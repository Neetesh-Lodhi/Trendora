import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 relative">
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
        <div className="flex-1 flex justify-center animate-fadeIn">
          <img
            src={assets.contact_img}
            alt="Contact"
            className="w-full md:max-w-[480px] rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-md border border-gray-100 p-10 md:p-12 space-y-8 animate-slideUp">
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
              onClick={() => setShowModal(true)}
              className="relative border border-black px-8 py-3 text-sm font-medium overflow-hidden rounded-lg group"
            >
              <span className="absolute inset-0 bg-black transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative text-black group-hover:text-white transition-colors duration-500">
                Explore Jobs
              </span>
            </button>
          </div>
        </div>
      </div>

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

      {/* ---------- Modal ---------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeInFast">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 text-center max-w-md w-full mx-4 animate-scaleUp">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              We’re Hiring at Trendora!
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Excited to be part of our creative journey? Send your resume to{" "}
              <span className="text-rose-500 font-medium">
                careers@trendora.com
              </span>{" "}
              and let’s grow together!
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-2 rounded-full transition-all duration-300 shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
