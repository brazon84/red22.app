import React from "react";

const TableEmpresa = () => {
  return (
    <div>
      <table className="border-collapse border border-black-500">
        <thead>
          <tr className="bg-pink-700 text-white">
            <th className="border border-black-500 px-4 py-2">
              PLANES EMPRESARIALES
            </th>
            <th className="border border-black-500 px-4 py-2">Mb</th>
            <th className="border border-black-500 px-4 py-2">Costo Mensual</th>
            <th className="border border-black-500 px-4 py-2">
              Precio $ x Mega
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">Emprendedor</td>
            <td className="border border-black-500 px-4 py-2">10</td>
            <td className="border border-black-500 px-4 py-2">$45</td>
            <td className="border border-black-500 px-4 py-2">$4.5</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">Emprendedor Super</td>
            <td className="border border-black-500 px-4 py-2">20</td>
            <td className="border border-black-500 px-4 py-2">$65</td>
            <td className="border border-black-500 px-4 py-2">$3.25</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">Emprendedor Ultra</td>
            <td className="border border-black-500 px-4 py-2">30</td>
            <td className="border border-black-500 px-4 py-2">$95</td>
            <td className="border border-black-500 px-4 py-2">$3.17</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">Emprendedor Plus</td>
            <td className="border border-black-500 px-4 py-2">35</td>
            <td className="border border-black-500 px-4 py-2">$100</td>
            <td className="border border-black-500 px-4 py-2">$2.86</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">DEDICADOS desde 5 Mb</td>
            <td className="border border-black-500 px-4 py-2"></td>
            <td className="border border-black-500 px-4 py-2"></td>
            <td className="border border-black-500 px-4 py-2">$14</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableEmpresa;
