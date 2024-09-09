import React from "react";
import { ReviewsContainer } from "./styled";
import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const mockData = [
    {
      name: "Bhavana Parihar",
      info: `First time serviced with SOLEXPERT team. Getting very good result, good team and approach for work is so good. 1st preference SOLEXPERT Best solar panel cleaning provider in Manjalpur area.`,
      rate: 5,
    },
    {
      name: "Karuna Sharma",
      info: `Good solar panel cleaning service. All dust and bird droppings removed efficiently. Result was good, experience was great. Thank you so much, SOLEXPERT.`,
      rate: 4.5,
    },
    {
      name: "Sujal Chauhan",
      info: `Best Solar Service. Quick response and great work. Efficient results in Vadodara.`,
      rate: 5,
    },
    {
      name: "Hiren",
      info: `We are extremely satisfied with the supply and installation services of the SOLEXPERT solar rooftop system in our house.`,
      rate: 4,
    },
  ];

  const renderStars = (rate) => {
    const stars = [];
    const floorRate = Math.floor(rate);
    const hasHalfStar = rate - floorRate >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRate) {
        stars.push(<FaStar key={i} />);
      } else if (i === floorRate + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<CiStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <ReviewsContainer ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-label">Reviews</div>
        <div className="section-title">What are people saying?</div>
      </motion.div>
      <div className="row g-3">
        {mockData.map((item, key) => (
          <motion.div
            className="col-lg-3 col-md-6 col-sm-12"
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: key * 0.2 }} // Stagger effect
          >
            <div className="review-card">
              <div className={`user-profile profile-${key + 1}`}>
                <span>{item.name.split("")[0]}</span>
              </div>

              <div className="user-name">{item.name}</div>
              <div className="review-description">{item.info}</div>
              <div className="rating">{renderStars(item.rate)}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
