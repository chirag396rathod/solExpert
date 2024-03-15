import React, { useRef } from "react";
import { OurWorkContainer } from "./styled";
import CommonSlider from "../../Components/CommonSlider";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import work1 from "../../assets/HomePage/work-1.png";
import work2 from "../../assets/HomePage/work-2.png";
import work3 from "../../assets/HomePage/work-3.png";
import work4 from "../../assets/HomePage/work-4.png";
import work5 from "../../assets/HomePage/work-5.png";
import work6 from "../../assets/HomePage/work-6.png";
import work7 from "../../assets/HomePage/work-7.png";
import work8 from "../../assets/HomePage/work-8.png";
import work9 from "../../assets/HomePage/work-9.png";
import work10 from "../../assets/HomePage/work-10.png";

const workList = [
  {
    image: work1,
    location: "Gotri, Vadodara",
  },
  {
    image: work2,
    location: "Alkapuri, Vadodara",
  },
  {
    image: work3,
    location: "CTM, Ahmedabad",
  },
  {
    image: work4,
    location: "Gorwa, Vadodara",
  },
  {
    image: work5,
    location: "Maninagar, Ahmedabad",
  },
  {
    image: work6,
    location: "Shubhanpura, Vadodara",
  },
  {
    image: work7,
    location: "Akota, Vadodara",
  },
  {
    image: work8,
    location: "Gota, Ahmedabad",
  },
  {
    image: work9,
    location: "Maninagar, Ahmedabad",
  },
  {
    image: work10,
    location: "Chiloda, Gandhinagar",
  },
];
const OurWork = () => {
  const sliderRef = useRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <OurWorkContainer>
      <div className="section-header">
        <div className="section-label">Our Work</div>
        <div className="section-title">Our Latest Project Gallery</div>
      </div>
      <div className="slider-container">
        <CommonSlider settings={settings} sliderRef={sliderRef}>
          {workList.map((item, key) => (
            <div className="work-card" key={`slider-${key}`}>
              <div className="image-cover">
                <img src={item.image} alt="" />
              </div>
              <div className="location">{item.location}</div>
            </div>
          ))}
        </CommonSlider>
        <div className="icon-cover left" onClick={previousSlide}>
          <FaArrowLeft size={16} />
        </div>
        <div className="icon-cover right" onClick={nextSlide}>
          <FaArrowRight size={16} />
        </div>
      </div>
    </OurWorkContainer>
  );
};

export default OurWork;
