import React from "react";
import { AchievementsContainer } from "./styled";

const Achievements = () => {
  return (
    <AchievementsContainer>
      <div className="section-header">
        <div className="section-label">About Us</div>
        <div className="section-title">Our Achievements</div>
      </div>
      <div className="row gx-3 gy-5">
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="achievements-container">
            <div className="index">10+</div>
            <div className="text">Projects</div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="achievements-container">
            <div className="index">180+</div>
            <div className="text">Positive Feedback</div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="achievements-container">
            <div className="index">200+</div>
            <div className="text">Satisfied Customer</div>
          </div>
        </div>
      </div>
    </AchievementsContainer>
  );
};

export default Achievements;
