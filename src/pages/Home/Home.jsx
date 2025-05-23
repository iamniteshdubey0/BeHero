
import Hero from "../../component/Home/Hero";
import Gallery from "../../component/Home/Gallery";
import Features from "../../component/Home/Features";
import TestimonialsSection from "../../component/Home/Testimonials";
import HowItWorks from "../../component/Home/Tutorial/HowItWroks";
import Pricing from "../../component/Home/Pricing";
import ContactSection from "../../component/Home/Conatct";
import Navbar from "../../component/global/NavBar/Navbar";
import Footer from "../../component/global/Footer";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Gallery></Gallery>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <TestimonialsSection></TestimonialsSection>
      <Pricing></Pricing>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  );
};

export default Home;
