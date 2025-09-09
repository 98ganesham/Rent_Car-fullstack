import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row md:items-center items-center justify-between px-8 min-md:pl-14 pt-10  bg-gradient-to-r from-[#0558fe] to-[#a9cfff] max-w-6xl mx-6 md:mx-auto rounded-2xl overflow-hidden"
    >
      {/* Left Content */}
      <div className="text-white text-center md:text-left flex-1 px-2">
        <h2 className="text-2xl font-medium">Do You Own A Premium Car?</h2>
        <p className="mt-2">
          Monetize Your Car Effortlessly By Listing It On CarRental.
        </p>
        <p className="max-w-130">
          We Take Care Of Insurance, Driver Verification and Secure Payments –
          So You Can Earn Passive Income, Stress-Free.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm sm:text-base mt-4 mb-3 cursor-pointer"
        >
          List Your Car
        </motion.button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end flex-1 mt-8 md:mt-0 px-2">
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          src={assets.banner_car_image}
          alt="car"
          className="max-w-full max-h-45 object-contain mt-10"
        />
      </div>
    </motion.div>
  );
};

export default Banner;
