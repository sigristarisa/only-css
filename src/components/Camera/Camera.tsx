import React from "react";
import "./Camera.css";

const Camera: React.FC = () => {
  return (
    <div className='camera'>
      <div className='button'></div>
      <div className='flash'></div>
      <div className='lens'>
        <div className='inner-lens'>
          <div className='inner-lens-2'></div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
