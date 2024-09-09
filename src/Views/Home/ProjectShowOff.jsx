import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import DryCleanImg from "../../assets/HomePage/home-section.jpg";
import { ProjectShowOffContainer } from "./styled";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectShowOff = () => {
  const [counterStart, setCounterStart] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Counter will only trigger once when the section is in view
    threshold: 0.1, // This means 10% of the section is visible
  });

  if (inView && !counterStart) {
    setCounterStart(true); // Start the counter when the section is in view
  }

  return (
    <ProjectShowOffContainer ref={ref}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="image-cover">
            <LazyLoadImage
              alt={"DryCleanImg"}
              src={DryCleanImg}
              effect="black-and-white" // You can also use "opacity" or "black-and-white"
              placeholderSrc="placeholder.jpg"
              style={{ height: "100%", }}
            />
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
                <div className="value">
                  <span>{counterStart && <CountUp start={5} end={500} />}</span>
                  +
                </div>
              </div>
              <div className="number-of-clients">
                <div className="client-label">Satisfied Customers</div>
                <div className="value">
                  <span>
                    {counterStart && <CountUp start={2} end={2000} />}
                  </span>
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectShowOffContainer>
  );
};

export default ProjectShowOff;
