import React from "react";
import GridImage1 from "../../assets/HomePage/image-1.jpg";
import { ProjectShowOffContainer } from "./styled";

const ProjectShowOff = () => {
  return (
    <ProjectShowOffContainer>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="image-cover">
            <img src={GridImage1} alt="Grid Image" />
            <div className="quotes-box">Naturally Shine Brighter with Us!</div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="content">
            <div className="label">Start With SolExpert!</div>
            <div className="section-title">
              Renew Your Panels: <br /> Refreshing Solar Cleaning
            </div>
            <div className="description">
              Get ready to elevate your solar energy game with our comprehensive
              cleaning services. Our team is dedicated to revitalizing your
              panels, ensuring they operate at peak efficiency for maximum
              energy production. Say goodbye to dirt and grime and hello to a
              sparkling clean energy solution!
            </div>
            <div className="client-data">
              <div className="number-of-clients">
                <div className="client-label">Satisfied Clients</div>
                <div className="value">500+</div>
              </div>
              <div className="number-of-clients">
                <div className="client-label">Satisfied Costumers</div>
                <div className="value">2000+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectShowOffContainer>
  );
};

export default ProjectShowOff;
