import React from "react";
import { HomePageContainer } from "./styled";
import { PiArrowDownLight } from "react-icons/pi";

import GridImage1 from "../../assets/HomePage/image-1.jpg";
import GridImage2 from "../../assets/HomePage/image-2.jpg";
import GridImage4 from "../../assets/HomePage/image-4.jpg";
import GridImage3 from "../../assets/HomePage/image-3.jpg";
import GridImage5 from "../../assets/HomePage/image-5.jpg";
import GridImage6 from "../../assets/HomePage/image-6.jpg";
import googleIcon from "../../assets/HomePage/google.svg";
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
      <ScrollToTopOnMount />
      <div className="container">
        <div className="hero-section">
          <div className="row g-0">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="hero-text">
                No.1 Solar Panel <br /> Cleaning Services in Gujarat - Delivered
                Directly to You!
              </div>
              <div className="hero-description">
                Efficient Cleaning for Maximum Energy Production. <br /> Let Us
                Brighten Your Solar Investment!
              </div>
              <div className="buttons">
                <div className="hero-btn">Book Service</div>
                <div className="alt-btn  hero-btn">Call Now!</div>
              </div>
              <div className="google-review-box">
                <div className="icon-cover">
                  <img src={googleIcon} alt="" />
                </div>
                <div className="content">
                  <div className="title">
                    Solexpert is Gujarat's trusted solar cleaning company
                  </div>
                  <div className="description">
                    Based on 4.9 rating on Google and 200+ Satisfied Customer
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="grid-container">
                <div className="row my-row g-3 image-grid">
                  <CommonSlider className="my-col col-6" settings={settings}>
                    <div className="image-cover">
                      <img src={GridImage4} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage3} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage5} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage6} />
                    </div>
                  </CommonSlider>
                  <CommonSlider className="col-6" settings={settings}>
                    <div className="image-cover">
                      <img src={GridImage3} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage5} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage6} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage4} />
                    </div>
                  </CommonSlider>
                  <CommonSlider className="col-6" settings={settings}>
                    <div className="image-cover">
                      <img src={GridImage5} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage6} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage4} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage3} />
                    </div>
                  </CommonSlider>
                  <CommonSlider className="col-6" settings={settings}>
                    <div className="image-cover">
                      <img src={GridImage6} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage4} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage3} />
                    </div>
                    <div className="image-cover">
                      <img src={GridImage5} />
                    </div>
                  </CommonSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ProjectShowOff />
        <HowItsWork />
      </div>
      <div className="container">
        <WhyChooseUs />
        <BlogsSlider />
      </div>
      <Services />
      <div className="container">
        <ComparisonSection />
        <OurWork />
      </div>
      <WhereWeAre />
      <div className="container">
        <Achievements />
        <Reviews />
        <AboutUs />
        <FAQSection />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
