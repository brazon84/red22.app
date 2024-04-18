import React from 'react';
import Construccion from "../../assets/image/construccion.jpg";

const Contact = () => {
  return (
    <div className='m-5 flex justify-center mb-24'>
      <img 
        src={Construccion} 
        alt="construccion" 
        className="w-full max-w-xl h-[490px]"
      />
    </div>
  );
};

export default Contact;
