import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Aye Aye",
      location: "Yangon, Myanmar",
      image: assets.testimonial_image_1,
      testimonial:
        "I've rented car from various companies, but the experience with SwiftDrive was exceptional. The car was in pristine condition, and the customer service was top-notch. Highly recommend!",
    },
    {
      name: "Aye Myint",
      location: "Mandalay, Myanmar",
      image: assets.testimonial_image_1,
      testimonial:
        "I've rented car from various companies, but the experience with SwiftDrive was exceptional. The car was in pristine condition, and the customer service was top-notch. Highly recommend!",
    },
    {
      name: "Ma Kyaw",
      location: "Naypyidaw, Myanmar",
      image: assets.testimonial_image_2,
      testimonial:
        "SwiftDrive made my trip unforgettable. The car was not only luxurious but also very comfortable. The booking process was smooth, and the staff was incredibly helpful. I will definitely rent from them again!",
    },
    {
      name: "Zar Ni Aye",
      location: "Yangon, Myanmar",
      image: assets.testimonial_image_1,
      testimonial:
        "I highly recommend SwiftDrive for anyone looking for a premium car rental experience. The car was immaculate, and the service was outstanding. They truly go above and beyond to ensure customer satisfaction.",
    },
  ];
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title={"What Our Customers Say"}
        subTitle={
          "Discover why discerning travelers choose StayVenture for their premium accommodations around the world."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover: translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img
                    src={assets.star_icon}
                    key={index}
                    alt="star-icon"
                    className="max-w-5"
                  />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
