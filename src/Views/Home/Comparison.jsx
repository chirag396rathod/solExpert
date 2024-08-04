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
              src={
                "https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0358.png?alt=media&token=55e3ca61-1dd6-486b-bf54-5db234df716c"
              }
              srcSet={
                "https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0358.png?alt=media&token=55e3ca61-1dd6-486b-bf54-5db234df716c"
              }
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0371.png?alt=media&token=06612a54-2724-49b9-a3e1-83f463bc76b6"
              }
              srcSet={
                "https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0371.png?alt=media&token=06612a54-2724-49b9-a3e1-83f463bc76b6"
              }
              alt="Image two"
            />
          }
        />
      </div>
    </ComparisonContainer>
  );
};

export default ComparisonSection;
