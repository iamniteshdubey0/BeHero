import React from "react";
import Hero from "../../component/Home/Hero";
import Gallery from "../../component/Home/Gallery";
import Features from "../../component/Home/Features";
import Tutorial from "../../component/Home/Tutorial/Tutorial";
import Testimonials from "../../component/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Gallery></Gallery>
      <Features></Features>
      <Tutorial></Tutorial>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
