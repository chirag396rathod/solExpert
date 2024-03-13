import React from "react";
import { ContactUsContainer } from "./styled";
import AddressMap from "../../Components/AddressMap";
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <div className="section-header">
        <div className="section-label">Contact Us</div>
        <div className="section-title">Where To Find Us</div>
      </div>
      <div className="row g-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="content">
            <AddressMap />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="content">
            <div className="service-content-title">Leave A Massage</div>
            <div className="form-container">
              <div className="row g-5">
                <div className="col-6">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div className="col-6">
                  <label>LastName</label>
                  <input type="text" placeholder="Enter Last Name" />
                </div>
                <div className="col-12">
                  <label>Email</label>
                  <input type="text" placeholder="Enter Email" />
                </div>
                <div className="col-12">
                  <label>Describe Your Query</label>
                  <textarea type="text" placeholder="Write here..." row="4" />
                </div>
              </div>
              <div className="service-content-button">Send Message</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="service-content-title">Contact Detail</div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="content-card">
            <div className="icon-cover">
              <IoHomeOutline width={24} />
              <div className="content">
                FF-16, AMARDEEP HOMES, Near Kamla Nagar, Nehru Chacha Nagar,
                TALAV, Vadodara, Gujarat 390019
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="content-card">
            <div className="icon-cover">
              <IoCallOutline width={24} />
              <div className="content">
                <span>
                  <a href="tel:+919727630039">+91 9727630039</a>
                </span>
              </div>
              <div className="content">Monday To Saturday, 9AM To 6PM</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="content-card">
            <div className="icon-cover">
              <MdAlternateEmail width={24} />
              <div className="content">
                <span>
                  <a href="mailto:solexpert365@gmail.com">
                    solexpert365@gmail.com
                  </a>
                </span>
                Email Us For Query
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactUsContainer>
  );
};

export default ContactUs;
