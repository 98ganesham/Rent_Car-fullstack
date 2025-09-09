import React from "react";
import Hero from "../components/Hero";
import FeaturedSeaction from "../components/FeaturedSeaction";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import NewsLatter from "../components/NewsLatter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSeaction />
      <Banner />
      <Testimonial />
      <NewsLatter />
    </>
  );
};

export default Home;
