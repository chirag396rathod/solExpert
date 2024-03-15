import React from "react";
import { WhereWeAreContainer } from "./styled";
import { Link } from "react-router-dom";

const WhereWeAre = () => {
  return (
    <WhereWeAreContainer>
      <div className="section-title">We are available at</div>
      <div className="locations">
        <div className="place-name">Ahmadabad</div>
        <div className="place-name">Vadodara</div>
      </div>
      <div className="helper-text">
        have any query regrading solar service fill free to{" "}
        <Link to={"/contact-us"}>Contact Us</Link>!
      </div>
    </WhereWeAreContainer>
  );
};

export default WhereWeAre;
