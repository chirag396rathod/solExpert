import React from "react";
import { AboutUsContainer } from "./styled";
import AboutUsImage from "../../assets/HomePage/about-us.jpg";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";
import Meta from "../../Utils/Meta";

const AboutUs = ({ className }) => {
  return (
    <AboutUsContainer className={className}>
      {className && <Meta title={"About Us"} />}
      {className && <ScrollToTopOnMount />}
      <div className="section-header">
        <div className="section-label">About Us</div>
        <div className="section-title">What we are?</div>
      </div>
      <div className="row g-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="image-cover">
            <img src={AboutUsImage} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="content">
            <div className="service-content-title">What is SolExpert</div>
            <div className="service-content-description">
              SOLEXPERT is a renowned company that works on making this world a
              better place to live in. We all know the resources of the earth
              are getting empty every day. So, to overcome this problem we need
              to use renewable types of energy resources. Solar energy is one of
              the most used renewable energies. Solexpert come with a vision to
              give renewable energies a new future. Starting from solar energy
              we have a vast vision; we want to make india one of the leading
              capitals in the field of solar energy. We are on our mission, and
              we won't stop until our dreams are accomplished.
            </div>
            <Link to={"/contact-us"} className="service-content-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </AboutUsContainer>
  );
};

export default AboutUs;
