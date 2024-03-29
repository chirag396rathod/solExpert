import React from "react";
import { WhyChooseUsContainer } from "./styled";

import { BsBrightnessHigh } from "react-icons/bs";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <WhyChooseUsContainer>
      <div className="section-header">
        <div className="section-label">Benefits</div>
        <div className="section-title">Why Choose Us</div>
      </div>
      <div className="row g-3">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="benefit-card card-1">
            <BsBrightnessHigh size={40} color="##fff" />
            <div className="card-title">Efficiency</div>
            <div className="card-description">
              Enhance the efficiency of your solar panels by keeping them clean
              and free from dirt and debris.{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="benefit-card card-2">
            <GiReceiveMoney size={40} color="##fff" />
            <div className="card-title">Cost-Effectiveness</div>
            <div className="card-description">
              Save money in the long run by investing in regular solar panel
              cleaning.
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="benefit-card card-3">
            <GiVacuumCleaner size={40} color="##fff" />
            <div className="card-title">Professional cleaning</div>
            <div className="card-description">
              Experience Professionally Executed Cleaning Services Tailored for
              Your Solar Panels
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="benefit-card card-4">
            <MdSwitchAccessShortcutAdd size={40} color="##fff" />
            <div className="card-title">Cleaning with safety</div>
            <div className="card-description">
              Experience the Ultimate in Safe and Reliable Cleaning Services
              Tailored Specifically for Your Solar Panels
            </div>
          </div>
        </div>
      </div>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUs;
