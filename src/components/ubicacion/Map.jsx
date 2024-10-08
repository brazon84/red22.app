import React from "react";
import Local from "../../assets/image/local.jpg";
import Iframe from "./iframe/Iframe";

const Map = () => {
  return (
    <>
      <div className="flex justify-center items-center p-2">
        <h1 className="text-2xl font-bold bx-flashing text-white">Ubicanos</h1>
      </div>
      <div className="flex  justify-center items-center flex-wrap">
        <section className="p-3">
          <img
            className="h-[450px] w-[250px] border-solid border-4 border-slate-300"
            src={Local}
            alt="local"
          />
        </section>
        <Iframe />
      </div>
      <h4 className=" text-white font-bold justify-center flex items-center flex-wrap"> calle 10 con carrera 20</h4>
    </>
  );
};

export default Map;
