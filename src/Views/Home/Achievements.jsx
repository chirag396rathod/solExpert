import React, { useState } from "react";
import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { AchievementsContainer } from "./styled";

const Achievements = () => {
  const sliderRef = useRef();
  const [counterStart, setCounterStart] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Counter will only trigger once when the section is in view
    threshold: 0.1, // This means 10% of the section is visible
  });

  if (inView && !counterStart) {
    setCounterStart(true); // Start the counter when the section is in view
  }

  return (
    <AchievementsContainer ref={ref}>
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
            <div className="text">Satisfied Customer</div>
          </div>
        </div>
      </div>
    </AchievementsContainer>
  );
};

export default Achievements;
