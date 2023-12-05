import React from "react";
import './home.css'

const Home = () => {
return (
<div className="home" id="home">
  <h1 className="home_title">Home</h1>
  <div className="card_primary">
    <div className="section_primary_card">
      <section className="section_home">
        <h3 className="sub_title_home"> Reseña Historica</h3>
        <p className="content_home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem obcaecati inventore laborum iure
          quia officia distinctio non, dolor tempore fugit amet alias illo nihil dolorum eius animi voluptatibus
          possimus esse?
        </p>
      </section>
    </div>
    <div className="section_primary_card">
      <section className="section_home">
        <h3 className="sub_title_home">Mision</h3>
        <p className="content_home">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci assumenda fugit accusantium illo
          suscipit, non laudantium tempore est eum officiis ipsam veniam rem minima? Alias eius ipsa assumenda aliquam!
        </p>
      </section>
    </div>
    <div className="section_primary_card">
      <section className="section_home">
        <h3 className="sub_title_home">Vision</h3>
        <p className="content_home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, dolore modi cupiditate, veniam
          consectetur sint ab delectus amet eaque cumque rerum ea! Minima eveniet accusantium enim iste, nostrum atque.
          Unde.</p>
      </section>
    </div>
  </div>
</div>
);
};

export default Home;


