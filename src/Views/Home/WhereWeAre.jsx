import React from "react";
import { WhereWeAreContainer } from "./styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const WhereWeAre = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <WhereWeAreContainer ref={ref}>
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.8 }}
      >
        We are available at
      </motion.div>
      <motion.div
        className="locations"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="place-name">Ahmadabad</div>
        <div className="place-name">Vadodara</div>
      </motion.div>
      <motion.div
        className="helper-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Have any query regarding solar service? Feel free to{" "}
        <Link to={"/contact-us"}>Contact Us</Link>!
      </motion.div>
    </WhereWeAreContainer>
  );
};

export default WhereWeAre;
