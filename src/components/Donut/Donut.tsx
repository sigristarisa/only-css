import React from "react";
import "./Donut.css";

const Donut: React.FC = () => {
  return (
    <div className='donut'>
      <div className='donut-body'>
        <div className='face'></div>
        <div className='highlight'></div>
      </div>
    </div>
  );
};

export default Donut;
