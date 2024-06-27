import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Logo from "../../assets/HomePage/logo.png";
import { HeaderContainer } from "./styled";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => {
    setMenuToggle(!menuToggle);
  };
  const handlePayNow = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://api.ekqr.in/api/create_order",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          key: "03cb995f-a7af-4f7d-882a-e67f10128158",
          client_txn_id: "uniqId",
          amount: "1",
          p_info: "Demo Product Name",
          customer_name: "Jon Doe",
          customer_email: "jondoe@gmail.com",
          customer_mobile: "9876543210",
          redirect_url: "www.google.com",
        }),
      });
      console.log(response.data);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <HeaderContainer isAboutPage={true}>
      <div className="header-container container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {!menuToggle ? (
            <HiOutlineMenuAlt3 size={24} />
          ) : (
            <IoClose size={24} />
          )}
        </div>
        <div className="web-menu">
          <div className="nav-list">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-items active" : "nav-items"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-items active" : "nav-items"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "nav-items active" : "nav-items"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "nav-items active" : "nav-items"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "nav-items active" : "nav-items"
              }
            >
              Blogs
            </NavLink>

            <a
              // href="https://forms.gle/fA6zzyoBCLEPhLRL6"
              // target="_blank"
              className="social-icon"
            >
              <div className="download-app" onClick={handlePayNow}>Contact Now!</div>
            </a>
          </div>
        </div>
        {menuToggle && (
          <div className="mobile-menu">
            <div className="nav-list">
              <div className="container">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-items active" : "nav-items"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "nav-items active" : "nav-items"
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? "nav-items active" : "nav-items"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? "nav-items active" : "nav-items"
                  }
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "nav-items active" : "nav-items"
                  }
                >
                  Blogs
                </NavLink>
                <a
                  href="https://forms.gle/fA6zzyoBCLEPhLRL6"
                  href="#"
                  target="_blank"
                  className="social-icon"
                >
                  <div  className="download-app">
                    Contact Now!
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
