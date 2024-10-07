import React from "react";

const TableEmpresa = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-black-500 table-auto">
        <thead>
          <tr className="bg-pink-700 text-white">
            <th className="border border-black-500 px-4 py-2 text-sm md:text-base">PLANES EMPRESARIALES</th>
            <th className="border border-black-500 px-4 py-2 text-sm md:text-base">Mb</th>
            <th className="border border-black-500 px-4 py-2 text-sm md:text-base">Costo Mensual</th>
            <th className="border border-black-500 px-4 py-2 text-sm md:text-base">Precio $ x Mega</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">Emprendedor</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">10</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$45</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$4.5</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">Emprendedor Super</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">20</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$65</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$3.25</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">Emprendedor Ultra</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">30</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$95</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$3.17</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">Emprendedor Plus</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">35</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$100</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$2.86</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">DEDICADOS desde 5 Mb</td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base"></td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base"></td>
            <td className="border border-black-500 px-4 py-2 text-sm md:text-base">$14</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableEmpresa;
