/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from "react";
import PropTypes from "prop-types";

export const Navbar = ({ userEmail, logoutLink, homeLink }) => {
  return (
    <div className="d-flex flex-column align-items-center bg-primary h-100">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 py-2 d-flex flex-row justify-content-between align-items-center">
        <div>
          <a href={homeLink}>
            <img
              height="40px"
              alt="logo"
              src="/staticfiles/images/logo_white.png"
            ></img>
          </a>
        </div>
        <div className="text-white">
          <span>{userEmail}</span>
          <a href={logoutLink}>
            <i className="fas fa-sign-out-alt text-white ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  userEmail: PropTypes.string,
  logoutLink: PropTypes.string,
  homeLink: PropTypes.string,
};

Navbar.defaultProps = {
  userEmail: "",
  logoutLink: "",
  homeLink: "",
};
