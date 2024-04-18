import React from "react";
import Tablas from "../tablas/Tablas.jsx";
import TableEmpresa from "../tablas/TableEmpresa.jsx";

const Planes = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-20" id="planes">
      <div className="w-full text-center mb-4">
        <h2 className="text-2xl font-bold py-3 bx-flashing text-white">
          Planes disponibles
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="p-5">
          <Tablas />
        </div>
        <div className="p-5">
          <TableEmpresa />
        </div>
      </div>
    </div>
  );
};

export default Planes;
