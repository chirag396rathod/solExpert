import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { WhyChooseUsContainer } from "./styled";
import { BsBrightnessHigh } from "react-icons/bs";
import { GiVacuumCleaner, GiReceiveMoney } from "react-icons/gi";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";

const WhyChooseUs = () => {
  // Use `useInView` to trigger animation when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <WhyChooseUsContainer ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state of the animation
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animation state when in view
        transition={{ duration: 1 }} // Duration of the animation
      >
        <div className="section-header">
          <div className="section-label">Benefits</div>
          <div className="section-title">Why Choose Us</div>
        </div>
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="benefit-card card-1">
              <BsBrightnessHigh size={40} color="#fff" />
              <div className="card-title">Efficiency</div>
              <div className="card-description">
                Enhance the efficiency of your solar panels by keeping them clean and free from dirt and debris.
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="benefit-card card-2">
              <GiReceiveMoney size={40} color="#fff" />
              <div className="card-title">Cost-Effectiveness</div>
              <div className="card-description">
                Save money in the long run by investing in regular solar panel cleaning.
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="benefit-card card-3">
              <GiVacuumCleaner size={40} color="#fff" />
              <div className="card-title">Professional Cleaning</div>
              <div className="card-description">
                Experience professionally executed cleaning services tailored for your solar panels.
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="benefit-card card-4">
              <MdSwitchAccessShortcutAdd size={40} color="#fff" />
              <div className="card-title">Cleaning with Safety</div>
              <div className="card-description">
                Experience the ultimate in safe and reliable cleaning services tailored specifically for your solar panels.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUs;
