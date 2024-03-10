import React from "react";
import { FooterContainer } from "./styled";
import Logo from "../../assets/HomePage/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="footer-top">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="get-in-touch-section">
            <div className="title">Get In Touch</div>
            <div className="social-list">
              <a href="https://wa.me/+919727630039" className="social-icon">
                <FaWhatsapp size={16} />
              </a>
              <a
                href="https://www.facebook.com/solexpert.in?mibextid=ZbWKwL"
                className="social-icon"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=Check+out+Solexpert%20-%20Solar%20Panel%20Cleaning%20Service%27s+website.+Follow+for+latest+updates+and+offers+regularly+at&url=https://www.solexpert.in&hashtags=OnlineBusiness"
                className="social-icon"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="https://instagram.com/solexpert.in?igshid=aHgxcnkxeXpraGJi"
                className="social-icon"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-contact-link">
          <div className="contact-item">
            <span>Phone: </span>
            +91 9727630039
          </div>
          <div className="contact-item">
            <span>Email: </span>
            solexpert365@gmail.com
          </div>
        </div>
        <div className="copy-right-content">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy. Privacy Policy and Content Policies
        </div>
        <div className="copy-right-content">
          © 2024 SolExpert. All Rights Reserved.
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
