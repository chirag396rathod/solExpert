import React from "react";
import { ServicesContainer } from "./styled";
import GridImage3 from "../../assets/HomePage/image-3.jpg";
import GridImage5 from "../../assets/HomePage/image-5.jpg";

import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigation = useNavigate();
  const handleKnowMore = (name) => {
    navigation(`/service/${name}`);
  };
  return (
    <ServicesContainer>
      <div className="section-header">
        <div className="section-label">What We Provides</div>
        <div className="section-title">Services</div>
      </div>
      <div className="row g-3  service-item">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="content">
            <div className="service-content-title">
              Commercial Solar Panel Cleaning
            </div>
            <div className="service-content-description">
              We have carried out solar panel cleaning on large scale ground
              mounted solar farms and commercial buildings across Southern
              California.
            </div>
            <div className="key-feature">
              <div className="item">
                <IoMdCheckmark size={24} color="#28a745" />
                <span>Professional clean</span>
              </div>
              <div className="item">
                <IoMdCheckmark size={24} color="#28a745" />
                <span>Framework Inspection</span>
              </div>
              <div className="item">
                <IoMdCheckmark size={24} color="#28a745" />
                <span>Roof Cleaning</span>
              </div>
            </div>
            <div
              className="service-content-button"
              onClick={() => handleKnowMore(1)}
            >
              Know More
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="center-container">
            <div className="image-cover">
              <img src={GridImage3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="center-container">
            <div className="image-cover">
              <img src={GridImage5} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="content">
            <div className="service-content-title">
              Residential Solar Panel Cleaning
            </div>
            <div className="service-content-description">
              Solexpert Solar Cleaning, LLC has carried out solar panel cleaning
              on homes across Southern California. Your solar panels are an
              expensive investment and it is wise to ensure they are cleaned by
              insured and trained professionals.
            </div>
            <div className="key-feature">
              <div className="item">
                <IoMdCheckmark size={24} color="#28a745" />
                <span>Professional clean</span>
              </div>
              <div className="item">
                <IoMdCheckmark size={24} color="#28a745" />
                <span>Framework Inspection</span>
              </div>
              <div className="item">
                <IoMdCheckmark size={24} color="#28a745" />
                <span>Roof Cleaning</span>
              </div>
            </div>
            <div
              className="service-content-button"
              onClick={() => handleKnowMore(2)}
            >
              Know More
            </div>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
