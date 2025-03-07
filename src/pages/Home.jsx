import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import HeroSection from "./HeroSection";
import Opportunities from "./Opportunities";
import PricingSection from "./PricingSection";
import Solutions from "./Solution";
import VideoPlayerSection from "./VideoPlayerSection";
import About from "./About";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
      offset: 200,
    });
  }, []);

  return (
    <div className="flex flex-col">
      <section data-aos="fade-up" data-aos-delay="100">
        <HeroSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="100">
        <About />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <VideoPlayerSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="300">
        <Opportunities />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <Solutions />
      </section>

      <section data-aos="fade-up" data-aos-delay="500">
        <PricingSection />
      </section>
    </div>
  );
};

export default Home;
