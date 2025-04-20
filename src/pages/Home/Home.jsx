import React from "react";
import Hero from "../../component/Home/Hero";
import Gallery from "../../component/Home/Gallery";
import Features from "../../component/Home/Features";
import Tutorial from "../../component/Home/Tutorial/Tutorial";
import Testimonials from "../../component/Home/Testimonials";
import TestimonialsSection from "../../component/Home/Testimonials/Testimonials2";
import HowItWorks from "../../component/Home/Tutorial/HowItWroks";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Gallery></Gallery>
      <Features></Features>
      {/* <Tutorial></Tutorial> */}
      <HowItWorks></HowItWorks>
      {/* <Testimonials></Testimonials> */}
      <TestimonialsSection></TestimonialsSection>
    </>
  );
};

export default Home;
