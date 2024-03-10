import React from "react";
import { HowItsWorkContainer } from "./styled";
import { MdAdsClick } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";

const HowItsWork = () => {
  return (
    <HowItsWorkContainer>
      <div className="section-header">
        <div className="section-label">Why Choose Us</div>
        <div className="section-title">How Its Work</div>
      </div>
      <div className="row g-3">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="info-card card-1">
            <div className="info-icon">
              <div className="index-box">1</div>
              <MdAdsClick size={40} className="card-icon" color="#0f0f0f" />
            </div>
            <div className="info-title">Select a Service</div>
            <div className="info-description">
              Opt for our meticulous Solar Care services to ensure pristine
              panels and peak performance.
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="info-card card-2">
            <div className="info-icon">
              <div className="index-box">2</div>
              <AiOutlineSchedule
                size={40}
                className="card-icon"
                color="#0f0f0f"
              />
            </div>
            <div className="info-title">Book a Slot</div>
            <div className="info-description">
              Effortlessly book your SolExpert service with our intuitive
              Android App.
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="info-card card-3">
            <div className="info-icon">
              <div className="index-box">3</div>
              <IoHomeOutline size={40} className="card-icon" color="#0f0f0f" />
            </div>
            <div className="info-title">Door-step Care</div>
            <div className="info-description">
              Expert service, tools, and power - all delivered to your doorstep.
            </div>
          </div>
        </div>
      </div>
    </HowItsWorkContainer>
  );
};

export default HowItsWork;
