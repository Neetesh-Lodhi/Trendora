import React from "react";
import { assets } from "../assets/assets";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, link: "https://facebook.com" },
    { icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com" },
    { icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com" },
    { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white via-pink-50/40 to-gray-50 text-gray-700 pt-20 pb-10 px-6 sm:px-12 md:px-20 border-t border-gray-200">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mb-12">
        {/* Logo + About */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img
            src={assets.logo4}
            alt="Trendora Logo"
            loading="lazy"
            className="w-44 sm:w-52 mb-5 object-contain transition-transform duration-500 hover:scale-105"
          />
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md">
            <span className="font-semibold text-gray-900">Trendora</span> is
            your go-to fashion brand — blending style, comfort, and creativity
            to help you look your best every day.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-pink-50 transition-transform duration-300 hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-5 text-gray-800 tracking-wide">
            COMPANY
          </h2>
          <ul className="flex flex-col gap-3 text-gray-600">
            {["Home", "About Us", "Delivery", "Privacy Policy"].map(
              (item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-pink-500 transition-all"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-5 text-gray-800 tracking-wide">
            GET IN TOUCH
          </h2>
          <ul className="flex flex-col gap-3 text-gray-600 text-sm sm:text-base">
            <li className="flex items-center gap-3 hover:text-pink-500 transition-all">
              <Phone className="w-4 h-4" /> +91 9905707561
            </li>
            <li className="flex items-center gap-3 hover:text-pink-500 transition-all">
              <Mail className="w-4 h-4" /> neeteshlodhi9555@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:text-pink-500 transition-all">
              <MapPin className="w-4 h-4" /> Bhopal, Madhya Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800">Trendora</span> — Crafted
        with 💖 by <span className="text-pink-500">Neetesh Lodhi</span>.
      </p>
    </footer>
  );
};

export default Footer;
