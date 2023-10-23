import About from "./About";
import Slider from "./Banner/Slider";
import LocationAdress from "./LocationAdress";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <LocationAdress/>
    </>
  );
};

export default Home;
