import React from "react";
import { HomePageContainer } from "./styled";
import { PiArrowDownLight } from "react-icons/pi";

import ProjectShowOff from "./ProjectShowOff";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import HowItsWork from "./HowItsWork";
import Reviews from "./Reviews";
import OurWork from "./OurWork";
import CommonSlider from "../../Components/CommonSlider";
import AboutUs from "./AboutUs";
import ComparisonSection from "./Comparison";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";
import WhereWeAre from "./WhereWeAre";
import Achievements from "./Achievements";
import BlogsSlider from "./Blogs";
import FAQSection from "../../Components/AccordionComponent";
import HeroSection from "./HeroSection";
import Meta from "../../Utils/Meta";
import "react-lazy-load-image-component/src/effects/blur.css";

const HomePage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    swipe: false,
  };
  return (
    <HomePageContainer>
      <Meta title={"Home"} />
      <ScrollToTopOnMount />
      <HeroSection />
      <div className="container">
        <ProjectShowOff />
      </div>
      <div className="container">
        <WhyChooseUs />
        <Achievements />
        <BlogsSlider />
      </div>
      <Services />
      <div className="container">
        <ComparisonSection />
        <OurWork />
      </div>
      <WhereWeAre />
      <div className="container">
        <Reviews />
        <AboutUs />
        <FAQSection />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
