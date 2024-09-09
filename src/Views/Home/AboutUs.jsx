import React from "react";
import { AboutUsContainer } from "./styled";
import AboutUsImage from "../../assets/HomePage/about-us.jpg";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";
import Meta from "../../Utils/Meta";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const AboutUs = ({ className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <AboutUsContainer className={className} ref={ref}>
      {className && <Meta title={"About Us"} />}
      {className && <ScrollToTopOnMount />}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-label">About Us</div>
        <div className="section-title">What we are?</div>
      </motion.div>
      <div className="row g-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <motion.div
            className="image-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <img src={AboutUsImage} alt="About Us" />
          </motion.div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <motion.div
            className="content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="service-content-title">What is SolExpert</div>
            <div className="service-content-description">
              SOLEXPERT is a renowned company that works on making this world a
              better place to live in. We all know the resources of the earth
              are getting empty every day. So, to overcome this problem we need
              to use renewable types of energy resources. Solar energy is one of
              the most used renewable energies. Solexpert comes with a vision to
              give renewable energies a new future. Starting from solar energy,
              we have a vast vision; we want to make India one of the leading
              capitals in the field of solar energy. We are on our mission, and
              we won't stop until our dreams are accomplished.
            </div>
            <Link to={"/contact-us"} className="service-content-button">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </AboutUsContainer>
  );
};

export default AboutUs;
