import React from "react";
import Historia from '../historia/Historia.jsx';
import Mision from "../mision/Mision.jsx";
import Vision from "../vision/Vision.jsx";


const Home = () => {
  return (
    <div className="home" id="home">
      <h1 className="home_title"><b>Home</b></h1>
      <div className="card_primary">
        <div className="section_primary_card">
          <section className="section_home">
          <Historia />
          </section>
        </div>
        <div className="section_primary_card">
          <section className="section_home">
           <Mision />
          </section>
        </div>
        <div className="section_primary_card">
          <section className="section_home">
            <Vision />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
