import HeroSection from "./HeroSection";
import Opportunities from "./Opportunities";
import PricingSection from "./PricingSection";
import Solutions from "./Solution";
import VideoPlayerSection from "./VideoPlayerSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <VideoPlayerSection />
      <Opportunities />
      <Solutions />
      <PricingSection />
    </div>
  );
};
export default Home;
