/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import "./styleFrame.css";

import React from "react";

export const FrameHome = ({ className }) => {
  return (
    <div className={`frame ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="hashtag"># hashtag_01</div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-group">
          <div className="hashtag"># hashtag_02</div>
        </div>
      </div>
      <div className="div">
        <div className="overlap-group">
          <div className="hashtag"># hashtag_01</div>
        </div>
      </div>
    </div>
  );
};
