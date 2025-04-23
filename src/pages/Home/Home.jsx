import React from "react";
import Hero from "../../component/Home/Hero";
import Gallery from "../../component/Home/Gallery";
import Features from "../../component/Home/Features";
import TestimonialsSection from "../../component/Home/Testimonials";
import HowItWorks from "../../component/Home/Tutorial/HowItWroks";
import Pricing from "../../component/Home/Pricing";
import ContactSection from "../../component/Home/Conatct";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Gallery></Gallery>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <TestimonialsSection></TestimonialsSection>
      <Pricing></Pricing>
      <ContactSection></ContactSection>
    </>
  );
};

export default Home;
