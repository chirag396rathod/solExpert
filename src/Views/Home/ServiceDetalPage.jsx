import React from "react";
import { ServiceDetailContainer } from "./styled";
import { IoMdCheckmark } from "react-icons/io";
import GridImage3 from "../../assets/HomePage/image-3.jpg";
import GridImage5 from "../../assets/HomePage/image-5.jpg";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  let title = id.split("-").join(" ").toLowerCase();
  const data = [
    {
      image: GridImage3,
      title: "Commercial Solar Panel Cleaning",
      desc: "We have carried out solar panel cleaning on large scale ground mounted solar farms and commercial buildings across Southern California. Your solar panels are an expensive investment and it is wise to ensure they are cleaned by insured and trained professionals.",
      desc2: `The cost benefit of keeping your panels clean makes a regular cleaning schedule a no-brainer. Increasing the power output and efficiency of your solar system by 20% or more in heavy soil areas, like farms or air traffic paths, can greatly impact your energy bill savings. If you own or maintain a commercial solar panel array, you will no doubt be interested in reaping the largest financial reward from your array and seeing your return on investment (ROI) as soon as possible. Solar panel cleaning will help you to do just that. Having dirty solar panels can severely dent your ROI timeline. By having clean solar panels, more light hits the solar cells meaning more generation which in turn means greater ROI, sooner.`,
      subTitle: "We also provide a 6 point solar array health check including:",
      keyPoints: [
        "Professional solar panel clean",
        "Inspection of the integrity of the glass of the solar panels - birds can cause breakage",
        "Check the roof fixings are still intact",
        "Check for signs of damage from birds or squirrels",
        "Check the inverter for error codes",
      ],
    },
    {
      image: GridImage5,
      title: "Residential Solar Panel Cleaning",
      desc: "Solexpert Solar Cleaning, LLC has carried out solar panel cleaning on homes across Southern California. Your solar panels are an expensive investment and it is wise to ensure they are cleaned by insured and trained professionals.",
      desc2: `You had your solar system installed to save you money, make sure your panels are performing at their best all year long. Many people put solar on their roofs and never think about it again until the savings aren't adding up. Having a complimentary estimate from Premier Solar Cleaning can provide you with the answers to why your solar system isn't producing like it was when first installed. Hint: The panels are dirty and not performing at top efficiency, or possibly birds or other pests have taken up residence.`,
      desc3: `In fact, if you have solar panels on your roof and a pool in your backyard, we guarantee that you have a bird problem even if you can't currently see one.`,
      subTitle:
        "When we give FREE estimates, we also provide a 6 point solar array health check including:",
      keyPoints: [
        "Professional solar panel clean",
        "Inspection of the integrity of the glass of the solar panels - birds can cause breakage",
        "Check the framework of the solar panels for signs of damage, warping or corrosion",
        "Check the roof fixings are still intact",
        "Check for signs of damage from birds or squirrels",
        "Check the inverter for error codes",
      ],
    },
  ];
  const activePage = data[parseInt(id) - 1];

  return (
    <ServiceDetailContainer>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Service</div>
          <div className="section-title">{activePage.title}</div>
        </div>
        <div className="row g-5 content">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="image-cover">
              <img src={activePage.image} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="service-content-description">{activePage.desc}</div>
            <div className="service-content-description">
              {activePage.desc2}
            </div>
            {activePage.desc3 && (
              <div className="service-content-description">
                {activePage.desc3}
              </div>
            )}

            <div className="key-feature">
              <div className="title">{activePage.subTitle}</div>
              {activePage.keyPoints.map((item, key) => (
                <div className="item" key={key}>
                  <IoMdCheckmark size={24} color="#28a745" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact-us" className="service-content-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </ServiceDetailContainer>
  );
};

export default ServiceDetail;
