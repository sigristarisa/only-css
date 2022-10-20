import React from "react";
import "./Panda.css";

const Panda: React.FC = () => {
  return (
    <div className='panda'>
      <div className='panda_left-eye'>
        <div className='panda_left-pupil'></div>
      </div>
      <div className='panda_right-eye'>
        <div className='panda_right-pupil'></div>
      </div>
      <div className='panda_nose'></div>
      <div className='panda_mouth'></div>
    </div>
  );
};

export default Panda;
