import React from "react";

const Tablas = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-black-500">
        <thead>
          <tr className="bg-pink-700 text-white">
            <th className="border border-black-500 px-4 py-2 text-left text-sm md:text-base lg:text-lg">PLANES HOGAR</th>
            <th className="border border-black-500 px-4 py-2 text-left text-sm md:text-base lg:text-lg">Mb</th>
            <th className="border border-black-500 px-4 py-2 text-left text-sm md:text-base lg:text-lg">Costo Mensual</th>
            <th className="border border-black-500 px-4 py-2 text-left text-sm md:text-base lg:text-lg">Precio $ x Mega</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">HOGAR PRODUCTIVO</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">10</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">$25</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">$2.5</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">HOGAR PLUS</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">15</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">$36</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">$2.4</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">HOGAR SUPER</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">20</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">$45</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">$2.25</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">HOGAR ULTRA</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">25</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">$50</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base lg:text-lg">$2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tablas;
