import React from "react";
import { ServicesContainer } from "./styled";
import GridImage3 from "../../assets/HomePage/image-3.jpg";
import GridImage5 from "../../assets/HomePage/image-5.jpg";

import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";

import DryCleanImg from "../../assets/HomePage/dray-clean.jpg";
import WaterCleaning from "../../assets/HomePage/Water-cleaning.jpg";
import ChemicalCleaning from "../../assets/HomePage/Chemical_Cleaning.jpg";
import Maintenance from "../../assets/HomePage/PowerPlantMaintenance.jpg";
import Meta from "../../Utils/Meta";

const Services = ({ className }) => {
  const navigation = useNavigate();
  const handleKnowMore = (name) => {
    navigation(`/service/${name}`);
  };
  const mockData = [
    {
      title: "Solar Panel Cleaning (Using Water)",
      description:
        "Optimize solar panel performance through thorough cleaning with water-based solutions.",
      img: ChemicalCleaning,
    },
    {
      title: "Dry Solar Panel Cleaning ( Dry )",
      description:
        "Revitalize your solar panels with our water-free cleaning expertise, maximizing efficiency and sustainability.",
      img: DryCleanImg,
    },
    {
      title: "Chemical Cleaning",
      description:
        "We suggest if your panel health is not good and transparency of glass is less they need chemical cleaning (Cement partial, rubber partial).",
      img: WaterCleaning,
    },
    {
      title: "Solar Power Plant Maintenance",
      description:
        "Generation of your Panel not as per PVSys they need maintenance (Maintenance Solution include up to Inverter).",
      img: Maintenance,
    },
  ];

  return (
    <ServicesContainer className={className}>
      {className && <Meta title={"Services"} />}
      {className && <ScrollToTopOnMount />}
      <div className="container">
        <div className="section-header">
          <div className="section-label">Services</div>
          <div className="section-title">What We Provides</div>
        </div>
        <div className="row g-3">
          {mockData.map((item, key) => (
            <div className="col-md-6 col-sm-12 col-lg-3" key={key}>
              <div className="service-card">
                <div className="service-image-cover">
                  <img src={item.img} alt="GridImage3" />
                </div>
                <div className="service-title">{item.title}</div>
                <div className="service-description">{item.description}</div>
                <div className="more-details">More Details</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
