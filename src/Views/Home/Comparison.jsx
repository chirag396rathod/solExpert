import React, { useEffect } from "react";
import { ComparisonContainer } from "./styled";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import GridImage4 from "../../assets/HomePage/image-4.jpg";
import GridImage3 from "../../assets/HomePage/image-3.jpg";

const ComparisonSection = () => {
  // Image preloading logic
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    // Preload both images
    preloadImage("https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0358.png?alt=media&token=55e3ca61-1dd6-486b-bf54-5db234df716c");
    preloadImage("https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0371.png?alt=media&token=06612a54-2724-49b9-a3e1-83f463bc76b6");
  }, []);

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
              src="https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0358.png?alt=media&token=55e3ca61-1dd6-486b-bf54-5db234df716c"
              alt="Before Image"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0371.png?alt=media&token=06612a54-2724-49b9-a3e1-83f463bc76b6"
              alt="After Image"
            />
          }
        />
      </div>
    </ComparisonContainer>
  );
};

export default ComparisonSection;
