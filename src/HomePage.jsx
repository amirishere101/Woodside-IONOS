import Home from "./Home/Home.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import Services from "./Services/Services.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Testimonials from "./Testimonials.jsx";

const HomePage = ({ setPage, setScrollToLunch }) => {
  return (
    <div>
      <Home setPage={setPage} setScrollToLunch={setScrollToLunch} />
      <Carousel />
      <Services setPage={setPage} />
      <Testimonials />
    </div>
  );
};

export default HomePage;
