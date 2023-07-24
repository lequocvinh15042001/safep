/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import "./styleComponentWrapper.css";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

export const ComponentWrapper = ({
  className,
  clarityLibrary = "https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/clarity-library-solid-1.svg",
  materialSymbolsAdd = "https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/material-symbols-add-1.svg",
  to,
  to1,
}) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <div className="overlap-group-2">
        <Link to={to}>
          <img
            className="material-symbols"
            alt="Material symbols"
            src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/material-symbols-home-1.svg"
          />
        </Link>
        <img
          className="img"
          alt="Material symbols"
          src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/material-symbols-search-1.svg"
        />
        <img className="clarity-library" alt="Clarity library" src={clarityLibrary} />
        <img className="material-symbols-add" alt="Material symbols add" src={materialSymbolsAdd} />
        <div className="rectangle" />
        {/* <div className="my-courses">My courses</div> */}
        <Link className="my-courses" to={"/courses"}>
        My courses
        </Link>
        <Link className="search" to={"#"}>
          Search
        </Link>
        {/* <div className="search">Search</div> */}
        <Link className="home" to={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

ComponentWrapper.propTypes = {
  clarityLibrary: PropTypes.string,
  materialSymbolsAdd: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
};
