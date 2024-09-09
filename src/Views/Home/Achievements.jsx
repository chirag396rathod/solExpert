import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AchievementsContainer } from "./styled";
import CountUp from "react-countup";

const Achievements = () => {
  const [counterStart, setCounterStart] = useState(false);

  // useInView hook to trigger animation when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  // Start the counter when the section is in view
  if (inView && !counterStart) {
    setCounterStart(true);
  }

  return (
    <AchievementsContainer ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state of the animation
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animation state when in view
        transition={{ duration: 1 }} // Duration of the animation
      >
        <div className="section-header">
          <div className="section-label">About Us</div>
          <div className="section-title">Our Achievements</div>
        </div>
        <div className="row gx-3 gy-5">
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="achievements-container">
              <div className="index">
                <span>{counterStart && <CountUp start={1} end={10} />}</span>+
              </div>
              <div className="text">Projects</div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="achievements-container">
              <div className="index">
                <span>{counterStart && <CountUp start={18} end={180} />}</span>+
              </div>
              <div className="text">Positive Feedback</div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="achievements-container">
              <div className="index">
                <span>{counterStart && <CountUp start={20} end={200} />}</span>+
              </div>
              <div className="text">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </motion.div>
    </AchievementsContainer>
  );
};

export default Achievements;
