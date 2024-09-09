import React from "react";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeroSectionLayout } from "./styled";

import GridImage4 from "../../assets/HomePage/image-4.jpg";
import GridImage3 from "../../assets/HomePage/image-3.jpg";
import GridImage5 from "../../assets/HomePage/image-5.jpg";
import GridImage6 from "../../assets/HomePage/image-6.jpg";
import googleIcon from "../../assets/HomePage/google.svg";

const HeroSection = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoSlide: true,
    arrows: false,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <HeroSectionLayout>
      <div className="background-slider">
        <Slider {...setting}>
          <div className="slider-item">
            <div className="image-container">
              <LazyLoadImage
                alt={"GridImage3"}
                src={GridImage3}
                effect="black-and-white" // You can also use "opacity" or "black-and-white"
                placeholderSrc="placeholder.jpg"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="opacity-background"></div>
          </div>
          <div className="slider-item">
            <div className="image-container">
              <LazyLoadImage
                alt={"GridImage4"}
                src={GridImage4}
                effect="black-and-white" // You can also use "opacity" or "black-and-white"
                placeholderSrc="placeholder.jpg"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="opacity-background"></div>
          </div>
          <div className="slider-item">
            <div className="image-container">
              <LazyLoadImage
                alt={"GridImage5"}
                src={GridImage5}
                effect="black-and-white" // You can also use "opacity" or "black-and-white"
                placeholderSrc="placeholder.jpg"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="opacity-background"></div>
          </div>
          <div className="slider-item">
            <div className="image-container">
              <LazyLoadImage
                alt={"GridImage6"}
                src={GridImage6}
                effect="black-and-white" // You can also use "opacity" or "black-and-white"
                placeholderSrc="placeholder.jpg"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="opacity-background"></div>
          </div>
        </Slider>
      </div>
      <div className="hero-section">
        <div className="container">
          <div className="hero-text">
            No.1 Solar Panel <br /> Cleaning Services in Gujarat - Delivered
            Directly to You!
          </div>
          <div className="hero-description">
            Efficient Cleaning for Maximum Energy Production. <br />
            <TypeAnimation
              sequence={[
                "Boost Your Solar Efficiency with Our Expert Cleaning!",
                1000,
                "Keep Your Panels Shining, Energy Flowing!",
                1000,
                "Maximize Your Solar Power—We’ve Got You Covered!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="buttons">
            <a
              href="https://forms.gle/fA6zzyoBCLEPhLRL6"
              target="_blank"
              className="social-icon"
            >
              <div className="hero-btn">Book Service</div>
            </a>
            <a href="tel:+919727630039" className="social-icon">
              <div className="alt-btn  hero-btn">Call Now!</div>
            </a>
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
      </div>
    </HeroSectionLayout>
  );
};

export default HeroSection;
