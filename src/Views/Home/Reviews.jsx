import React from "react";
import { ReviewsContainer } from "./styled";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Reviews = () => {
  const mockData = [
    {
      name: "Bhavana Parihar",
      info: `First time serviced with SOLEXPERT team. Getting very good result, good team and approch for work is so good. 1st preference SOLEXPERT Best solar panel cleaning provider in manjalpur area.`,
      rate: 5,
    },
    {
      name: "Karuna Sharma",
      info: `Good solar panel cleaning service all dust and bird drop remove efficiency result good experience thank u so much solexpert.`,
      rate: 4.5,
    },
    {
      name: "Sujal Chauhan",
      info: `Best Solar Service quick response and great work efficiently result Vadodara`,
      rate: 5,
    },
    {
      name: "Hiren",
      info: `We are extremely satisfied with the supply and installation services of solar rooptop SOLEXPERT system in our house.`,
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
    <ReviewsContainer>
      <div className="section-header">
        <div className="section-label">Reviews</div>
        <div className="section-title">What are people saying?</div>
      </div>
      <div className="row g-3">
        {mockData.map((item, key) => (
          <div className="col-lg-3 col-md-6 col-sm-12" key={key}>
            <div className="review-card">
              <div className={`user-profile profile-${key + 1}`}>
                <span>{item.name.split("")[0]}</span>
              </div>

              <div className="user-name">{item.name}</div>
              <div className="review-description">{item.info}</div>
              <div className="rating">{renderStars(item.rate)}</div>
            </div>
          </div>
        ))}
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
