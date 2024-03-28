import React from "react";
import Historia from '../historia/Historia.jsx';
import Mision from "../mision/Mision.jsx";
import Vision from "../vision/Vision.jsx";


const Home = () => {
  return (
    <div className="home mt-4 mb-24" id="home">
      <h1 className="home_title text-2xl font-bold"><b>Home</b></h1>
      <div className="card_primary">
        <div className="section_primary_card">
          <section className="section_home bg-[#DB0F7F]">
          <Historia />
          </section>
        </div>
        <div className="section_primary_card">
          <section className="section_home  bg-[#DB0F7F]">
           <Mision />
          </section>
        </div>
        <div className="section_primary_card">
          <section className="section_home  bg-[#DB0F7F]">
            <Vision />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
