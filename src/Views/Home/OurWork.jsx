import React, { useRef } from "react";
import { OurWorkContainer } from "./styled";
import CommonSlider from "../../Components/CommonSlider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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
  { image: work1, location: "Gotri, Vadodara" },
  { image: work2, location: "Alkapuri, Vadodara" },
  { image: work3, location: "CTM, Ahmedabad" },
  { image: work4, location: "Gorwa, Vadodara" },
  { image: work5, location: "Maninagar, Ahmedabad" },
  { image: work6, location: "Shubhanpura, Vadodara" },
  { image: work7, location: "Akota, Vadodara" },
  { image: work8, location: "Gota, Ahmedabad" },
  { image: work9, location: "Maninagar, Ahmedabad" },
  { image: work10, location: "Chiloda, Gandhinagar" },
];

const OurWork = () => {
  const sliderRef = useRef();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const settings = {
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
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: false } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <OurWorkContainer ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-header">
          <div className="section-label">Our Work</div>
          <div className="section-title">Our Latest Project Gallery</div>
        </div>
        <div className="slider-container">
          <CommonSlider settings={settings} sliderRef={sliderRef}>
            {workList.map((item, key) => (
              <motion.div
                className="work-card"
                key={`slider-${key}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: key * 0.1 }} // Staggered animation
              >
                <div className="image-cover">
                  <LazyLoadImage
                    src={item.image}
                    alt={`Work ${key}`}
                    effect="blur"
                    placeholderSrc={item.image} // Use the same image as a placeholder
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="location">{item.location}</div>
              </motion.div>
            ))}
          </CommonSlider>
          <div className="icon-cover left" onClick={previousSlide}>
            <FaArrowLeft size={16} />
          </div>
          <div className="icon-cover right" onClick={nextSlide}>
            <FaArrowRight size={16} />
          </div>
        </div>
      </motion.div>
    </OurWorkContainer>
  );
};

export default OurWork;
