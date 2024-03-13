import React from "react";
import { ComparisonContainer } from "./styled";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import GridImage4 from "../../assets/HomePage/image-4.jpg";
import GridImage3 from "../../assets/HomePage/image-3.jpg";

const ComparisonSection = () => {
  return (
    <ComparisonContainer>
      <div className="section-header">
        <div className="section-title">Before After</div>
      </div>
      <div className="image-cover">
        <ReactCompareSlider
          className="image-comparison"
          itemOne={
            <ReactCompareSliderImage
              src={GridImage4}
              srcSet={GridImage4}
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={GridImage3}
              srcSet={GridImage3}
              alt="Image two"
            />
          }
        />
      </div>
    </ComparisonContainer>
  );
};

export default ComparisonSection;
