import React from "react";
import "./Gear.css";

const Gear: React.FC = () => {
  return (
    <div className='core'>
      <div className='teeth'></div>
      <div className='teeth t-left'></div>
      <div className='teeth t-right'></div>
      <div className='hole'></div>
    </div>
  );
};

export default Gear;
