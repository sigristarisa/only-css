import React from "react";
import "./Cosmopolitan.css";

const Cosmopolitan: React.FC = () => {
  return (
    <div className="cosmopolitan">
      <div className="top-container">
        <div className="banner"></div>
        <div className="garnish">
          <div className="garnish-quarter"></div>
        </div>
        <div className="glass-head">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="glass-root"></div>
      </div>
      <div className="mid-container">
        <div className="glass-stem_left-curve"></div>
        <div className="glass-stem"></div>
        <div className="glass-stem_right-curve"></div>
      </div>
      <div className="bottom-container">
        <span></span>
        <span></span>
        <div className="bowl"></div>
        <div className="glass-foot"></div>
      </div>
      <div className="glass-foot_left-curve"></div>
      <div className="glass-foot_right-curve"></div>
    </div>
  );
};

export default Cosmopolitan;
