import React from "react";
import Promo1 from "../../assets/image/promo1.jpg";
import Promo2 from "../../assets/image/promo2.jpg";
import Promo3 from "../../assets/image/promo3.jpg";

const Promos = () => {
  return (
    <div>
      <div className="w-full text-center mb-4 mt-4">
        <h1 className='className="text-2xl font-bold py-3 bx-flashing text-white'>
          PROMOCIONES
        </h1>
      </div>
      <div className="flex justify-center flex-wrap">
        <section className="p-4 h-3/6 w-3/6 object-fill">
          <img className=" border-solid border-4 border-slate-300 hover:shadow-lg hover:shadow-white hover:duration-75 hover:scale-95"src={Promo2} alt="promo" />
        </section>
        <section className="p-4 h-3/6 w-3/6 object-fill">
          <img className=" border-solid border-4 border-slate-300 hover:shadow-lg hover:shadow-white hover:duration-75 hover:scale-95" src={Promo3} alt="promo" />
        </section>
        <section className="p-4 h-3/6 w-3/6 object-fill">
          <img className=" border-solid border-4 border-slate-300 hover:shadow-lg hover:shadow-white hover:duration-75 hover:scale-95" src={Promo1} alt="promo" />
        </section>
      </div>
    </div>
  );
};

export default Promos;
