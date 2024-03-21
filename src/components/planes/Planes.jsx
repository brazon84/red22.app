import React from "react";
import Tablas from "../tablas/Tablas.jsx";
import TableEmpresa from "../tablas/TableEmpresa.jsx";

const Planes = () => {
  return (
    <div className="flex flex-col items-center"> {/* Cambio a flex-column y centrado vertical */}
      <div className="w-full text-center mb-1"> {/* Ancho completo y centrado horizontal */}
        <h2 className="text-2xl font-bold py-3 bx-flashing">Planes disponibles</h2>
      </div>
      <div className="flex justify-center w-full"> {/* Centrado horizontal */}
        <section className="justify-center items-center gap-5">
          <div className="p-5 justify-center flex"><Tablas /></div>
          <div className="p-5 justify-center flex"><TableEmpresa /></div>
        </section>
      </div>
    </div>
  );
};

export default Planes;



