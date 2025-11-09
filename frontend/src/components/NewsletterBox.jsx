import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative text-center bg-gradient-to-r from-rose-50 via-white to-rose-50 py-14 px-8 sm:px-12 rounded-3xl shadow-lg border border-rose-100 mx-3 sm:mx-10 lg:mx-20 mt-10 transition-all duration-500 hover:shadow-xl">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-100/40 to-transparent blur-2xl -z-10"></div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
        Join Our Community & Get <span className="text-rose-500">20% Off</span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Be the first to know about our{" "}
        <span className="font-medium text-rose-500">exclusive offers</span>, new
        arrivals, and the latest trends straight to your inbox.
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row items-center justify-center bg-white border border-gray-200 rounded-full mt-8 mx-auto max-w-2xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-rose-300 transition-all"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="flex-1 px-6 py-4 text-base outline-none bg-transparent"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm sm:text-base font-semibold px-10 py-4 hover:from-rose-600 hover:to-rose-700 transition-all duration-300"
        >
          SUBSCRIBE
        </button>
      </form>

      {/* Decorative Note */}
      <p className="text-sm text-gray-400 mt-5">
        ✨ We promise — only the good stuff, no spam!
      </p>
    </div>
  );
};

export default NewsletterBox;
