import React, { useEffect } from "react";
import { ComparisonContainer } from "./styled";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import GridImage4 from "../../assets/HomePage/image-4.jpg";
import GridImage3 from "../../assets/HomePage/image-3.jpg";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <ComparisonContainer ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-header">
          <div className="section-title">Before After</div>
        </div>
        <div className="image-cover">
          <ReactCompareSlider
            className="image-comparison"
            itemOne={
              <LazyLoadImage
                src="https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0358.png?alt=media&token=55e3ca61-1dd6-486b-bf54-5db234df716c"
                alt="Before Image"
                effect="blur"
                placeholderSrc={GridImage4}
                style={{ width: "100%", height: "auto" }}
              />
            }
            itemTwo={
              <LazyLoadImage
                src="https://firebasestorage.googleapis.com/v0/b/soleexports-30908.appspot.com/o/site_images%2FIMG_0371.png?alt=media&token=06612a54-2724-49b9-a3e1-83f463bc76b6"
                alt="After Image"
                effect="blur"
                placeholderSrc={GridImage3}
                style={{ width: "100%", height: "auto" }}
              />
            }
          />
        </div>
      </motion.div>
    </ComparisonContainer>
  );
};

export default ComparisonSection;
