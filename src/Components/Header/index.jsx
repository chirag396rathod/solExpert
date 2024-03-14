import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Logo from "../../assets/HomePage/logo.png";
import { HeaderContainer } from "./styled";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => {
    setMenuToggle(!menuToggle);
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
            <div className="download-app">Download App Now!</div>
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

                <div className="download-app">Download App Now!</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
