import React from "react";
import Slider from "react-slick";

const CommonSlider = ({ className, settings, sliderRef, children }) => {
  return (
    <Slider className={className} ref={sliderRef} {...settings}>
      {children}
    </Slider>
  );
};

export default CommonSlider;
